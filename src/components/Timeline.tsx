"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface TimelineItem {
    year: string;
    title: string;
    institution: string;
    description: string;
    type: "education" | "certification" | "experience";
    highlighted?: boolean;
    highlights?: string[];
}

const timelineItems: TimelineItem[] = [
    {
        year: "2021 — Present",
        title: "Software Engineering",
        institution: "University",
        description:
            "Final-year student pursuing a degree in Software Engineering. " +
            "Focused on backend development, database design, and AI integration.",
        type: "education",
    },
    {
        year: "2024",
        title: "Global Leadership & Entrepreneurship",
        institution: "Aspire Institute (Harvard)",
        description:
            "Completed leadership training program founded by Harvard professors. " +
            "Developed strategic thinking, project management, and entrepreneurial skills.",
        type: "certification",
        highlighted: true,
        highlights: [
            "Founded by Harvard professors",
            "Strategic thinking & leadership",
            "Entrepreneurial mindset",
        ],
    },
    {
        year: "2024",
        title: "AI Agents & MCP Protocol",
        institution: "Self-directed Learning",
        description:
            "Exploring AI agents, Model Context Protocol (MCP), and workflow " +
            "automation. Building integrations with tools like GitHub Copilot.",
        type: "experience",
    },
    {
        year: "2023",
        title: "Python Development Projects",
        institution: "Academic & Personal",
        description:
            "Built multiple systems using Python, MVC architecture, PostgreSQL, " +
            "and Pandas for data analysis. Gained hands-on experience with full-stack development.",
        type: "experience",
    },
];

const typeColors: Record<string, { bg: string; text: string; label: string }> = {
    education: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        label: "Education",
    },
    certification: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        label: "Certification",
    },
    experience: {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        label: "Experience",
    },
};

export default function Timeline() {
    return (
        <section id="experience" className="relative px-6 py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/3 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/3 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2 className="mb-3 font-mono text-sm tracking-widest text-accent">
                        My Journey
                    </h2>
                    <h3 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                        Experience & Education
                    </h3>
                    <p className="mb-16 max-w-xl text-muted">
                        A timeline of my academic path, certifications, and
                        hands-on experience in software development.
                    </p>
                </AnimateOnScroll>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-card-border to-transparent md:left-8 md:block" />

                    <div className="space-y-12">
                        {timelineItems.map((item, index) => {
                            const colors = typeColors[item.type];
                            const isHighlighted = item.highlighted;
                            return (
                                <AnimateOnScroll
                                    key={index}
                                    delay={index * 150}
                                    direction="left"
                                >
                                    <div className="group relative md:pl-20">
                                        {/* Dot on timeline */}
                                        <div className="absolute left-0 top-2 hidden md:block">
                                            <div className="flex h-[17px] w-[17px] items-center justify-center">
                                                {isHighlighted ? (
                                                    <div className="relative">
                                                        <div className="absolute -inset-1 animate-ping rounded-full bg-emerald-400/40" />
                                                        <div className="relative h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-emerald-500/30" />
                                                    </div>
                                                ) : (
                                                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background transition-all group-hover:scale-125 group-hover:bg-accent/20" />
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className={`rounded-xl border p-6 transition-all sm:p-8 ${
                                                isHighlighted
                                                    ? "border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-card-bg to-card-bg shadow-lg shadow-emerald-500/5 hover:border-emerald-400/50 hover:shadow-emerald-500/10"
                                                    : "border-card-border bg-card-bg hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                                            }`}
                                        >
                                            {/* Featured label for highlighted items */}
                                            {isHighlighted && (
                                                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-400">
                                                    <svg
                                                        className="h-3 w-3"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    FEATURED
                                                </div>
                                            )}

                                            <div className="mb-4 flex flex-wrap items-center gap-3">
                                                <span className="font-mono text-xs text-muted">
                                                    {item.year}
                                                </span>
                                                <span
                                                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
                                                >
                                                    {colors.label}
                                                </span>
                                            </div>
                                            <h4
                                                className={`mb-1 text-lg font-semibold ${
                                                    isHighlighted
                                                        ? "text-xl text-foreground"
                                                        : "text-foreground"
                                                }`}
                                            >
                                                {item.title}
                                            </h4>
                                            <p
                                                className={`mb-3 text-sm font-medium ${
                                                    isHighlighted
                                                        ? "text-emerald-400/80"
                                                        : "text-accent/80"
                                                }`}
                                            >
                                                {item.institution}
                                            </p>
                                            <p className="text-sm leading-relaxed text-muted">
                                                {item.description}
                                            </p>

                                            {/* Highlight tags for featured items */}
                                            {item.highlights && (
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {item.highlights.map(
                                                        (highlight, i) => (
                                                            <span
                                                                key={i}
                                                                className="rounded-md border border-emerald-500/15 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-400/80"
                                                            >
                                                                {highlight}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
