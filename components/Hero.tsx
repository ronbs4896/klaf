import { ButtonLink } from "./ui/Button";
import Container from "./ui/Container";
import Placeholder from "./ui/Placeholder";

const trustBadges = [
  "Certified Sofer STaM",
  "Home visits available",
  "Every scroll checked carefully",
  "Free inspection visit",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-12 sm:pt-16 lg:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="fade-in-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-mahogany/20 bg-white px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-mahogany">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              A Community Mitzvah Project
            </p>

            <h1 className="h-display text-4xl text-ink sm:text-5xl lg:text-6xl">
              Your Mezuzot May Look Fine.
              <br />
              <span className="text-forest">But Only a Sofer Can Know.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
              A certified Sofer STaM comes to your home, opens every mezuzah scroll,
              checks it carefully, and helps you make sure your home is protected by
              kosher mezuzot.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
              The visit is free. No pressure. No obligation. No hidden cost.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#request" variant="primary">
                Request a Free Visit
              </ButtonLink>
              <ButtonLink href="#how" variant="secondary">
                See How It Works
              </ButtonLink>
            </div>

            <ul className="mt-9 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-line bg-white/70 px-3 py-1.5 text-xs text-ink/70"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Placeholder
              label="Sofer inspecting a mezuzah scroll on a wooden table"
              ratio="portrait"
              tone="warm"
              className="shadow-[0_30px_80px_-30px_rgba(91,70,54,0.45)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-line bg-white p-4 shadow-xl sm:block">
              <p className="text-[11px] uppercase tracking-wider text-mahogany">
                Today
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Visit scheduled in Teaneck, NJ
              </p>
              <p className="mt-1 text-xs text-ink/60">
                A family of 12 mezuzot
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
