const express = require('express');
const router = express.Router();
const emailController = require('../server/controllers/emailController')

router.post('/send', emailController.sendEmail);

module.exports = router;
