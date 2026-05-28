import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";
import { ButtonLink } from "./ui/Button";

const points = [
  "Certified Sofer STaM",
  "Personally inspects the scrolls",
  "Clear halachic guidance",
  "Respectful home visit",
  "No sales pressure",
];

export default function MeetTheSofer() {
  return (
    <Section id="sofer" tone="cream">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <Placeholder
            label="Portrait of the Sofer"
            ratio="portrait"
            tone="warm"
            className="shadow-[0_30px_80px_-30px_rgba(91,70,54,0.4)]"
          />
        </div>

        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
            Meet the Sofer
          </p>
          <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
            Meet the Sofer who comes to your home.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            Rabbi Rachamim Yosef Yitzchak is a certified Sofer STaM, trained to
            inspect, repair, and determine the halachic status of mezuzah
            scrolls.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            He personally handles the inspection process, explains what he
            finds, and helps each family understand the condition of their
            mezuzot clearly and respectfully.
          </p>

          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-line bg-white/70 px-4 py-3 text-sm text-ink/75"
              >
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink href="#request" variant="primary">
              Request a Free Visit
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
