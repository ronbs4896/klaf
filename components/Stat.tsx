import Section from "./ui/Section";

export default function Stat() {
  return (
    <Section tone="cream">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          From What We See
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          Many families haven&apos;t checked their mezuzot in years.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
          In many homes, mezuzot stay on the doorpost for years without ever
          being opened. Sunlight, moisture, age, and normal wear can affect the
          scroll over time. Our goal is simple: make proper mezuzah inspection
          accessible to every Jewish home.
        </p>
        <p className="mt-6 text-sm text-ink/55">
          Based on the inspections we have seen, many families are surprised
          to discover that one or more mezuzot need attention.
        </p>
      </div>
    </Section>
  );
}
