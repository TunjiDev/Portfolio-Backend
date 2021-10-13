const express = require('express');

const router = express.Router();

router.all(
  '/',
  async (req, res, next) => {
    res.redirect(
      'https://tunjidev.github.io/'
    );
  }
);
module.exports = router;