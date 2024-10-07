const { isValidObjectId } = require("mongoose");

const service = require("../services/product.service");

module.exports = {
  // Get all products
  getAll: async (req, res, next) => {
    try {
      const products = await service.all();
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json("Server error: " + err);
    }
  },
  findById: async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!isValidObjectId(id)) {
        throw "Id is not valid";
      }

      const product = await service.findById(id);

      if (!product) throw "Product not found";

      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json("Server error: " + err);
    }
  },
  create: async (req, res, next) => {
    try {
      const product = {
        name: req.body.name,
        description: req.body.desc,
        price: req.body.price,
      };

      const result = await service.create(product);
      return res.status(201).json({
        message: "Create new product success",
        data: result,
      });
    } catch (err) {
      return res.status(500).json("Server error: " + err);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;

      if (!isValidObjectId(id)) {
        throw "Id is not valid";
      }

      let product = await service.findById(id);
      if (!product) throw "Product not found";

      product = {
        name: req.body.name,
        description: req.body.desc,
        price: req.body.price,
      };

      const result = await service.update(id, product);
      return res.status(200).json({
        message: "Update product success",
        data: result,
      });
    } catch (err) {
      return res.status(500).json("Server error: " + err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      if (!isValidObjectId(id)) {
        throw "Id is not valid";
      }

      let product = await service.findById(id);
      if (!product) throw "Product not found";

      const result = await service.delete(id);
      return res.status(200).json({
        message: "Delete product success",
        data: result,
      });
    } catch (err) {
      return res.status(500).json("Server error: " + err);
    }
  },
};
