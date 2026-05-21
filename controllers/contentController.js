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

        } else if (['techCard1Paragraphs', 'techCard2TopParagraphs', 'techCard2BottomParagraphs', 'techCard3Paragraphs', 'techSmartCheckpoints', 'techSecuritySlider2FeatureList', 'techCostParagraphs'].includes(field)) {
          try {
            content[field] = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error('Failed to parse dynamic JSON for', field, parseErr);
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

        if (fields.remove_techCard1BgImage === 'true') content.techCard1BgImage = '';
    if (fields.remove_techCard1Image === 'true') content.techCard1Image = '';
    if (fields.remove_techCard2Point1Icon === 'true') content.techCard2Point1Icon = '';
    if (fields.remove_techCard2Point2Icon === 'true') content.techCard2Point2Icon = '';
    if (fields.remove_techCard2Point3Icon === 'true') content.techCard2Point3Icon = '';
    if (fields.remove_techCard2Point4Icon === 'true') content.techCard2Point4Icon = '';
    if (fields.remove_techCard2BgImage === 'true') content.techCard2BgImage = '';
    if (fields.remove_techCard2Image === 'true') content.techCard2Image = '';
    if (fields.remove_techCard3Point1Icon === 'true') content.techCard3Point1Icon = '';
    if (fields.remove_techCard3Point2Icon === 'true') content.techCard3Point2Icon = '';
    if (fields.remove_techCard3Point3Icon === 'true') content.techCard3Point3Icon = '';
    if (fields.remove_techCard3BgImage === 'true') content.techCard3BgImage = '';
    if (fields.remove_techCard3Image === 'true') content.techCard3Image = '';

        if (fields.remove_techConsensusCard1Icon === 'true') content.techConsensusCard1Icon = '';
    if (fields.remove_techConsensusCard2Icon === 'true') content.techConsensusCard2Icon = '';
    if (fields.remove_techConsensusCard3Icon === 'true') content.techConsensusCard3Icon = '';
    if (fields.remove_techSmartFeature1Icon === 'true') content.techSmartFeature1Icon = '';
    if (fields.remove_techSmartFeature2Icon === 'true') content.techSmartFeature2Icon = '';
    if (fields.remove_techSmartFeature3Icon === 'true') content.techSmartFeature3Icon = '';
    if (fields.remove_techSmartRightBgImage === 'true') content.techSmartRightBgImage = '';
    if (fields.remove_techSmartRightImage === 'true') content.techSmartRightImage = '';

        if (fields.remove_techSlide1Image === 'true') content.techSlide1Image = '';
    if (fields.remove_techSlide1Point1Icon === 'true') content.techSlide1Point1Icon = '';
    if (fields.remove_techSlide1Point2Icon === 'true') content.techSlide1Point2Icon = '';
    if (fields.remove_techSlide1Feature1Icon === 'true') content.techSlide1Feature1Icon = '';
    if (fields.remove_techSlide1Feature2Icon === 'true') content.techSlide1Feature2Icon = '';
    if (fields.remove_techSlide1Feature3Icon === 'true') content.techSlide1Feature3Icon = '';
    if (fields.remove_techSlide2Image === 'true') content.techSlide2Image = '';
    if (fields.remove_techSlide2Feature1Icon === 'true') content.techSlide2Feature1Icon = '';
    if (fields.remove_techSlide2Feature2Icon === 'true') content.techSlide2Feature2Icon = '';
    if (fields.remove_techSlide2Feature3Icon === 'true') content.techSlide2Feature3Icon = '';
    if (fields.remove_techSlide3Image === 'true') content.techSlide3Image = '';
    if (fields.remove_techSlide3Feature1Icon === 'true') content.techSlide3Feature1Icon = '';
    if (fields.remove_techSlide3Feature2Icon === 'true') content.techSlide3Feature2Icon = '';
    if (fields.remove_techSlide3Feature3Icon === 'true') content.techSlide3Feature3Icon = '';

        if (fields.remove_techSecuritySlider1Feature1Icon === 'true') content.techSecuritySlider1Feature1Icon = '';
    if (fields.remove_techSecuritySlider1Feature2Icon === 'true') content.techSecuritySlider1Feature2Icon = '';
    if (fields.remove_techSecuritySlider1Feature3Icon === 'true') content.techSecuritySlider1Feature3Icon = '';
    if (fields.remove_techSecuritySlider1RightImage === 'true') content.techSecuritySlider1RightImage = '';
    if (fields.remove_techSecuritySlider1RightBgImage === 'true') content.techSecuritySlider1RightBgImage = '';
    if (fields.remove_techSecuritySlider2Point1Icon === 'true') content.techSecuritySlider2Point1Icon = '';
    if (fields.remove_techSecuritySlider2Point2Icon === 'true') content.techSecuritySlider2Point2Icon = '';

        if (fields.remove_techSecuritySlider2RightImage === 'true') content.techSecuritySlider2RightImage = '';
    if (fields.remove_techSecuritySlider2RightBgImage === 'true') content.techSecuritySlider2RightBgImage = '';

        if (fields.remove_techTransparencyCard1Icon === 'true') content.techTransparencyCard1Icon = '';
    if (fields.remove_techTransparencyCard2Icon === 'true') content.techTransparencyCard2Icon = '';
    if (fields.remove_techTransparencyCard3Icon === 'true') content.techTransparencyCard3Icon = '';
    if (fields.remove_techTransparencyCard4Icon === 'true') content.techTransparencyCard4Icon = '';

        if (fields.remove_techCompAdvFeature1Icon === 'true') content.techCompAdvFeature1Icon = '';
    if (fields.remove_techCompAdvFeature2Icon === 'true') content.techCompAdvFeature2Icon = '';
    if (fields.remove_techCompAdvFeature3Icon === 'true') content.techCompAdvFeature3Icon = '';
    if (fields.remove_techCompAdvPoint1Icon === 'true') content.techCompAdvPoint1Icon = '';
    if (fields.remove_techCompAdvPoint2Icon === 'true') content.techCompAdvPoint2Icon = '';
    if (fields.remove_techCompAdvPoint3Icon === 'true') content.techCompAdvPoint3Icon = '';
    if (fields.remove_techCompAdvRightImage === 'true') content.techCompAdvRightImage = '';
    if (fields.remove_techCompAdvRightBgImage === 'true') content.techCompAdvRightBgImage = '';
    if (fields.remove_techFutureTopRightImage === 'true') content.techFutureTopRightImage = '';
    if (fields.remove_techFutureBottomLeftImage === 'true') content.techFutureBottomLeftImage = '';

    // Handle File Upload paths if files were submitted
    if (req.files) {
      if (req.files.techCompAdvFeature1Icon && req.files.techCompAdvFeature1Icon[0]) content.techCompAdvFeature1Icon = '/uploads/' + req.files.techCompAdvFeature1Icon[0].filename;
      if (req.files.techCompAdvFeature2Icon && req.files.techCompAdvFeature2Icon[0]) content.techCompAdvFeature2Icon = '/uploads/' + req.files.techCompAdvFeature2Icon[0].filename;
      if (req.files.techCompAdvFeature3Icon && req.files.techCompAdvFeature3Icon[0]) content.techCompAdvFeature3Icon = '/uploads/' + req.files.techCompAdvFeature3Icon[0].filename;
      if (req.files.techCompAdvPoint1Icon && req.files.techCompAdvPoint1Icon[0]) content.techCompAdvPoint1Icon = '/uploads/' + req.files.techCompAdvPoint1Icon[0].filename;
      if (req.files.techCompAdvPoint2Icon && req.files.techCompAdvPoint2Icon[0]) content.techCompAdvPoint2Icon = '/uploads/' + req.files.techCompAdvPoint2Icon[0].filename;
      if (req.files.techCompAdvPoint3Icon && req.files.techCompAdvPoint3Icon[0]) content.techCompAdvPoint3Icon = '/uploads/' + req.files.techCompAdvPoint3Icon[0].filename;
      if (req.files.techCompAdvRightImage && req.files.techCompAdvRightImage[0]) content.techCompAdvRightImage = '/uploads/' + req.files.techCompAdvRightImage[0].filename;
      if (req.files.techCompAdvRightBgImage && req.files.techCompAdvRightBgImage[0]) content.techCompAdvRightBgImage = '/uploads/' + req.files.techCompAdvRightBgImage[0].filename;
      if (req.files.techFutureTopRightImage && req.files.techFutureTopRightImage[0]) content.techFutureTopRightImage = '/uploads/' + req.files.techFutureTopRightImage[0].filename;
      if (req.files.techFutureBottomLeftImage && req.files.techFutureBottomLeftImage[0]) content.techFutureBottomLeftImage = '/uploads/' + req.files.techFutureBottomLeftImage[0].filename;

      if (req.files.techTransparencyCard1Icon && req.files.techTransparencyCard1Icon[0]) content.techTransparencyCard1Icon = '/uploads/' + req.files.techTransparencyCard1Icon[0].filename;
      if (req.files.techTransparencyCard2Icon && req.files.techTransparencyCard2Icon[0]) content.techTransparencyCard2Icon = '/uploads/' + req.files.techTransparencyCard2Icon[0].filename;
      if (req.files.techTransparencyCard3Icon && req.files.techTransparencyCard3Icon[0]) content.techTransparencyCard3Icon = '/uploads/' + req.files.techTransparencyCard3Icon[0].filename;
      if (req.files.techTransparencyCard4Icon && req.files.techTransparencyCard4Icon[0]) content.techTransparencyCard4Icon = '/uploads/' + req.files.techTransparencyCard4Icon[0].filename;

      if (req.files.techSecuritySlider2RightImage && req.files.techSecuritySlider2RightImage[0]) content.techSecuritySlider2RightImage = '/uploads/' + req.files.techSecuritySlider2RightImage[0].filename;
      if (req.files.techSecuritySlider2RightBgImage && req.files.techSecuritySlider2RightBgImage[0]) content.techSecuritySlider2RightBgImage = '/uploads/' + req.files.techSecuritySlider2RightBgImage[0].filename;

      if (req.files.techSecuritySlider1Feature1Icon && req.files.techSecuritySlider1Feature1Icon[0]) content.techSecuritySlider1Feature1Icon = '/uploads/' + req.files.techSecuritySlider1Feature1Icon[0].filename;
      if (req.files.techSecuritySlider1Feature2Icon && req.files.techSecuritySlider1Feature2Icon[0]) content.techSecuritySlider1Feature2Icon = '/uploads/' + req.files.techSecuritySlider1Feature2Icon[0].filename;
      if (req.files.techSecuritySlider1Feature3Icon && req.files.techSecuritySlider1Feature3Icon[0]) content.techSecuritySlider1Feature3Icon = '/uploads/' + req.files.techSecuritySlider1Feature3Icon[0].filename;
      if (req.files.techSecuritySlider1RightImage && req.files.techSecuritySlider1RightImage[0]) content.techSecuritySlider1RightImage = '/uploads/' + req.files.techSecuritySlider1RightImage[0].filename;
      if (req.files.techSecuritySlider1RightBgImage && req.files.techSecuritySlider1RightBgImage[0]) content.techSecuritySlider1RightBgImage = '/uploads/' + req.files.techSecuritySlider1RightBgImage[0].filename;
      if (req.files.techSecuritySlider2Point1Icon && req.files.techSecuritySlider2Point1Icon[0]) content.techSecuritySlider2Point1Icon = '/uploads/' + req.files.techSecuritySlider2Point1Icon[0].filename;
      if (req.files.techSecuritySlider2Point2Icon && req.files.techSecuritySlider2Point2Icon[0]) content.techSecuritySlider2Point2Icon = '/uploads/' + req.files.techSecuritySlider2Point2Icon[0].filename;

      if (req.files.techSlide1Image && req.files.techSlide1Image[0]) content.techSlide1Image = '/uploads/' + req.files.techSlide1Image[0].filename;
      if (req.files.techSlide1Point1Icon && req.files.techSlide1Point1Icon[0]) content.techSlide1Point1Icon = '/uploads/' + req.files.techSlide1Point1Icon[0].filename;
      if (req.files.techSlide1Point2Icon && req.files.techSlide1Point2Icon[0]) content.techSlide1Point2Icon = '/uploads/' + req.files.techSlide1Point2Icon[0].filename;
      if (req.files.techSlide1Feature1Icon && req.files.techSlide1Feature1Icon[0]) content.techSlide1Feature1Icon = '/uploads/' + req.files.techSlide1Feature1Icon[0].filename;
      if (req.files.techSlide1Feature2Icon && req.files.techSlide1Feature2Icon[0]) content.techSlide1Feature2Icon = '/uploads/' + req.files.techSlide1Feature2Icon[0].filename;
      if (req.files.techSlide1Feature3Icon && req.files.techSlide1Feature3Icon[0]) content.techSlide1Feature3Icon = '/uploads/' + req.files.techSlide1Feature3Icon[0].filename;
      if (req.files.techSlide2Image && req.files.techSlide2Image[0]) content.techSlide2Image = '/uploads/' + req.files.techSlide2Image[0].filename;
      if (req.files.techSlide2Feature1Icon && req.files.techSlide2Feature1Icon[0]) content.techSlide2Feature1Icon = '/uploads/' + req.files.techSlide2Feature1Icon[0].filename;
      if (req.files.techSlide2Feature2Icon && req.files.techSlide2Feature2Icon[0]) content.techSlide2Feature2Icon = '/uploads/' + req.files.techSlide2Feature2Icon[0].filename;
      if (req.files.techSlide2Feature3Icon && req.files.techSlide2Feature3Icon[0]) content.techSlide2Feature3Icon = '/uploads/' + req.files.techSlide2Feature3Icon[0].filename;
      if (req.files.techSlide3Image && req.files.techSlide3Image[0]) content.techSlide3Image = '/uploads/' + req.files.techSlide3Image[0].filename;
      if (req.files.techSlide3Feature1Icon && req.files.techSlide3Feature1Icon[0]) content.techSlide3Feature1Icon = '/uploads/' + req.files.techSlide3Feature1Icon[0].filename;
      if (req.files.techSlide3Feature2Icon && req.files.techSlide3Feature2Icon[0]) content.techSlide3Feature2Icon = '/uploads/' + req.files.techSlide3Feature2Icon[0].filename;
      if (req.files.techSlide3Feature3Icon && req.files.techSlide3Feature3Icon[0]) content.techSlide3Feature3Icon = '/uploads/' + req.files.techSlide3Feature3Icon[0].filename;

      if (req.files.techConsensusCard1Icon && req.files.techConsensusCard1Icon[0]) content.techConsensusCard1Icon = '/uploads/' + req.files.techConsensusCard1Icon[0].filename;
      if (req.files.techConsensusCard2Icon && req.files.techConsensusCard2Icon[0]) content.techConsensusCard2Icon = '/uploads/' + req.files.techConsensusCard2Icon[0].filename;
      if (req.files.techConsensusCard3Icon && req.files.techConsensusCard3Icon[0]) content.techConsensusCard3Icon = '/uploads/' + req.files.techConsensusCard3Icon[0].filename;
      if (req.files.techSmartFeature1Icon && req.files.techSmartFeature1Icon[0]) content.techSmartFeature1Icon = '/uploads/' + req.files.techSmartFeature1Icon[0].filename;
      if (req.files.techSmartFeature2Icon && req.files.techSmartFeature2Icon[0]) content.techSmartFeature2Icon = '/uploads/' + req.files.techSmartFeature2Icon[0].filename;
      if (req.files.techSmartFeature3Icon && req.files.techSmartFeature3Icon[0]) content.techSmartFeature3Icon = '/uploads/' + req.files.techSmartFeature3Icon[0].filename;
      if (req.files.techSmartRightBgImage && req.files.techSmartRightBgImage[0]) content.techSmartRightBgImage = '/uploads/' + req.files.techSmartRightBgImage[0].filename;
      if (req.files.techSmartRightImage && req.files.techSmartRightImage[0]) content.techSmartRightImage = '/uploads/' + req.files.techSmartRightImage[0].filename;

      if (req.files.techCard1BgImage && req.files.techCard1BgImage[0]) content.techCard1BgImage = '/uploads/' + req.files.techCard1BgImage[0].filename;
      if (req.files.techCard1Image && req.files.techCard1Image[0]) content.techCard1Image = '/uploads/' + req.files.techCard1Image[0].filename;
      if (req.files.techCard2Point1Icon && req.files.techCard2Point1Icon[0]) content.techCard2Point1Icon = '/uploads/' + req.files.techCard2Point1Icon[0].filename;
      if (req.files.techCard2Point2Icon && req.files.techCard2Point2Icon[0]) content.techCard2Point2Icon = '/uploads/' + req.files.techCard2Point2Icon[0].filename;
      if (req.files.techCard2Point3Icon && req.files.techCard2Point3Icon[0]) content.techCard2Point3Icon = '/uploads/' + req.files.techCard2Point3Icon[0].filename;
      if (req.files.techCard2Point4Icon && req.files.techCard2Point4Icon[0]) content.techCard2Point4Icon = '/uploads/' + req.files.techCard2Point4Icon[0].filename;
      if (req.files.techCard2BgImage && req.files.techCard2BgImage[0]) content.techCard2BgImage = '/uploads/' + req.files.techCard2BgImage[0].filename;
      if (req.files.techCard2Image && req.files.techCard2Image[0]) content.techCard2Image = '/uploads/' + req.files.techCard2Image[0].filename;
      if (req.files.techCard3Point1Icon && req.files.techCard3Point1Icon[0]) content.techCard3Point1Icon = '/uploads/' + req.files.techCard3Point1Icon[0].filename;
      if (req.files.techCard3Point2Icon && req.files.techCard3Point2Icon[0]) content.techCard3Point2Icon = '/uploads/' + req.files.techCard3Point2Icon[0].filename;
      if (req.files.techCard3Point3Icon && req.files.techCard3Point3Icon[0]) content.techCard3Point3Icon = '/uploads/' + req.files.techCard3Point3Icon[0].filename;
      if (req.files.techCard3BgImage && req.files.techCard3BgImage[0]) content.techCard3BgImage = '/uploads/' + req.files.techCard3BgImage[0].filename;
      if (req.files.techCard3Image && req.files.techCard3Image[0]) content.techCard3Image = '/uploads/' + req.files.techCard3Image[0].filename;

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
