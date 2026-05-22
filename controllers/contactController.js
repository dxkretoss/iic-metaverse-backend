const ContactPage = require('../models/ContactPage');
const { updateContentHelper } = require('../utils/controllerHelper');

const getContactContent = async (req, res) => {
  try {
    let content = await ContactPage.findOne({ key: 'contact' });
    if (!content) {
      content = new ContactPage({ key: 'contact' });
      await content.save();
    }
    res.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching contact content:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const updateContactContent = async (req, res) => {
  const jsonFields = ['contacthelpParagraphs', 'contactGlobalParagraphs'];
  await updateContentHelper(req, res, ContactPage, 'contact', jsonFields);
};

module.exports = { getContactContent, updateContactContent };
