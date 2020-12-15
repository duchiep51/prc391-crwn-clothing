const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router.get('/', controller.getAllProducts);

router.post('/create', controller.createProduct);

router.patch('/:id', controller.editProduct);

router.delete('/:id', controller.deleteProduct);

module.exports = router;