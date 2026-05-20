const mongoose = require('mongoose');

const tickerCoinSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  change: { type: String, required: true }
});

const featureCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }
});

const pageContentSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // 'home', 'about', 'technology', 'token', 'contact'
  
  // 1. Homepage Fields
  heroTopHeader: { type: String, default: "Where Virtual Innovation Meets Real-World Value" },
  heroTitle: { type: String, default: "The Future of Digital Economy Starts Here" },
  heroDescription: { type: String, default: "A next-generation ecosystem combining blockchain, AI, and real-world assets to transform how the world trades, invests, and interacts." },
  heroPrimaryBtnText: { type: String, default: "Explore Token Economy" },
  heroSecondaryBtnText: { type: String, default: "Get started" },
  
  // Dynamic Marquee Ticker Coin List
  tickerCoins: {
    type: [tickerCoinSchema],
    default: [
      { symbol: "ETH", name: "Ethereum", price: "$2,282.83", change: "-1.66%" },
      { symbol: "USDT", name: "Tether USDt", price: "$1.00", change: "-0.01%" },
      { symbol: "XRP", name: "XRP", price: "$1.39", change: "-1.92%" },
      { symbol: "BNB", name: "BNB", price: "$623.16", change: "-0.73%" },
      { symbol: "USDC", name: "USDC", price: "$1.00", change: "0.01%" },
      { symbol: "SOL", name: "Solana", price: "$83.75", change: "-1.66%" }
    ]
  },

  // Dynamic Finance Section Features
  financeHeading: { type: String, default: "A New Standard for Global Finance" },
  financeDescription: { type: String, default: "IIC METAVERSE brings together advanced technology and real-world value into a single ecosystem—bridging the gap between traditional finance and digital innovation." },
  
  financeBadge: { type: String, default: "[ Innovative Solutions ]" },
  aboutTitle: { type: String, default: "What is IIC METAVERSE" },
  aboutDescription: { type: String, default: "At IIC METAVERSE, we combine blockchain, AI, and real-world business applications to create a borderless digital economy. Our solutions are designed to give businesses, investors, and communities the tools they need to thrive in a secure and scalable environment." },
  
  aboutBgImage: { type: String, default: "" },
  aboutMainImage: { type: String, default: "../assests/images/Innovativesolutions.svg" },

  financeFeatures: {
    type: [featureCardSchema],
    default: [
      { title: "Blockchain infrastructure", image: "/assests/images/blockchaininfa.svg" },
      { title: "Artificial intelligence", image: "assests/images/Artificialinte.svg" },
      { title: "Real-world asset tokenization", image: "/assests/images/Real-world-asset.svg" },
      { title: "Metaverse and digital services", image: "/assests/images/Metaverse-dig.svg" }
    ]
  },

  financeBtnText: { type: String, default: "learn more" },
  financeBtnLink: { type: String, default: "#" },

  // Featured Coins Section (technology section in home)
  featuredCoinsBadge: { type: String, default: "[ Featured Coins ]" },
  featuredCoinsHeading: { type: String, default: "A Balanced Digital Economy" },

  featuredCoin1Title: { type: String, default: "DINAAR — Gold-backed digital asset for stability" },
  featuredCoin1Desc: { type: String, default: "DINAAR Coin emphasizes stability, ethics, and Islamic financial innovation with real 24K Gold reserves. The value of one Dinaar coin equals to 1gm 24K gold." },
  featuredCoin1LinkText: { type: String, default: "View Token Economy" },
  featuredCoin1LinkUrl: { type: String, default: "#" },
  featuredCoin1Image: { type: String, default: "/assests/images/Featured-Coins.svg" },

  featuredCoin2Title: { type: String, default: "SAYA — Utility token powering ecosystem activity" },
  featuredCoin2Desc: { type: String, default: "SAYA Coin focuses on technical supremacy and global blockchain scalability. Its a transaction and mineable coin on PoA Blockchain." },
  featuredCoin2LinkText: { type: String, default: "View Token Economy" },
  featuredCoin2LinkUrl: { type: String, default: "#" },
  featuredCoin2Image: { type: String, default: "/assests/images/Featured-Coins-2.svg" },

  // Built for Performance (features-hv2 section in home)
  techFeaturesBadge: { type: String, default: "[ technology ]" },
  techFeaturesHeading: { type: String, default: "Built for Performance" },
  
  techFeature1Icon: { type: String, default: "" },
  techFeature1Desc: { type: String, default: "Layer 1 blockchain architecture" },
  
  techFeature2Icon: { type: String, default: "" },
  techFeature2Desc: { type: String, default: "~5-second transaction speed" },
  
  techFeature3Icon: { type: String, default: "" },
  techFeature3Desc: { type: String, default: "Low-cost, scalable infrastructure" },
  
  techFeaturesBtnText: { type: String, default: "Explore Technology" },
  techFeaturesBtnLink: { type: String, default: "/technology.html" },

  // 1e. Why Us Section Fields
  whyUsBadge: { type: String, default: "[ Why Us ]" },
  whyUsHeading: { type: String, default: "What Makes IIC METAVERSE Different" },
  
  whyUsCard1Icon: { type: String, default: "" },
  whyUsCard1Title: { type: String, default: "Hybrid Token Model" },
  whyUsCard1Desc: { type: String, default: "Balancing stability through asset-backed tokens and scalability through utility-driven assets" },
  
  whyUsCard2Icon: { type: String, default: "" },
  whyUsCard2Title: { type: String, default: "Real-World Asset Integration" },
  whyUsCard2Desc: { type: String, default: "Linking digital assets with tangible value such as gold and real estate" },
  
  whyUsCard3Icon: { type: String, default: "" },
  whyUsCard3Title: { type: String, default: "Advanced Technology Stack" },
  whyUsCard3Desc: { type: String, default: "Leveraging Layer 1 blockchain, AI systems, and smart contracts" },
  
  whyUsCard4Icon: { type: String, default: "" },
  whyUsCard4Title: { type: String, default: "Metaverse & Digital Services" },
  whyUsCard4Desc: { type: String, default: "Enabling immersive environments for commerce, interaction, and growth" },

  // 1f. Global Impact Section
  globalImpactTitle: { type: String, default: "Designed for Global Impact" },
  globalImpactDesc: { type: String, default: "With a strategic presence in Dubai and an international expansion roadmap, IIC METAVERSE is built to scale across markets and industries." },

  // 1g. CTA Section
  ctaTitle: { type: String, default: "Step Into the Future" },
  ctaDesc: { type: String, default: "Join a new era of finance and technology powered by real-world value and digital innovation." },
  ctaPrimaryBtnText: { type: String, default: "Get started" },
  ctaPrimaryBtnLink: { type: String, default: "#" },
  ctaSecondaryBtnText: { type: String, default: "Contact Us" },
  ctaSecondaryBtnLink: { type: String, default: "/contact-us.html" },
  ctaTopRightImage: { type: String, default: "" },
  ctaBottomLeftImage: { type: String, default: "" },
  ctaCenterImage: { type: String, default: "" },
  ctaBackgroundImage: { type: String, default: "" },

  // --- LATEST NEWS SECTION ---
  newsTopBadge: { type: String, default: 'Latest News' },
  newsTitle: { type: String, default: 'Expert Articles, Trends & Valuable Insights' },
  
  // News Card 1 (Left Side - Big)
  news1Badge: { type: String, default: 'Blockchain' },
  news1Image: { type: String, default: '' },
  news1Title: { type: String, default: 'Real Time Transparency in Blockchain: IIC Blockchain Explorer' },
  news1AuthorImage: { type: String, default: '' },
  news1AuthorName: { type: String, default: 'Robert Fox' },
  news1AuthorRole: { type: String, default: 'Editor' },
  news1Date: { type: String, default: 'March 18, 2025' },

  // News Card 2 (Right Side - Top)
  news2Badge: { type: String, default: 'EVM' },
  news2Title: { type: String, default: 'Why EVM Compatibility is Becoming the Backbone of Modern Blockchain Innovation' },
  news2AuthorImage: { type: String, default: '' },
  news2AuthorName: { type: String, default: 'Robert Fox' },
  news2AuthorRole: { type: String, default: 'Editor' },
  news2Date: { type: String, default: 'March 18, 2025' },

  // News Card 3 (Right Side - Bottom)
  news3Badge: { type: String, default: 'Global Trade' },
  news3Title: { type: String, default: 'Global Trade Update: Japan\'s Growing Role in Asia-Pacific Supply Chains' },
  news3AuthorImage: { type: String, default: '' },
  news3AuthorName: { type: String, default: 'Robert Fox' },
  news3AuthorRole: { type: String, default: 'Editor' },
  news3Date: { type: String, default: 'March 18, 2025' },

  // Legacy static fields (retained for backward compatibility/endpoints)
  ethPrice: { type: String, default: "$2,282.83" },
  ethChange: { type: String, default: "-1.66%" },
  usdtPrice: { type: String, default: "$1.00" },
  usdtChange: { type: String, default: "-0.01%" },
  xrpPrice: { type: String, default: "$1.39" },
  xrpChange: { type: String, default: "-1.92%" },
  bnbPrice: { type: String, default: "$623.16" },
  bnbChange: { type: String, default: "-0.73%" },
  usdcPrice: { type: String, default: "$1.00" },
  usdcChange: { type: String, default: "0.01%" },
  solPrice: { type: String, default: "$83.75" },
  solChange: { type: String, default: "-1.66%" },

  dinaarTitle: { type: String, default: "Dinaar Coin" },
  dinaarPrice: { type: String, default: "$0.00822" },
  dinaarImage: { type: String, default: "/assests/images/dinnar.png" },
  
  sayaTitle: { type: String, default: "Saya Coin" },
  sayaPrice: { type: String, default: "$0.00822" },
  sayaImage: { type: String, default: "/assests/images/saya.png" },

  // 2. About Us Page Fields
  aboutHeroBadge: { type: String, default: "About us" },
  aboutHeroTitle: { type: String, default: "Redefining the Future of Digital Economy" },
  aboutHeroDescription: { type: String, default: "IIC METAVERSE is a next-generation ecosystem designed to bridge blockchain technology with real-world value—creating a unified platform for finance, trade, and digital interaction." },
  
  galleryLeftImage: { type: String, default: "/assests/images/about-banner-left.svg" },
  galleryCenterImage: { type: String, default: "/assests/images/about-banner-center.svg" },
  galleryRightImage: { type: String, default: "/assests/images/about-banner-right.svg" },
  galleryTitle: { type: String, default: "Who We Are" },
  galleryParagraphs: {
    type: [String],
    default: [
      "<span>IIC METAVERSE</span> is a comprehensive digital ecosystem that integrates blockchain, artificial intelligence, and real-world asset tokenization into a single, scalable platform.",
      "Built to address the limitations of traditional financial and digital systems, <span>IIC METAVERSE</span> enables seamless interaction between virtual environments and tangible economic value.",
      "By combining advanced infrastructure with practical real-world applications, <span>IIC METAVERSE</span> is positioned to support the next phase of global digital transformation."
    ]
  },

  visionHeading: { type: String, default: "Our Core Vision" },
  visionDescription: { type: String, default: "To democratize finance through decentralization, combining blockchain security with real-world accessibility." },
  visionImage: { type: String, default: "/assests/images/ourvision.svg" },
  missionHeading: { type: String, default: "Our Mission" },
  missionDescription: { type: String, default: "Building robust blockchain frameworks and AI-assisted financial rails to eliminate international transaction friction." },
  missionImage: { type: String, default: "/assests/images/ourmission.svg" },
  
  ecosystemTitle: { type: String, default: "Backed by a Strong Ecosystem" },
  ecosystemParagraphs: {
    type: [String],
    default: [
      "IIC METAVERSE operates within a broader international ecosystem supported by established financial and technological infrastructure.",
      "The platform is aligned with International Investment Consortium, a global organization with interests across finance, technology, and digital innovation.",
      "Financial and operational integration is further supported through International Investment Consortium Bank, which facilitates structured financial processes, compliance, and asset-backed mechanisms within the ecosystem.",
      "This institutional alignment ensures that IIC METAVERSE is built on a foundation of credibility, structure, and long-term vision."
    ]
  },
  ecosystemImage: { type: String, default: "/assests/images/Innovativesolutions.svg" },
  ecosystemBgImage: { type: String, default: "" },

  spotlightTopIcon: { type: String, default: "/assests/images/futureicon.svg" },
  spotlightShapeImage: { type: String, default: "https://cdn.prod.website-files.com/67d5482886ed2b38b65e6d7c/67d7deb5edeedea1b36aace4_Community%20Spotlight%20Shape.webp" },
  spotlightTitle: { type: String, default: "Shaping the Future Together" },
  spotlightParagraphs: {
    type: [String],
    default: [
      "IIC METAVERSE represents a new approach to digital ecosystems—where technology is not only innovative, but also grounded in real-world value and practical application.",
      "We invite investors, partners, and users to be part of a platform designed for the future of global finance and digital interaction."
    ]
  },
  spotlightPrimaryBtnText: { type: String, default: "Contact Us" },
  spotlightPrimaryBtnLink: { type: String, default: "/contact-us.html" },
  spotlightSecondaryBtnText: { type: String, default: "Explore Platform" },
  spotlightSecondaryBtnLink: { type: String, default: "/" },
  spotlightBgImage: { type: String, default: "https://cdn.prod.website-files.com/67d5482886ed2b38b65e6d7c/67d7cc27946153799c4432f1_Community%20Spotlight%20Bg.webp" },
  spotlightLetter1Image: { type: String, default: "/assests/images/m.svg" },
  spotlightLetter2Image: { type: String, default: "/assests/images/e.svg" },
  spotlightLetter3Image: { type: String, default: "/assests/images/t.svg" },
  spotlightLetter4Image: { type: String, default: "/assests/images/a.svg" },
  spotlightLetter5Image: { type: String, default: "/assests/images/v.svg" },
  spotlightLetter6Image: { type: String, default: "/assests/images/e.svg" },
  spotlightLetter7Image: { type: String, default: "/assests/images/r.svg" },
  spotlightLetter8Image: { type: String, default: "/assests/images/s.svg" },
  spotlightLetter9Image: { type: String, default: "/assests/images/e.svg" },

  teamHeading: { type: String, default: "Leading The Revolution" },
  teamDescription: { type: String, default: "Meet the decentralized finance engineers, security auditors, and product builders shaping the IIC ecosystem." },

  // Owners / Bios Section
  owner1Image: { type: String, default: "/assests/images/ArshadMahmood.svg" },
  owner1Badge: { type: String, default: "[ Financial Leadership ]" },
  owner1Name: { type: String, default: "Dato Dr. Arshad Mahmood" },
  owner1Paragraphs: {
    type: [String],
    default: [
      "Dato Dr. Arshad Mahmood stands as a visionary leader and driving force behind the growth and global expansion of the International Investment Consortium Inc. (IIC). As the Founder and Chairman of IIC, he has spearheaded transformative initiatives that transcend borders, positioning the consortium as a dynamic international platform for investment, finance, technology, and sustainable development. Under his leadership, IIC continues to expand its presence across multiple industries and regions, fostering innovation, strategic partnerships, and long-term economic growth.",
      "With a distinguished academic background that includes a Bachelor’s Degree in Economics, a Master’s Degree in Literature, and an Honorary Doctorate in Management Sciences from ACMIT USA, Dato Arshad exemplifies excellence, innovation, and forwardthinking leadership in every endeavor he undertakes.",
      "As the visionary founder of IIC, Dato Arshad champions an asset-based investment philosophy focused on leveraging tangible and sustainable resources to create long-term value and stability. His strategic approach to investment emphasizes resilience, responsible growth, and economic empowerment, enabling IIC to build impactful ventures that contribute meaningfully to communities and industries on a global scale."
    ]
  },

  owner2Image: { type: String, default: "/assests/images/Prof.Hironao.svg" },
  owner2Badge: { type: String, default: "[ Technology Leadership ]" },
  owner2Name: { type: String, default: "Prof. Hironao Takahashi, Ph.D." },
  owner2Paragraphs: {
    type: [String],
    default: [
      "Prof. Dr. Hironao Takahashi is an innovation-focused researcher with a PhD in Engineering from Tokyo Institute of Technology and an MOT from Tokyo University of Science. His PhD research focused on autonomous decentralized distributed system architecture with multiple node cache models (L3-only and L3/L4). He innovated the DTS (Data Transmission System) architecture for modern computer systems.",
      "He has held major academic and leadership roles including Visiting Professor at NUST SEECS, Professor at Jinnah University for Women, Professor and Director ORIC at Greenwich University, Associate Professor at DHA Suffa University, and Dean of Computer Science at Emaan Institute of Management and Science. He also contributed to supercomputer-domain engineering for more than ten years in Oregon and Silicon Valley, California, and worked on new computer architecture and radial BUS model design in the USA."
    ]
  },

  // 3. Technology Page Fields
  techHeroTitle: { type: String, default: "Next-Gen Tech Infrastructure" },
  techHeroDescription: { type: String, default: "Deep dive into our highly secure smart contracts, AI trade optimizations, and custom cross-chain layers." },
  coreTechTitle: { type: String, default: "Core Blockchain Capabilities" },
  coreTechDescription: { type: String, default: "Running on custom layer protocols to process up to 100,000 transactions per second with near-zero gas fees." },
  securityTitle: { type: String, default: "Secured to the Core" },
  securityDescription: { type: String, default: "Audited multiple times by tier-1 security firms with integrated multi-sig parameters and real-time network monitors." },

  // 4. Token Economy Page Fields
  tokenHeroTitle: { type: String, default: "The Tokenomics Engine" },
  tokenHeroDescription: { type: String, default: "Explore how DINAAR and SAYA utility tokens drive transaction velocity, rewards, and staking pools." },
  tokenomicsTitle: { type: String, default: "Dynamic Liquidity Systems" },
  tokenomicsDescription: { type: String, default: "Engineered with deflationary burn schedules and automated rewards to incentivize long-term network support." },
  supplyTotal: { type: String, default: "1,000,000,000 DINAAR / SAYA" },
  supplyDistribution: { type: String, default: "50% Staking Rewards, 20% Ecosystem Development, 15% Public Sale, 10% Team, 5% Advisers" },

  // 5. Contact Us Page Fields
  contactHeroTitle: { type: String, default: "Get in Touch" },
  contactHeroDescription: { type: String, default: "Have questions about integration or institutional partnerships? Our 24/7 technical team is here to assist." },
  supportEmail: { type: String, default: "support@iic-metaverse.com" },
  officeAddress: { type: String, default: "Decentralized Hub Tower, Level 42, Singapore" },
  telegramLink: { type: String, default: "https://t.me/iicmetaverse" },
  twitterLink: { type: String, default: "https://twitter.com/iicmetaverse" },
  discordLink: { type: String, default: "https://discord.gg/iicmetaverse" }

}, { timestamps: true });

const PageContent = mongoose.model('PageContent', pageContentSchema);

module.exports = PageContent;
