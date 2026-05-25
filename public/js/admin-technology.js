/* 
* Admin JavaScript for the TECHNOLOGY page.
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

  // Tech Hero
  setVal('techHeroTopTitle', data.techHeroTopTitle);
  setVal('techHeroTitle', data.techHeroTitle);
  setVal('techHeroDescription', data.techHeroDescription);
  setVal('techHeroPrimaryBtnText', data.techHeroPrimaryBtnText);
  setVal('techHeroPrimaryBtnLink', data.techHeroPrimaryBtnLink);
  setVal('techHeroSecondaryBtnText', data.techHeroSecondaryBtnText);
  setVal('techHeroSecondaryBtnLink', data.techHeroSecondaryBtnLink);

  // Tech Card 1
  setVal('techCard1Title', data.techCard1Title);
  setImg('techCard1BgImage-preview', data.techCard1BgImage);
  setVal('remove_techCard1BgImage', 'false');
  setImg('techCard1Image-preview', data.techCard1Image);
  setVal('remove_techCard1Image', 'false');

  // Tech Card 2
  setVal('techCard2Title', data.techCard2Title);
  setImg('techCard2Point1Icon-preview', data.techCard2Point1Icon);
  setVal('remove_techCard2Point1Icon', 'false');
  setVal('techCard2Point1Text', data.techCard2Point1Text);
  setImg('techCard2Point2Icon-preview', data.techCard2Point2Icon);
  setVal('remove_techCard2Point2Icon', 'false');
  setVal('techCard2Point2Text', data.techCard2Point2Text);
  setImg('techCard2Point3Icon-preview', data.techCard2Point3Icon);
  setVal('remove_techCard2Point3Icon', 'false');
  setVal('techCard2Point3Text', data.techCard2Point3Text);
  setImg('techCard2Point4Icon-preview', data.techCard2Point4Icon);
  setVal('remove_techCard2Point4Icon', 'false');
  setVal('techCard2Point4Text', data.techCard2Point4Text);
  setImg('techCard2BgImage-preview', data.techCard2BgImage);
  setVal('remove_techCard2BgImage', 'false');
  setImg('techCard2Image-preview', data.techCard2Image);
  setVal('remove_techCard2Image', 'false');

  // Tech Card 3
  setVal('techCard3Title', data.techCard3Title);
  setImg('techCard3Point1Icon-preview', data.techCard3Point1Icon);
  setVal('remove_techCard3Point1Icon', 'false');
  setVal('techCard3Point1Text', data.techCard3Point1Text);
  setImg('techCard3Point2Icon-preview', data.techCard3Point2Icon);
  setVal('remove_techCard3Point2Icon', 'false');
  setVal('techCard3Point2Text', data.techCard3Point2Text);
  setImg('techCard3Point3Icon-preview', data.techCard3Point3Icon);
  setVal('remove_techCard3Point3Icon', 'false');
  setVal('techCard3Point3Text', data.techCard3Point3Text);
  setImg('techCard3BgImage-preview', data.techCard3BgImage);
  setVal('remove_techCard3BgImage', 'false');
  setImg('techCard3Image-preview', data.techCard3Image);
  setVal('remove_techCard3Image', 'false');

  // Consensus Section
  setVal('techConsensusBadge', data.techConsensusBadge);
  setVal('techConsensusTitle', data.techConsensusTitle);
  setVal('techConsensusDescription', data.techConsensusDescription);
  setImg('techConsensusCard1Icon-preview', data.techConsensusCard1Icon);
  setVal('remove_techConsensusCard1Icon', 'false');
  setVal('techConsensusCard1Desc', data.techConsensusCard1Desc);
  setImg('techConsensusCard2Icon-preview', data.techConsensusCard2Icon);
  setVal('remove_techConsensusCard2Icon', 'false');
  setVal('techConsensusCard2Desc', data.techConsensusCard2Desc);
  setImg('techConsensusCard3Icon-preview', data.techConsensusCard3Icon);
  setVal('remove_techConsensusCard3Icon', 'false');
  setVal('techConsensusCard3Desc', data.techConsensusCard3Desc);
  setVal('techConsensusBottomDesc', data.techConsensusBottomDesc);

  // Smart Section
  setVal('techSmartTitle', data.techSmartTitle);
  setVal('techSmartDesc', data.techSmartDesc);
  setImg('techSmartFeature1Icon-preview', data.techSmartFeature1Icon);
  setVal('remove_techSmartFeature1Icon', 'false');
  setVal('techSmartFeature1Name', data.techSmartFeature1Name);
  setImg('techSmartFeature2Icon-preview', data.techSmartFeature2Icon);
  setVal('remove_techSmartFeature2Icon', 'false');
  setVal('techSmartFeature2Name', data.techSmartFeature2Name);
  setImg('techSmartFeature3Icon-preview', data.techSmartFeature3Icon);
  setVal('remove_techSmartFeature3Icon', 'false');
  setVal('techSmartFeature3Name', data.techSmartFeature3Name);
  setImg('techSmartRightBgImage-preview', data.techSmartRightBgImage);
  setVal('remove_techSmartRightBgImage', 'false');
  setImg('techSmartRightImage-preview', data.techSmartRightImage);
  setVal('remove_techSmartRightImage', 'false');

  // Slide 1
  setImg('techSlide1Image-preview', data.techSlide1Image);
  setVal('remove_techSlide1Image', 'false');
  setVal('techSlide1Title', data.techSlide1Title);
  setVal('techSlide1Desc', data.techSlide1Desc);
  setImg('techSlide1Point1Icon-preview', data.techSlide1Point1Icon);
  setVal('remove_techSlide1Point1Icon', 'false');
  setVal('techSlide1Point1Text', data.techSlide1Point1Text);
  setImg('techSlide1Point2Icon-preview', data.techSlide1Point2Icon);
  setVal('remove_techSlide1Point2Icon', 'false');
  setVal('techSlide1Point2Text', data.techSlide1Point2Text);
  setVal('techSlide1FeatureHeading', data.techSlide1FeatureHeading);
  setImg('techSlide1Feature1Icon-preview', data.techSlide1Feature1Icon);
  setVal('remove_techSlide1Feature1Icon', 'false');
  setVal('techSlide1Feature1Text', data.techSlide1Feature1Text);
  setImg('techSlide1Feature2Icon-preview', data.techSlide1Feature2Icon);
  setVal('remove_techSlide1Feature2Icon', 'false');
  setVal('techSlide1Feature2Text', data.techSlide1Feature2Text);
  setImg('techSlide1Feature3Icon-preview', data.techSlide1Feature3Icon);
  setVal('remove_techSlide1Feature3Icon', 'false');
  setVal('techSlide1Feature3Text', data.techSlide1Feature3Text);

  // Slide 2
  setVal('techSlide2Title', data.techSlide2Title);
  setVal('techSlide2Desc', data.techSlide2Desc);
  setImg('techSlide2Image-preview', data.techSlide2Image);
  setVal('remove_techSlide2Image', 'false');
  setImg('techSlide2Feature1Icon-preview', data.techSlide2Feature1Icon);
  setVal('remove_techSlide2Feature1Icon', 'false');
  setVal('techSlide2Feature1Text', data.techSlide2Feature1Text);
  setImg('techSlide2Feature2Icon-preview', data.techSlide2Feature2Icon);
  setVal('remove_techSlide2Feature2Icon', 'false');
  setVal('techSlide2Feature2Text', data.techSlide2Feature2Text);
  setImg('techSlide2Feature3Icon-preview', data.techSlide2Feature3Icon);
  setVal('remove_techSlide2Feature3Icon', 'false');
  setVal('techSlide2Feature3Text', data.techSlide2Feature3Text);

  // Slide 3
  setImg('techSlide3Image-preview', data.techSlide3Image);
  setVal('remove_techSlide3Image', 'false');
  setVal('techSlide3Title', data.techSlide3Title);
  setVal('techSlide3Desc', data.techSlide3Desc);
  setImg('techSlide3Feature1Icon-preview', data.techSlide3Feature1Icon);
  setVal('remove_techSlide3Feature1Icon', 'false');
  setVal('techSlide3Feature1Text', data.techSlide3Feature1Text);
  setImg('techSlide3Feature2Icon-preview', data.techSlide3Feature2Icon);
  setVal('remove_techSlide3Feature2Icon', 'false');
  setVal('techSlide3Feature2Text', data.techSlide3Feature2Text);
  setImg('techSlide3Feature3Icon-preview', data.techSlide3Feature3Icon);
  setVal('remove_techSlide3Feature3Icon', 'false');
  setVal('techSlide3Feature3Text', data.techSlide3Feature3Text);

  // Security Slider 1
  setVal('techSecuritySlider1Title', data.techSecuritySlider1Title);
  setVal('techSecuritySlider1Desc', data.techSecuritySlider1Desc);
  setImg('techSecuritySlider1RightImage-preview', data.techSecuritySlider1RightImage);
  setVal('remove_techSecuritySlider1RightImage', 'false');
  setImg('techSecuritySlider1RightBgImage-preview', data.techSecuritySlider1RightBgImage);
  setVal('remove_techSecuritySlider1RightBgImage', 'false');
  setImg('techSecuritySlider1Feature1Icon-preview', data.techSecuritySlider1Feature1Icon);
  setVal('remove_techSecuritySlider1Feature1Icon', 'false');
  setVal('techSecuritySlider1Feature1Text', data.techSecuritySlider1Feature1Text);
  setImg('techSecuritySlider1Feature2Icon-preview', data.techSecuritySlider1Feature2Icon);
  setVal('remove_techSecuritySlider1Feature2Icon', 'false');
  setVal('techSecuritySlider1Feature2Text', data.techSecuritySlider1Feature2Text);
  setImg('techSecuritySlider1Feature3Icon-preview', data.techSecuritySlider1Feature3Icon);
  setVal('remove_techSecuritySlider1Feature3Icon', 'false');
  setVal('techSecuritySlider1Feature3Text', data.techSecuritySlider1Feature3Text);

  // Security Slider 2
  setVal('techSecuritySlider2Title', data.techSecuritySlider2Title);
  setVal('techSecuritySlider2Desc', data.techSecuritySlider2Desc);
  setImg('techSecuritySlider2RightImage-preview', data.techSecuritySlider2RightImage);
  setVal('remove_techSecuritySlider2RightImage', 'false');
  setImg('techSecuritySlider2RightBgImage-preview', data.techSecuritySlider2RightBgImage);
  setVal('remove_techSecuritySlider2RightBgImage', 'false');
  setImg('techSecuritySlider2Point1Icon-preview', data.techSecuritySlider2Point1Icon);
  setVal('remove_techSecuritySlider2Point1Icon', 'false');
  setVal('techSecuritySlider2Point1Text', data.techSecuritySlider2Point1Text);
  setImg('techSecuritySlider2Point2Icon-preview', data.techSecuritySlider2Point2Icon);
  setVal('remove_techSecuritySlider2Point2Icon', 'false');
  setVal('techSecuritySlider2Point2Text', data.techSecuritySlider2Point2Text);
  setImg('techSecuritySlider2Point3Icon-preview', data.techSecuritySlider2Point3Icon);
  setVal('remove_techSecuritySlider2Point3Icon', 'false');
  setVal('techSecuritySlider2Point3Text', data.techSecuritySlider2Point3Text);
  setVal('techSecuritySlider2FeatureHeading', data.techSecuritySlider2FeatureHeading);

  // Cost Section
  setVal('techCostTitle', data.techCostTitle);
  setVal('techCostLeftDesc', data.techCostLeftDesc);
  setVal('techCostRightTitle', data.techCostRightTitle);
  setVal('techCostRightDesc', data.techCostRightDesc);
  setImg('techCostRightImage-preview', data.techCostRightImage);
  setVal('remove_techCostRightImage', 'false');
  setImg('techCostRightBgImage-preview', data.techCostRightBgImage);
  setVal('remove_techCostRightBgImage', 'false');

  // Transparency Section
  setVal('techTransparencyTitle', data.techTransparencyTitle);
  setVal('techTransparencyDesc', data.techTransparencyDesc);
  setImg('techTransparencyCard1Icon-preview', data.techTransparencyCard1Icon);
  setVal('remove_techTransparencyCard1Icon', 'false');
  setVal('techTransparencyCard1Desc', data.techTransparencyCard1Desc);
  setImg('techTransparencyCard2Icon-preview', data.techTransparencyCard2Icon);
  setVal('remove_techTransparencyCard2Icon', 'false');
  setVal('techTransparencyCard2Desc', data.techTransparencyCard2Desc);
  setImg('techTransparencyCard3Icon-preview', data.techTransparencyCard3Icon);
  setVal('remove_techTransparencyCard3Icon', 'false');
  setVal('techTransparencyCard3Desc', data.techTransparencyCard3Desc);
  setImg('techTransparencyCard4Icon-preview', data.techTransparencyCard4Icon);
  setVal('remove_techTransparencyCard4Icon', 'false');
  setVal('techTransparencyCard4Desc', data.techTransparencyCard4Desc);


  // Comp Adv Section
  setVal('techCompAdvTitle', data.techCompAdvTitle);
  setVal('techCompAdvDesc', data.techCompAdvDesc);
  setImg('techCompAdvRightImage-preview', data.techCompAdvRightImage);
  setVal('remove_techCompAdvRightImage', 'false');
  setImg('techCompAdvRightBgImage-preview', data.techCompAdvRightBgImage);
  setVal('remove_techCompAdvRightBgImage', 'false');
  setVal('techCompAdvFeatureTitle', data.techCompAdvFeatureTitle);
  setImg('techCompAdvFeature1Icon-preview', data.techCompAdvFeature1Icon);
  setVal('remove_techCompAdvFeature1Icon', 'false');
  setVal('techCompAdvFeature1Text', data.techCompAdvFeature1Text);
  setImg('techCompAdvFeature2Icon-preview', data.techCompAdvFeature2Icon);
  setVal('remove_techCompAdvFeature2Icon', 'false');
  setVal('techCompAdvFeature2Text', data.techCompAdvFeature2Text);
  setImg('techCompAdvFeature3Icon-preview', data.techCompAdvFeature3Icon);
  setVal('remove_techCompAdvFeature3Icon', 'false');
  setVal('techCompAdvFeature3Text', data.techCompAdvFeature3Text);
  setVal('techCompAdvPointsTitle', data.techCompAdvPointsTitle);
  setImg('techCompAdvPoint1Icon-preview', data.techCompAdvPoint1Icon);
  setVal('remove_techCompAdvPoint1Icon', 'false');
  setVal('techCompAdvPoint1Text', data.techCompAdvPoint1Text);
  setImg('techCompAdvPoint2Icon-preview', data.techCompAdvPoint2Icon);
  setVal('remove_techCompAdvPoint2Icon', 'false');
  setVal('techCompAdvPoint2Text', data.techCompAdvPoint2Text);
  setImg('techCompAdvPoint3Icon-preview', data.techCompAdvPoint3Icon);
  setVal('remove_techCompAdvPoint3Icon', 'false');
  setVal('techCompAdvPoint3Text', data.techCompAdvPoint3Text);

  // Future Section
  setVal('techFutureTitle', data.techFutureTitle);
  setVal('techFutureDesc', data.techFutureDesc);
  setVal('techFutureBtn1Text', data.techFutureBtn1Text);
  setVal('techFutureBtn1Link', data.techFutureBtn1Link);
  setVal('techFutureBtn2Text', data.techFutureBtn2Text);
  setVal('techFutureBtn2Link', data.techFutureBtn2Link);
  setImg('techFutureTopRightImage-preview', data.techFutureTopRightImage);
  setVal('remove_techFutureTopRightImage', 'false');
  setImg('techFutureBottomLeftImage-preview', data.techFutureBottomLeftImage);
  setVal('remove_techFutureBottomLeftImage', 'false');

  // Render dynamic list fields
  if (data.techCard1Paragraphs) renderDynamicParagraphs('techCard1Paragraphs', data.techCard1Paragraphs);
  if (data.techCard2TopParagraphs) renderDynamicParagraphs('techCard2TopParagraphs', data.techCard2TopParagraphs);
  if (data.techCard2BottomParagraphs) renderDynamicParagraphs('techCard2BottomParagraphs', data.techCard2BottomParagraphs);
  if (data.techCard3Paragraphs) renderDynamicParagraphs('techCard3Paragraphs', data.techCard3Paragraphs);
  if (data.techSmartCheckpoints) renderDynamicParagraphs('techSmartCheckpoints', data.techSmartCheckpoints);
  if (data.techSecuritySlider2FeatureList) renderDynamicParagraphs('techSecuritySlider2FeatureList', data.techSecuritySlider2FeatureList);
  if (data.techCostParagraphs) renderDynamicParagraphs('techCostParagraphs', data.techCostParagraphs);
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
  appendVal('techHeroTopTitle', 'techHeroTopTitle');
  appendVal('techHeroTitle', 'techHeroTitle');
  appendVal('techHeroDescription', 'techHeroDescription');
  appendVal('techHeroPrimaryBtnText', 'techHeroPrimaryBtnText');
  appendVal('techHeroPrimaryBtnLink', 'techHeroPrimaryBtnLink');
  appendVal('techHeroSecondaryBtnText', 'techHeroSecondaryBtnText');
  appendVal('techHeroSecondaryBtnLink', 'techHeroSecondaryBtnLink');

  appendVal('techCard1Title', 'techCard1Title');
  formData.append('techCard1Paragraphs', JSON.stringify(collectDynamicParagraphs('techCard1Paragraphs')));
  appendFile('techCard1BgImage', 'techCard1BgImage');
  appendFile('techCard1Image', 'techCard1Image');

  appendVal('techCard2Title', 'techCard2Title');
  formData.append('techCard2TopParagraphs', JSON.stringify(collectDynamicParagraphs('techCard2TopParagraphs')));
  appendVal('techCard2Point1Text', 'techCard2Point1Text');
  appendFile('techCard2Point1Icon', 'techCard2Point1Icon');
  appendVal('techCard2Point2Text', 'techCard2Point2Text');
  appendFile('techCard2Point2Icon', 'techCard2Point2Icon');
  appendVal('techCard2Point3Text', 'techCard2Point3Text');
  appendFile('techCard2Point3Icon', 'techCard2Point3Icon');
  appendVal('techCard2Point4Text', 'techCard2Point4Text');
  appendFile('techCard2Point4Icon', 'techCard2Point4Icon');
  formData.append('techCard2BottomParagraphs', JSON.stringify(collectDynamicParagraphs('techCard2BottomParagraphs')));
  appendFile('techCard2BgImage', 'techCard2BgImage');
  appendFile('techCard2Image', 'techCard2Image');

  appendVal('techCard3Title', 'techCard3Title');
  appendVal('techCard3Point1Text', 'techCard3Point1Text');
  appendFile('techCard3Point1Icon', 'techCard3Point1Icon');
  appendVal('techCard3Point2Text', 'techCard3Point2Text');
  appendFile('techCard3Point2Icon', 'techCard3Point2Icon');
  appendVal('techCard3Point3Text', 'techCard3Point3Text');
  appendFile('techCard3Point3Icon', 'techCard3Point3Icon');
  formData.append('techCard3Paragraphs', JSON.stringify(collectDynamicParagraphs('techCard3Paragraphs')));
  appendFile('techCard3BgImage', 'techCard3BgImage');
  appendFile('techCard3Image', 'techCard3Image');

  // append remove flags for tech cards
  const techRemoveFlags = [
    'remove_techCard1BgImage', 'remove_techCard1Image',
    'remove_techCard2Point1Icon', 'remove_techCard2Point2Icon', 'remove_techCard2Point3Icon', 'remove_techCard2Point4Icon', 'remove_techCard2BgImage', 'remove_techCard2Image',
    'remove_techCard3Point1Icon', 'remove_techCard3Point2Icon', 'remove_techCard3Point3Icon', 'remove_techCard3BgImage', 'remove_techCard3Image'
  ];
  techRemoveFlags.forEach(flag => {
    appendVal(flag, flag);
  });

  appendVal('techConsensusBadge', 'techConsensusBadge');
  appendVal('techConsensusTitle', 'techConsensusTitle');
  appendVal('techConsensusDescription', 'techConsensusDescription');
  appendVal('techConsensusCard1Desc', 'techConsensusCard1Desc');
  appendFile('techConsensusCard1Icon', 'techConsensusCard1Icon');
  appendVal('techConsensusCard2Desc', 'techConsensusCard2Desc');
  appendFile('techConsensusCard2Icon', 'techConsensusCard2Icon');
  appendVal('techConsensusCard3Desc', 'techConsensusCard3Desc');
  appendFile('techConsensusCard3Icon', 'techConsensusCard3Icon');
  appendVal('techConsensusBottomDesc', 'techConsensusBottomDesc');

  appendVal('techSmartTitle', 'techSmartTitle');
  appendVal('techSmartDesc', 'techSmartDesc');
  formData.append('techSmartCheckpoints', JSON.stringify(collectDynamicParagraphs('techSmartCheckpoints')));
  appendVal('techSmartFeature1Name', 'techSmartFeature1Name');
  appendFile('techSmartFeature1Icon', 'techSmartFeature1Icon');
  appendVal('techSmartFeature2Name', 'techSmartFeature2Name');
  appendFile('techSmartFeature2Icon', 'techSmartFeature2Icon');
  appendVal('techSmartFeature3Name', 'techSmartFeature3Name');
  appendFile('techSmartFeature3Icon', 'techSmartFeature3Icon');
  appendFile('techSmartRightBgImage', 'techSmartRightBgImage');
  appendFile('techSmartRightImage', 'techSmartRightImage');

  const newTechRemoveFlags = [
    'remove_techConsensusCard1Icon', 'remove_techConsensusCard2Icon', 'remove_techConsensusCard3Icon',
    'remove_techSmartFeature1Icon', 'remove_techSmartFeature2Icon', 'remove_techSmartFeature3Icon',
    'remove_techSmartRightBgImage', 'remove_techSmartRightImage'
  ];
  newTechRemoveFlags.forEach(flag => {
    appendVal(flag, flag);
  });

  appendFile('techSlide1Image', 'techSlide1Image');
  appendVal('techSlide1Title', 'techSlide1Title');
  appendVal('techSlide1Desc', 'techSlide1Desc');
  appendFile('techSlide1Point1Icon', 'techSlide1Point1Icon');
  appendVal('techSlide1Point1Text', 'techSlide1Point1Text');
  appendFile('techSlide1Point2Icon', 'techSlide1Point2Icon');
  appendVal('techSlide1Point2Text', 'techSlide1Point2Text');
  appendVal('techSlide1FeatureHeading', 'techSlide1FeatureHeading');
  appendFile('techSlide1Feature1Icon', 'techSlide1Feature1Icon');
  appendVal('techSlide1Feature1Text', 'techSlide1Feature1Text');
  appendFile('techSlide1Feature2Icon', 'techSlide1Feature2Icon');
  appendVal('techSlide1Feature2Text', 'techSlide1Feature2Text');
  appendFile('techSlide1Feature3Icon', 'techSlide1Feature3Icon');
  appendVal('techSlide1Feature3Text', 'techSlide1Feature3Text');

  appendVal('techSlide2Title', 'techSlide2Title');
  appendVal('techSlide2Desc', 'techSlide2Desc');
  appendFile('techSlide2Image', 'techSlide2Image');
  appendFile('techSlide2Feature1Icon', 'techSlide2Feature1Icon');
  appendVal('techSlide2Feature1Text', 'techSlide2Feature1Text');
  appendFile('techSlide2Feature2Icon', 'techSlide2Feature2Icon');
  appendVal('techSlide2Feature2Text', 'techSlide2Feature2Text');
  appendFile('techSlide2Feature3Icon', 'techSlide2Feature3Icon');
  appendVal('techSlide2Feature3Text', 'techSlide2Feature3Text');

  appendFile('techSlide3Image', 'techSlide3Image');
  appendVal('techSlide3Title', 'techSlide3Title');
  appendVal('techSlide3Desc', 'techSlide3Desc');
  appendFile('techSlide3Feature1Icon', 'techSlide3Feature1Icon');
  appendVal('techSlide3Feature1Text', 'techSlide3Feature1Text');
  appendFile('techSlide3Feature2Icon', 'techSlide3Feature2Icon');
  appendVal('techSlide3Feature2Text', 'techSlide3Feature2Text');
  appendFile('techSlide3Feature3Icon', 'techSlide3Feature3Icon');
  appendVal('techSlide3Feature3Text', 'techSlide3Feature3Text');

  const slideRemoveFlags = [
    'remove_techSlide1Image', 'remove_techSlide1Point1Icon', 'remove_techSlide1Point2Icon',
    'remove_techSlide1Feature1Icon', 'remove_techSlide1Feature2Icon', 'remove_techSlide1Feature3Icon',
    'remove_techSlide2Image', 'remove_techSlide2Feature1Icon', 'remove_techSlide2Feature2Icon', 'remove_techSlide2Feature3Icon',
    'remove_techSlide3Image', 'remove_techSlide3Feature1Icon', 'remove_techSlide3Feature2Icon', 'remove_techSlide3Feature3Icon'
  ];
  slideRemoveFlags.forEach(flag => {
    appendVal(flag, flag);
  });

  appendVal('techSecuritySlider1Title', 'techSecuritySlider1Title');
  appendVal('techSecuritySlider1Desc', 'techSecuritySlider1Desc');
  appendFile('techSecuritySlider1Feature1Icon', 'techSecuritySlider1Feature1Icon');
  appendVal('techSecuritySlider1Feature1Text', 'techSecuritySlider1Feature1Text');
  appendFile('techSecuritySlider1Feature2Icon', 'techSecuritySlider1Feature2Icon');
  appendVal('techSecuritySlider1Feature2Text', 'techSecuritySlider1Feature2Text');
  appendFile('techSecuritySlider1Feature3Icon', 'techSecuritySlider1Feature3Icon');
  appendVal('techSecuritySlider1Feature3Text', 'techSecuritySlider1Feature3Text');
  appendFile('techSecuritySlider1RightImage', 'techSecuritySlider1RightImage');
  appendFile('techSecuritySlider1RightBgImage', 'techSecuritySlider1RightBgImage');

  appendVal('techSecuritySlider2Title', 'techSecuritySlider2Title');
  appendVal('techSecuritySlider2Desc', 'techSecuritySlider2Desc');
  appendFile('techSecuritySlider2RightImage', 'techSecuritySlider2RightImage');
  appendFile('techSecuritySlider2RightBgImage', 'techSecuritySlider2RightBgImage');
  appendFile('techSecuritySlider2Point1Icon', 'techSecuritySlider2Point1Icon');
  appendVal('techSecuritySlider2Point1Text', 'techSecuritySlider2Point1Text');
  appendFile('techSecuritySlider2Point2Icon', 'techSecuritySlider2Point2Icon');
  appendVal('techSecuritySlider2Point2Text', 'techSecuritySlider2Point2Text');
  appendVal('techSecuritySlider2FeatureTitle', 'techSecuritySlider2FeatureTitle');
  formData.append('techSecuritySlider2FeatureList', JSON.stringify(collectDynamicParagraphs('techSecuritySlider2FeatureList')));

  const secRemoveFlags = [
    'remove_techSecuritySlider1Feature1Icon', 'remove_techSecuritySlider1Feature2Icon', 'remove_techSecuritySlider1Feature3Icon',
    'remove_techSecuritySlider1RightImage', 'remove_techSecuritySlider1RightBgImage',
    'remove_techSecuritySlider2Point1Icon', 'remove_techSecuritySlider2Point2Icon'
  ];
  secRemoveFlags.forEach(flag => {
    appendVal(flag, flag);
  });

  appendVal('techCostTitle', 'techCostTitle');
  formData.append('techCostParagraphs', JSON.stringify(collectDynamicParagraphs('techCostParagraphs')));

  appendVal('techTransparencyTitle', 'techTransparencyTitle');
  appendVal('techTransparencyDesc', 'techTransparencyDesc');
  appendFile('techTransparencyCard1Icon', 'techTransparencyCard1Icon');
  appendVal('techTransparencyCard1Desc', 'techTransparencyCard1Desc');
  appendFile('techTransparencyCard2Icon', 'techTransparencyCard2Icon');
  appendVal('techTransparencyCard2Desc', 'techTransparencyCard2Desc');
  appendFile('techTransparencyCard3Icon', 'techTransparencyCard3Icon');
  appendVal('techTransparencyCard3Desc', 'techTransparencyCard3Desc');
  appendFile('techTransparencyCard4Icon', 'techTransparencyCard4Icon');
  appendVal('techTransparencyCard4Desc', 'techTransparencyCard4Desc');

  const extraFlags = ['remove_techTransparencyCard1Icon', 'remove_techTransparencyCard2Icon', 'remove_techTransparencyCard3Icon', 'remove_techTransparencyCard4Icon'];
  extraFlags.forEach(flag => {
    appendVal(flag, flag);
  });

  appendVal('techCompAdvTitle', 'techCompAdvTitle');
  appendVal('techCompAdvDesc', 'techCompAdvDesc');
  appendVal('techCompAdvFeatureTitle', 'techCompAdvFeatureTitle');
  appendFile('techCompAdvFeature1Icon', 'techCompAdvFeature1Icon');
  appendVal('techCompAdvFeature1Text', 'techCompAdvFeature1Text');
  appendFile('techCompAdvFeature2Icon', 'techCompAdvFeature2Icon');
  appendVal('techCompAdvFeature2Text', 'techCompAdvFeature2Text');
  appendFile('techCompAdvFeature3Icon', 'techCompAdvFeature3Icon');
  appendVal('techCompAdvFeature3Text', 'techCompAdvFeature3Text');
  appendVal('techCompAdvPointsTitle', 'techCompAdvPointsTitle');
  appendFile('techCompAdvPoint1Icon', 'techCompAdvPoint1Icon');
  appendVal('techCompAdvPoint1Text', 'techCompAdvPoint1Text');
  appendFile('techCompAdvPoint2Icon', 'techCompAdvPoint2Icon');
  appendVal('techCompAdvPoint2Text', 'techCompAdvPoint2Text');
  appendFile('techCompAdvPoint3Icon', 'techCompAdvPoint3Icon');
  appendVal('techCompAdvPoint3Text', 'techCompAdvPoint3Text');
  appendFile('techCompAdvRightImage', 'techCompAdvRightImage');
  appendFile('techCompAdvRightBgImage', 'techCompAdvRightBgImage');

  appendVal('techFutureTitle', 'techFutureTitle');
  appendVal('techFutureDesc', 'techFutureDesc');
  appendVal('techFutureBtn1Text', 'techFutureBtn1Text');
  appendVal('techFutureBtn1Link', 'techFutureBtn1Link');
  appendVal('techFutureBtn2Text', 'techFutureBtn2Text');
  appendVal('techFutureBtn2Link', 'techFutureBtn2Link');
  appendFile('techFutureTopRightImage', 'techFutureTopRightImage');
  appendFile('techFutureBottomLeftImage', 'techFutureBottomLeftImage');

  const compAdvFlags = ['remove_techCompAdvFeature1Icon', 'remove_techCompAdvFeature2Icon', 'remove_techCompAdvFeature3Icon', 'remove_techCompAdvPoint1Icon', 'remove_techCompAdvPoint2Icon', 'remove_techCompAdvPoint3Icon', 'remove_techCompAdvRightImage', 'remove_techCompAdvRightBgImage', 'remove_techFutureTopRightImage', 'remove_techFutureBottomLeftImage'];
  compAdvFlags.forEach(flag => {
    appendVal(flag, flag);
  });
};
