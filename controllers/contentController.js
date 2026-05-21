const PageContent = require('../models/PageContent');

// @desc    Get page content by page key
// @route   GET /api/content/:pageKey
// @access  Public
const getContent = async (req, res) => {
  try {
    const pageKey = req.params.pageKey || 'home';
    let content = await PageContent.findOne({ key: pageKey });
    
    if (!content) {
      content = new PageContent({ key: pageKey });
      await content.save();
    }
    
    res.json({ success: true, data: content });
  } catch (error) {
    console.error(`Error fetching content for ${req.params.pageKey}:`, error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// @desc    Update page content by page key (Supports files)
// @route   POST /api/content/:pageKey
// @access  Public
const updateContent = async (req, res) => {
  try {
    const pageKey = req.params.pageKey || 'home';
    let content = await PageContent.findOne({ key: pageKey });
    
    if (!content) {
      content = new PageContent({ key: pageKey });
    }

    const fields = req.body;

    // Dynamically update fields that are provided in the request body
    Object.keys(fields).forEach(field => {
      if (fields[field] !== undefined && field !== 'key') {
        if (field === 'tickerCoins') {
          try {
            content.tickerCoins = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic tickerCoins JSON:', parseErr);
          }
        } else if (field === 'galleryParagraphs') {
          try {
            content.galleryParagraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic galleryParagraphs JSON:', parseErr);
          }
        } else if (field === 'owner1Paragraphs') {
          try {
            content.owner1Paragraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic owner1Paragraphs JSON:', parseErr);
          }
        } else if (field === 'owner2Paragraphs') {
          try {
            content.owner2Paragraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic owner2Paragraphs JSON:', parseErr);
          }
        } else if (field === 'ecosystemParagraphs') {
          try {
            content.ecosystemParagraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic ecosystemParagraphs JSON:', parseErr);
          }
        } else if (field === 'spotlightParagraphs') {
          try {
            content.spotlightParagraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic spotlightParagraphs JSON:', parseErr);
          }
        } else if (field === 'contacthelpParagraphs') {
          try {
            content.contacthelpParagraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic contacthelpParagraphs JSON:', parseErr);
          }
        } else if (field === 'contactGlobalParagraphs') {
          try {
            content.contactGlobalParagraphs = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic contactGlobalParagraphs JSON:', parseErr);
          }
        } else if (!field.startsWith('featureTitle') && !field.startsWith('remove_')) { // skip featureTitles & remove flags
          content[field] = fields[field];
        }
      }
    });

    // Handle Explicit Image Removal Requests
    if (fields.remove_dinaarImage === 'true') {
      content.dinaarImage = '';
    }
    if (fields.remove_sayaImage === 'true') {
      content.sayaImage = '';
    }
    if (fields.remove_aboutBgImage === 'true') {
      content.aboutBgImage = '';
    }
    if (fields.remove_aboutMainImage === 'true') {
      content.aboutMainImage = '';
    }
    if (fields.remove_featuredCoin1Image === 'true') {
      content.featuredCoin1Image = '';
    }
    if (fields.remove_featuredCoin2Image === 'true') {
      content.featuredCoin2Image = '';
    }
    if (fields.remove_techFeature1Icon === 'true') {
      content.techFeature1Icon = '';
    }
    if (fields.remove_techFeature2Icon === 'true') {
      content.techFeature2Icon = '';
    }
    if (fields.remove_techFeature3Icon === 'true') {
      content.techFeature3Icon = '';
    }
    if (fields.remove_whyUsCard1Icon === 'true') {
      content.whyUsCard1Icon = '';
    }
    if (fields.remove_whyUsCard2Icon === 'true') {
      content.whyUsCard2Icon = '';
    }
    if (fields.remove_whyUsCard3Icon === 'true') {
      content.whyUsCard3Icon = '';
    }
    if (fields.remove_whyUsCard4Icon === 'true') {
      content.whyUsCard4Icon = '';
    }
    if (fields.remove_ctaTopRightImage === 'true') {
      content.ctaTopRightImage = '';
    }
    if (fields.remove_ctaBottomLeftImage === 'true') {
      content.ctaBottomLeftImage = '';
    }
    if (fields.remove_ctaCenterImage === 'true') {
      content.ctaCenterImage = '';
    }
    if (fields.remove_ctaBackgroundImage === 'true') {
      content.ctaBackgroundImage = '';
    }
    if (fields.remove_news1Image === 'true') {
      content.news1Image = '';
    }
    if (fields.remove_news1AuthorImage === 'true') {
      content.news1AuthorImage = '';
    }
    if (fields.remove_news2AuthorImage === 'true') {
      content.news2AuthorImage = '';
    }
    if (fields.remove_news3AuthorImage === 'true') {
      content.news3AuthorImage = '';
    }
    if (fields.remove_galleryLeftImage === 'true') {
      content.galleryLeftImage = '';
    }
    if (fields.remove_galleryCenterImage === 'true') {
      content.galleryCenterImage = '';
    }
    if (fields.remove_galleryRightImage === 'true') {
      content.galleryRightImage = '';
    }
    if (fields.remove_owner1Image === 'true') {
      content.owner1Image = '';
    }
    if (fields.remove_owner2Image === 'true') {
      content.owner2Image = '';
    }
    if (fields.remove_visionImage === 'true') {
      content.visionImage = '';
    }
    if (fields.remove_missionImage === 'true') {
      content.missionImage = '';
    }
    if (fields.remove_ecosystemImage === 'true') {
      content.ecosystemImage = '';
    }
    if (fields.remove_ecosystemBgImage === 'true') {
      content.ecosystemBgImage = '';
    }
    if (fields.remove_contacthelpImage === 'true') {
      content.contacthelpImage = '';
    }
    if (fields.remove_contacthelpBgImage === 'true') {
      content.contacthelpBgImage = '';
    }
    if (fields.remove_ContactCard1Icon === 'true') {
      content.ContactCard1Icon = '';
    }
    if (fields.remove_ContactCard2Icon === 'true') {
      content.ContactCard2Icon = '';
    }
    
    if (fields.remove_spotlightTopIcon === 'true') content.spotlightTopIcon = '';
    if (fields.remove_spotlightShapeImage === 'true') content.spotlightShapeImage = '';
    if (fields.remove_spotlightBgImage === 'true') content.spotlightBgImage = '';
    for (let i = 1; i <= 9; i++) {
      if (fields[`remove_spotlightLetter${i}Image`] === 'true') {
        content[`spotlightLetter${i}Image`] = '';
      }
    }

    // Handle File Upload paths if files were submitted
    if (req.files) {
      if (req.files.dinaarImage && req.files.dinaarImage[0]) {
        content.dinaarImage = `/uploads/${req.files.dinaarImage[0].filename}`;
      }
      if (req.files.sayaImage && req.files.sayaImage[0]) {
        content.sayaImage = `/uploads/${req.files.sayaImage[0].filename}`;
      }
      if (req.files.aboutBgImage && req.files.aboutBgImage[0]) {
        content.aboutBgImage = `/uploads/${req.files.aboutBgImage[0].filename}`;
      }
      if (req.files.aboutMainImage && req.files.aboutMainImage[0]) {
        content.aboutMainImage = `/uploads/${req.files.aboutMainImage[0].filename}`;
      }
      if (req.files.featuredCoin1Image && req.files.featuredCoin1Image[0]) {
        content.featuredCoin1Image = `/uploads/${req.files.featuredCoin1Image[0].filename}`;
      }
      if (req.files.featuredCoin2Image && req.files.featuredCoin2Image[0]) {
        content.featuredCoin2Image = `/uploads/${req.files.featuredCoin2Image[0].filename}`;
      }
      if (req.files.techFeature1Icon && req.files.techFeature1Icon[0]) {
        content.techFeature1Icon = `/uploads/${req.files.techFeature1Icon[0].filename}`;
      }
      if (req.files.techFeature2Icon && req.files.techFeature2Icon[0]) {
        content.techFeature2Icon = `/uploads/${req.files.techFeature2Icon[0].filename}`;
      }
      if (req.files.techFeature3Icon && req.files.techFeature3Icon[0]) {
        content.techFeature3Icon = `/uploads/${req.files.techFeature3Icon[0].filename}`;
      }
      if (req.files.whyUsCard1Icon && req.files.whyUsCard1Icon[0]) {
        content.whyUsCard1Icon = `/uploads/${req.files.whyUsCard1Icon[0].filename}`;
      }
      if (req.files.whyUsCard2Icon && req.files.whyUsCard2Icon[0]) {
        content.whyUsCard2Icon = `/uploads/${req.files.whyUsCard2Icon[0].filename}`;
      }
      if (req.files.whyUsCard3Icon && req.files.whyUsCard3Icon[0]) {
        content.whyUsCard3Icon = `/uploads/${req.files.whyUsCard3Icon[0].filename}`;
      }
      if (req.files.whyUsCard4Icon && req.files.whyUsCard4Icon[0]) {
        content.whyUsCard4Icon = `/uploads/${req.files.whyUsCard4Icon[0].filename}`;
      }
      if (req.files.ctaTopRightImage && req.files.ctaTopRightImage[0]) {
        content.ctaTopRightImage = `/uploads/${req.files.ctaTopRightImage[0].filename}`;
      }
      if (req.files.ctaBottomLeftImage && req.files.ctaBottomLeftImage[0]) {
        content.ctaBottomLeftImage = `/uploads/${req.files.ctaBottomLeftImage[0].filename}`;
      }
      if (req.files.ctaCenterImage && req.files.ctaCenterImage[0]) {
        content.ctaCenterImage = `/uploads/${req.files.ctaCenterImage[0].filename}`;
      }
      if (req.files.ctaBackgroundImage && req.files.ctaBackgroundImage[0]) {
        content.ctaBackgroundImage = `/uploads/${req.files.ctaBackgroundImage[0].filename}`;
      }
      if (req.files.news1Image && req.files.news1Image[0]) {
        content.news1Image = `/uploads/${req.files.news1Image[0].filename}`;
      }
      if (req.files.news1AuthorImage && req.files.news1AuthorImage[0]) {
        content.news1AuthorImage = `/uploads/${req.files.news1AuthorImage[0].filename}`;
      }
      if (req.files.news2AuthorImage && req.files.news2AuthorImage[0]) {
        content.news2AuthorImage = `/uploads/${req.files.news2AuthorImage[0].filename}`;
      }
      if (req.files.news3AuthorImage && req.files.news3AuthorImage[0]) {
        content.news3AuthorImage = `/uploads/${req.files.news3AuthorImage[0].filename}`;
      }
      if (req.files.galleryLeftImage && req.files.galleryLeftImage[0]) {
        content.galleryLeftImage = `/uploads/${req.files.galleryLeftImage[0].filename}`;
      }
      if (req.files.galleryCenterImage && req.files.galleryCenterImage[0]) {
        content.galleryCenterImage = `/uploads/${req.files.galleryCenterImage[0].filename}`;
      }
      if (req.files.galleryRightImage && req.files.galleryRightImage[0]) {
        content.galleryRightImage = `/uploads/${req.files.galleryRightImage[0].filename}`;
      }
      if (req.files.owner1Image && req.files.owner1Image[0]) {
        content.owner1Image = `/uploads/${req.files.owner1Image[0].filename}`;
      }
      if (req.files.owner2Image && req.files.owner2Image[0]) {
        content.owner2Image = `/uploads/${req.files.owner2Image[0].filename}`;
      }
      if (req.files.visionImage && req.files.visionImage[0]) {
        content.visionImage = `/uploads/${req.files.visionImage[0].filename}`;
      }
      if (req.files.missionImage && req.files.missionImage[0]) {
        content.missionImage = `/uploads/${req.files.missionImage[0].filename}`;
      }
      if (req.files.ecosystemImage && req.files.ecosystemImage[0]) {
        content.ecosystemImage = `/uploads/${req.files.ecosystemImage[0].filename}`;
      }
      if (req.files.ecosystemBgImage && req.files.ecosystemBgImage[0]) {
        content.ecosystemBgImage = `/uploads/${req.files.ecosystemBgImage[0].filename}`;
      }
      if (req.files.contacthelpImage && req.files.contacthelpImage[0]) {
        content.contacthelpImage = `/uploads/${req.files.contacthelpImage[0].filename}`;
      }
      if (req.files.contacthelpBgImage && req.files.contacthelpBgImage[0]) {
        content.contacthelpBgImage = `/uploads/${req.files.contacthelpBgImage[0].filename}`;
      }
      if (req.files.ContactCard1Icon && req.files.ContactCard1Icon[0]) {
        content.ContactCard1Icon = `/uploads/${req.files.ContactCard1Icon[0].filename}`;
      }
      if (req.files.ContactCard2Icon && req.files.ContactCard2Icon[0]) {
        content.ContactCard2Icon = `/uploads/${req.files.ContactCard2Icon[0].filename}`;
      }
      if (req.files.spotlightTopIcon && req.files.spotlightTopIcon[0]) {
        content.spotlightTopIcon = `/uploads/${req.files.spotlightTopIcon[0].filename}`;
      }
      if (req.files.spotlightShapeImage && req.files.spotlightShapeImage[0]) {
        content.spotlightShapeImage = `/uploads/${req.files.spotlightShapeImage[0].filename}`;
      }
      if (req.files.spotlightBgImage && req.files.spotlightBgImage[0]) {
        content.spotlightBgImage = `/uploads/${req.files.spotlightBgImage[0].filename}`;
      }
      for (let i = 1; i <= 9; i++) {
        if (req.files[`spotlightLetter${i}Image`] && req.files[`spotlightLetter${i}Image`][0]) {
          content[`spotlightLetter${i}Image`] = `/uploads/${req.files[`spotlightLetter${i}Image`][0].filename}`;
        }
      }
    }

    // Update 4 dynamic finance features array
    if (pageKey === 'home') {
      const features = [];
      const currentFeatures = content.financeFeatures || [];
      
      for (let i = 0; i < 4; i++) {
        const defaultTitle = currentFeatures[i] ? currentFeatures[i].title : `Feature ${i+1}`;
        const defaultImage = currentFeatures[i] ? currentFeatures[i].image : '';
        
        let title = fields[`featureTitle${i}`] !== undefined ? fields[`featureTitle${i}`] : defaultTitle;
        let image = defaultImage;
        
        if (req.files && req.files[`featureImage${i}`] && req.files[`featureImage${i}`][0]) {
          image = `/uploads/${req.files[`featureImage${i}`][0].filename}`;
        } else if (fields[`remove_featureImage${i}`] === 'true') {
          image = '';
        }
        
        features.push({ title, image });
      }
      content.financeFeatures = features;
    }

    await content.save();
    res.json({ success: true, message: `${pageKey.toUpperCase()} content updated successfully!`, data: content });
  } catch (error) {
    console.error(`Error updating content for ${req.params.pageKey}:`, error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
};

// Seed function to initialize database defaults for all pages
const seedDefaultContent = async () => {
  const pageKeys = ['home', 'about', 'technology', 'token', 'contact'];
  try {
    for (const key of pageKeys) {
      let content = await PageContent.findOne({ key });
      if (!content) {
        content = new PageContent({ key });
        await content.save();
        console.log(`Seeded default "${key}" page content into database.`);
      } else {
        // Automatic Schema Migration: Save missing fields to existing documents
        let updated = false;
        const tempDoc = new PageContent({ key });
        
        for (const field of Object.keys(tempDoc._doc)) {
          if (content[field] === undefined && field !== '_id' && field !== '__v') {
            content[field] = tempDoc[field];
            updated = true;
          }
        }
        
        // Handle explicit migrations (e.g. changing heroTitle default value)
        if (key === 'home' && content.heroTitle === 'Digital Economy Starts Here') {
          content.heroTitle = 'The Future of Digital Economy Starts Here';
          updated = true;
        }

        if (key === 'about' && (content.aboutHeroTitle === 'About IIC Metaverse' || !content.aboutHeroTitle)) {
          content.aboutHeroBadge = 'About us';
          content.aboutHeroTitle = 'Redefining the Future of Digital Economy';
          content.aboutHeroDescription = 'IIC METAVERSE is a next-generation ecosystem designed to bridge blockchain technology with real-world value—creating a unified platform for finance, trade, and digital interaction.';
          updated = true;
        }

        if (updated) {
          await content.save();
          console.log(`Migrated and populated missing schema fields for "${key}" in MongoDB.`);
        }
      }
    }
  } catch (err) {
    console.error('Error seeding default pages content:', err);
  }
};

module.exports = {
  getContent,
  updateContent,
  seedDefaultContent
};
