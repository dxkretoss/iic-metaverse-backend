const AboutPage = require('../models/AboutPage');
const { updateContentHelper } = require('../utils/controllerHelper');

const getAboutContent = async (req, res) => {
  try {
    let content = await AboutPage.findOne({ key: 'about' });
    if (!content) {
      content = new AboutPage({ key: 'about' });
      await content.save();
    }
    res.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching about content:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const updateAboutContent = async (req, res) => {
  const jsonFields = ['galleryParagraphs', 'owner1Paragraphs', 'owner2Paragraphs', 'ecosystemParagraphs', 'spotlightParagraphs'];
  await updateContentHelper(req, res, AboutPage, 'about', jsonFields);
};

module.exports = { getAboutContent, updateAboutContent };
