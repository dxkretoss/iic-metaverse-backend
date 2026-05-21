const ContactInquiry = require('../models/ContactInquiry');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// @desc    Submit contact form (public)
// @route   POST /api/contact-inquiries
const createInquiry = async (req, res) => {
  try {
    const { fullName, email, company, inquiryType, message } = req.body || {};

    if (!fullName || !String(fullName).trim()) {
      return res.status(400).json({ success: false, error: 'Full name is required.' });
    }
    if (!email || !String(email).trim()) {
      return res.status(400).json({ success: false, error: 'Email address is required.' });
    }
    if (!EMAIL_REGEX.test(String(email).trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }
    if (!message || !String(message).trim()) {
      return res.status(400).json({ success: false, error: 'Message is required.' });
    }

    const inquiry = await ContactInquiry.create({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      company: company ? String(company).trim() : '',
      inquiryType: inquiryType ? String(inquiryType).trim() : '',
      message: String(message).trim()
    });

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully. Our team will contact you soon.',
      data: { id: inquiry._id }
    });
  } catch (error) {
    console.error('Error creating contact inquiry:', error);
    res.status(500).json({ success: false, error: 'Failed to submit inquiry. Please try again later.' });
  }
};

// @desc    List all contact form submissions (admin)
// @route   GET /api/contact-inquiries
const getInquiries = async (req, res) => {
  try {
    const inquiries = await ContactInquiry.find()
      .sort({ createdAt: -1 })
      .lean();

    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// @desc    Mark inquiry as read
// @route   PATCH /api/contact-inquiries/:id/read
const markInquiryRead = async (req, res) => {
  try {
    const inquiry = await ContactInquiry.findByIdAndUpdate(
      req.params.id,
      { status: 'read' },
      { new: true }
    );

    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found.' });
    }

    res.json({ success: true, data: inquiry });
  } catch (error) {
    console.error('Error updating contact inquiry:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/contact-inquiries/:id
const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await ContactInquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found.' });
    }

    res.json({ success: true, message: 'Inquiry deleted successfully.' });
  } catch (error) {
    console.error('Error deleting contact inquiry:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  markInquiryRead,
  deleteInquiry
};
