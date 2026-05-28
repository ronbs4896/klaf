import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";

const steps = [
  {
    title: "Donors help fund visits",
    body: "Generous donors make free home inspections possible.",
    image: "Donor / envelope / supportive hands",
  },
  {
    title: "Families receive free inspections",
    body: "A certified Sofer comes to the home, opens every scroll, and reports clearly.",
    image: "Sofer at a family home",
  },
  {
    title: "Scroll purchases sustain the next visit",
    body: "Families who choose to purchase a replacement help the next family receive a free visit.",
    image: "Mezuzah scroll on a wooden table",
  },
];

export default function ProjectModel() {
  return (
    <Section tone="forest">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">
          Our Model
        </p>
        <h2 className="h-display mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
          A self-sustaining mitzvah project.
        </h2>
        <p className="mt-5 text-base text-cream/75 sm:text-lg">
          The project is built to make mezuzah inspection accessible. Every
          visit helps another home.
        </p>
      </div>

      <div className="reveal mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6"
          >
            <Placeholder
              label={s.image}
              ratio="landscape"
              tone="neutral"
              className="border-cream/15"
            />
            <p className="h-display mt-5 text-xl text-gold">
              0{i + 1}
            </p>
            <h3 className="mt-1 text-lg font-medium text-cream">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
