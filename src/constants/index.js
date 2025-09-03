import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];

export const experiences = [
  {
    title: "MERN Developer",
    company_name: "Printedge India",
    icon: starbucks,
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
