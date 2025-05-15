const express = require("express");
const cors = require("cors");
const getRecommendationRouter = require("./routes/getRecommendations.js");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//use middlewares
app.use(express.json());
app.use(cors());

//use routes
app.use("/api/getRecommendations", getRecommendationRouter);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
