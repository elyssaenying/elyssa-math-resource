import { X } from "lucide-react";

export default function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove ${label} filter`}
      className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-3 py-1.5 font-sans text-xs font-medium text-cream-soft hover:bg-charcoal/80"
    >
      {label}
      <X className="size-3.5" aria-hidden="true" />
    </button>
  );
}
