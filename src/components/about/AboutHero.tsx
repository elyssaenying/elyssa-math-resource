import PhotoFrame from "@/components/ui/PhotoFrame";
import DecorativeDoodle from "@/components/ui/DecorativeDoodle";
import { site } from "@/data/site";

export default function AboutHero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-16">
      <div className="relative">
        <DecorativeDoodle
          variant="star"
          className="absolute -top-8 left-0 hidden size-7 text-butter sm:block"
        />
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
          About Me
        </p>
        <h1 className="mt-3 text-4xl leading-[1.1] text-charcoal sm:text-5xl">
          Who made these resources?
        </h1>
        <p className="mt-6 max-w-lg font-sans text-lg text-charcoal-soft">
          Hi, I&rsquo;m Elyssa. I&rsquo;m studying Mathematical Sciences at
          NTU and teaching Math alongside it. I enjoy helping students see
          that Math becomes much more manageable once the ideas start
          connecting.
        </p>
        <p className="mt-4 max-w-lg font-sans text-base text-charcoal-soft">
          I teach {site.subjectsTaught} for {site.levelsTaught} students.
        </p>
      </div>

      <PhotoFrame
        src={undefined}
        alt={`${site.teacherName} — main portrait`}
        aspect="portrait"
        accent="butter"
        hint="public/images/teacher/portrait-main.jpg"
        priority
        className="mx-auto w-full max-w-sm"
      />
    </section>
  );
}
