import Link from "next/link";
import Container from "./ui/Container";

const linkGroups = [
  {
    title: "Project",
    links: [
      { href: "#how", label: "How It Works" },
      { href: "#sofer", label: "Meet the Sofer" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "#request", label: "Request a Visit" },
      { href: "mailto:hello@klaf.org", label: "hello@klaf.org" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="h-display text-3xl text-forest">Klaf</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
              Helping Jewish families make sure every mezuzah in the home is
              properly checked by a certified Sofer STaM.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-mahogany">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink/70 hover:text-ink"
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

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Klaf. A community mitzvah project.</p>
          <p>Made with care for Jewish homes across the United States.</p>
        </div>
      </Container>
    </footer>
  );
}
