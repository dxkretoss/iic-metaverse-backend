const HomePage = require('../models/HomePage');
const { updateContentHelper } = require('../utils/controllerHelper');

const getHomeContent = async (req, res) => {
  try {
    let content = await HomePage.findOne({ key: 'home' });
    if (!content) {
      content = new HomePage({ key: 'home' });
      await content.save();
    }
    res.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching home content:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const updateHomeContent = async (req, res) => {
  const jsonFields = ['tickerCoins'];
  await updateContentHelper(req, res, HomePage, 'home', jsonFields);
};

module.exports = { getHomeContent, updateHomeContent };
