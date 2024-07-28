import { createClient } from "redis";

const client = createClient();

async function startWorker() {
  await client.connect();
  console.log("Worker connected to Redis.");

  while (true) {
    const res = await client.brPop("submission", 0);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(res);
  }
}

startWorker();
