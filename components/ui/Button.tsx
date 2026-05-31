import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-hover focus-visible:ring-forest",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/60 focus-visible:ring-ink",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:border-cream focus-visible:ring-cream",
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`${base} ${variantClass[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
