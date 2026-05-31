import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 p-3 backdrop-blur md:hidden">
      <Link
        href="#book"
        className="block w-full rounded-full bg-forest px-6 py-3.5 text-center text-sm font-medium text-cream"
      >
        Book a Free Visit
      </Link>
    </div>
  );
}
