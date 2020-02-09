const express = require("express");
const app = express();
//const data = require("./data");
app.use(express.json());

const jumplingRouter = require("./routes/jumpling.route");
const presenterRouter = require("./routes/presenter.route");

const listOfEndPoints = {
  "0": "GET    /",
  "1": "GET    /jumplings",
  "2": "POST   /jumplings",
  "3": "GET /jumplings/:id",
  "4": "PUT /jumplings/:id",
  "5": "DELETE /jumplings/:id",
  "6": "-----------------------",
  "7": "POST   /jumplings/presenters",
  "8": "GET    /jumplings/presenters"
};

app.get("/", (req, res, next) => {
  res.send(listOfEndPoints);
});

app.use("/jumplings/presenters", presenterRouter);
app.use("/jumplings", jumplingRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode);
  res.send(`Error : ${err}<br>
  Status code : ${err.statusCode} <br>
    Error stack: ${err.stack}`);
});

module.exports = app;
