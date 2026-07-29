import { Metadata } from "next";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <p className="font-mono text-sm text-accent">get in touch</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
        Contact
      </h1>
      <p className="mt-3 max-w-xl text-text-secondary">
        Open to internships, freelance work, and interesting problems in
        general. The form below opens your email client with everything
        pre-filled — or just reach out directly.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />

        <div className="space-y-4">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={18} />
            {siteConfig.links.email}
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Twitter size={18} />
            Twitter
          </a>
        </div>
      </div>
    </main>
  );
}