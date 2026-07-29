"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs uppercase tracking-wide text-text-secondary"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-md border border-border bg-card px-4 py-2.5 text-text-primary outline-none focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-wide text-text-secondary"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-border bg-card px-4 py-2.5 text-text-primary outline-none focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wide text-text-secondary"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-md border border-border bg-card px-4 py-2.5 text-text-primary outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}