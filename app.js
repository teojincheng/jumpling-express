const express = require("express");
const app = express();
//const data = require("./data");
//app.use(express.json());

const jumplingRouter = require("./jumpling");

let history = [];

app.get("/", (req, res) => {
  res.send("welcome to jumplings API");
});

app.post("/jumplings/presenters", (req, res) => {
  const index = Math.floor(Math.random() * data.length);
  let jumpling = data[index];
  history.push(jumpling);
  res.status(201).send([jumpling]);
});

app.get("/jumplings/presenters", (req, res) => {
  res.status(200).send(history);
});

app.use("/jumplings", jumplingRouter);

module.exports = app;
