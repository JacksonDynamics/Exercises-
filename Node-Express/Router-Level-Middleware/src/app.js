const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/states/:abbreviation", (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next("State abbreviation is invalid.");
  } else {
    res.send(`${abbreviation} is a nice state, I'd like to visit.`);
  }
});

app.get("/travel/:abbreviation", (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next("State abbreviation is invalid.");
  } else {
    res.send(`Enjoy your trip to ${abbreviation}!`);
  }
});

// Not-found handler
app.use((req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
});

// Error handler
app.use((err, req, res, next) => {
  res.send(`You have an error: ${err}`);
});

module.exports = app;
