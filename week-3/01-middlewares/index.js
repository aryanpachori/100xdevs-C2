const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());



const User = mongoose.model('Users', {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const exisitngUser = await User.findOne({ email: username });
  if (exisitngUser) {
    return res.status(400).send("Email already registered");
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({
    msg: "User created successfully ",
  });
});
app.listen(3000);
