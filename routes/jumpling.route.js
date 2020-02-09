const express = require("express");
const router = express.Router();
//router.use(express.json());
const JumplingController = require("../controllers/jumpling.controller");

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

router.get("/", JumplingController.getAllJumpling);

/**
 * function(middleware) for checking JSON type.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const requireJsonContent = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    res.status(400).send("Server wants application/json!");
  } else {
    next();
  }
};

router.post("/", requireJsonContent, JumplingController.insertJumpling);

/**
 * parameter processing
 */
router.param("id", (req, res, next, id) => {
  req.jumplingId = id;
  next();
});

router.get("/:id", JumplingController.getJumplingById);

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
