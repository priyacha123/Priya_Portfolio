"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SystemLog } from "./SystemLog";
import { siteConfig } from "@/config/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-content flex-col justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-xl"
      >
        <motion.p variants={item} className="font-mono text-sm text-accent">
          full-stack engineer
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-5xl font-bold leading-tight text-text-primary sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg text-text-secondary">
          I build payment infrastructure, rate limiters, and systems designed
          to fail loudly — idempotent by default, never silently wrong.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <a
            href={siteConfig.resumeUrl}
            download
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Resume ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SystemLog />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-text-secondary sm:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}