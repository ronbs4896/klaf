import Section from "./ui/Section";

const items = [
  {
    title: "Letter Integrity",
    body: "Every letter must be complete, clear, and properly formed — no breaks, no missing strokes.",
    detail: "כתב",
  },
  {
    title: "Ink Condition",
    body: "Faded, cracked, or chipped ink can invalidate a scroll. The Sofer examines every line.",
    detail: "דיו",
  },
  {
    title: "Parchment Quality",
    body: "The klaf itself must remain intact, stable, and halachically suitable.",
    detail: "קלף",
  },
  {
    title: "Moisture & Heat",
    body: "Weather, humidity, and sunlight can damage the scroll over years on the doorpost.",
    detail: "תנאי סביבה",
  },
  {
    title: "Halachic Placement",
    body: "The mezuzah must be installed correctly on the doorpost, at the right height and angle.",
    detail: "מיקום",
  },
  {
    title: "Overall Kosher Status",
    body: "You receive a clear, halachic answer for each mezuzah inspected. Yes, no, or repairable.",
    detail: "כשרות",
  },
];

export default function WhatWeCheck() {
  return (
    <Section tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          The Inspection
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          What the Sofer
          <br />
          <em className="italic text-forest">looks for.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-ink/65">
          A careful, halachic check of each scroll — beyond just the case on
          the door.
        </p>
      </div>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.title}
            className="reveal group relative flex flex-col bg-cream/30 p-8 transition hover:bg-white"
          >
            {/* Index */}
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-mahogany">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                lang="he"
                className="h-display text-sm text-mahogany/60"
                style={{ direction: "rtl" }}
              >
                {item.detail}
              </span>
            </div>

            <h3 className="h-display mt-6 text-xl text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              {item.body}
            </p>

            {/* Hover accent */}
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-mahogany/70 transition-all duration-500 group-hover:w-full"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
