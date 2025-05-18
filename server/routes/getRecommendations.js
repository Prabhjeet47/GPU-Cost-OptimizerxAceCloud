import express from "express";
import handleGetRecommendations from "../controllers/handleGetRecommendations.js";
const router = express.Router();

export default router.post("/", handleGetRecommendations);
