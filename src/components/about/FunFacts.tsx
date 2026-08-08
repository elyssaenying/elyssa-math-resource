import Badge from "@/components/ui/Badge";

export default function FunFacts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
        Outside Math
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        <Badge tone="blue">[Fun fact 1]</Badge>
        <Badge tone="butter">[Fun fact 2]</Badge>
        <Badge tone="pink">[Fun fact 3]</Badge>
      </div>
    </section>
  );
}
