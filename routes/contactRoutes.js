const express = require('express');
const router = express.Router();
const { getContactContent, updateContactContent } = require('../controllers/contactController');
const uploadMiddleware = require('../utils/uploadMiddleware');

router.route('/')
  .get(getContactContent)
  .post(uploadMiddleware, updateContactContent);

module.exports = router;
