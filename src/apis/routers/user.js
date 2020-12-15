const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

// router.get('/me', controller.getProfile);

router.post('/sign-up', controller.signUp);

router.post('/sign-in', controller.signIn);

module.exports = router;