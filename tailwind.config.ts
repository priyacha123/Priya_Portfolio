import type { Config } from "tailwindcss";

// This is where our whole visual system lives as reusable names.
// Instead of typing bg-[#0A0A0A] everywhere, we type bg-background.
// Change the hex once here, and it updates across the entire site.

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Each token points at a CSS variable holding "R G B" (no commas).
        // The variable's value flips between :root (light) and .dark (dark)
        // in globals.css — that's what makes the theme switcher work.
        // The "/ <alpha-value>" part is what keeps opacity modifiers like
        // bg-accent/50 working correctly with CSS variables.
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-muted": "rgb(var(--color-accent-muted) / <alpha-value>)",
        "status-ok": "rgb(var(--color-status-ok) / <alpha-value>)",
        "status-error": "rgb(var(--color-status-error) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
