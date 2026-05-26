const express = require('express');
const router = express.Router();
const { getSocials, updateSocials } = require('../controllers/socialsController');
const uploadMiddleware = require('../utils/uploadMiddleware');

router.route('/')
  .get(getSocials)
  .post(uploadMiddleware, updateSocials);

module.exports = router;
