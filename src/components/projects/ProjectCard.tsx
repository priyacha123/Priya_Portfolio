import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wide text-status-ok">
            status: {project.status}
          </span>
          <h2 className="mt-2 font-display text-xl font-bold text-text-primary">
            {project.name}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">{project.tagline}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-text-secondary"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-text-secondary">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>
    </Link>
  );
}