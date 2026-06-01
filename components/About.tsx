import Section from "./ui/Section";

const credentials = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    text: "Certified Sofer STaM with full rabbinical training",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
    text: "Personally present at every visit — no substitutes",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 00-5.4 5.4l-7 7 2 2 7-7a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />
      </svg>
    ),
    text: "On-site inspection, repair, and ruling at every doorpost",
  },
];

export default function About() {
  return (
    <Section id="about" tone="white" className="py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-cream shadow-[0_50px_120px_-40px_rgba(91,58,34,0.4)]">
            <img
              src="/gallery/rabbi.jpg"
              alt="Rabbi Rachamim Yosef Yitzchak — Licensed Sofer STaM"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-6 pb-5 pt-16">
              <p className="text-[10px] uppercase tracking-[0.22em] text-cream/90">
                Sofer STaM · On-site at every visit
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-forest">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9V3h12v6a6 6 0 01-12 0z" />
              <path d="M9 21h6M12 17v4M4 5h2M18 5h2" />
            </svg>
            Licensed Sofer STaM
          </p>

          <h2 className="h-display mt-5 text-[2.1rem] leading-[1.05] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            Rabbi Rachamim
            <br />
            <em className="italic">Yosef Yitzchak</em>
          </h2>

          <div className="mt-7 grid gap-5 text-[16px] leading-relaxed text-ink/75">
            <p>
              In Jewish law, only a certified Sofer STaM — a trained scribe
              with years of specialized rabbinical study — is qualified to
              write, inspect, repair, or rule on the validity of a mezuzah.
              Rabbi Yosef Yitzchak is ours.
            </p>
            <p>
              He personally shows up at every inspection. Not a representative.
              Not a trainee. Him. He knows what an invalid mezuzah looks like
              before most people could even locate the parchment.
            </p>
          </div>

          <ul className="mt-8 space-y-3.5">
            {credentials.map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-3 text-[15px] text-ink/80"
              >
                <span className="mt-0.5 text-forest">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
