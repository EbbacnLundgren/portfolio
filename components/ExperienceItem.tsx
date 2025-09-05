import type { Experience } from "@/content/data";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-slate-700">{item.company}</p>
        </div>
        <span className="text-sm text-slate-500 shrink-0">{item.period}</span>
      </div>
      <p className="text-sm text-slate-700 mt-3">{item.summary}</p>
      {item.achievements?.length ? (
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
          {item.achievements.map((a) => <li key={a}>{a}</li>)}
        </ul>
      ) : null}
      {item.tech?.length ? (
        <p className="text-xs text-slate-500 mt-3">Teknik: {item.tech.join(", ")}</p>
      ) : null}
    </article>
  );
}
