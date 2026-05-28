"use client";

import { useState } from "react";
import Section from "./ui/Section";
import Placeholder from "./ui/Placeholder";

const items = [
  { caption: "Scroll inspection in Brooklyn, NY", tone: "warm" as const },
  { caption: "Checking each letter carefully", tone: "warm" as const },
  { caption: "A family receiving their report", tone: "neutral" as const },
  { caption: "Mezuzah on the entrance doorpost", tone: "warm" as const },
  { caption: "Close-up of Hebrew letters", tone: "warm" as const },
  { caption: "Sofer at a family home", tone: "neutral" as const },
  { caption: "Scrolls prepared for return", tone: "warm" as const },
  { caption: "Inspection report in hand", tone: "neutral" as const },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section tone="white">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-mahogany">
          Gallery
        </p>
        <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl lg:text-5xl">
          Real visits. Real scrolls. Real homes.
        </h2>
      </div>

      <div className="reveal mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="group block text-left"
            aria-label={`Open photo: ${item.caption}`}
          >
            <Placeholder
              label={item.caption}
              ratio="square"
              tone={item.tone}
              className="transition duration-500 group-hover:brightness-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Placeholder
              label={items[active].caption}
              ratio="landscape"
              tone={items[active].tone}
            />
            <p className="mt-3 text-center text-sm text-cream">
              {items[active].caption}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -right-2 -top-12 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-ink"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
