import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { CommandPaletteProvider } from "@/components/command-palette/command-palette-provider";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

// Three fonts, three jobs:
// - Space Grotesk: headlines. Has character, used with restraint.
// - Inter: body text. Quiet, readable, gets out of the way.
// - JetBrains Mono: nav labels, tags, the system-log panel. This is
//   what makes the site feel "terminal-native" instead of just dark-mode.

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

// IMPORTANT: replace this with your real deployed domain once you've
// finished Phase 8 — it's used to build absolute URLs for Open Graph,
// canonical links, and the sitemap.
const SITE_URL = "https://priyakumari.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Priya Kumari — Full-stack Engineer",
    template: "%s — Priya Kumari",
  },
  description:
    "Full-stack engineer building payment infrastructure, rate limiters, and systems that fail loudly instead of silently.",
  keywords: [
    "Priya Kumari",
    "full-stack engineer",
    "Next.js developer",
    "payment infrastructure",
    "software engineer portfolio",
  ],
  authors: [{ name: "Priya Kumari" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Priya Kumari",
    title: "Priya Kumari — Full-stack Engineer",
    description:
      "Payment infrastructure, rate limiters, and systems designed to fail loudly instead of silently.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@textrovert39",
    title: "Priya Kumari — Full-stack Engineer",
    description:
      "Payment infrastructure, rate limiters, and systems designed to fail loudly instead of silently.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <CommandPaletteProvider>
            <Nav />
            <div id="main-content" className="flex-1">
              {children}
            </div>
            <Footer />
            <CommandPalette />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}