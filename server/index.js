import express from "express";
import cors from "cors";
import getRecommendationRouter from "./routes/getRecommendations.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//use middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//use routes
app.use("/api/getRecommendations", getRecommendationRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`server running on http://localhost:${port}`);
});
