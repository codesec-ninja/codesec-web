import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  link,
  sheet,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  insta,
  plusSquare,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard5,
  benefitCard6,
  x2,
  raindrop,
  recording01,
  recording03,
  design,
  testing,
  sec,
  plan,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Community",
    url: "/community",
  },
  {
    id: "1",
    title: "Projects",
    url: "/projects",
  },
  {
    id: "2",
    title: "Research",
    url: "/research",
  },
  {
    id: "3",
    title: "Resources",
    url: "/resources",
  },
  {
    id: "4",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "5",
    title: "GitHub",
    url: "https://github.com/codesec-community",
    external: true,
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Join Us",
    url: "/join",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const communityStats = [
  { number: "10K+", label: "Active Members" },
  { number: "500+", label: "Open Source Projects" },
  { number: "50+", label: "Research Papers" },
  { number: "24/7", label: "Community Support" },
];

export const featuredProjects = [
  {
    id: "0",
    title: "SecureAI Framework",
    description: "Open-source AI security testing framework with automated vulnerability detection",
    category: "AI Security",
    contributors: 45,
    stars: 1200,
    language: "Python",
    status: "Active",
  },
  {
    id: "1",
    title: "CyberThreat Intel",
    description: "Real-time threat intelligence platform for cybersecurity professionals",
    category: "Threat Intelligence",
    contributors: 32,
    stars: 890,
    language: "JavaScript",
    status: "Active",
  },
  {
    id: "2",
    title: "DeepSec Research",
    description: "Advanced deep learning models for cybersecurity applications",
    category: "Deep Learning",
    contributors: 28,
    stars: 756,
    language: "Python",
    status: "Research",
  },
];

export const researchAreas = [
  {
    id: "0",
    title: "AI-Powered Cybersecurity",
    description: "Leveraging artificial intelligence and machine learning to detect, prevent, and respond to cyber threats in real-time.",
    icon: benefitIcon1,
    papers: 15,
    contributors: 25,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "1",
    title: "Quantum Cryptography",
    description: "Exploring quantum-resistant encryption methods and post-quantum cryptographic algorithms for future security.",
    icon: benefitIcon2,
    papers: 8,
    contributors: 12,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Zero Trust Architecture",
    description: "Developing comprehensive zero-trust security models for modern distributed computing environments.",
    icon: benefitIcon3,
    papers: 12,
    contributors: 18,
    color: "from-green-500 to-teal-500",
  },
  {
    id: "3",
    title: "Behavioral Analytics",
    description: "Advanced user and entity behavior analytics (UEBA) for anomaly detection and insider threat prevention.",
    icon: benefitIcon4,
    papers: 10,
    contributors: 20,
    color: "from-orange-500 to-red-500",
  },
];

export const communityFeatures = [
  {
    id: "0",
    title: "Open Source Collaboration",
    text: "Join thousands of developers contributing to cutting-edge cybersecurity and AI projects. Share code, collaborate on research, and build the future of digital security together.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Research & Publications",
    text: "Access peer-reviewed research papers, whitepapers, and technical documentation. Contribute to ongoing research initiatives and publish your findings with the community.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI Agent Development",
    text: "Build and deploy intelligent security agents using our open-source AI frameworks. Create autonomous systems for threat detection, incident response, and security automation.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Deep Security Research",
    text: "Dive deep into advanced cybersecurity topics including quantum cryptography, zero-trust architectures, and next-generation threat intelligence systems.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Community Learning",
    text: "Access comprehensive learning resources, tutorials, and hands-on labs. Participate in workshops, webinars, and collaborative learning sessions with industry experts.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Global Network",
    text: "Connect with cybersecurity professionals, researchers, and AI developers from around the world. Build your professional network and collaborate on international projects.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const collaborationTools = [
  {
    id: "0",
    title: "GitHub",
    icon: sheet,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "2",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "3",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "4",
    title: "Jupyter",
    icon: insta,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Docker",
    icon: x2,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Kubernetes",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "TensorFlow",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const membershipTiers = [
  {
    id: "0",
    title: "Community Member",
    description: "Join our open community and start contributing to projects.",
    price: null,
    features: [
      "Access to public repositories",
      "Community Discord access",
      "Basic learning resources",
      "Project collaboration",
      "Community events access",
    ],
  },
  {
    id: "1",
    title: "Active Contributor",
    description: "For regular contributors and project maintainers.",
    price: null,
    features: [
      "All Community Member benefits",
      "Priority project access",
      "Mentorship opportunities",
      "Research paper submissions",
      "Advanced workshops",
      "Recognition badges",
    ],
  },
  {
    id: "2",
    title: "Research Partner",
    description: "For organizations and institutions supporting our research.",
    price: null,
    features: [
      "All previous tier benefits",
      "Research collaboration opportunities",
      "Custom project development",
      "Direct researcher access",
      "Quarterly research reports",
      "Co-publication opportunities",
    ],
  },
];

export const roadmapItems = [
  {
    id: "0",
    title: "Community Building",
    text: "Establish a thriving community of cybersecurity professionals, AI researchers, and open-source contributors. Create collaborative spaces for knowledge sharing and project development.",
    imageUrl: plan,
    colorful: true,
  },
  {
    id: "1",
    title: "Open Source Projects",
    text: "Launch flagship open-source projects in AI security, threat intelligence, and automated defense systems. Provide frameworks and tools for the global security community.",
    imageUrl: design,
    colorful: true,
  },
  {
    id: "2",
    title: "Research Initiatives",
    text: "Conduct cutting-edge research in quantum cryptography, AI-powered security, and next-generation threat detection. Publish findings and contribute to academic knowledge.",
    imageUrl: testing,
    colorful: true,
  },
  {
    id: "3",
    title: "Global Impact",
    text: "Scale our impact globally by partnering with universities, research institutions, and security organizations. Create a worldwide network of security innovation.",
    imageUrl: sec,
    colorful: true,
  },
];

export const collabText =
  "Join our collaborative ecosystem where security professionals, AI researchers, and developers work together to build the future of cybersecurity.";

export const collabContent = [
  {
    id: "0",
    title: "Open Collaboration",
    text: "Work together on cutting-edge security projects with contributors from around the world.",
  },
  {
    id: "1",
    title: "Knowledge Sharing",
    text: "Share research, insights, and best practices with the global security community.",
  },
  {
    id: "2",
    title: "Innovation Focus",
    text: "Drive innovation in AI security, threat intelligence, and automated defense systems.",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/codesec",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/CodeSecCommunity",
  },
  {
    id: "2",
    title: "GitHub",
    iconUrl: instagram,
    url: "https://github.com/codesec-community",
  },
  {
    id: "3",
    title: "LinkedIn",
    iconUrl: link,
    url: "https://linkedin.com/company/codesec-community",
  },
];