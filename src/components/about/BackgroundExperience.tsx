import { BookOpen, GraduationCap } from "lucide-react";
import { site } from "@/data/site";

const items = [
  {
    icon: GraduationCap,
    label: "Education",
    value: site.qualification,
    tone: "bg-pastel-blue/40",
  },
  {
    icon: BookOpen,
    label: "Experience",
    value: `${site.yearsExperience} teaching ${site.subjectsTaught} for ${site.levelsTaught}`,
    tone: "bg-butter/40",
  },
];

export default function BackgroundExperience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
        Background
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-start gap-4 rounded-2xl p-5 ${item.tone}`}
          >
            <item.icon
              className="mt-0.5 size-5 shrink-0 text-charcoal"
              aria-hidden="true"
            />
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                {item.label}
              </p>
              <p className="mt-1 font-sans text-sm text-charcoal">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
