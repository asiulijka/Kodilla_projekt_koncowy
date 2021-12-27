const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');


router.get('/', ProductController.getMain);
router.get('/products', ProductController.getMain);
router.get('/products/:id', ProductController.getOne);
// router.get('/about', ProductController.getMain);
// router.get('/cart', ProductController.getAll);
router.get('/order', ProductController.getOrder);
router.post('/order', ProductController.postOrder);


module.exports = router;