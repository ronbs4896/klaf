import Section from "./ui/Section";

const cards = [
  {
    title: "A hand-written scroll",
    body: "Each mezuzah contains a klaf, parchment inscribed by a trained scribe (sofer). The letters must be perfect; even one damaged letter affects its validity.",
  },
  {
    title: "Time and weather take their toll",
    body: "A mezuzah on an outdoor doorpost is exposed to heat, humidity, and rain year-round. Over time, the ink can crack and the parchment fade. Silently, invisibly.",
  },
  {
    title: "Checking it is an act of care",
    body: "Having your mezuzah checked isn't a religious formality. It's how you honor the intention you had when you put it up.",
  },
];

export default function Meaning() {
  return (
    <Section id="meaning" tone="cream" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          The meaning behind it
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.2rem]">
          Why do we put a mezuzah on the door?
        </h2>
      </div>

      <div className="reveal mx-auto mt-10 grid max-w-3xl gap-5 text-[17px] leading-relaxed text-ink/75">
        <p>
          It isn&apos;t just tradition. The mezuzah is a living connection: a
          small scroll hand-written by a scribe, containing the Shema, placed
          at the threshold of every Jewish home for thousands of years.
        </p>
        <p>
          Whether you grew up with it or discovered it along the way, putting
          one up was an act of intention. It says: this is a home with
          meaning. This is a place of warmth, of family, of something larger
          than ourselves.
        </p>
        <p>
          In Jewish tradition, the mezuzah is understood as a form of divine
          protection: a presence that accompanies every entry and exit. It
          reminds us, quietly, of what we hold dear each time we walk through
          the door.
        </p>
      </div>

      <ul className="reveal mt-16 grid gap-5 md:grid-cols-3">
        {cards.map((card, i) => (
          <li
            key={card.title}
            className="group rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-baseline justify-between">
              <span className="h-display text-3xl leading-none text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-12 bg-line" />
            </div>
            <h3 className="h-display mt-6 text-lg text-ink">{card.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
              {card.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
