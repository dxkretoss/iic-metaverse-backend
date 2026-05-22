/*
 * Admin JavaScript for the TOKEN page.
 * This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
 */

window.populatePageForm = function (data) {
  // Safe image preview setter
  const setImg = (previewId, url) => {
    if (typeof setImagePreview === 'function') {
      setImagePreview(previewId, url);
    } else {
      const el = document.getElementById(previewId);
      if (el) el.src = url || '';
    }
  };

  // Helper to set text/textarea/select values safely
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && el.type !== 'file') {
      el.value = val || '';
    }
  };

  // Safe dynamic paragraph renderer helper
  const setList = (containerId, arr) => {
    if (typeof renderDynamicParagraphs === 'function') {
      renderDynamicParagraphs(containerId, arr || []);
    }
  };

  // Hero Section
  setVal('tokenHeroTopHeader', data.tokenHeroTopHeader);
  setVal('tokenHeroTitle', data.tokenHeroTitle);
  setVal('tokenHeroDescription', data.tokenHeroDescription);
  setVal('tokenHeroPrimaryBtnText', data.tokenHeroPrimaryBtnText);
  setVal('tokenHeroPrimaryBtnLink', data.tokenHeroPrimaryBtnLink);
  setVal('tokenHeroSecondaryBtnText', data.tokenHeroSecondaryBtnText);
  setVal('tokenHeroSecondaryBtnLink', data.tokenHeroSecondaryBtnLink);

  // Dual Ecosystem Section
  setVal('tokenDualEcosystemTitle', data.tokenDualEcosystemTitle);
  setVal('tokenDualEcosystemDesc', data.tokenDualEcosystemDesc);
  setVal('tokenDualEcosystemBottomDesc', data.tokenDualEcosystemBottomDesc);

  setImg('tokenDualEcosystemCard1Image-preview', data.tokenDualEcosystemCard1Image);
  setVal('remove_tokenDualEcosystemCard1Image', 'false');
  setVal('tokenDualEcosystemCard1Desc', data.tokenDualEcosystemCard1Desc);

  setImg('tokenDualEcosystemCard2Image-preview', data.tokenDualEcosystemCard2Image);
  setVal('remove_tokenDualEcosystemCard2Image', 'false');
  setVal('tokenDualEcosystemCard2Desc', data.tokenDualEcosystemCard2Desc);

  // Hybrid Token Section
  setVal('tokenHybridBadge', data.tokenHybridBadge);
  setVal('tokenHybridTitle', data.tokenHybridTitle);
  setVal('tokenHybridDesc', data.tokenHybridDesc);
  setVal('tokenHybridBottomDesc', data.tokenHybridBottomDesc);

  setImg('tokenHybridCard1Icon-preview', data.tokenHybridCard1Icon);
  setVal('remove_tokenHybridCard1Icon', 'false');
  setVal('tokenHybridCard1Title', data.tokenHybridCard1Title);
  setVal('tokenHybridCard1Desc', data.tokenHybridCard1Desc);

  setImg('tokenHybridCard2Icon-preview', data.tokenHybridCard2Icon);
  setVal('remove_tokenHybridCard2Icon', 'false');
  setVal('tokenHybridCard2Title', data.tokenHybridCard2Title);
  setVal('tokenHybridCard2Desc', data.tokenHybridCard2Desc);

  // Token System Section
  setVal('tokenSystemTitle', data.tokenSystemTitle);
  setVal('tokenSystemDesc', data.tokenSystemDesc);

  // Slide 1
  setVal('tokenSystemSlide1Badge', data.tokenSystemSlide1Badge);
  setVal('tokenSystemSlide1Title', data.tokenSystemSlide1Title);
  setVal('tokenSystemSlide1BtnText', data.tokenSystemSlide1BtnText);
  setVal('tokenSystemSlide1BtnLink', data.tokenSystemSlide1BtnLink);
  setImg('tokenSystemSlide1Image-preview', data.tokenSystemSlide1Image);
  setVal('remove_tokenSystemSlide1Image', 'false');
  setList('tokenSystemSlide1DescList', data.tokenSystemSlide1DescList);

  // Slide 2
  setVal('tokenSystemSlide2Badge', data.tokenSystemSlide2Badge);
  setVal('tokenSystemSlide2Title', data.tokenSystemSlide2Title);
  setImg('tokenSystemSlide2Image-preview', data.tokenSystemSlide2Image);
  setVal('remove_tokenSystemSlide2Image', 'false');
  setList('tokenSystemSlide2DescList', data.tokenSystemSlide2DescList);

  // Slide 3
  setVal('tokenSystemSlide3Badge', data.tokenSystemSlide3Badge);
  setVal('tokenSystemSlide3Title', data.tokenSystemSlide3Title);
  setImg('tokenSystemSlide3Image-preview', data.tokenSystemSlide3Image);
  setVal('remove_tokenSystemSlide3Image', 'false');
  setList('tokenSystemSlide3DescList', data.tokenSystemSlide3DescList);

  // Slide 4
  setVal('tokenSystemSlide4Badge', data.tokenSystemSlide4Badge);
  setVal('tokenSystemSlide4Title', data.tokenSystemSlide4Title);
  setVal('tokenSystemSlide4FeatureHeading', data.tokenSystemSlide4FeatureHeading);
  setImg('tokenSystemSlide4Image-preview', data.tokenSystemSlide4Image);
  setVal('remove_tokenSystemSlide4Image', 'false');
  setList('tokenSystemSlide4DescList', data.tokenSystemSlide4DescList);
  setList('tokenSystemSlide4FeatureList', data.tokenSystemSlide4FeatureList);

  // Slide 5
  setVal('tokenSystemSlide5Badge', data.tokenSystemSlide5Badge);
  setVal('tokenSystemSlide5Title', data.tokenSystemSlide5Title);
  setVal('tokenSystemSlide5Heading', data.tokenSystemSlide5Heading);
  setImg('tokenSystemSlide5Image-preview', data.tokenSystemSlide5Image);
  setVal('remove_tokenSystemSlide5Image', 'false');
  setList('tokenSystemSlide5DescList', data.tokenSystemSlide5DescList);
  setList('tokenSystemSlide5HeadingDescList', data.tokenSystemSlide5HeadingDescList);

  // Slide 6
  setVal('tokenSystemSlide6Badge', data.tokenSystemSlide6Badge);
  setVal('tokenSystemSlide6Title', data.tokenSystemSlide6Title);
  setVal('tokenSystemSlide6FeatureHeading', data.tokenSystemSlide6FeatureHeading);
  setImg('tokenSystemSlide6Image-preview', data.tokenSystemSlide6Image);
  setVal('remove_tokenSystemSlide6Image', 'false');
  setList('tokenSystemSlide6DescList', data.tokenSystemSlide6DescList);
  setList('tokenSystemSlide6FeatureList', data.tokenSystemSlide6FeatureList);

  // Integration Slide 1
  setVal('tokenIntegrationSlide1Title', data.tokenIntegrationSlide1Title);
  setVal('tokenIntegrationSlide1FeatureHeading', data.tokenIntegrationSlide1FeatureHeading);
  setImg('tokenIntegrationSlide1Image-preview', data.tokenIntegrationSlide1Image);
  setVal('remove_tokenIntegrationSlide1Image', 'false');
  setList('tokenIntegrationSlide1DescList', data.tokenIntegrationSlide1DescList);

  setImg('tokenIntegrationSlide1Feature1Icon-preview', data.tokenIntegrationSlide1Feature1Icon);
  setVal('remove_tokenIntegrationSlide1Feature1Icon', 'false');
  setVal('tokenIntegrationSlide1Feature1Text', data.tokenIntegrationSlide1Feature1Text);

  setImg('tokenIntegrationSlide1Feature2Icon-preview', data.tokenIntegrationSlide1Feature2Icon);
  setVal('remove_tokenIntegrationSlide1Feature2Icon', 'false');
  setVal('tokenIntegrationSlide1Feature2Text', data.tokenIntegrationSlide1Feature2Text);

  setImg('tokenIntegrationSlide1Feature3Icon-preview', data.tokenIntegrationSlide1Feature3Icon);
  setVal('remove_tokenIntegrationSlide1Feature3Icon', 'false');
  setVal('tokenIntegrationSlide1Feature3Text', data.tokenIntegrationSlide1Feature3Text);

  // Integration Slide 2
  setVal('tokenIntegrationSlide2Title', data.tokenIntegrationSlide2Title);
  setImg('tokenIntegrationSlide2Image-preview', data.tokenIntegrationSlide2Image);
  setVal('remove_tokenIntegrationSlide2Image', 'false');
  setList('tokenIntegrationSlide2DescList', data.tokenIntegrationSlide2DescList);

  setImg('tokenIntegrationSlide2Feature1Icon-preview', data.tokenIntegrationSlide2Feature1Icon);
  setVal('remove_tokenIntegrationSlide2Feature1Icon', 'false');
  setVal('tokenIntegrationSlide2Feature1Text', data.tokenIntegrationSlide2Feature1Text);

  setImg('tokenIntegrationSlide2Feature2Icon-preview', data.tokenIntegrationSlide2Feature2Icon);
  setVal('remove_tokenIntegrationSlide2Feature2Icon', 'false');
  setVal('tokenIntegrationSlide2Feature2Text', data.tokenIntegrationSlide2Feature2Text);

  setImg('tokenIntegrationSlide2Feature3Icon-preview', data.tokenIntegrationSlide2Feature3Icon);
  setVal('remove_tokenIntegrationSlide2Feature3Icon', 'false');
  setVal('tokenIntegrationSlide2Feature3Text', data.tokenIntegrationSlide2Feature3Text);

  // Integration Slide 3
  setVal('tokenIntegrationSlide3Title', data.tokenIntegrationSlide3Title);
  setImg('tokenIntegrationSlide3Image-preview', data.tokenIntegrationSlide3Image);
  setVal('remove_tokenIntegrationSlide3Image', 'false');
  setList('tokenIntegrationSlide3DescList', data.tokenIntegrationSlide3DescList);

  setImg('tokenIntegrationSlide3Feature1Icon-preview', data.tokenIntegrationSlide3Feature1Icon);
  setVal('remove_tokenIntegrationSlide3Feature1Icon', 'false');
  setVal('tokenIntegrationSlide3Feature1Text', data.tokenIntegrationSlide3Feature1Text);

  setImg('tokenIntegrationSlide3Feature2Icon-preview', data.tokenIntegrationSlide3Feature2Icon);
  setVal('remove_tokenIntegrationSlide3Feature2Icon', 'false');
  setVal('tokenIntegrationSlide3Feature2Text', data.tokenIntegrationSlide3Feature2Text);

  setImg('tokenIntegrationSlide3Feature3Icon-preview', data.tokenIntegrationSlide3Feature3Icon);
  setVal('remove_tokenIntegrationSlide3Feature3Icon', 'false');
  setVal('tokenIntegrationSlide3Feature3Text', data.tokenIntegrationSlide3Feature3Text);

  // Smart Coins Section
  setVal('tokenSmartCoinsTitle', data.tokenSmartCoinsTitle);

  // Smart Coins Tab 1
  setVal('tokenSmartCoinsTab1BtnText', data.tokenSmartCoinsTab1BtnText);
  setVal('tokenSmartCoinsTab1Title', data.tokenSmartCoinsTab1Title);
  setVal('tokenSmartCoinsTab1FeatureHeading', data.tokenSmartCoinsTab1FeatureHeading);
  setVal('tokenSmartCoinsTab1ValueHeading', data.tokenSmartCoinsTab1ValueHeading);
  setVal('tokenSmartCoinsTab1ValueDesc', data.tokenSmartCoinsTab1ValueDesc);

  setImg('tokenSmartCoinsTab1Image-preview', data.tokenSmartCoinsTab1Image);
  setVal('remove_tokenSmartCoinsTab1Image', 'false');
  setImg('tokenSmartCoinsTab1BgImage-preview', data.tokenSmartCoinsTab1BgImage);
  setVal('remove_tokenSmartCoinsTab1BgImage', 'false');

  setList('tokenSmartCoinsTab1DescList', data.tokenSmartCoinsTab1DescList);

  setVal('tokenSmartCoinsTab1F1Title', data.tokenSmartCoinsTab1F1Title);
  setVal('tokenSmartCoinsTab1F1Desc', data.tokenSmartCoinsTab1F1Desc);
  setVal('tokenSmartCoinsTab1F2Title', data.tokenSmartCoinsTab1F2Title);
  setVal('tokenSmartCoinsTab1F2Desc', data.tokenSmartCoinsTab1F2Desc);
  setVal('tokenSmartCoinsTab1F3Title', data.tokenSmartCoinsTab1F3Title);
  setVal('tokenSmartCoinsTab1F3Desc', data.tokenSmartCoinsTab1F3Desc);
  setVal('tokenSmartCoinsTab1F4Title', data.tokenSmartCoinsTab1F4Title);
  setVal('tokenSmartCoinsTab1F4Desc', data.tokenSmartCoinsTab1F4Desc);
  setVal('tokenSmartCoinsTab1F5Title', data.tokenSmartCoinsTab1F5Title);
  setVal('tokenSmartCoinsTab1F5Desc', data.tokenSmartCoinsTab1F5Desc);

  // Smart Coins Tab 2
  setVal('tokenSmartCoinsTab2BtnText', data.tokenSmartCoinsTab2BtnText);
  setVal('tokenSmartCoinsTab2Title', data.tokenSmartCoinsTab2Title);
  setVal('tokenSmartCoinsTab2F1Heading', data.tokenSmartCoinsTab2F1Heading);
  setVal('tokenSmartCoinsTab2F2Heading', data.tokenSmartCoinsTab2F2Heading);
  setVal('tokenSmartCoinsTab2ValueHeading', data.tokenSmartCoinsTab2ValueHeading);
  setVal('tokenSmartCoinsTab2ValueDesc', data.tokenSmartCoinsTab2ValueDesc);

  setImg('tokenSmartCoinsTab2Image-preview', data.tokenSmartCoinsTab2Image);
  setVal('remove_tokenSmartCoinsTab2Image', 'false');
  setImg('tokenSmartCoinsTab2BgImage-preview', data.tokenSmartCoinsTab2BgImage);
  setVal('remove_tokenSmartCoinsTab2BgImage', 'false');

  setList('tokenSmartCoinsTab2DescList', data.tokenSmartCoinsTab2DescList);
  setList('tokenSmartCoinsTab2F1List', data.tokenSmartCoinsTab2F1List);
  setList('tokenSmartCoinsTab2F2List', data.tokenSmartCoinsTab2F2List);

  // Token Future Section
  setVal('tokenFutureTitle', data.tokenFutureTitle);
  setVal('tokenFuturePrimaryBtnText', data.tokenFuturePrimaryBtnText);
  setVal('tokenFuturePrimaryBtnLink', data.tokenFuturePrimaryBtnLink);
  setVal('tokenFutureSecondaryBtnText', data.tokenFutureSecondaryBtnText);
  setVal('tokenFutureSecondaryBtnLink', data.tokenFutureSecondaryBtnLink);

  setImg('tokenFutureTopRightImage-preview', data.tokenFutureTopRightImage);
  setVal('remove_tokenFutureTopRightImage', 'false');
  setImg('tokenFutureBottomLeftImage-preview', data.tokenFutureBottomLeftImage);
  setVal('remove_tokenFutureBottomLeftImage', 'false');

  setList('tokenFutureDescList', data.tokenFutureDescList);
};

