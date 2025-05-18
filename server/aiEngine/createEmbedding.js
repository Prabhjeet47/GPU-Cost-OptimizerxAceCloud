import {pipeline} from "@xenova/transformers";

const extractor = await pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6-v2"
);

export default async function createEmbeddings(text) {
  const embedding = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });

  return embedding.data;
}
