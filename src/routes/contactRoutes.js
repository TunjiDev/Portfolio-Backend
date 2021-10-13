const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.post('/', portfolioController.contactMe);

module.exports = router;