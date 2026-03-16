export type Locale = "en" | "es";

export interface Translations {
    nav: {
        about: string;
        experience: string;
        projects: string;
        contact: string;
    };
    hero: {
        greeting: string;
        name: string;
        roles: string[];
        viewProjects: string;
        contactMe: string;
        scroll: string;
    };
    about: {
        title: string;
        paragraphs: string[];
        skillsLabel: string;
        skills: { name: string; icon: string }[];
    };
    timeline: {
        subtitle: string;
        title: string;
        description: string;
        featured: string;
        typeLabels: {
            education: string;
            certification: string;
            experience: string;
        };
        items: {
            year: string;
            title: string;
            institution: string;
            description: string;
            type: "education" | "certification" | "experience";
            highlighted?: boolean;
            highlights?: string[];
        }[];
    };
    projects: {
        subtitle: string;
        title: string;
        description: string;
        items: {
            name: string;
            description: string;
            language: string;
            url: string;
            highlights: string[];
        }[];
    };
    contact: {
        subtitle: string;
        title: string;
        description: string;
        email: string;
        whatsapp: string;
    };
    footer: {
        rights: string;
    };
}

const en: Translations = {
    nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
    },
    hero: {
        greeting: "Hello, I\u2019m",
        name: "Andres Obispo Calla",
        roles: [
            "Software Developer",
            "AI Developer",
            "Python Developer",
            "Problem Solver",
        ],
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        scroll: "scroll",
    },
    about: {
        title: "About Me",
        paragraphs: [
            "Final-year Software Engineering student passionate about building solutions where robust engineering meets the potential of Artificial Intelligence.",
            "I have hands-on experience in Python developing complete systems with MVC architecture, PostgreSQL, and data analysis with Pandas. My technical vision is complemented by training in Global Leadership and Entrepreneurship from the Aspire Institute (founded by Harvard professors), which allows me to approach projects with a strategic and results-oriented mindset.",
            "I currently explore AI agents, MCPs, and workflow automation, always seeking software that doesn\u2019t just work but learns and evolves.",
            "In my free time, I invest in blockchain and cryptocurrencies like Ethereum and DAI, and I\u2019m interested in cybersecurity. I believe that understanding how systems work from the inside \u2014 including how they break \u2014 makes better engineers.",
        ],
        skillsLabel: "TECHNOLOGIES & SKILLS",
        skills: [
            { name: "Python", icon: "PY" },
            { name: "PostgreSQL", icon: "PG" },
            { name: "Pandas", icon: "PD" },
            { name: "MVC Architecture", icon: "MV" },
            { name: "Git & GitHub", icon: "GH" },
            { name: "AI Agents", icon: "AI" },
            { name: "MCP Protocol", icon: "MC" },
            { name: "Data Analysis", icon: "DA" },
        ],
    },
    timeline: {
        subtitle: "My Journey",
        title: "Experience & Education",
        description:
            "A timeline of my academic path, certifications, and hands-on experience in software development.",
        featured: "FEATURED",
        typeLabels: {
            education: "Education",
            certification: "Certification",
            experience: "Experience",
        },
        items: [
            {
                year: "In Progress",
                title: "Software Engineering",
                institution: "University",
                description:
                    "Pursuing a degree in Software Engineering. Focused on backend development, database design, and AI integration.",
                type: "education",
                highlighted: true,
                highlights: [
                    "Backend development",
                    "Database design",
                    "AI integration",
                ],
            },
            {
                year: "2024",
                title: "Global Leadership & Entrepreneurship",
                institution: "Aspire Institute (Harvard)",
                description:
                    "Completed leadership training program founded by Harvard professors. Developed strategic thinking, project management, and entrepreneurial skills.",
                type: "certification",
                highlighted: true,
                highlights: [
                    "Founded by Harvard professors",
                    "Strategic thinking & leadership",
                    "Entrepreneurial mindset",
                ],
            },
            {
                year: "2024",
                title: "AI Agents & MCP Protocol",
                institution: "Self-directed Learning",
                description:
                    "Exploring AI agents, Model Context Protocol (MCP), and workflow automation. Building integrations with tools like GitHub Copilot.",
                type: "experience",
            },
            {
                year: "2023",
                title: "Python Development Projects",
                institution: "Academic & Personal",
                description:
                    "Built multiple systems using Python, MVC architecture, PostgreSQL, and Pandas for data analysis. Gained hands-on experience with full-stack development.",
                type: "experience",
            },
        ],
    },
    projects: {
        subtitle: "My Work",
        title: "Projects",
        description:
            "A selection of projects I\u2019ve built. Each one represents a different challenge and learning experience.",
        items: [
            {
                name: "Gestor de Gastos",
                description:
                    "Personal expense manager with full CRUD operations. Features categorized spending, monthly summaries, and data persistence. Built to practice clean architecture in Python.",
                language: "Python",
                url: "https://github.com/IamAndrew25/Gestor_gastos",
                highlights: [
                    "Expense Tracking",
                    "Data Persistence",
                    "CLI Interface",
                    "CRUD Operations",
                ],
            },
            {
                name: "Inventario Farmacia",
                description:
                    "Pharmacy inventory system using MVC architecture and PostgreSQL. Handles product registration, stock control, supplier management, and low-stock alerts with relational database best practices.",
                language: "Python",
                url: "https://github.com/IamAndrew25/inventario_farmacia",
                highlights: [
                    "MVC Pattern",
                    "PostgreSQL",
                    "Stock Control",
                    "Supplier Management",
                ],
            },
            {
                name: "MCP Integration with Copilot",
                description:
                    "Exploring Model Context Protocol (MCP) for connecting AI assistants to external tools. Implemented custom MCP servers and tested integrations with GitHub Copilot for AI-powered workflows.",
                language: "Python",
                url: "https://github.com/IamAndrew25/skills-integrate-mcp-with-copilot_1",
                highlights: [
                    "MCP Protocol",
                    "AI Integration",
                    "GitHub Copilot",
                    "Tool Automation",
                ],
            },
        ],
    },
    contact: {
        subtitle: "Get in Touch",
        title: "Let\u2019s Work Together",
        description:
            "I\u2019m always open to new opportunities, collaborations, or just a friendly conversation about technology. Feel free to reach out through any of these channels.",
        email: "Email",
        whatsapp: "WhatsApp",
    },
    footer: {
        rights: "All rights reserved.",
    },
};

