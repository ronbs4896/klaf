import Section from "./ui/Section";

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="cream" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-4xl">
        <figure className="relative rounded-[2rem] border border-line bg-white px-8 py-14 sm:px-14 sm:py-20">
          <span
            aria-hidden
            className="h-display absolute left-8 top-6 select-none text-7xl leading-none text-gold/30 sm:left-12 sm:text-8xl"
          >
            “
          </span>

          <div className="relative text-center">
            <blockquote className="h-display mx-auto max-w-3xl text-[1.55rem] leading-[1.32] text-ink sm:text-[1.95rem]">
              I hadn&apos;t thought about our mezuzah in fifteen years. When
              Klaf Project sent back the report, I felt something I
              didn&apos;t expect. Like I&apos;d reconnected with something I&apos;d
              been quietly carrying the whole time.
            </blockquote>

            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mahogany/10 text-forest">
                <span className="h-display text-base">M</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-ink">Michal R.</p>
                <p className="text-xs text-ink/55">Tel Aviv</p>
              </div>
              <span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-forest">
                Verified
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </Section>
  );
}
