import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-text-primary">
        route not found
      </h1>
      <p className="mt-2 text-text-secondary">
        No handler matched this path. Check the URL, or head back home.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md border border-border px-4 py-2 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
      >
        cd ~/
      </Link>
    </main>
  );
}
