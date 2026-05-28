import { ButtonLink } from "./ui/Button";
import Container from "./ui/Container";
import ScrollArt from "./ui/ScrollArt";

const trustSignals = [
  "Certified Sofer STaM",
  "Home visits",
  "Every scroll opened",
  "Free of charge",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-24 pt-10 sm:pt-16 lg:pb-32">
      {/* Soft background ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-forest/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="fade-in-up">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-mahogany/15 bg-white/70 py-1.5 pl-1.5 pr-4 text-[11px] uppercase tracking-[0.2em] text-mahogany backdrop-blur">
              <span className="rounded-full bg-mahogany px-2 py-0.5 text-[10px] tracking-[0.15em] text-cream">
                Klaf
              </span>
              A Free Mezuzah Inspection Project
            </p>

            <h1 className="h-display text-[2.6rem] leading-[1.04] text-ink sm:text-5xl lg:text-[4rem]">
              Your mezuzot may look fine.
              <br />
              <span className="text-forest">Only a Sofer </span>
              <em className="italic text-forest">can know.</em>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink/75">
              A certified Sofer STaM comes to your home, opens every scroll,
              and tells you exactly which mezuzot are kosher — and which are
              not.
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/55">
              The visit is free. No pressure. No obligation. No hidden cost.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#request" variant="primary" className="group px-7 py-3.5">
                Request a Free Visit
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </ButtonLink>
              <ButtonLink href="#how" variant="secondary" className="py-3.5">
                See how it works
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-ink/60">
              {trustSignals.map((sig, i) => (
                <li key={sig} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="h-1 w-1 rounded-full bg-mahogany/40" />
                  )}
                  <span className="uppercase tracking-[0.16em]">{sig}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image composition */}
          <div className="relative">
            {/* Back accent card */}
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-mahogany/10"
            />
            <div className="relative overflow-hidden rounded-3xl border border-line/70 bg-white shadow-[0_40px_100px_-40px_rgba(91,70,54,0.45)]">
              <ScrollArt
                variant="scroll"
                label="Mezuzah scroll opened on a wooden table"
                ratio="portrait"
                className="rounded-none border-0"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-4 bottom-8 hidden w-[230px] rounded-2xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur sm:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-mahogany">
                Today
              </p>
              <p className="mt-1.5 text-[15px] font-medium leading-snug text-ink">
                Visit booked in Teaneck, NJ
              </p>
              <p className="mt-1 text-xs text-ink/55">
                12 mezuzot · 1 home
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-forest">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
                </span>
                Scheduled this morning
              </div>
            </div>

            {/* Top-right inspection tag */}
            <div className="absolute -right-3 top-6 hidden rotate-3 rounded-xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur md:block">
              <p className="h-display text-2xl text-forest">100%</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-mahogany">
                Scrolls opened
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
