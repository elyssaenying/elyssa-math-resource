import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl leading-tight text-charcoal">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-soft font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
