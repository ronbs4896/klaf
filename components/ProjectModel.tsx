import Section from "./ui/Section";

const steps = [
  {
    n: "01",
    title: "Donors fund the visits",
    body: "Generous donors make the free home inspections possible from day one.",
  },
  {
    n: "02",
    title: "Families receive a free inspection",
    body: "A certified Sofer comes to the home, opens every scroll, and reports clearly.",
  },
  {
    n: "03",
    title: "Scroll purchases sustain the next visit",
    body: "Families who choose to purchase a replacement help fund the next free visit for another home.",
  },
];

export default function ProjectModel() {
  return (
    <Section tone="forest" className="relative overflow-hidden py-24 sm:py-32">
      {/* Soft ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-mahogany/30 blur-3xl"
      />

      <div className="reveal relative mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
          Our Model
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-cream sm:text-[2.6rem] lg:text-[3.3rem]">
          A self-sustaining
          <br />
          <em className="italic text-gold">mitzvah project.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-cream/70">
          Built so every visit helps another home. No one is turned away for
          cost.
        </p>
      </div>

      <div className="reveal relative mt-16">
        {/* Connecting line on desktop */}
        <div
          aria-hidden
          className="absolute left-16 right-16 top-12 hidden h-px bg-gradient-to-r from-cream/0 via-cream/30 to-cream/0 md:block"
        />

        <ol className="grid gap-6 md:grid-cols-3 md:gap-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-cream/15 bg-cream/[0.04] p-7 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 bg-cream/[0.06]">
                  <span className="h-display text-lg text-gold">{s.n}</span>
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-cream/15 md:block" />
                )}
              </div>

              <h3 className="h-display mt-6 text-xl text-cream">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="reveal mx-auto mt-12 max-w-xl text-center text-xs uppercase tracking-[0.2em] text-cream/55">
        Every visit helps another home.
      </p>
    </Section>
  );
}
