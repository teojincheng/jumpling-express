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
