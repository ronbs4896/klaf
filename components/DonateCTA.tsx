"use client";

import { useEffect, useState } from "react";
import Section from "./ui/Section";

export default function DonateCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", amount: "" });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", amount: "" });
    }, 300);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.amount.trim()) return;
    setSubmitted(true);
    fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});
  }

  return (
    <Section id="donate" tone="cream" className="py-16 sm:py-20">
      <div className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-white px-8 py-14 sm:px-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-forest">
              For those who wish to give back
            </p>
            <h2 className="h-display mt-5 text-[2rem] leading-[1.08] text-ink sm:text-[2.4rem] lg:text-[2.8rem]">
              What you give
              <br />
              <span className="text-gold">is a blessing.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink/70">
              If this visit touched you and you&apos;d like to help carry the
              project forward, donations to our nonprofit are always welcome,
              and deeply appreciated.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-medium text-cream transition hover:bg-forest-hover"
            >
              Support the project
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-forest/70 lg:text-right">
              Tax-deductible · 100% to the mission
            </p>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donate-modal-title"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-white shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-ink/50 transition hover:bg-cream hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {!submitted ? (
              <form onSubmit={onSubmit} className="relative px-8 pb-8 pt-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-forest">
                  Support the project
                </p>
                <h3 id="donate-modal-title" className="h-display mt-3 text-2xl text-ink">
                  Carry the mission forward
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                  Leave your details and we&apos;ll reach out to complete your
                  donation personally.
                </p>

                <div className="mt-7 space-y-4">
                  <Field
                    label="Full name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  <Field
                    label="Phone number"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="(555) 123-4567"
                    type="tel"
                    autoComplete="tel"
                  />
                  <Field
                    label="Amount (USD)"
                    value={form.amount}
                    onChange={(v) => setForm({ ...form, amount: v.replace(/[^\d.]/g, "") })}
                    placeholder="36"
                    inputMode="decimal"
                    prefix="$"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-forest-hover"
                >
                  Send my donation
                  <span aria-hidden>→</span>
                </button>
                <p className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-forest/60">
                  Tax-deductible · 100% to the mission
                </p>
              </form>
            ) : (
              <div className="relative px-8 pb-10 pt-12 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11.5l4.5 4.5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="h-display mt-6 text-2xl text-ink">
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
                  It&apos;s because of good people like you that we&apos;re able
                  to keep reaching Jewish families and care for their mezuzot,
                  one home at a time.
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/55">
                  We&apos;ll be in touch shortly to complete your donation.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-cream"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "tel" | "decimal" | "numeric" | "email" | "url" | "search" | "none";
  autoComplete?: string;
  prefix?: string;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
  prefix,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55">
        {label}
      </span>
      <div className="relative mt-2">
        {prefix && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-ink/45">
            {prefix}
          </span>
        )}
        <input
          required
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-line bg-cream/40 px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 outline-none transition focus:border-gold focus:bg-white ${
            prefix ? "pl-8" : ""
          }`}
        />
      </div>
    </label>
  );
}
