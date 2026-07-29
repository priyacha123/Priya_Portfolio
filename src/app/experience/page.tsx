import { Metadata } from "next";
import { timeline } from "@/content/experience";
import { Timeline } from "@/components/experience/Timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Leadership and open source contribution history.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <p className="font-mono text-sm text-accent">track record</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text-primary">
        Experience
      </h1>
      <p className="mt-3 max-w-xl text-text-secondary">
        Leadership and open source work — where I&apos;ve owned outcomes,
        not just tickets.
      </p>

      <div className="mt-12">
        <Timeline entries={timeline} />
      </div>
    </main>
  );
}