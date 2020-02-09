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

exports.getAllJumpling = (req, res) => {
  res.status(200).send(data);
};

exports.insertJumpling = (req, res) => {
  const persondata = req.body;
  const person = {};
  person.name = req.body.name;
  person.id = req.body.id;
  data.push(person);
  res.status(201).send([req.body]);
};

exports.getJumplingById = (req, res) => {
  const jumplingId = req.jumplingId;
  const resultArr = data.filter(
    jumpling => jumpling.id === parseInt(jumplingId)
  );
  res.status(200).send(resultArr);
};

exports.updateJumpling = (req, res) => {
  const idToFind = person => person.id === parseInt(req.params.id);
  const indexOfObjectToChange = data.findIndex(idToFind);
  data[indexOfObjectToChange].name = req.body.name;
  const resultObject = { id: parseInt(req.params.id), name: req.body.name };
  res.status(200).send([resultObject]);
};
