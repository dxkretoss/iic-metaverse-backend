// Active Page State
let activePage = 'home';
let activeSectionFilter = 'all';

// DOM Hooks
const form = document.getElementById('admin-form');
const btnSave = document.getElementById('btn-save');
const btnReset = document.getElementById('btn-reset');
const toastEl = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastMsg = document.getElementById('toast-msg');
const activePageLabel = document.getElementById('active-page-label');
const sectionsFilterContainer = document.getElementById('sections-filter-container');

// Configuration mapping of sections per page for dynamic sidebar filtering
const PAGE_SECTIONS = {
  home: [
    { id: 'hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'tickers', name: 'Live Tickers', icon: 'fa-chart-line' },
    { id: 'coins', name: 'Featured Coins', icon: 'fa-coins' },
    { id: 'featured-coins-detail', name: 'Featured Coins Detail', icon: 'fa-coins' },
    { id: 'features-hv2', name: 'Technology Stack', icon: 'fa-microchip' },
    { id: 'why-us', name: 'Why Us Section', icon: 'fa-question-circle' },
    { id: 'global-impact', name: 'Global Impact', icon: 'fa-earth-americas' },
    { id: 'cta', name: 'Call To Action', icon: 'fa-bullhorn' },
    { id: 'news', name: 'Latest News', icon: 'fa-newspaper' },
    { id: 'finance', name: 'Global Finance', icon: 'fa-globe' }
  ],
  about: [
    { id: 'about-hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'about-gallery', name: 'Gallery & Who We Are', icon: 'fa-circle' },
    { id: 'about-owners', name: 'Leadership / Owners Management', icon: 'fa-user' },
    { id: 'vision-mission', name: 'Vision & Mission', icon: 'fa-eye' },
    { id: 'ecosystem', name: 'Strong Ecosystem', icon: 'fa-network-wired' },
    { id: 'spotlight', name: 'Community Spotlight', icon: 'fa-earth-americas' },
  ],
  technology: [
    { id: 'tech-hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'core-tech', name: 'Core Capabilities', icon: 'fa-microchip' },
    { id: 'security', name: 'Security Features', icon: 'fa-shield-halved' }
  ],
  token: [
    { id: 'token-hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'tokenomics', name: 'Token Distribution', icon: 'fa-chart-pie' }
  ],
  contact: [
    { id: 'contact-hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'contact-details', name: 'Company Details', icon: 'fa-envelope-open-text' },
    { id: 'social-profiles', name: 'Social Handles', icon: 'fa-hashtag' }
  ]
};

// Default backup values for all pages (CMS Resets)
const DEFAULT_VALUES = {
  home: {
    heroTopHeader: "Where Virtual Innovation Meets Real-World Value",
    heroTitle: "The Future of Digital Economy Starts Here",
    heroDescription: "A next-generation ecosystem combining blockchain, AI, and real-world assets to transform how the world trades, invests, and interacts.",
    heroPrimaryBtnText: "Explore Token Economy",
    heroSecondaryBtnText: "Get started",
    tickerCoins: [
      { symbol: "ETH", name: "Ethereum", price: "$2,282.83", change: "-1.66%" },
      { symbol: "USDT", name: "Tether USDt", price: "$1.00", change: "-0.01%" },
      { symbol: "XRP", name: "XRP", price: "$1.39", change: "-1.92%" },
      { symbol: "BNB", name: "BNB", price: "$623.16", change: "-0.73%" },
      { symbol: "USDC", name: "USDC", price: "$1.00", change: "0.01%" },
      { symbol: "SOL", name: "Solana", price: "$83.75", change: "-1.66%" }
    ],
    dinaarTitle: "Dinaar Coin",
    dinaarPrice: "$0.00822",
    dinaarImage: "/assests/images/dinnar.png",
    sayaTitle: "Saya Coin",
    sayaPrice: "$0.00822",
    sayaImage: "/assests/images/saya.png",
    financeHeading: "A New Standard for Global Finance",
    financeBadge: "[ Innovative Solutions ]",
    financeDescription: "IIC METAVERSE brings together advanced technology and real-world value into a single ecosystem—bridging the gap between traditional finance and digital innovation.",
    aboutTitle: "What is IIC METAVERSE",
    aboutDescription: "At IIC METAVERSE, we combine blockchain, AI, and real-world business applications to create a borderless digital economy. Our solutions are designed to give businesses, investors, and communities the tools they need to thrive in a secure and scalable environment.",
    aboutBgImage: "",
    aboutMainImage: "../assests/images/Innovativesolutions.svg",
    financeFeatures: [
      { title: "Blockchain infrastructure", image: "/assests/images/blockchaininfa.svg" },
      { title: "Artificial intelligence", image: "assests/images/Artificialinte.svg" },
      { title: "Real-world asset tokenization", image: "/assests/images/Real-world-asset.svg" },
      { title: "Metaverse and digital services", image: "/assests/images/Metaverse-dig.svg" }
    ],
    financeBtnText: "learn more",
    financeBtnLink: "#",
    featuredCoinsBadge: "[ Featured Coins ]",
    featuredCoinsHeading: "A Balanced Digital Economy",
    featuredCoin1Title: "DINAAR — Gold-backed digital asset for stability",
    featuredCoin1Desc: "DINAAR Coin emphasizes stability, ethics, and Islamic financial innovation with real 24K Gold reserves. The value of one Dinaar coin equals to 1gm 24K gold.",
    featuredCoin1LinkText: "View Token Economy",
    featuredCoin1LinkUrl: "#",
    featuredCoin1Image: "/assests/images/Featured-Coins.svg",
    featuredCoin2Title: "SAYA — Utility token powering ecosystem activity",
    featuredCoin2Desc: "SAYA Coin focuses on technical supremacy and global blockchain scalability. Its a transaction and mineable coin on PoA Blockchain.",
    featuredCoin2LinkText: "View Token Economy",
    featuredCoin2LinkUrl: "#",
    featuredCoin2Image: "/assests/images/Featured-Coins-2.svg",
    techFeaturesBadge: "[ technology ]",
    techFeaturesHeading: "Built for Performance",
    techFeature1Icon: "",
    techFeature1Desc: "Layer 1 blockchain architecture",
    techFeature2Icon: "",
    techFeature2Desc: "~5-second transaction speed",
    techFeature3Icon: "",
    techFeature3Desc: "Low-cost, scalable infrastructure",
    techFeaturesBtnText: "Explore Technology",
    techFeaturesBtnLink: "/technology.html",
    whyUsBadge: "[ Why Us ]",
    whyUsHeading: "What Makes IIC METAVERSE Different",
    whyUsCard1Icon: "",
    whyUsCard1Title: "Hybrid Token Model",
    whyUsCard1Desc: "Balancing stability through asset-backed tokens and scalability through utility-driven assets",
    whyUsCard2Icon: "",
    whyUsCard2Title: "Real-World Asset Integration",
    whyUsCard2Desc: "Linking digital assets with tangible value such as gold and real estate",
    whyUsCard3Icon: "",
    whyUsCard3Title: "Advanced Technology Stack",
    whyUsCard3Desc: "Leveraging Layer 1 blockchain, AI systems, and smart contracts",
    whyUsCard4Icon: "",
    whyUsCard4Title: "Metaverse & Digital Services",
    whyUsCard4Desc: "Enabling immersive environments for commerce, interaction, and growth",
    globalImpactTitle: "Designed for Global Impact",
    globalImpactDesc: "With a strategic presence in Dubai and an international expansion roadmap, IIC METAVERSE is built to scale across markets and industries.",
    ctaTitle: "Step Into the Future",
    ctaDesc: "Join a new era of finance and technology powered by real-world value and digital innovation.",
    ctaPrimaryBtnText: "Get started",
    ctaPrimaryBtnLink: "#",
    ctaSecondaryBtnText: "Contact Us",
    ctaSecondaryBtnLink: "/contact-us.html",
    newsTopBadge: "Latest News",
    newsTitle: "Expert Articles, Trends & Valuable Insights",
    news1Badge: "Blockchain",
    news1Title: "Real Time Transparency in Blockchain: IIC Blockchain Explorer",
    news1AuthorName: "Robert Fox",
    news1AuthorRole: "Editor",
    news1Date: "March 18, 2025",
    news2Badge: "EVM",
    news2Title: "Why EVM Compatibility is Becoming the Backbone of Modern Blockchain Innovation",
    news2AuthorName: "Robert Fox",
    news2AuthorRole: "Editor",
    news2Date: "March 18, 2025",
    news3Badge: "Global Trade",
    news3Title: "Global Trade Update: Japan's Growing Role in Asia-Pacific Supply Chains",
    news3AuthorName: "Robert Fox",
    news3AuthorRole: "Editor",
    news3Date: "March 18, 2025"
  },
  about: {
    aboutHeroBadge: "About us",
    aboutHeroTitle: "Redefining the Future of Digital Economy",
    aboutHeroDescription: "IIC METAVERSE is a next-generation ecosystem designed to bridge blockchain technology with real-world value—creating a unified platform for finance, trade, and digital interaction.",
    galleryLeftImage: "/assests/images/about-banner-left.svg",
    galleryCenterImage: "/assests/images/about-banner-center.svg",
    galleryRightImage: "/assests/images/about-banner-right.svg",
    galleryTitle: "Who We Are",
    galleryParagraphs: [
      "<span>IIC METAVERSE</span> is a comprehensive digital ecosystem that integrates blockchain, artificial intelligence, and real-world asset tokenization into a single, scalable platform.",
      "Built to address the limitations of traditional financial and digital systems, <span>IIC METAVERSE</span> enables seamless interaction between virtual environments and tangible economic value.",
      "By combining advanced infrastructure with practical real-world applications, <span>IIC METAVERSE</span> is positioned to support the next phase of global digital transformation."
    ],
    visionHeading: "Our Core Vision",
    visionDescription: "To democratize finance through decentralization, combining blockchain security with real-world accessibility.",
    missionHeading: "Our Mission",
    missionDescription: "Building robust blockchain frameworks and AI-assisted financial rails to eliminate international transaction friction.",
    ecosystemTitle: "Backed by a Strong Ecosystem",
    ecosystemParagraphs: [
      "IIC METAVERSE operates within a broader international ecosystem supported by established financial and technological infrastructure.",
      "The platform is aligned with International Investment Consortium, a global organization with interests across finance, technology, and digital innovation.",
      "Financial and operational integration is further supported through International Investment Consortium Bank, which facilitates structured financial processes, compliance, and asset-backed mechanisms within the ecosystem.",
      "This institutional alignment ensures that IIC METAVERSE is built on a foundation of credibility, structure, and long-term vision."
    ],
    ecosystemImage: "/assests/images/Innovativesolutions.svg",
    ecosystemBgImage: "",

    // Leadership Defaults
    owner1Image: "/assests/images/ArshadMahmood.svg",
    owner1Badge: "[ Financial Leadership ]",
    owner1Name: "Dato Dr. Arshad Mahmood",
    owner1Paragraphs: [
      "Dato Dr. Arshad Mahmood stands as a visionary leader and driving force behind the growth and global expansion of the International Investment Consortium Inc. (IIC). As the Founder and Chairman of IIC, he has spearheaded transformative initiatives that transcend borders, positioning the consortium as a dynamic international platform for investment, finance, technology, and sustainable development. Under his leadership, IIC continues to expand its presence across multiple industries and regions, fostering innovation, strategic partnerships, and long-term economic growth.",
      "With a distinguished academic background that includes a Bachelor’s Degree in Economics, a Master’s Degree in Literature, and an Honorary Doctorate in Management Sciences from ACMIT USA, Dato Arshad exemplifies excellence, innovation, and forwardthinking leadership in every endeavor he undertakes.",
      "As the visionary founder of IIC, Dato Arshad champions an asset-based investment philosophy focused on leveraging tangible and sustainable resources to create long-term value and stability. His strategic approach to investment emphasizes resilience, responsible growth, and economic empowerment, enabling IIC to build impactful ventures that contribute meaningfully to communities and industries on a global scale."
    ],
    owner2Image: "/assests/images/Prof.Hironao.svg",
    owner2Badge: "[ Technology Leadership ]",
    owner2Name: "Prof. Hironao Takahashi, Ph.D.",
    owner2Paragraphs: [
      "Prof. Dr. Hironao Takahashi is an innovation-focused researcher with a PhD in Engineering from Tokyo Institute of Technology and an MOT from Tokyo University of Science. His PhD research focused on autonomous decentralized distributed system architecture with multiple node cache models (L3-only and L3/L4). He innovated the DTS (Data Transmission System) architecture for modern computer systems.",
      "He has held major academic and leadership roles including Visiting Professor at NUST SEECS, Professor at Jinnah University for Women, Professor and Director ORIC at Greenwich University, Associate Professor at DHA Suffa University, and Dean of Computer Science at Emaan Institute of Management and Science. He also contributed to supercomputer-domain engineering for more than ten years in Oregon and Silicon Valley, California, and worked on new computer architecture and radial BUS model design in the USA."
    ]
  },
  technology: {
    techHeroTitle: "Next-Gen Tech Infrastructure",
    techHeroDescription: "Deep dive into our highly secure smart contracts, AI trade optimizations, and custom cross-chain layers.",
    coreTechTitle: "Core Blockchain Capabilities",
    coreTechDescription: "Running on custom layer protocols to process up to 100,000 transactions per second with near-zero gas fees.",
    securityTitle: "Secured to the Core",
    securityDescription: "Audited multiple times by tier-1 security firms with integrated multi-sig parameters and real-time network monitors."
  },
  token: {
    tokenHeroTitle: "The Tokenomics Engine",
    tokenHeroDescription: "Explore how DINAAR and SAYA utility tokens drive transaction velocity, rewards, and staking pools.",
    tokenomicsTitle: "Dynamic Liquidity Systems",
    tokenomicsDescription: "Engineered with deflationary burn schedules and automated rewards to incentivize long-term network support.",
    supplyTotal: "1,000,000,000 DINAAR / SAYA",
    supplyDistribution: "50% Staking Rewards, 20% Ecosystem Development, 15% Public Sale, 10% Team, 5% Advisers"
  },
  contact: {
    contactHeroTopDescription:'Let’s Build the Future Together',
    contactHeroTitle: "Get in Touch",
    contactHeroDescription: "Have questions about integration or institutional partnerships? Our 24/7 technical team is here to assist.",
    supportEmail: "support@iic-metaverse.com",
    officeAddress: "Decentralized Hub Tower, Level 42, Singapore",
    telegramLink: "https://t.me/iicmetaverse",
    twitterLink: "https://twitter.com/iicmetaverse",
    discordLink: "https://discord.gg/iicmetaverse"
  }
};

// Initialize page events
document.querySelectorAll('.page-selector').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.page-selector').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activePage = btn.getAttribute('data-page');
    activeSectionFilter = 'all';

    // Update dashboard headers
    const pageNames = {
      home: 'Homepage',
      about: 'About Us Page',
      technology: 'Technology Page',
      token: 'Token Economy Page',
      contact: 'Contact Us Page'
    };
    activePageLabel.innerText = pageNames[activePage];

    // Refresh Sidebar sections list & load database values
    renderSectionFilters();
    fetchContent();
  });
});

// Render dynamic sub-sections inside the sidebar based on active page
function renderSectionFilters() {
  sectionsFilterContainer.innerHTML = '';
  const currentSections = PAGE_SECTIONS[activePage] || [];

  // Create "All Sections" filter
  const allItem = document.createElement('a');
  allItem.href = '#';
  allItem.className = 'menu-item active';
  allItem.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span>All Sections</span>`;
  allItem.addEventListener('click', (e) => {
    e.preventDefault();
    sectionsFilterContainer.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    allItem.classList.add('active');
    activeSectionFilter = 'all';
    updateSectionVisibility();
  });
  sectionsFilterContainer.appendChild(allItem);

  // Create individual filters
  currentSections.forEach(sec => {
    const item = document.createElement('a');
    item.href = '#';
    item.className = 'menu-item';
    item.innerHTML = `<i class="fa-solid ${sec.icon}"></i> <span>${sec.name}</span>`;
    item.addEventListener('click', (e) => {
      e.preventDefault();
      sectionsFilterContainer.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      activeSectionFilter = sec.id;
      updateSectionVisibility();
    });
    sectionsFilterContainer.appendChild(item);
  });

  updateSectionVisibility();
}

// Show/Hide sections in the form depending on page key and active section filter
function updateSectionVisibility() {
  const allSections = document.querySelectorAll('.section-block');

  allSections.forEach(sec => {
    // Check if section belongs to active page
    const belongsToPage = sec.classList.contains(`page-section-${activePage}`);

    if (!belongsToPage) {
      sec.classList.add('hidden-section');
      return;
    }

    // Check if matching specific section filter
    if (activeSectionFilter === 'all') {
      sec.classList.remove('hidden-section');
    } else {
      const secId = sec.getAttribute('id');
      if (secId === `sec-${activeSectionFilter}`) {
        sec.classList.remove('hidden-section');
      } else {
        sec.classList.add('hidden-section');
      }
    }
  });
}

// Image Preview Handler
function previewImage(input, previewId) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(previewId).src = e.target.result;
    };
    reader.readAsDataURL(file);

    // Reset matching remove hidden input if it exists
    const removeInputId = 'remove_' + input.id;
    const removeInput = document.getElementById(removeInputId);
    if (removeInput) {
      removeInput.value = 'false';
    }
  }
}

// Clear / Remove Image Handler
function clearImage(fileInputId, previewImgId, hiddenInputId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Clear file input value
  const fileInput = document.getElementById(fileInputId);
  if (fileInput) fileInput.value = '';

  // Set preview image to transparent SVG placeholder
  const previewImg = document.getElementById(previewImgId);
  if (previewImg) {
    previewImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23222"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23555" font-size="10">No Image</text></svg>';
  }

  // Mark hidden input for removal
  const hiddenInput = document.getElementById(hiddenInputId);
  if (hiddenInput) {
    hiddenInput.value = 'true';
  }
}

// Fetch active page data from Node Express Server
async function fetchContent() {
  try {
    const response = await fetch(`/api/content/${activePage}`);
    if (!response.ok) throw new Error('API server unreachable');
    const resData = await response.json();

    if (resData.success && resData.data) {
      populateForm(resData.data);
    } else {
      showToast('Error', `Could not fetch database records for page key "${activePage}".`, true);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    showToast('Offline Mode', `Showing default static templates for "${activePage}".`, true);
    populateForm(DEFAULT_VALUES[activePage]);
  }
}

// Populate page-specific input elements
function populateForm(data) {
  // Clear file inputs
  document.getElementById('dinaarImage').value = '';
  document.getElementById('sayaImage').value = '';
  document.getElementById('aboutBgImage').value = '';
  document.getElementById('aboutMainImage').value = '';
  document.getElementById('featuredCoin1Image').value = '';
  document.getElementById('featuredCoin2Image').value = '';
  document.getElementById('techFeature1Icon').value = '';
  document.getElementById('techFeature2Icon').value = '';
  document.getElementById('techFeature3Icon').value = '';
  document.getElementById('whyUsCard1Icon').value = '';
  document.getElementById('whyUsCard2Icon').value = '';
  document.getElementById('whyUsCard3Icon').value = '';
  document.getElementById('whyUsCard4Icon').value = '';
  document.getElementById('ctaTopRightImage').value = '';
  document.getElementById('ctaBottomLeftImage').value = '';
  document.getElementById('ctaCenterImage').value = '';
  document.getElementById('ctaBackgroundImage').value = '';
  document.getElementById('news1Image').value = '';
  document.getElementById('news1AuthorImage').value = '';
  document.getElementById('news2AuthorImage').value = '';
  document.getElementById('news3AuthorImage').value = '';
  document.getElementById('visionImage').value = '';
  document.getElementById('missionImage').value = '';
  document.getElementById('ecosystemImage').value = '';
  document.getElementById('ecosystemBgImage').value = '';
  for (let i = 0; i < 4; i++) {
    document.getElementById(`featureImage${i}`).value = '';
  }

  // Reset all remove image flags to false
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
    const el = document.getElementById(flag);
    if (el) el.value = 'false';
  });

  // 1. Homepage Inputs
  if (activePage === 'home') {
    document.getElementById('heroTopHeader').value = data.heroTopHeader || '';
    document.getElementById('heroTitle').value = data.heroTitle || '';
    document.getElementById('heroDescription').value = data.heroDescription || '';
    document.getElementById('heroPrimaryBtnText').value = data.heroPrimaryBtnText || '';
    document.getElementById('heroSecondaryBtnText').value = data.heroSecondaryBtnText || '';

    // Render dynamic ticker coins list row manager
    renderTickerCoinsEditor(data.tickerCoins || DEFAULT_VALUES.home.tickerCoins);

    document.getElementById('dinaarTitle').value = data.dinaarTitle || '';
    document.getElementById('dinaarPrice').value = data.dinaarPrice || '';
    document.getElementById('dinaar-preview-img').src = data.dinaarImage || '/assests/images/dinnar.png';
    document.getElementById('sayaTitle').value = data.sayaTitle || '';
    document.getElementById('sayaPrice').value = data.sayaPrice || '';
    document.getElementById('saya-preview-img').src = data.sayaImage || '/assests/images/saya.png';
    document.getElementById('financeHeading').value = data.financeHeading || '';
    document.getElementById('financeBadge').value = data.financeBadge || '';
    document.getElementById('financeDescription').value = data.financeDescription || '';
    document.getElementById('aboutTitle').value = data.aboutTitle || '';
    document.getElementById('aboutDescription').value = data.aboutDescription || '';

    // Set background & main images preview
    document.getElementById('aboutBgImage-preview').src = data.aboutBgImage || '';
    document.getElementById('aboutMainImage-preview').src = data.aboutMainImage || '';

    // Featured Coins Detail inputs
    document.getElementById('featuredCoinsBadge').value = data.featuredCoinsBadge || '';
    document.getElementById('featuredCoinsHeading').value = data.featuredCoinsHeading || '';

    document.getElementById('featuredCoin1Title').value = data.featuredCoin1Title || '';
    document.getElementById('featuredCoin1Desc').value = data.featuredCoin1Desc || '';
    document.getElementById('featuredCoin1LinkText').value = data.featuredCoin1LinkText || '';
    document.getElementById('featuredCoin1LinkUrl').value = data.featuredCoin1LinkUrl || '';
    document.getElementById('featuredCoin1Image-preview').src = data.featuredCoin1Image || '';

    document.getElementById('featuredCoin2Title').value = data.featuredCoin2Title || '';
    document.getElementById('featuredCoin2Desc').value = data.featuredCoin2Desc || '';
    document.getElementById('featuredCoin2LinkText').value = data.featuredCoin2LinkText || '';
    document.getElementById('featuredCoin2LinkUrl').value = data.featuredCoin2LinkUrl || '';
    document.getElementById('featuredCoin2Image-preview').src = data.featuredCoin2Image || '';

    // Technology Stack features
    document.getElementById('techFeaturesBadge').value = data.techFeaturesBadge || '';
    document.getElementById('techFeaturesHeading').value = data.techFeaturesHeading || '';

    document.getElementById('techFeature1Desc').value = data.techFeature1Desc || '';
    document.getElementById('techFeature1Icon-preview').src = data.techFeature1Icon || '';

    document.getElementById('techFeature2Desc').value = data.techFeature2Desc || '';
    document.getElementById('techFeature2Icon-preview').src = data.techFeature2Icon || '';

    document.getElementById('techFeature3Desc').value = data.techFeature3Desc || '';
    document.getElementById('techFeature3Icon-preview').src = data.techFeature3Icon || '';

    document.getElementById('techFeaturesBtnText').value = data.techFeaturesBtnText || '';
    document.getElementById('techFeaturesBtnLink').value = data.techFeaturesBtnLink || '';

    // Why Us features
    document.getElementById('whyUsBadge').value = data.whyUsBadge || '';
    document.getElementById('whyUsHeading').value = data.whyUsHeading || '';

    document.getElementById('whyUsCard1Title').value = data.whyUsCard1Title || '';
    document.getElementById('whyUsCard1Desc').value = data.whyUsCard1Desc || '';
    document.getElementById('whyUsCard1Icon-preview').src = data.whyUsCard1Icon || '';

    document.getElementById('whyUsCard2Title').value = data.whyUsCard2Title || '';
    document.getElementById('whyUsCard2Desc').value = data.whyUsCard2Desc || '';
    document.getElementById('whyUsCard2Icon-preview').src = data.whyUsCard2Icon || '';

    document.getElementById('whyUsCard3Title').value = data.whyUsCard3Title || '';
    document.getElementById('whyUsCard3Desc').value = data.whyUsCard3Desc || '';
    document.getElementById('whyUsCard3Icon-preview').src = data.whyUsCard3Icon || '';

    document.getElementById('whyUsCard4Title').value = data.whyUsCard4Title || '';
    document.getElementById('whyUsCard4Desc').value = data.whyUsCard4Desc || '';
    document.getElementById('whyUsCard4Icon-preview').src = data.whyUsCard4Icon || '';

    // Global Impact section
    document.getElementById('globalImpactTitle').value = data.globalImpactTitle || '';
    document.getElementById('globalImpactDesc').value = data.globalImpactDesc || '';

    // CTA section
    document.getElementById('ctaTitle').value = data.ctaTitle || '';
    document.getElementById('ctaDesc').value = data.ctaDesc || '';
    document.getElementById('ctaPrimaryBtnText').value = data.ctaPrimaryBtnText || '';
    document.getElementById('ctaPrimaryBtnLink').value = data.ctaPrimaryBtnLink || '';
    document.getElementById('ctaSecondaryBtnText').value = data.ctaSecondaryBtnText || '';
    document.getElementById('ctaSecondaryBtnLink').value = data.ctaSecondaryBtnLink || '';

    document.getElementById('ctaTopRightImage-preview').src = data.ctaTopRightImage || '';
    document.getElementById('ctaBottomLeftImage-preview').src = data.ctaBottomLeftImage || '';
    document.getElementById('ctaCenterImage-preview').src = data.ctaCenterImage || '';
    document.getElementById('ctaBackgroundImage-preview').src = data.ctaBackgroundImage || '';

    // News section
    document.getElementById('newsTopBadge').value = data.newsTopBadge || '';
    document.getElementById('newsTitle').value = data.newsTitle || '';

    document.getElementById('news1Badge').value = data.news1Badge || '';
    document.getElementById('news1Title').value = data.news1Title || '';
    document.getElementById('news1AuthorName').value = data.news1AuthorName || '';
    document.getElementById('news1AuthorRole').value = data.news1AuthorRole || '';
    document.getElementById('news1Date').value = data.news1Date || '';
    document.getElementById('news1Image-preview').src = data.news1Image || '';
    document.getElementById('news1AuthorImage-preview').src = data.news1AuthorImage || '';

    document.getElementById('news2Badge').value = data.news2Badge || '';
    document.getElementById('news2Title').value = data.news2Title || '';
    document.getElementById('news2AuthorName').value = data.news2AuthorName || '';
    document.getElementById('news2AuthorRole').value = data.news2AuthorRole || '';
    document.getElementById('news2Date').value = data.news2Date || '';
    document.getElementById('news2AuthorImage-preview').src = data.news2AuthorImage || '';

    document.getElementById('news3Badge').value = data.news3Badge || '';
    document.getElementById('news3Title').value = data.news3Title || '';
    document.getElementById('news3AuthorName').value = data.news3AuthorName || '';
    document.getElementById('news3AuthorRole').value = data.news3AuthorRole || '';
    document.getElementById('news3Date').value = data.news3Date || '';
    document.getElementById('news3AuthorImage-preview').src = data.news3AuthorImage || '';

    document.getElementById('techFeaturesBtnLink').value = data.techFeaturesBtnLink || '';

    // Populate 4 feature cards
    if (data.financeFeatures && data.financeFeatures.length >= 4) {
      for (let i = 0; i < 4; i++) {
        const card = data.financeFeatures[i];
        document.getElementById(`featureTitle${i}`).value = card.title || '';
        document.getElementById(`featureImage${i}-preview`).src = card.image || '';
      }
    } else {
      // Seeds empty previews if missing
      for (let i = 0; i < 4; i++) {
        document.getElementById(`featureTitle${i}`).value = '';
        document.getElementById(`featureImage${i}-preview`).src = '';
      }
    }

    document.getElementById('financeBtnText').value = data.financeBtnText || '';
    document.getElementById('financeBtnLink').value = data.financeBtnLink || '';
  }

  // 2. About Us Inputs
  else if (activePage === 'about') {
    document.getElementById('aboutHeroBadge').value = data.aboutHeroBadge || '';
    document.getElementById('aboutHeroTitle').value = data.aboutHeroTitle || '';
    document.getElementById('aboutHeroDescription').value = data.aboutHeroDescription || '';

    // Gallery Image Previews
    document.getElementById('galleryLeftImage-preview').src = data.galleryLeftImage || '';
    document.getElementById('galleryCenterImage-preview').src = data.galleryCenterImage || '';
    document.getElementById('galleryRightImage-preview').src = data.galleryRightImage || '';

    // Reset flags
    document.getElementById('remove_galleryLeftImage').value = 'false';
    document.getElementById('remove_galleryCenterImage').value = 'false';
    document.getElementById('remove_galleryRightImage').value = 'false';

    // Gallery Title
    document.getElementById('galleryTitle').value = data.galleryTitle || '';

    // Gallery Paragraphs Editor
    renderGalleryParagraphsEditor(data.galleryParagraphs || []);

    // Owner Previews & Data
    document.getElementById('owner1Image-preview').src = data.owner1Image || '';
    document.getElementById('owner2Image-preview').src = data.owner2Image || '';

    document.getElementById('remove_owner1Image').value = 'false';
    document.getElementById('remove_owner2Image').value = 'false';

    document.getElementById('owner1Badge').value = data.owner1Badge || '';
    document.getElementById('owner1Name').value = data.owner1Name || '';
    document.getElementById('owner2Badge').value = data.owner2Badge || '';
    document.getElementById('owner2Name').value = data.owner2Name || '';

    // Owner Dynamic Paragraph editors
    renderOwner1ParagraphsEditor(data.owner1Paragraphs || []);
    renderOwner2ParagraphsEditor(data.owner2Paragraphs || []);

    document.getElementById('visionImage-preview').src = data.visionImage || '';
    document.getElementById('missionImage-preview').src = data.missionImage || '';

    document.getElementById('remove_visionImage').value = 'false';
    document.getElementById('remove_missionImage').value = 'false';

    document.getElementById('visionHeading').value = data.visionHeading || '';
    document.getElementById('visionDescription').value = data.visionDescription || '';
    document.getElementById('missionHeading').value = data.missionHeading || '';
    document.getElementById('missionDescription').value = data.missionDescription || '';

    document.getElementById('ecosystemTitle').value = data.ecosystemTitle || '';
    document.getElementById('ecosystemImage-preview').src = data.ecosystemImage || '';
    document.getElementById('ecosystemBgImage-preview').src = data.ecosystemBgImage || '';
    document.getElementById('remove_ecosystemImage').value = 'false';
    document.getElementById('remove_ecosystemBgImage').value = 'false';
    renderEcosystemParagraphsEditor(data.ecosystemParagraphs || []);

    document.getElementById('spotlightTitle').value = data.spotlightTitle || '';
    renderSpotlightParagraphsEditor(data.spotlightParagraphs || []);
    document.getElementById('spotlightPrimaryBtnText').value = data.ctaPrimaryBtnText || '';
    document.getElementById('spotlightPrimaryBtnLink').value = data.ctaPrimaryBtnLink || '';
    document.getElementById('spotlightSecondaryBtnText').value = data.ctaSecondaryBtnText || '';
    document.getElementById('spotlightSecondaryBtnLink').value = data.ctaSecondaryBtnLink || '';

    // document.getElementById('spotlightTopIcon-preview').src = data.spotlightTopIcon || '';

    // Metaverse Image
    // document.getElementById('spotlightLetter1Image-preview').src = data.spotlightLetter1Image || '';
    // document.getElementById('spotlightLetter2Image-preview').src = data.spotlightLetter2Image || '';
    // document.getElementById('spotlightLetter3Image-preview').src = data.spotlightLetter3Image || '';
    // document.getElementById('spotlightLetter4Image-preview').src = data.spotlightLetter4Image || '';
    // document.getElementById('spotlightLetter5Image-preview').src = data.spotlightLetter5Image || '';
    // document.getElementById('spotlightLetter6Image-preview').src = data.spotlightLetter6Image || '';
    // document.getElementById('spotlightLetter7Image-preview').src = data.spotlightLetter7Image || '';
    // document.getElementById('spotlightLetter8Image-preview').src = data.spotlightLetter8Image || '';
    // document.getElementById('spotlightLetter9Image-preview').src = data.spotlightLetter9Image || '';

  }

  // 3. Technology Inputs
  else if (activePage === 'technology') {
    document.getElementById('techHeroTitle').value = data.techHeroTitle || '';
    document.getElementById('techHeroDescription').value = data.techHeroDescription || '';
    document.getElementById('coreTechTitle').value = data.coreTechTitle || '';
    document.getElementById('coreTechDescription').value = data.coreTechDescription || '';
    document.getElementById('securityTitle').value = data.securityTitle || '';
    document.getElementById('securityDescription').value = data.securityDescription || '';
  }

  // 4. Token Economy Inputs
  else if (activePage === 'token') {
    document.getElementById('tokenHeroTitle').value = data.tokenHeroTitle || '';
    document.getElementById('tokenHeroDescription').value = data.tokenHeroDescription || '';
    document.getElementById('tokenomicsTitle').value = data.tokenomicsTitle || '';
    document.getElementById('tokenomicsDescription').value = data.tokenomicsDescription || '';
    document.getElementById('supplyTotal').value = data.supplyTotal || '';
    document.getElementById('supplyDistribution').value = data.supplyDistribution || '';
  }

  // 5. Contact Us Inputs
  else if (activePage === 'contact') {
    document.getElementById('contactHeroTitle').value = data.contactHeroTitle || '';
    document.getElementById('contactHeroDescription').value = data.contactHeroDescription || '';
    document.getElementById('contactHeroTopDescription').value = data.contactHeroTopDescription || '';
    document.getElementById('supportEmail').value = data.supportEmail || '';
    document.getElementById('officeAddress').value = data.officeAddress || '';
    document.getElementById('telegramLink').value = data.telegramLink || '';
    document.getElementById('twitterLink').value = data.twitterLink || '';
    document.getElementById('discordLink').value = data.discordLink || '';
  }
}

// Handle Save Updates (packs only the currently active page input values!)
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  btnSave.disabled = true;
  btnSave.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Syncing in database...';

  const formData = new FormData();
  // Map page values selectively based on active page selection
  if (activePage === 'home') {
    formData.append('heroTopHeader', document.getElementById('heroTopHeader').value);
    formData.append('heroTitle', document.getElementById('heroTitle').value);
    formData.append('heroDescription', document.getElementById('heroDescription').value);
    formData.append('heroPrimaryBtnText', document.getElementById('heroPrimaryBtnText').value);
    formData.append('heroSecondaryBtnText', document.getElementById('heroSecondaryBtnText').value);

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
  }

  else if (activePage === 'about') {
    formData.append('aboutHeroBadge', document.getElementById('aboutHeroBadge').value);
    formData.append('aboutHeroTitle', document.getElementById('aboutHeroTitle').value);
    formData.append('aboutHeroDescription', document.getElementById('aboutHeroDescription').value);

    // Gallery Title
    formData.append('galleryTitle', document.getElementById('galleryTitle').value);

    // Gallery Files
    const leftFile = document.getElementById('galleryLeftImage').files[0];
    if (leftFile) formData.append('galleryLeftImage', leftFile);

    const centerFile = document.getElementById('galleryCenterImage').files[0];
    if (centerFile) formData.append('galleryCenterImage', centerFile);

    const rightFile = document.getElementById('galleryRightImage').files[0];
    if (rightFile) formData.append('galleryRightImage', rightFile);

    // Gallery Paragraphs serialization
    const paragraphs = [];
    document.querySelectorAll('.gallery-paragraph-textarea').forEach(textarea => {
      paragraphs.push(textarea.value);
    });
    formData.append('galleryParagraphs', JSON.stringify(paragraphs));

    // Gallery Image Remove hidden flags
    formData.append('remove_galleryLeftImage', document.getElementById('remove_galleryLeftImage').value);
    formData.append('remove_galleryCenterImage', document.getElementById('remove_galleryCenterImage').value);
    formData.append('remove_galleryRightImage', document.getElementById('remove_galleryRightImage').value);

    // Leadership Fields (Owner 1 & Owner 2)
    formData.append('owner1Badge', document.getElementById('owner1Badge').value);
    formData.append('owner1Name', document.getElementById('owner1Name').value);
    formData.append('owner2Badge', document.getElementById('owner2Badge').value);
    formData.append('owner2Name', document.getElementById('owner2Name').value);

    // Owner File Uploads
    const o1File = document.getElementById('owner1Image').files[0];
    if (o1File) formData.append('owner1Image', o1File);

    const o2File = document.getElementById('owner2Image').files[0];
    if (o2File) formData.append('owner2Image', o2File);

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
    formData.append('remove_owner1Image', document.getElementById('remove_owner1Image').value);
    formData.append('remove_owner2Image', document.getElementById('remove_owner2Image').value);

    const visionFile = document.getElementById('visionImage').files[0];
    if (visionFile) formData.append('visionImage', visionFile);
    const missionFile = document.getElementById('missionImage').files[0];
    if (missionFile) formData.append('missionImage', missionFile);

    const ecosystemImg = document.getElementById('ecosystemImage').files[0];
    if (ecosystemImg) formData.append('ecosystemImage', ecosystemImg);
    const ecosystemBg = document.getElementById('ecosystemBgImage').files[0];
    if (ecosystemBg) formData.append('ecosystemBgImage', ecosystemBg);

    formData.append('remove_visionImage', document.getElementById('remove_visionImage').value);
    formData.append('remove_missionImage', document.getElementById('remove_missionImage').value);
    formData.append('remove_ecosystemImage', document.getElementById('remove_ecosystemImage').value);
    formData.append('remove_ecosystemBgImage', document.getElementById('remove_ecosystemBgImage').value);

    formData.append('remove_spotlightTopIcon', document.getElementById('remove_spotlightTopIcon').value);
    formData.append('remove_spotlightShapeImage', document.getElementById('remove_spotlightShapeImage').value);
    formData.append('remove_spotlightBgImage', document.getElementById('remove_spotlightBgImage').value);
    for (let i = 1; i <= 9; i++) {
      formData.append('remove_spotlightLetter' + i + 'Image', document.getElementById('remove_spotlightLetter' + i + 'Image').value);
    }

    formData.append('visionHeading', document.getElementById('visionHeading').value);
    formData.append('visionDescription', document.getElementById('visionDescription').value);
    formData.append('missionHeading', document.getElementById('missionHeading').value);
    formData.append('missionDescription', document.getElementById('missionDescription').value);

    formData.append('ecosystemTitle', document.getElementById('ecosystemTitle').value);

    const ecosystemParagraphs = [];
    document.querySelectorAll('.ecosystem-paragraph-textarea').forEach(textarea => {
      ecosystemParagraphs.push(textarea.value);
    });
    formData.append('ecosystemParagraphs', JSON.stringify(ecosystemParagraphs));

    const sTopIcon = document.getElementById('spotlightTopIcon').files[0];
    if (sTopIcon) formData.append('spotlightTopIcon', sTopIcon);
    const sShape = document.getElementById('spotlightShapeImage').files[0];
    if (sShape) formData.append('spotlightShapeImage', sShape);
    const sBg = document.getElementById('spotlightBgImage').files[0];
    if (sBg) formData.append('spotlightBgImage', sBg);
    for (let i = 1; i <= 9; i++) {
      const sLet = document.getElementById('spotlightLetter' + i + 'Image').files[0];
      if (sLet) formData.append('spotlightLetter' + i + 'Image', sLet);
    }

    formData.append('spotlightTitle', document.getElementById('spotlightTitle').value);

    formData.append('spotlightPrimaryBtnText', document.getElementById('spotlightPrimaryBtnText').value);
    formData.append('spotlightPrimaryBtnLink', document.getElementById('spotlightPrimaryBtnLink').value);
    formData.append('spotlightSecondaryBtnText', document.getElementById('spotlightSecondaryBtnText').value);
    formData.append('spotlightSecondaryBtnLink', document.getElementById('spotlightSecondaryBtnLink').value);

    const spotlightParagraphs = [];
    document.querySelectorAll('.spotlight-paragraph-textarea').forEach(textarea => {
      spotlightParagraphs.push(textarea.value);
    });
    formData.append('spotlightParagraphs', JSON.stringify(spotlightParagraphs));

    // formData.append('teamDescription', document.getElementById('teamDescription').value);
  }

  else if (activePage === 'technology') {
    formData.append('techHeroTitle', document.getElementById('techHeroTitle').value);
    formData.append('techHeroDescription', document.getElementById('techHeroDescription').value);
    formData.append('coreTechTitle', document.getElementById('coreTechTitle').value);
    formData.append('coreTechDescription', document.getElementById('coreTechDescription').value);
    formData.append('securityTitle', document.getElementById('securityTitle').value);
    formData.append('securityDescription', document.getElementById('securityDescription').value);
  }

  else if (activePage === 'token') {
    formData.append('tokenHeroTitle', document.getElementById('tokenHeroTitle').value);
    formData.append('tokenHeroDescription', document.getElementById('tokenHeroDescription').value);
    formData.append('tokenomicsTitle', document.getElementById('tokenomicsTitle').value);
    formData.append('tokenomicsDescription', document.getElementById('tokenomicsDescription').value);
    formData.append('supplyTotal', document.getElementById('supplyTotal').value);
    formData.append('supplyDistribution', document.getElementById('supplyDistribution').value);
  }

  else if (activePage === 'contact') {
    formData.append('contactHeroTitle', document.getElementById('contactHeroTitle').value);
    formData.append('contactHeroDescription', document.getElementById('contactHeroDescription').value);
    formData.append('contactHeroTopDescription', document.getElementById('contactHeroTopDescription').value);
    formData.append('supportEmail', document.getElementById('supportEmail').value);
    formData.append('officeAddress', document.getElementById('officeAddress').value);
    formData.append('telegramLink', document.getElementById('telegramLink').value);
    formData.append('twitterLink', document.getElementById('twitterLink').value);
    formData.append('discordLink', document.getElementById('discordLink').value);
  }

  try {
    const response = await fetch(`/api/content/${activePage}`, {
      method: 'POST',
      body: formData
    });

    const resData = await response.json();

    if (response.ok && resData.success) {
      showToast('Page Synced', `Changes for page "${activePage.toUpperCase()}" have successfully written to MongoDB.`, false);
      populateForm(resData.data);
    } else {
      throw new Error(resData.error || 'Server error.');
    }
  } catch (error) {
    console.error('Update error:', error);
    showToast('Save Blocked', error.message || 'Check local MongoDB connections.', true);
  } finally {
    btnSave.disabled = false;
    btnSave.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save Console Configuration';
  }
});

// Reset Button triggers Active page Defaults
btnReset.addEventListener('click', () => {
  if (confirm(`Reset the active "${activePage.toUpperCase()}" fields back to initial values? (MongoDB remains unchanged until you save)`)) {
    populateForm(DEFAULT_VALUES[activePage]);
    showToast('Defaults Loaded', `Default fields loaded for "${activePage.toUpperCase()}". Click save to commit.`, false);
  }
});

// Toast system helpers
let toastTimeout;
function showToast(title, msg, isError = false) {
  clearTimeout(toastTimeout);

  toastTitle.innerText = title;
  toastMsg.innerText = msg;

  if (isError) {
    toastEl.classList.add('error');
  } else {
    toastEl.classList.remove('error');
  }

  toastEl.classList.remove('hidden');

  toastTimeout = setTimeout(() => {
    hideToast();
  }, 5000);
}

function hideToast() {
  toastEl.classList.add('hidden');
}

// Initial triggers
window.addEventListener('DOMContentLoaded', () => {
  renderSectionFilters();
  fetchContent();
});

// Expose preview global functions
window.previewImage = previewImage;
window.hideToast = hideToast;
window.fetchContent = fetchContent;

// Render Dynamic Ticker Coins Editor Rows
function renderTickerCoinsEditor(coins) {
  const container = document.getElementById('ticker-coins-container');
  if (!container) return;

  container.innerHTML = '';

  if (!coins || coins.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No coins in marquee. Click "Add Dynamic Coin" to start!</div>`;
    return;
  }

  coins.forEach(coin => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-symbol" placeholder="Symbol (e.g. BTC)" value="${coin.symbol || ''}" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-name" placeholder="Name (e.g. Bitcoin)" value="${coin.name || ''}" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-price" placeholder="Price" value="${coin.price || ''}" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-change" placeholder="24h Change" value="${coin.change || ''}" required>
      </div>
      <button type="button" class="btn-delete-row" onclick="deleteTickerRow(this)" title="Delete Coin">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty coin row to active editor
function addNewTickerRow() {
  const container = document.getElementById('ticker-coins-container');
  if (!container) return;

  // Clear empty state text if present
  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-symbol" placeholder="Symbol" required>
    </div>
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-name" placeholder="Name" required>
    </div>
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-price" placeholder="Price" required>
    </div>
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-change" placeholder="24h Change" required>
    </div>
    <button type="button" class="btn-delete-row" onclick="deleteTickerRow(this)" title="Delete Coin">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete coin row from DOM
function deleteTickerRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('ticker-coins-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No coins in marquee. Click "Add Dynamic Coin" to start!</div>`;
    }
  }
}

// Expose ticker editor functions globally
window.renderTickerCoinsEditor = renderTickerCoinsEditor;
window.addNewTickerRow = addNewTickerRow;
window.deleteTickerRow = deleteTickerRow;

// Render Dynamic Gallery Paragraphs Editor Rows
function renderGalleryParagraphsEditor(paragraphs) {
  const container = document.getElementById('gallery-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="gallery-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty paragraph row
function addNewParagraphRow() {
  const container = document.getElementById('gallery-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="gallery-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete paragraph row
function deleteParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('gallery-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

// Expose functions globally
window.renderGalleryParagraphsEditor = renderGalleryParagraphsEditor;
window.addNewParagraphRow = addNewParagraphRow;
window.deleteParagraphRow = deleteParagraphRow;

// Render Dynamic Owner 1 Paragraphs Editor Rows
function renderOwner1ParagraphsEditor(paragraphs) {
  const container = document.getElementById('owner1-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="owner1-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteOwner1ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty Owner 1 paragraph row
function addNewOwner1ParagraphRow() {
  const container = document.getElementById('owner1-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="owner1-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteOwner1ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete Owner 1 paragraph row
function deleteOwner1ParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('owner1-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

// Render Dynamic Owner 2 Paragraphs Editor Rows
function renderOwner2ParagraphsEditor(paragraphs) {
  const container = document.getElementById('owner2-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="owner2-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteOwner2ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty Owner 2 paragraph row
function addNewOwner2ParagraphRow() {
  const container = document.getElementById('owner2-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="owner2-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteOwner2ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete Owner 2 paragraph row
function deleteOwner2ParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('owner2-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

// Expose owner functions globally
window.renderOwner1ParagraphsEditor = renderOwner1ParagraphsEditor;
window.addNewOwner1ParagraphRow = addNewOwner1ParagraphRow;
window.deleteOwner1ParagraphRow = deleteOwner1ParagraphRow;
window.renderOwner2ParagraphsEditor = renderOwner2ParagraphsEditor;
window.addNewOwner2ParagraphRow = addNewOwner2ParagraphRow;
window.deleteOwner2ParagraphRow = deleteOwner2ParagraphRow;

// Render Ecosystem Paragraphs
function renderEcosystemParagraphsEditor(paragraphs) {
  const container = document.getElementById('ecosystem-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="ecosystem-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteEcosystemParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

function addNewEcosystemParagraphRow() {
  const container = document.getElementById('ecosystem-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="ecosystem-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteEcosystemParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

function deleteEcosystemParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('ecosystem-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

window.renderEcosystemParagraphsEditor = renderEcosystemParagraphsEditor;
window.addNewEcosystemParagraphRow = addNewEcosystemParagraphRow;
window.deleteEcosystemParagraphRow = deleteEcosystemParagraphRow;


// Render Spotlight Paragraphs
function renderSpotlightParagraphsEditor(paragraphs) {
  const container = document.getElementById('spotlight-paragraphs-container');
  if (!container) return;
  container.innerHTML = '';
  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>';
    return;
  }
  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required>" + text + "</textarea></div><button type='button' class='btn btn-danger' onclick='deleteSpotlightParagraphRow(this)' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-trash-can'></i></button>";
    container.appendChild(row);
  });
}

function addNewSpotlightParagraphRow() {
  const container = document.getElementById('spotlight-paragraphs-container');
  if (!container) return;
  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }
  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required></textarea></div><button type='button' class='btn btn-danger' onclick='deleteSpotlightParagraphRow(this)' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-trash-can'></i></button>";
  container.appendChild(row);
}

function deleteSpotlightParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('spotlight-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>';
    }
  }
}

window.renderSpotlightParagraphsEditor = renderSpotlightParagraphsEditor;
window.addNewSpotlightParagraphRow = addNewSpotlightParagraphRow;
window.deleteSpotlightParagraphRow = deleteSpotlightParagraphRow;
