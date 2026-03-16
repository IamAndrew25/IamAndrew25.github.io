"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface Project {
    name: string;
    description: string;
    language: string;
    url: string;
    highlights: string[];
}

const projects: Project[] = [
    {
        name: "Gestor de Gastos",
        description:
            "Personal expense manager built with Python. Track, categorize, and analyze your spending habits with an intuitive interface.",
        language: "Python",
        url: "https://github.com/IamAndrew25/Gestor_gastos",
        highlights: ["Expense Tracking", "Data Analysis", "CLI"],
    },
    {
        name: "Inventario Farmacia",
        description:
            "Pharmacy inventory management system built with Python. Manage stock, track products, and generate reports for pharmaceutical operations.",
        language: "Python",
        url: "https://github.com/IamAndrew25/inventario_farmacia",
        highlights: ["Inventory System", "PostgreSQL", "MVC"],
    },
    {
        name: "MCP Integration with Copilot",
        description:
            "Exercise project exploring Model Context Protocol (MCP) integration with GitHub Copilot. Hands-on experience with AI-powered development tools.",
        language: "Python",
        url: "https://github.com/IamAndrew25/skills-integrate-mcp-with-copilot_1",
        highlights: ["AI Tools", "MCP Protocol", "Copilot"],
    },
];

function LanguageBadge({ language }: { language: string }) {
    return (
        <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            {language}
        </span>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-card-border bg-card-bg p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
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
                        My Work
                    </h2>
                    <h3 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                        Projects
                    </h3>
                    <p className="mb-14 max-w-xl text-muted">
                        A selection of projects I&apos;ve built. Each one
                        represents a different challenge and learning experience.
                    </p>
                </AnimateOnScroll>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <AnimateOnScroll
                            key={project.name}
                            delay={index * 150}
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
