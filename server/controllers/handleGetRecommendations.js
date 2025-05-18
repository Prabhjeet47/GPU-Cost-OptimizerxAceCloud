import createEmbeddings from "../aiEngine/createEmbedding.js";

export default async function handleGetRecommendations(req, res) {
  console.log(req.body);

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

    console.log(inputEmbedding);
  } catch (err) {
    return res.status(400).json({msg: "err"});
  }

  return res.send("done");
}
