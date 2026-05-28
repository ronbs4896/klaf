import Section from "./ui/Section";
import LeadForm from "./LeadForm";

const reassurance = [
  "No payment required",
  "No obligation",
  "We'll contact you first",
];

export default function FinalCTA() {
  return (
    <Section id="request" tone="mahogany" className="relative overflow-hidden py-24 sm:py-32">
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
            Request a Visit
          </p>
          <h2 className="h-display mt-5 text-[2.1rem] leading-[1.06] text-cream sm:text-[2.6rem] lg:text-[3.3rem]">
            Bring a certified Sofer
            <br />
            <em className="italic text-gold">to your door. Free.</em>
          </h2>
          <p className="mt-7 max-w-md text-[17px] leading-relaxed text-cream/80">
            Submit your request and we&apos;ll be in touch within a day or two
            to schedule a convenient time.
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

          <div className="mt-10 hidden rounded-2xl border border-cream/15 bg-cream/[0.04] p-5 backdrop-blur sm:block">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Direct line
            </p>
            <p className="mt-1 text-base text-cream">
              Prefer to call? Leave your number — the Sofer will reach out
              directly.
            </p>
          </div>
        </div>

        <div className="reveal">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}
