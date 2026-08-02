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
    skills: [
      "React",
      "Next.js",
      "Remix",
      "Tailwind CSS",
      "Radix UI",
      "Headless UI",
      "shadcn/ui",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Databases & ORMs",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase Firestore",
      "Supabase",
      "Prisma",
      "Drizzle ORM",
    ],
  },
  {
    category: "Content & Rendering",
    skills: ["MDX v2", "Markdown Processing", "Remark", "Rehype"],
  },
  {
    category: "APIs & Auth",
    skills: ["RESTful APIs", "GraphQL", "JWT", "Clerk", "Google OAuth"],
  },
  {
    category: "AI & Third-party APIs",
    skills: [
      "Gemini API",
      "Grok API",
      "Google Text-to-Speech",
      "AssemblyAI",
      "ClipDrop",
      "Google Maps API",
      "Nominatim API",
    ],
  },
  {
    category: "Payments & Billing",
    skills: ["Stripe", "Razorpay"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Railway",
      "Cloudinary",
      "Resend",
      "Firebase",
      "Canva",
    ],
  },
];