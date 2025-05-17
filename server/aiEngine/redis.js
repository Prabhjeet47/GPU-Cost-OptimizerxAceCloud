const redis = require("redis");
require("dotenv").config();

async function redisWrapperFunction() {
  const client = redis.createClient({
    url: process.env.REDIS_URL,
  });

  await client
    .connect()
    .then(() => {
      console.log("redis connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });

  return client;
}

module.exports = redisWrapperFunction;
