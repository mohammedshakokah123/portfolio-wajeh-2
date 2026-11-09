const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
        <path d="m7 11 2-2 2 2 3-3" />
      </svg>
    ),
    title: "Technical Instruction",
    description:
      "Teaching programming fundamentals, mobile development, and software design in a way beginners can follow and apply.",
    delay: "0s",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M9 7h7" />
        <path d="M9 11h7" />
      </svg>
    ),
    title: "Courseware & Curriculum",
    description:
      "Designing structured lessons, progressive exercises, and project briefs aligned to clear learning outcomes.",
    delay: "0.1s",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: "Mentorship & Guidance",
    description:
      "Supporting students through code reviews, pair debugging, career advice, and confidence building.",
    delay: "0.2s",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    title: "Software Engineering",
    description:
      "3+ years building production applications with clean architecture, API integration, and modern tooling.",
    delay: "0.3s",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          className="animate-fade-up mb-16 text-center"
          style={{ animationDelay: "0s", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            IT instructor and software engineer with 3+ years of experience
            building applications and training learners. I specialize in making
            technical subjects clear, practical, and achievable.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="animate-fade-up"
              style={{
                animationDelay: feature.delay,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-primary/20 shadow-sm p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I started university in 2020 and began learning programming
                  and mobile development in 2022. In 2023 I started working
                  professionally as a software engineer, gaining 3+ years of
                  experience building production-ready apps across e-commerce,
                  dashboards, and social platforms.
                </p>
                <p>
                  Alongside engineering, I moved into teaching — delivering IT
                  and programming training in-center and online. I design the
                  courseware, run hands-on lab sessions, and mentor students
                  through their first real projects, from fundamentals to
                  deployment.
                </p>
                <p>
                  Throughout my studies, my GPA was consistently strong, around
                  80, with no failed years, and I successfully graduated. I am
                  currently available for training programs and software work,
                  with stable internet and electricity, and I focus on clear
                  explanations, clean code, and practical outcomes for learners.
                </p>
                <p>
                  I regularly share the problems I solve and the lessons I teach
                  on LinkedIn, and I continue exploring new technologies and
                  teaching practices. Outside of work, I enjoy contributing to
                  open-source projects and writing technical guides for
                  beginners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
