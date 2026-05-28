import Section from "./ui/Section";

const items = [
  {
    quote:
      "I assumed our mezuzot were fine. The Sofer found two that needed attention. I would never have known.",
    name: "David K.",
    location: "Teaneck, NJ",
    initial: "D",
  },
  {
    quote:
      "The visit was respectful, clear, and completely pressure-free. He explained every detail.",
    name: "Sarah M.",
    location: "Boca Raton, FL",
    initial: "S",
  },
  {
    quote:
      "We hadn't checked our mezuzot in years. Now we finally know every doorpost in the house was handled properly.",
    name: "Rachel L.",
    location: "Brooklyn, NY",
    initial: "R",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="cream" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          Families
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          Often surprised by
          <br />
          <em className="italic text-forest">what we find.</em>
        </h2>
      </div>

      <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="group flex flex-col justify-between rounded-3xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              aria-hidden
              className="h-display block text-5xl leading-none text-gold/40"
            >
              “
            </span>

            <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/80">
              {t.quote}
            </blockquote>

            <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mahogany/10 text-mahogany">
                <span className="h-display text-base">{t.initial}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink/55">{t.location}</p>
              </div>
              <span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-mahogany">
                Verified
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
