import Section from "./ui/Section";
import ScrollArt from "./ui/ScrollArt";
import { ButtonLink } from "./ui/Button";

const credentials = [
  { label: "Certified", body: "Sofer STaM, fully ordained" },
  { label: "Hands-on", body: "Personally inspects every scroll" },
  { label: "Halachic", body: "Clear, sourced guidance" },
  { label: "Respectful", body: "Quiet, careful home visit" },
];

export default function MeetTheSofer() {
  return (
    <Section id="sofer" tone="cream" className="py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Portrait composition */}
        <div className="reveal relative">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-mahogany/10"
          />
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_100px_-40px_rgba(91,70,54,0.35)]">
            <ScrollArt
              variant="hands"
              label="Portrait of the Sofer at work"
              ratio="portrait"
              className="rounded-none border-0"
            />
          </div>

          {/* Floating credential */}
          <div className="absolute -right-3 top-10 hidden rotate-[-2deg] rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-[0.18em] text-mahogany">
              Certification
            </p>
            <p className="h-display mt-1 text-lg text-ink">Sofer STaM</p>
          </div>

          {/* Pull-quote */}
          <figure className="absolute -bottom-6 -left-4 hidden max-w-[260px] rounded-2xl border border-line bg-white/95 p-5 shadow-xl backdrop-blur sm:block">
            <p className="h-display text-sm italic leading-relaxed text-ink">
              &ldquo;Every scroll has a story. My job is to read it carefully.&rdquo;
            </p>
            <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-mahogany">
              The Sofer
            </figcaption>
          </figure>
        </div>

        {/* Text side */}
        <div className="reveal">
          <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
            Meet the Sofer
          </p>
          <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
            The Sofer who comes
            <br />
            <em className="italic text-forest">to your door.</em>
          </h2>

          <p className="mt-7 text-[17px] leading-relaxed text-ink/75">
            Rabbi Rachamim Yosef Yitzchak is a certified Sofer STaM, trained to
            inspect, repair, and determine the halachic status of mezuzah
            scrolls.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
            He handles each visit personally — opens every scroll, explains
            what he finds, and helps each family understand the condition of
            their mezuzot clearly and without pressure.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c.label}
                className="rounded-2xl border border-line bg-white/70 px-5 py-4"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-mahogany">
                  {c.label}
                </p>
                <p className="mt-1.5 text-sm text-ink/75">{c.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#request" variant="primary" className="group px-7 py-3.5">
              Book the Sofer
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </ButtonLink>
            <ButtonLink href="#faq" variant="secondary" className="py-3.5">
              Read FAQ
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
