const express = require('express');
const router = express.Router();
const { login } = require('../controllers/adminAuthController');

// @route   POST /api/admin/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', login);

module.exports = router;
