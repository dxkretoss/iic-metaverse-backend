const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { getContent, updateContent } = require('../controllers/contentController');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File validation (images only)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp|svg\+xml|svg/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimeType && extName) {
    return cb(null, true);
  }
  cb(new Error('Only JPEG, JPG, PNG, WEBP and SVG images are allowed!'));
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Multer configuration wrapper to process multi-fields
const uploadMiddleware = upload.fields([
  { name: 'dinaarImage', maxCount: 1 },
  { name: 'sayaImage', maxCount: 1 },
  { name: 'aboutBgImage', maxCount: 1 },
  { name: 'aboutMainImage', maxCount: 1 },
  { name: 'featureImage0', maxCount: 1 },
  { name: 'featureImage1', maxCount: 1 },
  { name: 'featureImage2', maxCount: 1 },
  { name: 'featureImage3', maxCount: 1 },
  { name: 'featuredCoin1Image', maxCount: 1 },
  { name: 'featuredCoin2Image', maxCount: 1 },
  { name: 'techFeature1Icon', maxCount: 1 },
  { name: 'techFeature2Icon', maxCount: 1 },
  { name: 'techFeature3Icon', maxCount: 1 },
  { name: 'whyUsCard1Icon', maxCount: 1 },
  { name: 'whyUsCard2Icon', maxCount: 1 },
  { name: 'whyUsCard3Icon', maxCount: 1 },
  { name: 'whyUsCard4Icon', maxCount: 1 },
  { name: 'ctaTopRightImage', maxCount: 1 },
  { name: 'ctaBottomLeftImage', maxCount: 1 },
  { name: 'ctaCenterImage', maxCount: 1 },
  { name: 'ctaBackgroundImage', maxCount: 1 },
  { name: 'news1Image', maxCount: 1 },
  { name: 'news1AuthorImage', maxCount: 1 },
  { name: 'news2AuthorImage', maxCount: 1 },
  { name: 'news3AuthorImage', maxCount: 1 },
  { name: 'galleryLeftImage', maxCount: 1 },
  { name: 'galleryCenterImage', maxCount: 1 },
  { name: 'galleryRightImage', maxCount: 1 },
  { name: 'owner1Image', maxCount: 1 },
  { name: 'owner2Image', maxCount: 1 },
  { name: 'visionImage', maxCount: 1 },
  { name: 'missionImage', maxCount: 1 },
  { name: 'ecosystemImage', maxCount: 1 },
  { name: 'ecosystemBgImage', maxCount: 1 },
  { name: 'spotlightTopIcon', maxCount: 1 },
  { name: 'spotlightShapeImage', maxCount: 1 },
  { name: 'spotlightBgImage', maxCount: 1 },
  { name: 'spotlightLetter1Image', maxCount: 1 },
  { name: 'spotlightLetter2Image', maxCount: 1 },
  { name: 'spotlightLetter3Image', maxCount: 1 },
  { name: 'spotlightLetter4Image', maxCount: 1 },
  { name: 'spotlightLetter5Image', maxCount: 1 },
  { name: 'spotlightLetter6Image', maxCount: 1 },
  { name: 'spotlightLetter7Image', maxCount: 1 },
  { name: 'spotlightLetter8Image', maxCount: 1 },
  { name: 'spotlightLetter9Image', maxCount: 1 }
]);

// Dynamic routes supporting specific pages or falling back
router.route('/')
  .get(getContent)
  .post(uploadMiddleware, updateContent);

router.route('/:pageKey')
  .get(getContent)
  .post(uploadMiddleware, updateContent);

module.exports = router;
