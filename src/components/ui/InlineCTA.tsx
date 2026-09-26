import { ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";

export default function InlineCTA({
  title,
  description,
  buttonLabel = "Explore Resources",
  href = "/resources",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  /** Optional external link rendered below the primary button. */
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-border bg-cream-soft px-8 py-12 text-center">
        <h2 className="text-3xl text-charcoal sm:text-4xl">{title}</h2>
        {description && (
          <p className="max-w-md font-sans text-base text-charcoal-soft">
            {description}
          </p>
        )}
        <Button href={href} showArrow>
          {buttonLabel}
        </Button>
        {secondaryLabel && secondaryHref && (
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-charcoal-soft hover:text-burnt-dark"
          >
            {secondaryLabel}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  );
}
