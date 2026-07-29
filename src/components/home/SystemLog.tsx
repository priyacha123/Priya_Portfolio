"use client";

import { useEffect, useState } from "react";

type LogLine = {
  time: string;
  text: string;
  status?: "ok" | "error";
};

// These lines are deliberately drawn from your real projects —
// webhook reconciliation, rate limiting, ledger writes — not generic
// "Lorem ipsum" terminal filler.
const LOG_SEQUENCE: LogLine[] = [
  { time: "14:02:11", text: "POST /webhooks/stripe", status: "ok" },
  { time: "14:02:11", text: "idempotency key matched" },
  { time: "14:02:13", text: "rate_limit  9/10 (user)" },
  { time: "14:02:15", text: "POST /webhooks/stripe", status: "error" },
  { time: "14:02:15", text: "retry_after 30s" },
  { time: "14:02:18", text: "ledger write: matched" },
];

export function SystemLog() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisibleCount(LOG_SEQUENCE.length);
      return;
    }

    const interval = setInterval(() => {
      setVisibleCount((count) =>
        count >= LOG_SEQUENCE.length ? 1 : count + 1
      );
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const lines = LOG_SEQUENCE.slice(0, visibleCount);

  return (
    <div className="w-full max-w-md rounded-lg border border-border bg-card font-mono text-xs shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-status-error/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-ok/60" />
        <span className="ml-2 text-text-secondary">system.log</span>
      </div>
      <div className="flex h-40 flex-col justify-end gap-1.5 px-4 py-3">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-text-secondary/60">{line.time}</span>
            <span
              className={
                line.status === "ok"
                  ? "text-status-ok"
                  : line.status === "error"
                    ? "text-status-error"
                    : "text-text-secondary"
              }
            >
              {line.text}
              {line.status === "ok" && " 200"}
              {line.status === "error" && " 429"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}