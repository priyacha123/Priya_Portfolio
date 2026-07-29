import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ArrowLeft, GithubIcon } from "lucide-react";
import { projects, getProjectBySlug } from "@/content/projects";
import { Section } from "@/components/projects/Section";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Priya Kumari`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-content px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-text-secondary transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        all projects
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wide text-status-ok">
            status: {project.status}
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary">
            {project.name}
          </h1>
          <p className="mt-3 max-w-xl text-text-secondary">
            {project.tagline}
          </p>
        </div>

{project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} />
            View code
          </a>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2.5 py-1 font-mono text-xs text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      <Section label="Overview" title="What this is">
        <p>{project.overview}</p>
      </Section>

      <Section label="Problem" title="Why it needed building">
        <p>{project.problem}</p>
      </Section>

      <Section label="Solution" title="How it works">
        <p>{project.solution}</p>
      </Section>

      <Section label="Architecture" title="How it's put together">
        <ul className="space-y-2">
          {project.architecture.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent">→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Challenges" title="The hard part">
        <p>{project.challenges}</p>
      </Section>

      <Section label="Trade-offs" title="What I gave up on purpose">
        <p>{project.tradeoffs}</p>
      </Section>

      <Section label="Performance" title="What changed, measurably">
        <p>{project.performance}</p>
      </Section>

      <Section label="Next" title="What I'd build next">
        <p>{project.futureImprovements}</p>
      </Section>
    </main>
  );
}