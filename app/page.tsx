import Link from "next/link";
import { data } from "@/content/data";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose pt-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-lg text-slate-700">{data.hero.subtitle}</p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-xl bg-ink-700 px-5 py-3 text-white hover:bg-ink-800 transition"
              >
                Visa projekt
              </Link>
              <a
                href={data.links.resumeUrl}
                className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50"
                target="_blank"
              >
                Ladda ner CV
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <li>Plats: {data.hero.location}</li>
              <li>Öppna källkod: {data.hero.osRepos}+ repo</li>
            </ul>
          </div>
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="#experience" className="card p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Erfarenhet</h3>
                <p className="text-sm text-slate-600">Professionell resa</p>
              </a>
              <a href="#projects" className="card p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Projekt</h3>
                <p className="text-sm text-slate-600">Saker jag byggt</p>
              </a>
              <a href="#education" className="card p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Utbildning</h3>
                <p className="text-sm text-slate-600">Lärande och tillväxt</p>
              </a>
              <a href="#contact" className="card p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Kontakt</h3>
                <p className="text-sm text-slate-600">Hör av dig</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Section id="experience" title="Erfarenhet" caption="Roller, ansvar och resultat">
        <div className="space-y-6">
          {data.experiences.map((e) => (
            <ExperienceItem key={e.company + e.title} item={e} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projekt" caption="Urval av egna projekt">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Utbildning" caption="Studier och certifikat">
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
      <Section id="contact" title="Kontakt" caption="Låt oss prata">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-medium">Skicka ett meddelande</h3>
            <form className="mt-4 space-y-4" action="https://formspree.io/f/your-id" method="POST">
              <input name="name" required placeholder="Namn" className="w-full border rounded-xl px-4 py-3" />
              <input name="email" type="email" required placeholder="E-post" className="w-full border rounded-xl px-4 py-3" />
              <textarea name="message" required placeholder="Meddelande" rows={5} className="w-full border rounded-xl px-4 py-3" />
              <button className="rounded-xl bg-ink-700 px-5 py-3 text-white hover:bg-ink-800 transition" type="submit">
                Skicka
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-3">
              Byt ut action-URL till din Formspree/Getform eller använd en mailto-länk.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium">Direkta länkar</h3>
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
