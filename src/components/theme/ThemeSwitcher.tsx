"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  // Theme isn't known on the server, so we render a neutral placeholder
  // until after hydration to avoid a light/dark flash mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}