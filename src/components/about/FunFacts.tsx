import Image from "next/image";

const funFacts = [
  {
    title: "Chinese chess champion",
    description:
      "I joined Chinese chess in primary school because my sister was there, and eventually became champion in Primary 6!",
    image: "/images/teacher/fun-chinese-chess.jpg",
    alt: "Playing Chinese chess at home",
    tone: "bg-butter/45",
  },
  {
    title: "Anime and One Piece",
    description:
      "I’m an avid anime watcher, and my favourite One Piece character is Law. This was me after buying One Piece merch.",
    image: "/images/teacher/fun-one-piece.jpg",
    alt: "Elyssa holding One Piece merchandise at an arcade",
    tone: "bg-pastel-blue/45",
  },
  {
    title: "Netball player",
    description:
      "I played Centre in secondary school! I also played for my hall in university and was vice-captain for that season.",
    image: "/images/teacher/fun-netball.jpg",
    alt: "Elyssa’s university netball team in a huddle",
    tone: "bg-pink/40",
  },
  {
    title: "Moo by name",
    description:
      "My surname is Moo, so I’ve always liked things that are cow-related.",
    image: "/images/teacher/fun-cow.jpg",
    alt: "Elyssa standing beside a large bovine outdoors",
    tone: "bg-sage/45",
  },
];

export default function FunFacts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
        Outside Math
      </h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {funFacts.map((fact) => (
          <article
            key={fact.title}
            className={`rounded-[1.75rem] border border-charcoal/10 p-3 shadow-[0_8px_0_0_rgba(32,32,32,0.05)] ${fact.tone}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-cream-soft">
              <Image
                src={fact.image}
                alt={fact.alt}
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="px-2 pb-3 pt-4">
              <h3 className="font-display text-xl text-charcoal sm:text-2xl">
                {fact.title}
              </h3>
              <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-charcoal-soft sm:text-base">
                {fact.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
