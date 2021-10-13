const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.post('/contact-me', portfolioController.contactMe);

module.exports = router;