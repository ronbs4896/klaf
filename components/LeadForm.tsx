"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "submitting" | "error";

const inputClass =
  "w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:bg-cream/15 focus:outline-none focus:ring-1 focus:ring-gold";
const labelClass =
  "mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-cream/70";

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-cream/15 bg-cream/[0.05] p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Yaakov Cohen"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City / Neighborhood
          </label>
          <input
            id="city"
            name="city"
            required
            className={inputClass}
            placeholder="Brooklyn"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="state">
            State
          </label>
          <input
            id="state"
            name="state"
            required
            className={inputClass}
            placeholder="NY"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="mezuzot">
            How many mezuzot do you have?
          </label>
          <input
            id="mezuzot"
            name="mezuzot"
            type="number"
            min={1}
            className={inputClass}
            placeholder="e.g. 8"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredTime">
            Preferred time to be contacted
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="note">
            Optional note
          </label>
          <textarea
            id="note"
            name="note"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Anything we should know before the visit?"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-mahogany transition hover:bg-gold/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Visit"}
      </button>

      {error && (
        <p className="mt-3 text-sm text-amber-200">{error}</p>
      )}

      <p className="mt-4 text-xs text-cream/55">
        No payment required. No obligation. We&apos;ll contact you before
        scheduling anything.
      </p>
    </form>
  );
}
