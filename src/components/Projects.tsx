"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { useLanguage } from "@/i18n";

function LanguageBadge({ language }: { language: string }) {
    return (
        <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            {language}
        </span>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: {
        name: string;
        description: string;
        language: string;
        url: string;
        highlights: string[];
    };
    index: number;
}) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-xl border border-card-border bg-card-bg p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
        >
            <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs text-muted/50">
                    0{index + 1}
                </span>
                <svg
                    className="h-5 w-5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </div>
            <h4 className="mb-3 text-xl font-semibold text-foreground">
                {project.name}
            </h4>
            <p className="mb-6 flex-grow text-sm leading-relaxed text-muted">
                {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
                {project.highlights.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-card-border/50 px-2.5 py-1 text-xs text-muted"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div>
                <LanguageBadge language={project.language} />
            </div>
        </a>
    );
}

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="relative px-6 py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-1/2 h-96 w-96 rounded-full bg-accent/4 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/3 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">
                <AnimateOnScroll>
                    <h2 className="mb-3 font-mono text-sm tracking-widest text-accent">
                        {t.projects.subtitle}
                    </h2>
                    <h3 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                        {t.projects.title}
                    </h3>
                    <p className="mb-14 max-w-xl text-muted">
                        {t.projects.description}
                    </p>
                </AnimateOnScroll>
                <div className="grid grid-rows-[auto] items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {t.projects.items.map((project, index) => (
                        <AnimateOnScroll
                            key={project.url}
                            delay={index * 150}
                            className="h-full"
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
