const express = require('express');
const router = express.Router();
const { getHomeContent, updateHomeContent } = require('../controllers/homeController');
const uploadMiddleware = require('../utils/uploadMiddleware');

router.route('/')
  .get(getHomeContent)
  .post(uploadMiddleware, updateHomeContent);

module.exports = router;
