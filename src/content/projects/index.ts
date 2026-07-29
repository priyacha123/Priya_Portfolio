import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "payment-reconciliation-engine",
    name: "Payment Reconciliation Engine",
    tagline: "Stripe webhook reconciliation with zero duplicate transactions",
    status: "production",
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Stripe Webhooks",
      "Resend",
    ],
    githubUrl: "https://github.com/priyacha123",
    overview:
      "A reconciliation system that matches incoming Stripe webhook events against internal payment records, closing the gap where webhooks arrive out of order, get retried, or go missing entirely.",
    problem:
      "Payment webhooks are not guaranteed to arrive exactly once or in order. Without reconciliation, that leads to duplicate transaction records, settlements that silently never get matched to an order, and no visibility into which payments are actually in a healthy state.",
    solution:
      "Every incoming webhook event is matched to an internal record using an idempotency key before being written anywhere. Unmatched settlements are flagged automatically and trigger an email alert via Resend instead of failing silently, so a missed reconciliation is caught within minutes, not discovered during a monthly audit.",
    architecture: [
      "Immutable, append-only PostgreSQL ledger managed through Prisma — transactions are never updated in place, only new rows are appended",
      "Three explicit payment states tracked per transaction: pending, matched, failed",
      "Idempotency keys enforced at the write layer to guarantee exactly-once processing regardless of webhook retries",
      "Discrepancy reports generated across all three states for manual review of edge cases",
    ],
    challenges:
      "The hardest part wasn't matching the happy path — it was designing for Stripe retrying the same webhook multiple times under network failure, and making sure that never resulted in a duplicate ledger entry.",
    tradeoffs:
      "Append-only writes make the ledger easy to audit and impossible to silently corrupt, at the cost of needing derived views (rather than simple updates) to answer 'what is the current state of this transaction.'",
    performance:
      "Duplicate transaction errors reduced to zero. Unmatched settlements are now flagged automatically instead of requiring manual reconciliation.",
    futureImprovements:
      "Add a real-time dashboard over the discrepancy reports instead of relying on email alerts alone, and extend reconciliation to support multiple payment providers beyond Stripe.",
  },
  {
    slug: "api-gateway-rate-limiter",
    name: "API Gateway + Rate Limiter",
    tagline: "Reverse proxy gateway with per-user sliding window rate limiting",
    status: "production",
    techStack: ["Node.js", "Express", "Redis", "PostgreSQL", "JWT", "Next.js"],
    githubUrl: "https://github.com/priyacha123",
    overview:
      "A reverse proxy API gateway sitting in front of internal services, handling authentication and rate limiting centrally instead of duplicating that logic across every downstream service.",
    problem:
      "Without a central gateway, every service ends up reimplementing its own auth checks and rate limiting inconsistently — some routes unprotected, quotas untracked, and no unified view of who's hitting the API too hard.",
    solution:
      "JWT authentication middleware validates every request before it reaches a downstream service. A sliding window rate limiter backed by Redis tracks usage per user, with configurable quotas per route and per user tier, returning standard 429 responses with a Retry-After header when limits are exceeded.",
    architecture: [
      "JWT validation middleware sitting at the edge of the gateway, rejecting unauthenticated requests before any downstream call",
      "Sliding window rate limiting implemented in Redis for low-latency quota checks under load",
      "Per-route, per-user-tier quota configuration instead of one global limit",
      "Centralized request logging with per-IP volume tracking in PostgreSQL to flag abuse patterns",
    ],
    challenges:
      "Sliding window rate limiting is deceptively easy to get wrong at the boundary — a naive fixed-window implementation lets a user burst 2x their quota right at the window edge. Redis-backed sliding windows avoid that.",
    tradeoffs:
      "Centralizing auth and rate limiting in a gateway adds one more network hop and a single point that must stay highly available, in exchange for removing duplicated, inconsistent logic from every downstream service.",
    performance:
      "Unauthorized request throughput reduced by 100% via the token validation layer, with abuse patterns now visible through per-IP request volume tracking.",
    futureImprovements:
      "Add per-route circuit breaking so a struggling downstream service degrades gracefully instead of the gateway continuing to forward requests it can't fulfill.",
  },
  {
    slug: "multi-tenant-saas-billing",
    name: "Multi-tenant SaaS with Billing",
    tagline: "Tenant-isolated SaaS platform with usage-based Stripe billing",
    status: "production",
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
    githubUrl: "https://github.com/priyacha123",
    overview:
      "A multi-tenant SaaS platform where organizations can switch between workspaces, data is isolated per tenant at the database level, and billing enforces usage limits automatically across three subscription tiers.",
    problem:
      "Multi-tenant systems fail in two classic ways: data leaking across tenant boundaries, and billing state drifting out of sync with what a customer actually has access to (especially around failed payments and plan changes).",
    solution:
      "Clerk handles organization switching and identity, while row-level data isolation in PostgreSQL guarantees one tenant can never read another's data — enforced at the database layer, not just in application code. Stripe subscription webhooks (created, updated, cancelled, past-due) are processed with idempotency keys, and a failed payment automatically triggers plan downgrade enforcement at the API layer.",
    architecture: [
      "Row-level security in PostgreSQL for per-tenant data isolation, not just query-level filtering",
      "Clerk organization switching for multi-workspace identity management",
      "Three billing tiers with usage-based limits enforced at the API layer, not just checked in the UI",
      "Idempotent Stripe webhook handlers covering the full subscription lifecycle",
    ],
    challenges:
      "Keeping billing state consistent with actual access required treating 'payment failed' as a first-class state machine transition, not an afterthought — a downgrade has to be enforced immediately and automatically, not caught later by a support ticket.",
    tradeoffs:
      "Enforcing usage limits at the API layer (rather than trusting the frontend) adds a check to every relevant request, but it's the only way to guarantee a downgraded tenant can't keep exceeding their plan through direct API calls.",
    performance:
      "Billing state inconsistencies reduced to zero through idempotent webhook handling and automated downgrade enforcement on payment failure.",
    futureImprovements:
      "Add self-serve plan comparison and proration preview before a tenant confirms an upgrade or downgrade.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}