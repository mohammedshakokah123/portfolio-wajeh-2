const experiences = [
  {
    company: "Training Center",
    location: "Latakia, Syria",
    flag: "👨‍🏫",
    role: "IT Instructor & Technical Trainer",
    duration: "Ongoing",
    type: "Online & In-Center",
    highlights: [
      "Delivered beginner and intermediate IT training sessions in-center and online.",
      "Taught programming fundamentals, Dart/Flutter, state management, architecture, and API integration.",
      "Designed structured courseware, exercises, and project briefs for each cohort.",
      "Mentored students through projects, debugging sessions, and one-to-one code reviews.",
    ],
  },
  {
    company: "Freelance Software Engineer & Technical Lead",
    location: "Multiple Clients",
    flag: "🌍",
    role: "Technical Lead",
    duration: "",
    type: "Freelance",
    highlights: [
      "Led the development team for a SaaS platform and distributed tasks among developers.",
      "Communicated directly with clients and translated requirements into technical solutions.",
      "Delivered multiple freelance projects across different industries.",
    ],
  },
  {
    company: "Software Company",
    location: "Latakia, Syria",
    flag: "🇸🇾",
    role: "Software Engineer (Mobile)",
    duration: "2 Years",
    type: "On-site",
    highlights: [
      "Developed and maintained multiple cross-platform applications.",
      "Built scalable features using clean architecture and BLoC.",
      "Integrated REST APIs, Firebase, authentication, maps, and payment solutions.",
      "Collaborated closely with UI/UX designers and backend developers.",
    ],
  },
  {
    company: "UAE Software Company",
    location: "Remote",
    flag: "🇦🇪",
    role: "Software Engineer",
    duration: "6 Months",
    type: "Remote",
    highlights: [
      "Maintained and enhanced a production mobile application.",
      "Fixed bugs and implemented new features for an active user base.",
      "Collaborated remotely with the development team.",
      "Successfully published application updates to Google Play.",
    ],
  },
];

const stats = [
  { label: "Years in Software", value: "3+" },
  { label: "Projects Delivered", value: "12+" },
  { label: "Mentoring Formats", value: "1:1 + Group" },
  { label: "Training Delivery", value: "Online + In-Center" },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          className="animate-fade-up mb-16 text-center"
          style={{ animationDelay: "0s", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Professional &amp; Teaching Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Software engineering in production teams, technical leadership on
            client projects, and hands-on classroom mentoring — the experience
            behind every training session.
          </p>
        </div>

        <div
          className="animate-fade-up mb-16"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="text-xl font-bold text-primary-strong sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="animate-fade-up relative"
                style={{
                  animationDelay: `${0.2 + i * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="md:grid md:grid-cols-[4rem_1fr] gap-6">
                  <div className="hidden md:flex justify-center">
                    <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-card text-xl shadow-sm">
                      {exp.flag}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="md:hidden text-lg">{exp.flag}</span>
                          <h3 className="text-lg font-bold">{exp.company}</h3>
                        </div>
                        <p className="text-sm text-primary-strong font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.duration && (
                          <span className="inline-flex items-center rounded-full border border-border bg-projects-bg px-3 py-1 text-xs font-medium">
                            {exp.duration}
                          </span>
                        )}
                        {exp.type && (
                          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-strong">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
