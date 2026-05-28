import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";

const items = [
  {
    title: "Letter Integrity",
    body: "Every letter must be complete, clear, and properly formed.",
    image: "Macro of intact Hebrew letters",
  },
  {
    title: "Ink Condition",
    body: "Faded, cracked, or damaged ink can affect the scroll.",
    image: "Close-up of faded ink",
  },
  {
    title: "Parchment Quality",
    body: "The parchment must remain intact, stable, and suitable.",
    image: "Klaf parchment texture",
  },
  {
    title: "Moisture or Heat Damage",
    body: "Weather, humidity, and sunlight can damage the scroll over time.",
    image: "Scroll edge with wear",
  },
  {
    title: "Halachic Placement",
    body: "The mezuzah must be placed correctly on the doorpost.",
    image: "Mezuzah on doorpost angle",
  },
  {
    title: "Overall Kosher Status",
    body: "You receive a clear answer for each mezuzah checked.",
    image: "Sofer writing on inspection sheet",
  },
];

export default function WhatWeCheck() {
  return (
    <Section tone="white">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          The Inspection
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          What the Sofer looks for.
        </h2>
        <p className="mt-5 text-base text-ink/65 sm:text-lg">
          A careful, halachic check of each scroll — beyond just the case on
          the door.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="reveal group flex flex-col rounded-2xl border border-line bg-cream/40 p-5 transition hover:bg-cream"
          >
            <div className="overflow-hidden rounded-xl">
              <Placeholder
                label={item.image}
                ratio="landscape"
                tone="warm"
                className="transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-5 text-lg font-medium text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
