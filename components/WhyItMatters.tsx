import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";

export default function WhyItMatters() {
  return (
    <Section id="why" tone="white">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          Why It Matters
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          A mezuzah can become invalid without you ever noticing.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
          A mezuzah can look perfectly fine from the outside, while the scroll
          inside may have faded ink, cracked letters, moisture damage, or
          age-related wear. That is why Jewish law requires the scroll itself
          to be checked by a qualified Sofer STaM — not just looked at from
          the outside.
        </p>
      </div>

      <div className="reveal mt-14 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-cream/50 p-6">
          <Placeholder
            label="A mezuzah case on a doorpost"
            ratio="landscape"
            tone="warm"
          />
          <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-mahogany">
            Outside
          </p>
          <p className="mt-2 text-lg text-ink">Looks fine.</p>
          <p className="mt-1 text-sm text-ink/60">
            A mezuzah on the doorpost — what the family sees every day.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-cream/50 p-6">
          <Placeholder
            label="Close-up of mezuzah scroll letters being inspected"
            ratio="landscape"
            tone="warm"
          />
          <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-mahogany">
            Inside
          </p>
          <p className="mt-2 text-lg text-ink">Must be checked.</p>
          <p className="mt-1 text-sm text-ink/60">
            What the Sofer examines — letters, ink, parchment, spacing, order,
            condition.
          </p>
        </div>
      </div>
    </Section>
  );
}
