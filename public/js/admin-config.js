// Active Page State
// Dynamically inferred from the currently active sidebar link (which is statically set per HTML file)
let activePage = document.querySelector('.page-selector.active') ? document.querySelector('.page-selector.active').dataset.page : 'home';
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
    { id: 'tech-card-1', name: 'Tech Hero Card 1', icon: 'fa-square-poll-vertical' },
    { id: 'tech-card-2', name: 'Tech Hero Card 2', icon: 'fa-square-poll-vertical' },
    { id: 'tech-card-3', name: 'Tech Hero Card 3', icon: 'fa-square-poll-vertical' },
    { id: 'tech-consensus', name: 'Consensus Mechanism', icon: 'fa-square-poll-vertical' },
    { id: 'tech-smart-contracts', name: 'Smart Contracts', icon: 'fa-square-poll-vertical' },
    { id: 'tech-slides', name: 'Tech Slides', icon: 'fa-layer-group' },
    { id: 'tech-security', name: 'Tech Security', icon: 'fa-shield-halved' },
    { id: 'tech-cost', name: 'Cost Efficiency', icon: 'fa-money-bill-trend-up' },
    { id: 'tech-transparency', name: 'Transparency', icon: 'fa-magnifying-glass-chart' },
    { id: 'tech-competitive', name: 'Competitive Adv.', icon: 'fa-trophy' },
    { id: 'tech-future', name: 'Built for Future', icon: 'fa-rocket' }
  ],
  token: [
    { id: 'token-hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'tokenomics', name: 'Token Distribution', icon: 'fa-chart-pie' }
  ],
  contact: [
    { id: 'contact-hero', name: 'Hero Banner', icon: 'fa-circle-play' },
    { id: 'contact-global', name: 'Global Presence', icon: 'fa-earth-americas' },
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
    heroPrimaryBtnLink: "#",
    heroSecondaryBtnText: "Get started",
    heroSecondaryBtnLink: "#",
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
    techHeroTopTitle: "Engineered for the Next Generation of Digital Economy",
    techHeroTitle: "Next-Gen Tech Infrastructure",
    techHeroDescription: "Deep dive into our highly secure smart contracts, AI trade optimizations, and custom cross-chain layers.",
  },
  token: {
    tokenHeroTitle: "The Tokenomics Engine",
    tokenHeroDescription: "Explore how DINAAR and SAYA utility tokens drive transaction velocity, rewards, and staking pools.",    
  },
  contact: {
    contactHeroTopDescription:'Let’s Build the Future Together',
    contactHeroTitle: "Get in Touch",
    contactHeroDescription: "Have questions about integration or institutional partnerships? Our 24/7 technical team is here to assist.",
    contactGlobalBadge: "[ WHERE WE ARE? ]",
    contactGlobalTitle: "Our Global Presence",
    contactGlobalParagraphs: [
      "IIC METAVERSE operates as part of an international ecosystem with a strategic presence in key global markets.",
      "Primary coordination and operations are supported through Dubai, enabling regional and international engagement."
    ],
    contacthelpTitle: "We’re Here to Help",
    contacthelpParagraphs: [
      "For inquiries related to investments, partnerships, platform access, or general information, please reach out to the appropriate channel below.",
      "Our team is committed to responding promptly and providing the support you need."
    ],
    contacthelpImage: "/assests/images/Innovativesolutions.svg",
    contacthelpBgImage: "",

    ContactCard1Icon: "",
    ContactCard1Title: "General Inquiries",
    ContactCard1Desc: "For general questions about the IIC METAVERSE ecosystem:",
    ContactCard1Email: "info@iiccrypto.com",

    ContactCard2Icon: "",
    ContactCard2Title: "General Inquiries",
    ContactCard2Desc: "For general questions about the IIC METAVERSE ecosystem:",
    ContactCard2Email: "info@iiccrypto.com",
    
    // telegramLink: "https://t.me/iicmetaverse",
    // twitterLink: "https://twitter.com/iicmetaverse",
    // discordLink: "https://discord.gg/iicmetaverse"
  }
};


