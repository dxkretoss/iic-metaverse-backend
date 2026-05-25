const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'Authorization denied. Token is missing.' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, error: 'Authorization denied. Token is empty.' });
    }

    const jwtSecret = process.env.JWT_SECRET || 'metaverse_default_jwt_secret_key_123456';
    const decoded = jwt.verify(token, jwtSecret);
    
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Auth Verification Error:", error.message);
    res.status(401).json({ success: false, error: 'Session expired or token is invalid. Please log in again.' });
  }
};

module.exports = auth;
