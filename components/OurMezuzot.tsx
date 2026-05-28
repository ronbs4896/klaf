import Section from "./ui/Section";
import ScrollArt from "./ui/ScrollArt";

const cards = [
  {
    title: "Standard Kosher Klaf",
    body: "A fully kosher mezuzah scroll, inspected and suitable for everyday home use.",
    bullets: [
      "Everyday home use",
      "Families replacing multiple scrolls",
      "Clear kosher standard",
    ],
    art: "scroll" as const,
    tag: "Most common",
  },
  {
    title: "Mehudar Klaf",
    body: "A higher-grade scroll for those who want to fulfill the mitzvah in a more elevated way.",
    bullets: [
      "Main entrance",
      "Special rooms",
      "Families seeking hiddur mitzvah",
    ],
    art: "letters" as const,
    tag: "Hiddur mitzvah",
  },
];

export default function OurMezuzot() {
  return (
    <Section tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          When a Replacement Is Needed
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          Kosher scrolls,
          <br />
          <em className="italic text-forest">chosen with care.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-ink/65">
          If a mezuzah needs to be replaced, we help you choose the right
          option clearly and respectfully.
        </p>
      </div>

      <div className="reveal mt-14 grid gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="group overflow-hidden rounded-3xl border border-line bg-cream/30 transition hover:shadow-xl"
          >
            <div className="relative">
              <ScrollArt
                variant={card.art}
                label={card.title}
                ratio="wide"
                className="rounded-none border-0 transition duration-700 group-hover:scale-[1.02]"
              />
              <span className="absolute right-4 top-4 rounded-full border border-cream/30 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cream backdrop-blur">
                {card.tag}
              </span>
            </div>
            <div className="p-8">
              <h3 className="h-display text-2xl text-ink">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                {card.body}
              </p>

              <ul className="mt-6 space-y-2.5">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-ink/70"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Certified", "Inspected", "Halachically valid"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mahogany"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="reveal mx-auto mt-10 max-w-xl text-center text-xs uppercase tracking-[0.2em] text-mahogany/70">
        You only consider a replacement if your scroll truly needs one.
      </p>
    </Section>
  );
}
