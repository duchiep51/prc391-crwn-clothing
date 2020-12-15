const express = require('express');
const router = express.Router();
const controller = require('../controllers/category');

router.get('/', controller.getAllCategory);

router.post('/create-category', controller.createCategory);

module.exports = router;