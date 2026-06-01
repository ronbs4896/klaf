"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "./ui/Button";

const navLinks = [
  { href: "#meaning", label: "Why Mezuzah" },
  { href: "#how", label: "How It Works" },
  { href: "#story", label: "Our Story" },
  { href: "#services", label: "Services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="h-display text-xl tracking-tight text-forest sm:text-2xl">
            Klaf<span className="mx-0.5 text-gold">·</span>Project
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-forest sm:inline">
            A nonprofit initiative
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#book" className="px-5 py-2.5 text-sm">
            Book a Visit
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink/80 hover:bg-line/40"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="#book" className="mt-2" variant="primary">
              Book a Visit
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
