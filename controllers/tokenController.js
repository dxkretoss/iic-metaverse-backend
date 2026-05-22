const TokenPage = require('../models/TokenPage');
const { updateContentHelper } = require('../utils/controllerHelper');

const getTokenContent = async (req, res) => {
  try {
    let content = await TokenPage.findOne({ key: 'token' });
    if (!content) {
      content = new TokenPage({ key: 'token' });
      await content.save();
    }
    res.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching token content:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const updateTokenContent = async (req, res) => {
  const jsonFields = [
    'tokenSystemSlide1DescList', 'tokenSystemSlide2DescList', 'tokenSystemSlide3DescList',
    'tokenSystemSlide4DescList', 'tokenSystemSlide4FeatureList', 'tokenSystemSlide5DescList',
    'tokenSystemSlide5HeadingDescList', 'tokenSystemSlide6DescList', 'tokenSystemSlide6FeatureList',
    'tokenIntegrationSlide1DescList', 'tokenIntegrationSlide2DescList', 'tokenIntegrationSlide3DescList',
    'tokenFutureDescList', 'tokenSmartCoinsTab1DescList', 'tokenSmartCoinsTab2DescList',
    'tokenSmartCoinsTab2F1List', 'tokenSmartCoinsTab2F2List'
  ];
  await updateContentHelper(req, res, TokenPage, 'token', jsonFields);
};

module.exports = { getTokenContent, updateTokenContent };
