import Section from "./ui/Section";
import ScrollArt from "./ui/ScrollArt";

export default function WhyItMatters() {
  return (
    <Section id="why" tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          The Hidden Problem
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          A mezuzah can become invalid
          <br />
          <em className="italic text-forest">without you ever noticing.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-ink/70">
          The case on your doorpost can look perfectly fine, while the scroll
          inside has faded ink, cracked letters, moisture damage, or
          age-related wear. Halacha requires the scroll itself to be inspected
          by a qualified Sofer STaM — not just glanced at from the outside.
        </p>
      </div>

      <div className="reveal mt-16 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
        {/* Outside */}
        <article className="group relative">
          <div className="overflow-hidden rounded-3xl border border-line bg-cream/40 transition group-hover:shadow-xl">
            <ScrollArt
              variant="doorway"
              label="Mezuzah on the doorpost — what the family sees"
              ratio="landscape"
              className="rounded-none border-0"
            />
            <div className="p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-mahogany">
                What you see
              </p>
              <p className="h-display mt-2 text-2xl text-ink">Looks fine.</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                The case on the doorpost — the same view your family sees every
                time they walk in.
              </p>
            </div>
          </div>
        </article>

        {/* Divider arrow */}
        <div className="flex items-center justify-center lg:flex-col">
          <div className="hidden h-px w-12 bg-line lg:block" />
          <div className="rounded-full border border-line bg-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-mahogany">
            vs.
          </div>
          <div className="hidden h-px w-12 bg-line lg:block" />
        </div>

        {/* Inside */}
        <article className="group relative">
          <div className="overflow-hidden rounded-3xl border border-line bg-cream/40 transition group-hover:shadow-xl">
            <ScrollArt
              variant="scroll"
              label="The scroll inside — what the Sofer inspects"
              ratio="landscape"
              className="rounded-none border-0"
            />
            <div className="p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-mahogany">
                What the Sofer checks
              </p>
              <p className="h-display mt-2 text-2xl text-ink">
                Must be opened.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Letters, ink, parchment, spacing, halachic order, and overall
                condition — examined letter by letter.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Quiet halachic note */}
      <p className="reveal mx-auto mt-12 max-w-2xl text-center text-xs uppercase tracking-[0.2em] text-mahogany/70">
        Inspecting the scroll itself is the only way to determine kosher status.
      </p>
    </Section>
  );
}
