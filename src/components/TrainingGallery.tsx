type TrainingMoment = {
  title: string;
  caption: string;
  format: "In-Center" | "Online" | "Workshop";
  /** Add or change the photo path here, e.g. "/images/training/whiteboard.jpg". */
  image?: string;
};

const trainingMoments: TrainingMoment[] = [
  {
    title: "Project Presentation",
    format: "In-Center",
    image: "/images/graduation-project/webp/9.jpg",
    caption:
      "Walking through the project from problem statement to final delivery, and explaining the decisions behind each stage.",
  },
  {
    title: "Architecture & Code Review",
    format: "In-Center",
    image: "/images/graduation-project/webp/10.jpg",
    caption:
      "Reviewing structure, naming, and clean-code decisions together so students understand the why behind the code.",
  },
  {
    title: "Hands-On Development",
    format: "In-Center",
    image: "/images/graduation-project/webp/11.jpg",
    caption:
      "Building features live and debugging issues as they appear, with students following along in their own projects.",
  },
  {
    title: "Mentoring Session",
    format: "In-Center",
    image: "/images/graduation-project/webp/12.jpg",
    caption:
      "Focused guidance on scope, blockers, and next steps — adapted to each learner's level and pace.",
  },
  {
    title: "UI/UX Walkthrough",
    format: "Workshop",
    image: "/images/graduation-project/webp/13.jpg",
    caption:
      "Connecting design choices to the implementation, from layout and hierarchy to reusable components.",
  },
  {
    title: "Practical Workshop",
    format: "Workshop",
    image: "/images/graduation-project/webp/14.jpg",
    caption:
      "Students apply each concept in a guided exercise while I move between them and give direct feedback.",
  },
  {
    title: "Classroom Discussion",
    format: "In-Center",
    image: "/images/graduation-project/webp/15.jpg",
    caption:
      "Open Q&A and group problem-solving, where learners practice explaining their thinking out loud.",
  },
  {
    title: "Final Project Review",
    format: "In-Center",
    image: "/images/graduation-project/webp/16.jpg",
    caption:
      "Evaluating the finished work, highlighting what was learned, and defining the next step for each student.",
  },
];

const projectScreens = [
  "/images/graduation-project/webp/1.jpg",
  "/images/graduation-project/webp/2.jpg",
  "/images/graduation-project/webp/3.jpg",
  "/images/graduation-project/webp/4.jpg",
  "/images/graduation-project/webp/5.jpg",
  "/images/graduation-project/webp/6.jpg",
  "/images/graduation-project/webp/7.jpg",
  "/images/graduation-project/webp/8.jpg",
];

/**
 * Workshop / introductory video.
 *
 * To publish a different video, set either:
 *  - embedUrl: a YouTube/Vimeo embed URL (e.g. "https://www.youtube.com/embed/VIDEO_ID")
 *  - fileSrc:  a local or hosted MP4 (e.g. "/videos/training-intro.mp4")
 * The embedUrl takes priority when both are provided.
 */
const workshopVideo: {
  title: string;
  description: string;
  embedUrl: string;
  fileSrc: string;
} = {
  title: "Graduation Project Walkthrough",
  description:
    "A recorded walkthrough from the graduation project sessions — used in training as a practical case study for planning, building, and delivering a complete application.",
  embedUrl: "",
  fileSrc: "/images/graduation-project/demo.mp4",
};

function PlayIcon() {
  return (
    <svg
      className="h-8 w-8 translate-x-0.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z" />
    </svg>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary via-secondary to-primary/10 text-muted-foreground">
      <svg
        className="h-8 w-8 text-primary/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m21 15-4.5-4.5L7 20" />
      </svg>
      <span className="text-xs font-medium uppercase tracking-[0.14em]">
        Training photo
      </span>
    </div>
  );
}

function VideoEmbed() {
  const { title, description, embedUrl, fileSrc } = workshopVideo;

  const highlights = [
    "Planning the scope and feature list before writing code",
    "Structuring the codebase so it stays easy to maintain",
    "Turning the screens into a working, demo-ready build",
  ];

  const details = (
    <div className="flex flex-col gap-4">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-strong">
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
          <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
        Workshop Video
      </span>

      <div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <ul className="mt-1 grid gap-2.5 sm:grid-cols-3 sm:gap-4">
        {highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-primary-strong"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m20 6-11 11-5-5" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {embedUrl ? (
        <div className="p-5 sm:p-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
            <iframe
              src={embedUrl}
              title={title}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="mt-6">{details}</div>
        </div>
      ) : fileSrc ? (
        <>
          <div className="p-4 sm:p-5">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black sm:aspect-[21/9]">
              <video
                src={fileSrc}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="border-t border-border px-5 py-6 sm:px-6">
            {details}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/20 via-background to-secondary px-6 py-16 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-primary">
            <PlayIcon />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Workshop recording coming soon
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Introduction to programming, tools, and project workflow.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrainingGallery() {
  return (
    <section
      id="training"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="animate-fade-up mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-strong">
            Training in Action
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Real Classrooms, Real Mentorship
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A look at how I teach: clear explanations, guided practice, and
            hands-on support while students build their own projects — in person
            and online.
          </p>
        </div>

        <div className="animate-fade-up mb-10">
          <VideoEmbed />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainingMoments.map((moment, index) => (
            <figure
              key={moment.title}
              className="animate-fade-up group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                {moment.image ? (
                  <img
                    src={moment.image}
                    alt={`${moment.title} — ${moment.format} training session`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder />
                )}
                <span className="absolute left-3 top-3 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground shadow-sm">
                  {moment.format}
                </span>
              </div>
              <figcaption className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-foreground">
                  {moment.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {moment.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Project Walkthrough Screens
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Screens from the graduation project used as a practical case
                study — students see how each feature moves from concept to
                working interface.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Case Study
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {projectScreens.map((src, index) => (
              <div
                key={src}
                className="animate-fade-up overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={src}
                  alt={`Graduation project screen ${index + 1}`}
                  className="w-full bg-secondary object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-foreground">
          Mentoring beginners and career switchers through hands-on, project-first
          training.
        </p>
      </div>
    </section>
  );
}
