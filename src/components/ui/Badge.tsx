import type { ReactNode } from "react";

export type BadgeTone = "blue" | "butter" | "sage" | "pink" | "neutral" | "burnt";

const tones: Record<BadgeTone, string> = {
  blue: "bg-pastel-blue text-charcoal",
  butter: "bg-butter text-charcoal",
  sage: "bg-sage text-charcoal",
  pink: "bg-pink text-charcoal",
  neutral: "bg-cream-soft text-charcoal-soft border border-border",
  burnt: "bg-burnt-dark text-cream-soft",
};

export default function Badge({
  tone = "neutral",
  children,
  className = "",
}: {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide font-sans ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
