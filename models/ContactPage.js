const mongoose = require('mongoose');

const contactpageSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // 'contact'

  contactHeroTopDescription: { type: String, default: "Let’s Build the Future Together" },
  contactHeroTitle: { type: String, default: "Get in Touch" },
  contactHeroDescription: { type: String, default: "Have questions about integration or institutional partnerships? Our 24/7 technical team is here to assist." },

  contactGlobalBadge: { type: String, default: "[ WHERE WE ARE? ]" },
  contactGlobalTitle: { type: String, default: "Our Global Presence" },
  contactGlobalParagraphs: {
    type: [String],
    default: [
      "IIC METAVERSE operates as part of an international ecosystem with a strategic presence in key global markets.",
      "Primary coordination and operations are supported through Dubai, enabling regional and international engagement."
    ]
  },

  contacthelpTitle: { type: String, default: "We’re Here to Help" },
  contacthelpParagraphs: {
    type: [String],
    default: [
      "For inquiries related to investments, partnerships, platform access, or general information, please reach out to the appropriate channel below.",
      "Our team is committed to responding promptly and providing the support you need."
    ]
  },
  contacthelpImage: { type: String, default: "/assests/images/Innovativesolutions.svg" },
  contacthelpBgImage: { type: String, default: "" },

  ContactCard1Icon: { type: String, default: "" },
  ContactCard1Title: { type: String, default: "General Inquiries" },
  ContactCard1Desc: { type: String, default: "For general questions about the IIC METAVERSE ecosystem:" },
  ContactCard1Email: { type: String, default: "info@iiccrypto.com" },

  ContactCard2Icon: { type: String, default: "" },
  ContactCard2Title: { type: String, default: "General Inquiries" },
  ContactCard2Desc: { type: String, default: "For general questions about the IIC METAVERSE ecosystem:" },
  ContactCard2Email: { type: String, default: "info@iiccrypto.com" }

}, { timestamps: true });

module.exports = mongoose.model('ContactPage', contactpageSchema);
