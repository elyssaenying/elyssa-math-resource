import PhotoFrame from "@/components/ui/PhotoFrame";

export default function AboutStory() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-burnt-dark">
            A Little About Me
          </p>
          <h2 className="mt-2 font-display text-2xl text-charcoal sm:text-3xl">
            Background, experience, and where math fits in.
          </h2>
          <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-charcoal-soft">
            <p>
              [MY STORY — write about your journey with mathematics: your
              own experience with the subject, what led you to teaching,
              and what keeps you doing it.]
            </p>
            <p>
              [TEACHING EXPERIENCE — describe the students and levels
              you&apos;ve taught, and for how long.]
            </p>
            <p>
              [WHY I ENJOY TEACHING MATHEMATICS — a personal note on what
              draws you to the subject and to teaching it.]
            </p>
          </div>
        </div>

        <PhotoFrame
          src={undefined}
          alt="Teaching in progress"
          aspect="portrait"
          accent="pink"
          tilt
          hint="public/images/teacher/teaching.jpg"
          className="mx-auto w-full max-w-[240px]"
        />
      </div>
    </section>
  );
}
