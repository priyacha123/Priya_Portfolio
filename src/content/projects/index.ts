import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gatekey",
    name: "GateKey",
    tagline: "API key management SaaS with tiered rate limiting and a circuit breaker",
    status: "shipped",
    techStack: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Razorpay",
      "Railway",
      "JWT",
      "Vercel",
    ],
    githubUrl: "https://github.com/priyacha123/api-gateway-dashboard",
    overview:
      "GateKey is a full-stack SaaS platform for issuing and managing API keys, built for teams that need per-tier rate limiting, safe key storage, and resilience when downstream calls start failing.",
    problem:
      "Homegrown API key systems usually get one thing right and skip the others — either keys are stored insecurely, rate limits aren't actually enforced under load, or there's no graceful behavior when a downstream service starts failing.",
    solution:
      "Keys are generated with a SHA-256 hashed, show-once pattern, so the raw key is never stored or retrievable after creation. Redis-backed sliding window rate limiting enforces separate Free (60 req/min) and Pro (1000 req/min) quotas. A circuit breaker trips to OPEN after 5 consecutive failures and auto-recovers through a 10-second HALF-OPEN state instead of hammering a struggling downstream service.",
    architecture: [
      "SHA-256 hashed API key generation using a show-once pattern — raw keys are never persisted",
      "Per-key Redis sliding window rate limiting enforcing tier-based quotas (Free vs Pro)",
      "Circuit breaker with OPEN / HALF-OPEN / CLOSED states, tripping after 5 consecutive failures and auto-recovering after 10 seconds",
      "Multi-tenant platform with strict per-user data isolation, verified across 4+ test accounts",
      "Razorpay subscription billing with HMAC-SHA256 webhook signature verification across activated, cancelled, and halted lifecycle events",
    ],
    challenges:
      "Getting the circuit breaker's recovery behavior right was the hardest part — recovering too eagerly reintroduces load onto a still-struggling service, recovering too conservatively leaves the gateway rejecting requests longer than necessary.",
    tradeoffs:
      "The show-once key pattern means a lost key can only be rotated, never retrieved — a deliberate trade of convenience for the guarantee that a stolen database dump can't be used to derive a working key.",
    performance:
      "Gateway processing latency stays under 20ms excluding I/O. Rate limiting held tier quotas correctly under load (37 requests in 30s), with zero cross-tenant data leakage across test accounts.",
    futureImprovements:
      "Add usage analytics per API key so customers can see which endpoints and quotas they're actually consuming before they hit a limit.",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: "Multi-tenant SaaS platform with tenant-isolated Stripe billing",
    status: "shipped",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Clerk",
      "Redis",
      "Resend",
      "Vercel",
    ],
    githubUrl: "https://github.com/priyacha123/taskflow",
    overview:
      "TaskFlow is a multi-tenant SaaS platform where organizations can switch between workspaces, data is isolated per tenant at the database level, and billing enforces usage limits automatically across three subscription tiers.",
    problem:
      "Multi-tenant systems fail in two classic ways: data leaking across tenant boundaries, and billing state drifting out of sync with what a customer actually has access to — especially around failed payments and plan changes.",
    solution:
      "Clerk handles organization switching and identity, while row-level data isolation in PostgreSQL guarantees one tenant can never read another's data. Stripe subscription webhooks (created, updated, cancelled, past-due) are processed idempotently, and a failed payment automatically triggers plan downgrade enforcement at the API layer.",
    architecture: [
      "Row-level data isolation in PostgreSQL for per-tenant separation, not just query-level filtering",
      "Clerk organization switching for multi-workspace identity management",
      "Three billing tiers with usage-based limits enforced at the API layer, not just checked in the UI",
      "Idempotent Stripe webhook handlers covering the full subscription lifecycle",
    ],
    challenges:
      "Keeping billing state consistent with actual access required treating 'payment failed' as a first-class state transition, not an afterthought — a downgrade has to be enforced immediately and automatically, not caught later by a support ticket.",
    tradeoffs:
      "Enforcing usage limits at the API layer, rather than trusting the frontend, adds a check to every relevant request — but it's the only way to guarantee a downgraded tenant can't keep exceeding their plan through direct API calls.",
    performance:
      "Billing state inconsistencies reduced to zero through idempotent webhook handling and automated downgrade enforcement on payment failure.",
    futureImprovements:
      "Add self-serve plan comparison and proration preview before a tenant confirms an upgrade or downgrade.",
  },
  {
    slug: "journi",
    name: "Journi",
    tagline: "Agentic AI itinerary engine generating personalized trips in under 30s",
    status: "production",
    techStack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Grok API",
      "Redis",
      "Clerk",
    ],
    githubUrl: "https://github.com/priyacha123/Journi",
    overview:
      "Journi is an AI trip planner built around an agentic itinerary engine that autonomously generates personalized, editable day-to-day travel plans.",
    problem:
      "A genuinely useful itinerary means pulling live data from several unrelated services — flights and hotels, weather, maps — and reasoning over all of it together, not just calling one API and templating the response.",
    solution:
      "Built an agentic engine on top of Grok's API using tool-use and function calling, orchestrating real-time calls across 3+ third-party services to assemble a full itinerary in under 30 seconds. A Redis-backed job queue handles the 10-30 second generation time asynchronously, so it never blocks the request cycle.",
    architecture: [
      "Agentic itinerary engine built on Grok's API using tool-use / function calling to orchestrate flights/hotels, weather, and maps data",
      "Redis-backed job queue decoupling 10-30 second AI generation tasks from the request-response cycle",
      "Stripe subscription billing with a 2-tier (free/paid) pricing model",
      "Usage limits enforced at the API layer via Clerk-authenticated sessions",
    ],
    challenges:
      "Coordinating multiple third-party API calls inside a single agentic reasoning loop, without the whole generation stalling if one service — say, weather — is slow to respond.",
    tradeoffs:
      "Offloading generation to a job queue means the frontend has to poll or subscribe for a result instead of getting an instant response — a deliberate trade of raw request latency for not blocking the server on a 30-second AI call.",
    performance:
      "Generates personalized, editable itineraries in under 30 seconds, with 5+ full trips generated to date.",
    futureImprovements:
      "Add real-time collaborative editing so a group can adjust a shared itinerary together instead of each person holding their own editable copy.",
  },
  {
    slug: "clip-crafter-ai",
    name: "Clip Crafter AI",
    tagline: "AI platform converting text into fully rendered short videos",
    status: "shipped",
    techStack: [
      "Next.js",
      "Gemini API",
      "Google TTS",
      "AssemblyAI",
      "ClipDrop",
      "Remotion",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Firebase Storage",
    ],
    githubUrl: "https://github.com/priyacha123/Clip-Crafter-AI",
    overview:
      "Clip Crafter AI turns a text prompt into a fully rendered short video — script, voiceover, captions, and visuals generated and assembled automatically.",
    problem:
      "Producing a short video from a text idea normally means stitching together several unrelated tools by hand — a script writer, a text-to-speech engine, a captioning tool, and a video renderer — with nothing connecting them into one pipeline.",
    solution:
      "Built a scalable system integrating Gemini for script generation, Google Text-to-Speech for voiceover, AssemblyAI for captions, and ClipDrop for visuals, assembled into a final video with Remotion, all behind a single async processing pipeline.",
    architecture: [
      "Async processing pipeline chaining script generation (Gemini), voiceover (Google TTS), captioning (AssemblyAI), and visuals (ClipDrop)",
      "Video assembly and rendering handled by Remotion",
      "Neon PostgreSQL with Drizzle ORM for structured data",
      "Firebase Storage for generated media assets, Clerk for authentication",
    ],
    challenges:
      "Keeping the pipeline resilient when any one of four external AI services is the one that's slow or fails — a single stuck step shouldn't fail the entire video generation job.",
    tradeoffs:
      "Chaining four separate external services gives more creative control over each step than a single all-in-one video API would, at the cost of more integration surface area to maintain.",
    performance:
      "Produces a fully rendered short video — script through final render — from a single text prompt via one async pipeline.",
    futureImprovements:
      "Add a queue-based retry mechanism per pipeline step so a single failed API call doesn't require regenerating the entire video from scratch.",
  },
  {
    slug: "gallery-vault",
    name: "Gallery Vault",
    tagline: "AI-powered photo editing and media management platform",
    status: "shipped",
    techStack: ["Next.js", "TypeScript", "Cloudinary", "next-cloudinary"],
    githubUrl: "https://github.com/priyacha123/Gallery-Vault",
    overview:
      "Gallery Vault is a photo editing and media management platform with camera capture and AI-powered editing built in.",
    problem:
      "Most simple photo apps handle storage or editing, rarely both well — and AI editing features like background removal or generative fill usually require a separate specialized tool.",
    solution:
      "Integrated Cloudinary with next-cloudinary for real-time image processing — generative fill, background removal, enhancement, effects — plus secure storage and media management features like likes, favorites, albums, and deletion workflows.",
    architecture: [
      "Cloudinary + next-cloudinary integration for real-time AI image processing and secure media storage",
      "In-app camera capture, not just file upload",
      "Media organization: albums, favorites, likes, and deletion workflows",
    ],
    challenges:
      "Keeping AI-processed image operations, like generative fill and background removal, feeling instant despite running through Cloudinary's processing pipeline rather than client-side.",
    tradeoffs:
      "Relying on Cloudinary for AI processing meant faster shipping than building custom ML models, at the cost of depending on their processing API and pricing.",
    performance:
      "Supports real-time generative fill, background removal, enhancement, and effects directly in the browser workflow.",
    futureImprovements:
      "Add shareable album links so a user can send a curated set of photos to someone without giving them full account access.",
  },

];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}