const es: Translations = {
    nav: {
        about: "Sobre M\u00ed",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
    },
    hero: {
        greeting: "Hola, soy",
        name: "Andres Obispo Calla",
        roles: [
            "Desarrollador de Software",
            "Desarrollador de IA",
            "Desarrollador Python",
            "Solucionador de Problemas",
        ],
        viewProjects: "Ver Proyectos",
        contactMe: "Cont\u00e1ctame",
        scroll: "desplazar",
    },
    about: {
        title: "Sobre M\u00ed",
        paragraphs: [
            "Estudiante de \u00faltimo a\u00f1o de Ingenier\u00eda de Software apasionado por construir soluciones donde la ingenier\u00eda robusta se encuentra con el potencial de la Inteligencia Artificial.",
            "Tengo experiencia pr\u00e1ctica en Python desarrollando sistemas completos con arquitectura MVC, PostgreSQL y an\u00e1lisis de datos con Pandas. Mi visi\u00f3n t\u00e9cnica se complementa con formaci\u00f3n en Liderazgo Global y Emprendimiento del Aspire Institute (fundado por profesores de Harvard), lo que me permite abordar proyectos con una mentalidad estrat\u00e9gica y orientada a resultados.",
            "Actualmente exploro agentes de IA, MCPs y automatizaci\u00f3n de flujos de trabajo, siempre buscando software que no solo funcione sino que aprenda y evolucione.",
            "En mi tiempo libre, invierto en blockchain y criptomonedas como Ethereum y DAI, y me interesa la ciberseguridad. Creo que entender c\u00f3mo funcionan los sistemas desde adentro \u2014 incluyendo c\u00f3mo se rompen \u2014 forma mejores ingenieros.",
        ],
        skillsLabel: "TECNOLOG\u00cdAS Y HABILIDADES",
        skills: [
            { name: "Python", icon: "PY" },
            { name: "PostgreSQL", icon: "PG" },
            { name: "Pandas", icon: "PD" },
            { name: "Arquitectura MVC", icon: "MV" },
            { name: "Git & GitHub", icon: "GH" },
            { name: "Agentes IA", icon: "AI" },
            { name: "Protocolo MCP", icon: "MC" },
            { name: "An\u00e1lisis de Datos", icon: "DA" },
        ],
    },
    timeline: {
        subtitle: "Mi Trayectoria",
        title: "Experiencia y Educaci\u00f3n",
        description:
            "Una l\u00ednea de tiempo de mi formaci\u00f3n acad\u00e9mica, certificaciones y experiencia pr\u00e1ctica en desarrollo de software.",
        featured: "DESTACADO",
        typeLabels: {
            education: "Educaci\u00f3n",
            certification: "Certificaci\u00f3n",
            experience: "Experiencia",
        },
        items: [
            {
                year: "En Progreso",
                title: "Ingenier\u00eda de Software",
                institution: "Universidad",
                description:
                    "Cursando la carrera de Ingenier\u00eda de Software. Enfocado en desarrollo backend, dise\u00f1o de bases de datos e integraci\u00f3n de IA.",
                type: "education",
                highlighted: true,
                highlights: [
                    "Desarrollo backend",
                    "Dise\u00f1o de bases de datos",
                    "Integraci\u00f3n de IA",
                ],
            },
            {
                year: "2024",
                title: "Liderazgo Global y Emprendimiento",
                institution: "Aspire Institute (Harvard)",
                description:
                    "Complet\u00e9 el programa de formaci\u00f3n en liderazgo fundado por profesores de Harvard. Desarroll\u00e9 habilidades de pensamiento estrat\u00e9gico, gesti\u00f3n de proyectos y mentalidad emprendedora.",
                type: "certification",
                highlighted: true,
                highlights: [
                    "Fundado por profesores de Harvard",
                    "Pensamiento estrat\u00e9gico y liderazgo",
                    "Mentalidad emprendedora",
                ],
            },
            {
                year: "2024",
                title: "Agentes IA y Protocolo MCP",
                institution: "Aprendizaje Autodidacta",
                description:
                    "Explorando agentes de IA, Model Context Protocol (MCP) y automatizaci\u00f3n de flujos de trabajo. Construyendo integraciones con herramientas como GitHub Copilot.",
                type: "experience",
            },
            {
                year: "2023",
                title: "Proyectos de Desarrollo en Python",
                institution: "Acad\u00e9mico y Personal",
                description:
                    "Constru\u00ed m\u00faltiples sistemas usando Python, arquitectura MVC, PostgreSQL y Pandas para an\u00e1lisis de datos. Obtuve experiencia pr\u00e1ctica en desarrollo full-stack.",
                type: "experience",
            },
        ],
    },
    projects: {
        subtitle: "Mi Trabajo",
        title: "Proyectos",
        description:
            "Una selecci\u00f3n de proyectos que he construido. Cada uno representa un desaf\u00edo diferente y una experiencia de aprendizaje.",
        items: [
            {
                name: "Gestor de Gastos",
                description:
                    "Gestor de gastos personales con operaciones CRUD completas. Incluye gastos categorizados, res\u00famenes mensuales y persistencia de datos. Construido para practicar arquitectura limpia en Python.",
                language: "Python",
                url: "https://github.com/IamAndrew25/Gestor_gastos",
                highlights: [
                    "Control de Gastos",
                    "Persistencia de Datos",
                    "Interfaz CLI",
                    "Operaciones CRUD",
                ],
            },
            {
                name: "Inventario Farmacia",
                description:
                    "Sistema de inventario farmac\u00e9utico usando arquitectura MVC y PostgreSQL. Maneja registro de productos, control de stock, gesti\u00f3n de proveedores y alertas de stock bajo con buenas pr\u00e1cticas de bases de datos relacionales.",
                language: "Python",
                url: "https://github.com/IamAndrew25/inventario_farmacia",
                highlights: [
                    "Patr\u00f3n MVC",
                    "PostgreSQL",
                    "Control de Stock",
                    "Gesti\u00f3n de Proveedores",
                ],
            },
            {
                name: "Integraci\u00f3n MCP con Copilot",
                description:
                    "Explorando Model Context Protocol (MCP) para conectar asistentes de IA con herramientas externas. Implement\u00e9 servidores MCP personalizados y prob\u00e9 integraciones con GitHub Copilot para flujos de desarrollo con IA.",
                language: "Python",
                url: "https://github.com/IamAndrew25/skills-integrate-mcp-with-copilot_1",
                highlights: [
                    "Protocolo MCP",
                    "Integraci\u00f3n IA",
                    "GitHub Copilot",
                    "Automatizaci\u00f3n",
                ],
            },
        ],
    },
    contact: {
        subtitle: "Ponte en Contacto",
        title: "Trabajemos Juntos",
        description:
            "Siempre estoy abierto a nuevas oportunidades, colaboraciones o simplemente una conversaci\u00f3n amigable sobre tecnolog\u00eda. No dudes en contactarme por cualquiera de estos canales.",
        email: "Correo",
        whatsapp: "WhatsApp",
    },
    footer: {
        rights: "Todos los derechos reservados.",
    },
};

export const translations: Record<Locale, Translations> = { en, es };
