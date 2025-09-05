import Link from "next/link";
import { data } from "@/content/data";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { Briefcase, GraduationCap, Code, Mail } from "lucide-react";
import Contact from "@/components/Contact";



export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose pt-28 pb-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] items-start">
          {/* Vänster: namn + text */}
          <div className="space-y-6 pt-2">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              {data.hero.title}
            </h1>
            <p className="text-lg text-slate-700 max-w-xl">
              {data.hero.subtitle}
            </p>
            <p className="text-sm text-slate-500">Location: {data.hero.location}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Java","Python","TypeScript","React","SQL", "JavaScript", "C"].map(t => (
              <span key={t} className="px-3 py-1 rounded-md bg-pink-50 text-pink-700 text-sm border border-pink-100">
                {t}
              </span>
            ))}
          </div>
        </div>

          {/* Höger: korten */}
          <div className="card p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <a href="#experience" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-slate-600">Professional journey</p>
                <Briefcase className="w-5 h-5 text-ink-600" />
              </a>
              <a href="#projects" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">My Projects</h3>
                <p className="text-sm text-slate-600">Things I have built</p>
                <Code className="w-5 h-5 text-ink-600" />
              </a>
              <a href="#education" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-slate-600">Academic background</p>
                <GraduationCap className="w-5 h-5 text-ink-600" />
              </a>
              <a href="#contact" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">Contact me</h3>
                <p className="text-sm text-slate-600">Let’s connect</p>
                <Mail className="w-5 h-5 text-ink-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {data.experiences.map((e) => (
            <ExperienceItem key={e.company + e.title} item={e} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <ul className="space-y-4">
          {data.education.map((ed) => (
            <li key={ed.school} className="card p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{ed.school}</h3>
                <span className="text-sm text-slate-500">{ed.period}</span>
              </div>
              <p className="text-slate-700 mt-1">{ed.degree}</p>
              {ed.details && <p className="text-sm text-slate-600 mt-2">{ed.details}</p>}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Contact />
    </>
  );
}
