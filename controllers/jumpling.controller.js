const Joi = require("@hapi/joi");

const validateJumpling = jumpling => {
  const schema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string()
      .min(3)
      .required()
  });
  return schema.validate(jumpling);
};
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

exports.insertJumpling = (req, res, next) => {
  const incomingData = req.body;
  const validation = validateJumpling(incomingData);
  if (validation.error) {
    const error = new Error(validation.error.details[0].message);
    // 400 Bad Request
    error.statusCode = 400;
    next(error);
  }
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

exports.updateJumpling = (req, res, next) => {
  const incomingData = req.body;
  const validation = validateJumpling(incomingData);
  if (validation.error) {
    const error = new Error(validation.error.details[0].message);
    // 400 Bad Request
    error.statusCode = 400;
    next(error);
  }
  const jumplingId = req.jumplingId;
  const idToFind = person => person.id === parseInt(jumplingId);
  const indexOfObjectToChange = data.findIndex(idToFind);
  data[indexOfObjectToChange].name = req.body.name;
  const resultObject = { id: parseInt(req.params.id), name: req.body.name };
  res.status(200).send([resultObject]);
};
