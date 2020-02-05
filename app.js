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
  },
  {
    id: 3,
    name: "Susan"
  }
];

let history = [];

app.get("/", (req, res) => {
  res.send("welcome to jumplings API");
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

app.get("/jumplings/:id", (req, res) => {
  const resultArr = data.filter(
    jumpling => jumpling.id === parseInt(req.params.id)
  );
  res.status(200).send(resultArr);
});

app.put("/jumplings/:id", (req, res) => {
  const idToFind = person => person.id === parseInt(req.params.id);
  const indexOfObjectToChange = data.findIndex(idToFind);
  data[indexOfObjectToChange].name = req.body.name;
  const resultObject = { id: parseInt(req.params.id), name: req.body.name };
  res.status(200).send([resultObject]);
});

app.delete("/jumplings/:id", (req, res) => {
  const idToFind = person => person.id === parseInt(req.params.id);
  const indexOfObjectToChange = data.findIndex(idToFind);
  const tempJumpling = data[indexOfObjectToChange];
  data.splice(indexOfObjectToChange, 1);
  res.status(200).send(tempJumpling);
});

app.post("/jumplings/presenters", (req, res) => {
  const index = Math.floor(Math.random() * data.length);
  const jumpling = data[index];
  res.status(201).send([jumpling]);
});

module.exports = app;
