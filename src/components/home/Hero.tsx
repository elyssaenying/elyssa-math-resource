import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DecorativeDoodle from "@/components/ui/DecorativeDoodle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-20 lg:pt-16">
        <div className="relative">
          <DecorativeDoodle
            variant="star"
            className="absolute -top-8 left-0 hidden size-8 text-butter sm:block"
          />
          <h1 className="text-4xl leading-[1.08] text-charcoal sm:text-5xl lg:text-6xl">
            <span className="highlight-mark">Math resources.</span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg text-charcoal-soft">
            Notes, practice and revision resources for Secondary E-Math and
            A-Math, organised so you can actually find what you need.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/resources" showArrow>
              Browse Resources
            </Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>
        </div>

        <div className="pointer-events-none relative aspect-[5/4] w-full max-w-lg mx-auto lg:max-w-none">
          <div className="bg-grid-paper absolute inset-0 rounded-[2rem] border-2 border-charcoal/10 bg-pastel-blue/20" />

          <p
            aria-hidden="true"
            className="absolute -right-2 bottom-2 select-none font-display text-[9rem] leading-none text-charcoal/5 sm:text-[11rem]"
          >
            x²
          </p>

          <DecorativeDoodle
            variant="axes"
            className="absolute inset-x-[16%] inset-y-[14%] text-charcoal/15"
          />
          <DecorativeDoodle
            variant="circle"
            className="absolute bottom-6 left-8 hidden size-10 text-burnt/30 sm:block"
          />

          <div className="absolute right-[8%] top-[8%] -rotate-3 rounded-xl bg-cream-soft px-3 py-2 shadow-[0_4px_0_0_rgba(32,32,32,0.08)]">
            <p className="font-display text-sm italic text-charcoal-soft">
              pick what you need ↘
            </p>
          </div>

          <div className="absolute left-[6%] top-[30%] -rotate-6">
            <Badge tone="blue">Secondary 3</Badge>
          </div>
          <div className="absolute right-[12%] top-[38%] rotate-3">
            <Badge tone="butter">Secondary 4</Badge>
          </div>
          <div className="absolute bottom-[14%] right-[8%] -rotate-3">
            <Badge tone="sage">E-Math</Badge>
          </div>
          <div className="absolute bottom-[28%] left-[12%] rotate-6">
            <Badge tone="pink">A-Math</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
