/* 
* Admin JavaScript for the TOKEN page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Inject values into the DOM safely
  const el_tokenHeroTopHeader = document.getElementById('tokenHeroTopHeader'); if (el_tokenHeroTopHeader && el_tokenHeroTopHeader.type !== 'file') el_tokenHeroTopHeader.value = data.tokenHeroTopHeader || '';
  const el_tokenHeroTitle = document.getElementById('tokenHeroTitle'); if (el_tokenHeroTitle && el_tokenHeroTitle.type !== 'file') el_tokenHeroTitle.value = data.tokenHeroTitle || '';
  const el_tokenHeroDescription = document.getElementById('tokenHeroDescription'); if (el_tokenHeroDescription && el_tokenHeroDescription.type !== 'file') el_tokenHeroDescription.value = data.tokenHeroDescription || '';
  const el_tokenHeroPrimaryBtnText = document.getElementById('tokenHeroPrimaryBtnText'); if (el_tokenHeroPrimaryBtnText && el_tokenHeroPrimaryBtnText.type !== 'file') el_tokenHeroPrimaryBtnText.value = data.tokenHeroPrimaryBtnText || '';
  const el_tokenHeroPrimaryBtnLink = document.getElementById('tokenHeroPrimaryBtnLink'); if (el_tokenHeroPrimaryBtnLink && el_tokenHeroPrimaryBtnLink.type !== 'file') el_tokenHeroPrimaryBtnLink.value = data.tokenHeroPrimaryBtnLink || '';
  const el_tokenHeroSecondaryBtnText = document.getElementById('tokenHeroSecondaryBtnText'); if (el_tokenHeroSecondaryBtnText && el_tokenHeroSecondaryBtnText.type !== 'file') el_tokenHeroSecondaryBtnText.value = data.tokenHeroSecondaryBtnText || '';
  const el_tokenHeroSecondaryBtnLink = document.getElementById('tokenHeroSecondaryBtnLink'); if (el_tokenHeroSecondaryBtnLink && el_tokenHeroSecondaryBtnLink.type !== 'file') el_tokenHeroSecondaryBtnLink.value = data.tokenHeroSecondaryBtnLink || '';
  const el_tokenDualEcosystemTitle = document.getElementById('tokenDualEcosystemTitle'); if (el_tokenDualEcosystemTitle && el_tokenDualEcosystemTitle.type !== 'file') el_tokenDualEcosystemTitle.value = data.tokenDualEcosystemTitle || '';
  const el_tokenDualEcosystemDesc = document.getElementById('tokenDualEcosystemDesc'); if (el_tokenDualEcosystemDesc && el_tokenDualEcosystemDesc.type !== 'file') el_tokenDualEcosystemDesc.value = data.tokenDualEcosystemDesc || '';
  const el_tokenDualEcosystemCard1Image_preview = document.getElementById('tokenDualEcosystemCard1Image-preview'); if (el_tokenDualEcosystemCard1Image_preview && el_tokenDualEcosystemCard1Image_preview.type !== 'file') el_tokenDualEcosystemCard1Image_preview.value = data['tokenDualEcosystemCard1Image-preview'] || '';
  const el_tokenDualEcosystemCard1Image = document.getElementById('tokenDualEcosystemCard1Image'); if (el_tokenDualEcosystemCard1Image && el_tokenDualEcosystemCard1Image.type !== 'file') el_tokenDualEcosystemCard1Image.value = data.tokenDualEcosystemCard1Image || '';
  const el_remove_tokenDualEcosystemCard1Image = document.getElementById('remove_tokenDualEcosystemCard1Image'); if (el_remove_tokenDualEcosystemCard1Image && el_remove_tokenDualEcosystemCard1Image.type !== 'file') el_remove_tokenDualEcosystemCard1Image.value = data.remove_tokenDualEcosystemCard1Image || '';
  const el_tokenDualEcosystemCard1Desc = document.getElementById('tokenDualEcosystemCard1Desc'); if (el_tokenDualEcosystemCard1Desc && el_tokenDualEcosystemCard1Desc.type !== 'file') el_tokenDualEcosystemCard1Desc.value = data.tokenDualEcosystemCard1Desc || '';
  const el_tokenDualEcosystemCard2Image_preview = document.getElementById('tokenDualEcosystemCard2Image-preview'); if (el_tokenDualEcosystemCard2Image_preview && el_tokenDualEcosystemCard2Image_preview.type !== 'file') el_tokenDualEcosystemCard2Image_preview.value = data['tokenDualEcosystemCard2Image-preview'] || '';
  const el_tokenDualEcosystemCard2Image = document.getElementById('tokenDualEcosystemCard2Image'); if (el_tokenDualEcosystemCard2Image && el_tokenDualEcosystemCard2Image.type !== 'file') el_tokenDualEcosystemCard2Image.value = data.tokenDualEcosystemCard2Image || '';
  const el_remove_tokenDualEcosystemCard2Image = document.getElementById('remove_tokenDualEcosystemCard2Image'); if (el_remove_tokenDualEcosystemCard2Image && el_remove_tokenDualEcosystemCard2Image.type !== 'file') el_remove_tokenDualEcosystemCard2Image.value = data.remove_tokenDualEcosystemCard2Image || '';
  const el_tokenDualEcosystemCard2Desc = document.getElementById('tokenDualEcosystemCard2Desc'); if (el_tokenDualEcosystemCard2Desc && el_tokenDualEcosystemCard2Desc.type !== 'file') el_tokenDualEcosystemCard2Desc.value = data.tokenDualEcosystemCard2Desc || '';
  const el_tokenDualEcosystemBottomDesc = document.getElementById('tokenDualEcosystemBottomDesc'); if (el_tokenDualEcosystemBottomDesc && el_tokenDualEcosystemBottomDesc.type !== 'file') el_tokenDualEcosystemBottomDesc.value = data.tokenDualEcosystemBottomDesc || '';
  const el_tokenHybridBadge = document.getElementById('tokenHybridBadge'); if (el_tokenHybridBadge && el_tokenHybridBadge.type !== 'file') el_tokenHybridBadge.value = data.tokenHybridBadge || '';
  const el_tokenHybridTitle = document.getElementById('tokenHybridTitle'); if (el_tokenHybridTitle && el_tokenHybridTitle.type !== 'file') el_tokenHybridTitle.value = data.tokenHybridTitle || '';
  const el_tokenHybridDesc = document.getElementById('tokenHybridDesc'); if (el_tokenHybridDesc && el_tokenHybridDesc.type !== 'file') el_tokenHybridDesc.value = data.tokenHybridDesc || '';
  const el_tokenHybridCard1Icon_preview = document.getElementById('tokenHybridCard1Icon-preview'); if (el_tokenHybridCard1Icon_preview && el_tokenHybridCard1Icon_preview.type !== 'file') el_tokenHybridCard1Icon_preview.value = data['tokenHybridCard1Icon-preview'] || '';
  const el_tokenHybridCard1Icon = document.getElementById('tokenHybridCard1Icon'); if (el_tokenHybridCard1Icon && el_tokenHybridCard1Icon.type !== 'file') el_tokenHybridCard1Icon.value = data.tokenHybridCard1Icon || '';
  const el_remove_tokenHybridCard1Icon = document.getElementById('remove_tokenHybridCard1Icon'); if (el_remove_tokenHybridCard1Icon && el_remove_tokenHybridCard1Icon.type !== 'file') el_remove_tokenHybridCard1Icon.value = data.remove_tokenHybridCard1Icon || '';
  const el_tokenHybridCard1Title = document.getElementById('tokenHybridCard1Title'); if (el_tokenHybridCard1Title && el_tokenHybridCard1Title.type !== 'file') el_tokenHybridCard1Title.value = data.tokenHybridCard1Title || '';
  const el_tokenHybridCard1Desc = document.getElementById('tokenHybridCard1Desc'); if (el_tokenHybridCard1Desc && el_tokenHybridCard1Desc.type !== 'file') el_tokenHybridCard1Desc.value = data.tokenHybridCard1Desc || '';
  const el_tokenHybridCard2Icon_preview = document.getElementById('tokenHybridCard2Icon-preview'); if (el_tokenHybridCard2Icon_preview && el_tokenHybridCard2Icon_preview.type !== 'file') el_tokenHybridCard2Icon_preview.value = data['tokenHybridCard2Icon-preview'] || '';
  const el_tokenHybridCard2Icon = document.getElementById('tokenHybridCard2Icon'); if (el_tokenHybridCard2Icon && el_tokenHybridCard2Icon.type !== 'file') el_tokenHybridCard2Icon.value = data.tokenHybridCard2Icon || '';
  const el_remove_tokenHybridCard2Icon = document.getElementById('remove_tokenHybridCard2Icon'); if (el_remove_tokenHybridCard2Icon && el_remove_tokenHybridCard2Icon.type !== 'file') el_remove_tokenHybridCard2Icon.value = data.remove_tokenHybridCard2Icon || '';
  const el_tokenHybridCard2Title = document.getElementById('tokenHybridCard2Title'); if (el_tokenHybridCard2Title && el_tokenHybridCard2Title.type !== 'file') el_tokenHybridCard2Title.value = data.tokenHybridCard2Title || '';
  const el_tokenHybridCard2Desc = document.getElementById('tokenHybridCard2Desc'); if (el_tokenHybridCard2Desc && el_tokenHybridCard2Desc.type !== 'file') el_tokenHybridCard2Desc.value = data.tokenHybridCard2Desc || '';
  const el_tokenHybridBottomDesc = document.getElementById('tokenHybridBottomDesc'); if (el_tokenHybridBottomDesc && el_tokenHybridBottomDesc.type !== 'file') el_tokenHybridBottomDesc.value = data.tokenHybridBottomDesc || '';
  const el_tokenSystemTitle = document.getElementById('tokenSystemTitle'); if (el_tokenSystemTitle && el_tokenSystemTitle.type !== 'file') el_tokenSystemTitle.value = data.tokenSystemTitle || '';
  const el_tokenSystemDesc = document.getElementById('tokenSystemDesc'); if (el_tokenSystemDesc && el_tokenSystemDesc.type !== 'file') el_tokenSystemDesc.value = data.tokenSystemDesc || '';
  const el_tokenSystemSlide1Badge = document.getElementById('tokenSystemSlide1Badge'); if (el_tokenSystemSlide1Badge && el_tokenSystemSlide1Badge.type !== 'file') el_tokenSystemSlide1Badge.value = data.tokenSystemSlide1Badge || '';
  const el_tokenSystemSlide1Title = document.getElementById('tokenSystemSlide1Title'); if (el_tokenSystemSlide1Title && el_tokenSystemSlide1Title.type !== 'file') el_tokenSystemSlide1Title.value = data.tokenSystemSlide1Title || '';
  const el_tokenSystemSlide1DescList_container = document.getElementById('tokenSystemSlide1DescList-container'); if (el_tokenSystemSlide1DescList_container && el_tokenSystemSlide1DescList_container.type !== 'file') el_tokenSystemSlide1DescList_container.value = data['tokenSystemSlide1DescList-container'] || '';
  const el_tokenSystemSlide1BtnText = document.getElementById('tokenSystemSlide1BtnText'); if (el_tokenSystemSlide1BtnText && el_tokenSystemSlide1BtnText.type !== 'file') el_tokenSystemSlide1BtnText.value = data.tokenSystemSlide1BtnText || '';
  const el_tokenSystemSlide1BtnLink = document.getElementById('tokenSystemSlide1BtnLink'); if (el_tokenSystemSlide1BtnLink && el_tokenSystemSlide1BtnLink.type !== 'file') el_tokenSystemSlide1BtnLink.value = data.tokenSystemSlide1BtnLink || '';
  const el_tokenSystemSlide1Image_preview = document.getElementById('tokenSystemSlide1Image-preview'); if (el_tokenSystemSlide1Image_preview && el_tokenSystemSlide1Image_preview.type !== 'file') el_tokenSystemSlide1Image_preview.value = data['tokenSystemSlide1Image-preview'] || '';
  const el_tokenSystemSlide1Image = document.getElementById('tokenSystemSlide1Image'); if (el_tokenSystemSlide1Image && el_tokenSystemSlide1Image.type !== 'file') el_tokenSystemSlide1Image.value = data.tokenSystemSlide1Image || '';
  const el_remove_tokenSystemSlide1Image = document.getElementById('remove_tokenSystemSlide1Image'); if (el_remove_tokenSystemSlide1Image && el_remove_tokenSystemSlide1Image.type !== 'file') el_remove_tokenSystemSlide1Image.value = data.remove_tokenSystemSlide1Image || '';
  const el_tokenSystemSlide2Badge = document.getElementById('tokenSystemSlide2Badge'); if (el_tokenSystemSlide2Badge && el_tokenSystemSlide2Badge.type !== 'file') el_tokenSystemSlide2Badge.value = data.tokenSystemSlide2Badge || '';
  const el_tokenSystemSlide2Title = document.getElementById('tokenSystemSlide2Title'); if (el_tokenSystemSlide2Title && el_tokenSystemSlide2Title.type !== 'file') el_tokenSystemSlide2Title.value = data.tokenSystemSlide2Title || '';
  const el_tokenSystemSlide2DescList_container = document.getElementById('tokenSystemSlide2DescList-container'); if (el_tokenSystemSlide2DescList_container && el_tokenSystemSlide2DescList_container.type !== 'file') el_tokenSystemSlide2DescList_container.value = data['tokenSystemSlide2DescList-container'] || '';
  const el_tokenSystemSlide2Image_preview = document.getElementById('tokenSystemSlide2Image-preview'); if (el_tokenSystemSlide2Image_preview && el_tokenSystemSlide2Image_preview.type !== 'file') el_tokenSystemSlide2Image_preview.value = data['tokenSystemSlide2Image-preview'] || '';
  const el_tokenSystemSlide2Image = document.getElementById('tokenSystemSlide2Image'); if (el_tokenSystemSlide2Image && el_tokenSystemSlide2Image.type !== 'file') el_tokenSystemSlide2Image.value = data.tokenSystemSlide2Image || '';
  const el_remove_tokenSystemSlide2Image = document.getElementById('remove_tokenSystemSlide2Image'); if (el_remove_tokenSystemSlide2Image && el_remove_tokenSystemSlide2Image.type !== 'file') el_remove_tokenSystemSlide2Image.value = data.remove_tokenSystemSlide2Image || '';
  const el_tokenSystemSlide3Badge = document.getElementById('tokenSystemSlide3Badge'); if (el_tokenSystemSlide3Badge && el_tokenSystemSlide3Badge.type !== 'file') el_tokenSystemSlide3Badge.value = data.tokenSystemSlide3Badge || '';
  const el_tokenSystemSlide3Title = document.getElementById('tokenSystemSlide3Title'); if (el_tokenSystemSlide3Title && el_tokenSystemSlide3Title.type !== 'file') el_tokenSystemSlide3Title.value = data.tokenSystemSlide3Title || '';
  const el_tokenSystemSlide3DescList_container = document.getElementById('tokenSystemSlide3DescList-container'); if (el_tokenSystemSlide3DescList_container && el_tokenSystemSlide3DescList_container.type !== 'file') el_tokenSystemSlide3DescList_container.value = data['tokenSystemSlide3DescList-container'] || '';
  const el_tokenSystemSlide3Image_preview = document.getElementById('tokenSystemSlide3Image-preview'); if (el_tokenSystemSlide3Image_preview && el_tokenSystemSlide3Image_preview.type !== 'file') el_tokenSystemSlide3Image_preview.value = data['tokenSystemSlide3Image-preview'] || '';
  const el_tokenSystemSlide3Image = document.getElementById('tokenSystemSlide3Image'); if (el_tokenSystemSlide3Image && el_tokenSystemSlide3Image.type !== 'file') el_tokenSystemSlide3Image.value = data.tokenSystemSlide3Image || '';
  const el_remove_tokenSystemSlide3Image = document.getElementById('remove_tokenSystemSlide3Image'); if (el_remove_tokenSystemSlide3Image && el_remove_tokenSystemSlide3Image.type !== 'file') el_remove_tokenSystemSlide3Image.value = data.remove_tokenSystemSlide3Image || '';
  const el_tokenSystemSlide4Badge = document.getElementById('tokenSystemSlide4Badge'); if (el_tokenSystemSlide4Badge && el_tokenSystemSlide4Badge.type !== 'file') el_tokenSystemSlide4Badge.value = data.tokenSystemSlide4Badge || '';
  const el_tokenSystemSlide4Title = document.getElementById('tokenSystemSlide4Title'); if (el_tokenSystemSlide4Title && el_tokenSystemSlide4Title.type !== 'file') el_tokenSystemSlide4Title.value = data.tokenSystemSlide4Title || '';
  const el_tokenSystemSlide4DescList_container = document.getElementById('tokenSystemSlide4DescList-container'); if (el_tokenSystemSlide4DescList_container && el_tokenSystemSlide4DescList_container.type !== 'file') el_tokenSystemSlide4DescList_container.value = data['tokenSystemSlide4DescList-container'] || '';
  const el_tokenSystemSlide4FeatureHeading = document.getElementById('tokenSystemSlide4FeatureHeading'); if (el_tokenSystemSlide4FeatureHeading && el_tokenSystemSlide4FeatureHeading.type !== 'file') el_tokenSystemSlide4FeatureHeading.value = data.tokenSystemSlide4FeatureHeading || '';
  const el_tokenSystemSlide4FeatureList_container = document.getElementById('tokenSystemSlide4FeatureList-container'); if (el_tokenSystemSlide4FeatureList_container && el_tokenSystemSlide4FeatureList_container.type !== 'file') el_tokenSystemSlide4FeatureList_container.value = data['tokenSystemSlide4FeatureList-container'] || '';
  const el_tokenSystemSlide4Image_preview = document.getElementById('tokenSystemSlide4Image-preview'); if (el_tokenSystemSlide4Image_preview && el_tokenSystemSlide4Image_preview.type !== 'file') el_tokenSystemSlide4Image_preview.value = data['tokenSystemSlide4Image-preview'] || '';
  const el_tokenSystemSlide4Image = document.getElementById('tokenSystemSlide4Image'); if (el_tokenSystemSlide4Image && el_tokenSystemSlide4Image.type !== 'file') el_tokenSystemSlide4Image.value = data.tokenSystemSlide4Image || '';
  const el_remove_tokenSystemSlide4Image = document.getElementById('remove_tokenSystemSlide4Image'); if (el_remove_tokenSystemSlide4Image && el_remove_tokenSystemSlide4Image.type !== 'file') el_remove_tokenSystemSlide4Image.value = data.remove_tokenSystemSlide4Image || '';
  const el_tokenSystemSlide5Badge = document.getElementById('tokenSystemSlide5Badge'); if (el_tokenSystemSlide5Badge && el_tokenSystemSlide5Badge.type !== 'file') el_tokenSystemSlide5Badge.value = data.tokenSystemSlide5Badge || '';
  const el_tokenSystemSlide5Title = document.getElementById('tokenSystemSlide5Title'); if (el_tokenSystemSlide5Title && el_tokenSystemSlide5Title.type !== 'file') el_tokenSystemSlide5Title.value = data.tokenSystemSlide5Title || '';
  const el_tokenSystemSlide5DescList_container = document.getElementById('tokenSystemSlide5DescList-container'); if (el_tokenSystemSlide5DescList_container && el_tokenSystemSlide5DescList_container.type !== 'file') el_tokenSystemSlide5DescList_container.value = data['tokenSystemSlide5DescList-container'] || '';
  const el_tokenSystemSlide5Heading = document.getElementById('tokenSystemSlide5Heading'); if (el_tokenSystemSlide5Heading && el_tokenSystemSlide5Heading.type !== 'file') el_tokenSystemSlide5Heading.value = data.tokenSystemSlide5Heading || '';
  const el_tokenSystemSlide5HeadingDescList_container = document.getElementById('tokenSystemSlide5HeadingDescList-container'); if (el_tokenSystemSlide5HeadingDescList_container && el_tokenSystemSlide5HeadingDescList_container.type !== 'file') el_tokenSystemSlide5HeadingDescList_container.value = data['tokenSystemSlide5HeadingDescList-container'] || '';
  const el_tokenSystemSlide5Image_preview = document.getElementById('tokenSystemSlide5Image-preview'); if (el_tokenSystemSlide5Image_preview && el_tokenSystemSlide5Image_preview.type !== 'file') el_tokenSystemSlide5Image_preview.value = data['tokenSystemSlide5Image-preview'] || '';
  const el_tokenSystemSlide5Image = document.getElementById('tokenSystemSlide5Image'); if (el_tokenSystemSlide5Image && el_tokenSystemSlide5Image.type !== 'file') el_tokenSystemSlide5Image.value = data.tokenSystemSlide5Image || '';
  const el_remove_tokenSystemSlide5Image = document.getElementById('remove_tokenSystemSlide5Image'); if (el_remove_tokenSystemSlide5Image && el_remove_tokenSystemSlide5Image.type !== 'file') el_remove_tokenSystemSlide5Image.value = data.remove_tokenSystemSlide5Image || '';
  const el_tokenSystemSlide6Badge = document.getElementById('tokenSystemSlide6Badge'); if (el_tokenSystemSlide6Badge && el_tokenSystemSlide6Badge.type !== 'file') el_tokenSystemSlide6Badge.value = data.tokenSystemSlide6Badge || '';
  const el_tokenSystemSlide6Title = document.getElementById('tokenSystemSlide6Title'); if (el_tokenSystemSlide6Title && el_tokenSystemSlide6Title.type !== 'file') el_tokenSystemSlide6Title.value = data.tokenSystemSlide6Title || '';
  const el_tokenSystemSlide6DescList_container = document.getElementById('tokenSystemSlide6DescList-container'); if (el_tokenSystemSlide6DescList_container && el_tokenSystemSlide6DescList_container.type !== 'file') el_tokenSystemSlide6DescList_container.value = data['tokenSystemSlide6DescList-container'] || '';
  const el_tokenSystemSlide6FeatureHeading = document.getElementById('tokenSystemSlide6FeatureHeading'); if (el_tokenSystemSlide6FeatureHeading && el_tokenSystemSlide6FeatureHeading.type !== 'file') el_tokenSystemSlide6FeatureHeading.value = data.tokenSystemSlide6FeatureHeading || '';
  const el_tokenSystemSlide6FeatureList_container = document.getElementById('tokenSystemSlide6FeatureList-container'); if (el_tokenSystemSlide6FeatureList_container && el_tokenSystemSlide6FeatureList_container.type !== 'file') el_tokenSystemSlide6FeatureList_container.value = data['tokenSystemSlide6FeatureList-container'] || '';
  const el_tokenSystemSlide6Image_preview = document.getElementById('tokenSystemSlide6Image-preview'); if (el_tokenSystemSlide6Image_preview && el_tokenSystemSlide6Image_preview.type !== 'file') el_tokenSystemSlide6Image_preview.value = data['tokenSystemSlide6Image-preview'] || '';
  const el_tokenSystemSlide6Image = document.getElementById('tokenSystemSlide6Image'); if (el_tokenSystemSlide6Image && el_tokenSystemSlide6Image.type !== 'file') el_tokenSystemSlide6Image.value = data.tokenSystemSlide6Image || '';
  const el_remove_tokenSystemSlide6Image = document.getElementById('remove_tokenSystemSlide6Image'); if (el_remove_tokenSystemSlide6Image && el_remove_tokenSystemSlide6Image.type !== 'file') el_remove_tokenSystemSlide6Image.value = data.remove_tokenSystemSlide6Image || '';
  const el_tokenIntegrationSlide1Image_preview = document.getElementById('tokenIntegrationSlide1Image-preview'); if (el_tokenIntegrationSlide1Image_preview && el_tokenIntegrationSlide1Image_preview.type !== 'file') el_tokenIntegrationSlide1Image_preview.value = data['tokenIntegrationSlide1Image-preview'] || '';
  const el_tokenIntegrationSlide1Image = document.getElementById('tokenIntegrationSlide1Image'); if (el_tokenIntegrationSlide1Image && el_tokenIntegrationSlide1Image.type !== 'file') el_tokenIntegrationSlide1Image.value = data.tokenIntegrationSlide1Image || '';
  const el_remove_tokenIntegrationSlide1Image = document.getElementById('remove_tokenIntegrationSlide1Image'); if (el_remove_tokenIntegrationSlide1Image && el_remove_tokenIntegrationSlide1Image.type !== 'file') el_remove_tokenIntegrationSlide1Image.value = data.remove_tokenIntegrationSlide1Image || '';
  const el_tokenIntegrationSlide1Title = document.getElementById('tokenIntegrationSlide1Title'); if (el_tokenIntegrationSlide1Title && el_tokenIntegrationSlide1Title.type !== 'file') el_tokenIntegrationSlide1Title.value = data.tokenIntegrationSlide1Title || '';
  const el_tokenIntegrationSlide1DescList_container = document.getElementById('tokenIntegrationSlide1DescList-container'); if (el_tokenIntegrationSlide1DescList_container && el_tokenIntegrationSlide1DescList_container.type !== 'file') el_tokenIntegrationSlide1DescList_container.value = data['tokenIntegrationSlide1DescList-container'] || '';
  const el_tokenIntegrationSlide1FeatureHeading = document.getElementById('tokenIntegrationSlide1FeatureHeading'); if (el_tokenIntegrationSlide1FeatureHeading && el_tokenIntegrationSlide1FeatureHeading.type !== 'file') el_tokenIntegrationSlide1FeatureHeading.value = data.tokenIntegrationSlide1FeatureHeading || '';
  const el_tokenIntegrationSlide1Feature1Icon_preview = document.getElementById('tokenIntegrationSlide1Feature1Icon-preview'); if (el_tokenIntegrationSlide1Feature1Icon_preview && el_tokenIntegrationSlide1Feature1Icon_preview.type !== 'file') el_tokenIntegrationSlide1Feature1Icon_preview.value = data['tokenIntegrationSlide1Feature1Icon-preview'] || '';
  const el_tokenIntegrationSlide1Feature1Icon = document.getElementById('tokenIntegrationSlide1Feature1Icon'); if (el_tokenIntegrationSlide1Feature1Icon && el_tokenIntegrationSlide1Feature1Icon.type !== 'file') el_tokenIntegrationSlide1Feature1Icon.value = data.tokenIntegrationSlide1Feature1Icon || '';
  const el_remove_tokenIntegrationSlide1Feature1Icon = document.getElementById('remove_tokenIntegrationSlide1Feature1Icon'); if (el_remove_tokenIntegrationSlide1Feature1Icon && el_remove_tokenIntegrationSlide1Feature1Icon.type !== 'file') el_remove_tokenIntegrationSlide1Feature1Icon.value = data.remove_tokenIntegrationSlide1Feature1Icon || '';
  const el_tokenIntegrationSlide1Feature1Text = document.getElementById('tokenIntegrationSlide1Feature1Text'); if (el_tokenIntegrationSlide1Feature1Text && el_tokenIntegrationSlide1Feature1Text.type !== 'file') el_tokenIntegrationSlide1Feature1Text.value = data.tokenIntegrationSlide1Feature1Text || '';
  const el_tokenIntegrationSlide1Feature2Icon_preview = document.getElementById('tokenIntegrationSlide1Feature2Icon-preview'); if (el_tokenIntegrationSlide1Feature2Icon_preview && el_tokenIntegrationSlide1Feature2Icon_preview.type !== 'file') el_tokenIntegrationSlide1Feature2Icon_preview.value = data['tokenIntegrationSlide1Feature2Icon-preview'] || '';
  const el_tokenIntegrationSlide1Feature2Icon = document.getElementById('tokenIntegrationSlide1Feature2Icon'); if (el_tokenIntegrationSlide1Feature2Icon && el_tokenIntegrationSlide1Feature2Icon.type !== 'file') el_tokenIntegrationSlide1Feature2Icon.value = data.tokenIntegrationSlide1Feature2Icon || '';
  const el_remove_tokenIntegrationSlide1Feature2Icon = document.getElementById('remove_tokenIntegrationSlide1Feature2Icon'); if (el_remove_tokenIntegrationSlide1Feature2Icon && el_remove_tokenIntegrationSlide1Feature2Icon.type !== 'file') el_remove_tokenIntegrationSlide1Feature2Icon.value = data.remove_tokenIntegrationSlide1Feature2Icon || '';
  const el_tokenIntegrationSlide1Feature2Text = document.getElementById('tokenIntegrationSlide1Feature2Text'); if (el_tokenIntegrationSlide1Feature2Text && el_tokenIntegrationSlide1Feature2Text.type !== 'file') el_tokenIntegrationSlide1Feature2Text.value = data.tokenIntegrationSlide1Feature2Text || '';
  const el_tokenIntegrationSlide1Feature3Icon_preview = document.getElementById('tokenIntegrationSlide1Feature3Icon-preview'); if (el_tokenIntegrationSlide1Feature3Icon_preview && el_tokenIntegrationSlide1Feature3Icon_preview.type !== 'file') el_tokenIntegrationSlide1Feature3Icon_preview.value = data['tokenIntegrationSlide1Feature3Icon-preview'] || '';
  const el_tokenIntegrationSlide1Feature3Icon = document.getElementById('tokenIntegrationSlide1Feature3Icon'); if (el_tokenIntegrationSlide1Feature3Icon && el_tokenIntegrationSlide1Feature3Icon.type !== 'file') el_tokenIntegrationSlide1Feature3Icon.value = data.tokenIntegrationSlide1Feature3Icon || '';
  const el_remove_tokenIntegrationSlide1Feature3Icon = document.getElementById('remove_tokenIntegrationSlide1Feature3Icon'); if (el_remove_tokenIntegrationSlide1Feature3Icon && el_remove_tokenIntegrationSlide1Feature3Icon.type !== 'file') el_remove_tokenIntegrationSlide1Feature3Icon.value = data.remove_tokenIntegrationSlide1Feature3Icon || '';
  const el_tokenIntegrationSlide1Feature3Text = document.getElementById('tokenIntegrationSlide1Feature3Text'); if (el_tokenIntegrationSlide1Feature3Text && el_tokenIntegrationSlide1Feature3Text.type !== 'file') el_tokenIntegrationSlide1Feature3Text.value = data.tokenIntegrationSlide1Feature3Text || '';
  const el_tokenIntegrationSlide2Title = document.getElementById('tokenIntegrationSlide2Title'); if (el_tokenIntegrationSlide2Title && el_tokenIntegrationSlide2Title.type !== 'file') el_tokenIntegrationSlide2Title.value = data.tokenIntegrationSlide2Title || '';
  const el_tokenIntegrationSlide2DescList_container = document.getElementById('tokenIntegrationSlide2DescList-container'); if (el_tokenIntegrationSlide2DescList_container && el_tokenIntegrationSlide2DescList_container.type !== 'file') el_tokenIntegrationSlide2DescList_container.value = data['tokenIntegrationSlide2DescList-container'] || '';
  const el_tokenIntegrationSlide2Feature1Icon_preview = document.getElementById('tokenIntegrationSlide2Feature1Icon-preview'); if (el_tokenIntegrationSlide2Feature1Icon_preview && el_tokenIntegrationSlide2Feature1Icon_preview.type !== 'file') el_tokenIntegrationSlide2Feature1Icon_preview.value = data['tokenIntegrationSlide2Feature1Icon-preview'] || '';
  const el_tokenIntegrationSlide2Feature1Icon = document.getElementById('tokenIntegrationSlide2Feature1Icon'); if (el_tokenIntegrationSlide2Feature1Icon && el_tokenIntegrationSlide2Feature1Icon.type !== 'file') el_tokenIntegrationSlide2Feature1Icon.value = data.tokenIntegrationSlide2Feature1Icon || '';
  const el_remove_tokenIntegrationSlide2Feature1Icon = document.getElementById('remove_tokenIntegrationSlide2Feature1Icon'); if (el_remove_tokenIntegrationSlide2Feature1Icon && el_remove_tokenIntegrationSlide2Feature1Icon.type !== 'file') el_remove_tokenIntegrationSlide2Feature1Icon.value = data.remove_tokenIntegrationSlide2Feature1Icon || '';
  const el_tokenIntegrationSlide2Feature1Text = document.getElementById('tokenIntegrationSlide2Feature1Text'); if (el_tokenIntegrationSlide2Feature1Text && el_tokenIntegrationSlide2Feature1Text.type !== 'file') el_tokenIntegrationSlide2Feature1Text.value = data.tokenIntegrationSlide2Feature1Text || '';
  const el_tokenIntegrationSlide2Feature2Icon_preview = document.getElementById('tokenIntegrationSlide2Feature2Icon-preview'); if (el_tokenIntegrationSlide2Feature2Icon_preview && el_tokenIntegrationSlide2Feature2Icon_preview.type !== 'file') el_tokenIntegrationSlide2Feature2Icon_preview.value = data['tokenIntegrationSlide2Feature2Icon-preview'] || '';
  const el_tokenIntegrationSlide2Feature2Icon = document.getElementById('tokenIntegrationSlide2Feature2Icon'); if (el_tokenIntegrationSlide2Feature2Icon && el_tokenIntegrationSlide2Feature2Icon.type !== 'file') el_tokenIntegrationSlide2Feature2Icon.value = data.tokenIntegrationSlide2Feature2Icon || '';
  const el_remove_tokenIntegrationSlide2Feature2Icon = document.getElementById('remove_tokenIntegrationSlide2Feature2Icon'); if (el_remove_tokenIntegrationSlide2Feature2Icon && el_remove_tokenIntegrationSlide2Feature2Icon.type !== 'file') el_remove_tokenIntegrationSlide2Feature2Icon.value = data.remove_tokenIntegrationSlide2Feature2Icon || '';
  const el_tokenIntegrationSlide2Feature2Text = document.getElementById('tokenIntegrationSlide2Feature2Text'); if (el_tokenIntegrationSlide2Feature2Text && el_tokenIntegrationSlide2Feature2Text.type !== 'file') el_tokenIntegrationSlide2Feature2Text.value = data.tokenIntegrationSlide2Feature2Text || '';
  const el_tokenIntegrationSlide2Feature3Icon_preview = document.getElementById('tokenIntegrationSlide2Feature3Icon-preview'); if (el_tokenIntegrationSlide2Feature3Icon_preview && el_tokenIntegrationSlide2Feature3Icon_preview.type !== 'file') el_tokenIntegrationSlide2Feature3Icon_preview.value = data['tokenIntegrationSlide2Feature3Icon-preview'] || '';
  const el_tokenIntegrationSlide2Feature3Icon = document.getElementById('tokenIntegrationSlide2Feature3Icon'); if (el_tokenIntegrationSlide2Feature3Icon && el_tokenIntegrationSlide2Feature3Icon.type !== 'file') el_tokenIntegrationSlide2Feature3Icon.value = data.tokenIntegrationSlide2Feature3Icon || '';
  const el_remove_tokenIntegrationSlide2Feature3Icon = document.getElementById('remove_tokenIntegrationSlide2Feature3Icon'); if (el_remove_tokenIntegrationSlide2Feature3Icon && el_remove_tokenIntegrationSlide2Feature3Icon.type !== 'file') el_remove_tokenIntegrationSlide2Feature3Icon.value = data.remove_tokenIntegrationSlide2Feature3Icon || '';
  const el_tokenIntegrationSlide2Feature3Text = document.getElementById('tokenIntegrationSlide2Feature3Text'); if (el_tokenIntegrationSlide2Feature3Text && el_tokenIntegrationSlide2Feature3Text.type !== 'file') el_tokenIntegrationSlide2Feature3Text.value = data.tokenIntegrationSlide2Feature3Text || '';
  const el_tokenIntegrationSlide2Image_preview = document.getElementById('tokenIntegrationSlide2Image-preview'); if (el_tokenIntegrationSlide2Image_preview && el_tokenIntegrationSlide2Image_preview.type !== 'file') el_tokenIntegrationSlide2Image_preview.value = data['tokenIntegrationSlide2Image-preview'] || '';
  const el_tokenIntegrationSlide2Image = document.getElementById('tokenIntegrationSlide2Image'); if (el_tokenIntegrationSlide2Image && el_tokenIntegrationSlide2Image.type !== 'file') el_tokenIntegrationSlide2Image.value = data.tokenIntegrationSlide2Image || '';
  const el_remove_tokenIntegrationSlide2Image = document.getElementById('remove_tokenIntegrationSlide2Image'); if (el_remove_tokenIntegrationSlide2Image && el_remove_tokenIntegrationSlide2Image.type !== 'file') el_remove_tokenIntegrationSlide2Image.value = data.remove_tokenIntegrationSlide2Image || '';
  const el_tokenIntegrationSlide3Image_preview = document.getElementById('tokenIntegrationSlide3Image-preview'); if (el_tokenIntegrationSlide3Image_preview && el_tokenIntegrationSlide3Image_preview.type !== 'file') el_tokenIntegrationSlide3Image_preview.value = data['tokenIntegrationSlide3Image-preview'] || '';
  const el_tokenIntegrationSlide3Image = document.getElementById('tokenIntegrationSlide3Image'); if (el_tokenIntegrationSlide3Image && el_tokenIntegrationSlide3Image.type !== 'file') el_tokenIntegrationSlide3Image.value = data.tokenIntegrationSlide3Image || '';
  const el_remove_tokenIntegrationSlide3Image = document.getElementById('remove_tokenIntegrationSlide3Image'); if (el_remove_tokenIntegrationSlide3Image && el_remove_tokenIntegrationSlide3Image.type !== 'file') el_remove_tokenIntegrationSlide3Image.value = data.remove_tokenIntegrationSlide3Image || '';
  const el_tokenIntegrationSlide3Title = document.getElementById('tokenIntegrationSlide3Title'); if (el_tokenIntegrationSlide3Title && el_tokenIntegrationSlide3Title.type !== 'file') el_tokenIntegrationSlide3Title.value = data.tokenIntegrationSlide3Title || '';
  const el_tokenIntegrationSlide3DescList_container = document.getElementById('tokenIntegrationSlide3DescList-container'); if (el_tokenIntegrationSlide3DescList_container && el_tokenIntegrationSlide3DescList_container.type !== 'file') el_tokenIntegrationSlide3DescList_container.value = data['tokenIntegrationSlide3DescList-container'] || '';
  const el_tokenIntegrationSlide3Feature1Icon_preview = document.getElementById('tokenIntegrationSlide3Feature1Icon-preview'); if (el_tokenIntegrationSlide3Feature1Icon_preview && el_tokenIntegrationSlide3Feature1Icon_preview.type !== 'file') el_tokenIntegrationSlide3Feature1Icon_preview.value = data['tokenIntegrationSlide3Feature1Icon-preview'] || '';
  const el_tokenIntegrationSlide3Feature1Icon = document.getElementById('tokenIntegrationSlide3Feature1Icon'); if (el_tokenIntegrationSlide3Feature1Icon && el_tokenIntegrationSlide3Feature1Icon.type !== 'file') el_tokenIntegrationSlide3Feature1Icon.value = data.tokenIntegrationSlide3Feature1Icon || '';
  const el_remove_tokenIntegrationSlide3Feature1Icon = document.getElementById('remove_tokenIntegrationSlide3Feature1Icon'); if (el_remove_tokenIntegrationSlide3Feature1Icon && el_remove_tokenIntegrationSlide3Feature1Icon.type !== 'file') el_remove_tokenIntegrationSlide3Feature1Icon.value = data.remove_tokenIntegrationSlide3Feature1Icon || '';
  const el_tokenIntegrationSlide3Feature1Text = document.getElementById('tokenIntegrationSlide3Feature1Text'); if (el_tokenIntegrationSlide3Feature1Text && el_tokenIntegrationSlide3Feature1Text.type !== 'file') el_tokenIntegrationSlide3Feature1Text.value = data.tokenIntegrationSlide3Feature1Text || '';
  const el_tokenIntegrationSlide3Feature2Icon_preview = document.getElementById('tokenIntegrationSlide3Feature2Icon-preview'); if (el_tokenIntegrationSlide3Feature2Icon_preview && el_tokenIntegrationSlide3Feature2Icon_preview.type !== 'file') el_tokenIntegrationSlide3Feature2Icon_preview.value = data['tokenIntegrationSlide3Feature2Icon-preview'] || '';
  const el_tokenIntegrationSlide3Feature2Icon = document.getElementById('tokenIntegrationSlide3Feature2Icon'); if (el_tokenIntegrationSlide3Feature2Icon && el_tokenIntegrationSlide3Feature2Icon.type !== 'file') el_tokenIntegrationSlide3Feature2Icon.value = data.tokenIntegrationSlide3Feature2Icon || '';
  const el_remove_tokenIntegrationSlide3Feature2Icon = document.getElementById('remove_tokenIntegrationSlide3Feature2Icon'); if (el_remove_tokenIntegrationSlide3Feature2Icon && el_remove_tokenIntegrationSlide3Feature2Icon.type !== 'file') el_remove_tokenIntegrationSlide3Feature2Icon.value = data.remove_tokenIntegrationSlide3Feature2Icon || '';
  const el_tokenIntegrationSlide3Feature2Text = document.getElementById('tokenIntegrationSlide3Feature2Text'); if (el_tokenIntegrationSlide3Feature2Text && el_tokenIntegrationSlide3Feature2Text.type !== 'file') el_tokenIntegrationSlide3Feature2Text.value = data.tokenIntegrationSlide3Feature2Text || '';
  const el_tokenIntegrationSlide3Feature3Icon_preview = document.getElementById('tokenIntegrationSlide3Feature3Icon-preview'); if (el_tokenIntegrationSlide3Feature3Icon_preview && el_tokenIntegrationSlide3Feature3Icon_preview.type !== 'file') el_tokenIntegrationSlide3Feature3Icon_preview.value = data['tokenIntegrationSlide3Feature3Icon-preview'] || '';
  const el_tokenIntegrationSlide3Feature3Icon = document.getElementById('tokenIntegrationSlide3Feature3Icon'); if (el_tokenIntegrationSlide3Feature3Icon && el_tokenIntegrationSlide3Feature3Icon.type !== 'file') el_tokenIntegrationSlide3Feature3Icon.value = data.tokenIntegrationSlide3Feature3Icon || '';
  const el_remove_tokenIntegrationSlide3Feature3Icon = document.getElementById('remove_tokenIntegrationSlide3Feature3Icon'); if (el_remove_tokenIntegrationSlide3Feature3Icon && el_remove_tokenIntegrationSlide3Feature3Icon.type !== 'file') el_remove_tokenIntegrationSlide3Feature3Icon.value = data.remove_tokenIntegrationSlide3Feature3Icon || '';
  const el_tokenIntegrationSlide3Feature3Text = document.getElementById('tokenIntegrationSlide3Feature3Text'); if (el_tokenIntegrationSlide3Feature3Text && el_tokenIntegrationSlide3Feature3Text.type !== 'file') el_tokenIntegrationSlide3Feature3Text.value = data.tokenIntegrationSlide3Feature3Text || '';
  const el_tokenSmartCoinsTitle = document.getElementById('tokenSmartCoinsTitle'); if (el_tokenSmartCoinsTitle && el_tokenSmartCoinsTitle.type !== 'file') el_tokenSmartCoinsTitle.value = data.tokenSmartCoinsTitle || '';
  const el_tokenSmartCoinsTab1BtnText = document.getElementById('tokenSmartCoinsTab1BtnText'); if (el_tokenSmartCoinsTab1BtnText && el_tokenSmartCoinsTab1BtnText.type !== 'file') el_tokenSmartCoinsTab1BtnText.value = data.tokenSmartCoinsTab1BtnText || '';
  const el_tokenSmartCoinsTab1Title = document.getElementById('tokenSmartCoinsTab1Title'); if (el_tokenSmartCoinsTab1Title && el_tokenSmartCoinsTab1Title.type !== 'file') el_tokenSmartCoinsTab1Title.value = data.tokenSmartCoinsTab1Title || '';
  const el_tokenSmartCoinsTab1DescList_container = document.getElementById('tokenSmartCoinsTab1DescList-container'); if (el_tokenSmartCoinsTab1DescList_container && el_tokenSmartCoinsTab1DescList_container.type !== 'file') el_tokenSmartCoinsTab1DescList_container.value = data['tokenSmartCoinsTab1DescList-container'] || '';
  const el_tokenSmartCoinsTab1Image_preview = document.getElementById('tokenSmartCoinsTab1Image-preview'); if (el_tokenSmartCoinsTab1Image_preview && el_tokenSmartCoinsTab1Image_preview.type !== 'file') el_tokenSmartCoinsTab1Image_preview.value = data['tokenSmartCoinsTab1Image-preview'] || '';
  const el_tokenSmartCoinsTab1Image = document.getElementById('tokenSmartCoinsTab1Image'); if (el_tokenSmartCoinsTab1Image && el_tokenSmartCoinsTab1Image.type !== 'file') el_tokenSmartCoinsTab1Image.value = data.tokenSmartCoinsTab1Image || '';
  const el_remove_tokenSmartCoinsTab1Image = document.getElementById('remove_tokenSmartCoinsTab1Image'); if (el_remove_tokenSmartCoinsTab1Image && el_remove_tokenSmartCoinsTab1Image.type !== 'file') el_remove_tokenSmartCoinsTab1Image.value = data.remove_tokenSmartCoinsTab1Image || '';
  const el_tokenSmartCoinsTab1BgImage_preview = document.getElementById('tokenSmartCoinsTab1BgImage-preview'); if (el_tokenSmartCoinsTab1BgImage_preview && el_tokenSmartCoinsTab1BgImage_preview.type !== 'file') el_tokenSmartCoinsTab1BgImage_preview.value = data['tokenSmartCoinsTab1BgImage-preview'] || '';
  const el_tokenSmartCoinsTab1BgImage = document.getElementById('tokenSmartCoinsTab1BgImage'); if (el_tokenSmartCoinsTab1BgImage && el_tokenSmartCoinsTab1BgImage.type !== 'file') el_tokenSmartCoinsTab1BgImage.value = data.tokenSmartCoinsTab1BgImage || '';
  const el_remove_tokenSmartCoinsTab1BgImage = document.getElementById('remove_tokenSmartCoinsTab1BgImage'); if (el_remove_tokenSmartCoinsTab1BgImage && el_remove_tokenSmartCoinsTab1BgImage.type !== 'file') el_remove_tokenSmartCoinsTab1BgImage.value = data.remove_tokenSmartCoinsTab1BgImage || '';
  const el_tokenSmartCoinsTab1FeatureHeading = document.getElementById('tokenSmartCoinsTab1FeatureHeading'); if (el_tokenSmartCoinsTab1FeatureHeading && el_tokenSmartCoinsTab1FeatureHeading.type !== 'file') el_tokenSmartCoinsTab1FeatureHeading.value = data.tokenSmartCoinsTab1FeatureHeading || '';
  const el_tokenSmartCoinsTab1F1Title = document.getElementById('tokenSmartCoinsTab1F1Title'); if (el_tokenSmartCoinsTab1F1Title && el_tokenSmartCoinsTab1F1Title.type !== 'file') el_tokenSmartCoinsTab1F1Title.value = data.tokenSmartCoinsTab1F1Title || '';
  const el_tokenSmartCoinsTab1F1Desc = document.getElementById('tokenSmartCoinsTab1F1Desc'); if (el_tokenSmartCoinsTab1F1Desc && el_tokenSmartCoinsTab1F1Desc.type !== 'file') el_tokenSmartCoinsTab1F1Desc.value = data.tokenSmartCoinsTab1F1Desc || '';
  const el_tokenSmartCoinsTab1F2Title = document.getElementById('tokenSmartCoinsTab1F2Title'); if (el_tokenSmartCoinsTab1F2Title && el_tokenSmartCoinsTab1F2Title.type !== 'file') el_tokenSmartCoinsTab1F2Title.value = data.tokenSmartCoinsTab1F2Title || '';
  const el_tokenSmartCoinsTab1F2Desc = document.getElementById('tokenSmartCoinsTab1F2Desc'); if (el_tokenSmartCoinsTab1F2Desc && el_tokenSmartCoinsTab1F2Desc.type !== 'file') el_tokenSmartCoinsTab1F2Desc.value = data.tokenSmartCoinsTab1F2Desc || '';
  const el_tokenSmartCoinsTab1F3Title = document.getElementById('tokenSmartCoinsTab1F3Title'); if (el_tokenSmartCoinsTab1F3Title && el_tokenSmartCoinsTab1F3Title.type !== 'file') el_tokenSmartCoinsTab1F3Title.value = data.tokenSmartCoinsTab1F3Title || '';
  const el_tokenSmartCoinsTab1F3Desc = document.getElementById('tokenSmartCoinsTab1F3Desc'); if (el_tokenSmartCoinsTab1F3Desc && el_tokenSmartCoinsTab1F3Desc.type !== 'file') el_tokenSmartCoinsTab1F3Desc.value = data.tokenSmartCoinsTab1F3Desc || '';
  const el_tokenSmartCoinsTab1F4Title = document.getElementById('tokenSmartCoinsTab1F4Title'); if (el_tokenSmartCoinsTab1F4Title && el_tokenSmartCoinsTab1F4Title.type !== 'file') el_tokenSmartCoinsTab1F4Title.value = data.tokenSmartCoinsTab1F4Title || '';
  const el_tokenSmartCoinsTab1F4Desc = document.getElementById('tokenSmartCoinsTab1F4Desc'); if (el_tokenSmartCoinsTab1F4Desc && el_tokenSmartCoinsTab1F4Desc.type !== 'file') el_tokenSmartCoinsTab1F4Desc.value = data.tokenSmartCoinsTab1F4Desc || '';
  const el_tokenSmartCoinsTab1F5Title = document.getElementById('tokenSmartCoinsTab1F5Title'); if (el_tokenSmartCoinsTab1F5Title && el_tokenSmartCoinsTab1F5Title.type !== 'file') el_tokenSmartCoinsTab1F5Title.value = data.tokenSmartCoinsTab1F5Title || '';
  const el_tokenSmartCoinsTab1F5Desc = document.getElementById('tokenSmartCoinsTab1F5Desc'); if (el_tokenSmartCoinsTab1F5Desc && el_tokenSmartCoinsTab1F5Desc.type !== 'file') el_tokenSmartCoinsTab1F5Desc.value = data.tokenSmartCoinsTab1F5Desc || '';
  const el_tokenSmartCoinsTab1ValueHeading = document.getElementById('tokenSmartCoinsTab1ValueHeading'); if (el_tokenSmartCoinsTab1ValueHeading && el_tokenSmartCoinsTab1ValueHeading.type !== 'file') el_tokenSmartCoinsTab1ValueHeading.value = data.tokenSmartCoinsTab1ValueHeading || '';
  const el_tokenSmartCoinsTab1ValueDesc = document.getElementById('tokenSmartCoinsTab1ValueDesc'); if (el_tokenSmartCoinsTab1ValueDesc && el_tokenSmartCoinsTab1ValueDesc.type !== 'file') el_tokenSmartCoinsTab1ValueDesc.value = data.tokenSmartCoinsTab1ValueDesc || '';
  const el_tokenSmartCoinsTab2BtnText = document.getElementById('tokenSmartCoinsTab2BtnText'); if (el_tokenSmartCoinsTab2BtnText && el_tokenSmartCoinsTab2BtnText.type !== 'file') el_tokenSmartCoinsTab2BtnText.value = data.tokenSmartCoinsTab2BtnText || '';
  const el_tokenSmartCoinsTab2Title = document.getElementById('tokenSmartCoinsTab2Title'); if (el_tokenSmartCoinsTab2Title && el_tokenSmartCoinsTab2Title.type !== 'file') el_tokenSmartCoinsTab2Title.value = data.tokenSmartCoinsTab2Title || '';
  const el_tokenSmartCoinsTab2DescList_container = document.getElementById('tokenSmartCoinsTab2DescList-container'); if (el_tokenSmartCoinsTab2DescList_container && el_tokenSmartCoinsTab2DescList_container.type !== 'file') el_tokenSmartCoinsTab2DescList_container.value = data['tokenSmartCoinsTab2DescList-container'] || '';
  const el_tokenSmartCoinsTab2Image_preview = document.getElementById('tokenSmartCoinsTab2Image-preview'); if (el_tokenSmartCoinsTab2Image_preview && el_tokenSmartCoinsTab2Image_preview.type !== 'file') el_tokenSmartCoinsTab2Image_preview.value = data['tokenSmartCoinsTab2Image-preview'] || '';
  const el_tokenSmartCoinsTab2Image = document.getElementById('tokenSmartCoinsTab2Image'); if (el_tokenSmartCoinsTab2Image && el_tokenSmartCoinsTab2Image.type !== 'file') el_tokenSmartCoinsTab2Image.value = data.tokenSmartCoinsTab2Image || '';
  const el_remove_tokenSmartCoinsTab2Image = document.getElementById('remove_tokenSmartCoinsTab2Image'); if (el_remove_tokenSmartCoinsTab2Image && el_remove_tokenSmartCoinsTab2Image.type !== 'file') el_remove_tokenSmartCoinsTab2Image.value = data.remove_tokenSmartCoinsTab2Image || '';
  const el_tokenSmartCoinsTab2BgImage_preview = document.getElementById('tokenSmartCoinsTab2BgImage-preview'); if (el_tokenSmartCoinsTab2BgImage_preview && el_tokenSmartCoinsTab2BgImage_preview.type !== 'file') el_tokenSmartCoinsTab2BgImage_preview.value = data['tokenSmartCoinsTab2BgImage-preview'] || '';
  const el_tokenSmartCoinsTab2BgImage = document.getElementById('tokenSmartCoinsTab2BgImage'); if (el_tokenSmartCoinsTab2BgImage && el_tokenSmartCoinsTab2BgImage.type !== 'file') el_tokenSmartCoinsTab2BgImage.value = data.tokenSmartCoinsTab2BgImage || '';
  const el_remove_tokenSmartCoinsTab2BgImage = document.getElementById('remove_tokenSmartCoinsTab2BgImage'); if (el_remove_tokenSmartCoinsTab2BgImage && el_remove_tokenSmartCoinsTab2BgImage.type !== 'file') el_remove_tokenSmartCoinsTab2BgImage.value = data.remove_tokenSmartCoinsTab2BgImage || '';
  const el_tokenSmartCoinsTab2F1Heading = document.getElementById('tokenSmartCoinsTab2F1Heading'); if (el_tokenSmartCoinsTab2F1Heading && el_tokenSmartCoinsTab2F1Heading.type !== 'file') el_tokenSmartCoinsTab2F1Heading.value = data.tokenSmartCoinsTab2F1Heading || '';
  const el_tokenSmartCoinsTab2F1List_container = document.getElementById('tokenSmartCoinsTab2F1List-container'); if (el_tokenSmartCoinsTab2F1List_container && el_tokenSmartCoinsTab2F1List_container.type !== 'file') el_tokenSmartCoinsTab2F1List_container.value = data['tokenSmartCoinsTab2F1List-container'] || '';
  const el_tokenSmartCoinsTab2F2Heading = document.getElementById('tokenSmartCoinsTab2F2Heading'); if (el_tokenSmartCoinsTab2F2Heading && el_tokenSmartCoinsTab2F2Heading.type !== 'file') el_tokenSmartCoinsTab2F2Heading.value = data.tokenSmartCoinsTab2F2Heading || '';
  const el_tokenSmartCoinsTab2F2List_container = document.getElementById('tokenSmartCoinsTab2F2List-container'); if (el_tokenSmartCoinsTab2F2List_container && el_tokenSmartCoinsTab2F2List_container.type !== 'file') el_tokenSmartCoinsTab2F2List_container.value = data['tokenSmartCoinsTab2F2List-container'] || '';
  const el_tokenSmartCoinsTab2ValueHeading = document.getElementById('tokenSmartCoinsTab2ValueHeading'); if (el_tokenSmartCoinsTab2ValueHeading && el_tokenSmartCoinsTab2ValueHeading.type !== 'file') el_tokenSmartCoinsTab2ValueHeading.value = data.tokenSmartCoinsTab2ValueHeading || '';
  const el_tokenSmartCoinsTab2ValueDesc = document.getElementById('tokenSmartCoinsTab2ValueDesc'); if (el_tokenSmartCoinsTab2ValueDesc && el_tokenSmartCoinsTab2ValueDesc.type !== 'file') el_tokenSmartCoinsTab2ValueDesc.value = data.tokenSmartCoinsTab2ValueDesc || '';
  const el_tokenFutureTitle = document.getElementById('tokenFutureTitle'); if (el_tokenFutureTitle && el_tokenFutureTitle.type !== 'file') el_tokenFutureTitle.value = data.tokenFutureTitle || '';
  const el_tokenFutureDescList_container = document.getElementById('tokenFutureDescList-container'); if (el_tokenFutureDescList_container && el_tokenFutureDescList_container.type !== 'file') el_tokenFutureDescList_container.value = data['tokenFutureDescList-container'] || '';
  const el_tokenFuturePrimaryBtnText = document.getElementById('tokenFuturePrimaryBtnText'); if (el_tokenFuturePrimaryBtnText && el_tokenFuturePrimaryBtnText.type !== 'file') el_tokenFuturePrimaryBtnText.value = data.tokenFuturePrimaryBtnText || '';
  const el_tokenFuturePrimaryBtnLink = document.getElementById('tokenFuturePrimaryBtnLink'); if (el_tokenFuturePrimaryBtnLink && el_tokenFuturePrimaryBtnLink.type !== 'file') el_tokenFuturePrimaryBtnLink.value = data.tokenFuturePrimaryBtnLink || '';
  const el_tokenFutureSecondaryBtnText = document.getElementById('tokenFutureSecondaryBtnText'); if (el_tokenFutureSecondaryBtnText && el_tokenFutureSecondaryBtnText.type !== 'file') el_tokenFutureSecondaryBtnText.value = data.tokenFutureSecondaryBtnText || '';
  const el_tokenFutureSecondaryBtnLink = document.getElementById('tokenFutureSecondaryBtnLink'); if (el_tokenFutureSecondaryBtnLink && el_tokenFutureSecondaryBtnLink.type !== 'file') el_tokenFutureSecondaryBtnLink.value = data.tokenFutureSecondaryBtnLink || '';
  const el_tokenFutureTopRightImage_preview = document.getElementById('tokenFutureTopRightImage-preview'); if (el_tokenFutureTopRightImage_preview && el_tokenFutureTopRightImage_preview.type !== 'file') el_tokenFutureTopRightImage_preview.value = data['tokenFutureTopRightImage-preview'] || '';
  const el_tokenFutureTopRightImage = document.getElementById('tokenFutureTopRightImage'); if (el_tokenFutureTopRightImage && el_tokenFutureTopRightImage.type !== 'file') el_tokenFutureTopRightImage.value = data.tokenFutureTopRightImage || '';
  const el_remove_tokenFutureTopRightImage = document.getElementById('remove_tokenFutureTopRightImage'); if (el_remove_tokenFutureTopRightImage && el_remove_tokenFutureTopRightImage.type !== 'file') el_remove_tokenFutureTopRightImage.value = data.remove_tokenFutureTopRightImage || '';
  const el_tokenFutureBottomLeftImage_preview = document.getElementById('tokenFutureBottomLeftImage-preview'); if (el_tokenFutureBottomLeftImage_preview && el_tokenFutureBottomLeftImage_preview.type !== 'file') el_tokenFutureBottomLeftImage_preview.value = data['tokenFutureBottomLeftImage-preview'] || '';
  const el_tokenFutureBottomLeftImage = document.getElementById('tokenFutureBottomLeftImage'); if (el_tokenFutureBottomLeftImage && el_tokenFutureBottomLeftImage.type !== 'file') el_tokenFutureBottomLeftImage.value = data.tokenFutureBottomLeftImage || '';
  const el_remove_tokenFutureBottomLeftImage = document.getElementById('remove_tokenFutureBottomLeftImage'); if (el_remove_tokenFutureBottomLeftImage && el_remove_tokenFutureBottomLeftImage.type !== 'file') el_remove_tokenFutureBottomLeftImage.value = data.remove_tokenFutureBottomLeftImage || '';
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
};

window.appendPageFormData = function(formData) {
  // Collect values from the DOM
  formData.append('tokenHeroTopHeader', document.getElementById('tokenHeroTopHeader').value);
formData.append('tokenHeroTitle', document.getElementById('tokenHeroTitle').value);
    formData.append('tokenHeroPrimaryBtnText', document.getElementById('tokenHeroPrimaryBtnText').value);
    formData.append('tokenHeroPrimaryBtnLink', document.getElementById('tokenHeroPrimaryBtnLink').value);
    formData.append('tokenHeroSecondaryBtnText', document.getElementById('tokenHeroSecondaryBtnText').value);
    formData.append('tokenHeroSecondaryBtnLink', document.getElementById('tokenHeroSecondaryBtnLink').value);

    formData.append('tokenDualEcosystemTitle', document.getElementById('tokenDualEcosystemTitle').value);
    formData.append('tokenDualEcosystemDesc', document.getElementById('tokenDualEcosystemDesc').value);
    appendFileToFormData('tokenDualEcosystemCard1Image', 'remove_tokenDualEcosystemCard1Image');
    formData.append('tokenDualEcosystemCard1Desc', document.getElementById('tokenDualEcosystemCard1Desc').value);
    appendFileToFormData('tokenDualEcosystemCard2Image', 'remove_tokenDualEcosystemCard2Image');
    formData.append('tokenDualEcosystemCard2Desc', document.getElementById('tokenDualEcosystemCard2Desc').value);
    formData.append('tokenDualEcosystemBottomDesc', document.getElementById('tokenDualEcosystemBottomDesc').value);

    formData.append('tokenHybridBadge', document.getElementById('tokenHybridBadge').value);
    formData.append('tokenHybridTitle', document.getElementById('tokenHybridTitle').value);
    formData.append('tokenHybridDesc', document.getElementById('tokenHybridDesc').value);
    appendFileToFormData('tokenHybridCard1Icon', 'remove_tokenHybridCard1Icon');
    formData.append('tokenHybridCard1Title', document.getElementById('tokenHybridCard1Title').value);
    formData.append('tokenHybridCard1Desc', document.getElementById('tokenHybridCard1Desc').value);
    appendFileToFormData('tokenHybridCard2Icon', 'remove_tokenHybridCard2Icon');
    formData.append('tokenHybridCard2Title', document.getElementById('tokenHybridCard2Title').value);
    formData.append('tokenHybridCard2Desc', document.getElementById('tokenHybridCard2Desc').value);
    formData.append('tokenHybridBottomDesc', document.getElementById('tokenHybridBottomDesc').value);

    formData.append('tokenSystemTitle', document.getElementById('tokenSystemTitle').value);
    formData.append('tokenSystemDesc', document.getElementById('tokenSystemDesc').value);

    formData.append('tokenSystemSlide1Badge', document.getElementById('tokenSystemSlide1Badge').value);
    formData.append('tokenSystemSlide1Title', document.getElementById('tokenSystemSlide1Title').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide1DescList');
    formData.append('tokenSystemSlide1BtnText', document.getElementById('tokenSystemSlide1BtnText').value);
    formData.append('tokenSystemSlide1BtnLink', document.getElementById('tokenSystemSlide1BtnLink').value);
    appendFileToFormData('tokenSystemSlide1Image', 'remove_tokenSystemSlide1Image');

    formData.append('tokenSystemSlide2Badge', document.getElementById('tokenSystemSlide2Badge').value);
    formData.append('tokenSystemSlide2Title', document.getElementById('tokenSystemSlide2Title').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide2DescList');
    appendFileToFormData('tokenSystemSlide2Image', 'remove_tokenSystemSlide2Image');

    formData.append('tokenSystemSlide3Badge', document.getElementById('tokenSystemSlide3Badge').value);
    formData.append('tokenSystemSlide3Title', document.getElementById('tokenSystemSlide3Title').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide3DescList');
    appendFileToFormData('tokenSystemSlide3Image', 'remove_tokenSystemSlide3Image');

    formData.append('tokenSystemSlide4Badge', document.getElementById('tokenSystemSlide4Badge').value);
    formData.append('tokenSystemSlide4Title', document.getElementById('tokenSystemSlide4Title').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide4DescList');
    formData.append('tokenSystemSlide4FeatureHeading', document.getElementById('tokenSystemSlide4FeatureHeading').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide4FeatureList');
    appendFileToFormData('tokenSystemSlide4Image', 'remove_tokenSystemSlide4Image');

    formData.append('tokenSystemSlide5Badge', document.getElementById('tokenSystemSlide5Badge').value);
    formData.append('tokenSystemSlide5Title', document.getElementById('tokenSystemSlide5Title').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide5DescList');
    formData.append('tokenSystemSlide5Heading', document.getElementById('tokenSystemSlide5Heading').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide5HeadingDescList');
    appendFileToFormData('tokenSystemSlide5Image', 'remove_tokenSystemSlide5Image');

    formData.append('tokenSystemSlide6Badge', document.getElementById('tokenSystemSlide6Badge').value);
    formData.append('tokenSystemSlide6Title', document.getElementById('tokenSystemSlide6Title').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide6DescList');
    formData.append('tokenSystemSlide6FeatureHeading', document.getElementById('tokenSystemSlide6FeatureHeading').value);
    appendDynamicParagraphs(formData, 'tokenSystemSlide6FeatureList');
    appendFileToFormData('tokenSystemSlide6Image', 'remove_tokenSystemSlide6Image');

    appendFileToFormData('tokenIntegrationSlide1Image', 'remove_tokenIntegrationSlide1Image');
    formData.append('tokenIntegrationSlide1Title', document.getElementById('tokenIntegrationSlide1Title').value);
    appendDynamicParagraphs(formData, 'tokenIntegrationSlide1DescList');
    formData.append('tokenIntegrationSlide1FeatureHeading', document.getElementById('tokenIntegrationSlide1FeatureHeading').value);
    appendFileToFormData('tokenIntegrationSlide1Feature1Icon', 'remove_tokenIntegrationSlide1Feature1Icon');
    formData.append('tokenIntegrationSlide1Feature1Text', document.getElementById('tokenIntegrationSlide1Feature1Text').value);
    appendFileToFormData('tokenIntegrationSlide1Feature2Icon', 'remove_tokenIntegrationSlide1Feature2Icon');
    formData.append('tokenIntegrationSlide1Feature2Text', document.getElementById('tokenIntegrationSlide1Feature2Text').value);
    appendFileToFormData('tokenIntegrationSlide1Feature3Icon', 'remove_tokenIntegrationSlide1Feature3Icon');
    formData.append('tokenIntegrationSlide1Feature3Text', document.getElementById('tokenIntegrationSlide1Feature3Text').value);

    appendFileToFormData('tokenIntegrationSlide2Image', 'remove_tokenIntegrationSlide2Image');
    formData.append('tokenIntegrationSlide2Title', document.getElementById('tokenIntegrationSlide2Title').value);
    appendDynamicParagraphs(formData, 'tokenIntegrationSlide2DescList');
    appendFileToFormData('tokenIntegrationSlide2Feature1Icon', 'remove_tokenIntegrationSlide2Feature1Icon');
    formData.append('tokenIntegrationSlide2Feature1Text', document.getElementById('tokenIntegrationSlide2Feature1Text').value);
    appendFileToFormData('tokenIntegrationSlide2Feature2Icon', 'remove_tokenIntegrationSlide2Feature2Icon');
    formData.append('tokenIntegrationSlide2Feature2Text', document.getElementById('tokenIntegrationSlide2Feature2Text').value);
    appendFileToFormData('tokenIntegrationSlide2Feature3Icon', 'remove_tokenIntegrationSlide2Feature3Icon');
    formData.append('tokenIntegrationSlide2Feature3Text', document.getElementById('tokenIntegrationSlide2Feature3Text').value);

    appendFileToFormData('tokenIntegrationSlide3Image', 'remove_tokenIntegrationSlide3Image');
    formData.append('tokenIntegrationSlide3Title', document.getElementById('tokenIntegrationSlide3Title').value);
    appendDynamicParagraphs(formData, 'tokenIntegrationSlide3DescList');
    appendFileToFormData('tokenIntegrationSlide3Feature1Icon', 'remove_tokenIntegrationSlide3Feature1Icon');
    formData.append('tokenIntegrationSlide3Feature1Text', document.getElementById('tokenIntegrationSlide3Feature1Text').value);
    appendFileToFormData('tokenIntegrationSlide3Feature2Icon', 'remove_tokenIntegrationSlide3Feature2Icon');
    formData.append('tokenIntegrationSlide3Feature2Text', document.getElementById('tokenIntegrationSlide3Feature2Text').value);
    appendFileToFormData('tokenIntegrationSlide3Feature3Icon', 'remove_tokenIntegrationSlide3Feature3Icon');
    formData.append('tokenIntegrationSlide3Feature3Text', document.getElementById('tokenIntegrationSlide3Feature3Text').value);

    formData.append('tokenSmartCoinsTitle', document.getElementById('tokenSmartCoinsTitle').value);

    // Tab 1
    formData.append('tokenSmartCoinsTab1BtnText', document.getElementById('tokenSmartCoinsTab1BtnText').value);
    formData.append('tokenSmartCoinsTab1Title', document.getElementById('tokenSmartCoinsTab1Title').value);
    appendDynamicParagraphs(formData, 'tokenSmartCoinsTab1DescList');
    appendFileToFormData('tokenSmartCoinsTab1Image', 'remove_tokenSmartCoinsTab1Image');
    appendFileToFormData('tokenSmartCoinsTab1BgImage', 'remove_tokenSmartCoinsTab1BgImage');
    formData.append('tokenSmartCoinsTab1FeatureHeading', document.getElementById('tokenSmartCoinsTab1FeatureHeading').value);
    formData.append('tokenSmartCoinsTab1F1Title', document.getElementById('tokenSmartCoinsTab1F1Title').value);
    formData.append('tokenSmartCoinsTab1F1Desc', document.getElementById('tokenSmartCoinsTab1F1Desc').value);
    formData.append('tokenSmartCoinsTab1F2Title', document.getElementById('tokenSmartCoinsTab1F2Title').value);
    formData.append('tokenSmartCoinsTab1F2Desc', document.getElementById('tokenSmartCoinsTab1F2Desc').value);
    formData.append('tokenSmartCoinsTab1F3Title', document.getElementById('tokenSmartCoinsTab1F3Title').value);
    formData.append('tokenSmartCoinsTab1F3Desc', document.getElementById('tokenSmartCoinsTab1F3Desc').value);
    formData.append('tokenSmartCoinsTab1F4Title', document.getElementById('tokenSmartCoinsTab1F4Title').value);
    formData.append('tokenSmartCoinsTab1F4Desc', document.getElementById('tokenSmartCoinsTab1F4Desc').value);
    formData.append('tokenSmartCoinsTab1F5Title', document.getElementById('tokenSmartCoinsTab1F5Title').value);
    formData.append('tokenSmartCoinsTab1F5Desc', document.getElementById('tokenSmartCoinsTab1F5Desc').value);
    formData.append('tokenSmartCoinsTab1ValueHeading', document.getElementById('tokenSmartCoinsTab1ValueHeading').value);
    formData.append('tokenSmartCoinsTab1ValueDesc', document.getElementById('tokenSmartCoinsTab1ValueDesc').value);

    // Tab 2
    formData.append('tokenSmartCoinsTab2BtnText', document.getElementById('tokenSmartCoinsTab2BtnText').value);
    formData.append('tokenSmartCoinsTab2Title', document.getElementById('tokenSmartCoinsTab2Title').value);
    appendDynamicParagraphs(formData, 'tokenSmartCoinsTab2DescList');
    appendFileToFormData('tokenSmartCoinsTab2Image', 'remove_tokenSmartCoinsTab2Image');
    appendFileToFormData('tokenSmartCoinsTab2BgImage', 'remove_tokenSmartCoinsTab2BgImage');
    formData.append('tokenSmartCoinsTab2F1Heading', document.getElementById('tokenSmartCoinsTab2F1Heading').value);
    appendDynamicParagraphs(formData, 'tokenSmartCoinsTab2F1List');
    formData.append('tokenSmartCoinsTab2F2Heading', document.getElementById('tokenSmartCoinsTab2F2Heading').value);
    appendDynamicParagraphs(formData, 'tokenSmartCoinsTab2F2List');
    formData.append('tokenSmartCoinsTab2ValueHeading', document.getElementById('tokenSmartCoinsTab2ValueHeading').value);
    formData.append('tokenSmartCoinsTab2ValueDesc', document.getElementById('tokenSmartCoinsTab2ValueDesc').value);


    formData.append('tokenFutureTitle', document.getElementById('tokenFutureTitle').value);
    appendDynamicParagraphs(formData, 'tokenFutureDescList');
    formData.append('tokenFuturePrimaryBtnText', document.getElementById('tokenFuturePrimaryBtnText').value);
    formData.append('tokenFuturePrimaryBtnLink', document.getElementById('tokenFuturePrimaryBtnLink').value);
    formData.append('tokenFutureSecondaryBtnText', document.getElementById('tokenFutureSecondaryBtnText').value);
    formData.append('tokenFutureSecondaryBtnLink', document.getElementById('tokenFutureSecondaryBtnLink').value);
    appendFileToFormData('tokenFutureTopRightImage', 'remove_tokenFutureTopRightImage');
    appendFileToFormData('tokenFutureBottomLeftImage', 'remove_tokenFutureBottomLeftImage');





    formData.append('tokenHeroDescription', document.getElementById('tokenHeroDescription').value);
};

