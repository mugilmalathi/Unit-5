const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    image: { type: String, require: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
