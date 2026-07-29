export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "JWT", "Socket.io", "FastAPI"],
  },
  {
    category: "Databases & ORMs",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase Firestore",
      "Prisma",
      "Drizzle ORM",
    ],
  },
  {
    category: "APIs",
    skills: ["RESTful APIs", "GraphQL"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Stripe",
      "Clerk",
      "Cloudinary",
      "Resend",
    ],
  },
];