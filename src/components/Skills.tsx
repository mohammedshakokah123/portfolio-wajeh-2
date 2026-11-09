const competencies = [
  {
    title: "Object-Oriented Programming (OOP)",
    description:
      "Classes, interfaces, inheritance, and composition applied to maintainable application design.",
  },
  {
    title: "Software Architecture",
    description:
      "Layered and clean architecture, separation of concerns, and scalable project structure.",
  },
  {
    title: "Mobile & Cross-Platform Development",
    description:
      "Building and shipping applications for Android and iOS from a shared codebase.",
  },
  {
    title: "UI/UX Principles",
    description:
      "Usable interfaces, clear hierarchy, consistent design systems, and accessible layouts.",
  },
  {
    title: "State Management",
    description:
      "Predictable application state through patterns such as BLoC, Cubit, and Riverpod.",
  },
  {
    title: "Clean Code",
    description:
      "Readable, testable code with meaningful naming, small units, and consistent conventions.",
  },
  {
    title: "API Integration",
    description:
      "Consuming REST services, handling auth, errors, loading states, and data mapping.",
  },
  {
    title: "Database Basics",
    description:
      "Relational modeling, queries, local persistence, and structured data storage.",
  },
  {
    title: "Problem Solving & Algorithms",
    description:
      "Breaking down problems, choosing data structures, and reasoning about complexity.",
  },
  {
    title: "Version Control (Git)",
    description:
      "Branching workflows, pull requests, conflict resolution, and collaborative history.",
  },
];

const tools = [
  "Flutter",
  "Dart",
  "Laravel",
  "React",
  "Firebase",
  "Git & GitHub",
  "REST APIs",
  "MySQL",
  "Figma",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-strong">
            Technical Foundation
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Software Engineering Skills
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The engineering competencies behind every lesson I teach and every
            application I build — kept deliberately broad and language-agnostic.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {competencies.map((competency, index) => (
            <div
              key={competency.title}
              className="animate-fade-up flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: "forwards",
              }}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {competency.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {competency.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-up mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Tools &amp; Technologies
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Specific stacks I use in training projects and production work.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Hands-on
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
