/* 
* Admin JavaScript for the HOME page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Inject values into the DOM safely
  const el_heroTopHeader = document.getElementById('heroTopHeader'); if (el_heroTopHeader && el_heroTopHeader.type !== 'file') el_heroTopHeader.value = data.heroTopHeader || '';
  const el_heroTitle = document.getElementById('heroTitle'); if (el_heroTitle && el_heroTitle.type !== 'file') el_heroTitle.value = data.heroTitle || '';
  const el_heroDescription = document.getElementById('heroDescription'); if (el_heroDescription && el_heroDescription.type !== 'file') el_heroDescription.value = data.heroDescription || '';
  const el_heroPrimaryBtnText = document.getElementById('heroPrimaryBtnText'); if (el_heroPrimaryBtnText && el_heroPrimaryBtnText.type !== 'file') el_heroPrimaryBtnText.value = data.heroPrimaryBtnText || '';
  const el_heroPrimaryBtnLink = document.getElementById('heroPrimaryBtnLink'); if (el_heroPrimaryBtnLink && el_heroPrimaryBtnLink.type !== 'file') el_heroPrimaryBtnLink.value = data.heroPrimaryBtnLink || '';
  const el_heroSecondaryBtnText = document.getElementById('heroSecondaryBtnText'); if (el_heroSecondaryBtnText && el_heroSecondaryBtnText.type !== 'file') el_heroSecondaryBtnText.value = data.heroSecondaryBtnText || '';
  const el_heroSecondaryBtnLink = document.getElementById('heroSecondaryBtnLink'); if (el_heroSecondaryBtnLink && el_heroSecondaryBtnLink.type !== 'file') el_heroSecondaryBtnLink.value = data.heroSecondaryBtnLink || '';
  const el_dinaar_preview_img = document.getElementById('dinaar-preview-img'); if (el_dinaar_preview_img && el_dinaar_preview_img.type !== 'file') el_dinaar_preview_img.value = data['dinaar-preview-img'] || '';
  const el_dinaarImage = document.getElementById('dinaarImage'); if (el_dinaarImage && el_dinaarImage.type !== 'file') el_dinaarImage.value = data.dinaarImage || '';
  const el_remove_dinaarImage = document.getElementById('remove_dinaarImage'); if (el_remove_dinaarImage && el_remove_dinaarImage.type !== 'file') el_remove_dinaarImage.value = data.remove_dinaarImage || '';
  const el_dinaarTitle = document.getElementById('dinaarTitle'); if (el_dinaarTitle && el_dinaarTitle.type !== 'file') el_dinaarTitle.value = data.dinaarTitle || '';
  const el_dinaarPrice = document.getElementById('dinaarPrice'); if (el_dinaarPrice && el_dinaarPrice.type !== 'file') el_dinaarPrice.value = data.dinaarPrice || '';
  const el_saya_preview_img = document.getElementById('saya-preview-img'); if (el_saya_preview_img && el_saya_preview_img.type !== 'file') el_saya_preview_img.value = data['saya-preview-img'] || '';
  const el_sayaImage = document.getElementById('sayaImage'); if (el_sayaImage && el_sayaImage.type !== 'file') el_sayaImage.value = data.sayaImage || '';
  const el_remove_sayaImage = document.getElementById('remove_sayaImage'); if (el_remove_sayaImage && el_remove_sayaImage.type !== 'file') el_remove_sayaImage.value = data.remove_sayaImage || '';
  const el_sayaTitle = document.getElementById('sayaTitle'); if (el_sayaTitle && el_sayaTitle.type !== 'file') el_sayaTitle.value = data.sayaTitle || '';
  const el_sayaPrice = document.getElementById('sayaPrice'); if (el_sayaPrice && el_sayaPrice.type !== 'file') el_sayaPrice.value = data.sayaPrice || '';
  const el_featuredCoinsBadge = document.getElementById('featuredCoinsBadge'); if (el_featuredCoinsBadge && el_featuredCoinsBadge.type !== 'file') el_featuredCoinsBadge.value = data.featuredCoinsBadge || '';
  const el_featuredCoinsHeading = document.getElementById('featuredCoinsHeading'); if (el_featuredCoinsHeading && el_featuredCoinsHeading.type !== 'file') el_featuredCoinsHeading.value = data.featuredCoinsHeading || '';
  const el_featuredCoin1Image_preview = document.getElementById('featuredCoin1Image-preview'); if (el_featuredCoin1Image_preview && el_featuredCoin1Image_preview.type !== 'file') el_featuredCoin1Image_preview.value = data['featuredCoin1Image-preview'] || '';
  const el_featuredCoin1Image = document.getElementById('featuredCoin1Image'); if (el_featuredCoin1Image && el_featuredCoin1Image.type !== 'file') el_featuredCoin1Image.value = data.featuredCoin1Image || '';
  const el_remove_featuredCoin1Image = document.getElementById('remove_featuredCoin1Image'); if (el_remove_featuredCoin1Image && el_remove_featuredCoin1Image.type !== 'file') el_remove_featuredCoin1Image.value = data.remove_featuredCoin1Image || '';
  const el_featuredCoin1Title = document.getElementById('featuredCoin1Title'); if (el_featuredCoin1Title && el_featuredCoin1Title.type !== 'file') el_featuredCoin1Title.value = data.featuredCoin1Title || '';
  const el_featuredCoin1Desc = document.getElementById('featuredCoin1Desc'); if (el_featuredCoin1Desc && el_featuredCoin1Desc.type !== 'file') el_featuredCoin1Desc.value = data.featuredCoin1Desc || '';
  const el_featuredCoin1LinkText = document.getElementById('featuredCoin1LinkText'); if (el_featuredCoin1LinkText && el_featuredCoin1LinkText.type !== 'file') el_featuredCoin1LinkText.value = data.featuredCoin1LinkText || '';
  const el_featuredCoin1LinkUrl = document.getElementById('featuredCoin1LinkUrl'); if (el_featuredCoin1LinkUrl && el_featuredCoin1LinkUrl.type !== 'file') el_featuredCoin1LinkUrl.value = data.featuredCoin1LinkUrl || '';
  const el_featuredCoin2Image_preview = document.getElementById('featuredCoin2Image-preview'); if (el_featuredCoin2Image_preview && el_featuredCoin2Image_preview.type !== 'file') el_featuredCoin2Image_preview.value = data['featuredCoin2Image-preview'] || '';
  const el_featuredCoin2Image = document.getElementById('featuredCoin2Image'); if (el_featuredCoin2Image && el_featuredCoin2Image.type !== 'file') el_featuredCoin2Image.value = data.featuredCoin2Image || '';
  const el_remove_featuredCoin2Image = document.getElementById('remove_featuredCoin2Image'); if (el_remove_featuredCoin2Image && el_remove_featuredCoin2Image.type !== 'file') el_remove_featuredCoin2Image.value = data.remove_featuredCoin2Image || '';
  const el_featuredCoin2Title = document.getElementById('featuredCoin2Title'); if (el_featuredCoin2Title && el_featuredCoin2Title.type !== 'file') el_featuredCoin2Title.value = data.featuredCoin2Title || '';
  const el_featuredCoin2Desc = document.getElementById('featuredCoin2Desc'); if (el_featuredCoin2Desc && el_featuredCoin2Desc.type !== 'file') el_featuredCoin2Desc.value = data.featuredCoin2Desc || '';
  const el_featuredCoin2LinkText = document.getElementById('featuredCoin2LinkText'); if (el_featuredCoin2LinkText && el_featuredCoin2LinkText.type !== 'file') el_featuredCoin2LinkText.value = data.featuredCoin2LinkText || '';
  const el_featuredCoin2LinkUrl = document.getElementById('featuredCoin2LinkUrl'); if (el_featuredCoin2LinkUrl && el_featuredCoin2LinkUrl.type !== 'file') el_featuredCoin2LinkUrl.value = data.featuredCoin2LinkUrl || '';
  const el_techFeaturesBadge = document.getElementById('techFeaturesBadge'); if (el_techFeaturesBadge && el_techFeaturesBadge.type !== 'file') el_techFeaturesBadge.value = data.techFeaturesBadge || '';
  const el_techFeaturesHeading = document.getElementById('techFeaturesHeading'); if (el_techFeaturesHeading && el_techFeaturesHeading.type !== 'file') el_techFeaturesHeading.value = data.techFeaturesHeading || '';
  const el_techFeature1Icon_preview = document.getElementById('techFeature1Icon-preview'); if (el_techFeature1Icon_preview && el_techFeature1Icon_preview.type !== 'file') el_techFeature1Icon_preview.value = data['techFeature1Icon-preview'] || '';
  const el_techFeature1Icon = document.getElementById('techFeature1Icon'); if (el_techFeature1Icon && el_techFeature1Icon.type !== 'file') el_techFeature1Icon.value = data.techFeature1Icon || '';
  const el_remove_techFeature1Icon = document.getElementById('remove_techFeature1Icon'); if (el_remove_techFeature1Icon && el_remove_techFeature1Icon.type !== 'file') el_remove_techFeature1Icon.value = data.remove_techFeature1Icon || '';
  const el_techFeature1Desc = document.getElementById('techFeature1Desc'); if (el_techFeature1Desc && el_techFeature1Desc.type !== 'file') el_techFeature1Desc.value = data.techFeature1Desc || '';
  const el_techFeature2Icon_preview = document.getElementById('techFeature2Icon-preview'); if (el_techFeature2Icon_preview && el_techFeature2Icon_preview.type !== 'file') el_techFeature2Icon_preview.value = data['techFeature2Icon-preview'] || '';
  const el_techFeature2Icon = document.getElementById('techFeature2Icon'); if (el_techFeature2Icon && el_techFeature2Icon.type !== 'file') el_techFeature2Icon.value = data.techFeature2Icon || '';
  const el_remove_techFeature2Icon = document.getElementById('remove_techFeature2Icon'); if (el_remove_techFeature2Icon && el_remove_techFeature2Icon.type !== 'file') el_remove_techFeature2Icon.value = data.remove_techFeature2Icon || '';
  const el_techFeature2Desc = document.getElementById('techFeature2Desc'); if (el_techFeature2Desc && el_techFeature2Desc.type !== 'file') el_techFeature2Desc.value = data.techFeature2Desc || '';
  const el_techFeature3Icon_preview = document.getElementById('techFeature3Icon-preview'); if (el_techFeature3Icon_preview && el_techFeature3Icon_preview.type !== 'file') el_techFeature3Icon_preview.value = data['techFeature3Icon-preview'] || '';
  const el_techFeature3Icon = document.getElementById('techFeature3Icon'); if (el_techFeature3Icon && el_techFeature3Icon.type !== 'file') el_techFeature3Icon.value = data.techFeature3Icon || '';
  const el_remove_techFeature3Icon = document.getElementById('remove_techFeature3Icon'); if (el_remove_techFeature3Icon && el_remove_techFeature3Icon.type !== 'file') el_remove_techFeature3Icon.value = data.remove_techFeature3Icon || '';
  const el_techFeature3Desc = document.getElementById('techFeature3Desc'); if (el_techFeature3Desc && el_techFeature3Desc.type !== 'file') el_techFeature3Desc.value = data.techFeature3Desc || '';
  const el_techFeaturesBtnText = document.getElementById('techFeaturesBtnText'); if (el_techFeaturesBtnText && el_techFeaturesBtnText.type !== 'file') el_techFeaturesBtnText.value = data.techFeaturesBtnText || '';
  const el_techFeaturesBtnLink = document.getElementById('techFeaturesBtnLink'); if (el_techFeaturesBtnLink && el_techFeaturesBtnLink.type !== 'file') el_techFeaturesBtnLink.value = data.techFeaturesBtnLink || '';
  const el_whyUsBadge = document.getElementById('whyUsBadge'); if (el_whyUsBadge && el_whyUsBadge.type !== 'file') el_whyUsBadge.value = data.whyUsBadge || '';
  const el_whyUsHeading = document.getElementById('whyUsHeading'); if (el_whyUsHeading && el_whyUsHeading.type !== 'file') el_whyUsHeading.value = data.whyUsHeading || '';
  const el_whyUsCard1Icon_preview = document.getElementById('whyUsCard1Icon-preview'); if (el_whyUsCard1Icon_preview && el_whyUsCard1Icon_preview.type !== 'file') el_whyUsCard1Icon_preview.value = data['whyUsCard1Icon-preview'] || '';
  const el_whyUsCard1Icon = document.getElementById('whyUsCard1Icon'); if (el_whyUsCard1Icon && el_whyUsCard1Icon.type !== 'file') el_whyUsCard1Icon.value = data.whyUsCard1Icon || '';
  const el_remove_whyUsCard1Icon = document.getElementById('remove_whyUsCard1Icon'); if (el_remove_whyUsCard1Icon && el_remove_whyUsCard1Icon.type !== 'file') el_remove_whyUsCard1Icon.value = data.remove_whyUsCard1Icon || '';
  const el_whyUsCard1Title = document.getElementById('whyUsCard1Title'); if (el_whyUsCard1Title && el_whyUsCard1Title.type !== 'file') el_whyUsCard1Title.value = data.whyUsCard1Title || '';
  const el_whyUsCard1Desc = document.getElementById('whyUsCard1Desc'); if (el_whyUsCard1Desc && el_whyUsCard1Desc.type !== 'file') el_whyUsCard1Desc.value = data.whyUsCard1Desc || '';
  const el_whyUsCard2Icon_preview = document.getElementById('whyUsCard2Icon-preview'); if (el_whyUsCard2Icon_preview && el_whyUsCard2Icon_preview.type !== 'file') el_whyUsCard2Icon_preview.value = data['whyUsCard2Icon-preview'] || '';
  const el_whyUsCard2Icon = document.getElementById('whyUsCard2Icon'); if (el_whyUsCard2Icon && el_whyUsCard2Icon.type !== 'file') el_whyUsCard2Icon.value = data.whyUsCard2Icon || '';
  const el_remove_whyUsCard2Icon = document.getElementById('remove_whyUsCard2Icon'); if (el_remove_whyUsCard2Icon && el_remove_whyUsCard2Icon.type !== 'file') el_remove_whyUsCard2Icon.value = data.remove_whyUsCard2Icon || '';
  const el_whyUsCard2Title = document.getElementById('whyUsCard2Title'); if (el_whyUsCard2Title && el_whyUsCard2Title.type !== 'file') el_whyUsCard2Title.value = data.whyUsCard2Title || '';
  const el_whyUsCard2Desc = document.getElementById('whyUsCard2Desc'); if (el_whyUsCard2Desc && el_whyUsCard2Desc.type !== 'file') el_whyUsCard2Desc.value = data.whyUsCard2Desc || '';
  const el_whyUsCard3Icon_preview = document.getElementById('whyUsCard3Icon-preview'); if (el_whyUsCard3Icon_preview && el_whyUsCard3Icon_preview.type !== 'file') el_whyUsCard3Icon_preview.value = data['whyUsCard3Icon-preview'] || '';
  const el_whyUsCard3Icon = document.getElementById('whyUsCard3Icon'); if (el_whyUsCard3Icon && el_whyUsCard3Icon.type !== 'file') el_whyUsCard3Icon.value = data.whyUsCard3Icon || '';
  const el_remove_whyUsCard3Icon = document.getElementById('remove_whyUsCard3Icon'); if (el_remove_whyUsCard3Icon && el_remove_whyUsCard3Icon.type !== 'file') el_remove_whyUsCard3Icon.value = data.remove_whyUsCard3Icon || '';
  const el_whyUsCard3Title = document.getElementById('whyUsCard3Title'); if (el_whyUsCard3Title && el_whyUsCard3Title.type !== 'file') el_whyUsCard3Title.value = data.whyUsCard3Title || '';
  const el_whyUsCard3Desc = document.getElementById('whyUsCard3Desc'); if (el_whyUsCard3Desc && el_whyUsCard3Desc.type !== 'file') el_whyUsCard3Desc.value = data.whyUsCard3Desc || '';
  const el_whyUsCard4Icon_preview = document.getElementById('whyUsCard4Icon-preview'); if (el_whyUsCard4Icon_preview && el_whyUsCard4Icon_preview.type !== 'file') el_whyUsCard4Icon_preview.value = data['whyUsCard4Icon-preview'] || '';
  const el_whyUsCard4Icon = document.getElementById('whyUsCard4Icon'); if (el_whyUsCard4Icon && el_whyUsCard4Icon.type !== 'file') el_whyUsCard4Icon.value = data.whyUsCard4Icon || '';
  const el_remove_whyUsCard4Icon = document.getElementById('remove_whyUsCard4Icon'); if (el_remove_whyUsCard4Icon && el_remove_whyUsCard4Icon.type !== 'file') el_remove_whyUsCard4Icon.value = data.remove_whyUsCard4Icon || '';
  const el_whyUsCard4Title = document.getElementById('whyUsCard4Title'); if (el_whyUsCard4Title && el_whyUsCard4Title.type !== 'file') el_whyUsCard4Title.value = data.whyUsCard4Title || '';
  const el_whyUsCard4Desc = document.getElementById('whyUsCard4Desc'); if (el_whyUsCard4Desc && el_whyUsCard4Desc.type !== 'file') el_whyUsCard4Desc.value = data.whyUsCard4Desc || '';
  const el_globalImpactTitle = document.getElementById('globalImpactTitle'); if (el_globalImpactTitle && el_globalImpactTitle.type !== 'file') el_globalImpactTitle.value = data.globalImpactTitle || '';
  const el_globalImpactDesc = document.getElementById('globalImpactDesc'); if (el_globalImpactDesc && el_globalImpactDesc.type !== 'file') el_globalImpactDesc.value = data.globalImpactDesc || '';
  const el_ctaTitle = document.getElementById('ctaTitle'); if (el_ctaTitle && el_ctaTitle.type !== 'file') el_ctaTitle.value = data.ctaTitle || '';
  const el_ctaDesc = document.getElementById('ctaDesc'); if (el_ctaDesc && el_ctaDesc.type !== 'file') el_ctaDesc.value = data.ctaDesc || '';
  const el_ctaPrimaryBtnText = document.getElementById('ctaPrimaryBtnText'); if (el_ctaPrimaryBtnText && el_ctaPrimaryBtnText.type !== 'file') el_ctaPrimaryBtnText.value = data.ctaPrimaryBtnText || '';
  const el_ctaPrimaryBtnLink = document.getElementById('ctaPrimaryBtnLink'); if (el_ctaPrimaryBtnLink && el_ctaPrimaryBtnLink.type !== 'file') el_ctaPrimaryBtnLink.value = data.ctaPrimaryBtnLink || '';
  const el_ctaSecondaryBtnText = document.getElementById('ctaSecondaryBtnText'); if (el_ctaSecondaryBtnText && el_ctaSecondaryBtnText.type !== 'file') el_ctaSecondaryBtnText.value = data.ctaSecondaryBtnText || '';
  const el_ctaSecondaryBtnLink = document.getElementById('ctaSecondaryBtnLink'); if (el_ctaSecondaryBtnLink && el_ctaSecondaryBtnLink.type !== 'file') el_ctaSecondaryBtnLink.value = data.ctaSecondaryBtnLink || '';
  const el_ctaTopRightImage_preview = document.getElementById('ctaTopRightImage-preview'); if (el_ctaTopRightImage_preview && el_ctaTopRightImage_preview.type !== 'file') el_ctaTopRightImage_preview.value = data['ctaTopRightImage-preview'] || '';
  const el_ctaTopRightImage = document.getElementById('ctaTopRightImage'); if (el_ctaTopRightImage && el_ctaTopRightImage.type !== 'file') el_ctaTopRightImage.value = data.ctaTopRightImage || '';
  const el_remove_ctaTopRightImage = document.getElementById('remove_ctaTopRightImage'); if (el_remove_ctaTopRightImage && el_remove_ctaTopRightImage.type !== 'file') el_remove_ctaTopRightImage.value = data.remove_ctaTopRightImage || '';
  const el_ctaBottomLeftImage_preview = document.getElementById('ctaBottomLeftImage-preview'); if (el_ctaBottomLeftImage_preview && el_ctaBottomLeftImage_preview.type !== 'file') el_ctaBottomLeftImage_preview.value = data['ctaBottomLeftImage-preview'] || '';
  const el_ctaBottomLeftImage = document.getElementById('ctaBottomLeftImage'); if (el_ctaBottomLeftImage && el_ctaBottomLeftImage.type !== 'file') el_ctaBottomLeftImage.value = data.ctaBottomLeftImage || '';
  const el_remove_ctaBottomLeftImage = document.getElementById('remove_ctaBottomLeftImage'); if (el_remove_ctaBottomLeftImage && el_remove_ctaBottomLeftImage.type !== 'file') el_remove_ctaBottomLeftImage.value = data.remove_ctaBottomLeftImage || '';
  const el_ctaCenterImage_preview = document.getElementById('ctaCenterImage-preview'); if (el_ctaCenterImage_preview && el_ctaCenterImage_preview.type !== 'file') el_ctaCenterImage_preview.value = data['ctaCenterImage-preview'] || '';
  const el_ctaCenterImage = document.getElementById('ctaCenterImage'); if (el_ctaCenterImage && el_ctaCenterImage.type !== 'file') el_ctaCenterImage.value = data.ctaCenterImage || '';
  const el_remove_ctaCenterImage = document.getElementById('remove_ctaCenterImage'); if (el_remove_ctaCenterImage && el_remove_ctaCenterImage.type !== 'file') el_remove_ctaCenterImage.value = data.remove_ctaCenterImage || '';
  const el_ctaBackgroundImage_preview = document.getElementById('ctaBackgroundImage-preview'); if (el_ctaBackgroundImage_preview && el_ctaBackgroundImage_preview.type !== 'file') el_ctaBackgroundImage_preview.value = data['ctaBackgroundImage-preview'] || '';
  const el_ctaBackgroundImage = document.getElementById('ctaBackgroundImage'); if (el_ctaBackgroundImage && el_ctaBackgroundImage.type !== 'file') el_ctaBackgroundImage.value = data.ctaBackgroundImage || '';
  const el_remove_ctaBackgroundImage = document.getElementById('remove_ctaBackgroundImage'); if (el_remove_ctaBackgroundImage && el_remove_ctaBackgroundImage.type !== 'file') el_remove_ctaBackgroundImage.value = data.remove_ctaBackgroundImage || '';
  const el_newsTopBadge = document.getElementById('newsTopBadge'); if (el_newsTopBadge && el_newsTopBadge.type !== 'file') el_newsTopBadge.value = data.newsTopBadge || '';
  const el_newsTitle = document.getElementById('newsTitle'); if (el_newsTitle && el_newsTitle.type !== 'file') el_newsTitle.value = data.newsTitle || '';
  const el_news1Badge = document.getElementById('news1Badge'); if (el_news1Badge && el_news1Badge.type !== 'file') el_news1Badge.value = data.news1Badge || '';
  const el_news1Title = document.getElementById('news1Title'); if (el_news1Title && el_news1Title.type !== 'file') el_news1Title.value = data.news1Title || '';
  const el_news1Image_preview = document.getElementById('news1Image-preview'); if (el_news1Image_preview && el_news1Image_preview.type !== 'file') el_news1Image_preview.value = data['news1Image-preview'] || '';
  const el_news1Image = document.getElementById('news1Image'); if (el_news1Image && el_news1Image.type !== 'file') el_news1Image.value = data.news1Image || '';
  const el_remove_news1Image = document.getElementById('remove_news1Image'); if (el_remove_news1Image && el_remove_news1Image.type !== 'file') el_remove_news1Image.value = data.remove_news1Image || '';
  const el_news1AuthorImage_preview = document.getElementById('news1AuthorImage-preview'); if (el_news1AuthorImage_preview && el_news1AuthorImage_preview.type !== 'file') el_news1AuthorImage_preview.value = data['news1AuthorImage-preview'] || '';
  const el_news1AuthorImage = document.getElementById('news1AuthorImage'); if (el_news1AuthorImage && el_news1AuthorImage.type !== 'file') el_news1AuthorImage.value = data.news1AuthorImage || '';
  const el_remove_news1AuthorImage = document.getElementById('remove_news1AuthorImage'); if (el_remove_news1AuthorImage && el_remove_news1AuthorImage.type !== 'file') el_remove_news1AuthorImage.value = data.remove_news1AuthorImage || '';
  const el_news1AuthorName = document.getElementById('news1AuthorName'); if (el_news1AuthorName && el_news1AuthorName.type !== 'file') el_news1AuthorName.value = data.news1AuthorName || '';
  const el_news1AuthorRole = document.getElementById('news1AuthorRole'); if (el_news1AuthorRole && el_news1AuthorRole.type !== 'file') el_news1AuthorRole.value = data.news1AuthorRole || '';
  const el_news1Date = document.getElementById('news1Date'); if (el_news1Date && el_news1Date.type !== 'file') el_news1Date.value = data.news1Date || '';
  const el_news2Badge = document.getElementById('news2Badge'); if (el_news2Badge && el_news2Badge.type !== 'file') el_news2Badge.value = data.news2Badge || '';
  const el_news2Title = document.getElementById('news2Title'); if (el_news2Title && el_news2Title.type !== 'file') el_news2Title.value = data.news2Title || '';
  const el_news2AuthorImage_preview = document.getElementById('news2AuthorImage-preview'); if (el_news2AuthorImage_preview && el_news2AuthorImage_preview.type !== 'file') el_news2AuthorImage_preview.value = data['news2AuthorImage-preview'] || '';
  const el_news2AuthorImage = document.getElementById('news2AuthorImage'); if (el_news2AuthorImage && el_news2AuthorImage.type !== 'file') el_news2AuthorImage.value = data.news2AuthorImage || '';
  const el_remove_news2AuthorImage = document.getElementById('remove_news2AuthorImage'); if (el_remove_news2AuthorImage && el_remove_news2AuthorImage.type !== 'file') el_remove_news2AuthorImage.value = data.remove_news2AuthorImage || '';
  const el_news2AuthorName = document.getElementById('news2AuthorName'); if (el_news2AuthorName && el_news2AuthorName.type !== 'file') el_news2AuthorName.value = data.news2AuthorName || '';
  const el_news2AuthorRole = document.getElementById('news2AuthorRole'); if (el_news2AuthorRole && el_news2AuthorRole.type !== 'file') el_news2AuthorRole.value = data.news2AuthorRole || '';
  const el_news2Date = document.getElementById('news2Date'); if (el_news2Date && el_news2Date.type !== 'file') el_news2Date.value = data.news2Date || '';
  const el_news3Badge = document.getElementById('news3Badge'); if (el_news3Badge && el_news3Badge.type !== 'file') el_news3Badge.value = data.news3Badge || '';
  const el_news3Title = document.getElementById('news3Title'); if (el_news3Title && el_news3Title.type !== 'file') el_news3Title.value = data.news3Title || '';
  const el_news3AuthorImage_preview = document.getElementById('news3AuthorImage-preview'); if (el_news3AuthorImage_preview && el_news3AuthorImage_preview.type !== 'file') el_news3AuthorImage_preview.value = data['news3AuthorImage-preview'] || '';
  const el_news3AuthorImage = document.getElementById('news3AuthorImage'); if (el_news3AuthorImage && el_news3AuthorImage.type !== 'file') el_news3AuthorImage.value = data.news3AuthorImage || '';
  const el_remove_news3AuthorImage = document.getElementById('remove_news3AuthorImage'); if (el_remove_news3AuthorImage && el_remove_news3AuthorImage.type !== 'file') el_remove_news3AuthorImage.value = data.remove_news3AuthorImage || '';
  const el_news3AuthorName = document.getElementById('news3AuthorName'); if (el_news3AuthorName && el_news3AuthorName.type !== 'file') el_news3AuthorName.value = data.news3AuthorName || '';
  const el_news3AuthorRole = document.getElementById('news3AuthorRole'); if (el_news3AuthorRole && el_news3AuthorRole.type !== 'file') el_news3AuthorRole.value = data.news3AuthorRole || '';
  const el_news3Date = document.getElementById('news3Date'); if (el_news3Date && el_news3Date.type !== 'file') el_news3Date.value = data.news3Date || '';
  const el_financeHeading = document.getElementById('financeHeading'); if (el_financeHeading && el_financeHeading.type !== 'file') el_financeHeading.value = data.financeHeading || '';
  const el_financeBadge = document.getElementById('financeBadge'); if (el_financeBadge && el_financeBadge.type !== 'file') el_financeBadge.value = data.financeBadge || '';
  const el_financeDescription = document.getElementById('financeDescription'); if (el_financeDescription && el_financeDescription.type !== 'file') el_financeDescription.value = data.financeDescription || '';
  const el_aboutTitle = document.getElementById('aboutTitle'); if (el_aboutTitle && el_aboutTitle.type !== 'file') el_aboutTitle.value = data.aboutTitle || '';
  const el_aboutDescription = document.getElementById('aboutDescription'); if (el_aboutDescription && el_aboutDescription.type !== 'file') el_aboutDescription.value = data.aboutDescription || '';
  const el_aboutBgImage_preview = document.getElementById('aboutBgImage-preview'); if (el_aboutBgImage_preview && el_aboutBgImage_preview.type !== 'file') el_aboutBgImage_preview.value = data['aboutBgImage-preview'] || '';
  const el_aboutBgImage = document.getElementById('aboutBgImage'); if (el_aboutBgImage && el_aboutBgImage.type !== 'file') el_aboutBgImage.value = data.aboutBgImage || '';
  const el_remove_aboutBgImage = document.getElementById('remove_aboutBgImage'); if (el_remove_aboutBgImage && el_remove_aboutBgImage.type !== 'file') el_remove_aboutBgImage.value = data.remove_aboutBgImage || '';
  const el_aboutMainImage_preview = document.getElementById('aboutMainImage-preview'); if (el_aboutMainImage_preview && el_aboutMainImage_preview.type !== 'file') el_aboutMainImage_preview.value = data['aboutMainImage-preview'] || '';
  const el_aboutMainImage = document.getElementById('aboutMainImage'); if (el_aboutMainImage && el_aboutMainImage.type !== 'file') el_aboutMainImage.value = data.aboutMainImage || '';
  const el_remove_aboutMainImage = document.getElementById('remove_aboutMainImage'); if (el_remove_aboutMainImage && el_remove_aboutMainImage.type !== 'file') el_remove_aboutMainImage.value = data.remove_aboutMainImage || '';
  const el_finance_features_admin_grid = document.getElementById('finance-features-admin-grid'); if (el_finance_features_admin_grid && el_finance_features_admin_grid.type !== 'file') el_finance_features_admin_grid.value = data['finance-features-admin-grid'] || '';
  const el_featureImage0_preview = document.getElementById('featureImage0-preview'); if (el_featureImage0_preview && el_featureImage0_preview.type !== 'file') el_featureImage0_preview.value = data['featureImage0-preview'] || '';
  const el_featureImage0 = document.getElementById('featureImage0'); if (el_featureImage0 && el_featureImage0.type !== 'file') el_featureImage0.value = data.featureImage0 || '';
  const el_remove_featureImage0 = document.getElementById('remove_featureImage0'); if (el_remove_featureImage0 && el_remove_featureImage0.type !== 'file') el_remove_featureImage0.value = data.remove_featureImage0 || '';
  const el_featureTitle0 = document.getElementById('featureTitle0'); if (el_featureTitle0 && el_featureTitle0.type !== 'file') el_featureTitle0.value = data.featureTitle0 || '';
  const el_featureImage1_preview = document.getElementById('featureImage1-preview'); if (el_featureImage1_preview && el_featureImage1_preview.type !== 'file') el_featureImage1_preview.value = data['featureImage1-preview'] || '';
  const el_featureImage1 = document.getElementById('featureImage1'); if (el_featureImage1 && el_featureImage1.type !== 'file') el_featureImage1.value = data.featureImage1 || '';
  const el_remove_featureImage1 = document.getElementById('remove_featureImage1'); if (el_remove_featureImage1 && el_remove_featureImage1.type !== 'file') el_remove_featureImage1.value = data.remove_featureImage1 || '';
  const el_featureTitle1 = document.getElementById('featureTitle1'); if (el_featureTitle1 && el_featureTitle1.type !== 'file') el_featureTitle1.value = data.featureTitle1 || '';
  const el_featureImage2_preview = document.getElementById('featureImage2-preview'); if (el_featureImage2_preview && el_featureImage2_preview.type !== 'file') el_featureImage2_preview.value = data['featureImage2-preview'] || '';
  const el_featureImage2 = document.getElementById('featureImage2'); if (el_featureImage2 && el_featureImage2.type !== 'file') el_featureImage2.value = data.featureImage2 || '';
  const el_remove_featureImage2 = document.getElementById('remove_featureImage2'); if (el_remove_featureImage2 && el_remove_featureImage2.type !== 'file') el_remove_featureImage2.value = data.remove_featureImage2 || '';
  const el_featureTitle2 = document.getElementById('featureTitle2'); if (el_featureTitle2 && el_featureTitle2.type !== 'file') el_featureTitle2.value = data.featureTitle2 || '';
  const el_featureImage3_preview = document.getElementById('featureImage3-preview'); if (el_featureImage3_preview && el_featureImage3_preview.type !== 'file') el_featureImage3_preview.value = data['featureImage3-preview'] || '';
  const el_featureImage3 = document.getElementById('featureImage3'); if (el_featureImage3 && el_featureImage3.type !== 'file') el_featureImage3.value = data.featureImage3 || '';
  const el_remove_featureImage3 = document.getElementById('remove_featureImage3'); if (el_remove_featureImage3 && el_remove_featureImage3.type !== 'file') el_remove_featureImage3.value = data.remove_featureImage3 || '';
  const el_featureTitle3 = document.getElementById('featureTitle3'); if (el_featureTitle3 && el_featureTitle3.type !== 'file') el_featureTitle3.value = data.featureTitle3 || '';
  const el_financeBtnText = document.getElementById('financeBtnText'); if (el_financeBtnText && el_financeBtnText.type !== 'file') el_financeBtnText.value = data.financeBtnText || '';
  const el_financeBtnLink = document.getElementById('financeBtnLink'); if (el_financeBtnLink && el_financeBtnLink.type !== 'file') el_financeBtnLink.value = data.financeBtnLink || '';
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
  if (data.tickerCoins && document.getElementById('ticker-coins-container')) {
    if (typeof renderTickerCoinsEditor === 'function') renderTickerCoinsEditor(data.tickerCoins);
  }
};

window.appendPageFormData = function(formData) {
  // Collect values from the DOM
  formData.append('heroTopHeader', document.getElementById('heroTopHeader').value);
    formData.append('heroTitle', document.getElementById('heroTitle').value);
    formData.append('heroDescription', document.getElementById('heroDescription').value);
    formData.append('heroPrimaryBtnText', document.getElementById('heroPrimaryBtnText').value);
    formData.append('heroPrimaryBtnLink', document.getElementById('heroPrimaryBtnLink').value);
    formData.append('heroSecondaryBtnText', document.getElementById('heroSecondaryBtnText').value);
    formData.append('heroSecondaryBtnLink', document.getElementById('heroSecondaryBtnLink').value);

    // Serialize dynamic coin marquee rows into array
    const tickerCoins = [];
    const rows = document.querySelectorAll('#ticker-coins-container .ticker-row');
    rows.forEach(row => {
      const symbolInput = row.querySelector('.ticker-symbol');
      const nameInput = row.querySelector('.ticker-name');
      const priceInput = row.querySelector('.ticker-price');
      const changeInput = row.querySelector('.ticker-change');

      if (symbolInput && nameInput && priceInput && changeInput) {
        const symbol = symbolInput.value.trim();
        const name = nameInput.value.trim();
        const price = priceInput.value.trim();
        const change = changeInput.value.trim();
        if (symbol && name && price && change) {
          tickerCoins.push({ symbol, name, price, change });
        }
      }
    });
    formData.append('tickerCoins', JSON.stringify(tickerCoins));

    formData.append('dinaarTitle', document.getElementById('dinaarTitle').value);
    formData.append('dinaarPrice', document.getElementById('dinaarPrice').value);
    formData.append('sayaTitle', document.getElementById('sayaTitle').value);
    formData.append('sayaPrice', document.getElementById('sayaPrice').value);
    formData.append('financeHeading', document.getElementById('financeHeading').value);
    formData.append('financeBadge', document.getElementById('financeBadge').value);
    formData.append('financeDescription', document.getElementById('financeDescription').value);
    formData.append('aboutTitle', document.getElementById('aboutTitle').value);
    formData.append('aboutDescription', document.getElementById('aboutDescription').value);
    formData.append('financeBtnText', document.getElementById('financeBtnText').value);
    formData.append('financeBtnLink', document.getElementById('financeBtnLink').value);

    // Featured Coins Detail fields
    formData.append('featuredCoinsBadge', document.getElementById('featuredCoinsBadge').value);
    formData.append('featuredCoinsHeading', document.getElementById('featuredCoinsHeading').value);
    formData.append('featuredCoin1Title', document.getElementById('featuredCoin1Title').value);
    formData.append('featuredCoin1Desc', document.getElementById('featuredCoin1Desc').value);
    formData.append('featuredCoin1LinkText', document.getElementById('featuredCoin1LinkText').value);
    formData.append('featuredCoin1LinkUrl', document.getElementById('featuredCoin1LinkUrl').value);
    formData.append('featuredCoin2Title', document.getElementById('featuredCoin2Title').value);
    formData.append('featuredCoin2Desc', document.getElementById('featuredCoin2Desc').value);
    formData.append('featuredCoin2LinkText', document.getElementById('featuredCoin2LinkText').value);
    formData.append('featuredCoin2LinkUrl', document.getElementById('featuredCoin2LinkUrl').value);

    // Technology Stack features
    formData.append('techFeaturesBadge', document.getElementById('techFeaturesBadge').value);
    formData.append('techFeaturesHeading', document.getElementById('techFeaturesHeading').value);
    formData.append('techFeature1Desc', document.getElementById('techFeature1Desc').value);
    formData.append('techFeature2Desc', document.getElementById('techFeature2Desc').value);
    formData.append('techFeature3Desc', document.getElementById('techFeature3Desc').value);
    formData.append('techFeaturesBtnText', document.getElementById('techFeaturesBtnText').value);
    formData.append('techFeaturesBtnLink', document.getElementById('techFeaturesBtnLink').value);

    // Why Us features
    formData.append('whyUsBadge', document.getElementById('whyUsBadge').value);
    formData.append('whyUsHeading', document.getElementById('whyUsHeading').value);
    formData.append('whyUsCard1Title', document.getElementById('whyUsCard1Title').value);
    formData.append('whyUsCard1Desc', document.getElementById('whyUsCard1Desc').value);
    formData.append('whyUsCard2Title', document.getElementById('whyUsCard2Title').value);
    formData.append('whyUsCard2Desc', document.getElementById('whyUsCard2Desc').value);
    formData.append('whyUsCard3Title', document.getElementById('whyUsCard3Title').value);
    formData.append('whyUsCard3Desc', document.getElementById('whyUsCard3Desc').value);
    formData.append('whyUsCard4Title', document.getElementById('whyUsCard4Title').value);
    formData.append('whyUsCard4Desc', document.getElementById('whyUsCard4Desc').value);

    // Global Impact section
    formData.append('globalImpactTitle', document.getElementById('globalImpactTitle').value);
    formData.append('globalImpactDesc', document.getElementById('globalImpactDesc').value);

    // CTA section
    formData.append('ctaTitle', document.getElementById('ctaTitle').value);
    formData.append('ctaDesc', document.getElementById('ctaDesc').value);
    formData.append('ctaPrimaryBtnText', document.getElementById('ctaPrimaryBtnText').value);
    formData.append('ctaPrimaryBtnLink', document.getElementById('ctaPrimaryBtnLink').value);
    formData.append('ctaSecondaryBtnText', document.getElementById('ctaSecondaryBtnText').value);
    formData.append('ctaSecondaryBtnLink', document.getElementById('ctaSecondaryBtnLink').value);

    // News section
    formData.append('newsTopBadge', document.getElementById('newsTopBadge').value);
    formData.append('newsTitle', document.getElementById('newsTitle').value);

    formData.append('news1Badge', document.getElementById('news1Badge').value);
    formData.append('news1Title', document.getElementById('news1Title').value);
    formData.append('news1AuthorName', document.getElementById('news1AuthorName').value);
    formData.append('news1AuthorRole', document.getElementById('news1AuthorRole').value);
    formData.append('news1Date', document.getElementById('news1Date').value);

    formData.append('news2Badge', document.getElementById('news2Badge').value);
    formData.append('news2Title', document.getElementById('news2Title').value);
    formData.append('news2AuthorName', document.getElementById('news2AuthorName').value);
    formData.append('news2AuthorRole', document.getElementById('news2AuthorRole').value);
    formData.append('news2Date', document.getElementById('news2Date').value);

    formData.append('news3Badge', document.getElementById('news3Badge').value);
    formData.append('news3Title', document.getElementById('news3Title').value);
    formData.append('news3AuthorName', document.getElementById('news3AuthorName').value);
    formData.append('news3AuthorRole', document.getElementById('news3AuthorRole').value);
    formData.append('news3Date', document.getElementById('news3Date').value);

    // Add dynamic feature titles
    for (let i = 0; i < 4; i++) {
      formData.append(`featureTitle${i}`, document.getElementById(`featureTitle${i}`).value);
    }

    // Add file fields if uploaded
    const dinaarImgFile = document.getElementById('dinaarImage').files[0];
    const sayaImgFile = document.getElementById('sayaImage').files[0];
    if (dinaarImgFile) formData.append('dinaarImage', dinaarImgFile);
    if (sayaImgFile) formData.append('sayaImage', sayaImgFile);

    const aboutBgImgFile = document.getElementById('aboutBgImage').files[0];
    const aboutMainImgFile = document.getElementById('aboutMainImage').files[0];
    if (aboutBgImgFile) formData.append('aboutBgImage', aboutBgImgFile);
    if (aboutMainImgFile) formData.append('aboutMainImage', aboutMainImgFile);

    const featuredCoin1ImageFile = document.getElementById('featuredCoin1Image').files[0];
    const featuredCoin2ImageFile = document.getElementById('featuredCoin2Image').files[0];
    if (featuredCoin1ImageFile) formData.append('featuredCoin1Image', featuredCoin1ImageFile);
    if (featuredCoin2ImageFile) formData.append('featuredCoin2Image', featuredCoin2ImageFile);

    const techFeature1IconFile = document.getElementById('techFeature1Icon').files[0];
    const techFeature2IconFile = document.getElementById('techFeature2Icon').files[0];
    const techFeature3IconFile = document.getElementById('techFeature3Icon').files[0];
    if (techFeature1IconFile) formData.append('techFeature1Icon', techFeature1IconFile);
    if (techFeature2IconFile) formData.append('techFeature2Icon', techFeature2IconFile);
    if (techFeature3IconFile) formData.append('techFeature3Icon', techFeature3IconFile);

    const whyUsCard1IconFile = document.getElementById('whyUsCard1Icon').files[0];
    const whyUsCard2IconFile = document.getElementById('whyUsCard2Icon').files[0];
    const whyUsCard3IconFile = document.getElementById('whyUsCard3Icon').files[0];
    const whyUsCard4IconFile = document.getElementById('whyUsCard4Icon').files[0];
    if (whyUsCard1IconFile) formData.append('whyUsCard1Icon', whyUsCard1IconFile);
    if (whyUsCard2IconFile) formData.append('whyUsCard2Icon', whyUsCard2IconFile);
    if (whyUsCard3IconFile) formData.append('whyUsCard3Icon', whyUsCard3IconFile);
    if (whyUsCard4IconFile) formData.append('whyUsCard4Icon', whyUsCard4IconFile);

    const ctaTopRightImageFile = document.getElementById('ctaTopRightImage').files[0];
    const ctaBottomLeftImageFile = document.getElementById('ctaBottomLeftImage').files[0];
    const ctaCenterImageFile = document.getElementById('ctaCenterImage').files[0];
    const ctaBackgroundImageFile = document.getElementById('ctaBackgroundImage').files[0];
    if (ctaTopRightImageFile) formData.append('ctaTopRightImage', ctaTopRightImageFile);
    if (ctaBottomLeftImageFile) formData.append('ctaBottomLeftImage', ctaBottomLeftImageFile);
    if (ctaCenterImageFile) formData.append('ctaCenterImage', ctaCenterImageFile);
    if (ctaBackgroundImageFile) formData.append('ctaBackgroundImage', ctaBackgroundImageFile);

    const news1ImageFile = document.getElementById('news1Image').files[0];
    const news1AuthorImageFile = document.getElementById('news1AuthorImage').files[0];
    const news2AuthorImageFile = document.getElementById('news2AuthorImage').files[0];
    const news3AuthorImageFile = document.getElementById('news3AuthorImage').files[0];
    if (news1ImageFile) formData.append('news1Image', news1ImageFile);
    if (news1AuthorImageFile) formData.append('news1AuthorImage', news1AuthorImageFile);
    if (news2AuthorImageFile) formData.append('news2AuthorImage', news2AuthorImageFile);
    if (news3AuthorImageFile) formData.append('news3AuthorImage', news3AuthorImageFile);

    for (let i = 0; i < 4; i++) {
      const featureFile = document.getElementById(`featureImage${i}`).files[0];
      if (featureFile) formData.append(`featureImage${i}`, featureFile);
    }

    // Append image remove hidden flags to form submission
    const removeFlags = [
      'remove_dinaarImage', 'remove_sayaImage', 'remove_aboutBgImage', 'remove_aboutMainImage',
      'remove_featureImage0', 'remove_featureImage1', 'remove_featureImage2', 'remove_featureImage3',
      'remove_featuredCoin1Image', 'remove_featuredCoin2Image',
      'remove_techFeature1Icon', 'remove_techFeature2Icon', 'remove_techFeature3Icon',
      'remove_whyUsCard1Icon', 'remove_whyUsCard2Icon', 'remove_whyUsCard3Icon', 'remove_whyUsCard4Icon',
      'remove_ctaTopRightImage', 'remove_ctaBottomLeftImage', 'remove_ctaCenterImage', 'remove_ctaBackgroundImage',
      'remove_news1Image', 'remove_news1AuthorImage', 'remove_news2AuthorImage', 'remove_news3AuthorImage',
      'remove_visionImage', 'remove_missionImage', 'remove_ecosystemImage', 'remove_ecosystemBgImage'
    ];
    removeFlags.forEach(flag => {
      const val = document.getElementById(flag).value;
      formData.append(flag, val);
    });
};

