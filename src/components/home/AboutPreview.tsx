import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import DecorativeDoodle from "@/components/ui/DecorativeDoodle";
import { site } from "@/data/site";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <DecorativeDoodle
          variant="squiggle"
          className="absolute -top-6 left-24 hidden w-14 -scale-x-100 text-sage sm:block"
        />
        <PhotoFrame
          src={undefined}
          alt={`${site.teacherName} — small photo`}
          aspect="square"
          accent="sage"
          compact
          hint="public/images/teacher/about-me.jpg"
          className="w-20 shrink-0 sm:w-24"
        />

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
            Who made all this?
          </h2>
          <p className="mt-2 max-w-lg font-sans text-base text-charcoal-soft">
            I know how overwhelming Math can feel when everything looks like
            a wall of numbers. I&apos;ve had my own setbacks too, so I focus
            on breaking concepts down, spotting patterns, and knowing what
            to look out for in exams.
          </p>
          <div className="mt-4">
            <Button href="/about" variant="secondary" showArrow>
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
