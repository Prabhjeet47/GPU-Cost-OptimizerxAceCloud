import createEmbeddings from "../aiEngine/createEmbedding.js";
import bestGpuScoreGenerator from "../aiEngine/bestGpuScoreGenerator.js";

export default async function handleGetRecommendations(req, res) {
  if (
    !req.body.country ||
    !req.body.os ||
    !req.body.vcpus ||
    !req.body.ram ||
    !req.body.region ||
    !req.body.budget
  ) {
    return res.status(400).json("please enter all parameters");
  }

  try {
    const text = `country ${req.body.country} os ${req.body.os} vcpus ${req.body.vcpus} ram ${req.body.ram} region ${req.body.region} budget ${req.body.budget}`;

    const inputEmbedding = await createEmbeddings(text);

    const bestGpu = await bestGpuScoreGenerator(inputEmbedding)
      .then((ans) => {
        console.log(ans);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({msg: "err"});
  }

  return res.send("done");
}
