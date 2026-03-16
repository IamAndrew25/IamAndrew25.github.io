"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const skills = [
    { name: "Python", icon: "PY" },
    { name: "PostgreSQL", icon: "PG" },
    { name: "Pandas", icon: "PD" },
    { name: "MVC Architecture", icon: "MV" },
    { name: "Git & GitHub", icon: "GH" },
    { name: "AI Agents", icon: "AI" },
    { name: "MCP Protocol", icon: "MC" },
    { name: "Data Analysis", icon: "DA" },
];

export default function About() {
    return (
        <section id="about" className="relative px-6 py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/4 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/3 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2 className="mb-3 font-mono text-sm tracking-widest text-accent">
                        About Me
                    </h2>
                    <h3 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
                        Who I Am
                    </h3>
                </AnimateOnScroll>

                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Text - takes 3 cols */}
                    <AnimateOnScroll delay={100} className="lg:col-span-3">
                        <div className="space-y-6 text-muted leading-relaxed">
                            <p>
                                Final-year Software Engineering student passionate
                                about building solutions where robust engineering
                                meets the potential of Artificial Intelligence.
                            </p>
                            <p>
                                I have hands-on experience in Python developing
                                complete systems with MVC architecture, PostgreSQL,
                                and data analysis with Pandas. My technical vision
                                is complemented by training in Global Leadership
                                and Entrepreneurship from the Aspire Institute
                                (founded by Harvard professors), which allows me
                                to approach projects with a strategic and
                                results-oriented mindset.
                            </p>
                            <p>
                                I currently explore AI agents, MCPs, and workflow
                                automation, always seeking software that doesn&apos;t
                                just work but learns and evolves.
                            </p>
                            <p>
                                In my free time, I invest in blockchain and
                                cryptocurrencies like Ethereum and DAI, and I&apos;m
                                interested in cybersecurity. I believe that
                                understanding how systems work from the inside
                                &mdash; including how they break &mdash; makes
                                better engineers.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Skills - takes 2 cols */}
                    <AnimateOnScroll delay={250} direction="right" className="lg:col-span-2">
                        <h4 className="mb-6 font-mono text-xs tracking-widest text-muted">
                            TECHNOLOGIES & SKILLS
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
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
