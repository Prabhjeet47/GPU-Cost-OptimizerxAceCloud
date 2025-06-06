import express from "express";
import cors from "cors";
import helmet from "helmet";
import getRecommendationRouter from "./routes/getRecommendations.js";
import ratelimiter from "./utils/rateLimit.js";
// import authorizationMiddleware from "./middlewares/authorization.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//use middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://gpu-cost-optimizer.vercel.app",
  })
);
app.use(helmet());
app.use(express.urlencoded({extended: true}));

//use routes with rate limiting
ratelimiter().then((rlm) => {
  app.use("/api/getRecommendations", rlm, getRecommendationRouter);

  app.get("/ping", (req, res) => {
    return res.send("pong"); //ping request for uptimerobot every 5min to keep server warm
  });

  app.get("/protected", (req, res) => {
    console.log("✅access granted");
    return res.json({msg: "✅access granted"});
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(`server running on http://localhost:${port}`);
  });
});