window.appendPageFormData = function (formData) {
  const appendVal = (key, id) => {
    const el = document.getElementById(id || key);
    if (el) formData.append(key, el.value);
  };

  const appendFileToFormData = (fileId, removeFlagId) => {
    const fileInput = document.getElementById(fileId);
    if (fileInput && fileInput.files && fileInput.files[0]) {
      formData.append(fileId, fileInput.files[0]);
    }
    const removeInput = document.getElementById(removeFlagId);
    if (removeInput) {
      formData.append(removeFlagId, removeInput.value);
    }
  };

  const appendDynamicParagraphs = (fd, containerId) => {
    const textareas = document.querySelectorAll('.' + containerId + '-textarea');
    const paragraphs = [];
    textareas.forEach(textarea => {
      paragraphs.push(textarea.value);
    });
    fd.append(containerId, JSON.stringify(paragraphs));
  };

  // Collect values from the DOM
  appendVal("tokenHeroTopHeader");
  appendVal("tokenHeroTitle");
  appendVal("tokenHeroPrimaryBtnText");
  appendVal("tokenHeroPrimaryBtnLink");
  appendVal("tokenHeroSecondaryBtnText");
  appendVal("tokenHeroSecondaryBtnLink");

  appendVal("tokenDualEcosystemTitle");
  appendVal("tokenDualEcosystemDesc");
  appendFileToFormData("tokenDualEcosystemCard1Image", "remove_tokenDualEcosystemCard1Image");
  appendVal("tokenDualEcosystemCard1Desc");
  appendFileToFormData("tokenDualEcosystemCard2Image", "remove_tokenDualEcosystemCard2Image");
  appendVal("tokenDualEcosystemCard2Desc");
  appendVal("tokenDualEcosystemBottomDesc");

  appendVal("tokenHybridBadge");
  appendVal("tokenHybridTitle");
  appendVal("tokenHybridDesc");
  appendFileToFormData("tokenHybridCard1Icon", "remove_tokenHybridCard1Icon");
  appendVal("tokenHybridCard1Title");
  appendVal("tokenHybridCard1Desc");
  appendFileToFormData("tokenHybridCard2Icon", "remove_tokenHybridCard2Icon");
  appendVal("tokenHybridCard2Title");
  appendVal("tokenHybridCard2Desc");
  appendVal("tokenHybridBottomDesc");

  appendVal("tokenSystemTitle");
  appendVal("tokenSystemDesc");

  appendVal("tokenSystemSlide1Badge");
  appendVal("tokenSystemSlide1Title");
  appendDynamicParagraphs(formData, "tokenSystemSlide1DescList");
  appendVal("tokenSystemSlide1BtnText");
  appendVal("tokenSystemSlide1BtnLink");
  appendFileToFormData("tokenSystemSlide1Image", "remove_tokenSystemSlide1Image");

  appendVal("tokenSystemSlide2Badge");
  appendVal("tokenSystemSlide2Title");
  appendDynamicParagraphs(formData, "tokenSystemSlide2DescList");
  appendFileToFormData("tokenSystemSlide2Image", "remove_tokenSystemSlide2Image");

  appendVal("tokenSystemSlide3Badge");
  appendVal("tokenSystemSlide3Title");
  appendDynamicParagraphs(formData, "tokenSystemSlide3DescList");
  appendFileToFormData("tokenSystemSlide3Image", "remove_tokenSystemSlide3Image");

  appendVal("tokenSystemSlide4Badge");
  appendVal("tokenSystemSlide4Title");
  appendDynamicParagraphs(formData, "tokenSystemSlide4DescList");
  appendVal("tokenSystemSlide4FeatureHeading");
  appendDynamicParagraphs(formData, "tokenSystemSlide4FeatureList");
  appendFileToFormData("tokenSystemSlide4Image", "remove_tokenSystemSlide4Image");

  appendVal("tokenSystemSlide5Badge");
  appendVal("tokenSystemSlide5Title");
  appendDynamicParagraphs(formData, "tokenSystemSlide5DescList");
  appendVal("tokenSystemSlide5Heading");
  appendDynamicParagraphs(formData, "tokenSystemSlide5HeadingDescList");
  appendFileToFormData("tokenSystemSlide5Image", "remove_tokenSystemSlide5Image");

  appendVal("tokenSystemSlide6Badge");
  appendVal("tokenSystemSlide6Title");
  appendDynamicParagraphs(formData, "tokenSystemSlide6DescList");
  appendVal("tokenSystemSlide6FeatureHeading");
  appendDynamicParagraphs(formData, "tokenSystemSlide6FeatureList");
  appendFileToFormData("tokenSystemSlide6Image", "remove_tokenSystemSlide6Image");

  appendFileToFormData("tokenIntegrationSlide1Image", "remove_tokenIntegrationSlide1Image");
  appendVal("tokenIntegrationSlide1Title");
  appendDynamicParagraphs(formData, "tokenIntegrationSlide1DescList");
  appendVal("tokenIntegrationSlide1FeatureHeading");
  appendFileToFormData("tokenIntegrationSlide1Feature1Icon", "remove_tokenIntegrationSlide1Feature1Icon");
  appendVal("tokenIntegrationSlide1Feature1Text");
  appendFileToFormData("tokenIntegrationSlide1Feature2Icon", "remove_tokenIntegrationSlide1Feature2Icon");
  appendVal("tokenIntegrationSlide1Feature2Text");
  appendFileToFormData("tokenIntegrationSlide1Feature3Icon", "remove_tokenIntegrationSlide1Feature3Icon");
  appendVal("tokenIntegrationSlide1Feature3Text");

  appendFileToFormData("tokenIntegrationSlide2Image", "remove_tokenIntegrationSlide2Image");
  appendVal("tokenIntegrationSlide2Title");
  appendDynamicParagraphs(formData, "tokenIntegrationSlide2DescList");
  appendFileToFormData("tokenIntegrationSlide2Feature1Icon", "remove_tokenIntegrationSlide2Feature1Icon");
  appendVal("tokenIntegrationSlide2Feature1Text");
  appendFileToFormData("tokenIntegrationSlide2Feature2Icon", "remove_tokenIntegrationSlide2Feature2Icon");
  appendVal("tokenIntegrationSlide2Feature2Text");
  appendFileToFormData("tokenIntegrationSlide2Feature3Icon", "remove_tokenIntegrationSlide2Feature3Icon");
  appendVal("tokenIntegrationSlide2Feature3Text");

  appendFileToFormData("tokenIntegrationSlide3Image", "remove_tokenIntegrationSlide3Image");
  appendVal("tokenIntegrationSlide3Title");
  appendDynamicParagraphs(formData, "tokenIntegrationSlide3DescList");
  appendFileToFormData("tokenIntegrationSlide3Feature1Icon", "remove_tokenIntegrationSlide3Feature1Icon");
  appendVal("tokenIntegrationSlide3Feature1Text");
  appendFileToFormData("tokenIntegrationSlide3Feature2Icon", "remove_tokenIntegrationSlide3Feature2Icon");
  appendVal("tokenIntegrationSlide3Feature2Text");
  appendFileToFormData("tokenIntegrationSlide3Feature3Icon", "remove_tokenIntegrationSlide3Feature3Icon");
  appendVal("tokenIntegrationSlide3Feature3Text");

  appendVal("tokenSmartCoinsTitle");

  // Tab 1
  appendVal("tokenSmartCoinsTab1BtnText");
  appendVal("tokenSmartCoinsTab1Title");
  appendDynamicParagraphs(formData, "tokenSmartCoinsTab1DescList");
  appendFileToFormData("tokenSmartCoinsTab1Image", "remove_tokenSmartCoinsTab1Image");
  appendFileToFormData("tokenSmartCoinsTab1BgImage", "remove_tokenSmartCoinsTab1BgImage");
  appendVal("tokenSmartCoinsTab1FeatureHeading");
  appendVal("tokenSmartCoinsTab1F1Title");
  appendVal("tokenSmartCoinsTab1F1Desc");
  appendVal("tokenSmartCoinsTab1F2Title");
  appendVal("tokenSmartCoinsTab1F2Desc");
  appendVal("tokenSmartCoinsTab1F3Title");
  appendVal("tokenSmartCoinsTab1F3Desc");
  appendVal("tokenSmartCoinsTab1F4Title");
  appendVal("tokenSmartCoinsTab1F4Desc");
  appendVal("tokenSmartCoinsTab1F5Title");
  appendVal("tokenSmartCoinsTab1F5Desc");
  appendVal("tokenSmartCoinsTab1ValueHeading");
  appendVal("tokenSmartCoinsTab1ValueDesc");

  // Tab 2
  appendVal("tokenSmartCoinsTab2BtnText");
  appendVal("tokenSmartCoinsTab2Title");
  appendDynamicParagraphs(formData, "tokenSmartCoinsTab2DescList");
  appendFileToFormData("tokenSmartCoinsTab2Image", "remove_tokenSmartCoinsTab2Image");
  appendFileToFormData("tokenSmartCoinsTab2BgImage", "remove_tokenSmartCoinsTab2BgImage");
  appendVal("tokenSmartCoinsTab2F1Heading");
  appendDynamicParagraphs(formData, "tokenSmartCoinsTab2F1List");
  appendVal("tokenSmartCoinsTab2F2Heading");
  appendDynamicParagraphs(formData, "tokenSmartCoinsTab2F2List");
  appendVal("tokenSmartCoinsTab2ValueHeading");
  appendVal("tokenSmartCoinsTab2ValueDesc");

  appendVal("tokenFutureTitle");
  appendDynamicParagraphs(formData, "tokenFutureDescList");
  appendVal("tokenFuturePrimaryBtnText");
  appendVal("tokenFuturePrimaryBtnLink");
  appendVal("tokenFutureSecondaryBtnText");
  appendVal("tokenFutureSecondaryBtnLink");
  appendFileToFormData("tokenFutureTopRightImage", "remove_tokenFutureTopRightImage");
  appendFileToFormData("tokenFutureBottomLeftImage", "remove_tokenFutureBottomLeftImage");

  appendVal("tokenHeroDescription");
};
