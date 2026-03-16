"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <a
                    href="#"
                    className="font-mono text-lg font-bold text-foreground transition-colors hover:text-accent"
                >
                    AOC
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile: theme toggle + menu button */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-muted transition-colors hover:text-foreground"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-t border-card-border bg-background px-6 py-4 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-muted transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
