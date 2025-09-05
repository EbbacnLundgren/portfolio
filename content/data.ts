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
    title: "Ebba Lundgren",
    subtitle:
      "5th year master student in Information- and Communication Engineering at LTH",
    location: "Sweden",
  },
  links: {
    github: "https://github.com/EbbacnLundgren",
    linkedin: "https://www.linkedin.com/in/ebbacnlundgren/",
    email: "ebbacn.lundgren@gmail.com",
    resumeUrl: "/Ebba-CV.pdf"
  },
  experiences: <Experience[]>[
    {
      company: "Axis Communications AB",
      title: "Software Engineer Internship",
      period: "June 2025 — August 2025",
      summary:
        "Worked with synthetic data at Core Technologies Embedded Analytics",

      tech: ["Python, Unreal Engine, Houdini"]
    },
    {
      company: "Lunicore Student Consulting",
      title: "Software Development Consultant",
      period: "December 2024 — now",
      summary:
        "Consultant in different software projects, both developing and researching"
    },
    {
      company: "Alfa Laval",
      title: "Software Engineer Internship",
      period: "June 2023 - August 2023",
      tech: ["Python and SQL"]
    },
    {
      company: "Bubbi AI",
      title: "Software Engineer / Web developer",
      period: "May 2023 - June 2023",
      summary: "Developed tracking script for e-commerce to be used by internal ML/AI",
      tech: ["Python and Google Cloud"]
    },
    {
      company: "Trattoria Montanari",
      title: "Waiter",
      period: "June 2020 - August 2024",
      summary:
        "Taught five new waitress/waiters during my time in different ages, worked as head waitress aswell"

    }
  ],
  projects: <Project[]>[
    {
      title: "Game page",
      description:
        "A website with collected games that is fun to play at lunch together with your friends. Currently working on adding a new game. ",
      tags: ["React", "TypeScript", "Vite"],
      repo: "https://github.com/EbbacnLundgren/gamepage",
      year: "2025"
    }
  ],
  education: [
    {
      school: "Faculty of Engineering (LTH) at Lund University",
      degree: "MSc Software Systems Engineering",
      period: "2021 — 2026",
      details: "Concurrent programming, Machine Learning, Cyber Security, Database Technology, Internet Inside, Software Testing, Wireless Networks, Secured Systems, OOP & Design"
    },
    {
      school: "Enskilda Gymnasiet at Tegnérlunden in Stockholm",
      degree: "Natural Science Program",
      period: "2017 — 2020",
    }
  ]
};
