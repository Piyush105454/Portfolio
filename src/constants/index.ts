import { NavItem, Project, HackathonAchievement, TechSkill, Social } from '../types';

export const navLinks: NavItem[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "Who Am I?",
  },
  {
    id: "projects",
    title: "My Work",
  },
  {
    id: "hackathons",
    title: "Wins & Hacks",
  },
  {
    id: "techstack",
    title: "Tech Stack",
  },
  {
    id: "contact",
    title: "Let's Talk",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Swapeat",
    description:
      "SwapEat is a web-based platform built using Django, featuring real-time location tracking with Leaflet.js and chat integration using Django Channels and WebSockets. It enables efficient food sharing by connecting users through a responsive interface and secure backend. The system supports user authentication, live messaging, and geolocation-based listings. Future updates will include AI-powered food freshness detection and automated report generation.",
    image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "django", "javascript", "CSS"],
    github: "https://github.com/Piyush105454",
    link: "https://notable-carlina-piyush105454-4bf50dc7.koyeb.app/",
  },
  
   
 
];

export const hackathons: HackathonAchievement[] = [
  {
    id: 1,
    title: "IIIT Bhopal Ideathon",
    date: "March 2025",
    description: "SwapEat is a web-based platform built using Django, featuring real-time location tracking and real time chat and api use for food detection.",
    position: "2st Place",
    team: "Innov8ors",
  },
 
];

export const technologies: TechSkill[] = [
  {
    id: 1,
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 90,
    category: "frontend"
  },
  {
    id: 2,
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 85,
    category: "frontend"
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 85,
    category: "frontend"
  },
  {
    id: 4,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 80,
    category: "frontend"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    proficiency: 75,
    category: "frontend"
  },
  {
    id: 6,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    proficiency: 90,
    category: "backend"
  },
  {
    id: 7,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 75,
    category: "backend"
  },
  {
    id: 8,
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    proficiency: 70,
    category: "backend"
  },
  /*{
    id: 9,
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    proficiency: 65,
    category: "backend"
  },*/
  
 
 
  {
    id: 16,
    name: "Scikit-learn",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    proficiency: 70,
    category: "ai"
  },
  {
    id: 17,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 80,
    category: "tools"
  },
 
  {
    id: 19,
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    proficiency: 75,
    category: "tools"
  },
  {
    id: 20,
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    proficiency: 90,
    category: "tools"
  }
];

export const socials: Social[] = [
  {
    id: 1,
    name: "GitHub",
    icon: "github",
    url: "https://github.com/Piyush105454",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/piyush-tamoli-751b2125a",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "instagram",
    url: "https://instagram.com/",
  },
];