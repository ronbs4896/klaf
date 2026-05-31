import Section from "./ui/Section";

export default function DonateCTA() {
  return (
    <Section id="donate" tone="cream" className="py-24 sm:py-32">
      <div className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-white px-8 py-14 sm:px-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
              For those who wish to give back
            </p>
            <h2 className="h-display mt-5 text-[2rem] leading-[1.08] text-ink sm:text-[2.4rem] lg:text-[2.8rem]">
              What you give
              <br />
              <span className="text-gold">is a blessing.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink/70">
              If this visit touched you and you&apos;d like to help carry the
              project forward, donations to our nonprofit are always welcome,
              and deeply appreciated.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="#donate-form"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-medium text-cream transition hover:bg-forest-hover"
            >
              <span className="text-base" aria-hidden>
                🤍
              </span>
              Support the project
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-mahogany/70 lg:text-right">
              Tax-deductible · 100% to the mission
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
