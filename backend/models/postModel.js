const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  trend: {
    type: "boolean",
  },
  imageURL: {
    type: "String",
    required: true,
  },
  name: {
    type: "String",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },
  rating: {
    type: "Number",
  },
  numReviews: {
    type: "Number",
  },
  category: {
    type: "String",
    required: true,
  },
  brand: {
    type: "String",
    required: true,
  },
  color: {
    type: "String",
    required: true,
  },
  size: {
    type: [String],
    default: [],
    required: true,
  },
  description1: {
    type: "String",
    required: true,
  },
  description2: {
    type: "String",
  },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = {
  postModel
}
