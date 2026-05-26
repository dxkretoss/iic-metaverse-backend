const Socials = require('../models/Socials');

const getSocials = async (req, res) => {
  try {
    let socials = await Socials.findOne({ key: 'socials' });
    if (!socials) {
      socials = new Socials({ key: 'socials' });
      await socials.save();
    }
    res.json({ success: true, data: socials.links });
  } catch (error) {
    console.error("Error fetching socials content:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const updateSocials = async (req, res) => {
  try {
    let socials = await Socials.findOne({ key: 'socials' });
    if (!socials) {
      socials = new Socials({ key: 'socials' });
    }

    const currentLinks = socials.links || [];
    const newLinks = [];

    for (let i = 0; i < 4; i++) {
      const defaultName = currentLinks[i] ? currentLinks[i].name : `Social ${i + 1}`;
      const defaultLink = currentLinks[i] ? currentLinks[i].link : '#';
      const defaultImage = currentLinks[i] ? currentLinks[i].image : '';

      let name = req.body[`name${i}`] !== undefined ? req.body[`name${i}`] : defaultName;
      let link = req.body[`link${i}`] !== undefined ? req.body[`link${i}`] : defaultLink;
      let image = defaultImage;

      let uploadedImageFile = null;
      if (req.files) {
        uploadedImageFile = req.files.find(f => f.fieldname === `image${i}`);
      }

      if (uploadedImageFile) {
        image = "/uploads/" + uploadedImageFile.filename;
      } else if (req.body[`remove_image${i}`] === 'true') {
        image = '';
      }

      newLinks.push({ name, link, image });
    }

    socials.links = newLinks;
    await socials.save();

    res.json({ success: true, message: "Social links updated successfully!", data: socials.links });
  } catch (error) {
    console.error("Error updating socials content:", error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
};

module.exports = { getSocials, updateSocials };
