const HomePage = require('../models/HomePage');
const AboutPage = require('../models/AboutPage');
const TechnologyPage = require('../models/TechnologyPage');
const TokenPage = require('../models/TokenPage');
const ContactPage = require('../models/ContactPage');
const Socials = require('../models/Socials');
const Admin = require('../models/Admin');

const getModelByKey = (key) => {
  switch (key) {
    case 'home': return HomePage;
    case 'about': return AboutPage;
    case 'technology': return TechnologyPage;
    case 'token': return TokenPage;
    case 'contact': return ContactPage;
    case 'socials': return Socials;
    default: return HomePage;
  }
};

const seedDefaultContent = async () => {
  // Seed admin user
  try {
    const adminExists = await Admin.findOne({ email: 'admin@metaverse.in' });
    if (!adminExists) {
      const admin = new Admin({
        email: 'admin@metaverse.in',
        password: 'Metaverse@123'
      });
      await admin.save();
      console.log("Seeded default admin credentials successfully.");
    }
  } catch (err) {
    console.error('Error seeding admin user:', err);
  }

  const pageKeys = ['home', 'about', 'technology', 'token', 'contact', 'socials'];
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
