const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Please enter all fields.' });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, error: 'Invalid admin credentials.' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: 'Invalid admin credentials.' });
    }

    const payload = {
      id: admin._id,
      email: admin.email
    };

    const jwtSecret = process.env.JWT_SECRET || 'metaverse_default_jwt_secret_key_123456';
    // Generate token valid for 7 days
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Logged in successfully!',
      token,
      admin: {
        id: admin._id,
        email: admin.email
      }
    });

  } catch (error) {
    console.error("Login controller error:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = { login };
