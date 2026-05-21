const mongoose = require('mongoose');

const contactInquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 200 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 320 },
  company: { type: String, default: '', trim: true, maxlength: 200 },
  inquiryType: { type: String, default: '', trim: true, maxlength: 100 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  status: { type: String, enum: ['new', 'read'], default: 'new' }
}, { timestamps: true });

const ContactInquiry = mongoose.model('ContactInquiry', contactInquirySchema);

module.exports = ContactInquiry;
