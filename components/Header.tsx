"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "./ui/Button";

const navLinks = [
  { href: "#how", label: "How It Works" },
  { href: "#sofer", label: "Meet the Sofer" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="h-display text-2xl text-forest">Klaf</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-mahogany sm:inline">
            Free Mezuzah Inspection Project
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
          <ButtonLink href="#request" className="px-5 py-2.5 text-sm">
            Request a Free Visit
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
            <ButtonLink
              href="#request"
              className="mt-2"
              variant="primary"
            >
              Request a Free Visit
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
