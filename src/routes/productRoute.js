const express = require("express");
// Atribui configuração de roteamento a variável
const router = express.Router();
const productController = require("../controllers/ProductController");

// GET http://localhost:3000/product/create
router.get("/create", productController.create);

// POST http://localhost:3000/product/create
router.post("/create", productController.store);

// GET http://localhost:3000/product/edit/1
router.get("/edit/:id", productController.edit);

// PUT http://localhost:3000/product/edit/1
router.put("/edit/:id", productController.update);

// GET http://localhost:3000/product/delete/1
router.get("/delete/:id", productController.delete);

// DELETE http://localhost:3000/product/delete/1
router.delete("/delete/:id", productController.destroy);

// GET http://localhost:3000/product/1
router.get("/:id", productController.show);

// GET http://localhost:3000/product/
router.get("/", productController.index);

module.exports = router;
