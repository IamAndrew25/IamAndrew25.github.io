"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { useLanguage } from "@/i18n";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative px-6 py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/4 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/3 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
                        {t.about.title}
                    </h2>
                </AnimateOnScroll>

                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Text - takes 3 cols */}
                    <AnimateOnScroll delay={100} className="lg:col-span-3">
                        <div className="space-y-6 text-muted leading-relaxed">
                            {t.about.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    {/* Skills - takes 2 cols */}
                    <AnimateOnScroll delay={250} direction="right" className="lg:col-span-2">
                        <h4 className="mb-6 font-mono text-xs tracking-widest text-muted">
                            {t.about.skillsLabel}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {t.about.skills.map((skill) => (
                                <div
                                    key={skill.icon}
                                    className="flex items-center gap-3 rounded-lg border border-card-border bg-card-bg px-4 py-3 transition-colors hover:border-accent/30"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-bold text-accent">
                                        {skill.icon}
                                    </span>
                                    <span className="text-sm text-foreground">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
