import Section from "./ui/Section";

const items = [
  {
    quote:
      "I assumed our mezuzot were fine. The Sofer found two that needed attention. I would never have known.",
    name: "David K.",
    location: "Teaneck, NJ",
  },
  {
    quote:
      "The visit was respectful, clear, and completely pressure-free. He explained everything.",
    name: "Sarah M.",
    location: "Boca Raton, FL",
  },
  {
    quote:
      "We had not checked our mezuzot in years. Now we finally know every doorpost was handled properly.",
    name: "Rachel L.",
    location: "Brooklyn, NY",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="cream">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          Testimonials
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          Families are often surprised by what we find.
        </h2>
      </div>

      <div className="reveal mt-12 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7"
          >
            <blockquote className="text-base leading-relaxed text-ink/80">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink/55">{t.location}</p>
              </div>
              <span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] uppercase tracking-wider text-mahogany">
                Verified visit
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
