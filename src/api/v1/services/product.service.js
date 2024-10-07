const ProductModel = require("../models/product.model");

module.exports = {
  // Get all products
  all: async () => {
    try {
      const products = await ProductModel.find({});
      return products;
    } catch (err) {
      throw err;
    }
  },
  findById: async (id) => {
    try {
      const product = await ProductModel.findById(id);
      return product;
    } catch (err) {
      throw err;
    }
  },
  create: async (product) => {
    try {
      const result = await ProductModel.create(product);
      return result.toJSON();
    } catch (err) {
      throw err;
    }
  },
  update: async (id, product) => {
    try {
      const result = await ProductModel.updateOne({ _id: id }, product);
      return result;
    } catch (err) {
      throw err;
    }
  },
  delete: async (id) => {
    try {
      const result = await ProductModel.findOneAndDelete({ _id: id });
      return result;
    } catch (err) {
      throw err;
    }
  }
};
