export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Cloud";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  impact: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  location: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  contactLinks: ContactLink[];
}
