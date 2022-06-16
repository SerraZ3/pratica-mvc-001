const express = require("express");
// Atribui configuração de roteamento a variável
const router = express.Router();
const productController = require("../controllers/ProductController");

// http://localhost:3000/product/
router.get("/", productController.index);

module.exports = router;
