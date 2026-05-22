/* 
* Admin JavaScript for the HOME page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Flat-map finance features array back into data
  if (data.financeFeatures && Array.isArray(data.financeFeatures)) {
    data.financeFeatures.forEach((feat, index) => {
      data[`featureTitle${index}`] = feat.title || '';
      data[`featureImage${index}`] = feat.image || '';
    });
  }

  // Helper to set text/textarea values safely
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && el.type !== 'file') {
      el.value = val || '';
    }
  };

  // Safe image preview setter
  const setImg = (previewId, url) => {
    if (typeof setImagePreview === 'function') {
      setImagePreview(previewId, url);
    } else {
      const el = document.getElementById(previewId);
      if (el) el.src = url || '';
    }
  };

  // Hero section
  setVal('heroTopHeader', data.heroTopHeader);
  setVal('heroTitle', data.heroTitle);
  setVal('heroDescription', data.heroDescription);
  setVal('heroPrimaryBtnText', data.heroPrimaryBtnText);
  setVal('heroPrimaryBtnLink', data.heroPrimaryBtnLink);
  setVal('heroSecondaryBtnText', data.heroSecondaryBtnText);
  setVal('heroSecondaryBtnLink', data.heroSecondaryBtnLink);

  // Coins
  setVal('dinaarTitle', data.dinaarTitle);
  setVal('dinaarPrice', data.dinaarPrice);
  setImg('dinaar-preview-img', data.dinaarImage);
  setVal('remove_dinaarImage', 'false');

  setVal('sayaTitle', data.sayaTitle);
  setVal('sayaPrice', data.sayaPrice);
  setImg('saya-preview-img', data.sayaImage);
  setVal('remove_sayaImage', 'false');

  // Featured Coins Card
  setVal('featuredCoinsBadge', data.featuredCoinsBadge);
  setVal('featuredCoinsHeading', data.featuredCoinsHeading);
  
  setImg('featuredCoin1Image-preview', data.featuredCoin1Image);
  setVal('remove_featuredCoin1Image', 'false');
  setVal('featuredCoin1Title', data.featuredCoin1Title);
  setVal('featuredCoin1Desc', data.featuredCoin1Desc);
  setVal('featuredCoin1LinkText', data.featuredCoin1LinkText);
  setVal('featuredCoin1LinkUrl', data.featuredCoin1LinkUrl);

  setImg('featuredCoin2Image-preview', data.featuredCoin2Image);
  setVal('remove_featuredCoin2Image', 'false');
  setVal('featuredCoin2Title', data.featuredCoin2Title);
  setVal('featuredCoin2Desc', data.featuredCoin2Desc);
  setVal('featuredCoin2LinkText', data.featuredCoin2LinkText);
  setVal('featuredCoin2LinkUrl', data.featuredCoin2LinkUrl);

  // Technology features
  setVal('techFeaturesBadge', data.techFeaturesBadge);
  setVal('techFeaturesHeading', data.techFeaturesHeading);
  
  setImg('techFeature1Icon-preview', data.techFeature1Icon);
  setVal('remove_techFeature1Icon', 'false');
  setVal('techFeature1Desc', data.techFeature1Desc);

  setImg('techFeature2Icon-preview', data.techFeature2Icon);
  setVal('remove_techFeature2Icon', 'false');
  setVal('techFeature2Desc', data.techFeature2Desc);

  setImg('techFeature3Icon-preview', data.techFeature3Icon);
  setVal('remove_techFeature3Icon', 'false');
  setVal('techFeature3Desc', data.techFeature3Desc);
  setVal('techFeaturesBtnText', data.techFeaturesBtnText);
  setVal('techFeaturesBtnLink', data.techFeaturesBtnLink);

  // Why Us
  setVal('whyUsBadge', data.whyUsBadge);
  setVal('whyUsHeading', data.whyUsHeading);

  setImg('whyUsCard1Icon-preview', data.whyUsCard1Icon);
  setVal('remove_whyUsCard1Icon', 'false');
  setVal('whyUsCard1Title', data.whyUsCard1Title);
  setVal('whyUsCard1Desc', data.whyUsCard1Desc);

  setImg('whyUsCard2Icon-preview', data.whyUsCard2Icon);
  setVal('remove_whyUsCard2Icon', 'false');
  setVal('whyUsCard2Title', data.whyUsCard2Title);
  setVal('whyUsCard2Desc', data.whyUsCard2Desc);

  setImg('whyUsCard3Icon-preview', data.whyUsCard3Icon);
  setVal('remove_whyUsCard3Icon', 'false');
  setVal('whyUsCard3Title', data.whyUsCard3Title);
  setVal('whyUsCard3Desc', data.whyUsCard3Desc);

  setImg('whyUsCard4Icon-preview', data.whyUsCard4Icon);
  setVal('remove_whyUsCard4Icon', 'false');
  setVal('whyUsCard4Title', data.whyUsCard4Title);
  setVal('whyUsCard4Desc', data.whyUsCard4Desc);

  // Global Impact
  setVal('globalImpactTitle', data.globalImpactTitle);
  setVal('globalImpactDesc', data.globalImpactDesc);

  // CTA Section
  setVal('ctaTitle', data.ctaTitle);
  setVal('ctaDesc', data.ctaDesc);
  setVal('ctaPrimaryBtnText', data.ctaPrimaryBtnText);
  setVal('ctaPrimaryBtnLink', data.ctaPrimaryBtnLink);
  setVal('ctaSecondaryBtnText', data.ctaSecondaryBtnText);
  setVal('ctaSecondaryBtnLink', data.ctaSecondaryBtnLink);
  
  setImg('ctaTopRightImage-preview', data.ctaTopRightImage);
  setVal('remove_ctaTopRightImage', 'false');
  setImg('ctaBottomLeftImage-preview', data.ctaBottomLeftImage);
  setVal('remove_ctaBottomLeftImage', 'false');
  setImg('ctaCenterImage-preview', data.ctaCenterImage);
  setVal('remove_ctaCenterImage', 'false');
  setImg('ctaBackgroundImage-preview', data.ctaBackgroundImage);
  setVal('remove_ctaBackgroundImage', 'false');

  // News Section
  setVal('newsTopBadge', data.newsTopBadge);
  setVal('newsTitle', data.newsTitle);

  setVal('news1Badge', data.news1Badge);
  setVal('news1Title', data.news1Title);
  setImg('news1Image-preview', data.news1Image);
  setVal('remove_news1Image', 'false');
  setImg('news1AuthorImage-preview', data.news1AuthorImage);
  setVal('remove_news1AuthorImage', 'false');
  setVal('news1AuthorName', data.news1AuthorName);
  setVal('news1AuthorRole', data.news1AuthorRole);
  setVal('news1Date', data.news1Date);

  setVal('news2Badge', data.news2Badge);
  setVal('news2Title', data.news2Title);
  setImg('news2AuthorImage-preview', data.news2AuthorImage);
  setVal('remove_news2AuthorImage', 'false');
  setVal('news2AuthorName', data.news2AuthorName);
  setVal('news2AuthorRole', data.news2AuthorRole);
  setVal('news2Date', data.news2Date);

  setVal('news3Badge', data.news3Badge);
  setVal('news3Title', data.news3Title);
  setImg('news3AuthorImage-preview', data.news3AuthorImage);
  setVal('remove_news3AuthorImage', 'false');
  setVal('news3AuthorName', data.news3AuthorName);
  setVal('news3AuthorRole', data.news3AuthorRole);
  setVal('news3Date', data.news3Date);

  // Finance block
  setVal('financeHeading', data.financeHeading);
  setVal('financeBadge', data.financeBadge);
  setVal('financeDescription', data.financeDescription);
  setVal('financeBtnText', data.financeBtnText);
  setVal('financeBtnLink', data.financeBtnLink);

  // What is IIC METAVERSE (images & copy)
  setVal('aboutTitle', data.aboutTitle);
  setVal('aboutDescription', data.aboutDescription);
  setImg('aboutBgImage-preview', data.aboutBgImage);
  setVal('remove_aboutBgImage', 'false');
  setImg('aboutMainImage-preview', data.aboutMainImage);
  setVal('remove_aboutMainImage', 'false');

  // Dynamic Finance Features (Four Ecosystem Feature Cards)
  for (let i = 0; i < 4; i++) {
    setVal(`featureTitle${i}`, data[`featureTitle${i}`]);
    setImg(`featureImage${i}-preview`, data[`featureImage${i}`]);
    setVal(`remove_featureImage${i}`, 'false');
  }

  // Ticker Coins Editor
  if (data.tickerCoins && document.getElementById('ticker-coins-container')) {
    if (typeof renderTickerCoinsEditor === 'function') renderTickerCoinsEditor(data.tickerCoins);
  }
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
  appendVal('heroTopHeader', 'heroTopHeader');
  appendVal('heroTitle', 'heroTitle');
  appendVal('heroDescription', 'heroDescription');
  appendVal('heroPrimaryBtnText', 'heroPrimaryBtnText');
  appendVal('heroPrimaryBtnLink', 'heroPrimaryBtnLink');
  appendVal('heroSecondaryBtnText', 'heroSecondaryBtnText');
  appendVal('heroSecondaryBtnLink', 'heroSecondaryBtnLink');

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

  appendVal('dinaarTitle', 'dinaarTitle');
  appendVal('dinaarPrice', 'dinaarPrice');
  appendVal('sayaTitle', 'sayaTitle');
  appendVal('sayaPrice', 'sayaPrice');
  appendVal('financeHeading', 'financeHeading');
  appendVal('financeBadge', 'financeBadge');
  appendVal('financeDescription', 'financeDescription');
  appendVal('aboutTitle', 'aboutTitle');
  appendVal('aboutDescription', 'aboutDescription');
  appendVal('financeBtnText', 'financeBtnText');
  appendVal('financeBtnLink', 'financeBtnLink');

  // Featured Coins Detail fields
  appendVal('featuredCoinsBadge', 'featuredCoinsBadge');
  appendVal('featuredCoinsHeading', 'featuredCoinsHeading');
  appendVal('featuredCoin1Title', 'featuredCoin1Title');
  appendVal('featuredCoin1Desc', 'featuredCoin1Desc');
  appendVal('featuredCoin1LinkText', 'featuredCoin1LinkText');
  appendVal('featuredCoin1LinkUrl', 'featuredCoin1LinkUrl');
  appendVal('featuredCoin2Title', 'featuredCoin2Title');
  appendVal('featuredCoin2Desc', 'featuredCoin2Desc');
  appendVal('featuredCoin2LinkText', 'featuredCoin2LinkText');
  appendVal('featuredCoin2LinkUrl', 'featuredCoin2LinkUrl');

  // Technology Stack features
  appendVal('techFeaturesBadge', 'techFeaturesBadge');
  appendVal('techFeaturesHeading', 'techFeaturesHeading');
  appendVal('techFeature1Desc', 'techFeature1Desc');
  appendVal('techFeature2Desc', 'techFeature2Desc');
  appendVal('techFeature3Desc', 'techFeature3Desc');
  appendVal('techFeaturesBtnText', 'techFeaturesBtnText');
  appendVal('techFeaturesBtnLink', 'techFeaturesBtnLink');

  // Why Us features
  appendVal('whyUsBadge', 'whyUsBadge');
  appendVal('whyUsHeading', 'whyUsHeading');
  appendVal('whyUsCard1Title', 'whyUsCard1Title');
  appendVal('whyUsCard1Desc', 'whyUsCard1Desc');
  appendVal('whyUsCard2Title', 'whyUsCard2Title');
  appendVal('whyUsCard2Desc', 'whyUsCard2Desc');
  appendVal('whyUsCard3Title', 'whyUsCard3Title');
  appendVal('whyUsCard3Desc', 'whyUsCard3Desc');
  appendVal('whyUsCard4Title', 'whyUsCard4Title');
  appendVal('whyUsCard4Desc', 'whyUsCard4Desc');

  // Global Impact section
  appendVal('globalImpactTitle', 'globalImpactTitle');
  appendVal('globalImpactDesc', 'globalImpactDesc');

  // CTA section
  appendVal('ctaTitle', 'ctaTitle');
  appendVal('ctaDesc', 'ctaDesc');
  appendVal('ctaPrimaryBtnText', 'ctaPrimaryBtnText');
  appendVal('ctaPrimaryBtnLink', 'ctaPrimaryBtnLink');
  appendVal('ctaSecondaryBtnText', 'ctaSecondaryBtnText');
  appendVal('ctaSecondaryBtnLink', 'ctaSecondaryBtnLink');

  // News section
  appendVal('newsTopBadge', 'newsTopBadge');
  appendVal('newsTitle', 'newsTitle');

  appendVal('news1Badge', 'news1Badge');
  appendVal('news1Title', 'news1Title');
  appendVal('news1AuthorName', 'news1AuthorName');
  appendVal('news1AuthorRole', 'news1AuthorRole');
  appendVal('news1Date', 'news1Date');

  appendVal('news2Badge', 'news2Badge');
  appendVal('news2Title', 'news2Title');
  appendVal('news2AuthorName', 'news2AuthorName');
  appendVal('news2AuthorRole', 'news2AuthorRole');
  appendVal('news2Date', 'news2Date');

  appendVal('news3Badge', 'news3Badge');
  appendVal('news3Title', 'news3Title');
  appendVal('news3AuthorName', 'news3AuthorName');
  appendVal('news3AuthorRole', 'news3AuthorRole');
  appendVal('news3Date', 'news3Date');

  // Add dynamic feature titles
  for (let i = 0; i < 4; i++) {
    appendVal(`featureTitle${i}`, `featureTitle${i}`);
  }

  // Add file fields if uploaded
  appendFile('dinaarImage', 'dinaarImage');
  appendFile('sayaImage', 'sayaImage');
  appendFile('aboutBgImage', 'aboutBgImage');
  appendFile('aboutMainImage', 'aboutMainImage');
  appendFile('featuredCoin1Image', 'featuredCoin1Image');
  appendFile('featuredCoin2Image', 'featuredCoin2Image');

  appendFile('techFeature1Icon', 'techFeature1Icon');
  appendFile('techFeature2Icon', 'techFeature2Icon');
  appendFile('techFeature3Icon', 'techFeature3Icon');

  appendFile('whyUsCard1Icon', 'whyUsCard1Icon');
  appendFile('whyUsCard2Icon', 'whyUsCard2Icon');
  appendFile('whyUsCard3Icon', 'whyUsCard3Icon');
  appendFile('whyUsCard4Icon', 'whyUsCard4Icon');

  appendFile('ctaTopRightImage', 'ctaTopRightImage');
  appendFile('ctaBottomLeftImage', 'ctaBottomLeftImage');
  appendFile('ctaCenterImage', 'ctaCenterImage');
  appendFile('ctaBackgroundImage', 'ctaBackgroundImage');

  appendFile('news1Image', 'news1Image');
  appendFile('news1AuthorImage', 'news1AuthorImage');
  appendFile('news2AuthorImage', 'news2AuthorImage');
  appendFile('news3AuthorImage', 'news3AuthorImage');

  for (let i = 0; i < 4; i++) {
    appendFile(`featureImage${i}`, `featureImage${i}`);
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
    appendVal(flag, flag);
  });
};
