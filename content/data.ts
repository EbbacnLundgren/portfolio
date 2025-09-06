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

export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  involvement?: string[];
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
        "Consultant in software projects, combining development with digital improvement initiatives."
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
      title: "Waitress",
      period: "June 2020 - August 2024",
      summary:
        "Waitress with recurring employment across summers. Responsible for training five new colleagues and occasionally serving as head waitress during busy evenings."

    }
  ],
  projects: <Project[]>[
    {
      title: "Game page",
      description:
        "A website with collected games that is fun to play at lunch together with your friends. Currently working on adding a new game. ",
      tags: ["React", "TypeScript", "Vite"],
      repo: "https://github.com/EbbacnLundgren/gamepage",
      demo: "https://gamepage-psi.vercel.app/",
      year: "2025",
      image: "/projects/gamepage.png"
    },
    {
      title: "Our Little Chef",
      description:
        "An interactive game built in a university course using Arduino sensors and microcontrollers. Designed to help children feel more confident in the kitchen by practicing basic cooking tasks in a playful and safe environment. Developed collaboratively in a group project, combining hardware prototyping with engaging game design.",
      tags: ["Arduino", "C++", "Hardware", "Game Design", "C", "Usability", "Java"],
      repo: "https://github.com/EbbacnLundgren/ourlittlechef",
      year: "2024",
      image: "/projects/ourlittlechef.png"
    }
  ],
  education: [
    {
      school: "Faculty of Engineering at Lund University (LTH)",
      degree: "MSc Software Systems Engineering",
      period: "2021 — 2026",
      details: 
      "Some of my favourite courses: Concurrent programming, Machine Learning, Cyber Security, Database Technology, Internet Inside, Software Testing, Wireless Networks, Secured Systems, OOP & Design.",
      involvement: [
        "Event Manager for the Business Committee (Data Section)",
        "Financial Manager for D-Chip (association for women and non-binary individuals in the Data Section)",
      ]
    },
    {
      school: "Enskilda Gymnasiet at Tegnérlunden in Stockholm",
      degree: "Natural Science Program",
      period: "2017 — 2020",
      involvement: [
        "Active member of SIPSI (student sports association); trained and competed alongside studies"
      ]
    }
  ]
};
