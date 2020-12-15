const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

router.post('/', controller.createOrder);

module.exports = router;