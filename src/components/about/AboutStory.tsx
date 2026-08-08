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
              I&rsquo;ve always liked Math, but my journey with it
              definitely wasn&rsquo;t a straight line. I failed Math in
              lower primary, improved by PSLE, was pretty average again in
              lower secondary, and eventually started scoring consistently
              well.
            </p>
            <p>
              Somewhere along the way, I also became the friend people
              would ask for help with Math. I really enjoyed explaining
              questions, sharing tips, and showing my friends how to spot
              keywords, patterns and the steps behind different question
              types.
            </p>
            <p>
              What I realised was that a lot of the struggle wasn&rsquo;t
              because someone was &ldquo;bad at Math&rdquo;. Often, it was
              because they were jumping straight into questions without
              first understanding the concept or recognising the patterns
              behind them.
            </p>
            <p>
              I&rsquo;ve had setbacks again since then — including
              struggling with Math in JC — so I know what it feels like
              when a subject you thought you understood suddenly becomes
              difficult. Learning how to study more intentionally helped me
              work my way back up, and that experience shapes the way I
              teach today.
            </p>
            <p>
              I&rsquo;ve been teaching privately since 2024 — mainly
              Secondary E-Math and A-Math — and I currently teach Math at
              Unboxed.
            </p>
            <p>
              For a little background, I&rsquo;m currently studying
              Mathematical Sciences at NTU, and I earned A grades for H2
              Math at A Levels, as well as E-Math and A-Math at O Levels.
            </p>
            <p>
              My favourite part of teaching is seeing that
              &ldquo;Aha!&rdquo; moment when something finally clicks.
            </p>
            <p>
              I believe everyone has the ability to improve at Math. A big
              part of it is learning how the ideas connect, recognising
              patterns, and knowing what a question is really asking you to
              do. Once those dots start connecting, Math becomes a lot less
              intimidating.
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
