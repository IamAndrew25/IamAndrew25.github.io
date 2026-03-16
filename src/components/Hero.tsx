"use client";

import Image from "next/image";
import TypingEffect from "./TypingEffect";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            {/* Background decorative elements (local to Hero) */}
            <div className="pointer-events-none absolute inset-0">
                {/* Gradient orbs */}
                <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/3 blur-3xl" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-2xl text-center">
                {/* Profile photo */}
                <div className="mb-8 flex justify-center">
                    <div className="animate-fade-in relative h-40 w-40 overflow-hidden rounded-full border-2 border-accent/30 shadow-xl shadow-accent/10 sm:h-44 sm:w-44">
                        <Image
                            src="/profile.png"
                            alt="Andres Obispo Calla"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.15)]" />
                    </div>
                </div>

                {/* Open to Work badge */}
                <div className="animate-fade-in-delay-1 mb-5 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Open to Work
                    </span>
                </div>

                <p className="animate-fade-in-delay-1 mb-4 font-mono text-sm tracking-widest text-accent">
                    Hello, I&apos;m
                </p>
                <h1 className="animate-fade-in-delay-2 mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                    Andres Obispo Calla
                </h1>
                <div className="animate-fade-in-delay-3 mb-10 h-8 text-lg text-muted sm:text-xl">
                    <TypingEffect
                        words={[
                            "Software Developer",
                            "AI Developer",
                            "Python Developer",
                            "Problem Solver",
                        ]}
                    />
                </div>
                <div className="animate-fade-in-delay-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#projects"
                        className="w-full rounded-lg bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="w-full rounded-lg border border-card-border px-8 py-3.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground sm:w-auto"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="animate-fade-in-delay-4 mt-16 flex justify-center">
                    <div className="flex flex-col items-center gap-2 text-muted/40">
                        <span className="font-mono text-xs">scroll</span>
                        <div className="h-8 w-px animate-bounce bg-gradient-to-b from-muted/40 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
