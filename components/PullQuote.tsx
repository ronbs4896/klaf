import Section from "./ui/Section";

export default function PullQuote() {
  return (
    <Section tone="white" className="py-20 sm:py-24">
      <div className="reveal mx-auto max-w-4xl">
        <figure className="relative px-6 text-center sm:px-12">
          <span
            aria-hidden
            className="h-display absolute left-0 top-0 select-none text-7xl leading-none text-gold/30 sm:text-8xl"
          >
            “
          </span>
          <blockquote className="h-display text-[1.55rem] leading-[1.3] text-ink sm:text-[2rem] lg:text-[2.4rem]">
            Most people hang a mezuzah with their whole heart — and then never
            think about it again. That&apos;s exactly why we built Klaf Project.
          </blockquote>
          <span
            aria-hidden
            className="h-display absolute -bottom-8 right-0 select-none rotate-180 text-7xl leading-none text-gold/30 sm:text-8xl"
          >
            “
          </span>
        </figure>
      </div>
    </Section>
  );
}
