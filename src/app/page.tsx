"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
    return (
        <div className="relative">
            {/* ===== Global background effects (visible on all sections) ===== */}
            <div className="pointer-events-none fixed inset-0 z-0">
                {/* Animated mesh gradient */}
                <div className="mesh-gradient absolute inset-0 opacity-30" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Particle network (fixed, covers entire page) */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <ParticleBackground />
            </div>

            {/* Decorative code snippets - left side (fixed) */}
            <div className="pointer-events-none fixed left-4 top-1/4 z-0 hidden font-mono text-[10px] leading-relaxed text-accent/10 lg:block xl:left-12 xl:text-xs">
                <div className="code-float-1 space-y-1">
                    <p>
                        <span className="text-emerald-500/15">def</span>{" "}
                        <span className="text-accent/15">solve</span>
                        <span className="text-muted/10">(data):</span>
                    </p>
                    <p className="pl-4 text-muted/10">
                        result = analyze(data)
                    </p>
                    <p className="pl-4 text-muted/10">
                        model = train(result)
                    </p>
                    <p className="pl-4">
                        <span className="text-emerald-500/15">return</span>{" "}
                        <span className="text-muted/10">model.predict()</span>
                    </p>
                    <p>&nbsp;</p>
                    <p className="text-muted/8">
                        # AI-powered solutions
                    </p>
                    <p>
                        <span className="text-purple-500/15">class</span>{" "}
                        <span className="text-accent/15">Agent</span>
                        <span className="text-muted/10">:</span>
                    </p>
                    <p className="pl-4 text-muted/10">
                        def __init__(self):
                    </p>
                    <p className="pl-8 text-muted/10">
                        self.tools = []
                    </p>
                </div>
            </div>

            {/* Decorative code snippets - right side (fixed) */}
            <div className="pointer-events-none fixed right-4 bottom-1/4 z-0 hidden font-mono text-[10px] leading-relaxed text-accent/10 lg:block xl:right-12 xl:text-xs">
                <div className="code-float-2 space-y-1 text-right">
                    <p className="text-muted/8">
                        -- database queries
                    </p>
                    <p>
                        <span className="text-purple-500/15">SELECT</span>{" "}
                        <span className="text-muted/10">* FROM</span>{" "}
                        <span className="text-accent/15">projects</span>
                    </p>
                    <p>
                        <span className="text-purple-500/15">WHERE</span>{" "}
                        <span className="text-muted/10">status =</span>{" "}
                        <span className="text-emerald-500/15">
                            &apos;active&apos;
                        </span>
                    </p>
                    <p>
                        <span className="text-purple-500/15">ORDER BY</span>{" "}
                        <span className="text-muted/10">created_at</span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <span className="text-muted/10">
                            {"{"}
                        </span>
                    </p>
                    <p className="pl-4">
                        <span className="text-accent/15">
                            &quot;mcp&quot;
                        </span>
                        <span className="text-muted/10">: true,</span>
                    </p>
                    <p className="pl-4">
                        <span className="text-accent/15">
                            &quot;agent&quot;
                        </span>
                        <span className="text-muted/10">: &quot;ready&quot;</span>
                    </p>
                    <p>
                        <span className="text-muted/10">
                            {"}"}
                        </span>
                    </p>
                </div>
            </div>

            {/* ===== Page content (above background) ===== */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Timeline />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}
