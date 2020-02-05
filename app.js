const express = require("express");
const app = express();
//const data = require("./data");
app.use(express.json());

let data = [
  {
    id: 1,
    name: "Steve"
  },
  {
    id: 2,
    name: "Peter"
  }
];

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/jumplings", (req, res) => {
  res.status(200).send(data);
});

app.post("/jumplings", (req, res) => {
  const persondata = req.body;
  const person = {};
  person.name = req.body.name;
  person.id = req.body.id;
  data.push(person);
  res.status(201).send([req.body]);
});

module.exports = app;
