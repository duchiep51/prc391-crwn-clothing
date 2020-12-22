const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router.get('/', (req, res, next) => {
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');

    next();
} , controller.getAllProducts);

router.post('/create', controller.createProduct);

router.patch('/:id', controller.editProduct);

router.delete('/:id', controller.deleteProduct);

module.exports = router;