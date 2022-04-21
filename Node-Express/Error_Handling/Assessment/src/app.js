const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// Routes
app.get("/send/:message", (req, res, next) => {
  const message = req.params.message;
  if (message.length < 3) return next("Your message is too short!");
  res.send(`Your message: ${message}`);
});

// Not-found handler
app.use((req, res, next) => {
  res.send(`An error occurred: Could not find route.`);
});

// Error handler
app.use((err, req, res, next) => {
  res.send(`An error occurred: ${err}`);
});


module.exports = app;

