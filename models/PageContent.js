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
  heroPrimaryBtnLink: { type: String, default: "#" },
  heroSecondaryBtnText: { type: String, default: "Get started" },
  heroSecondaryBtnLink: { type: String, default: "#" },
  
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
  techHeroTopTitle: { type: String, default: "Engineered for the Next Generation of Digital Economy" },
  techHeroTitle: { type: String, default: "Next-Gen Tech Infrastructure" },
  techHeroDescription: { type: String, default: "Deep dive into our highly secure smart contracts, AI trade optimizations, and custom cross-chain layers." },
  techHeroPrimaryBtnText: { type: String, default: "" },
  techHeroPrimaryBtnLink: { type: String, default: "" },
  techHeroSecondaryBtnText: { type: String, default: "" },
  techHeroSecondaryBtnLink: { type: String, default: "" },
 
  // Tech Hero Card 1
  techCard1Title: { type: String, default: "Technology That Goes Beyond Traditional Blockchain" },
  techCard1Paragraphs: {
    type: [String],
    default: [
      "The IIC METAVERSE ecosystem is built on a proprietary Layer 1 blockchain infrastructure designed to overcome the limitations of conventional networks.",
      "With a focus on real-world utility, scalability, and efficiency, the platform enables seamless integration between digital systems and tangible assets."
    ]
  },
  techCard1BgImage: { type: String, default: "" },
  techCard1Image: { type: String, default: "/assests/images/tech-card1.png" },

  // Tech Hero Card 2
  techCard2Title: { type: String, default: "Layer 1 Blockchain Architecture" },
  techCard2TopParagraphs: {
    type: [String],
    default: ["IIC METAVERSE operates on a dedicated Layer 1 blockchain network — similar in foundational structure to platforms like Ethereum, but optimized for enhanced performance and real-world application."]
  },
  techCard2Point1Text: { type: String, default: "Fully independent blockchain infrastructure" },
  techCard2Point1Icon: { type: String, default: "/assests/images/check.png" },
  techCard2Point2Text: { type: String, default: "Dedicated validation and consensus mechanism" },
  techCard2Point2Icon: { type: String, default: "/assests/images/check.png" },
  techCard2Point3Text: { type: String, default: "Designed for enterprise-grade deployment" },
  techCard2Point3Icon: { type: String, default: "/assests/images/check.png" },
  techCard2Point4Text: { type: String, default: "Supports smart contracts and decentralized applications" },
  techCard2Point4Icon: { type: String, default: "/assests/images/check.png" },
  techCard2BottomParagraphs: {
    type: [String],
    default: ["A foundation built for flexibility, control, and long-term scalability."]
  },
  techCard2BgImage: { type: String, default: "" },
  techCard2Image: { type: String, default: "/assests/images/tech-card2.png" },

  // Tech Hero Card 3
  techCard3Title: { type: String, default: "" },
  techCard3Point1Text: { type: String, default: "~5-second block time enabling near real-time transaction confirmation" },
  techCard3Point1Icon: { type: String, default: "/assests/images/icon-time.png" },
  techCard3Point2Text: { type: String, default: "High throughput supporting enterprise and consumer applications" },
  techCard3Point2Icon: { type: String, default: "/assests/images/icon-throughput.png" },
  techCard3Point3Text: { type: String, default: "Optimized for both micro-transactions and large-scale operations" },
  techCard3Point3Icon: { type: String, default: "/assests/images/icon-scale.png" },
  techCard3Paragraphs: {
    type: [String],
    default: ["Traditional networks often struggle with congestion and delays - IIC METAVERSE is designed to eliminate these bottlenecks."]
  },
  techCard3BgImage: { type: String, default: "" },
  techCard3Image: { type: String, default: "/assests/images/tech-card3.png" },

  // Tech Consensus Mechanism
  techConsensusBadge: { type: String, default: '[ POA ]' },
  techConsensusTitle: { type: String, default: 'Consensus Mechanism' },
  techConsensusDescription: { type: String, default: 'The network utilizes a Proof-of-Authority (PoA) consensus mechanism, ensuring:' },
  techConsensusCard1Icon: { type: String, default: '' },
  techConsensusCard1Desc: { type: String, default: 'Faster transaction validation' },
  techConsensusCard2Icon: { type: String, default: '' },
  techConsensusCard2Desc: { type: String, default: 'Reduced energy consumption' },
  techConsensusCard3Icon: { type: String, default: '' },
  techConsensusCard3Desc: { type: String, default: 'Controlled and secure node participation' },
  techConsensusBottomDesc: { type: String, default: 'PoA enables a balance between performance and governance, making it ideal for real-world financial applications.' },

  // Tech Smart Contracts
  techSmartTitle: { type: String, default: 'Smart Contracts & Automation' },
  techSmartDesc: { type: String, default: 'IIC METAVERSE supports full smart contract functionality, enabling:' },
  techSmartCheckpoints: { type: [String], default: ['Automated financial processes', 'Transparent execution of transactions', 'Development of decentralized applications (dApps)'] },
  techSmartFeature1Icon: { type: String, default: '' },
  techSmartFeature1Name: { type: String, default: 'Asset tokenization' },
  techSmartFeature2Icon: { type: String, default: '' },
  techSmartFeature2Name: { type: String, default: 'Financial settlements' },
  techSmartFeature3Icon: { type: String, default: '' },
  techSmartFeature3Name: { type: String, default: 'Digital agreements and workflows' },
  techSmartRightBgImage: { type: String, default: '' },
  techSmartRightImage: { type: String, default: '' },

  // Tech Slides
  techSlide1Image: { type: String, default: '' },
  techSlide1Title: { type: String, default: 'Interoperability & Cross-Chain Capability' },
  techSlide1Desc: { type: String, default: 'The platform is designed to integrate with major blockchain ecosystems such as:' },
  techSlide1Point1Icon: { type: String, default: '' },
  techSlide1Point1Text: { type: String, default: 'BNB Chain' },
  techSlide1Point2Icon: { type: String, default: '' },
  techSlide1Point2Text: { type: String, default: 'Avalanche' },
  techSlide1FeatureHeading: { type: String, default: 'Capabilities:' },
  techSlide1Feature1Icon: { type: String, default: '' },
  techSlide1Feature1Text: { type: String, default: 'Cross-chain asset transfers' },
  techSlide1Feature2Icon: { type: String, default: '' },
  techSlide1Feature2Text: { type: String, default: 'Liquidity bridging' },
  techSlide1Feature3Icon: { type: String, default: '' },
  techSlide1Feature3Text: { type: String, default: 'Multi-chain application development' },

  techSlide2Title: { type: String, default: 'Real-World Integration Layer' },
  techSlide2Desc: { type: String, default: 'The technology stack supports real-world asset integration, enabling:' },
  techSlide2Feature1Icon: { type: String, default: '' },
  techSlide2Feature1Text: { type: String, default: 'Tokenization of physical assets such as gold and real estate' },
  techSlide2Feature2Icon: { type: String, default: '' },
  techSlide2Feature2Text: { type: String, default: 'Integration with financial systems' },
  techSlide2Feature3Icon: { type: String, default: '' },
  techSlide2Feature3Text: { type: String, default: 'Support for enterprise and institutional use cases' },
  techSlide2Image: { type: String, default: '' },

  techSlide3Image: { type: String, default: '' },
  techSlide3Title: { type: String, default: 'AI Integration' },
  techSlide3Desc: { type: String, default: 'Artificial intelligence enhances the platform by enabling:' },
  techSlide3Feature1Icon: { type: String, default: '' },
  techSlide3Feature1Text: { type: String, default: 'Smart automation of processes' },
  techSlide3Feature2Icon: { type: String, default: '' },
  techSlide3Feature2Text: { type: String, default: 'Predictive analytics and optimization' },
  techSlide3Feature3Icon: { type: String, default: '' },
  techSlide3Feature3Text: { type: String, default: 'Enhanced user experience and operational efficiency' },

  // Tech Security Section
  techSecuritySlider1Title: { type: String, default: 'Security Infrastructure' },
  techSecuritySlider1Desc: { type: String, default: 'Security is a core pillar of the IIC METAVERSE ecosystem, supported by:' },
  techSecuritySlider1Feature1Icon: { type: String, default: '' },
  techSecuritySlider1Feature1Text: { type: String, default: 'Advanced wallet protection mechanisms' },
  techSecuritySlider1Feature2Icon: { type: String, default: '' },
  techSecuritySlider1Feature2Text: { type: String, default: 'Multi-layer authentication systems' },
  techSecuritySlider1Feature3Icon: { type: String, default: '' },
  techSecuritySlider1Feature3Text: { type: String, default: 'Secure transaction validation protocols' },
  techSecuritySlider1RightImage: { type: String, default: '' },
  techSecuritySlider1RightBgImage: { type: String, default: '' },
  
  techSecuritySlider2Title: { type: String, default: 'Innovative Hardware Security' },
  techSecuritySlider2Desc: { type: String, default: 'A next-generation authentication device (Smart Ring) is under development in collaboration with:' },
  techSecuritySlider2Point1Icon: { type: String, default: '' },
  techSecuritySlider2Point1Text: { type: String, default: 'Toshiba' },
  techSecuritySlider2Point2Icon: { type: String, default: '' },
  techSecuritySlider2Point2Text: { type: String, default: 'Siemens' },
  techSecuritySlider2FeatureTitle: { type: String, default: 'Purpose:' },
  techSecuritySlider2FeatureList: { type: [String], default: ['Physical verification of transactions', 'Enhanced protection against unauthorized access', 'Integration of digital and physical security layers'] },
  techSecuritySlider2RightImage: { type: String, default: '' },
  techSecuritySlider2RightBgImage: { type: String, default: '' },

  // Tech Cost Efficiency
  techCostTitle: { type: String, default: 'Cost Efficiency' },
  techCostParagraphs: { type: [String], default: ['Significantly lower transaction fees compared to legacy networks', 'Optimized infrastructure for cost-efficient operations'] },

  // Tech Transparency
  techTransparencyTitle: { type: String, default: 'Transparency & Blockchain Explorer' },
  techTransparencyDesc: { type: String, default: 'IIC METAVERSE provides a dedicated blockchain explorer (IICSCAN), enabling:' },
  techTransparencyCard1Icon: { type: String, default: '' },
  techTransparencyCard1Desc: { type: String, default: 'Real-time transaction tracking' },
  techTransparencyCard2Icon: { type: String, default: '' },
  techTransparencyCard2Desc: { type: String, default: 'Gas fee visibility' },
  techTransparencyCard3Icon: { type: String, default: '' },
  techTransparencyCard3Desc: { type: String, default: 'Wallet activity monitoring' },
  techTransparencyCard4Icon: { type: String, default: '' },
  techTransparencyCard4Desc: { type: String, default: 'Independent verification of network activity' },

  // Tech Competitive Advantage
  techCompAdvTitle: { type: String, default: 'Competitive Advantage' },
  techCompAdvDesc: { type: String, default: '' },
  techCompAdvFeatureTitle: { type: String, default: 'Compared to traditional blockchain platforms:' },
  techCompAdvFeature1Icon: { type: String, default: '' },
  techCompAdvFeature1Text: { type: String, default: 'Faster than Bitcoin (~10 min block time)' },
  techCompAdvFeature2Icon: { type: String, default: '' },
  techCompAdvFeature2Text: { type: String, default: 'More cost-efficient than Ethereum' },
  techCompAdvFeature3Icon: { type: String, default: '' },
  techCompAdvFeature3Text: { type: String, default: 'More real-world focused than typical DeFi ecosystems' },
  
  techCompAdvPointsTitle: { type: String, default: 'Capabilities:' },
  techCompAdvPoint1Icon: { type: String, default: '' },
  techCompAdvPoint1Text: { type: String, default: 'Gold-backed asset integration' },
  techCompAdvPoint2Icon: { type: String, default: '' },
  techCompAdvPoint2Text: { type: String, default: 'Multi-utility ecosystem (metaverse + RWA + AI)' },
  techCompAdvPoint3Icon: { type: String, default: '' },
  techCompAdvPoint3Text: { type: String, default: 'Institutional and enterprise alignment' },
  
  techCompAdvRightImage: { type: String, default: '' },
  techCompAdvRightBgImage: { type: String, default: '' },

  // Tech Built for Future
  techFutureTitle: { type: String, default: 'Technology Built for the Future' },
  techFutureDesc: { type: String, default: 'IIC METAVERSE combines advanced blockchain architecture, real-world integration, and intelligent systems to create a platform ready for global adoption.' },
  techFutureBtn1Text: { type: String, default: 'EXPLORE ECOSYSTEM' },
  techFutureBtn1Link: { type: String, default: '#' },
  techFutureBtn2Text: { type: String, default: 'CONTACT US' },
  techFutureBtn2Link: { type: String, default: '#' },
  techFutureTopRightImage: { type: String, default: '' },
  techFutureBottomLeftImage: { type: String, default: '' },





  // 4. Token Economy Page Fields
    tokenHeroTopHeader: { type: String, default: "Stability Meets Scalability" },
