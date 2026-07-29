import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-text-secondary md:flex-row">
        <p>© {year} {siteConfig.name}. Built from scratch, on purpose.</p>
        <div className="flex gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            Twitter
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
