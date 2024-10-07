const express = require("express");
const routes = express.Router();

const controller = require("../controllers/product.controller");

// Get all products
routes.get("/", controller.getAll);

// Get product by id
routes.get("/:id", controller.findById);

// Add product
routes.post("/", controller.create);

// Update product
routes.put("/:id", controller.update);

// Delete product
routes.delete("/:id", controller.delete);

module.exports = routes;
