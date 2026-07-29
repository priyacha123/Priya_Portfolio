import { GithubStats } from "@/components/about/GithubStats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Full-stack engineer, ABES Engineering College.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <p className="font-mono text-sm text-accent">the long version</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
        About
      </h1>

       <div className="mt-8">
        <GithubStats />
      </div>

      <div className="mt-10 max-w-2xl space-y-6 text-text-secondary">
        <p>
          I started with competitive programming — 250+ problems across
          LeetCode, CodeChef, and GeeksforGeeks — mostly because I wanted to
          know exactly why a solution worked, not just that it passed the
          test cases. That habit carried straight into how I build now: I&apos;d
          rather spend an extra afternoon understanding why a webhook can
          arrive twice than ship something that silently breaks the third
          time it does.
        </p>

        <p>
          Most of what I build sits in the unglamorous middle of a system —
          reconciling payment events, enforcing rate limits, isolating
          tenant data. None of it is visible when it works. All of it is
          very visible when it doesn&apos;t. I&apos;ve come to prefer building
          things that fail loudly, with a clear state and a clear reason,
          over things that fail quietly and get discovered a month later.
        </p>

        <p>
          I&apos;m currently studying Computer Science at ABES Engineering
          College, but a lot of the actual learning has happened outside
          coursework — leading frontend development for Stellaris, a
          national-level hackathon platform that supported 1,000+
          participants, and contributing to open source projects like
          GFGXELIXIR, where I migrated an animation system that was causing
          real cross-browser bugs, not a toy refactor.
        </p>

        <p>
          I&apos;m also Technical Lead for the GeeksforGeeks student chapter at
          ABESEC, which mostly means organizing events and keeping a
          community&apos;s Discord and Instagram actually active instead of
          quietly dying — a different kind of systems problem, but a
          systems problem all the same.
        </p>
      </div>
    </main>
  );
}