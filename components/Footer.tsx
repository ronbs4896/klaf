import Link from "next/link";
import Container from "./ui/Container";

const linkGroups = [
  {
    title: "Learn",
    links: [
      { href: "#meaning", label: "Why mezuzah?" },
      { href: "#meaning", label: "What is a klaf?" },
      { href: "#how", label: "How to hang one" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#book", label: "Book a free visit" },
      { href: "#services", label: "Inspection" },
      { href: "#services", label: "Repair" },
      { href: "#donate", label: "Donate ✦" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#story", label: "Our story" },
      { href: "#story", label: "Our scribes" },
      { href: "mailto:hello@klafproject.org", label: "Contact" },
      { href: "https://instagram.com", label: "Instagram" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream pb-16 pt-12 sm:pb-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <img
              src="/gallery/logo_dark_background-removebg-preview.png"
              alt="Klaf Project"
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/65">
              Bringing one of Judaism&apos;s most beautiful traditions back to
              life. Simply, warmly, and for every home.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 py-1 pl-1 pr-3 text-[10px] uppercase tracking-[0.18em] text-forest">
              <span className="rounded-full bg-mahogany px-2 py-0.5 text-cream">
                Nonprofit
              </span>
              Community funded
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-forest">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
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
          <p>© {new Date().getFullYear()} Klaf Project. All rights reserved.</p>
          <p>Made with care in Israel.</p>
        </div>
      </Container>
    </footer>
  );
}
