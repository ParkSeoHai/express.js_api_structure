const express = require("express");
const app = express();

// middlewares
app.use(express.json());

// use router
app.use(require("./api/routes"));

module.exports = app;
