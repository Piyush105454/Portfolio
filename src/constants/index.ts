import { NavItem, Project, HackathonAchievement, TechSkill, Social, Experience, Stat } from '../types';

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
    id: "experience",
    title: "Experience",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "projects",
    title: "My Work",
  },
  {
    id: "content",
    title: "Creator",
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

export const stats: Stat[] = [
  { value: '~1 yr', label: 'Software developer intern' },
  { value: '500+', label: 'Students on CLAS' },
  { value: '200+', label: 'Active volunteer users' },
  { value: '7', label: 'Schools served' },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: 'Software Developer Intern (Full Stack)',
    company: 'Wazir Education Society (WES Foundation)',
    location: 'India',
    period: 'Dec 2025 – Present',
    summary:
      'Working in a real product team at a non-profit, shipping and running production platforms that replaced manual academic and volunteer workflows with centralized digital systems.',
    points: [
      'Built and deployed the CLAS education platform for 7 schools and 500+ students using Django, PostgreSQL, REST APIs and cloud infrastructure.',
      'Developed a production Volunteer Management System for 200+ active users with React, TypeScript, Supabase and role-based access control.',
      'Implemented authentication, RBAC, attendance, curriculum, session tracking and analytics for Admin, Supervisor, Facilitator and Volunteer workflows.',
      'Set up self-hosted Coolify on a Microsoft Azure Virtual Machine to host multiple apps, domains, environments and deployment workflows.',
      'Managed environment config, databases and deployments; identified deployment risks, troubleshot production issues and worked with stakeholders to improve reliability.',
    ],
    tags: ['Django', 'PostgreSQL', 'React', 'TypeScript', 'Supabase', 'Azure VM', 'Coolify', 'Docker'],
    link: 'https://clas.wazireducationsociety.org/',
  },
  {
    id: 2,
    role: 'Force for Good 2026 — WES Foundation Team',
    company: 'JPMorganChase Force for Good',
    location: 'Mentorship program',
    period: '2026',
    summary:
      'Collaborated with JPMorganChase technology professionals and mentors as part of the WES Foundation team.',
    points: [
      'Translated non-profit requirements into technical solutions and coordinated platform development with mentors and stakeholders.',
    ],
    tags: ['Stakeholder collaboration', 'Requirements', 'Mentorship'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise RAG Knowledge Assistant',
    description:
      'Production-style RAG system over PDF, PPTX and text documents with row-level RBAC, two-stage retrieval and a confidence guardrail. Streams cited answers to a Next.js UI.',
    tags: ['RAG', 'FastAPI', 'pgvector', 'LangGraph', 'Next.js'],
    github: 'https://github.com/Piyush105454/Rag-agent',
    featured: true,
    details: {
      overview:
        'A company knowledge assistant that answers questions from internal PDF, PPTX and text documents, with cited sources streamed to a Next.js interface.',
      problem:
        'Teams keep knowledge scattered across decks and documents, and a plain chatbot over all of it can leak content to people who should not see it or confidently answer from weak context. This system answers only from documents the user is allowed to access, and refuses when it is not confident.',
      role: 'Designed and built the full system end to end — ingestion, retrieval pipeline, access control, API and UI.',
      highlights: [
        'LangGraph pipeline covering query rewriting, retrieval, reranking and answer generation.',
        'Row-level RBAC enforced at the vector-query level, so restricted chunks are never retrieved.',
        'Two-stage retrieval: BGE embeddings for recall, then a CrossEncoder reranker for precision.',
        'Confidence guardrail that blocks low-confidence answers before the LLM call.',
        'Cited answers streamed over SSE to a Next.js UI.',
      ],
      outcome: [
        'Answers are grounded in permitted documents with visible citations.',
        'Low-confidence queries are stopped before they reach the LLM instead of producing guesses.',
      ],
      stack: {
        Backend: ['FastAPI', 'LangGraph', 'Python'],
        'Data / Search': ['PostgreSQL', 'pgvector (HNSW)'],
        'AI / Retrieval': ['BGE embeddings', 'CrossEncoder reranker'],
        Frontend: ['Next.js', 'SSE streaming'],
      },
    },
  },
  {
    id: 2,
    title: 'Innoalaxy AI Research & Automation Platform',
    description:
      'Analyzes a business website, retrieves relevant context and recommends AI tools and automation solutions through a conversational agent.',
    tags: ['AI Agents', 'Google ADK', 'FastAPI', 'RAG', 'PostgreSQL'],
    github: 'https://github.com/Piyush105454/Innoalaxy',
    link: 'https://www.innoalaxy.in/',
    featured: true,
    details: {
      overview:
        'An AI research platform for Innoalaxy, my AI workflow automation startup for Indian SMEs. It reads a business website and recommends where AI and automation will actually help.',
      problem:
        'Small businesses often do not know which AI tools or automations fit their workflow. Manual discovery calls are slow, so this automates the first research pass.',
      role: 'Founder and sole engineer — agent design, retrieval, backend and deployment.',
      highlights: [
        'RAG-based website research that pulls relevant business context before recommending anything.',
        'Conversational interaction built on LLM APIs and Google ADK agents.',
        'Recommendations mapped to the business requirements instead of generic tool lists.',
        'FastAPI backend with PostgreSQL storage and web-context retrieval.',
      ],
      outcome: [
        'Turns a website URL into a tailored AI and automation recommendation.',
        'Forms the discovery layer of the Innoalaxy product.',
      ],
      stack: {
        Backend: ['FastAPI', 'Python', 'PostgreSQL'],
        'AI / Agents': ['LLM APIs', 'Google ADK', 'RAG'],
      },
    },
  },
  {
    id: 3,
    title: 'GitHub AI Code & Commit Analysis Platform',
    description:
      'Monitors GitHub commits via webhooks, analyzes code changes with AI and summarizes contributor activity and code-quality insights for dev teams.',
    tags: ['GitHub Webhooks', 'AI Analysis', 'TypeScript'],
    github: 'https://github.com/Piyush105454/commit-analysis',
    featured: true,
    details: {
      overview:
        'A platform that listens to repository activity and turns raw commits into readable insight for engineering teams.',
      problem:
        'Reviewing what changed and who contributed what across a busy repository is slow. This makes team activity and code quality visible without reading every diff.',
      role: 'Built the webhook ingestion, analysis pipeline and dashboard.',
      highlights: [
        'GitHub webhook integration that captures commits as they are pushed.',
        'AI analysis of code changes to produce summaries and code-quality insights.',
        'Per-contributor activity summaries for development teams.',
      ],
      outcome: [
        'Commit history becomes summarized, searchable team insight.',
      ],
      stack: {
        Integration: ['GitHub Webhooks', 'REST APIs'],
        'AI / Analysis': ['LLM APIs'],
        App: ['TypeScript'],
      },
    },
  },
  {
    id: 4,
    title: 'CLAS — School Management System',
    description:
      'Education platform running in production for 7 schools and 500+ students, replacing manual academic workflows with one centralized system.',
    image: 'https://user2995.na.imgto.link/public/20260224/screenshot-2026-02-24-171409.avif',
    tags: ['Django', 'PostgreSQL', 'REST APIs', 'Azure'],
    github: 'https://github.com/hackerpsyco/try',
    link: 'https://clas.wazireducationsociety.org/',
    featured: true,
    details: {
      overview:
        'CLAS is the education platform I built and deployed at WES Foundation. It manages students, classes, attendance, curriculum and academic records across schools.',
      problem:
        'Schools were tracking attendance, sessions and records by hand, which made reporting slow and inconsistent. CLAS replaces that with one digital source of truth.',
      role: 'Full-stack developer and deployment owner — backend, data model, role-based workflows, hosting and production support.',
      highlights: [
        'Authentication and role-based access control for Admin, Supervisor, Facilitator and Volunteer workflows.',
        'Attendance, curriculum, session tracking and analytics modules.',
        'REST APIs on Django with PostgreSQL.',
        'Deployed on a self-hosted Coolify instance running on a Microsoft Azure VM.',
      ],
      outcome: [
        'Live in production for 7 schools and 500+ students.',
        'Replaced manual academic workflows with a centralized digital system.',
      ],
      stack: {
        Backend: ['Django', 'REST APIs', 'PostgreSQL'],
        Frontend: ['HTML', 'CSS', 'JavaScript'],
        Infra: ['Microsoft Azure VM', 'Coolify', 'Docker'],
      },
    },
  },
  {
    id: 5,
    title: 'Volunteer Management System',
    description:
      'Production platform with role-based access serving 200+ active users, built with React, TypeScript and Supabase.',
    image: 'https://user2995.na.imgto.link/public/20260224/screenshot-2026-02-24-171516.avif',
    tags: ['React', 'TypeScript', 'Supabase', 'RBAC'],
    github: 'https://github.com/hackerpsyco/volunteers_management',
    link: 'https://volunteers-management.vercel.app/',
    featured: true,
    details: {
      overview:
        'A volunteer operations platform for WES Foundation that handles onboarding, role-specific workflows, sessions and attendance for volunteers and their supervisors.',
      problem:
        'Coordinating 200+ volunteers across sessions and roles over chat and spreadsheets does not scale. This gives every role the right view and the right permissions.',
      role: 'Full-stack developer — database design, RBAC, UI and deployment.',
      highlights: [
        'Role-based access control with separate Admin, Supervisor, Facilitator and Volunteer experiences.',
        'Attendance, curriculum and session tracking with analytics.',
        'Supabase for auth, database and policies; React + TypeScript frontend.',
      ],
      outcome: [
        '200+ active users on a production deployment.',
      ],
      stack: {
        Frontend: ['React', 'TypeScript'],
        'Backend / Data': ['Supabase', 'PostgreSQL'],
        Access: ['Role-based access control'],
      },
    },
  },
  {
    id: 6,
    title: 'HumanLink — Team Management Platform',
    description:
      'Team platform built with Next.js and Drizzle ORM where people form tech teams (frontend, backend) and share problems anonymously inside a community.',
    image: 'https://i.ibb.co/RGg1Fdpb/Screenshot-2025-11-10-004843.png',
    tags: ['Next.js', 'Drizzle ORM', 'Tailwind CSS'],
    github: 'https://github.com/Piyush105454/humanlink-anonymous-problem-solver',
    link: 'https://humanlink-anonymous-problem-solver-kappa.vercel.app/',
    details: {
      overview:
        'A community platform where developers join teams by domain and post problems anonymously so others can help.',
      problem:
        'People hesitate to ask for help publicly. Anonymous posting inside focused teams lowers that barrier.',
      role: 'Built the full application.',
      highlights: [
        'Team creation across tech domains such as frontend and backend.',
        'Anonymous problem sharing inside each team community.',
        'Type-safe database layer with Drizzle ORM.',
      ],
      outcome: ['Deployed on Vercel.'],
      stack: {
        App: ['Next.js', 'Tailwind CSS'],
        Data: ['Drizzle ORM'],
      },
    },
  },
];

export const hackathons: HackathonAchievement[] = [
  {
    id: 3,
    title: 'India College Youth Ideathon 2025',
    date: '2025',
    description: 'Ranked in the Top 1000 nationally at the India College Youth Ideathon hosted by IIT Delhi.',
    position: 'Top 1000',
    team: 'Piyush Tamoli',
  },
  {
    id: 1,
    title: "IIIT Bhopal Ideathon",
    date: "March 2025",
    description: "SwapEat is a web-based platform built using Django, featuring real-time location tracking and real time chat and api use for food detection.",
    position: "2nd Place",
    team: "Innov8ors",
  },
  {
    id: 2,
    title: "BIT N BUILD by GDG SOIT RGPV",
    date: "2025",
    description: "Competed in BIT N BUILD hackathon organized by Google Developer Groups On Campus - SOIT RGPV and secured 2nd Runner Up position.",
    position: "2nd Runner Up",
    team: "Piyush Tamoli",
    image: "https://www.instagram.com/p/DUDznP6jNS9/",
  },
];

export const technologies: TechSkill[] = [
  { id: 1, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 90, category: 'backend' },
  { id: 2, name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', proficiency: 80, category: 'frontend' },
  { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 85, category: 'frontend' },
  { id: 4, name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', proficiency: 70, category: 'backend' },
  { id: 5, name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 80, category: 'frontend' },
  { id: 6, name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', proficiency: 80, category: 'frontend' },
  { id: 7, name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', proficiency: 75, category: 'frontend' },
  { id: 8, name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', proficiency: 75, category: 'backend' },
  { id: 9, name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', proficiency: 80, category: 'backend' },
  { id: 10, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', proficiency: 75, category: 'backend' },
  { id: 11, name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', proficiency: 80, category: 'backend' },
  { id: 12, name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', proficiency: 80, category: 'backend' },
  { id: 13, name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', proficiency: 70, category: 'cloud' },
  { id: 14, name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', proficiency: 75, category: 'cloud' },
  { id: 15, name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', proficiency: 65, category: 'cloud' },
  { id: 16, name: 'Google Cloud Run', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', proficiency: 65, category: 'cloud' },
  { id: 17, name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', proficiency: 75, category: 'cloud' },
  { id: 18, name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', proficiency: 85, category: 'tools' },
  { id: 19, name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', proficiency: 70, category: 'ai' },
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
    url: "https://www.instagram.com/piyush_tamoli/?hl=en",
  },
];
