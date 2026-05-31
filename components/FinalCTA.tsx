import Section from "./ui/Section";
import LeadForm from "./LeadForm";

const reassurance = [
  "Free home visit",
  "Most repairs done on the spot",
  "No payment. No catch.",
];

export default function FinalCTA() {
  return (
    <Section
      id="book"
      tone="mahogany"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-forest/30 blur-3xl"
      />

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div className="reveal">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Book a Visit
          </p>
          <h2 className="h-display mt-5 text-[2.1rem] leading-[1.06] text-cream sm:text-[2.6rem] lg:text-[3.3rem]">
            A scribe at your door.
            <br />
            <span className="text-gold">No charge, no catch.</span>
          </h2>
          <p className="mt-7 max-w-md text-[17px] leading-relaxed text-cream/80">
            Klaf Project is a nonprofit initiative. We come to you, we check,
            we repair — and there is nothing to pay.
          </p>

          <ul className="mt-8 space-y-3">
            {reassurance.map((r) => (
              <li key={r} className="flex items-center gap-3 text-sm text-cream/85">
                <span
                  aria-hidden
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 text-[11px] text-gold"
                >
                  ✓
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}
