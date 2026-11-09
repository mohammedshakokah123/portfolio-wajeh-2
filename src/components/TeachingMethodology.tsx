const methodologies = [
  {
    title: "Simplifying Complex Concepts",
    description:
      "I break down abstract topics — OOP, state management, architecture — into small, relatable steps using diagrams, analogies, and live coding.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M5 16h14" />
        <circle cx="12" cy="8" r="2" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
  },
  {
    title: "Project-Based Learning",
    description:
      "Every module ends with something students can run. Learners build features, debug real errors, and ship a portfolio-ready project instead of memorizing syntax.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: "Structured Courseware & Exercises",
    description:
      "Clear lesson plans, progressive exercises, and reference material designed for beginners — with checkpoints so no learner is left behind.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M9 7h7" />
        <path d="M9 11h7" />
      </svg>
    ),
  },
  {
    title: "Guidance, Problem-Solving & Interaction",
    description:
      "I coach students to diagnose problems on their own through questioning, pair debugging, code reviews, and an open classroom culture where asking is encouraged.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const sessionFlow = [
  {
    step: "01",
    title: "Assess",
    detail: "Check prior knowledge and set a clear, practical goal for the session.",
  },
  {
    step: "02",
    title: "Explain",
    detail: "Introduce the concept with a simple model, a live example, and no jargon.",
  },
  {
    step: "03",
    title: "Practice",
    detail: "Students apply it in a guided exercise while I move around and support.",
  },
  {
    step: "04",
    title: "Review",
    detail: "We debug together, review the code, and connect it to the next project.",
  },
];

const audiences = [
  "NGOs & community programs",
  "UNRWA education initiatives",
  "Schools & universities",
  "Training centers & bootcamps",
];

export default function TeachingMethodology() {
  return (
    <section
      id="teaching"
      className="border-y border-border bg-projects-bg px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-strong">
            Teaching Skills &amp; Methodology
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            How I Teach
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A learner-centered approach built for beginners, career switchers,
            and students who need technical confidence — not just theory.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {methodologies.map((method, index) => (
            <article
              key={method.title}
              className="animate-fade-up flex h-full gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="h-fit shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                {method.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {method.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="animate-fade-up mb-14 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 text-center text-xl font-bold text-foreground">
            A Typical Session Flow
          </h3>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sessionFlow.map((item) => (
              <li key={item.step} className="relative flex flex-col gap-2">
                <span className="text-sm font-bold tracking-[0.2em] text-primary-strong">
                  {item.step}
                </span>
                <span className="text-base font-semibold text-foreground">
                  {item.title}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="animate-fade-up rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Available for training programs
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                I deliver beginner-to-intermediate IT training online and
                in-center, and I can prepare structured courseware, exercises,
                and assessments for your learners.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
