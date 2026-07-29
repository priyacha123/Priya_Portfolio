import { Metadata } from "next";
import { skillGroups } from "@/content/skills";
import { SkillGroup } from "@/components/skills/SkillGroup";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, and tools, grouped honestly.",
};

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <p className="font-mono text-sm text-accent">stack</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
        Skills
      </h1>
      <p className="mt-3 max-w-xl text-text-secondary">
        Grouped by category, not ranked by fake percentages — depth shows up
        in the project case studies, not a progress bar.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </main>
  );
}