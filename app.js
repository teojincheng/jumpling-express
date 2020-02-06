const express = require("express");
const app = express();
//const data = require("./data");
app.use(express.json());

const jumplingRouter = require("./routes/jumpling.route");
const presenterRouter = require("./routes/presenter.route");

app.get("/", (req, res) => {
  res.send("welcome to jumplings API");
});

app.use("/jumplings/presenters", presenterRouter);
app.use("/jumplings", jumplingRouter);

module.exports = app;
