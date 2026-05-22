const TechnologyPage = require('../models/TechnologyPage');
const { updateContentHelper } = require('../utils/controllerHelper');

const getTechnologyContent = async (req, res) => {
  try {
    let content = await TechnologyPage.findOne({ key: 'technology' });
    if (!content) {
      content = new TechnologyPage({ key: 'technology' });
      await content.save();
    }
    res.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching technology content:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const updateTechnologyContent = async (req, res) => {
  const jsonFields = ['techCard1Paragraphs', 'techCard2TopParagraphs', 'techCard2BottomParagraphs', 'techCard3Paragraphs', 'techSmartCheckpoints', 'techSecuritySlider2FeatureList', 'techCostParagraphs'];
  await updateContentHelper(req, res, TechnologyPage, 'technology', jsonFields);
};

module.exports = { getTechnologyContent, updateTechnologyContent };
