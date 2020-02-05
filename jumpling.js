const express = require("express");
const router = express.Router();
router.use(express.json());

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

router.get("/", (req, res) => {
  res.status(200).send(data);
});

router.post("/", (req, res) => {
  const persondata = req.body;
  const person = {};
  person.name = req.body.name;
  person.id = req.body.id;
  data.push(person);
  res.status(201).send([req.body]);
});

router.get("/:id", (req, res) => {
  const resultArr = data.filter(
    jumpling => jumpling.id === parseInt(req.params.id)
  );
  res.status(200).send(resultArr);
});

router.put("/:id", (req, res) => {
  const idToFind = person => person.id === parseInt(req.params.id);
  const indexOfObjectToChange = data.findIndex(idToFind);
  data[indexOfObjectToChange].name = req.body.name;
  const resultObject = { id: parseInt(req.params.id), name: req.body.name };
  res.status(200).send([resultObject]);
});

router.delete("/:id", (req, res) => {
  const idToFind = person => person.id === parseInt(req.params.id);
  const indexOfObjectToChange = data.findIndex(idToFind);
  const tempJumpling = data[indexOfObjectToChange];
  data.splice(indexOfObjectToChange, 1);
  res.status(200).send(tempJumpling);
});

module.exports = router;
