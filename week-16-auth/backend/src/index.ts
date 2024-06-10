const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Myjwtsecret";
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(express.json());
app.use(cookieParser);
app.use(
  cors({
    Credential: true,
    origin: "http://localhost:5173/",
  })
);
// @ts-ignore
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = jwt.sign({ id: 1 }, JWT_SECRET);
  res.cookies("token", token);
  res.send("Logged in!");
});

app.get("/user", (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, JWT_SECRET);
  res.send({
    userId: decoded.id,
  });
});
// @ts-ignore
app.post("/logout", (req, res) => {
  res.cookie("token", "ads");
  res.json({
    message: "Logged out!",
  });
});

app.listen(3000);
