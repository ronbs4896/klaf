import Section from "./ui/Section";

const cards = [
  {
    title: "Repair",
    body: "Minor issues may be repaired when possible.",
  },
  {
    title: "Replacement",
    body: "If a scroll is not valid, the Sofer explains your replacement options.",
  },
  {
    title: "Support",
    body: "If cost is a barrier, the project may help with at-cost or donated mezuzot for families who need it.",
  },
];

export default function IfNeedsReplacement() {
  return (
    <Section tone="cream">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          No Pressure
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          If a mezuzah needs attention, you&apos;ll know your options.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
          If a scroll needs repair or replacement, the Sofer explains the
          issue clearly. There is no pressure and no hidden obligation.
        </p>
      </div>

      <div className="reveal mt-12 grid gap-5 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-line bg-white p-7"
          >
            <p className="h-display text-2xl text-forest">{card.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
