const mongoose = require('mongoose');

const socialItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, default: '#' },
  image: { type: String, default: '' }
});

const socialsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // 'socials'
  links: {
    type: [socialItemSchema],
    default: [
      { name: 'Facebook', link: 'https://www.facebook.com/', image: '/assests/images/facebook.svg' },
      { name: 'X', link: 'https://x.com/', image: '/assests/images/x.svg' },
      { name: 'Instagram', link: 'https://www.instagram.com/', image: '/assests/images/insta.svg' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/', image: '/assests/images/linkedin.svg' }
    ]
  }
}, { timestamps: true });

module.exports = mongoose.model('Socials', socialsSchema);
