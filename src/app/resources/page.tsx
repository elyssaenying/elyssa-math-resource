import type { Metadata } from "next";
import { Suspense } from "react";
import ResourcesExplorer from "@/components/resources/ResourcesExplorer";
import DecorativeDoodle from "@/components/ui/DecorativeDoodle";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Search and filter secondary math notes, worksheets, revision material and more.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="bg-grid-paper relative overflow-hidden rounded-[2rem] border-2 border-charcoal/10 bg-sage/10 px-6 py-10 sm:px-10 sm:py-12">
        <DecorativeDoodle
          variant="star"
          className="absolute right-8 top-8 hidden size-6 text-butter sm:block"
        />
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
            Resource Library
          </p>
          <h1 className="mt-3 text-4xl text-charcoal sm:text-5xl">
            Find what you <span className="highlight-mark">need.</span>
          </h1>
          <p className="mt-4 font-sans text-lg text-charcoal-soft">
            Search or filter by level, subject, topic and resource type.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ResourcesExplorer />
        </Suspense>
      </div>
    </div>
  );
}
