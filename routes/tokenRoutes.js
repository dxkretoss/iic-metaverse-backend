const express = require('express');
const router = express.Router();
const { getTokenContent, updateTokenContent } = require('../controllers/tokenController');
const uploadMiddleware = require('../utils/uploadMiddleware');

router.route('/')
  .get(getTokenContent)
  .post(uploadMiddleware, updateTokenContent);

module.exports = router;
