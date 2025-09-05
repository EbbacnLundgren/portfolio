import type { Experience } from "@/content/data";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="card p-6">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {item.title}
          </h3>
          <p className="mt-0.5 text-base font-medium text-orange-600">
            {item.company}
          </p>
        </div>
        <span className="text-sm text-slate-500 shrink-0">
          {item.period}
        </span>
      </header>

      {item.summary && (
        <p className="mt-3 italic text-slate-700/90">
          {item.summary}
        </p>
      )}

      {item.achievements?.length ? (
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
          {item.achievements.map((a) => <li key={a}>{a}</li>)}
        </ul>
      ) : null}

      {item.tech?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}