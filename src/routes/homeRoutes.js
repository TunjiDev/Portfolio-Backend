const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');


router.route('/')
  .get(portfolioController.getPortfolioPage);

module.exports = router;