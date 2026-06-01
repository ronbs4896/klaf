import { ButtonLink } from "./ui/Button";
import Container from "./ui/Container";
import ScrollArt from "./ui/ScrollArt";

const stats = [
  { number: "2,000+", label: "Mezuzot checked" },
  { number: "Nonprofit", label: "Community funded" },
  { number: "100%", label: "Expert scribes" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-24 pt-10 sm:pt-16 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-forest/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="fade-in-up">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 py-1.5 pl-1.5 pr-4 text-[11px] uppercase tracking-[0.2em] text-forest backdrop-blur">
              <span className="rounded-full bg-mahogany px-2 py-0.5 text-[10px] tracking-[0.15em] text-cream">
                Klaf·Project
              </span>
              A nonprofit initiative
            </p>

            <h1 className="h-display text-[2.6rem] leading-[1.04] text-ink sm:text-5xl lg:text-[4rem]">
              Your mezuzah watches over you.{" "}
              <span className="text-forest">Let us watch over it.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink/75">
              A certified scribe comes to your home, checks every mezuzah on the
              spot, and fixes what can be fixed, right there at your door. No
              errands, no waiting, and no cost.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#book" variant="primary" className="group px-7 py-3.5">
                Book a visit
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </ButtonLink>
              <ButtonLink href="#meaning" variant="secondary" className="py-3.5">
                Why does it matter? →
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="h-display text-2xl text-forest sm:text-3xl">
                    {s.number}
                  </dt>
                  <dd className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-ink/55">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image composition */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-mahogany/10"
            />
            <div className="relative overflow-hidden rounded-3xl border border-line/70 bg-white shadow-[0_40px_100px_-40px_rgba(91,70,54,0.45)]">
              <ScrollArt
                variant="scroll"
                label="A mezuzah scroll opened at home by a certified sofer"
                ratio="portrait"
                className="rounded-none border-0"
              />
            </div>

            <div className="absolute -left-4 bottom-8 hidden w-[240px] rounded-2xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur sm:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-forest">
                Today
              </p>
              <p className="mt-1.5 text-[15px] font-medium leading-snug text-ink">
                Home visit in progress
              </p>
              <p className="mt-1 text-xs text-ink/55">
                Inspecting 9 mezuzot · on the spot
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-forest">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
                </span>
                Live this morning
              </div>
            </div>

            <div className="absolute -right-3 top-6 hidden rotate-3 rounded-xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur md:block">
              <p className="h-display text-2xl text-forest">$0</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-forest">
                Every visit
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
