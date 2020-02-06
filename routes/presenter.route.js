const express = require("express");
const router = express.Router();

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

router.post("/", (req, res) => {
  const index = Math.floor(Math.random() * data.length);
  let jumpling = data[index];
  history.push(jumpling);
  res.status(201).send([jumpling]);
});

router.get("/", (req, res) => {
  res.status(200).send(history);
});

module.exports = router;
