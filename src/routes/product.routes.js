const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const AuthenticationToken = require('../middleware/authenticationToken');



router.get('/products', productController.getAllProducts)
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Devuelve una lista de productos JSON.
 *     description: Devuelve una lista de productos JSON.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: NIKE
 *                       description:
 *                         type: string
 *                         description: The product's description.
 *                         example: Descripcion
 */


//router.post('/products',AuthenticationToken, productController.createProducts)
router.post('/products', productController.createProducts)

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Devuelve una lista de productos JSON.
 *     description: Devuelve una lista de productos JSON.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: NIKE
 *                       description:
 *                         type: string
 *                         description: The product's description.
 *                         example: Descripcion
 */

router.put('/products/:id',AuthenticationToken, productController.updateProducts)
/**
 * @swagger
 * /api/products/:id:
 *   put:
 *     summary: Devuelve una lista de productos JSON.
 *     description: Devuelve una lista de productos JSON.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: NIKE
 *                       description:
 *                         type: string
 *                         description: The product's description.
 *                         example: Descripcion
 */

router.delete('/products/:id',AuthenticationToken, productController.deleteProducts)
/**
 * @swagger
 * /api/products/:id:
 *   delete:
 *     summary: Devuelve una lista de productos JSON.
 *     description: Devuelve una lista de productos JSON.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: NIKE
 *                       description:
 *                         type: string
 *                         description: The product's description.
 *                         example: Descripcion
 */


module.exports = router 