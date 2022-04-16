const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://mugilarasan:mugil@cluster0.f7ofw.mongodb.net/products");
};

module.exports = connect;
