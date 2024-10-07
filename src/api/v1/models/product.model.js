const mongoose = require("mongoose");
require("dotenv").config();

const { MONGOOSE_URI } = process.env;

mongoose.connect(MONGOOSE_URI);

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
  }
);

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
