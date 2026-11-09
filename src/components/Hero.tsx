import Link from "next/link";

const heroHighlights = [
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="m16.24 7.76 2.83-2.83" />
      </svg>
    ),
    label: "3+ Years",
    detail: "Software engineering in production teams",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    label: "Online & In-Center",
    detail: "Professional IT training delivery",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Mentorship First",
    detail: "Student guidance, code reviews, and feedback",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    label: "Courseware Ready",
    detail: "Structured lessons, exercises, and projects",
  },
];

const deliveryFormats = [
  "Curriculum Design",
  "Workshop Facilitation",
  "1:1 Mentoring",
  "Project-Based Learning",
];

export default function Hero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-background px-4 pb-14 pt-28 sm:px-6 lg:px-8">
      <img
        src="https://wajeh-s-portfolio.vercel.app/images/bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 z-0 opacity-80 backdrop-blur-[1px]"
        style={{ backgroundColor: "var(--background)" }}
      />

      <div className="container relative z-10 mx-auto">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-14">
          <div className="flex flex-col items-center gap-8 text-center xl:flex-row xl:items-center xl:gap-10 xl:text-left">
            <div className="group relative shrink-0">
              <div className="absolute -inset-8 rounded-full bg-primary/5 blur-[80px]" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-primary/40 opacity-50 blur transition duration-500 group-hover:opacity-80" />
              <div className="relative h-40 w-40 rounded-full border-2 border-primary/30 bg-background p-1.5 sm:h-48 sm:w-48 xl:h-52 xl:w-52">
                <img
                  src="/images/profile.jpg"
                  alt="Wajeh Al-Hawari"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6 xl:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-strong">
                  Wajeh Al-Hawari
                </p>
                <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[42px] xl:text-[44px]">
                  IT Instructor, Technical Trainer &amp; Software Engineer
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
                  3+ years of software engineering experience combined with
                  professional IT training, mentoring, and student guidance —
                  delivered both online and in-center. I help learners turn
                  complex technical concepts into working, real-world projects.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
                <Link
                  href="/#contact"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(67,223,184,0.5)]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <span>CONTACT ME</span>
                </Link>
                <a
                  href="/files/WajihHawari_CV_2026.pdf"
                  download="WajihHawari_CV_2026.pdf"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3 font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15V3" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                  <span>DOWNLOAD CV</span>
                </a>
              </div>
            </div>
          </div>

          <aside className="w-full rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-strong">
              Training Snapshot
            </p>
            <ul className="mt-5 space-y-4">
              {heroHighlights.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {item.label}
                    </span>
                    <span className="block text-sm leading-snug text-muted-foreground">
                      {item.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
              {deliveryFormats.map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                >
                  {format}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
