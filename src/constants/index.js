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
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Why Choose Us",
    url: "#Why-Choose-Us",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "AppShip",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "contact us",
    url: "#contact us",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];
    
export const roadmap = [
  {
    id: "0",
    title: "Discovery and Planning",
    text: "We start by understanding your business goals, challenges, and requirements through in-depth consultations. We create a detailed project plan outlining the timeline, milestones, and deliverables to ensure a clear path forward.",
    date: "May 2023",
    status: "done",
    imageUrl: plan,
    colorful: true,
  },
  {
    id: "1",
    title: "Design and Development",
    text: "We develop wireframes and prototypes to visualize the layout and functionality of your project, Our developers build robust and scalable solutions using the latest technologies and best practices, Our designers craft intuitive and visually appealing interfaces that enhance user experience.",
    date: "May 2023",
    status: "progress",
    imageUrl: design,
  },
  {
    id: "2",
    title: "Testing and Deployment",
    text: "We implement automated tests to quickly identify and fix any issues, ensuring code quality and functionality, Our QA team conducts thorough manual testing to verify that everything works as intended across different devices and browsers, Once everything is tested and approved, we deploy your project to the live environment, ensuring a smooth transition. ",
    date: "May 2023",
    status: "done",
    imageUrl: testing,
  },
  {
    id: "3",
    title: "Support and Maintenance",
    text: "We continuously monitor your solution to detect and address any issues proactively, We provide regular updates and enhancements to keep your solution up-to-date with the latest features and security patches, Our dedicated support team is always available to assist you with any questions or issues you may encounter.",
    date: "May 2023",
    status: "progress",
    imageUrl: sec,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "sheet",
    icon: sheet,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "insta",
    icon: insta,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "x",
    icon: x2,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic Web",
    description: "Launch your brand with a professional website.",
    price: "99+",
    features: [
      "Custom Design Template",
      "Responsive Layout",
      "Basic SEO Setup",
    ],
  },
  {
    id: "1",
    title: "Web + Security",
    description: "Build a stunning website with security features.",
    price: "999+",
    features: [
      "Custom Website Design",
      "SSL Certificate Installation",
      "Security Audit & Protection",
    ],
  },
  {
    id: "2",
    title: "Full Stack + Security",
    description: "Comprehensive solution for digital optimization.",
    price: "4999+",
    features: [
      "Full Stack Website Development",
      "Advanced Cybersecurity Protocols",
      "Process Automation Tools",
    ],
  },
];



export const benefits = [
  {
    id: "0",
    title: "Web Development with React & Next.js",
    text: "Delivering exceptional user experiences with fast, scalable, and SEO-friendly applications using React and Next.js.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Node.js & Express.js",
    text: "Building robust, high-performance server-side applications with Node.js and Express.js to ensure seamless data handling and processing.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Cloud Computing (AWS, Azure, OCI, Google Cloud)",
    text: "Utilizing leading cloud platforms to provide scalable, secure, and cost-effective infrastructure and services tailored to your business needs.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "CI/CD Pipelines (Jenkins)",
    text: "Implementing CI/CD pipelines to automate the build, test, and deployment processes, ensuring faster, more reliable software releases.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Web Security (SSL, Firewalls, Penetration Testing)",
    text: "Protecting your digital assets with SSL certificates, firewalls, and thorough penetration testing to prevent vulnerabilities and ensure data integrity.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Automation & DevOps (Docker, Kubernetes, Ansible)",
    text: "Optimizing workflows and automating operations with Docker, Kubernetes, and Ansible for efficient, scalable, and reliable application deployment.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/Codesec_me",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/codesec.me/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "linkedin",
    iconUrl: link,
    url: "https://www.linkedin.com/in/codesec-me/",
  },
];
