const express = require('express');
const router = express.Router();
const { getTechnologyContent, updateTechnologyContent } = require('../controllers/technologyController');
const uploadMiddleware = require('../utils/uploadMiddleware');

router.route('/')
  .get(getTechnologyContent)
  .post(uploadMiddleware, updateTechnologyContent);

module.exports = router;
