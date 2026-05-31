import Section from "./ui/Section";

const services = [
  {
    emoji: "🔍",
    title: "Inspection",
    body: "Full examination of every mezuzah in your home by a certified sofer, at your door, at no cost to you.",
    link: { label: "Learn more", href: "#how" },
  },
  {
    emoji: "✍️",
    title: "On-the-spot Repair",
    body: "If a scroll can be restored, the scribe does it right there. If it needs deeper work, he handles the whole process and returns it to you.",
    link: { label: "Learn more", href: "#how" },
  },
  {
    emoji: "🤍",
    title: "Support the Project",
    body: "Everything is free because of donors who believe in this mission. If you'd like to give back, donations go directly to the nonprofit.",
    link: { label: "Donate", href: "#donate" },
  },
];

export default function Services() {
  return (
    <Section id="services" tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          What we offer
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.2rem]">
          Everything your mezuzah needs.
        </h2>
      </div>

      <ul className="reveal mt-14 grid gap-5 md:grid-cols-3">
        {services.map((svc) => (
          <li
            key={svc.title}
            className="group flex flex-col rounded-3xl border border-line bg-cream/40 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            <span className="block text-3xl" role="img" aria-label={svc.title}>
              {svc.emoji}
            </span>
            <h3 className="h-display mt-6 text-xl text-ink">{svc.title}</h3>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink/65">
              {svc.body}
            </p>
            <a
              href={svc.link.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition hover:text-forest-hover"
            >
              {svc.link.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
