/* 
* Admin JavaScript for the ABOUT page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Safe image preview setter
  const setImg = (previewId, url) => {
    if (typeof setImagePreview === 'function') {
      setImagePreview(previewId, url);
    } else {
      const el = document.getElementById(previewId);
      if (el) el.src = url || '';
    }
  };

  // Helper to set text/textarea values safely
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && el.type !== 'file') {
      el.value = val || '';
    }
  };

  // Hero section
  setVal('aboutHeroBadge', data.aboutHeroBadge);
  setVal('aboutHeroTitle', data.aboutHeroTitle);
  setVal('aboutHeroDescription', data.aboutHeroDescription);

  // Gallery
  setImg('galleryLeftImage-preview', data.galleryLeftImage);
  setVal('remove_galleryLeftImage', 'false');
  setImg('galleryCenterImage-preview', data.galleryCenterImage);
  setVal('remove_galleryCenterImage', 'false');
  setImg('galleryRightImage-preview', data.galleryRightImage);
  setVal('remove_galleryRightImage', 'false');
  setVal('galleryTitle', data.galleryTitle);

  // Leadership
  setImg('owner1Image-preview', data.owner1Image);
  setVal('remove_owner1Image', 'false');
  setVal('owner1Badge', data.owner1Badge);
  setVal('owner1Name', data.owner1Name);

  setImg('owner2Image-preview', data.owner2Image);
  setVal('remove_owner2Image', 'false');
  setVal('owner2Badge', data.owner2Badge);
  setVal('owner2Name', data.owner2Name);

  // Vision, Mission & Ecosystem
  setImg('visionImage-preview', data.visionImage);
  setVal('remove_visionImage', 'false');
  setVal('visionHeading', data.visionHeading);
  setVal('visionDescription', data.visionDescription);

  setImg('missionImage-preview', data.missionImage);
  setVal('remove_missionImage', 'false');
  setVal('missionHeading', data.missionHeading);
  setVal('missionDescription', data.missionDescription);

  setVal('ecosystemTitle', data.ecosystemTitle);
  setImg('ecosystemImage-preview', data.ecosystemImage);
  setVal('remove_ecosystemImage', 'false');
  setImg('ecosystemBgImage-preview', data.ecosystemBgImage);
  setVal('remove_ecosystemBgImage', 'false');

  // Spotlight
  setImg('spotlightTopIcon-preview', data.spotlightTopIcon);
  setVal('remove_spotlightTopIcon', 'false');
  setImg('spotlightShapeImage-preview', data.spotlightShapeImage);
  setVal('remove_spotlightShapeImage', 'false');
  setVal('spotlightTitle', data.spotlightTitle);

  setVal('spotlightPrimaryBtnText', data.spotlightPrimaryBtnText);
  setVal('spotlightPrimaryBtnLink', data.spotlightPrimaryBtnLink);
  setVal('spotlightSecondaryBtnText', data.spotlightSecondaryBtnText);
  setVal('spotlightSecondaryBtnLink', data.spotlightSecondaryBtnLink);

  setImg('spotlightBgImage-preview', data.spotlightBgImage);
  setVal('remove_spotlightBgImage', 'false');

  for (let i = 1; i <= 9; i++) {
    setImg(`spotlightLetter${i}Image-preview`, data[`spotlightLetter${i}Image`]);
    setVal(`remove_spotlightLetter${i}Image`, 'false');
  }

  // Dynamic paragraphs rendering
  if (data.galleryParagraphs) renderGalleryParagraphsEditor(data.galleryParagraphs);
  if (data.owner1Paragraphs) renderOwner1ParagraphsEditor(data.owner1Paragraphs);
  if (data.owner2Paragraphs) renderOwner2ParagraphsEditor(data.owner2Paragraphs);
  if (data.ecosystemParagraphs) renderEcosystemParagraphsEditor(data.ecosystemParagraphs);
  if (data.spotlightParagraphs) renderSpotlightParagraphsEditor(data.spotlightParagraphs);
};

window.appendPageFormData = function(formData) {
  const appendVal = (key, id) => {
    const el = document.getElementById(id);
    if (el) formData.append(key, el.value);
  };
  const appendFile = (key, id) => {
    const el = document.getElementById(id);
    if (el && el.files && el.files[0]) {
      formData.append(key, el.files[0]);
    }
  };

  // Collect values from the DOM
  appendVal('aboutHeroBadge', 'aboutHeroBadge');
  appendVal('aboutHeroTitle', 'aboutHeroTitle');
  appendVal('aboutHeroDescription', 'aboutHeroDescription');

  // Gallery Title
  appendVal('galleryTitle', 'galleryTitle');

  // Gallery Files
  appendFile('galleryLeftImage', 'galleryLeftImage');
  appendFile('galleryCenterImage', 'galleryCenterImage');
  appendFile('galleryRightImage', 'galleryRightImage');

  // Gallery Paragraphs serialization
  const paragraphs = [];
  document.querySelectorAll('.gallery-paragraph-textarea').forEach(textarea => {
    paragraphs.push(textarea.value);
  });
  formData.append('galleryParagraphs', JSON.stringify(paragraphs));

  // Gallery Image Remove hidden flags
  appendVal('remove_galleryLeftImage', 'remove_galleryLeftImage');
  appendVal('remove_galleryCenterImage', 'remove_galleryCenterImage');
  appendVal('remove_galleryRightImage', 'remove_galleryRightImage');

  // Leadership Fields (Owner 1 & Owner 2)
  appendVal('owner1Badge', 'owner1Badge');
  appendVal('owner1Name', 'owner1Name');
  appendVal('owner2Badge', 'owner2Badge');
  appendVal('owner2Name', 'owner2Name');

  // Owner File Uploads
  appendFile('owner1Image', 'owner1Image');
  appendFile('owner2Image', 'owner2Image');

  // Owner Paragraph Serializations
  const o1Paragraphs = [];
  document.querySelectorAll('.owner1-paragraph-textarea').forEach(textarea => {
    o1Paragraphs.push(textarea.value);
  });
  formData.append('owner1Paragraphs', JSON.stringify(o1Paragraphs));

  const o2Paragraphs = [];
  document.querySelectorAll('.owner2-paragraph-textarea').forEach(textarea => {
    o2Paragraphs.push(textarea.value);
  });
  formData.append('owner2Paragraphs', JSON.stringify(o2Paragraphs));

  // Owner image removals flags
  appendVal('remove_owner1Image', 'remove_owner1Image');
  appendVal('remove_owner2Image', 'remove_owner2Image');

  appendFile('visionImage', 'visionImage');
  appendFile('missionImage', 'missionImage');
  appendFile('ecosystemImage', 'ecosystemImage');
  appendFile('ecosystemBgImage', 'ecosystemBgImage');

  appendVal('remove_visionImage', 'remove_visionImage');
  appendVal('remove_missionImage', 'remove_missionImage');
  appendVal('remove_ecosystemImage', 'remove_ecosystemImage');
  appendVal('remove_ecosystemBgImage', 'remove_ecosystemBgImage');

  appendVal('remove_spotlightTopIcon', 'remove_spotlightTopIcon');
  appendVal('remove_spotlightShapeImage', 'remove_spotlightShapeImage');
  appendVal('remove_spotlightBgImage', 'remove_spotlightBgImage');
  for (let i = 1; i <= 9; i++) {
    appendVal('remove_spotlightLetter' + i + 'Image', 'remove_spotlightLetter' + i + 'Image');
  }

  appendVal('visionHeading', 'visionHeading');
  appendVal('visionDescription', 'visionDescription');
  appendVal('missionHeading', 'missionHeading');
  appendVal('missionDescription', 'missionDescription');

  appendVal('ecosystemTitle', 'ecosystemTitle');

  const ecosystemParagraphs = [];
  document.querySelectorAll('.ecosystem-paragraph-textarea').forEach(textarea => {
    ecosystemParagraphs.push(textarea.value);
  });
  formData.append('ecosystemParagraphs', JSON.stringify(ecosystemParagraphs));

  appendFile('spotlightTopIcon', 'spotlightTopIcon');
  appendFile('spotlightShapeImage', 'spotlightShapeImage');
  appendFile('spotlightBgImage', 'spotlightBgImage');
  for (let i = 1; i <= 9; i++) {
    appendFile('spotlightLetter' + i + 'Image', 'spotlightLetter' + i + 'Image');
  }

  appendVal('spotlightTitle', 'spotlightTitle');

  appendVal('spotlightPrimaryBtnText', 'spotlightPrimaryBtnText');
  appendVal('spotlightPrimaryBtnLink', 'spotlightPrimaryBtnLink');
  appendVal('spotlightSecondaryBtnText', 'spotlightSecondaryBtnText');
  appendVal('spotlightSecondaryBtnLink', 'spotlightSecondaryBtnLink');

  const spotlightParagraphs = [];
  document.querySelectorAll('.spotlight-paragraph-textarea').forEach(textarea => {
    spotlightParagraphs.push(textarea.value);
  });
  formData.append('spotlightParagraphs', JSON.stringify(spotlightParagraphs));
};
