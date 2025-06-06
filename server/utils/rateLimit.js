import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redisWrapperFunction from "../aiEngine/redis.js";

export default async function ratelimiter() {
  const client = await redisWrapperFunction();

  return rateLimit({
    windowMs: 1000 * 60 * 10, //every 10mins
    max: 5, //20 requests
    store: new RedisStore({
      sendCommand: (...args) => client.sendCommand(args),
      prefix: "GPU-Data:rate-limiting:",
    }),
    message: {
      status: 429,
      error: "Too many requests, please wait 10 minutes",
    },
    standardHeaders: true,
  });
}
