export type Experience = {
  company: string;
  title: string;
  period: string;
  summary: string;
  achievements?: string[];
  tech?: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repo?: string;
  demo?: string;
  case?: string;
  year?: string;
};

export const data = {
  hero: {
    title: "Hej, jag är Gustav",
    subtitle:
      "Full stack-utvecklare som bygger tydliga, robusta lösningar. Fokus på webb, system och data.",
    location: "Sverige",
    osRepos: 50
  },
  links: {
    github: "https://github.com/ditt-anvandarnamn",
    linkedin: "https://www.linkedin.com/in/ditt-profil",
    twitter: "",
    email: "du@example.com",
    resumeUrl: "/cv.pdf"
  },
  experiences: <Experience[]>[
    {
      company: "Exempelbolaget AB",
      title: "Software Engineer",
      period: "2023 — Nu",
      summary:
        "Bygger skalbara tjänster i TypeScript/Go och modern frontend i React.",
      achievements: [
        "Ledde migrering till Next.js App Router",
        "Sänkte TTFB med 35% genom cache och ISR"
      ],
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"]
    },
    {
      company: "Universitetet",
      title: "Teaching Assistant",
      period: "2022 — 2023",
      summary:
        "Handledde kurser i datalogins grunder och programvaruutveckling.",
      tech: ["Java", "Python"]
    }
  ],
  projects: <Project[]>[
    {
      title: "Hundgissningsspelet",
      description:
        "Bildbaserat quiz i React med sessionsbaserad statistik och ren design.",
      tags: ["React", "TypeScript", "Vite"],
      repo: "https://github.com/...",
      demo: "https://...",
      year: "2025"
    },
    {
      title: "OTR-protokoll (demo)",
      description:
        "Förenklad OTR-implementation med Diffie-Hellman, SMP och OTP.",
      tags: ["Java", "Python", "Crypto"],
      repo: "https://github.com/..."
    }
  ],
  education: [
    {
      school: "Tekniska Högskolan",
      degree: "BSc Datavetenskap",
      period: "2021 — 2024",
      details: "Fördjupning i ML, kryptografi och distribuerade system."
    }
  ]
};
