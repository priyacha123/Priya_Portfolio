# Priya Kumari — Portfolio (Phase 1: Setup)

## What's in this zip

A working Next.js + TypeScript + Tailwind project skeleton, with the
color/font system already wired in. Nothing looks "designed" yet on
purpose — Phase 1 is just proving the foundation runs.

## Run it locally — step by step

1. **Install Node.js** (skip if you already have it)
   Go to https://nodejs.org, download the "LTS" version, install it.
   Confirm it worked by opening a terminal and running:
   ```
   node -v
   ```
   You should see something like `v20.x.x`.

2. **Unzip this project** anywhere on your computer, then open a
   terminal inside that folder (in VS Code: right-click the folder →
   "Open in Terminal").

3. **Install dependencies** — this downloads Next.js, React, Tailwind,
   etc. into a `node_modules` folder:
   ```
   npm install
   ```
   This will take a minute or two the first time.

4. **Start the dev server**:
   ```
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser. You should see a
   black background, an amber "phase 1 — setup complete" label, and
   your name in bold.

If that's what you see — the whole foundation (Next.js, TypeScript,
Tailwind, custom color tokens, custom fonts) is confirmed working, and
we're ready for Phase 2.

## Folder structure so far

```
src/
└── app/
    ├── layout.tsx     ← loads fonts, wraps every page
    ├── page.tsx       ← the home page (placeholder for now)
    └── globals.css    ← Tailwind + base styles
tailwind.config.ts     ← our color palette & font names live here
```

More folders (`components/`, `features/`, `content/`, etc.) get added
as we build each section — no need to create empty folders in advance.
