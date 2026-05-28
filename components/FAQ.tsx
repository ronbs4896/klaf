"use client";

import { useState } from "react";
import Section from "./ui/Section";

const faqs = [
  {
    q: "Is the inspection really free?",
    a: "Yes. The inspection visit is fully covered by the organization — no payment, no hidden cost.",
  },
  {
    q: "Do I have to buy anything?",
    a: "No. If something needs repair or replacement, the Sofer explains your options clearly. There is no pressure and no obligation.",
  },
  {
    q: "Who comes to my home?",
    a: "A certified Sofer STaM. He inspects the scrolls personally and answers any halachic questions you may have.",
  },
  {
    q: "How long does the visit take?",
    a: "It depends on the number of mezuzot, but most visits are simple and handled in one appointment.",
  },
  {
    q: "Do you check every mezuzah?",
    a: "Yes — every scroll you want checked can be removed, opened, and inspected during the visit.",
  },
  {
    q: "What if I can't afford a replacement?",
    a: "Tell us. The project was created to help families access kosher mezuzot without embarrassment. We can help with at-cost or donated mezuzot when needed.",
  },
  {
    q: "Where are you available?",
    a: "Availability depends on location. Submit the form and our team will confirm service in your area.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="cream" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          FAQ
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          Questions families ask
          <br />
          <em className="italic text-forest">before booking.</em>
        </h2>
      </div>

      <div className="reveal mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-line bg-white">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`border-line ${i === 0 ? "" : "border-t"}`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition hover:bg-cream/40"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-ink sm:text-base">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-base text-mahogany transition-transform ${isOpen ? "rotate-45 border-mahogany/40 bg-cream" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 px-7 text-[15px] leading-relaxed text-ink/70">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="reveal mx-auto mt-10 max-w-xl text-center text-xs uppercase tracking-[0.2em] text-mahogany/70">
        Still have a question? Just include it with your request.
      </p>
    </Section>
  );
}
