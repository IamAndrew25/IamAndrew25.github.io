"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextValue {
    locale: Locale;
    t: Translations;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("language") as Locale | null;
        if (stored === "es" || stored === "en") {
            setLocale(stored);
            document.documentElement.lang = stored;
        }
    }, []);

    const toggleLanguage = () => {
        const next: Locale = locale === "en" ? "es" : "en";
        setLocale(next);
        localStorage.setItem("language", next);
        document.documentElement.lang = next;
    };

    const t = translations[locale];

    if (!mounted) {
        return (
            <LanguageContext.Provider
                value={{ locale: "en", t: translations.en, toggleLanguage }}
            >
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
