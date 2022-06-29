const express = require("express");
// Atribui configuração de roteamento a variável
const router = express.Router();
const productController = require("../controllers/ProductController");

// http://localhost:3000/product/create
router.get("/create", productController.create);

// http://localhost:3000/product/create
router.post("/create", productController.store);

// http://localhost:3000/product/edit/1
router.get("/edit/:id", productController.edit);

// http://localhost:3000/product/1
router.get("/:id", productController.show);

// http://localhost:3000/product/
router.get("/", productController.index);

module.exports = router;
