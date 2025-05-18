import redisWrapperFunction from "./redis.js";
import cosineSimilarity from "./cosineSimilarity.js";

export default async function bestGpuScoreGenerator(inputEmbedding) {
  const client = await redisWrapperFunction();

  const allEmbeddings = await client.HGETALL("GPU-Data:gpuEmbeddings");

  let bestEmbeddingKey = null;
  let bestScore = -1;

  for (const [embeddingID, embeddingText] of Object.entries(allEmbeddings)) {
    const gpuembedding = JSON.parse(embeddingText);
    const score = cosineSimilarity(inputEmbedding, gpuembedding);
    if (score > bestScore) {
      bestScore = score;
      bestEmbeddingKey = embeddingID;
    }
  }

  console.log(bestScore);

  if (!bestEmbeddingKey) {
    return "No suitable GPU found";
  }

  const gpuId = bestEmbeddingKey.split("-")[1];
  const bestGpuJSON = await client.HGET(`GPU-Data:gpus:gpu-${gpuId}`, "gpu");
  const bestGpu = JSON.parse(bestGpuJSON);

  await client.quit();

  return bestGpu;
}
