"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { useCommandPalette } from "./command-palette-provider";

interface Command {
  label: string;
  hint: string;
  action: () => void;
}

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = useMemo(
    () => [
      ...siteConfig.nav.map((item) => ({
        label: item.label,
        hint: "page",
        action: () => router.push(item.href),
      })),
      ...projects.map((project) => ({
        label: project.name,
        hint: "project",
        action: () => router.push(`/projects/${project.slug}`),
      })),
      {
        label: `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`,
        hint: "action",
        action: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
    ],
    [router, resolvedTheme, setTheme]
  );

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => setSelectedIndex(0), [query]);

  function runCommand(command: Command) {
    command.action();
    setOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      runCommand(filtered[selectedIndex]);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-background/80 px-4 pt-24 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={16} className="text-text-secondary" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Jump to a page or project…"
            className="w-full bg-transparent font-mono text-sm text-text-primary outline-none placeholder:text-text-secondary"
          />
          <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-text-secondary">
            esc
          </kbd>
        </div>

        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-sm text-text-secondary">
              No matches.
            </li>
          )}
          {filtered.map((command, i) => (
            <li key={command.label}>
              <button
                onClick={() => runCommand(command)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={
                  "flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-sm " +
                  (i === selectedIndex
                    ? "bg-accent/10 text-accent"
                    : "text-text-primary")
                }
              >
                <span>{command.label}</span>
                <span className="text-xs text-text-secondary">
                  {command.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}