import Section from "./ui/Section";

const pillars = [
  {
    title: "Certified soferim",
    body: "Every scribe on our team is STaM-certified, with years of hands-on training in the writing and examination of mezuzot, tefillin, and Torah scrolls.",
  },
  {
    title: "Free for every home",
    body: "Inspection is always at no cost. Repairs and replacements, only if you choose them, are offered at fair and transparent pricing.",
  },
  {
    title: "Brought to your door",
    body: "No taking it down, no driving across town, no weeks of waiting. We come to you — scroll by scroll, home by home.",
  },
];

export default function About() {
  return (
    <Section id="about" tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-forest">
          About us
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.2rem]">
          A small team behind
          <br />
          <em className="italic text-forest">a quiet mission.</em>
        </h2>
      </div>

      <div className="reveal mx-auto mt-10 grid max-w-3xl gap-5 text-[17px] leading-relaxed text-ink/75">
        <p>
          Klaf Project is a nonprofit initiative built by soferim, volunteers,
          and a community of people who believe every Jewish home deserves the
          dignity of a properly cared-for mezuzah — without cost, without
          complication, and without judgment.
        </p>
        <p>
          We are not affiliated with a synagogue, a movement, or a denomination.
          We simply bring the work of the sofer to the door of anyone who asks.
        </p>
      </div>

      <ul className="reveal mt-16 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <li
            key={pillar.title}
            className="group rounded-3xl border border-line bg-cream/60 p-7 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-baseline justify-between">
              <span className="h-display text-3xl leading-none text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-12 bg-line" />
            </div>
            <h3 className="h-display mt-6 text-lg text-ink">{pillar.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
              {pillar.body}
            </p>
          </li>
        ))}
      </ul>

      <div className="reveal mt-16 grid gap-6 rounded-3xl border border-line bg-cream/60 px-8 py-10 text-center sm:grid-cols-3 sm:px-12">
        <div>
          <p className="h-display text-3xl text-forest sm:text-4xl">2,000+</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Homes visited
          </p>
        </div>
        <div className="sm:border-x sm:border-line">
          <p className="h-display text-3xl text-forest sm:text-4xl">100%</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Free for every family
          </p>
        </div>
        <div>
          <p className="h-display text-3xl text-forest sm:text-4xl">Nationwide</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Coverage and growing
          </p>
        </div>
      </div>
    </Section>
  );
}
