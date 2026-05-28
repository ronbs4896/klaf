import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";

const cards = [
  {
    title: "Standard Kosher Klaf",
    body: "A fully kosher mezuzah scroll, inspected and suitable for standard home use.",
    bullets: [
      "Everyday home use",
      "Families replacing multiple scrolls",
      "Clear kosher standard",
    ],
    image: "Standard kosher klaf",
  },
  {
    title: "Mehudar Klaf",
    body: "A higher-grade scroll for those who want to fulfill the mitzvah in a more elevated way.",
    bullets: [
      "Main entrances",
      "Special rooms",
      "Families who want hiddur mitzvah",
    ],
    image: "Mehudar klaf, finer writing",
  },
];

export default function OurMezuzot() {
  return (
    <Section tone="white">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          When Replacement Is Needed
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          Kosher scrolls, when a replacement is needed.
        </h2>
        <p className="mt-5 text-base text-ink/65 sm:text-lg">
          If a mezuzah needs to be replaced, we help you choose the right
          option clearly and respectfully.
        </p>
      </div>

      <div className="reveal mt-12 grid gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="overflow-hidden rounded-2xl border border-line bg-cream/40"
          >
            <Placeholder
              label={card.image}
              ratio="wide"
              tone="warm"
              className="rounded-none border-0"
            />
            <div className="p-7">
              <h3 className="h-display text-2xl text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {card.body}
              </p>
              <ul className="mt-5 space-y-2">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="border-l-2 border-gold pl-3 text-sm text-ink/75"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Certified", "Checked", "Halachically valid"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-3 py-1 text-[11px] uppercase tracking-wider text-mahogany"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
