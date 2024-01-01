const express = require("express");
const app = express();

const users = [
  {
    name: "Aryan",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const myKidneys = users[0].kidneys;
  const noOfkidneys = myKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfkidneys; i++) {
    if (myKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidneys = noOfkidneys - noOfHealthyKidneys;
  res.json({
    noOfkidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const healthyKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      healthyKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = healthyKidneys;
  res.json({});
});

app.listen(3000);
