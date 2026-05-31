import LeadForm from "@/components/LeadForm";

type Variant = {
  name: string;
  bg: string;
  eyebrow: string;
  headline: string;
  accentText: string;
  body: string;
  check: string;
  checkBorder: string;
  formPanel: string;
  formBorder: string;
  inputBg: string;
  inputBorder: string;
  inputText: string;
  inputPlaceholder: string;
  inputLabel: string;
  submitBg: string;
  submitText: string;
  helperText: string;
};

const variants: Variant[] = [
  {
    name: "01 · Forest (deep emerald)",
    bg: "bg-forest",
    eyebrow: "text-gold",
    headline: "text-cream",
    accentText: "text-gold",
    body: "text-cream/80",
    check: "text-gold",
    checkBorder: "border-gold/40",
    formPanel: "bg-cream/[0.05]",
    formBorder: "border-cream/15",
    inputBg: "bg-cream/10",
    inputBorder: "border-cream/20",
    inputText: "text-cream",
    inputPlaceholder: "placeholder:text-cream/50",
    inputLabel: "text-cream/70",
    submitBg: "bg-gold hover:bg-gold/90",
    submitText: "text-forest",
    helperText: "text-cream/55",
  },
  {
    name: "02 · Ink (warm charcoal)",
    bg: "bg-[#1f1a14]",
    eyebrow: "text-gold",
    headline: "text-cream",
    accentText: "text-gold",
    body: "text-cream/80",
    check: "text-gold",
    checkBorder: "border-gold/40",
    formPanel: "bg-white/[0.04]",
    formBorder: "border-white/10",
    inputBg: "bg-white/[0.06]",
    inputBorder: "border-white/15",
    inputText: "text-cream",
    inputPlaceholder: "placeholder:text-cream/45",
    inputLabel: "text-cream/65",
    submitBg: "bg-gold hover:bg-gold/90",
    submitText: "text-[#1f1a14]",
    helperText: "text-cream/55",
  },
  {
    name: "03 · Cream (light, premium)",
    bg: "bg-cream",
    eyebrow: "text-mahogany",
    headline: "text-ink",
    accentText: "text-forest",
    body: "text-ink/70",
    check: "text-forest",
    checkBorder: "border-forest/30",
    formPanel: "bg-white",
    formBorder: "border-line",
    inputBg: "bg-cream/40",
    inputBorder: "border-line",
    inputText: "text-ink",
    inputPlaceholder: "placeholder:text-ink/35",
    inputLabel: "text-mahogany",
    submitBg: "bg-forest hover:bg-forest-hover",
    submitText: "text-cream",
    helperText: "text-ink/50",
  },
  {
    name: "04 · Sand (warm beige)",
    bg: "bg-[#ebdfc3]",
    eyebrow: "text-mahogany",
    headline: "text-ink",
    accentText: "text-forest",
    body: "text-ink/70",
    check: "text-forest",
    checkBorder: "border-forest/30",
    formPanel: "bg-white",
    formBorder: "border-line",
    inputBg: "bg-cream/40",
    inputBorder: "border-line",
    inputText: "text-ink",
    inputPlaceholder: "placeholder:text-ink/35",
    inputLabel: "text-mahogany",
    submitBg: "bg-forest hover:bg-forest-hover",
    submitText: "text-cream",
    helperText: "text-ink/50",
  },
];

const reassurance = [
  "Free home visit",
  "Most repairs done on the spot",
  "No payment. No catch.",
];

function CTAVariant({ v }: { v: Variant }) {
  return (
    <section className={`relative overflow-hidden ${v.bg} px-6 py-24 sm:px-10`}>
      <div className="absolute left-6 top-6 z-10 rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
        {v.name}
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <p className={`text-[11px] uppercase tracking-[0.24em] ${v.eyebrow}`}>
            Book a Visit
          </p>
          <h2
            className={`h-display mt-5 text-[2.1rem] leading-[1.06] sm:text-[2.6rem] lg:text-[3rem] ${v.headline}`}
          >
            A scribe at your door.
            <br />
            <span className={v.accentText}>No charge, no catch.</span>
          </h2>
          <p className={`mt-7 max-w-md text-[17px] leading-relaxed ${v.body}`}>
            Klaf Project is a nonprofit initiative. We come to you, we check, we
            repair, and there is nothing to pay.
          </p>
          <ul className="mt-8 space-y-3">
            {reassurance.map((r) => (
              <li
                key={r}
                className={`flex items-center gap-3 text-sm ${v.body}`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${v.check} ${v.checkBorder}`}
                >
                  ✓
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`rounded-2xl border p-6 sm:p-8 ${v.formPanel} ${v.formBorder}`}
        >
          <form noValidate className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                className={`mb-1.5 block text-[11px] uppercase tracking-[0.18em] ${v.inputLabel}`}
              >
                Full Name
              </label>
              <input
                placeholder="Yaakov Cohen"
                className={`w-full rounded-lg border px-4 py-3 text-sm ${v.inputBg} ${v.inputBorder} ${v.inputText} ${v.inputPlaceholder}`}
              />
            </div>
            <div>
              <label
                className={`mb-1.5 block text-[11px] uppercase tracking-[0.18em] ${v.inputLabel}`}
              >
                Phone Number
              </label>
              <input
                placeholder="(555) 123-4567"
                className={`w-full rounded-lg border px-4 py-3 text-sm ${v.inputBg} ${v.inputBorder} ${v.inputText} ${v.inputPlaceholder}`}
              />
            </div>
            <div>
              <label
                className={`mb-1.5 block text-[11px] uppercase tracking-[0.18em] ${v.inputLabel}`}
              >
                Email
              </label>
              <input
                placeholder="you@example.com"
                className={`w-full rounded-lg border px-4 py-3 text-sm ${v.inputBg} ${v.inputBorder} ${v.inputText} ${v.inputPlaceholder}`}
              />
            </div>
            <div>
              <label
                className={`mb-1.5 block text-[11px] uppercase tracking-[0.18em] ${v.inputLabel}`}
              >
                City
              </label>
              <input
                placeholder="Brooklyn"
                className={`w-full rounded-lg border px-4 py-3 text-sm ${v.inputBg} ${v.inputBorder} ${v.inputText} ${v.inputPlaceholder}`}
              />
            </div>
            <div>
              <label
                className={`mb-1.5 block text-[11px] uppercase tracking-[0.18em] ${v.inputLabel}`}
              >
                State
              </label>
              <input
                placeholder="NY"
                className={`w-full rounded-lg border px-4 py-3 text-sm ${v.inputBg} ${v.inputBorder} ${v.inputText} ${v.inputPlaceholder}`}
              />
            </div>
          </form>
          <button
            type="button"
            className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium ${v.submitBg} ${v.submitText}`}
          >
            Request My Free Visit
          </button>
          <p className={`mt-4 text-xs ${v.helperText}`}>
            No payment required. No obligation. We&apos;ll contact you before
            scheduling anything.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Preview() {
  return (
    <main>
      {variants.map((v) => (
        <CTAVariant key={v.name} v={v} />
      ))}
    </main>
  );
}
