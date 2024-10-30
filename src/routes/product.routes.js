const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const AuthenticationToken = require('../middleware/authenticationToken');


router.get('/products', productController.getAllProducts)


//router.post('/products',AuthenticationToken, productController.createProducts)
router.post('/products', productController.createProducts)

router.put('/products/:id',AuthenticationToken, productController.updateProducts)

router.delete('/products/:id',AuthenticationToken, productController.deleteProducts)


module.exports = router 