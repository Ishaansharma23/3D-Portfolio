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
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "MERN Developer", icon: web },
  { title: "Backend Developer", icon: backend },
  { title: "Frontend Developer", icon: creator },
  { title: "AI Integration", icon: web },
];

export const technologies = [
  { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "EJS", icon: "https://miro.medium.com/v2/resize:fit:1400/1*KKciGBpSE9sxj8aZ1Xdu-w.png" }, 
  { name: "Handlebars", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
  { name: "Locomotive Scroll", icon: "https://miro.medium.com/v2/resize:fit:1400/1*Loeqb8G4mx_-abH0whKLyw.png" },
  { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Render", icon: "https://images.seeklogo.com/logo-png/53/1/render-logo-png_seeklogo-532232.png" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Tailwind CSS", icon: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Email JS", icon: "https://www.emailjs.com/logo.png" },
];


export const experiences = [
  {
    title: "MERN Developer",
    company_name: "Printedge India",
  logo: "/Printedge.png",
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Developed a full-stack web application with complete frontend and backend functionality.",
      "Implemented secure user authentication with JWT, hashed passwords using bcrypt, and session management with cookies.",
      "Built an interactive and responsive UI using React.js, incorporating animations with GSAP and smooth scrolling with Locomotive Scroll.",
      "Handled end-to-end development including database design, server-side logic, API integration, and client-side rendering.",
      "Ensured secure data handling and a seamless user experience across devices and browsers.",
    ],
  },
];


export const projects = [
  {
    name: "JARVIS Voice Control",
    description:
      "A voice-controlled AI assistant that responds to commands and performs tasks. Full-stack implementation with real-time interactions.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: threejs, // replace with actual project image if available
    source_code_link: "https://github.com/Ishaansharma23/JARVIS",
    live_link: "https://jarvis-q7d6.onrender.com",
  },
  {
    name: "GTA Frontend Animations",
    description:
      "Frontend project with animations showcasing interactive page elements using React, GSAP, and Tailwind CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent, // replace with actual project image if available
    source_code_link: "https://github.com/Ishaansharma23/GTA",
    live_link: "https://gta-py7a.onrender.com",
  },
  {
    name: "FUNDEASE",
    description:
      "A full-stack fundraising platform with complete frontend, backend, and a user dashboard for managing campaigns and donations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: jobit, // replace with actual project image if available
    source_code_link: "https://github.com/Ishaansharma23/FUNDEASE_",
    live_link: "https://fundease.onrender.com",
  },
];
