import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { LEVELS } from "@/data/subjects";

const accentClasses = [
  "bg-pastel-blue/50 border-pastel-blue hover:bg-pastel-blue/70 hover:-rotate-1",
  "bg-butter/50 border-butter hover:bg-butter/70 hover:rotate-1",
  "bg-sage/50 border-sage hover:bg-sage/70 hover:-rotate-1",
  "bg-pink/50 border-pink hover:bg-pink/70 hover:rotate-1",
];

const entryPoints = LEVELS.flatMap((level) =>
  level.subjects.map((subject) => ({
    key: `${level.id}-${subject.id}`,
    levelLabel: level.label,
    subjectLabel: subject.label,
    fullName: subject.fullName,
    href: `/resources?level=${level.id}&subject=${subject.id}`,
  })),
);

export default function SubjectOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Resource Library"
        title="Find your level and subject."
        description="Jump straight into notes, worksheets and revision material organised by level and subject."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {entryPoints.map((entry, index) => (
          <Link
            key={entry.key}
            href={entry.href}
            className={`group flex flex-col justify-between gap-10 rounded-3xl border-2 p-6 transition-[background-color,transform] duration-200 ${accentClasses[index % accentClasses.length]}`}
          >
            <div className="flex items-start justify-between">
              <p className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                {entry.levelLabel}
              </p>
              <span className="flex size-8 items-center justify-center rounded-full bg-cream-soft/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4 text-charcoal" aria-hidden="true" />
              </span>
            </div>
            <div>
              <p className="font-display text-3xl leading-none text-charcoal">
                {entry.subjectLabel}
              </p>
              <p className="mt-2 font-sans text-xs text-charcoal-soft">
                {entry.fullName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
