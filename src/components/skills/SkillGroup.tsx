import { SkillGroup as SkillGroupType } from "@/content/skills";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h2 className="font-mono text-xs uppercase tracking-wide text-accent">
        {group.category}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-border px-3 py-1.5 text-sm text-text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}