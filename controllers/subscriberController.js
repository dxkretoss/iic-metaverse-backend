const Subscriber = require('../models/Subscriber');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// @desc    Subscribe to newsletter
// @route   POST /api/subscribe
const subscribe = async (req, res) => {
  try {
    const { email } = req.body || {};

    if (!email || !String(email).trim()) {
      return res.status(400).json({ success: false, error: 'Email address is required.' });
    }
    if (!EMAIL_REGEX.test(String(email).trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    const emailNormalized = String(email).trim().toLowerCase();

    // Check if already exists in DB
    const existing = await Subscriber.findOne({ email: emailNormalized });
    if (existing) {
      return res.status(400).json({ success: false, error: 'This email is already subscribed.' });
    }

    await Subscriber.create({ email: emailNormalized });

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to our newsletter!'
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, error: 'This email is already subscribed.' });
    }
    console.error('Error in newsletter subscription:', error);
    res.status(500).json({ success: false, error: 'Failed to subscribe. Please try again later.' });
  }
};

// @desc    Get all newsletter subscribers
// @route   GET /api/subscribe
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// @desc    Delete subscriber
// @route   DELETE /api/subscribe/:id
const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndDelete(req.params.id);

    if (!subscriber) {
      return res.status(404).json({ success: false, error: 'Subscriber not found.' });
    }

    res.json({ success: true, message: 'Subscriber deleted successfully.' });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  subscribe,
  getSubscribers,
  deleteSubscriber
};
