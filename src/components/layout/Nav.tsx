"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { useCommandPalette } from "@/components/command-palette/command-palette-provider";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { setOpen: setPaletteOpen } = useCommandPalette();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-text-primary"
        >
          priya<span className="text-accent">.</span>dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-mono text-sm transition-colors hover:text-text-primary",
                  active ? "text-accent" : "text-text-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => setPaletteOpen(true)}
            className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-accent hover:text-accent"
            aria-label="Open command palette"
          >
            <Search size={13} />
            <kbd>⌘K</kbd>
          </button>
          <ThemeSwitcher />
          <a
            href={siteConfig.resumeUrl}
            download
            className="rounded-md border border-border px-3 py-1.5 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Resume ↓
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-2 py-2 font-mono text-sm",
                  active ? "text-accent" : "text-text-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={siteConfig.resumeUrl}
            download
            className="rounded-md px-2 py-2 font-mono text-sm text-text-primary"
          >
            Resume ↓
          </a>
          <div className="mt-2 flex items-center gap-3 px-2">
            <button
              onClick={() => {
                setOpen(false);
                setPaletteOpen(true);
              }}
              className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-text-secondary"
            >
              <Search size={13} />
              Search
            </button>
            <ThemeSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}