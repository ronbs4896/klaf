import Section from "./ui/Section";

export default function Stat() {
  return (
    <Section tone="cream" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-4xl">
        <div className="relative rounded-[2rem] border border-line bg-white px-8 py-14 sm:px-14 sm:py-20">
          {/* Decorative quote mark */}
          <span
            aria-hidden
            className="h-display absolute left-8 top-6 select-none text-7xl leading-none text-gold/30 sm:left-12 sm:text-8xl"
          >
            “
          </span>

          <div className="relative text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
              From the families we visit
            </p>

            <p className="h-display mx-auto mt-6 max-w-3xl text-[1.9rem] leading-[1.15] text-ink sm:text-[2.4rem] lg:text-[3rem]">
              Many families haven&apos;t opened a mezuzah in{" "}
              <em className="italic text-forest">years.</em>
            </p>

            <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-ink/65">
              In many homes, scrolls remain on the doorpost for years without
              ever being inspected. Sunlight, moisture, age, and ordinary wear
              all affect the parchment over time.
            </p>

            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-line bg-cream/60 px-7 py-4 text-sm">
              <div className="flex items-baseline gap-2">
                <span className="h-display text-2xl text-forest">7 yrs</span>
                <span className="text-xs text-ink/55">average time uninspected</span>
              </div>
              <span className="h-4 w-px bg-line" />
              <div className="flex items-baseline gap-2">
                <span className="h-display text-2xl text-forest">1 in 3</span>
                <span className="text-xs text-ink/55">homes find at least one issue</span>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-xs uppercase tracking-[0.2em] text-mahogany/70">
              Our goal: make proper inspection accessible to every Jewish home.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
