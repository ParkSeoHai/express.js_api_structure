const express = require("express");
const routes = express.Router();

routes.use("/products", require("./product.route"));

module.exports = routes;