tokenHeroTitle: { type: String, default: "The Tokenomics Engine" },
  tokenHeroPrimaryBtnText: { type: String, default: "" },
  tokenHeroPrimaryBtnLink: { type: String, default: "" },
  tokenHeroSecondaryBtnText: { type: String, default: "" },
  tokenHeroSecondaryBtnLink: { type: String, default: "" },
  tokenHeroDescription: { type: String, default: "Explore how DINAAR and SAYA utility tokens drive transaction velocity, rewards, and staking pools." },

  // Token Dual Ecosystem
  tokenDualEcosystemTitle: { type: String, default: 'A Dual-Token Ecosystem' },
  tokenDualEcosystemDesc: { type: String, default: 'The IIC METAVERSE ecosystem is powered by two complementary digital assets, each designed to fulfill a distinct role within the platform:' },
  tokenDualEcosystemCard1Image: { type: String, default: '' },
  tokenDualEcosystemCard1Desc: { type: String, default: 'DINAAR - a gold-backed digital asset providing stability and real-world value' },
  tokenDualEcosystemCard2Image: { type: String, default: '' },
  tokenDualEcosystemCard2Desc: { type: String, default: 'SAYA - a utility-driven token enabling transactions, rewards & ecosystem participation' },
  tokenDualEcosystemBottomDesc: { type: String, default: 'Together, these tokens create a hybrid economic model that balances long-term value preservation with dynamic growth potential.' },

  // Token Hybrid Model
  tokenHybridBadge: { type: String, default: '[ WHY TWO TOKENS? ]' },
  tokenHybridTitle: { type: String, default: 'Hybrid Model' },
  tokenHybridDesc: { type: String, default: 'Traditional crypto models often face a trade-off between stability and growth. IIC METAVERSE solves this by separating these functions:' },
  tokenHybridCard1Icon: { type: String, default: '' },
  tokenHybridCard1Title: { type: String, default: 'DINAAR' },
  tokenHybridCard1Desc: { type: String, default: 'Stability & Value Preservation' },
  tokenHybridCard2Icon: { type: String, default: '' },
  tokenHybridCard2Title: { type: String, default: 'SAYA' },
  tokenHybridCard2Desc: { type: String, default: 'Utility & Ecosystem Growth' },
  tokenHybridBottomDesc: { type: String, default: 'This dual-token structure ensures that the ecosystem remains both resilient and scalable - capable of supporting real-world financial use cases while enabling innovation.' },

  // Token System Works
  tokenSystemTitle: { type: String, default: 'How the System Works' },
  tokenSystemDesc: { type: String, default: 'The IIC METAVERSE ecosystem follows a structured and compliant process that bridges traditional banking with blockchain-based assets.' },

  // Slide 1
  tokenSystemSlide1Badge: { type: String, default: '[ STEP - 1 ]' },
  tokenSystemSlide1Title: { type: String, default: 'Account Establishment' },
  tokenSystemSlide1DescList: { type: [String], default: [] },
  tokenSystemSlide1BtnText: { type: String, default: 'OPEN AN IICB ACCOUNT' },
  tokenSystemSlide1BtnLink: { type: String, default: '' },
  tokenSystemSlide1Image: { type: String, default: '' },

  // Slide 2
  tokenSystemSlide2Badge: { type: String, default: '[ STEP - 2 ]' },
  tokenSystemSlide2Title: { type: String, default: 'Fund Deposit' },
  tokenSystemSlide2DescList: { type: [String], default: [] },
  tokenSystemSlide2Image: { type: String, default: '' },

  // Slide 3
  tokenSystemSlide3Badge: { type: String, default: '[ STEP - 3 ]' },
  tokenSystemSlide3Title: { type: String, default: 'DINAAR Acquisition' },
  tokenSystemSlide3DescList: { type: [String], default: [] },
  tokenSystemSlide3Image: { type: String, default: '' },

  // Slide 4
  tokenSystemSlide4Badge: { type: String, default: '[ STEP - 4 ]' },
  tokenSystemSlide4Title: { type: String, default: 'Holding Period' },
  tokenSystemSlide4DescList: { type: [String], default: [] },
  tokenSystemSlide4FeatureHeading: { type: String, default: 'This structural holding framework supports:' },
  tokenSystemSlide4FeatureList: { type: [String], default: [] },
  tokenSystemSlide4Image: { type: String, default: '' },

  // Slide 5
  tokenSystemSlide5Badge: { type: String, default: '[ STEP - 5 ]' },
  tokenSystemSlide5Title: { type: String, default: 'Value Protection Mechanism' },
  tokenSystemSlide5DescList: { type: [String], default: [] },
  tokenSystemSlide5Heading: { type: String, default: 'Example:' },
  tokenSystemSlide5HeadingDescList: { type: [String], default: [] },
  tokenSystemSlide5Image: { type: String, default: '' },

  // Slide 6
  tokenSystemSlide6Badge: { type: String, default: '[ STEP - 6 ]' },
  tokenSystemSlide6Title: { type: String, default: 'Redemption & Exit' },
  tokenSystemSlide6DescList: { type: [String], default: [] },
  tokenSystemSlide6FeatureHeading: { type: String, default: 'All redemption requests are:' },
  tokenSystemSlide6FeatureList: { type: [String], default: [] },
  tokenSystemSlide6Image: { type: String, default: '' },

  // Token Integration (Slides)
  tokenIntegrationSlide1Image: { type: String, default: '' },
  tokenIntegrationSlide1Title: { type: String, default: 'Institutional Integration' },
  tokenIntegrationSlide1DescList: { type: [String], default: [] },
  tokenIntegrationSlide1FeatureHeading: { type: String, default: 'International Investment Consortium Bank plays a key role in supporting the financial layer of the ecosystem by:' },
  tokenIntegrationSlide1Feature1Icon: { type: String, default: '' },
  tokenIntegrationSlide1Feature1Text: { type: String, default: 'Account management and onboarding' },
  tokenIntegrationSlide1Feature2Icon: { type: String, default: '' },
  tokenIntegrationSlide1Feature2Text: { type: String, default: 'Transaction verification and compliance' },
  tokenIntegrationSlide1Feature3Icon: { type: String, default: '' },
  tokenIntegrationSlide1Feature3Text: { type: String, default: 'Support for asset-backed financial flows' },

  tokenIntegrationSlide2Image: { type: String, default: '' },
  tokenIntegrationSlide2Title: { type: String, default: 'Economic Sustainability' },
  tokenIntegrationSlide2DescList: { type: [String], default: [] },
  tokenIntegrationSlide2Feature1Icon: { type: String, default: '' },
  tokenIntegrationSlide2Feature1Text: { type: String, default: 'Balanced token roles to avoid systemic instability' },
  tokenIntegrationSlide2Feature2Icon: { type: String, default: '' },
  tokenIntegrationSlide2Feature2Text: { type: String, default: 'Real-world asset backing to maintain trust' },
  tokenIntegrationSlide2Feature3Icon: { type: String, default: '' },
  tokenIntegrationSlide2Feature3Text: { type: String, default: 'Controlled token distribution mechanisms' },

  tokenIntegrationSlide3Image: { type: String, default: '' },
  tokenIntegrationSlide3Title: { type: String, default: 'Global Accessibility' },
  tokenIntegrationSlide3DescList: { type: [String], default: [] },
  tokenIntegrationSlide3Feature1Icon: { type: String, default: '' },
  tokenIntegrationSlide3Feature1Text: { type: String, default: 'Stable digital assets backed by gold' },
  tokenIntegrationSlide3Feature2Icon: { type: String, default: '' },
  tokenIntegrationSlide3Feature2Text: { type: String, default: 'Cross-border financial transactions' },
  tokenIntegrationSlide3Feature3Icon: { type: String, default: '' },
  tokenIntegrationSlide3Feature3Text: { type: String, default: 'Inclusive financial tools for global users' },

  // Token Future (CTA)
  tokenFutureTitle: { type: String, default: 'Step Into the Future' },
  tokenFutureDescList: { type: [String], default: [] },
  tokenFuturePrimaryBtnText: { type: String, default: 'JOIN THE ECOSYSTEM' },
  tokenFuturePrimaryBtnLink: { type: String, default: '' },
  tokenFutureSecondaryBtnText: { type: String, default: 'CONTACT US' },
  tokenFutureSecondaryBtnLink: { type: String, default: '' },
  tokenFutureTopRightImage: { type: String, default: '' },
  tokenFutureBottomLeftImage: { type: String, default: '' },

  // Smart Coins, Strong Value
  tokenSmartCoinsTitle: { type: String, default: 'Smart Coins, Strong Value' },
  
  // Tab 1 (DINAAR)
  tokenSmartCoinsTab1BtnText: { type: String, default: 'Dinaar Coin' },
  tokenSmartCoinsTab1Title: { type: String, default: 'DINAAR - Gold-Backed Digital Asset' },
  tokenSmartCoinsTab1DescList: { type: [String], default: [] },
  tokenSmartCoinsTab1Image: { type: String, default: '' },
  tokenSmartCoinsTab1BgImage: { type: String, default: '' },
  tokenSmartCoinsTab1FeatureHeading: { type: String, default: 'Key Features' },
  tokenSmartCoinsTab1F1Title: { type: String, default: '' },
  tokenSmartCoinsTab1F1Desc: { type: String, default: '' },
  tokenSmartCoinsTab1F2Title: { type: String, default: '' },
  tokenSmartCoinsTab1F2Desc: { type: String, default: '' },
  tokenSmartCoinsTab1F3Title: { type: String, default: '' },
  tokenSmartCoinsTab1F3Desc: { type: String, default: '' },
  tokenSmartCoinsTab1F4Title: { type: String, default: '' },
  tokenSmartCoinsTab1F4Desc: { type: String, default: '' },
  tokenSmartCoinsTab1F5Title: { type: String, default: '' },
  tokenSmartCoinsTab1F5Desc: { type: String, default: '' },
  tokenSmartCoinsTab1ValueHeading: { type: String, default: 'Value Proposition' },
  tokenSmartCoinsTab1ValueDesc: { type: String, default: '' },

  // Tab 2 (SAYA)
  tokenSmartCoinsTab2BtnText: { type: String, default: 'Saya Coin' },
  tokenSmartCoinsTab2Title: { type: String, default: 'SAYA - Utility & Growth Token' },
  tokenSmartCoinsTab2DescList: { type: [String], default: [] },
  tokenSmartCoinsTab2Image: { type: String, default: '' },
  tokenSmartCoinsTab2BgImage: { type: String, default: '' },
  tokenSmartCoinsTab2F1Heading: { type: String, default: 'Key Functions:' },
  tokenSmartCoinsTab2F1List: { type: [String], default: [] },
  tokenSmartCoinsTab2F2Heading: { type: String, default: 'Token Model Highlights:' },
  tokenSmartCoinsTab2F2List: { type: [String], default: [] },
  tokenSmartCoinsTab2ValueHeading: { type: String, default: 'Value Proposition' },
  tokenSmartCoinsTab2ValueDesc: { type: String, default: '' },







  // 5. Contact Us Page Fields
  contactHeroTopDescription: { type: String, default: "Let’s Build the Future Together" },
  contactHeroTitle: { type: String, default: "Get in Touch" },
  contactHeroDescription: { type: String, default: "Have questions about integration or institutional partnerships? Our 24/7 technical team is here to assist." },

  contactGlobalBadge: { type: String, default: "[ WHERE WE ARE? ]" },
  contactGlobalTitle: { type: String, default: "Our Global Presence" },
  contactGlobalParagraphs: {
    type: [String],
    default: [
      "IIC METAVERSE operates as part of an international ecosystem with a strategic presence in key global markets.",
      "Primary coordination and operations are supported through Dubai, enabling regional and international engagement."
    ]
  },

  contacthelpTitle: { type: String, default: "We’re Here to Help" },
  contacthelpParagraphs: {
    type: [String],
    default: [
      "For inquiries related to investments, partnerships, platform access, or general information, please reach out to the appropriate channel below.",
      "Our team is committed to responding promptly and providing the support you need."
    ]
  },
  contacthelpImage: { type: String, default: "/assests/images/Innovativesolutions.svg" },
  contacthelpBgImage: { type: String, default: "" },

  ContactCard1Icon: { type: String, default: "" },
  ContactCard1Title: { type: String, default: "General Inquiries" },
  ContactCard1Desc: { type: String, default: "For general questions about the IIC METAVERSE ecosystem:" },
  ContactCard1Email: { type: String, default: "info@iiccrypto.com" },

  ContactCard2Icon: { type: String, default: "" },
  ContactCard2Title: { type: String, default: "General Inquiries" },
  ContactCard2Desc: { type: String, default: "For general questions about the IIC METAVERSE ecosystem:" },
  ContactCard2Email: { type: String, default: "info@iiccrypto.com" },


  // telegramLink: { type: String, default: "https://t.me/iicmetaverse" },
  // twitterLink: { type: String, default: "https://twitter.com/iicmetaverse" },
  // discordLink: { type: String, default: "https://discord.gg/iicmetaverse" }

}, { timestamps: true });

const PageContent = mongoose.model('PageContent', pageContentSchema);

module.exports = PageContent;
