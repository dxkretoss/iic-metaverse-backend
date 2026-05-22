const mongoose = require('mongoose');

const aboutpageSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // 'about'

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
  }

}, { timestamps: true });

module.exports = mongoose.model('AboutPage', aboutpageSchema);
