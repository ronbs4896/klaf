import Section from "./ui/Section";
import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <Section id="request" tone="mahogany">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Request a Visit
          </p>
          <h2 className="h-display mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
            Bring a certified Sofer to your door. Free.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/80 sm:text-lg">
            Submit your request and we&apos;ll contact you to schedule a
            convenient time.
          </p>
          <ul className="mt-7 space-y-2 text-sm text-cream/75">
            <li className="border-l-2 border-gold pl-3">No payment required</li>
            <li className="border-l-2 border-gold pl-3">No obligation</li>
            <li className="border-l-2 border-gold pl-3">
              We&apos;ll contact you before scheduling anything
            </li>
          </ul>
        </div>

        <div className="reveal">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}
