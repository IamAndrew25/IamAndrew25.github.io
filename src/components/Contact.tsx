"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
    return (
        <section id="contact" className="relative px-6 py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/3 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl text-center">
                <AnimateOnScroll>
                    <h2 className="mb-3 font-mono text-sm tracking-widest text-accent">
                        Get in Touch
                    </h2>
                    <h3 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                        Let&apos;s Work Together
                    </h3>
                    <p className="mb-12 text-lg text-muted leading-relaxed">
                        I&apos;m always open to new opportunities,
                        collaborations, or just a friendly conversation about
                        technology. Feel free to reach out through any of
                        these channels.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={200}>
                    <div className="mx-auto grid max-w-lg gap-4 sm:grid-cols-2">
                        {/* Email card */}
                        <a
                            href="mailto:Andrew.10251998@gmail.com"
                            className="group flex flex-col items-center gap-3 rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                <svg
                                    className="h-5 w-5 text-accent"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-foreground">
                                Email
                            </span>
                            <span className="text-xs text-muted group-hover:text-accent">
                                Andrew.10251998@gmail.com
                            </span>
                        </a>

                        {/* WhatsApp card */}
                        <a
                            href="https://wa.me/5101908535568"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                                <svg
                                    className="h-5 w-5 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-foreground">
                                WhatsApp
                            </span>
                            <span className="text-xs text-muted group-hover:text-green-400">
                                +51 01 908 535 568
                            </span>
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
