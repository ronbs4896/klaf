import Section from "./ui/Section";

const steps = [
  {
    n: "01",
    title: "Book a home visit",
    body: "Pick a time that works for you. Our sofer comes to your home — apartment, house, or office.",
  },
  {
    n: "02",
    title: "On-the-spot inspection",
    body: "He carefully removes each mezuzah and examines the scroll right there with you — no mystery, no waiting room.",
  },
  {
    n: "03",
    title: "Repaired before he leaves",
    body: "If a scroll can be restored, he does it on the spot. Most repairs happen in your home, in minutes, while you watch.",
  },
  {
    n: "04",
    title: "If it needs more — we handle it",
    body: "For scrolls that need deeper restoration, he takes it, has it repaired by our scriptorium, and returns it to your door — good as new.",
  },
];

const promises = [
  "No removing mezuzot yourself",
  "No driving across town",
  "Most repairs done on the spot",
  "Fully covered by Klaf Project",
];

export default function HowItWorks() {
  return (
    <Section id="how" tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          We come to you
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.2rem]">
          The sofer comes to your home.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/70">
          No errands. No taking mezuzot down yourself. No shipping. Our
          certified scribe visits you, checks everything on the spot, and
          handles whatever is needed — right there at your door.
        </p>
      </div>

      <ol className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.n}
            className="group flex h-full flex-col rounded-3xl border border-line bg-cream/40 p-6 transition hover:-translate-y-1 hover:border-mahogany/30 hover:bg-white hover:shadow-xl"
          >
            <span className="h-display text-4xl leading-none text-gold">
              {step.n}
            </span>
            <h3 className="mt-5 text-lg font-medium text-ink">{step.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-16 grid items-center gap-10 rounded-3xl border border-line bg-cream/50 px-7 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-12">
        <figure>
          <p className="h-display text-[1.6rem] leading-[1.25] text-ink sm:text-[1.9rem]">
            <span className="text-gold">“</span>The scribe comes to you.
            Everything is taken care of.<span className="text-gold">”</span>
          </p>
        </figure>
        <ul className="grid gap-3 sm:grid-cols-2">
          {promises.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink/80"
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-forest/30 text-[11px] text-forest">
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
