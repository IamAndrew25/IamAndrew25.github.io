"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface TimelineItem {
    year: string;
    title: string;
    institution: string;
    description: string;
    type: "education" | "certification" | "experience";
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
                                                <div className="h-3 w-3 rounded-full border-2 border-accent bg-background transition-all group-hover:scale-125 group-hover:bg-accent/20" />
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:p-8">
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
                                            <h4 className="mb-1 text-lg font-semibold text-foreground">
                                                {item.title}
                                            </h4>
                                            <p className="mb-3 text-sm font-medium text-accent/80">
                                                {item.institution}
                                            </p>
                                            <p className="text-sm leading-relaxed text-muted">
                                                {item.description}
                                            </p>
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
