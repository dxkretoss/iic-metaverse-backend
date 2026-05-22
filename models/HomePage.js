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

const homepageSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // 'home'
  
  heroTopHeader: { type: String, default: "Where Virtual Innovation Meets Real-World Value" },
  heroTitle: { type: String, default: "The Future of Digital Economy Starts Here" },
  heroDescription: { type: String, default: "A next-generation ecosystem combining blockchain, AI, and real-world assets to transform how the world trades, invests, and interacts." },
  heroPrimaryBtnText: { type: String, default: "Explore Token Economy" },
  heroPrimaryBtnLink: { type: String, default: "#" },
  heroSecondaryBtnText: { type: String, default: "Get started" },
  heroSecondaryBtnLink: { type: String, default: "#" },
  
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

  financeHeading: { type: String, default: "A New Standard for Global Finance" },
  financeDescription: { type: String, default: "IIC METAVERSE brings together advanced technology and real-world value into a single ecosystem—bridging the gap between traditional finance and digital innovation." },
  financeBadge: { type: String, default: "[ Innovative Solutions ]" },
  
  aboutTitle: { type: String, default: "What is IIC METAVERSE" },
  aboutDescription: { type: String, default: "At IIC METAVERSE, we combine blockchain, AI, and real-world business applications to create a borderless digital economy. Our solutions are designed to give businesses, investors, and communities the tools they need to thrive in a secure and scalable environment." },
  aboutBgImage: { type: String, default: "" },
  aboutMainImage: { type: String, default: "/assests/images/Innovativesolutions.svg" },
  
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

  globalImpactTitle: { type: String, default: "Designed for Global Impact" },
  globalImpactDesc: { type: String, default: "With a strategic presence in Dubai and an international expansion roadmap, IIC METAVERSE is built to scale across markets and industries." },

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

  newsTopBadge: { type: String, default: 'Latest News' },
  newsTitle: { type: String, default: 'Expert Articles, Trends & Valuable Insights' },
  news1Badge: { type: String, default: 'Blockchain' },
  news1Image: { type: String, default: '' },
  news1Title: { type: String, default: 'Real Time Transparency in Blockchain: IIC Blockchain Explorer' },
  news1AuthorImage: { type: String, default: '' },
  news1AuthorName: { type: String, default: 'Robert Fox' },
  news1AuthorRole: { type: String, default: 'Editor' },
  news1Date: { type: String, default: 'March 18, 2025' },

  news2Badge: { type: String, default: 'EVM' },
  news2Title: { type: String, default: 'Why EVM Compatibility is Becoming the Backbone of Modern Blockchain Innovation' },
  news2AuthorImage: { type: String, default: '' },
  news2AuthorName: { type: String, default: 'Robert Fox' },
  news2AuthorRole: { type: String, default: 'Editor' },
  news2Date: { type: String, default: 'March 18, 2025' },

  news3Badge: { type: String, default: 'Global Trade' },
  news3Title: { type: String, default: "Global Trade Update: Japan's Growing Role in Asia-Pacific Supply Chains" },
  news3AuthorImage: { type: String, default: '' },
  news3AuthorName: { type: String, default: 'Robert Fox' },
  news3AuthorRole: { type: String, default: 'Editor' },
  news3Date: { type: String, default: 'March 18, 2025' },

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
  sayaImage: { type: String, default: "/assests/images/saya.png" }

}, { timestamps: true });

module.exports = mongoose.model('HomePage', homepageSchema);
