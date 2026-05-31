"use client";

import { useState, useEffect } from "react";
import Section from "./ui/Section";
import ScrollArt from "./ui/ScrollArt";

type Item = {
  caption: string;
  variant: "scroll" | "letters" | "doorway" | "hands" | "abstract";
  ratio: "square" | "portrait" | "landscape" | "tall" | "wide";
  span?: "wide" | "tall";
};

const items: Item[] = [
  { caption: "Scroll inspection in Brooklyn, NY", variant: "scroll", ratio: "tall", span: "tall" },
  { caption: "Hebrew letters, close-up", variant: "letters", ratio: "square" },
  { caption: "Family doorway after the visit", variant: "doorway", ratio: "square" },
  { caption: "Sofer at the table", variant: "hands", ratio: "landscape", span: "wide" },
  { caption: "Mezuzah on the entrance doorpost", variant: "doorway", ratio: "square" },
  { caption: "Inspection in progress", variant: "scroll", ratio: "square" },
  { caption: "Scrolls prepared for return", variant: "hands", ratio: "square" },
  { caption: "Quiet moment of writing", variant: "letters", ratio: "landscape", span: "wide" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section tone="white" className="py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-mahogany">
          Gallery
        </p>
        <h2 className="h-display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3.3rem]">
          Door by door,
          <br />
          <em className="italic text-forest">scroll by scroll</em>
        </h2>
      </div>

      <div className="reveal mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl border border-line transition hover:shadow-xl ${
              item.span === "tall" ? "row-span-2" : item.span === "wide" ? "col-span-2" : ""
            }`}
            aria-label={`Open photo: ${item.caption}`}
          >
            <ScrollArt
              variant={item.variant}
              label={item.caption}
              ratio={item.ratio}
              className="h-full rounded-none border-0 transition duration-500 group-hover:scale-[1.04]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-mahogany/0 transition group-hover:bg-mahogany/10"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <ScrollArt
              variant={items[active].variant}
              label={items[active].caption}
              ratio="landscape"
            />
            <p className="mt-4 text-center text-sm text-cream/80">
              {items[active].caption}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => setActive((i) => ((i ?? 0) - 1 + items.length) % items.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-ink shadow-lg"
              aria-label="Previous photo"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setActive((i) => ((i ?? 0) + 1) % items.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-ink shadow-lg"
              aria-label="Next photo"
            >
              →
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
