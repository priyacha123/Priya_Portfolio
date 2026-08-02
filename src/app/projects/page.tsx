import { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies covering payment infrastructure, rate limiting, and multi-tenant billing systems.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <p className="font-mono text-sm text-accent">selected work</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
        Projects
      </h1>
      <p className="mt-3 max-w-xl text-text-secondary">
        Rate-limited SaaS infrastructure, tenant-isolated billing, and
        agentic AI products — each one below is a full case study, not
        just a screenshot.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}