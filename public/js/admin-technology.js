/* 
* Admin JavaScript for the TECHNOLOGY page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Inject values into the DOM safely
  const el_techHeroTopTitle = document.getElementById('techHeroTopTitle'); if (el_techHeroTopTitle && el_techHeroTopTitle.type !== 'file') el_techHeroTopTitle.value = data.techHeroTopTitle || '';
  const el_techHeroTitle = document.getElementById('techHeroTitle'); if (el_techHeroTitle && el_techHeroTitle.type !== 'file') el_techHeroTitle.value = data.techHeroTitle || '';
  const el_techHeroDescription = document.getElementById('techHeroDescription'); if (el_techHeroDescription && el_techHeroDescription.type !== 'file') el_techHeroDescription.value = data.techHeroDescription || '';
  const el_techHeroPrimaryBtnText = document.getElementById('techHeroPrimaryBtnText'); if (el_techHeroPrimaryBtnText && el_techHeroPrimaryBtnText.type !== 'file') el_techHeroPrimaryBtnText.value = data.techHeroPrimaryBtnText || '';
  const el_techHeroPrimaryBtnLink = document.getElementById('techHeroPrimaryBtnLink'); if (el_techHeroPrimaryBtnLink && el_techHeroPrimaryBtnLink.type !== 'file') el_techHeroPrimaryBtnLink.value = data.techHeroPrimaryBtnLink || '';
  const el_techHeroSecondaryBtnText = document.getElementById('techHeroSecondaryBtnText'); if (el_techHeroSecondaryBtnText && el_techHeroSecondaryBtnText.type !== 'file') el_techHeroSecondaryBtnText.value = data.techHeroSecondaryBtnText || '';
  const el_techHeroSecondaryBtnLink = document.getElementById('techHeroSecondaryBtnLink'); if (el_techHeroSecondaryBtnLink && el_techHeroSecondaryBtnLink.type !== 'file') el_techHeroSecondaryBtnLink.value = data.techHeroSecondaryBtnLink || '';
  const el_techCard1Title = document.getElementById('techCard1Title'); if (el_techCard1Title && el_techCard1Title.type !== 'file') el_techCard1Title.value = data.techCard1Title || '';
  const el_techCard1Paragraphs_container = document.getElementById('techCard1Paragraphs-container'); if (el_techCard1Paragraphs_container && el_techCard1Paragraphs_container.type !== 'file') el_techCard1Paragraphs_container.value = data['techCard1Paragraphs-container'] || '';
  const el_techCard1Paragraphs = document.getElementById('techCard1Paragraphs'); if (el_techCard1Paragraphs && el_techCard1Paragraphs.type !== 'file') el_techCard1Paragraphs.value = data.techCard1Paragraphs || '';
  const el_techCard1BgImage_preview = document.getElementById('techCard1BgImage-preview'); if (el_techCard1BgImage_preview && el_techCard1BgImage_preview.type !== 'file') el_techCard1BgImage_preview.value = data['techCard1BgImage-preview'] || '';
  const el_techCard1BgImage = document.getElementById('techCard1BgImage'); if (el_techCard1BgImage && el_techCard1BgImage.type !== 'file') el_techCard1BgImage.value = data.techCard1BgImage || '';
  const el_remove_techCard1BgImage = document.getElementById('remove_techCard1BgImage'); if (el_remove_techCard1BgImage && el_remove_techCard1BgImage.type !== 'file') el_remove_techCard1BgImage.value = data.remove_techCard1BgImage || '';
  const el_techCard1Image_preview = document.getElementById('techCard1Image-preview'); if (el_techCard1Image_preview && el_techCard1Image_preview.type !== 'file') el_techCard1Image_preview.value = data['techCard1Image-preview'] || '';
  const el_techCard1Image = document.getElementById('techCard1Image'); if (el_techCard1Image && el_techCard1Image.type !== 'file') el_techCard1Image.value = data.techCard1Image || '';
  const el_remove_techCard1Image = document.getElementById('remove_techCard1Image'); if (el_remove_techCard1Image && el_remove_techCard1Image.type !== 'file') el_remove_techCard1Image.value = data.remove_techCard1Image || '';
  const el_techCard2Title = document.getElementById('techCard2Title'); if (el_techCard2Title && el_techCard2Title.type !== 'file') el_techCard2Title.value = data.techCard2Title || '';
  const el_techCard2TopParagraphs_container = document.getElementById('techCard2TopParagraphs-container'); if (el_techCard2TopParagraphs_container && el_techCard2TopParagraphs_container.type !== 'file') el_techCard2TopParagraphs_container.value = data['techCard2TopParagraphs-container'] || '';
  const el_techCard2TopParagraphs = document.getElementById('techCard2TopParagraphs'); if (el_techCard2TopParagraphs && el_techCard2TopParagraphs.type !== 'file') el_techCard2TopParagraphs.value = data.techCard2TopParagraphs || '';
  const el_techCard2Point1Icon_preview = document.getElementById('techCard2Point1Icon-preview'); if (el_techCard2Point1Icon_preview && el_techCard2Point1Icon_preview.type !== 'file') el_techCard2Point1Icon_preview.value = data['techCard2Point1Icon-preview'] || '';
  const el_techCard2Point1Icon = document.getElementById('techCard2Point1Icon'); if (el_techCard2Point1Icon && el_techCard2Point1Icon.type !== 'file') el_techCard2Point1Icon.value = data.techCard2Point1Icon || '';
  const el_remove_techCard2Point1Icon = document.getElementById('remove_techCard2Point1Icon'); if (el_remove_techCard2Point1Icon && el_remove_techCard2Point1Icon.type !== 'file') el_remove_techCard2Point1Icon.value = data.remove_techCard2Point1Icon || '';
  const el_techCard2Point1Text = document.getElementById('techCard2Point1Text'); if (el_techCard2Point1Text && el_techCard2Point1Text.type !== 'file') el_techCard2Point1Text.value = data.techCard2Point1Text || '';
  const el_techCard2Point2Icon_preview = document.getElementById('techCard2Point2Icon-preview'); if (el_techCard2Point2Icon_preview && el_techCard2Point2Icon_preview.type !== 'file') el_techCard2Point2Icon_preview.value = data['techCard2Point2Icon-preview'] || '';
  const el_techCard2Point2Icon = document.getElementById('techCard2Point2Icon'); if (el_techCard2Point2Icon && el_techCard2Point2Icon.type !== 'file') el_techCard2Point2Icon.value = data.techCard2Point2Icon || '';
  const el_remove_techCard2Point2Icon = document.getElementById('remove_techCard2Point2Icon'); if (el_remove_techCard2Point2Icon && el_remove_techCard2Point2Icon.type !== 'file') el_remove_techCard2Point2Icon.value = data.remove_techCard2Point2Icon || '';
  const el_techCard2Point2Text = document.getElementById('techCard2Point2Text'); if (el_techCard2Point2Text && el_techCard2Point2Text.type !== 'file') el_techCard2Point2Text.value = data.techCard2Point2Text || '';
  const el_techCard2Point3Icon_preview = document.getElementById('techCard2Point3Icon-preview'); if (el_techCard2Point3Icon_preview && el_techCard2Point3Icon_preview.type !== 'file') el_techCard2Point3Icon_preview.value = data['techCard2Point3Icon-preview'] || '';
  const el_techCard2Point3Icon = document.getElementById('techCard2Point3Icon'); if (el_techCard2Point3Icon && el_techCard2Point3Icon.type !== 'file') el_techCard2Point3Icon.value = data.techCard2Point3Icon || '';
  const el_remove_techCard2Point3Icon = document.getElementById('remove_techCard2Point3Icon'); if (el_remove_techCard2Point3Icon && el_remove_techCard2Point3Icon.type !== 'file') el_remove_techCard2Point3Icon.value = data.remove_techCard2Point3Icon || '';
  const el_techCard2Point3Text = document.getElementById('techCard2Point3Text'); if (el_techCard2Point3Text && el_techCard2Point3Text.type !== 'file') el_techCard2Point3Text.value = data.techCard2Point3Text || '';
  const el_techCard2Point4Icon_preview = document.getElementById('techCard2Point4Icon-preview'); if (el_techCard2Point4Icon_preview && el_techCard2Point4Icon_preview.type !== 'file') el_techCard2Point4Icon_preview.value = data['techCard2Point4Icon-preview'] || '';
  const el_techCard2Point4Icon = document.getElementById('techCard2Point4Icon'); if (el_techCard2Point4Icon && el_techCard2Point4Icon.type !== 'file') el_techCard2Point4Icon.value = data.techCard2Point4Icon || '';
  const el_remove_techCard2Point4Icon = document.getElementById('remove_techCard2Point4Icon'); if (el_remove_techCard2Point4Icon && el_remove_techCard2Point4Icon.type !== 'file') el_remove_techCard2Point4Icon.value = data.remove_techCard2Point4Icon || '';
  const el_techCard2Point4Text = document.getElementById('techCard2Point4Text'); if (el_techCard2Point4Text && el_techCard2Point4Text.type !== 'file') el_techCard2Point4Text.value = data.techCard2Point4Text || '';
  const el_techCard2BottomParagraphs_container = document.getElementById('techCard2BottomParagraphs-container'); if (el_techCard2BottomParagraphs_container && el_techCard2BottomParagraphs_container.type !== 'file') el_techCard2BottomParagraphs_container.value = data['techCard2BottomParagraphs-container'] || '';
  const el_techCard2BottomParagraphs = document.getElementById('techCard2BottomParagraphs'); if (el_techCard2BottomParagraphs && el_techCard2BottomParagraphs.type !== 'file') el_techCard2BottomParagraphs.value = data.techCard2BottomParagraphs || '';
  const el_techCard2BgImage_preview = document.getElementById('techCard2BgImage-preview'); if (el_techCard2BgImage_preview && el_techCard2BgImage_preview.type !== 'file') el_techCard2BgImage_preview.value = data['techCard2BgImage-preview'] || '';
  const el_techCard2BgImage = document.getElementById('techCard2BgImage'); if (el_techCard2BgImage && el_techCard2BgImage.type !== 'file') el_techCard2BgImage.value = data.techCard2BgImage || '';
  const el_remove_techCard2BgImage = document.getElementById('remove_techCard2BgImage'); if (el_remove_techCard2BgImage && el_remove_techCard2BgImage.type !== 'file') el_remove_techCard2BgImage.value = data.remove_techCard2BgImage || '';
  const el_techCard2Image_preview = document.getElementById('techCard2Image-preview'); if (el_techCard2Image_preview && el_techCard2Image_preview.type !== 'file') el_techCard2Image_preview.value = data['techCard2Image-preview'] || '';
  const el_techCard2Image = document.getElementById('techCard2Image'); if (el_techCard2Image && el_techCard2Image.type !== 'file') el_techCard2Image.value = data.techCard2Image || '';
  const el_remove_techCard2Image = document.getElementById('remove_techCard2Image'); if (el_remove_techCard2Image && el_remove_techCard2Image.type !== 'file') el_remove_techCard2Image.value = data.remove_techCard2Image || '';
  const el_techCard3Title = document.getElementById('techCard3Title'); if (el_techCard3Title && el_techCard3Title.type !== 'file') el_techCard3Title.value = data.techCard3Title || '';
  const el_techCard3Point1Icon_preview = document.getElementById('techCard3Point1Icon-preview'); if (el_techCard3Point1Icon_preview && el_techCard3Point1Icon_preview.type !== 'file') el_techCard3Point1Icon_preview.value = data['techCard3Point1Icon-preview'] || '';
  const el_techCard3Point1Icon = document.getElementById('techCard3Point1Icon'); if (el_techCard3Point1Icon && el_techCard3Point1Icon.type !== 'file') el_techCard3Point1Icon.value = data.techCard3Point1Icon || '';
  const el_remove_techCard3Point1Icon = document.getElementById('remove_techCard3Point1Icon'); if (el_remove_techCard3Point1Icon && el_remove_techCard3Point1Icon.type !== 'file') el_remove_techCard3Point1Icon.value = data.remove_techCard3Point1Icon || '';
  const el_techCard3Point1Text = document.getElementById('techCard3Point1Text'); if (el_techCard3Point1Text && el_techCard3Point1Text.type !== 'file') el_techCard3Point1Text.value = data.techCard3Point1Text || '';
  const el_techCard3Point2Icon_preview = document.getElementById('techCard3Point2Icon-preview'); if (el_techCard3Point2Icon_preview && el_techCard3Point2Icon_preview.type !== 'file') el_techCard3Point2Icon_preview.value = data['techCard3Point2Icon-preview'] || '';
  const el_techCard3Point2Icon = document.getElementById('techCard3Point2Icon'); if (el_techCard3Point2Icon && el_techCard3Point2Icon.type !== 'file') el_techCard3Point2Icon.value = data.techCard3Point2Icon || '';
  const el_remove_techCard3Point2Icon = document.getElementById('remove_techCard3Point2Icon'); if (el_remove_techCard3Point2Icon && el_remove_techCard3Point2Icon.type !== 'file') el_remove_techCard3Point2Icon.value = data.remove_techCard3Point2Icon || '';
  const el_techCard3Point2Text = document.getElementById('techCard3Point2Text'); if (el_techCard3Point2Text && el_techCard3Point2Text.type !== 'file') el_techCard3Point2Text.value = data.techCard3Point2Text || '';
  const el_techCard3Point3Icon_preview = document.getElementById('techCard3Point3Icon-preview'); if (el_techCard3Point3Icon_preview && el_techCard3Point3Icon_preview.type !== 'file') el_techCard3Point3Icon_preview.value = data['techCard3Point3Icon-preview'] || '';
  const el_techCard3Point3Icon = document.getElementById('techCard3Point3Icon'); if (el_techCard3Point3Icon && el_techCard3Point3Icon.type !== 'file') el_techCard3Point3Icon.value = data.techCard3Point3Icon || '';
  const el_remove_techCard3Point3Icon = document.getElementById('remove_techCard3Point3Icon'); if (el_remove_techCard3Point3Icon && el_remove_techCard3Point3Icon.type !== 'file') el_remove_techCard3Point3Icon.value = data.remove_techCard3Point3Icon || '';
  const el_techCard3Point3Text = document.getElementById('techCard3Point3Text'); if (el_techCard3Point3Text && el_techCard3Point3Text.type !== 'file') el_techCard3Point3Text.value = data.techCard3Point3Text || '';
  const el_techCard3Paragraphs_container = document.getElementById('techCard3Paragraphs-container'); if (el_techCard3Paragraphs_container && el_techCard3Paragraphs_container.type !== 'file') el_techCard3Paragraphs_container.value = data['techCard3Paragraphs-container'] || '';
  const el_techCard3Paragraphs = document.getElementById('techCard3Paragraphs'); if (el_techCard3Paragraphs && el_techCard3Paragraphs.type !== 'file') el_techCard3Paragraphs.value = data.techCard3Paragraphs || '';
  const el_techCard3BgImage_preview = document.getElementById('techCard3BgImage-preview'); if (el_techCard3BgImage_preview && el_techCard3BgImage_preview.type !== 'file') el_techCard3BgImage_preview.value = data['techCard3BgImage-preview'] || '';
  const el_techCard3BgImage = document.getElementById('techCard3BgImage'); if (el_techCard3BgImage && el_techCard3BgImage.type !== 'file') el_techCard3BgImage.value = data.techCard3BgImage || '';
  const el_remove_techCard3BgImage = document.getElementById('remove_techCard3BgImage'); if (el_remove_techCard3BgImage && el_remove_techCard3BgImage.type !== 'file') el_remove_techCard3BgImage.value = data.remove_techCard3BgImage || '';
  const el_techCard3Image_preview = document.getElementById('techCard3Image-preview'); if (el_techCard3Image_preview && el_techCard3Image_preview.type !== 'file') el_techCard3Image_preview.value = data['techCard3Image-preview'] || '';
  const el_techCard3Image = document.getElementById('techCard3Image'); if (el_techCard3Image && el_techCard3Image.type !== 'file') el_techCard3Image.value = data.techCard3Image || '';
  const el_remove_techCard3Image = document.getElementById('remove_techCard3Image'); if (el_remove_techCard3Image && el_remove_techCard3Image.type !== 'file') el_remove_techCard3Image.value = data.remove_techCard3Image || '';
  const el_techConsensusBadge = document.getElementById('techConsensusBadge'); if (el_techConsensusBadge && el_techConsensusBadge.type !== 'file') el_techConsensusBadge.value = data.techConsensusBadge || '';
  const el_techConsensusTitle = document.getElementById('techConsensusTitle'); if (el_techConsensusTitle && el_techConsensusTitle.type !== 'file') el_techConsensusTitle.value = data.techConsensusTitle || '';
  const el_techConsensusDescription = document.getElementById('techConsensusDescription'); if (el_techConsensusDescription && el_techConsensusDescription.type !== 'file') el_techConsensusDescription.value = data.techConsensusDescription || '';
  const el_techConsensusCard1Icon_preview = document.getElementById('techConsensusCard1Icon-preview'); if (el_techConsensusCard1Icon_preview && el_techConsensusCard1Icon_preview.type !== 'file') el_techConsensusCard1Icon_preview.value = data['techConsensusCard1Icon-preview'] || '';
  const el_techConsensusCard1Icon = document.getElementById('techConsensusCard1Icon'); if (el_techConsensusCard1Icon && el_techConsensusCard1Icon.type !== 'file') el_techConsensusCard1Icon.value = data.techConsensusCard1Icon || '';
  const el_remove_techConsensusCard1Icon = document.getElementById('remove_techConsensusCard1Icon'); if (el_remove_techConsensusCard1Icon && el_remove_techConsensusCard1Icon.type !== 'file') el_remove_techConsensusCard1Icon.value = data.remove_techConsensusCard1Icon || '';
  const el_techConsensusCard1Desc = document.getElementById('techConsensusCard1Desc'); if (el_techConsensusCard1Desc && el_techConsensusCard1Desc.type !== 'file') el_techConsensusCard1Desc.value = data.techConsensusCard1Desc || '';
  const el_techConsensusCard2Icon_preview = document.getElementById('techConsensusCard2Icon-preview'); if (el_techConsensusCard2Icon_preview && el_techConsensusCard2Icon_preview.type !== 'file') el_techConsensusCard2Icon_preview.value = data['techConsensusCard2Icon-preview'] || '';
  const el_techConsensusCard2Icon = document.getElementById('techConsensusCard2Icon'); if (el_techConsensusCard2Icon && el_techConsensusCard2Icon.type !== 'file') el_techConsensusCard2Icon.value = data.techConsensusCard2Icon || '';
  const el_remove_techConsensusCard2Icon = document.getElementById('remove_techConsensusCard2Icon'); if (el_remove_techConsensusCard2Icon && el_remove_techConsensusCard2Icon.type !== 'file') el_remove_techConsensusCard2Icon.value = data.remove_techConsensusCard2Icon || '';
  const el_techConsensusCard2Desc = document.getElementById('techConsensusCard2Desc'); if (el_techConsensusCard2Desc && el_techConsensusCard2Desc.type !== 'file') el_techConsensusCard2Desc.value = data.techConsensusCard2Desc || '';
  const el_techConsensusCard3Icon_preview = document.getElementById('techConsensusCard3Icon-preview'); if (el_techConsensusCard3Icon_preview && el_techConsensusCard3Icon_preview.type !== 'file') el_techConsensusCard3Icon_preview.value = data['techConsensusCard3Icon-preview'] || '';
  const el_techConsensusCard3Icon = document.getElementById('techConsensusCard3Icon'); if (el_techConsensusCard3Icon && el_techConsensusCard3Icon.type !== 'file') el_techConsensusCard3Icon.value = data.techConsensusCard3Icon || '';
  const el_remove_techConsensusCard3Icon = document.getElementById('remove_techConsensusCard3Icon'); if (el_remove_techConsensusCard3Icon && el_remove_techConsensusCard3Icon.type !== 'file') el_remove_techConsensusCard3Icon.value = data.remove_techConsensusCard3Icon || '';
  const el_techConsensusCard3Desc = document.getElementById('techConsensusCard3Desc'); if (el_techConsensusCard3Desc && el_techConsensusCard3Desc.type !== 'file') el_techConsensusCard3Desc.value = data.techConsensusCard3Desc || '';
  const el_techConsensusBottomDesc = document.getElementById('techConsensusBottomDesc'); if (el_techConsensusBottomDesc && el_techConsensusBottomDesc.type !== 'file') el_techConsensusBottomDesc.value = data.techConsensusBottomDesc || '';
  const el_techSmartTitle = document.getElementById('techSmartTitle'); if (el_techSmartTitle && el_techSmartTitle.type !== 'file') el_techSmartTitle.value = data.techSmartTitle || '';
  const el_techSmartDesc = document.getElementById('techSmartDesc'); if (el_techSmartDesc && el_techSmartDesc.type !== 'file') el_techSmartDesc.value = data.techSmartDesc || '';
  const el_techSmartCheckpoints_container = document.getElementById('techSmartCheckpoints-container'); if (el_techSmartCheckpoints_container && el_techSmartCheckpoints_container.type !== 'file') el_techSmartCheckpoints_container.value = data['techSmartCheckpoints-container'] || '';
  const el_techSmartCheckpoints = document.getElementById('techSmartCheckpoints'); if (el_techSmartCheckpoints && el_techSmartCheckpoints.type !== 'file') el_techSmartCheckpoints.value = data.techSmartCheckpoints || '';
  const el_techSmartFeature1Icon_preview = document.getElementById('techSmartFeature1Icon-preview'); if (el_techSmartFeature1Icon_preview && el_techSmartFeature1Icon_preview.type !== 'file') el_techSmartFeature1Icon_preview.value = data['techSmartFeature1Icon-preview'] || '';
  const el_techSmartFeature1Icon = document.getElementById('techSmartFeature1Icon'); if (el_techSmartFeature1Icon && el_techSmartFeature1Icon.type !== 'file') el_techSmartFeature1Icon.value = data.techSmartFeature1Icon || '';
  const el_remove_techSmartFeature1Icon = document.getElementById('remove_techSmartFeature1Icon'); if (el_remove_techSmartFeature1Icon && el_remove_techSmartFeature1Icon.type !== 'file') el_remove_techSmartFeature1Icon.value = data.remove_techSmartFeature1Icon || '';
  const el_techSmartFeature1Name = document.getElementById('techSmartFeature1Name'); if (el_techSmartFeature1Name && el_techSmartFeature1Name.type !== 'file') el_techSmartFeature1Name.value = data.techSmartFeature1Name || '';
  const el_techSmartFeature2Icon_preview = document.getElementById('techSmartFeature2Icon-preview'); if (el_techSmartFeature2Icon_preview && el_techSmartFeature2Icon_preview.type !== 'file') el_techSmartFeature2Icon_preview.value = data['techSmartFeature2Icon-preview'] || '';
  const el_techSmartFeature2Icon = document.getElementById('techSmartFeature2Icon'); if (el_techSmartFeature2Icon && el_techSmartFeature2Icon.type !== 'file') el_techSmartFeature2Icon.value = data.techSmartFeature2Icon || '';
  const el_remove_techSmartFeature2Icon = document.getElementById('remove_techSmartFeature2Icon'); if (el_remove_techSmartFeature2Icon && el_remove_techSmartFeature2Icon.type !== 'file') el_remove_techSmartFeature2Icon.value = data.remove_techSmartFeature2Icon || '';
  const el_techSmartFeature2Name = document.getElementById('techSmartFeature2Name'); if (el_techSmartFeature2Name && el_techSmartFeature2Name.type !== 'file') el_techSmartFeature2Name.value = data.techSmartFeature2Name || '';
  const el_techSmartFeature3Icon_preview = document.getElementById('techSmartFeature3Icon-preview'); if (el_techSmartFeature3Icon_preview && el_techSmartFeature3Icon_preview.type !== 'file') el_techSmartFeature3Icon_preview.value = data['techSmartFeature3Icon-preview'] || '';
  const el_techSmartFeature3Icon = document.getElementById('techSmartFeature3Icon'); if (el_techSmartFeature3Icon && el_techSmartFeature3Icon.type !== 'file') el_techSmartFeature3Icon.value = data.techSmartFeature3Icon || '';
  const el_remove_techSmartFeature3Icon = document.getElementById('remove_techSmartFeature3Icon'); if (el_remove_techSmartFeature3Icon && el_remove_techSmartFeature3Icon.type !== 'file') el_remove_techSmartFeature3Icon.value = data.remove_techSmartFeature3Icon || '';
  const el_techSmartFeature3Name = document.getElementById('techSmartFeature3Name'); if (el_techSmartFeature3Name && el_techSmartFeature3Name.type !== 'file') el_techSmartFeature3Name.value = data.techSmartFeature3Name || '';
  const el_techSmartRightBgImage_preview = document.getElementById('techSmartRightBgImage-preview'); if (el_techSmartRightBgImage_preview && el_techSmartRightBgImage_preview.type !== 'file') el_techSmartRightBgImage_preview.value = data['techSmartRightBgImage-preview'] || '';
  const el_techSmartRightBgImage = document.getElementById('techSmartRightBgImage'); if (el_techSmartRightBgImage && el_techSmartRightBgImage.type !== 'file') el_techSmartRightBgImage.value = data.techSmartRightBgImage || '';
  const el_remove_techSmartRightBgImage = document.getElementById('remove_techSmartRightBgImage'); if (el_remove_techSmartRightBgImage && el_remove_techSmartRightBgImage.type !== 'file') el_remove_techSmartRightBgImage.value = data.remove_techSmartRightBgImage || '';
  const el_techSmartRightImage_preview = document.getElementById('techSmartRightImage-preview'); if (el_techSmartRightImage_preview && el_techSmartRightImage_preview.type !== 'file') el_techSmartRightImage_preview.value = data['techSmartRightImage-preview'] || '';
  const el_techSmartRightImage = document.getElementById('techSmartRightImage'); if (el_techSmartRightImage && el_techSmartRightImage.type !== 'file') el_techSmartRightImage.value = data.techSmartRightImage || '';
  const el_remove_techSmartRightImage = document.getElementById('remove_techSmartRightImage'); if (el_remove_techSmartRightImage && el_remove_techSmartRightImage.type !== 'file') el_remove_techSmartRightImage.value = data.remove_techSmartRightImage || '';
  const el_techSlide1Image_preview = document.getElementById('techSlide1Image-preview'); if (el_techSlide1Image_preview && el_techSlide1Image_preview.type !== 'file') el_techSlide1Image_preview.value = data['techSlide1Image-preview'] || '';
  const el_techSlide1Image = document.getElementById('techSlide1Image'); if (el_techSlide1Image && el_techSlide1Image.type !== 'file') el_techSlide1Image.value = data.techSlide1Image || '';
  const el_remove_techSlide1Image = document.getElementById('remove_techSlide1Image'); if (el_remove_techSlide1Image && el_remove_techSlide1Image.type !== 'file') el_remove_techSlide1Image.value = data.remove_techSlide1Image || '';
  const el_techSlide1Title = document.getElementById('techSlide1Title'); if (el_techSlide1Title && el_techSlide1Title.type !== 'file') el_techSlide1Title.value = data.techSlide1Title || '';
  const el_techSlide1Desc = document.getElementById('techSlide1Desc'); if (el_techSlide1Desc && el_techSlide1Desc.type !== 'file') el_techSlide1Desc.value = data.techSlide1Desc || '';
  const el_techSlide1Point1Icon_preview = document.getElementById('techSlide1Point1Icon-preview'); if (el_techSlide1Point1Icon_preview && el_techSlide1Point1Icon_preview.type !== 'file') el_techSlide1Point1Icon_preview.value = data['techSlide1Point1Icon-preview'] || '';
  const el_techSlide1Point1Icon = document.getElementById('techSlide1Point1Icon'); if (el_techSlide1Point1Icon && el_techSlide1Point1Icon.type !== 'file') el_techSlide1Point1Icon.value = data.techSlide1Point1Icon || '';
  const el_remove_techSlide1Point1Icon = document.getElementById('remove_techSlide1Point1Icon'); if (el_remove_techSlide1Point1Icon && el_remove_techSlide1Point1Icon.type !== 'file') el_remove_techSlide1Point1Icon.value = data.remove_techSlide1Point1Icon || '';
  const el_techSlide1Point1Text = document.getElementById('techSlide1Point1Text'); if (el_techSlide1Point1Text && el_techSlide1Point1Text.type !== 'file') el_techSlide1Point1Text.value = data.techSlide1Point1Text || '';
  const el_techSlide1Point2Icon_preview = document.getElementById('techSlide1Point2Icon-preview'); if (el_techSlide1Point2Icon_preview && el_techSlide1Point2Icon_preview.type !== 'file') el_techSlide1Point2Icon_preview.value = data['techSlide1Point2Icon-preview'] || '';
  const el_techSlide1Point2Icon = document.getElementById('techSlide1Point2Icon'); if (el_techSlide1Point2Icon && el_techSlide1Point2Icon.type !== 'file') el_techSlide1Point2Icon.value = data.techSlide1Point2Icon || '';
  const el_remove_techSlide1Point2Icon = document.getElementById('remove_techSlide1Point2Icon'); if (el_remove_techSlide1Point2Icon && el_remove_techSlide1Point2Icon.type !== 'file') el_remove_techSlide1Point2Icon.value = data.remove_techSlide1Point2Icon || '';
  const el_techSlide1Point2Text = document.getElementById('techSlide1Point2Text'); if (el_techSlide1Point2Text && el_techSlide1Point2Text.type !== 'file') el_techSlide1Point2Text.value = data.techSlide1Point2Text || '';
  const el_techSlide1FeatureHeading = document.getElementById('techSlide1FeatureHeading'); if (el_techSlide1FeatureHeading && el_techSlide1FeatureHeading.type !== 'file') el_techSlide1FeatureHeading.value = data.techSlide1FeatureHeading || '';
  const el_techSlide1Feature1Icon_preview = document.getElementById('techSlide1Feature1Icon-preview'); if (el_techSlide1Feature1Icon_preview && el_techSlide1Feature1Icon_preview.type !== 'file') el_techSlide1Feature1Icon_preview.value = data['techSlide1Feature1Icon-preview'] || '';
  const el_techSlide1Feature1Icon = document.getElementById('techSlide1Feature1Icon'); if (el_techSlide1Feature1Icon && el_techSlide1Feature1Icon.type !== 'file') el_techSlide1Feature1Icon.value = data.techSlide1Feature1Icon || '';
  const el_remove_techSlide1Feature1Icon = document.getElementById('remove_techSlide1Feature1Icon'); if (el_remove_techSlide1Feature1Icon && el_remove_techSlide1Feature1Icon.type !== 'file') el_remove_techSlide1Feature1Icon.value = data.remove_techSlide1Feature1Icon || '';
  const el_techSlide1Feature1Text = document.getElementById('techSlide1Feature1Text'); if (el_techSlide1Feature1Text && el_techSlide1Feature1Text.type !== 'file') el_techSlide1Feature1Text.value = data.techSlide1Feature1Text || '';
  const el_techSlide1Feature2Icon_preview = document.getElementById('techSlide1Feature2Icon-preview'); if (el_techSlide1Feature2Icon_preview && el_techSlide1Feature2Icon_preview.type !== 'file') el_techSlide1Feature2Icon_preview.value = data['techSlide1Feature2Icon-preview'] || '';
  const el_techSlide1Feature2Icon = document.getElementById('techSlide1Feature2Icon'); if (el_techSlide1Feature2Icon && el_techSlide1Feature2Icon.type !== 'file') el_techSlide1Feature2Icon.value = data.techSlide1Feature2Icon || '';
  const el_remove_techSlide1Feature2Icon = document.getElementById('remove_techSlide1Feature2Icon'); if (el_remove_techSlide1Feature2Icon && el_remove_techSlide1Feature2Icon.type !== 'file') el_remove_techSlide1Feature2Icon.value = data.remove_techSlide1Feature2Icon || '';
  const el_techSlide1Feature2Text = document.getElementById('techSlide1Feature2Text'); if (el_techSlide1Feature2Text && el_techSlide1Feature2Text.type !== 'file') el_techSlide1Feature2Text.value = data.techSlide1Feature2Text || '';
  const el_techSlide1Feature3Icon_preview = document.getElementById('techSlide1Feature3Icon-preview'); if (el_techSlide1Feature3Icon_preview && el_techSlide1Feature3Icon_preview.type !== 'file') el_techSlide1Feature3Icon_preview.value = data['techSlide1Feature3Icon-preview'] || '';
  const el_techSlide1Feature3Icon = document.getElementById('techSlide1Feature3Icon'); if (el_techSlide1Feature3Icon && el_techSlide1Feature3Icon.type !== 'file') el_techSlide1Feature3Icon.value = data.techSlide1Feature3Icon || '';
  const el_remove_techSlide1Feature3Icon = document.getElementById('remove_techSlide1Feature3Icon'); if (el_remove_techSlide1Feature3Icon && el_remove_techSlide1Feature3Icon.type !== 'file') el_remove_techSlide1Feature3Icon.value = data.remove_techSlide1Feature3Icon || '';
  const el_techSlide1Feature3Text = document.getElementById('techSlide1Feature3Text'); if (el_techSlide1Feature3Text && el_techSlide1Feature3Text.type !== 'file') el_techSlide1Feature3Text.value = data.techSlide1Feature3Text || '';
  const el_techSlide2Title = document.getElementById('techSlide2Title'); if (el_techSlide2Title && el_techSlide2Title.type !== 'file') el_techSlide2Title.value = data.techSlide2Title || '';
  const el_techSlide2Desc = document.getElementById('techSlide2Desc'); if (el_techSlide2Desc && el_techSlide2Desc.type !== 'file') el_techSlide2Desc.value = data.techSlide2Desc || '';
  const el_techSlide2Image_preview = document.getElementById('techSlide2Image-preview'); if (el_techSlide2Image_preview && el_techSlide2Image_preview.type !== 'file') el_techSlide2Image_preview.value = data['techSlide2Image-preview'] || '';
  const el_techSlide2Image = document.getElementById('techSlide2Image'); if (el_techSlide2Image && el_techSlide2Image.type !== 'file') el_techSlide2Image.value = data.techSlide2Image || '';
  const el_remove_techSlide2Image = document.getElementById('remove_techSlide2Image'); if (el_remove_techSlide2Image && el_remove_techSlide2Image.type !== 'file') el_remove_techSlide2Image.value = data.remove_techSlide2Image || '';
  const el_techSlide2Feature1Icon_preview = document.getElementById('techSlide2Feature1Icon-preview'); if (el_techSlide2Feature1Icon_preview && el_techSlide2Feature1Icon_preview.type !== 'file') el_techSlide2Feature1Icon_preview.value = data['techSlide2Feature1Icon-preview'] || '';
  const el_techSlide2Feature1Icon = document.getElementById('techSlide2Feature1Icon'); if (el_techSlide2Feature1Icon && el_techSlide2Feature1Icon.type !== 'file') el_techSlide2Feature1Icon.value = data.techSlide2Feature1Icon || '';
  const el_remove_techSlide2Feature1Icon = document.getElementById('remove_techSlide2Feature1Icon'); if (el_remove_techSlide2Feature1Icon && el_remove_techSlide2Feature1Icon.type !== 'file') el_remove_techSlide2Feature1Icon.value = data.remove_techSlide2Feature1Icon || '';
  const el_techSlide2Feature1Text = document.getElementById('techSlide2Feature1Text'); if (el_techSlide2Feature1Text && el_techSlide2Feature1Text.type !== 'file') el_techSlide2Feature1Text.value = data.techSlide2Feature1Text || '';
  const el_techSlide2Feature2Icon_preview = document.getElementById('techSlide2Feature2Icon-preview'); if (el_techSlide2Feature2Icon_preview && el_techSlide2Feature2Icon_preview.type !== 'file') el_techSlide2Feature2Icon_preview.value = data['techSlide2Feature2Icon-preview'] || '';
  const el_techSlide2Feature2Icon = document.getElementById('techSlide2Feature2Icon'); if (el_techSlide2Feature2Icon && el_techSlide2Feature2Icon.type !== 'file') el_techSlide2Feature2Icon.value = data.techSlide2Feature2Icon || '';
  const el_remove_techSlide2Feature2Icon = document.getElementById('remove_techSlide2Feature2Icon'); if (el_remove_techSlide2Feature2Icon && el_remove_techSlide2Feature2Icon.type !== 'file') el_remove_techSlide2Feature2Icon.value = data.remove_techSlide2Feature2Icon || '';
  const el_techSlide2Feature2Text = document.getElementById('techSlide2Feature2Text'); if (el_techSlide2Feature2Text && el_techSlide2Feature2Text.type !== 'file') el_techSlide2Feature2Text.value = data.techSlide2Feature2Text || '';
  const el_techSlide3Feature3Icon_preview = document.getElementById('techSlide3Feature3Icon-preview'); if (el_techSlide3Feature3Icon_preview && el_techSlide3Feature3Icon_preview.type !== 'file') el_techSlide3Feature3Icon_preview.value = data['techSlide3Feature3Icon-preview'] || '';
  const el_techSlide2Feature3Icon = document.getElementById('techSlide2Feature3Icon'); if (el_techSlide2Feature3Icon && el_techSlide2Feature3Icon.type !== 'file') el_techSlide2Feature3Icon.value = data.techSlide2Feature3Icon || '';
  const el_remove_techSlide2Feature3Icon = document.getElementById('remove_techSlide2Feature3Icon'); if (el_remove_techSlide2Feature3Icon && el_remove_techSlide2Feature3Icon.type !== 'file') el_remove_techSlide2Feature3Icon.value = data.remove_techSlide2Feature3Icon || '';
  const el_techSlide2Feature3Text = document.getElementById('techSlide2Feature3Text'); if (el_techSlide2Feature3Text && el_techSlide2Feature3Text.type !== 'file') el_techSlide2Feature3Text.value = data.techSlide2Feature3Text || '';
  const el_techSlide3Image_preview = document.getElementById('techSlide3Image-preview'); if (el_techSlide3Image_preview && el_techSlide3Image_preview.type !== 'file') el_techSlide3Image_preview.value = data['techSlide3Image-preview'] || '';
  const el_techSlide3Image = document.getElementById('techSlide3Image'); if (el_techSlide3Image && el_techSlide3Image.type !== 'file') el_techSlide3Image.value = data.techSlide3Image || '';
  const el_remove_techSlide3Image = document.getElementById('remove_techSlide3Image'); if (el_remove_techSlide3Image && el_remove_techSlide3Image.type !== 'file') el_remove_techSlide3Image.value = data.remove_techSlide3Image || '';
  const el_techSlide3Title = document.getElementById('techSlide3Title'); if (el_techSlide3Title && el_techSlide3Title.type !== 'file') el_techSlide3Title.value = data.techSlide3Title || '';
  const el_techSlide3Desc = document.getElementById('techSlide3Desc'); if (el_techSlide3Desc && el_techSlide3Desc.type !== 'file') el_techSlide3Desc.value = data.techSlide3Desc || '';
  const el_techSlide3Feature1Icon_preview = document.getElementById('techSlide3Feature1Icon-preview'); if (el_techSlide3Feature1Icon_preview && el_techSlide3Feature1Icon_preview.type !== 'file') el_techSlide3Feature1Icon_preview.value = data['techSlide3Feature1Icon-preview'] || '';
  const el_techSlide3Feature1Icon = document.getElementById('techSlide3Feature1Icon'); if (el_techSlide3Feature1Icon && el_techSlide3Feature1Icon.type !== 'file') el_techSlide3Feature1Icon.value = data.techSlide3Feature1Icon || '';
  const el_remove_techSlide3Feature1Icon = document.getElementById('remove_techSlide3Feature1Icon'); if (el_remove_techSlide3Feature1Icon && el_remove_techSlide3Feature1Icon.type !== 'file') el_remove_techSlide3Feature1Icon.value = data.remove_techSlide3Feature1Icon || '';
  const el_techSlide3Feature1Text = document.getElementById('techSlide3Feature1Text'); if (el_techSlide3Feature1Text && el_techSlide3Feature1Text.type !== 'file') el_techSlide3Feature1Text.value = data.techSlide3Feature1Text || '';
  const el_techSlide3Feature2Icon_preview = document.getElementById('techSlide3Feature2Icon-preview'); if (el_techSlide3Feature2Icon_preview && el_techSlide3Feature2Icon_preview.type !== 'file') el_techSlide3Feature2Icon_preview.value = data['techSlide3Feature2Icon-preview'] || '';
  const el_techSlide3Feature2Icon = document.getElementById('techSlide3Feature2Icon'); if (el_techSlide3Feature2Icon && el_techSlide3Feature2Icon.type !== 'file') el_techSlide3Feature2Icon.value = data.techSlide3Feature2Icon || '';
  const el_remove_techSlide3Feature2Icon = document.getElementById('remove_techSlide3Feature2Icon'); if (el_remove_techSlide3Feature2Icon && el_remove_techSlide3Feature2Icon.type !== 'file') el_remove_techSlide3Feature2Icon.value = data.remove_techSlide3Feature2Icon || '';
  const el_techSlide3Feature2Text = document.getElementById('techSlide3Feature2Text'); if (el_techSlide3Feature2Text && el_techSlide3Feature2Text.type !== 'file') el_techSlide3Feature2Text.value = data.techSlide3Feature2Text || '';
  const el_techSlide3Feature3Icon = document.getElementById('techSlide3Feature3Icon'); if (el_techSlide3Feature3Icon && el_techSlide3Feature3Icon.type !== 'file') el_techSlide3Feature3Icon.value = data.techSlide3Feature3Icon || '';
  const el_remove_techSlide3Feature3Icon = document.getElementById('remove_techSlide3Feature3Icon'); if (el_remove_techSlide3Feature3Icon && el_remove_techSlide3Feature3Icon.type !== 'file') el_remove_techSlide3Feature3Icon.value = data.remove_techSlide3Feature3Icon || '';
  const el_techSlide3Feature3Text = document.getElementById('techSlide3Feature3Text'); if (el_techSlide3Feature3Text && el_techSlide3Feature3Text.type !== 'file') el_techSlide3Feature3Text.value = data.techSlide3Feature3Text || '';
  const el_techSecuritySlider1Title = document.getElementById('techSecuritySlider1Title'); if (el_techSecuritySlider1Title && el_techSecuritySlider1Title.type !== 'file') el_techSecuritySlider1Title.value = data.techSecuritySlider1Title || '';
  const el_techSecuritySlider1Desc = document.getElementById('techSecuritySlider1Desc'); if (el_techSecuritySlider1Desc && el_techSecuritySlider1Desc.type !== 'file') el_techSecuritySlider1Desc.value = data.techSecuritySlider1Desc || '';
  const el_techSecuritySlider1RightImage_preview = document.getElementById('techSecuritySlider1RightImage-preview'); if (el_techSecuritySlider1RightImage_preview && el_techSecuritySlider1RightImage_preview.type !== 'file') el_techSecuritySlider1RightImage_preview.value = data['techSecuritySlider1RightImage-preview'] || '';
  const el_techSecuritySlider1RightImage = document.getElementById('techSecuritySlider1RightImage'); if (el_techSecuritySlider1RightImage && el_techSecuritySlider1RightImage.type !== 'file') el_techSecuritySlider1RightImage.value = data.techSecuritySlider1RightImage || '';
  const el_remove_techSecuritySlider1RightImage = document.getElementById('remove_techSecuritySlider1RightImage'); if (el_remove_techSecuritySlider1RightImage && el_remove_techSecuritySlider1RightImage.type !== 'file') el_remove_techSecuritySlider1RightImage.value = data.remove_techSecuritySlider1RightImage || '';
  const el_techSecuritySlider1RightBgImage_preview = document.getElementById('techSecuritySlider1RightBgImage-preview'); if (el_techSecuritySlider1RightBgImage_preview && el_techSecuritySlider1RightBgImage_preview.type !== 'file') el_techSecuritySlider1RightBgImage_preview.value = data['techSecuritySlider1RightBgImage-preview'] || '';
  const el_techSecuritySlider1RightBgImage = document.getElementById('techSecuritySlider1RightBgImage'); if (el_techSecuritySlider1RightBgImage && el_techSecuritySlider1RightBgImage.type !== 'file') el_techSecuritySlider1RightBgImage.value = data.techSecuritySlider1RightBgImage || '';
  const el_remove_techSecuritySlider1RightBgImage = document.getElementById('remove_techSecuritySlider1RightBgImage'); if (el_remove_techSecuritySlider1RightBgImage && el_remove_techSecuritySlider1RightBgImage.type !== 'file') el_remove_techSecuritySlider1RightBgImage.value = data.remove_techSecuritySlider1RightBgImage || '';
  const el_techSecuritySlider1Feature1Icon_preview = document.getElementById('techSecuritySlider1Feature1Icon-preview'); if (el_techSecuritySlider1Feature1Icon_preview && el_techSecuritySlider1Feature1Icon_preview.type !== 'file') el_techSecuritySlider1Feature1Icon_preview.value = data['techSecuritySlider1Feature1Icon-preview'] || '';
  const el_techSecuritySlider1Feature1Icon = document.getElementById('techSecuritySlider1Feature1Icon'); if (el_techSecuritySlider1Feature1Icon && el_techSecuritySlider1Feature1Icon.type !== 'file') el_techSecuritySlider1Feature1Icon.value = data.techSecuritySlider1Feature1Icon || '';
  const el_remove_techSecuritySlider1Feature1Icon = document.getElementById('remove_techSecuritySlider1Feature1Icon'); if (el_remove_techSecuritySlider1Feature1Icon && el_remove_techSecuritySlider1Feature1Icon.type !== 'file') el_remove_techSecuritySlider1Feature1Icon.value = data.remove_techSecuritySlider1Feature1Icon || '';
  const el_techSecuritySlider1Feature1Text = document.getElementById('techSecuritySlider1Feature1Text'); if (el_techSecuritySlider1Feature1Text && el_techSecuritySlider1Feature1Text.type !== 'file') el_techSecuritySlider1Feature1Text.value = data.techSecuritySlider1Feature1Text || '';
  const el_techSecuritySlider1Feature2Icon_preview = document.getElementById('techSecuritySlider1Feature2Icon-preview'); if (el_techSecuritySlider1Feature2Icon_preview && el_techSecuritySlider1Feature2Icon_preview.type !== 'file') el_techSecuritySlider1Feature2Icon_preview.value = data['techSecuritySlider1Feature2Icon-preview'] || '';
  const el_techSecuritySlider1Feature2Icon = document.getElementById('techSecuritySlider1Feature2Icon'); if (el_techSecuritySlider1Feature2Icon && el_techSecuritySlider1Feature2Icon.type !== 'file') el_techSecuritySlider1Feature2Icon.value = data.techSecuritySlider1Feature2Icon || '';
  const el_remove_techSecuritySlider1Feature2Icon = document.getElementById('remove_techSecuritySlider1Feature2Icon'); if (el_remove_techSecuritySlider1Feature2Icon && el_remove_techSecuritySlider1Feature2Icon.type !== 'file') el_remove_techSecuritySlider1Feature2Icon.value = data.remove_techSecuritySlider1Feature2Icon || '';
  const el_techSecuritySlider1Feature2Text = document.getElementById('techSecuritySlider1Feature2Text'); if (el_techSecuritySlider1Feature2Text && el_techSecuritySlider1Feature2Text.type !== 'file') el_techSecuritySlider1Feature2Text.value = data.techSecuritySlider1Feature2Text || '';
  const el_techSecuritySlider1Feature3Icon_preview = document.getElementById('techSecuritySlider1Feature3Icon-preview'); if (el_techSecuritySlider1Feature3Icon_preview && el_techSecuritySlider1Feature3Icon_preview.type !== 'file') el_techSecuritySlider1Feature3Icon_preview.value = data['techSecuritySlider1Feature3Icon-preview'] || '';
  const el_techSecuritySlider1Feature3Icon = document.getElementById('techSecuritySlider1Feature3Icon'); if (el_techSecuritySlider1Feature3Icon && el_techSecuritySlider1Feature3Icon.type !== 'file') el_techSecuritySlider1Feature3Icon.value = data.techSecuritySlider1Feature3Icon || '';
  const el_remove_techSecuritySlider1Feature3Icon = document.getElementById('remove_techSecuritySlider1Feature3Icon'); if (el_remove_techSecuritySlider1Feature3Icon && el_remove_techSecuritySlider1Feature3Icon.type !== 'file') el_remove_techSecuritySlider1Feature3Icon.value = data.remove_techSecuritySlider1Feature3Icon || '';
  const el_techSecuritySlider1Feature3Text = document.getElementById('techSecuritySlider1Feature3Text'); if (el_techSecuritySlider1Feature3Text && el_techSecuritySlider1Feature3Text.type !== 'file') el_techSecuritySlider1Feature3Text.value = data.techSecuritySlider1Feature3Text || '';
  const el_techSecuritySlider2Title = document.getElementById('techSecuritySlider2Title'); if (el_techSecuritySlider2Title && el_techSecuritySlider2Title.type !== 'file') el_techSecuritySlider2Title.value = data.techSecuritySlider2Title || '';
  const el_techSecuritySlider2Desc = document.getElementById('techSecuritySlider2Desc'); if (el_techSecuritySlider2Desc && el_techSecuritySlider2Desc.type !== 'file') el_techSecuritySlider2Desc.value = data.techSecuritySlider2Desc || '';
  const el_techSecuritySlider2RightImage_preview = document.getElementById('techSecuritySlider2RightImage-preview'); if (el_techSecuritySlider2RightImage_preview && el_techSecuritySlider2RightImage_preview.type !== 'file') el_techSecuritySlider2RightImage_preview.value = data['techSecuritySlider2RightImage-preview'] || '';
  const el_techSecuritySlider2RightImage = document.getElementById('techSecuritySlider2RightImage'); if (el_techSecuritySlider2RightImage && el_techSecuritySlider2RightImage.type !== 'file') el_techSecuritySlider2RightImage.value = data.techSecuritySlider2RightImage || '';
  const el_remove_techSecuritySlider2RightImage = document.getElementById('remove_techSecuritySlider2RightImage'); if (el_remove_techSecuritySlider2RightImage && el_remove_techSecuritySlider2RightImage.type !== 'file') el_remove_techSecuritySlider2RightImage.value = data.remove_techSecuritySlider2RightImage || '';
  const el_techSecuritySlider2RightBgImage_preview = document.getElementById('techSecuritySlider2RightBgImage-preview'); if (el_techSecuritySlider2RightBgImage_preview && el_techSecuritySlider2RightBgImage_preview.type !== 'file') el_techSecuritySlider2RightBgImage_preview.value = data['techSecuritySlider2RightBgImage-preview'] || '';
  const el_techSecuritySlider2RightBgImage = document.getElementById('techSecuritySlider2RightBgImage'); if (el_techSecuritySlider2RightBgImage && el_techSecuritySlider2RightBgImage.type !== 'file') el_techSecuritySlider2RightBgImage.value = data.techSecuritySlider2RightBgImage || '';
  const el_remove_techSecuritySlider2RightBgImage = document.getElementById('remove_techSecuritySlider2RightBgImage'); if (el_remove_techSecuritySlider2RightBgImage && el_remove_techSecuritySlider2RightBgImage.type !== 'file') el_remove_techSecuritySlider2RightBgImage.value = data.remove_techSecuritySlider2RightBgImage || '';
  const el_techSecuritySlider2Point1Icon_preview = document.getElementById('techSecuritySlider2Point1Icon-preview'); if (el_techSecuritySlider2Point1Icon_preview && el_techSecuritySlider2Point1Icon_preview.type !== 'file') el_techSecuritySlider2Point1Icon_preview.value = data['techSecuritySlider2Point1Icon-preview'] || '';
  const el_techSecuritySlider2Point1Icon = document.getElementById('techSecuritySlider2Point1Icon'); if (el_techSecuritySlider2Point1Icon && el_techSecuritySlider2Point1Icon.type !== 'file') el_techSecuritySlider2Point1Icon.value = data.techSecuritySlider2Point1Icon || '';
  const el_remove_techSecuritySlider2Point1Icon = document.getElementById('remove_techSecuritySlider2Point1Icon'); if (el_remove_techSecuritySlider2Point1Icon && el_remove_techSecuritySlider2Point1Icon.type !== 'file') el_remove_techSecuritySlider2Point1Icon.value = data.remove_techSecuritySlider2Point1Icon || '';
  const el_techSecuritySlider2Point1Text = document.getElementById('techSecuritySlider2Point1Text'); if (el_techSecuritySlider2Point1Text && el_techSecuritySlider2Point1Text.type !== 'file') el_techSecuritySlider2Point1Text.value = data.techSecuritySlider2Point1Text || '';
  const el_techSecuritySlider2Point2Icon_preview = document.getElementById('techSecuritySlider2Point2Icon-preview'); if (el_techSecuritySlider2Point2Icon_preview && el_techSecuritySlider2Point2Icon_preview.type !== 'file') el_techSecuritySlider2Point2Icon_preview.value = data['techSecuritySlider2Point2Icon-preview'] || '';
  const el_techSecuritySlider2Point2Icon = document.getElementById('techSecuritySlider2Point2Icon'); if (el_techSecuritySlider2Point2Icon && el_techSecuritySlider2Point2Icon.type !== 'file') el_techSecuritySlider2Point2Icon.value = data.techSecuritySlider2Point2Icon || '';
  const el_remove_techSecuritySlider2Point2Icon = document.getElementById('remove_techSecuritySlider2Point2Icon'); if (el_remove_techSecuritySlider2Point2Icon && el_remove_techSecuritySlider2Point2Icon.type !== 'file') el_remove_techSecuritySlider2Point2Icon.value = data.remove_techSecuritySlider2Point2Icon || '';
  const el_techSecuritySlider2Point2Text = document.getElementById('techSecuritySlider2Point2Text'); if (el_techSecuritySlider2Point2Text && el_techSecuritySlider2Point2Text.type !== 'file') el_techSecuritySlider2Point2Text.value = data.techSecuritySlider2Point2Text || '';
  const el_techSecuritySlider2FeatureTitle = document.getElementById('techSecuritySlider2FeatureTitle'); if (el_techSecuritySlider2FeatureTitle && el_techSecuritySlider2FeatureTitle.type !== 'file') el_techSecuritySlider2FeatureTitle.value = data.techSecuritySlider2FeatureTitle || '';
  const el_techSecuritySlider2FeatureList_container = document.getElementById('techSecuritySlider2FeatureList-container'); if (el_techSecuritySlider2FeatureList_container && el_techSecuritySlider2FeatureList_container.type !== 'file') el_techSecuritySlider2FeatureList_container.value = data['techSecuritySlider2FeatureList-container'] || '';
  const el_techSecuritySlider2FeatureList = document.getElementById('techSecuritySlider2FeatureList'); if (el_techSecuritySlider2FeatureList && el_techSecuritySlider2FeatureList.type !== 'file') el_techSecuritySlider2FeatureList.value = data.techSecuritySlider2FeatureList || '';
  const el_techCostTitle = document.getElementById('techCostTitle'); if (el_techCostTitle && el_techCostTitle.type !== 'file') el_techCostTitle.value = data.techCostTitle || '';
  const el_techCostParagraphs_container = document.getElementById('techCostParagraphs-container'); if (el_techCostParagraphs_container && el_techCostParagraphs_container.type !== 'file') el_techCostParagraphs_container.value = data['techCostParagraphs-container'] || '';
  const el_techCostParagraphs = document.getElementById('techCostParagraphs'); if (el_techCostParagraphs && el_techCostParagraphs.type !== 'file') el_techCostParagraphs.value = data.techCostParagraphs || '';
  const el_techTransparencyTitle = document.getElementById('techTransparencyTitle'); if (el_techTransparencyTitle && el_techTransparencyTitle.type !== 'file') el_techTransparencyTitle.value = data.techTransparencyTitle || '';
  const el_techTransparencyDesc = document.getElementById('techTransparencyDesc'); if (el_techTransparencyDesc && el_techTransparencyDesc.type !== 'file') el_techTransparencyDesc.value = data.techTransparencyDesc || '';
  const el_techTransparencyCard1Icon_preview = document.getElementById('techTransparencyCard1Icon-preview'); if (el_techTransparencyCard1Icon_preview && el_techTransparencyCard1Icon_preview.type !== 'file') el_techTransparencyCard1Icon_preview.value = data['techTransparencyCard1Icon-preview'] || '';
  const el_techTransparencyCard1Icon = document.getElementById('techTransparencyCard1Icon'); if (el_techTransparencyCard1Icon && el_techTransparencyCard1Icon.type !== 'file') el_techTransparencyCard1Icon.value = data.techTransparencyCard1Icon || '';
  const el_remove_techTransparencyCard1Icon = document.getElementById('remove_techTransparencyCard1Icon'); if (el_remove_techTransparencyCard1Icon && el_remove_techTransparencyCard1Icon.type !== 'file') el_remove_techTransparencyCard1Icon.value = data.remove_techTransparencyCard1Icon || '';
  const el_techTransparencyCard1Desc = document.getElementById('techTransparencyCard1Desc'); if (el_techTransparencyCard1Desc && el_techTransparencyCard1Desc.type !== 'file') el_techTransparencyCard1Desc.value = data.techTransparencyCard1Desc || '';
  const el_techTransparencyCard2Icon_preview = document.getElementById('techTransparencyCard2Icon-preview'); if (el_techTransparencyCard2Icon_preview && el_techTransparencyCard2Icon_preview.type !== 'file') el_techTransparencyCard2Icon_preview.value = data['techTransparencyCard2Icon-preview'] || '';
  const el_techTransparencyCard2Icon = document.getElementById('techTransparencyCard2Icon'); if (el_techTransparencyCard2Icon && el_techTransparencyCard2Icon.type !== 'file') el_techTransparencyCard2Icon.value = data.techTransparencyCard2Icon || '';
  const el_remove_techTransparencyCard2Icon = document.getElementById('remove_techTransparencyCard2Icon'); if (el_remove_techTransparencyCard2Icon && el_remove_techTransparencyCard2Icon.type !== 'file') el_remove_techTransparencyCard2Icon.value = data.remove_techTransparencyCard2Icon || '';
  const el_techTransparencyCard2Desc = document.getElementById('techTransparencyCard2Desc'); if (el_techTransparencyCard2Desc && el_techTransparencyCard2Desc.type !== 'file') el_techTransparencyCard2Desc.value = data.techTransparencyCard2Desc || '';
  const el_techTransparencyCard3Icon_preview = document.getElementById('techTransparencyCard3Icon-preview'); if (el_techTransparencyCard3Icon_preview && el_techTransparencyCard3Icon_preview.type !== 'file') el_techTransparencyCard3Icon_preview.value = data['techTransparencyCard3Icon-preview'] || '';
  const el_techTransparencyCard3Icon = document.getElementById('techTransparencyCard3Icon'); if (el_techTransparencyCard3Icon && el_techTransparencyCard3Icon.type !== 'file') el_techTransparencyCard3Icon.value = data.techTransparencyCard3Icon || '';
  const el_remove_techTransparencyCard3Icon = document.getElementById('remove_techTransparencyCard3Icon'); if (el_remove_techTransparencyCard3Icon && el_remove_techTransparencyCard3Icon.type !== 'file') el_remove_techTransparencyCard3Icon.value = data.remove_techTransparencyCard3Icon || '';
  const el_techTransparencyCard3Desc = document.getElementById('techTransparencyCard3Desc'); if (el_techTransparencyCard3Desc && el_techTransparencyCard3Desc.type !== 'file') el_techTransparencyCard3Desc.value = data.techTransparencyCard3Desc || '';
  const el_techTransparencyCard4Icon_preview = document.getElementById('techTransparencyCard4Icon-preview'); if (el_techTransparencyCard4Icon_preview && el_techTransparencyCard4Icon_preview.type !== 'file') el_techTransparencyCard4Icon_preview.value = data['techTransparencyCard4Icon-preview'] || '';
  const el_techTransparencyCard4Icon = document.getElementById('techTransparencyCard4Icon'); if (el_techTransparencyCard4Icon && el_techTransparencyCard4Icon.type !== 'file') el_techTransparencyCard4Icon.value = data.techTransparencyCard4Icon || '';
  const el_remove_techTransparencyCard4Icon = document.getElementById('remove_techTransparencyCard4Icon'); if (el_remove_techTransparencyCard4Icon && el_remove_techTransparencyCard4Icon.type !== 'file') el_remove_techTransparencyCard4Icon.value = data.remove_techTransparencyCard4Icon || '';
  const el_techTransparencyCard4Desc = document.getElementById('techTransparencyCard4Desc'); if (el_techTransparencyCard4Desc && el_techTransparencyCard4Desc.type !== 'file') el_techTransparencyCard4Desc.value = data.techTransparencyCard4Desc || '';
  const el_techCompAdvTitle = document.getElementById('techCompAdvTitle'); if (el_techCompAdvTitle && el_techCompAdvTitle.type !== 'file') el_techCompAdvTitle.value = data.techCompAdvTitle || '';
  const el_techCompAdvDesc = document.getElementById('techCompAdvDesc'); if (el_techCompAdvDesc && el_techCompAdvDesc.type !== 'file') el_techCompAdvDesc.value = data.techCompAdvDesc || '';
  const el_techCompAdvRightImage_preview = document.getElementById('techCompAdvRightImage-preview'); if (el_techCompAdvRightImage_preview && el_techCompAdvRightImage_preview.type !== 'file') el_techCompAdvRightImage_preview.value = data['techCompAdvRightImage-preview'] || '';
  const el_techCompAdvRightImage = document.getElementById('techCompAdvRightImage'); if (el_techCompAdvRightImage && el_techCompAdvRightImage.type !== 'file') el_techCompAdvRightImage.value = data.techCompAdvRightImage || '';
  const el_remove_techCompAdvRightImage = document.getElementById('remove_techCompAdvRightImage'); if (el_remove_techCompAdvRightImage && el_remove_techCompAdvRightImage.type !== 'file') el_remove_techCompAdvRightImage.value = data.remove_techCompAdvRightImage || '';
  const el_techCompAdvRightBgImage_preview = document.getElementById('techCompAdvRightBgImage-preview'); if (el_techCompAdvRightBgImage_preview && el_techCompAdvRightBgImage_preview.type !== 'file') el_techCompAdvRightBgImage_preview.value = data['techCompAdvRightBgImage-preview'] || '';
  const el_techCompAdvRightBgImage = document.getElementById('techCompAdvRightBgImage'); if (el_techCompAdvRightBgImage && el_techCompAdvRightBgImage.type !== 'file') el_techCompAdvRightBgImage.value = data.techCompAdvRightBgImage || '';
  const el_remove_techCompAdvRightBgImage = document.getElementById('remove_techCompAdvRightBgImage'); if (el_remove_techCompAdvRightBgImage && el_remove_techCompAdvRightBgImage.type !== 'file') el_remove_techCompAdvRightBgImage.value = data.remove_techCompAdvRightBgImage || '';
  const el_techCompAdvFeatureTitle = document.getElementById('techCompAdvFeatureTitle'); if (el_techCompAdvFeatureTitle && el_techCompAdvFeatureTitle.type !== 'file') el_techCompAdvFeatureTitle.value = data.techCompAdvFeatureTitle || '';
  const el_techCompAdvFeature1Icon_preview = document.getElementById('techCompAdvFeature1Icon-preview'); if (el_techCompAdvFeature1Icon_preview && el_techCompAdvFeature1Icon_preview.type !== 'file') el_techCompAdvFeature1Icon_preview.value = data['techCompAdvFeature1Icon-preview'] || '';
  const el_techCompAdvFeature1Icon = document.getElementById('techCompAdvFeature1Icon'); if (el_techCompAdvFeature1Icon && el_techCompAdvFeature1Icon.type !== 'file') el_techCompAdvFeature1Icon.value = data.techCompAdvFeature1Icon || '';
  const el_remove_techCompAdvFeature1Icon = document.getElementById('remove_techCompAdvFeature1Icon'); if (el_remove_techCompAdvFeature1Icon && el_remove_techCompAdvFeature1Icon.type !== 'file') el_remove_techCompAdvFeature1Icon.value = data.remove_techCompAdvFeature1Icon || '';
  const el_techCompAdvFeature1Text = document.getElementById('techCompAdvFeature1Text'); if (el_techCompAdvFeature1Text && el_techCompAdvFeature1Text.type !== 'file') el_techCompAdvFeature1Text.value = data.techCompAdvFeature1Text || '';
  const el_techCompAdvFeature2Icon_preview = document.getElementById('techCompAdvFeature2Icon-preview'); if (el_techCompAdvFeature2Icon_preview && el_techCompAdvFeature2Icon_preview.type !== 'file') el_techCompAdvFeature2Icon_preview.value = data['techCompAdvFeature2Icon-preview'] || '';
  const el_techCompAdvFeature2Icon = document.getElementById('techCompAdvFeature2Icon'); if (el_techCompAdvFeature2Icon && el_techCompAdvFeature2Icon.type !== 'file') el_techCompAdvFeature2Icon.value = data.techCompAdvFeature2Icon || '';
  const el_remove_techCompAdvFeature2Icon = document.getElementById('remove_techCompAdvFeature2Icon'); if (el_remove_techCompAdvFeature2Icon && el_remove_techCompAdvFeature2Icon.type !== 'file') el_remove_techCompAdvFeature2Icon.value = data.remove_techCompAdvFeature2Icon || '';
  const el_techCompAdvFeature2Text = document.getElementById('techCompAdvFeature2Text'); if (el_techCompAdvFeature2Text && el_techCompAdvFeature2Text.type !== 'file') el_techCompAdvFeature2Text.value = data.techCompAdvFeature2Text || '';
  const el_techCompAdvFeature3Icon_preview = document.getElementById('techCompAdvFeature3Icon-preview'); if (el_techCompAdvFeature3Icon_preview && el_techCompAdvFeature3Icon_preview.type !== 'file') el_techCompAdvFeature3Icon_preview.value = data['techCompAdvFeature3Icon-preview'] || '';
  const el_techCompAdvFeature3Icon = document.getElementById('techCompAdvFeature3Icon'); if (el_techCompAdvFeature3Icon && el_techCompAdvFeature3Icon.type !== 'file') el_techCompAdvFeature3Icon.value = data.techCompAdvFeature3Icon || '';
  const el_remove_techCompAdvFeature3Icon = document.getElementById('remove_techCompAdvFeature3Icon'); if (el_remove_techCompAdvFeature3Icon && el_remove_techCompAdvFeature3Icon.type !== 'file') el_remove_techCompAdvFeature3Icon.value = data.remove_techCompAdvFeature3Icon || '';
  const el_techCompAdvFeature3Text = document.getElementById('techCompAdvFeature3Text'); if (el_techCompAdvFeature3Text && el_techCompAdvFeature3Text.type !== 'file') el_techCompAdvFeature3Text.value = data.techCompAdvFeature3Text || '';
  const el_techCompAdvPointsTitle = document.getElementById('techCompAdvPointsTitle'); if (el_techCompAdvPointsTitle && el_techCompAdvPointsTitle.type !== 'file') el_techCompAdvPointsTitle.value = data.techCompAdvPointsTitle || '';
  const el_techCompAdvPoint1Icon_preview = document.getElementById('techCompAdvPoint1Icon-preview'); if (el_techCompAdvPoint1Icon_preview && el_techCompAdvPoint1Icon_preview.type !== 'file') el_techCompAdvPoint1Icon_preview.value = data['techCompAdvPoint1Icon-preview'] || '';
  const el_techCompAdvPoint1Icon = document.getElementById('techCompAdvPoint1Icon'); if (el_techCompAdvPoint1Icon && el_techCompAdvPoint1Icon.type !== 'file') el_techCompAdvPoint1Icon.value = data.techCompAdvPoint1Icon || '';
  const el_remove_techCompAdvPoint1Icon = document.getElementById('remove_techCompAdvPoint1Icon'); if (el_remove_techCompAdvPoint1Icon && el_remove_techCompAdvPoint1Icon.type !== 'file') el_remove_techCompAdvPoint1Icon.value = data.remove_techCompAdvPoint1Icon || '';
  const el_techCompAdvPoint1Text = document.getElementById('techCompAdvPoint1Text'); if (el_techCompAdvPoint1Text && el_techCompAdvPoint1Text.type !== 'file') el_techCompAdvPoint1Text.value = data.techCompAdvPoint1Text || '';
  const el_techCompAdvPoint2Icon_preview = document.getElementById('techCompAdvPoint2Icon-preview'); if (el_techCompAdvPoint2Icon_preview && el_techCompAdvPoint2Icon_preview.type !== 'file') el_techCompAdvPoint2Icon_preview.value = data['techCompAdvPoint2Icon-preview'] || '';
  const el_techCompAdvPoint2Icon = document.getElementById('techCompAdvPoint2Icon'); if (el_techCompAdvPoint2Icon && el_techCompAdvPoint2Icon.type !== 'file') el_techCompAdvPoint2Icon.value = data.techCompAdvPoint2Icon || '';
  const el_remove_techCompAdvPoint2Icon = document.getElementById('remove_techCompAdvPoint2Icon'); if (el_remove_techCompAdvPoint2Icon && el_remove_techCompAdvPoint2Icon.type !== 'file') el_remove_techCompAdvPoint2Icon.value = data.remove_techCompAdvPoint2Icon || '';
  const el_techCompAdvPoint2Text = document.getElementById('techCompAdvPoint2Text'); if (el_techCompAdvPoint2Text && el_techCompAdvPoint2Text.type !== 'file') el_techCompAdvPoint2Text.value = data.techCompAdvPoint2Text || '';
  const el_techCompAdvPoint3Icon_preview = document.getElementById('techCompAdvPoint3Icon-preview'); if (el_techCompAdvPoint3Icon_preview && el_techCompAdvPoint3Icon_preview.type !== 'file') el_techCompAdvPoint3Icon_preview.value = data['techCompAdvPoint3Icon-preview'] || '';
  const el_techCompAdvPoint3Icon = document.getElementById('techCompAdvPoint3Icon'); if (el_techCompAdvPoint3Icon && el_techCompAdvPoint3Icon.type !== 'file') el_techCompAdvPoint3Icon.value = data.techCompAdvPoint3Icon || '';
  const el_remove_techCompAdvPoint3Icon = document.getElementById('remove_techCompAdvPoint3Icon'); if (el_remove_techCompAdvPoint3Icon && el_remove_techCompAdvPoint3Icon.type !== 'file') el_remove_techCompAdvPoint3Icon.value = data.remove_techCompAdvPoint3Icon || '';
  const el_techCompAdvPoint3Text = document.getElementById('techCompAdvPoint3Text'); if (el_techCompAdvPoint3Text && el_techCompAdvPoint3Text.type !== 'file') el_techCompAdvPoint3Text.value = data.techCompAdvPoint3Text || '';
  const el_techFutureTitle = document.getElementById('techFutureTitle'); if (el_techFutureTitle && el_techFutureTitle.type !== 'file') el_techFutureTitle.value = data.techFutureTitle || '';
  const el_techFutureDesc = document.getElementById('techFutureDesc'); if (el_techFutureDesc && el_techFutureDesc.type !== 'file') el_techFutureDesc.value = data.techFutureDesc || '';
  const el_techFutureBtn1Text = document.getElementById('techFutureBtn1Text'); if (el_techFutureBtn1Text && el_techFutureBtn1Text.type !== 'file') el_techFutureBtn1Text.value = data.techFutureBtn1Text || '';
  const el_techFutureBtn1Link = document.getElementById('techFutureBtn1Link'); if (el_techFutureBtn1Link && el_techFutureBtn1Link.type !== 'file') el_techFutureBtn1Link.value = data.techFutureBtn1Link || '';
  const el_techFutureBtn2Text = document.getElementById('techFutureBtn2Text'); if (el_techFutureBtn2Text && el_techFutureBtn2Text.type !== 'file') el_techFutureBtn2Text.value = data.techFutureBtn2Text || '';
  const el_techFutureBtn2Link = document.getElementById('techFutureBtn2Link'); if (el_techFutureBtn2Link && el_techFutureBtn2Link.type !== 'file') el_techFutureBtn2Link.value = data.techFutureBtn2Link || '';
  const el_techFutureTopRightImage_preview = document.getElementById('techFutureTopRightImage-preview'); if (el_techFutureTopRightImage_preview && el_techFutureTopRightImage_preview.type !== 'file') el_techFutureTopRightImage_preview.value = data['techFutureTopRightImage-preview'] || '';
  const el_techFutureTopRightImage = document.getElementById('techFutureTopRightImage'); if (el_techFutureTopRightImage && el_techFutureTopRightImage.type !== 'file') el_techFutureTopRightImage.value = data.techFutureTopRightImage || '';
  const el_remove_techFutureTopRightImage = document.getElementById('remove_techFutureTopRightImage'); if (el_remove_techFutureTopRightImage && el_remove_techFutureTopRightImage.type !== 'file') el_remove_techFutureTopRightImage.value = data.remove_techFutureTopRightImage || '';
  const el_techFutureBottomLeftImage_preview = document.getElementById('techFutureBottomLeftImage-preview'); if (el_techFutureBottomLeftImage_preview && el_techFutureBottomLeftImage_preview.type !== 'file') el_techFutureBottomLeftImage_preview.value = data['techFutureBottomLeftImage-preview'] || '';
  const el_techFutureBottomLeftImage = document.getElementById('techFutureBottomLeftImage'); if (el_techFutureBottomLeftImage && el_techFutureBottomLeftImage.type !== 'file') el_techFutureBottomLeftImage.value = data.techFutureBottomLeftImage || '';
  const el_remove_techFutureBottomLeftImage = document.getElementById('remove_techFutureBottomLeftImage'); if (el_remove_techFutureBottomLeftImage && el_remove_techFutureBottomLeftImage.type !== 'file') el_remove_techFutureBottomLeftImage.value = data.remove_techFutureBottomLeftImage || '';
  const el_inquiries_panel = document.getElementById('inquiries-panel'); if (el_inquiries_panel && el_inquiries_panel.type !== 'file') el_inquiries_panel.value = data['inquiries-panel'] || '';
  const el_inquiries_count_tag = document.getElementById('inquiries-count-tag'); if (el_inquiries_count_tag && el_inquiries_count_tag.type !== 'file') el_inquiries_count_tag.value = data['inquiries-count-tag'] || '';
  const el_inquiries_loading = document.getElementById('inquiries-loading'); if (el_inquiries_loading && el_inquiries_loading.type !== 'file') el_inquiries_loading.value = data['inquiries-loading'] || '';
  const el_inquiries_empty = document.getElementById('inquiries-empty'); if (el_inquiries_empty && el_inquiries_empty.type !== 'file') el_inquiries_empty.value = data['inquiries-empty'] || '';
  const el_inquiries_table = document.getElementById('inquiries-table'); if (el_inquiries_table && el_inquiries_table.type !== 'file') el_inquiries_table.value = data['inquiries-table'] || '';
  const el_inquiries_table_body = document.getElementById('inquiries-table-body'); if (el_inquiries_table_body && el_inquiries_table_body.type !== 'file') el_inquiries_table_body.value = data['inquiries-table-body'] || '';
  const el_inquiry_modal = document.getElementById('inquiry-modal'); if (el_inquiry_modal && el_inquiry_modal.type !== 'file') el_inquiry_modal.value = data['inquiry-modal'] || '';
  const el_inquiry_modal_body = document.getElementById('inquiry-modal-body'); if (el_inquiry_modal_body && el_inquiry_modal_body.type !== 'file') el_inquiry_modal_body.value = data['inquiry-modal-body'] || '';
  const el_inquiry_modal_mark_read = document.getElementById('inquiry-modal-mark-read'); if (el_inquiry_modal_mark_read && el_inquiry_modal_mark_read.type !== 'file') el_inquiry_modal_mark_read.value = data['inquiry-modal-mark-read'] || '';
  const el_inquiry_modal_delete = document.getElementById('inquiry-modal-delete'); if (el_inquiry_modal_delete && el_inquiry_modal_delete.type !== 'file') el_inquiry_modal_delete.value = data['inquiry-modal-delete'] || '';
  if (data.techCard1Paragraphs) renderDynamicParagraphs('techCard1Paragraphs', data.techCard1Paragraphs);
  if (data.techCard2TopParagraphs) renderDynamicParagraphs('techCard2TopParagraphs', data.techCard2TopParagraphs);
  if (data.techCard2BottomParagraphs) renderDynamicParagraphs('techCard2BottomParagraphs', data.techCard2BottomParagraphs);
  if (data.techCard3Paragraphs) renderDynamicParagraphs('techCard3Paragraphs', data.techCard3Paragraphs);
  if (data.techSmartCheckpoints) renderDynamicParagraphs('techSmartCheckpoints', data.techSmartCheckpoints);
  if (data.techSecuritySlider2FeatureList) renderDynamicParagraphs('techSecuritySlider2FeatureList', data.techSecuritySlider2FeatureList);
  if (data.techCostParagraphs) renderDynamicParagraphs('techCostParagraphs', data.techCostParagraphs);
};

window.appendPageFormData = function(formData) {
  // Collect values from the DOM
  formData.append('techHeroTopTitle', document.getElementById('techHeroTopTitle').value);
    formData.append('techHeroTitle', document.getElementById('techHeroTitle').value);
    formData.append('techHeroDescription', document.getElementById('techHeroDescription').value);
    formData.append('techHeroPrimaryBtnText', document.getElementById('techHeroPrimaryBtnText').value);
    formData.append('techHeroPrimaryBtnLink', document.getElementById('techHeroPrimaryBtnLink').value);
    formData.append('techHeroSecondaryBtnText', document.getElementById('techHeroSecondaryBtnText').value);
    formData.append('techHeroSecondaryBtnLink', document.getElementById('techHeroSecondaryBtnLink').value);

    formData.append('techCard1Title', document.getElementById('techCard1Title').value);
    formData.append('techCard1Paragraphs', JSON.stringify(collectDynamicParagraphs('techCard1Paragraphs')));
    if (document.getElementById('techCard1BgImage').files[0]) formData.append('techCard1BgImage', document.getElementById('techCard1BgImage').files[0]);
    if (document.getElementById('techCard1Image').files[0]) formData.append('techCard1Image', document.getElementById('techCard1Image').files[0]);

    formData.append('techCard2Title', document.getElementById('techCard2Title').value);
    formData.append('techCard2TopParagraphs', JSON.stringify(collectDynamicParagraphs('techCard2TopParagraphs')));
    formData.append('techCard2Point1Text', document.getElementById('techCard2Point1Text').value);
    if (document.getElementById('techCard2Point1Icon').files[0]) formData.append('techCard2Point1Icon', document.getElementById('techCard2Point1Icon').files[0]);
    formData.append('techCard2Point2Text', document.getElementById('techCard2Point2Text').value);
    if (document.getElementById('techCard2Point2Icon').files[0]) formData.append('techCard2Point2Icon', document.getElementById('techCard2Point2Icon').files[0]);
    formData.append('techCard2Point3Text', document.getElementById('techCard2Point3Text').value);
    if (document.getElementById('techCard2Point3Icon').files[0]) formData.append('techCard2Point3Icon', document.getElementById('techCard2Point3Icon').files[0]);
    formData.append('techCard2Point4Text', document.getElementById('techCard2Point4Text').value);
    if (document.getElementById('techCard2Point4Icon').files[0]) formData.append('techCard2Point4Icon', document.getElementById('techCard2Point4Icon').files[0]);
    formData.append('techCard2BottomParagraphs', JSON.stringify(collectDynamicParagraphs('techCard2BottomParagraphs')));
    if (document.getElementById('techCard2BgImage').files[0]) formData.append('techCard2BgImage', document.getElementById('techCard2BgImage').files[0]);
    if (document.getElementById('techCard2Image').files[0]) formData.append('techCard2Image', document.getElementById('techCard2Image').files[0]);

    formData.append('techCard3Title', document.getElementById('techCard3Title').value);
    formData.append('techCard3Point1Text', document.getElementById('techCard3Point1Text').value);
    if (document.getElementById('techCard3Point1Icon').files[0]) formData.append('techCard3Point1Icon', document.getElementById('techCard3Point1Icon').files[0]);
    formData.append('techCard3Point2Text', document.getElementById('techCard3Point2Text').value);
    if (document.getElementById('techCard3Point2Icon').files[0]) formData.append('techCard3Point2Icon', document.getElementById('techCard3Point2Icon').files[0]);
    formData.append('techCard3Point3Text', document.getElementById('techCard3Point3Text').value);
    if (document.getElementById('techCard3Point3Icon').files[0]) formData.append('techCard3Point3Icon', document.getElementById('techCard3Point3Icon').files[0]);
    formData.append('techCard3Paragraphs', JSON.stringify(collectDynamicParagraphs('techCard3Paragraphs')));
    if (document.getElementById('techCard3BgImage').files[0]) formData.append('techCard3BgImage', document.getElementById('techCard3BgImage').files[0]);
    if (document.getElementById('techCard3Image').files[0]) formData.append('techCard3Image', document.getElementById('techCard3Image').files[0]);

    // append remove flags for tech cards
    const techRemoveFlags = [
      'remove_techCard1BgImage', 'remove_techCard1Image',
      'remove_techCard2Point1Icon', 'remove_techCard2Point2Icon', 'remove_techCard2Point3Icon', 'remove_techCard2Point4Icon', 'remove_techCard2BgImage', 'remove_techCard2Image',
      'remove_techCard3Point1Icon', 'remove_techCard3Point2Icon', 'remove_techCard3Point3Icon', 'remove_techCard3BgImage', 'remove_techCard3Image'
    ];
    techRemoveFlags.forEach(flag => {
      const el = document.getElementById(flag);
      if(el) formData.append(flag, el.value);
    });

    formData.append('techConsensusBadge', document.getElementById('techConsensusBadge').value);
    formData.append('techConsensusTitle', document.getElementById('techConsensusTitle').value);
    formData.append('techConsensusDescription', document.getElementById('techConsensusDescription').value);
    formData.append('techConsensusCard1Desc', document.getElementById('techConsensusCard1Desc').value);
    if (document.getElementById('techConsensusCard1Icon').files[0]) formData.append('techConsensusCard1Icon', document.getElementById('techConsensusCard1Icon').files[0]);
    formData.append('techConsensusCard2Desc', document.getElementById('techConsensusCard2Desc').value);
    if (document.getElementById('techConsensusCard2Icon').files[0]) formData.append('techConsensusCard2Icon', document.getElementById('techConsensusCard2Icon').files[0]);
    formData.append('techConsensusCard3Desc', document.getElementById('techConsensusCard3Desc').value);
    if (document.getElementById('techConsensusCard3Icon').files[0]) formData.append('techConsensusCard3Icon', document.getElementById('techConsensusCard3Icon').files[0]);
    formData.append('techConsensusBottomDesc', document.getElementById('techConsensusBottomDesc').value);

    formData.append('techSmartTitle', document.getElementById('techSmartTitle').value);
    formData.append('techSmartDesc', document.getElementById('techSmartDesc').value);
    formData.append('techSmartCheckpoints', JSON.stringify(collectDynamicParagraphs('techSmartCheckpoints')));
    formData.append('techSmartFeature1Name', document.getElementById('techSmartFeature1Name').value);
    if (document.getElementById('techSmartFeature1Icon').files[0]) formData.append('techSmartFeature1Icon', document.getElementById('techSmartFeature1Icon').files[0]);
    formData.append('techSmartFeature2Name', document.getElementById('techSmartFeature2Name').value);
    if (document.getElementById('techSmartFeature2Icon').files[0]) formData.append('techSmartFeature2Icon', document.getElementById('techSmartFeature2Icon').files[0]);
    formData.append('techSmartFeature3Name', document.getElementById('techSmartFeature3Name').value);
    if (document.getElementById('techSmartFeature3Icon').files[0]) formData.append('techSmartFeature3Icon', document.getElementById('techSmartFeature3Icon').files[0]);
    if (document.getElementById('techSmartRightBgImage').files[0]) formData.append('techSmartRightBgImage', document.getElementById('techSmartRightBgImage').files[0]);
    if (document.getElementById('techSmartRightImage').files[0]) formData.append('techSmartRightImage', document.getElementById('techSmartRightImage').files[0]);

    const newTechRemoveFlags = [
      'remove_techConsensusCard1Icon', 'remove_techConsensusCard2Icon', 'remove_techConsensusCard3Icon',
      'remove_techSmartFeature1Icon', 'remove_techSmartFeature2Icon', 'remove_techSmartFeature3Icon',
      'remove_techSmartRightBgImage', 'remove_techSmartRightImage'
    ];
    newTechRemoveFlags.forEach(flag => {
      const el = document.getElementById(flag);
      if(el) formData.append(flag, el.value);
    });

    if (document.getElementById('techSlide1Image').files[0]) formData.append('techSlide1Image', document.getElementById('techSlide1Image').files[0]);
    formData.append('techSlide1Title', document.getElementById('techSlide1Title').value);
    formData.append('techSlide1Desc', document.getElementById('techSlide1Desc').value);
    if (document.getElementById('techSlide1Point1Icon').files[0]) formData.append('techSlide1Point1Icon', document.getElementById('techSlide1Point1Icon').files[0]);
    formData.append('techSlide1Point1Text', document.getElementById('techSlide1Point1Text').value);
    if (document.getElementById('techSlide1Point2Icon').files[0]) formData.append('techSlide1Point2Icon', document.getElementById('techSlide1Point2Icon').files[0]);
    formData.append('techSlide1Point2Text', document.getElementById('techSlide1Point2Text').value);
    formData.append('techSlide1FeatureHeading', document.getElementById('techSlide1FeatureHeading').value);
    if (document.getElementById('techSlide1Feature1Icon').files[0]) formData.append('techSlide1Feature1Icon', document.getElementById('techSlide1Feature1Icon').files[0]);
    formData.append('techSlide1Feature1Text', document.getElementById('techSlide1Feature1Text').value);
    if (document.getElementById('techSlide1Feature2Icon').files[0]) formData.append('techSlide1Feature2Icon', document.getElementById('techSlide1Feature2Icon').files[0]);
    formData.append('techSlide1Feature2Text', document.getElementById('techSlide1Feature2Text').value);
    if (document.getElementById('techSlide1Feature3Icon').files[0]) formData.append('techSlide1Feature3Icon', document.getElementById('techSlide1Feature3Icon').files[0]);
    formData.append('techSlide1Feature3Text', document.getElementById('techSlide1Feature3Text').value);

    formData.append('techSlide2Title', document.getElementById('techSlide2Title').value);
    formData.append('techSlide2Desc', document.getElementById('techSlide2Desc').value);
    if (document.getElementById('techSlide2Image').files[0]) formData.append('techSlide2Image', document.getElementById('techSlide2Image').files[0]);
    if (document.getElementById('techSlide2Feature1Icon').files[0]) formData.append('techSlide2Feature1Icon', document.getElementById('techSlide2Feature1Icon').files[0]);
    formData.append('techSlide2Feature1Text', document.getElementById('techSlide2Feature1Text').value);
    if (document.getElementById('techSlide2Feature2Icon').files[0]) formData.append('techSlide2Feature2Icon', document.getElementById('techSlide2Feature2Icon').files[0]);
    formData.append('techSlide2Feature2Text', document.getElementById('techSlide2Feature2Text').value);
    if (document.getElementById('techSlide2Feature3Icon').files[0]) formData.append('techSlide2Feature3Icon', document.getElementById('techSlide2Feature3Icon').files[0]);
    formData.append('techSlide2Feature3Text', document.getElementById('techSlide2Feature3Text').value);

    if (document.getElementById('techSlide3Image').files[0]) formData.append('techSlide3Image', document.getElementById('techSlide3Image').files[0]);
    formData.append('techSlide3Title', document.getElementById('techSlide3Title').value);
    formData.append('techSlide3Desc', document.getElementById('techSlide3Desc').value);
    if (document.getElementById('techSlide3Feature1Icon').files[0]) formData.append('techSlide3Feature1Icon', document.getElementById('techSlide3Feature1Icon').files[0]);
    formData.append('techSlide3Feature1Text', document.getElementById('techSlide3Feature1Text').value);
    if (document.getElementById('techSlide3Feature2Icon').files[0]) formData.append('techSlide3Feature2Icon', document.getElementById('techSlide3Feature2Icon').files[0]);
    formData.append('techSlide3Feature2Text', document.getElementById('techSlide3Feature2Text').value);
    if (document.getElementById('techSlide3Feature3Icon').files[0]) formData.append('techSlide3Feature3Icon', document.getElementById('techSlide3Feature3Icon').files[0]);
    formData.append('techSlide3Feature3Text', document.getElementById('techSlide3Feature3Text').value);

    const slideRemoveFlags = [
      'remove_techSlide1Image', 'remove_techSlide1Point1Icon', 'remove_techSlide1Point2Icon',
      'remove_techSlide1Feature1Icon', 'remove_techSlide1Feature2Icon', 'remove_techSlide1Feature3Icon',
      'remove_techSlide2Image', 'remove_techSlide2Feature1Icon', 'remove_techSlide2Feature2Icon', 'remove_techSlide2Feature3Icon',
      'remove_techSlide3Image', 'remove_techSlide3Feature1Icon', 'remove_techSlide3Feature2Icon', 'remove_techSlide3Feature3Icon'
    ];
    slideRemoveFlags.forEach(flag => {
      const el = document.getElementById(flag);
      if(el) formData.append(flag, el.value);
    });

    formData.append('techSecuritySlider1Title', document.getElementById('techSecuritySlider1Title').value);
    formData.append('techSecuritySlider1Desc', document.getElementById('techSecuritySlider1Desc').value);
    if (document.getElementById('techSecuritySlider1Feature1Icon').files[0]) formData.append('techSecuritySlider1Feature1Icon', document.getElementById('techSecuritySlider1Feature1Icon').files[0]);
    formData.append('techSecuritySlider1Feature1Text', document.getElementById('techSecuritySlider1Feature1Text').value);
    if (document.getElementById('techSecuritySlider1Feature2Icon').files[0]) formData.append('techSecuritySlider1Feature2Icon', document.getElementById('techSecuritySlider1Feature2Icon').files[0]);
    formData.append('techSecuritySlider1Feature2Text', document.getElementById('techSecuritySlider1Feature2Text').value);
    if (document.getElementById('techSecuritySlider1Feature3Icon').files[0]) formData.append('techSecuritySlider1Feature3Icon', document.getElementById('techSecuritySlider1Feature3Icon').files[0]);
    formData.append('techSecuritySlider1Feature3Text', document.getElementById('techSecuritySlider1Feature3Text').value);
    if (document.getElementById('techSecuritySlider1RightImage').files[0]) formData.append('techSecuritySlider1RightImage', document.getElementById('techSecuritySlider1RightImage').files[0]);
    if (document.getElementById('techSecuritySlider1RightBgImage').files[0]) formData.append('techSecuritySlider1RightBgImage', document.getElementById('techSecuritySlider1RightBgImage').files[0]);

    formData.append('techSecuritySlider2Title', document.getElementById('techSecuritySlider2Title').value);
    formData.append('techSecuritySlider2Desc', document.getElementById('techSecuritySlider2Desc').value);
    if (document.getElementById('techSecuritySlider2RightImage').files[0]) formData.append('techSecuritySlider2RightImage', document.getElementById('techSecuritySlider2RightImage').files[0]);
    if (document.getElementById('techSecuritySlider2RightBgImage').files[0]) formData.append('techSecuritySlider2RightBgImage', document.getElementById('techSecuritySlider2RightBgImage').files[0]);
    if (document.getElementById('techSecuritySlider2Point1Icon').files[0]) formData.append('techSecuritySlider2Point1Icon', document.getElementById('techSecuritySlider2Point1Icon').files[0]);
    formData.append('techSecuritySlider2Point1Text', document.getElementById('techSecuritySlider2Point1Text').value);
    if (document.getElementById('techSecuritySlider2Point2Icon').files[0]) formData.append('techSecuritySlider2Point2Icon', document.getElementById('techSecuritySlider2Point2Icon').files[0]);
    formData.append('techSecuritySlider2Point2Text', document.getElementById('techSecuritySlider2Point2Text').value);
    formData.append('techSecuritySlider2FeatureTitle', document.getElementById('techSecuritySlider2FeatureTitle').value);
    formData.append('techSecuritySlider2FeatureList', JSON.stringify(collectDynamicParagraphs('techSecuritySlider2FeatureList')));

    const secRemoveFlags = [
      'remove_techSecuritySlider1Feature1Icon', 'remove_techSecuritySlider1Feature2Icon', 'remove_techSecuritySlider1Feature3Icon',
      'remove_techSecuritySlider1RightImage', 'remove_techSecuritySlider1RightBgImage',
      'remove_techSecuritySlider2Point1Icon', 'remove_techSecuritySlider2Point2Icon'
    ];
    secRemoveFlags.forEach(flag => {
      const el = document.getElementById(flag);
      if(el) formData.append(flag, el.value);
    });

    formData.append('techCostTitle', document.getElementById('techCostTitle').value);
    formData.append('techCostParagraphs', JSON.stringify(collectDynamicParagraphs('techCostParagraphs')));

    formData.append('techTransparencyTitle', document.getElementById('techTransparencyTitle').value);
    formData.append('techTransparencyDesc', document.getElementById('techTransparencyDesc').value);
    if (document.getElementById('techTransparencyCard1Icon').files[0]) formData.append('techTransparencyCard1Icon', document.getElementById('techTransparencyCard1Icon').files[0]);
    formData.append('techTransparencyCard1Desc', document.getElementById('techTransparencyCard1Desc').value);
    if (document.getElementById('techTransparencyCard2Icon').files[0]) formData.append('techTransparencyCard2Icon', document.getElementById('techTransparencyCard2Icon').files[0]);
    formData.append('techTransparencyCard2Desc', document.getElementById('techTransparencyCard2Desc').value);
    if (document.getElementById('techTransparencyCard3Icon').files[0]) formData.append('techTransparencyCard3Icon', document.getElementById('techTransparencyCard3Icon').files[0]);
    formData.append('techTransparencyCard3Desc', document.getElementById('techTransparencyCard3Desc').value);
    if (document.getElementById('techTransparencyCard4Icon').files[0]) formData.append('techTransparencyCard4Icon', document.getElementById('techTransparencyCard4Icon').files[0]);
    formData.append('techTransparencyCard4Desc', document.getElementById('techTransparencyCard4Desc').value);

    const extraFlags = ['remove_techTransparencyCard1Icon', 'remove_techTransparencyCard2Icon', 'remove_techTransparencyCard3Icon', 'remove_techTransparencyCard4Icon'];
    extraFlags.forEach(flag => {
      const el = document.getElementById(flag);
      if(el) formData.append(flag, el.value);
    });

    formData.append('techCompAdvTitle', document.getElementById('techCompAdvTitle').value);
    formData.append('techCompAdvDesc', document.getElementById('techCompAdvDesc').value);
    formData.append('techCompAdvFeatureTitle', document.getElementById('techCompAdvFeatureTitle').value);
    if (document.getElementById('techCompAdvFeature1Icon').files[0]) formData.append('techCompAdvFeature1Icon', document.getElementById('techCompAdvFeature1Icon').files[0]);
    formData.append('techCompAdvFeature1Text', document.getElementById('techCompAdvFeature1Text').value);
    if (document.getElementById('techCompAdvFeature2Icon').files[0]) formData.append('techCompAdvFeature2Icon', document.getElementById('techCompAdvFeature2Icon').files[0]);
    formData.append('techCompAdvFeature2Text', document.getElementById('techCompAdvFeature2Text').value);
    if (document.getElementById('techCompAdvFeature3Icon').files[0]) formData.append('techCompAdvFeature3Icon', document.getElementById('techCompAdvFeature3Icon').files[0]);
    formData.append('techCompAdvFeature3Text', document.getElementById('techCompAdvFeature3Text').value);
    formData.append('techCompAdvPointsTitle', document.getElementById('techCompAdvPointsTitle').value);
    if (document.getElementById('techCompAdvPoint1Icon').files[0]) formData.append('techCompAdvPoint1Icon', document.getElementById('techCompAdvPoint1Icon').files[0]);
    formData.append('techCompAdvPoint1Text', document.getElementById('techCompAdvPoint1Text').value);
    if (document.getElementById('techCompAdvPoint2Icon').files[0]) formData.append('techCompAdvPoint2Icon', document.getElementById('techCompAdvPoint2Icon').files[0]);
    formData.append('techCompAdvPoint2Text', document.getElementById('techCompAdvPoint2Text').value);
    if (document.getElementById('techCompAdvPoint3Icon').files[0]) formData.append('techCompAdvPoint3Icon', document.getElementById('techCompAdvPoint3Icon').files[0]);
    formData.append('techCompAdvPoint3Text', document.getElementById('techCompAdvPoint3Text').value);
    if (document.getElementById('techCompAdvRightImage').files[0]) formData.append('techCompAdvRightImage', document.getElementById('techCompAdvRightImage').files[0]);
    if (document.getElementById('techCompAdvRightBgImage').files[0]) formData.append('techCompAdvRightBgImage', document.getElementById('techCompAdvRightBgImage').files[0]);

    formData.append('techFutureTitle', document.getElementById('techFutureTitle').value);
    formData.append('techFutureDesc', document.getElementById('techFutureDesc').value);
    formData.append('techFutureBtn1Text', document.getElementById('techFutureBtn1Text').value);
    formData.append('techFutureBtn1Link', document.getElementById('techFutureBtn1Link').value);
    formData.append('techFutureBtn2Text', document.getElementById('techFutureBtn2Text').value);
    formData.append('techFutureBtn2Link', document.getElementById('techFutureBtn2Link').value);
    if (document.getElementById('techFutureTopRightImage').files[0]) formData.append('techFutureTopRightImage', document.getElementById('techFutureTopRightImage').files[0]);
    if (document.getElementById('techFutureBottomLeftImage').files[0]) formData.append('techFutureBottomLeftImage', document.getElementById('techFutureBottomLeftImage').files[0]);

    const compAdvFlags = ['remove_techCompAdvFeature1Icon', 'remove_techCompAdvFeature2Icon', 'remove_techCompAdvFeature3Icon', 'remove_techCompAdvPoint1Icon', 'remove_techCompAdvPoint2Icon', 'remove_techCompAdvPoint3Icon', 'remove_techCompAdvRightImage', 'remove_techCompAdvRightBgImage', 'remove_techFutureTopRightImage', 'remove_techFutureBottomLeftImage'];
    compAdvFlags.forEach(flag => {
      const el = document.getElementById(flag);
      if(el) formData.append(flag, el.value);
    });
};

