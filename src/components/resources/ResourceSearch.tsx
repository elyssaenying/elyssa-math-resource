import { Search } from "lucide-react";

export default function ResourceSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-charcoal-soft"
          aria-hidden="true"
        />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search titles, topics or keywords..."
          aria-label="Search resources"
          className="w-full rounded-full border border-border bg-cream-soft py-3 pl-12 pr-4 font-sans text-base text-charcoal placeholder:text-charcoal-soft focus:border-burnt"
        />
      </div>
      <p className="mt-2 font-sans text-xs text-charcoal-soft">
        Short forms such as P1 work, and small spelling mistakes are okay.
      </p>
    </div>
  );
}
