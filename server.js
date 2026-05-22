const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
const { seedDefaultContent } = require('./utils/seed');

const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const technologyRoutes = require('./routes/technologyRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const contactRoutes = require('./routes/contactRoutes');
const contactInquiryRoutes = require('./routes/contactInquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB().then(() => {
  // Seed initial data if DB is empty
  seedDefaultContent();
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/home', homeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/technology', technologyRoutes);
app.use('/api/token', tokenRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/contact-inquiries', contactInquiryRoutes);

// Root admin redirects to public/admin-home.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin-home.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Admin Panel is available at http://localhost:${PORT}/admin`);
});
