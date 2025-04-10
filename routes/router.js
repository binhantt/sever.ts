const express = require('express');
const router = express.Router();
const { userController, productController } = require('../controllers');
router.get('/users',userController.getAllUsers);
router.get('/products', productController.getAllProducts);
module.exports = router;

