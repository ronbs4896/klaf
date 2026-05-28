import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";

const steps = [
  {
    n: "01",
    title: "Submit a Request",
    body: "Tell us your name, phone number, city, and how many mezuzot you have.",
    image: "Family filling out the form on a phone",
  },
  {
    n: "02",
    title: "We Schedule the Visit",
    body: "Our team contacts you and finds a convenient time for the Sofer to come to your home.",
    image: "Sofer on the way / calendar / phone call",
  },
  {
    n: "03",
    title: "Every Scroll Is Checked",
    body: "The Sofer removes, opens, and inspects each scroll carefully according to halachic standards.",
    image: "Sofer inspecting a scroll closely",
  },
  {
    n: "04",
    title: "You Get Clear Answers",
    body: "You will know which mezuzot are kosher, which need repair, and what options are available if a replacement is needed.",
    image: "Sofer explaining results to the family",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" tone="white">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          The Process
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          How the free visit works.
        </h2>
        <p className="mt-5 text-base text-ink/65 sm:text-lg">
          Four simple steps. No cost for the inspection visit.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.n}
            className="reveal group flex flex-col rounded-2xl border border-line bg-cream/40 p-5 transition hover:bg-cream"
          >
            <div className="overflow-hidden rounded-xl">
              <Placeholder
                label={step.image}
                ratio="square"
                tone="warm"
                className="transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <p className="h-display mt-6 text-3xl text-gold">{step.n}</p>
            <h3 className="mt-2 text-lg font-medium text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
