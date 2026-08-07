import type { ReactNode } from "react";
import { Inbox } from "lucide-react";

export default function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-border bg-cream-soft px-6 py-14 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-butter/40">
        <Inbox className="size-6 text-charcoal-soft" aria-hidden="true" />
      </div>
      <p className="font-display text-xl text-charcoal">{title}</p>
      {description && (
        <p className="max-w-sm font-sans text-sm text-charcoal-soft">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
