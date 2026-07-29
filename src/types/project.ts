export type ProjectStatus = "production" | "shipped";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string;
  tradeoffs: string;
  performance: string;
  futureImprovements: string;
}