//run once script for generating GPU data embeddings (vector)
import {pipeline} from "@xenova/transformers";
import redisWrapperFunction from "./redis.js";
import gpudata from "../utils/gpu_data.js";

const extractor = await pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6-v2"
);

function text(gpu) {
  return `country ${gpu.country} os ${gpu.operating_system} vcpus ${gpu.vcpus} ram ${gpu.ram} region ${gpu.region} budget ${gpu.price_per_month}`;
}

async function createEmbeddings(text) {
  const embedding = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });

  return embedding.data;
}

async function main() {
  const client = await redisWrapperFunction();
  let count = 1;
  for (let i = 0; i < gpudata.length; i++) {
    const gputext = text(gpudata[i]);
    const embedding = await createEmbeddings(gputext);
    await client.HSET(`GPU-Data:gpus:gpu-${count}`, {
      gpu: JSON.stringify(gpudata[i]),
      text: gputext,
      embedding: JSON.stringify(embedding),
    });
    count++;
  }

  await client.quit();
  console.log("redis task done");
}

main();
