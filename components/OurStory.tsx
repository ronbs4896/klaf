import Section from "./ui/Section";
import ScrollArt from "./ui/ScrollArt";

export default function OurStory() {
  return (
    <Section id="story" tone="cream" className="py-16 sm:py-20">
      <div className="reveal mx-auto max-w-3xl text-center">
        <figure>
          <p className="h-display text-[1.55rem] leading-[1.3] text-ink sm:text-[1.9rem] lg:text-[2.2rem]">
            <span className="text-gold">“</span>We realized most people have
            never once checked their mezuzah.<span className="text-gold">”</span>
          </p>
        </figure>
      </div>

      <div className="mt-12 grid items-start gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="reveal relative">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-mahogany/10"
          />
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_100px_-40px_rgba(91,70,54,0.35)]">
            <ScrollArt
              variant="hands"
              label="The Klaf Project sofer at work"
              ratio="portrait"
              className="rounded-none border-0"
            />
          </div>

          <div className="absolute -right-3 top-8 hidden rotate-[-2deg] rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-[0.18em] text-forest">
              Since 2024
            </p>
            <p className="h-display mt-1 text-base text-ink">2,000+ visits</p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-[11px] uppercase tracking-[0.24em] text-forest">
            Where we began
          </p>
          <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            The story behind Klaf Project.
          </h2>

          <div className="mt-7 grid gap-5 text-[16px] leading-relaxed text-ink/75">
            <p>
              It started with a question: when was the last time you checked
              yours?
            </p>
            <p>
              We noticed that checking a mezuzah, despite being one of the
              most meaningful things you can do for your home, had become
              almost impossible for most families. You had to take it down,
              find a scribe, travel across town, wait weeks, and figure out
              how to put it back. For most people, that meant: never.
            </p>
            <p>
              So we built a bridge. Between the sofer and the family. Between
              ancient tradition and modern life. Between the intention of
              hanging a mezuzah and the follow-through of caring for it.
            </p>
            <p>
              Klaf Project isn&apos;t about religion or obligation. It&apos;s
              about honoring what you already believe in, and making it easy
              to do so.
            </p>
          </div>

          <a
            href="#book"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-hover"
          >
            Read the full story
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
