import Link from "next/link";
import Container from "./ui/Container";

const linkGroups = [
  {
    title: "Project",
    links: [
      { href: "#how", label: "How It Works" },
      { href: "#sofer", label: "Meet the Sofer" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Action",
    links: [
      { href: "#request", label: "Request a Visit" },
      { href: "mailto:hello@klaf.org", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream pb-24 pt-16 sm:pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="h-display text-4xl text-forest">Klaf</p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/65">
              Helping Jewish families across the United States make sure every
              mezuzah is properly checked by a certified Sofer STaM.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-mahogany/15 bg-white/70 py-1 pl-1 pr-3 text-[10px] uppercase tracking-[0.18em] text-mahogany">
              <span className="rounded-full bg-mahogany px-2 py-0.5 text-cream">
                Community
              </span>
              Mitzvah project
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-mahogany">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink/70 transition hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Klaf. A community mitzvah project.</p>
          <p>Made with care for Jewish homes across the United States.</p>
        </div>
      </Container>
    </footer>
  );
}
