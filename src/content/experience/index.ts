export interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  impact: string[];
  tech: string[];
}

export const timeline: TimelineEntry[] = [
  {
    role: "Technical Lead",
    org: "GeeksforGeeks Student Chapter, ABESEC",
    period: "Ongoing",
    current: true,
    impact: [
      "Organize technical events for the student chapter end to end",
      "Drive community engagement and manage digital outreach across Instagram and Discord",
    ],
    tech: ["Community", "Events"],
  },
  {
    role: "Frontend Lead — Stellaris Hackathon",
    org: "GFGXELIXIR",
    period: "National-level hackathon",
    impact: [
      "Led frontend development for Stellaris, managing an 8+ person team through task allocation, mentor guidance, code reviews, and PR approvals across the full build cycle",
      "Website supported 1,000+ participants across countries",
    ],
    tech: ["Next.js", "GSAP"],
  },
  {
    role: "Contributor — Animation System Migration",
    org: "GFGXELIXIR",
    period: "Open source",
    impact: [
      "Migrated the animation system from AOS to GSAP, resolving z-index and visibility conflicts across 8+ UI sections",
      "Reduced animation jank and achieved consistent cross-browser rendering",
    ],
    tech: ["Next.js", "GSAP"],
  },
  {
    role: "Contributor",
    org: "Dew Player",
    period: "Open source",
    impact: [
      "Diagnosed and fixed video and subtitle upload failures in a browser-based media player, tracing the root cause to async file handling and enforcing validated upload flows with error boundaries",
      "Implemented frame-accurate video-subtitle sync and rebuilt a responsive UI with Tailwind CSS for consistent playback across desktop and mobile",
    ],
    tech: ["Next.js", "TypeScript", "Clerk"],
  },
];