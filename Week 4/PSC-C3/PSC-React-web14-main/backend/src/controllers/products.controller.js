const express = require("express");
const Product = require("../models/products.model");
const crudController = require("./crud.controller");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const items = await Product.find(req.query).lean().exec();

    return res.send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", crudController(Product).post);

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();

    if (product) {
      return res.send(product);
    } else {
      return res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
