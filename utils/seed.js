const HomePage = require('../models/HomePage');
const AboutPage = require('../models/AboutPage');
const TechnologyPage = require('../models/TechnologyPage');
const TokenPage = require('../models/TokenPage');
const ContactPage = require('../models/ContactPage');

const getModelByKey = (key) => {
  switch (key) {
    case 'home': return HomePage;
    case 'about': return AboutPage;
    case 'technology': return TechnologyPage;
    case 'token': return TokenPage;
    case 'contact': return ContactPage;
    default: return HomePage;
  }
};

const seedDefaultContent = async () => {
  const pageKeys = ['home', 'about', 'technology', 'token', 'contact'];
  try {
    for (const key of pageKeys) {
      const Model = getModelByKey(key);
      let content = await Model.findOne({ key });
      if (!content) {
        content = new Model({ key });
        await content.save();
        console.log("Seeded default '" + key + "' page content into database.");
      } else {
        // Automatic Schema Migration: Save missing fields to existing documents
        let updated = false;
        const tempDoc = new Model({ key });
        
        for (const field of Object.keys(tempDoc._doc)) {
          if (content[field] === undefined && field !== '_id' && field !== '__v') {
            content[field] = tempDoc[field];
            updated = true;
          }
        }
        
        if (updated) {
          await content.save();
          console.log("Migrated and populated missing schema fields for '" + key + "' in MongoDB.");
        }
      }
    }
  } catch (err) {
    console.error('Error seeding default pages content:', err);
  }
};

module.exports = { seedDefaultContent };
