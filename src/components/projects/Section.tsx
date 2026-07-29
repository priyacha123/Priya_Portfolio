export function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-10">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        {label}
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold text-text-primary">
        {title}
      </h2>
      <div className="mt-4 max-w-2xl text-text-secondary">{children}</div>
    </section>
  );
}