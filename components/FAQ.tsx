"use client";

import { useState } from "react";
import Section from "./ui/Section";

const faqs = [
  {
    q: "Is the inspection really free?",
    a: "Yes. The inspection visit is funded by the organization.",
  },
  {
    q: "Do I have to buy anything?",
    a: "No. If something needs repair or replacement, the Sofer will explain your options clearly. There is no pressure.",
  },
  {
    q: "Who comes to my home?",
    a: "A certified Sofer STaM.",
  },
  {
    q: "How long does the visit take?",
    a: "It depends on the number of mezuzot, but most visits are simple and handled in one appointment.",
  },
  {
    q: "Do you check every mezuzah?",
    a: "Yes — every scroll you want checked can be opened and inspected.",
  },
  {
    q: "What if I cannot afford a replacement?",
    a: "Tell us. The project was created to help families access kosher mezuzot without embarrassment or pressure.",
  },
  {
    q: "Where are you available?",
    a: "Availability depends on location. Submit the form and our team will confirm service in your area.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="cream">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          FAQ
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          Questions families ask before booking.
        </h2>
      </div>

      <div className="reveal mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-ink sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`text-2xl text-mahogany transition-transform ${isOpen ? "rotate-45" : ""}`}
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
                <div className="min-h-0 text-base leading-relaxed text-ink/70">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
