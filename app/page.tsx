import Link from "next/link";
import { data } from "@/content/data";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { Briefcase, GraduationCap, Code, Mail } from "lucide-react";



export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose pt-28 pb-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] items-start">
          {/* Vänster: namn + text */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-ink-900">
              {data.hero.title}
            </h1>
            <p className="text-lg text-slate-700 max-w-xl">
              {data.hero.subtitle}
            </p>
            <p className="text-sm text-slate-500">Location: {data.hero.location}</p>
          </div>

          {/* Höger: korten */}
          <div className="card p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <a href="#experience" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-slate-600">Professional journey</p>
              </a>
              <a href="#projects" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">My Projects</h3>
                <p className="text-sm text-slate-600">Things I’ve built</p>
              </a>
              <a href="#education" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-slate-600">Learning & growth</p>
              </a>
              <a href="#contact" className="card p-5 transition hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold">Contact me</h3>
                <p className="text-sm text-slate-600">Let’s connect</p>
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
      <Section id="contact" title="Contact" caption="Lets connect!">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-medium">Send a message!</h3>
            <form className="mt-4 space-y-4" action="https://formspree.io/f/your-id" method="POST">
              <input name="name" required placeholder="Namn" className="w-full border rounded-xl px-4 py-3" />
              <input name="email" type="email" required placeholder="E-post" className="w-full border rounded-xl px-4 py-3" />
              <textarea name="message" required placeholder="Message" rows={5} className="w-full border rounded-xl px-4 py-3" />
              <button className="rounded-xl bg-ink-700 hover:bg-pastel-pink-400 px-5 py-3 text-white hover:scale-105 hover:bg-ink-800 transition" type="submit">
                Send Message!
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-3">
              
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium">Links</h3>
            <ul className="mt-3 space-y-3">
              <li><a href={data.links.github} className="hover:underline" target="_blank">GitHub</a></li>
              <li><a href={data.links.linkedin} className="hover:underline" target="_blank">LinkedIn</a></li>
              <li><a href={`mailto:${data.links.email}`} className="hover:underline">E-post</a></li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
