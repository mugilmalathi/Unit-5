const express = require("express");

const connect = require("./configs/db");

const productController = require("./controllers/products.controller");
 
const app = express(); 
  

app.use(express.json());

app.use("/products", productController);

app.listen(2803, async function () {
  try {
    await connect();
    console.log("listening on port 2803");
  } catch (e) {
    console.log(e.message);
  }
});
