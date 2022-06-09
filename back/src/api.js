const express = require("express");

const app = express.Router();

app.post("/connect", (req, res) => {
  res.status(401).end();
});

module.exports = app;
