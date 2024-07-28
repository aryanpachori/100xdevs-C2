import express from "express"
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();

app.post("/submit", async(req,res)=>{
    const id = req.body.id;
    const code = req.body.code;
    const lang = req.body.lang;

    await client.LPUSH("submission",JSON.stringify({id,code,lang}))
    res.status(200).send("Submission received and stored.");
})

async function startServer() {

    await client.connect();
    console.log("connected to redis")

    app.listen(3000)
    
}

startServer();