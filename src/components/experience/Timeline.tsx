import { TimelineEntry } from "@/content/experience";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8">
      {entries.map((entry, i) => (
        <li key={i} className="mb-12 last:mb-0">
          <span
            className={
              "absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background " +
              (entry.current ? "bg-accent" : "bg-text-secondary")
            }
          />
          <p className="font-mono text-xs uppercase tracking-wide text-text-secondary">
            {entry.period}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-text-primary">
            {entry.role}
          </h3>
          <p className="text-sm text-accent">{entry.org}</p>

          <ul className="mt-3 space-y-2 text-text-secondary">
            {entry.impact.map((point, j) => (
              <li key={j} className="flex gap-2">
                <span className="text-accent">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-2">
            {entry.tech.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2 py-0.5 font-mono text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}