export default function cosineSimilarity(vec1, vec2) {
  const dot = vec1.reduce((acc, val, i) => acc + val * vec2[i], 0);
  const normA = Math.sqrt(vec1.reduce((acc, val) => acc + val * val, 0));
  const normB = Math.sqrt(vec2.reduce((acc, val) => acc + val * val, 0));
  return dot / (normA * normB);
}
