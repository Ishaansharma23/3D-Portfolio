import {
  backend,
  creator,
  web,
  carrent,
  jobit,
  threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "tech", title: "Tech" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "MERN Developer", icon: web },
  { title: "Backend Developer", icon: backend },
  { title: "Exposure to DevOps", icon: creator },
  { title: "AI Integration", icon: web },
];

export const technologyCategories = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        invert: true,
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    category: "Backend & Real-Time",
    technologies: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        invert: true,
      },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      {
        name: "Socket.IO",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        invert: true,
      },
      {
        name: "WebSockets",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/1280px-WebSocket_colored_logo.svg.png",
      },
      {
        name: "WebRTC",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/68/WebRTC_Logo.svg",
        invert: true,
      },
      {
        name: "EJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        invert: true,
      },
      {
        name: "Handlebars",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
        invert: true,
      },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "CI/CD Pipelines", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        invert: true,
      },
      { name: "Render", icon: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4" },
    ],
  },
  {
    category: "AI & Automation",
    technologies: [
      { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    ],
  },
  {
    category: "Databases, Auth & Tools",
    technologies: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      {
        name: "JWT",
        icon: "https://jwt.io/img/pic_logo.svg",
        invert: true,
      },
      {
        name: "Clerk Auth",
        icon: "https://avatars.githubusercontent.com/u/87621839?s=200&v=4",
      },
      { name: "EmailJS", icon: "https://avatars.githubusercontent.com/u/4430336?s=200&v=4" },
      { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    ],
  },
];

export const technologies = technologyCategories.flatMap(cat => cat.technologies);

export const experiences = [
  {
    title: "DevOps Intern",
    company_name: "Paytm",
    logo: "/paytm.svg",
    iconBg: "#FFFFFF",
    date: "June to Present",
    logoClass: "w-[85%] h-[85%] object-contain",
    points: [
      "Automated CI/CD pipelines using Jenkins, GitHub Actions, and Docker for seamless application deployments.",
      "Containerized microservices and configured environment variables across dev, staging, and production environments.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Airtel Digital",
    logo: "/airtel.svg",
    iconBg: "#FFFFFF",
    date: "June to Aug",
    logoClass: "w-[85%] h-[85%] object-contain",
    points: [
      "Built and optimized high-throughput microservices and RESTful APIs using Node.js and Express.",
      "Enhanced database queries and backend performance to handle large-scale user traffic efficiently.",
      "Integrated responsive UI components with microservices in collaboration with frontend engineers.",
      "Implemented robust error handling, security protocols, and scalable architecture best practices.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "Printedge India",
    logo: "/Printedge.png",
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    logoClass: "w-[100%] h-[100%] scale-125 object-contain",
    points: [
      "Developed a full-stack web application with complete frontend and backend functionality.",
      "Implemented secure authentication using JWT, bcrypt, and cookie-based sessions.",
      "Built responsive UIs with React, GSAP animations, and smooth scrolling.",
      "Handled database design, APIs, and client-side rendering end-to-end.",
      "Ensured performance, security, and cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Qnnect",
    logo: "/qnnect.png",
    iconBg: "#1F2937",
    date: "September 2025 – October 2025",
    logoClass: "w-[100%] h-[100%] object-contain",
    points: [
      "Worked on a 1-on-1 live mentorship web platform, collaborating with a cross-functional team.",
      "Built responsive frontend interfaces and integrated them with backend APIs.",
      "Developed the complete frontend for an NGO website, independently handling layout, routing, and UI logic.",
      "Gained hands-on experience in full-stack development, teamwork, and real-world project execution.",
    ],
  },
];


export const projects = [
  {
    name: "Edith AI",
    description:
      "Built a full-stack real-time AI chat application with a responsive frontend, enabling instant conversations using Socket.IO and Gemini API for intelligent, context-aware responses. Implemented a secure Node.js/Express backend with JWT and cookie-based authentication, following a scalable MVC architecture.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "ai", color: "blue-text-gradient" },
    ],
    image: "/edith.png",
    source_code_link: "https://github.com/Ishaansharma23/Edith-AI",
    live_link: "https://edith-ai-coral.vercel.app",
  },
  {
    name: "NyaySahay",
    description:
      "Developed a full-stack AI-powered LegalTech platform featuring real-time chat, video calling, and a personal AI legal chatbot that analyzes laws to provide actionable legal guidance. Enabled direct advocate consultations with paid interactions, media evidence uploads, and automated authority reporting via EmailJS using Socket.IO, WebRTC, and Node.js/Express REST APIs.",
    tags: [
      { name: "legaltech", color: "blue-text-gradient" },
      { name: "webrtc", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
      { name: "nodejs", color: "blue-text-gradient" },
    ],
    image: "/nyaysahay.png",
    source_code_link: "https://github.com/Ishaansharma23/NyaySahayHack",
    live_link: "",
  },
    {
      name: "ApeAxis",
      description:
        "Built a full-stack business automation and CRM platform that provides companies with intelligent chatbots for customer engagement. Implemented automated WhatsApp-based chatbots capable of sending messages, handling customer queries. Developed a scalable web dashboard to manage chatbot interactions and business data.",
      tags: [
        { name: "fullstack", color: "blue-text-gradient" },
        { name: "crm", color: "green-text-gradient" },
        { name: "chatbot", color: "pink-text-gradient" },
        { name: "automation", color: "blue-text-gradient" },
      ],
      image: "/apeaxis.png",
      source_code_link: "https://github.com/Ishaansharma23/ApeAxis",
      live_link: "",
    }
];
