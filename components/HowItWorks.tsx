import Section from "./ui/Section";
import ScrollArt from "./ui/ScrollArt";

const steps = [
  {
    n: "01",
    title: "Submit a Request",
    body: "Tell us your name, phone, city, and how many mezuzot you have.",
    art: "hands" as const,
    label: "Family submitting the form at home",
  },
  {
    n: "02",
    title: "We Schedule the Visit",
    body: "Our team calls you and finds a time that works for the Sofer to come to your home.",
    art: "abstract" as const,
    label: "Sofer coordinating an upcoming visit",
  },
  {
    n: "03",
    title: "Every Scroll Is Opened",
    body: "The Sofer removes, opens, and inspects each scroll carefully — letter by letter.",
    art: "scroll" as const,
    label: "Sofer opening and inspecting a scroll",
  },
  {
    n: "04",
    title: "You Get Clear Answers",
    body: "A simple report: which mezuzot are kosher, which need repair, and your options if not.",
    art: "letters" as const,
    label: "Inspection report being explained",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          The Process
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          How the free visit works.
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/65">
          Four steps. No payment for the inspection visit. No obligation.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Horizontal connecting line on desktop */}
        <div
          aria-hidden
          className="absolute left-12 right-12 top-[122px] hidden h-px bg-gradient-to-r from-line via-mahogany/40 to-line lg:block"
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, i) => (
            <li key={step.n} className="reveal group relative">
              <div className="flex h-full flex-col rounded-3xl border border-line bg-cream/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-mahogany/30 hover:bg-white hover:shadow-xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <ScrollArt
                    variant={step.art}
                    label={step.label}
                    ratio="landscape"
                    className="rounded-none border-0 transition duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Number badge floating */}
                  <span className="h-display absolute right-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-sm text-mahogany shadow-sm backdrop-blur">
                    Step {step.n}
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="h-display text-3xl leading-none text-gold">
                    {step.n}
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>

                <h3 className="mt-3 text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
                  {step.body}
                </p>
              </div>

              {/* Step connector dot on desktop */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-2.5 top-[114px] hidden h-3 w-3 rounded-full border-2 border-cream bg-mahogany/60 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>

      <p className="reveal mx-auto mt-14 max-w-xl text-center text-xs uppercase tracking-[0.2em] text-mahogany/70">
        Most visits are handled in a single appointment.
      </p>
    </Section>
  );
}
