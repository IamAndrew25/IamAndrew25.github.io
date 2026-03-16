import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Andres Obispo Calla | Software Developer",
    description:
        "Portfolio of Andres Obispo Calla — Software Engineering student passionate about building solutions where robust engineering meets AI potential. Skilled in Python, PostgreSQL, MVC, and AI agents.",
    keywords: [
        "Andres Obispo Calla",
        "Software Developer",
        "Python",
        "AI Agents",
        "MCP Protocol",
        "Portfolio",
        "Software Engineering",
        "PostgreSQL",
    ],
    authors: [{ name: "Andres Obispo Calla" }],
    creator: "Andres Obispo Calla",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://iamandrew25.github.io",
        siteName: "Andres Obispo Calla — Portfolio",
        title: "Andres Obispo Calla | Software Developer",
        description:
            "Software Engineering student passionate about building solutions where robust engineering meets AI potential. Skilled in Python, PostgreSQL, MVC, and AI agents.",
        images: [
            {
                url: "https://iamandrew25.github.io/profile.png",
                width: 400,
                height: 400,
                alt: "Andres Obispo Calla",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Andres Obispo Calla | Software Developer",
        description:
            "Software Engineering student passionate about building solutions where robust engineering meets AI potential.",
        images: ["https://iamandrew25.github.io/profile.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
