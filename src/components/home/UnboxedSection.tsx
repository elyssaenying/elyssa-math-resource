import { ExternalLink } from "lucide-react";
import DecorativeDoodle from "@/components/ui/DecorativeDoodle";
import { site } from "@/data/site";

export default function UnboxedSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-charcoal/10 bg-pastel-blue/25 px-6 py-10 sm:px-10 sm:py-12">
        <DecorativeDoodle
          variant="star"
          className="absolute right-8 top-8 hidden size-7 text-charcoal/20 sm:block"
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_2fr] lg:items-start">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
              More Than Just This Resource Library
            </p>
            <h2 className="mt-2 font-display text-3xl text-charcoal sm:text-4xl">
              Unboxed
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="font-sans text-base leading-relaxed text-charcoal-soft">
              Unboxed specialises in personalised Math lessons designed
              around each student&rsquo;s learning needs. Beyond the
              curriculum, students are also given space to explore their
              interests and discover what they enjoy, with opportunities to
              develop those interests further. I currently teach Math at
              Unboxed, including Primary and Secondary students.
            </p>
            <a
              href={site.unboxedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 font-sans text-sm font-semibold text-cream-soft hover:bg-charcoal/85"
            >
              Visit Unboxed
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
