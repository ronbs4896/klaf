import Section from "./ui/Section";

const cards = [
  {
    title: "Repair",
    body: "Many minor issues — a faded letter, a worn edge — can be carefully repaired by the Sofer.",
    tag: "When possible",
  },
  {
    title: "Replacement",
    body: "If a scroll is not valid, the Sofer explains your options clearly. Standard or mehudar klaf.",
    tag: "Your choice",
  },
  {
    title: "Family Support",
    body: "If cost is a barrier, the project may help with at-cost or donated mezuzot — quietly and without embarrassment.",
    tag: "When needed",
  },
];

export default function IfNeedsReplacement() {
  return (
    <Section tone="cream" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          If Something Is Wrong
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          If a mezuzah needs attention,
          <br />
          <em className="italic text-forest">you&apos;ll know your options.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-ink/70">
          If a scroll needs repair or replacement, the Sofer explains the issue
          clearly. There is no pressure. There is no hidden obligation.
        </p>
      </div>

      <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((card, i) => (
          <article
            key={card.title}
            className="group relative flex flex-col rounded-3xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-baseline justify-between">
              <span className="h-display text-3xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-line bg-cream/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mahogany">
                {card.tag}
              </span>
            </div>

            <h3 className="h-display mt-6 text-2xl text-ink">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {card.body}
            </p>

            <span
              aria-hidden
              className="absolute inset-x-8 bottom-6 h-px scale-x-0 bg-mahogany/40 transition-transform duration-500 group-hover:scale-x-100"
            />
          </article>
        ))}
      </div>

      <p className="reveal mx-auto mt-10 max-w-xl text-center text-xs uppercase tracking-[0.2em] text-mahogany/70">
        No sales pressure. Ever.
      </p>
    </Section>
  );
}
