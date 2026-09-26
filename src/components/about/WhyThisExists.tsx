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
          Math is less about seeing the answer immediately, and more about
          learning how to connect the dots.
        </p>
        <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-charcoal-soft">
          I made this resource hub because I know revision can feel
          overwhelming, especially when you&rsquo;re already struggling with
          Math. I want the notes here to break things down clearly, show the
          patterns and steps to look out for, and help you go into exams
          feeling a little more confident.
        </p>
      </div>
    </section>
  );
}
