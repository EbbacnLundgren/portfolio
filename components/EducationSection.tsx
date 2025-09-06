"use client";
import { data } from "@/content/data";

export default function EducationSection() {
  return (
    <section id="education" className="container-prose py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold text-ink-900">Education</h2>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      </header>

      <ul className="relative pl-6 md:pl-8">
        {/* vertikal linje */}
        <span className="pointer-events-none absolute left-2 top-0 bottom-0 w-px bg-orange-200 md:left-3" />

        {data.education.map((e) => (
          <li key={`${e.school}-${e.period}`} className="relative mb-10 last:mb-0">
            {/* punkt */}
            <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-orange-500 ring-4 ring-orange-100 md:left-1" />

            <article className="card p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <header className="flex items-start justify-between gap-6">
                <h3 className="font-semibold text-slate-900">
                  {e.school}
                </h3>
                <span className="text-sm text-slate-500 shrink-0">{e.period}</span>
              </header>

              <p className="mt-1 text-slate-700">{e.degree}</p>

              {e.details && (
                <p className="mt-3 text-sm text-slate-600">{e.details}</p>
              )}

              {e.involvement?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.involvement.map((x) => (
                    <span
                      key={x}
                      className="px-2.5 py-1 text-xs rounded-md border border-orange-200 bg-orange-50 text-orange-700"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
