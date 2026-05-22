const express = require('express');
const router = express.Router();
const { getAboutContent, updateAboutContent } = require('../controllers/aboutController');
const uploadMiddleware = require('../utils/uploadMiddleware');

router.route('/')
  .get(getAboutContent)
  .post(uploadMiddleware, updateAboutContent);

module.exports = router;
