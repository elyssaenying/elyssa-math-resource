import DecorativeDoodle from "@/components/ui/DecorativeDoodle";

export default function WhyThisExists() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-charcoal/10 bg-sage/25 px-6 py-12 text-center sm:px-12 sm:py-16">
        <DecorativeDoodle
          variant="squiggle"
          className="absolute left-8 top-8 hidden w-16 text-burnt/50 sm:block"
        />
        <DecorativeDoodle
          variant="star"
          className="absolute bottom-8 right-10 hidden size-6 text-charcoal/20 sm:block"
        />
        <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
          Why This Resource Hub Exists
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-display text-2xl italic leading-snug text-charcoal sm:text-3xl">
          [WHY I CREATED THESE RESOURCES — what gap you noticed, and what
          you wanted students to have access to.]
        </p>
      </div>
    </section>
  );
}
