const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));


// Middleware
const validateNameLength = require("./utils/validateNameLength");

// Routes
app.get("/hello/:name", 
        validateNameLength,
        (req, res, next) => {
  const message = `Hello, ${req.params.name}!`;
  res.send(message);
});

app.get("/goodbye/:name", 
        validateNameLength,
        (req, res, next) => {
  const message = `Goodbye, ${req.params.name}.`;
  res.send(message);
});

// Error handling
app.use((req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});

module.exports = app;

