export interface NavItem {
  id: string;
  title: string;
}

export interface ProjectDetails {
  /** What the project is, in one or two sentences */
  overview: string;
  /** The problem it solves */
  problem: string;
  /** My role / ownership */
  role: string;
  /** What I built — key features and engineering decisions */
  highlights: string[];
  /** Impact / outcome */
  outcome: string[];
  /** Stack grouped by layer, e.g. { Backend: ['FastAPI'] } */
  stack: Record<string, string[]>;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  details?: ProjectDetails;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
  link?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HackathonAchievement {
  id: number;
  title: string;
  date: string;
  description: string;
  position: string;
  team?: string;
  image?: string;
}

export interface TechSkill {
  id: number;
  name: string;
  icon: string;
  proficiency: number; // 1-100
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'tools' | 'cloud' | 'other';
}

export interface Social {
  id: number;
  name: string;
  icon: string;
  url: string;
}
