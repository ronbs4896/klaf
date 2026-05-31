import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "white" | "forest" | "mahogany";
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  cream: "bg-cream",
  white: "bg-white",
  forest: "bg-forest text-cream",
  mahogany: "bg-mahogany text-cream",
};

export default function Section({
  id,
  children,
  className = "",
  tone = "cream",
}: Props) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} py-20 sm:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
