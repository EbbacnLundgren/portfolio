import type { Project } from "@/content/data";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden">
      {project.image && (
        <img src={project.image} alt="" className="w-full h-44 object-cover" />
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold">{project.title}</h3>
          {project.year && <span className="text-xs text-slate-500">{project.year}</span>}
        </div>
        <p className="text-sm text-slate-700 mt-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs border rounded-md px-2 py-1">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3 text-sm">
          {project.repo && <a href={project.repo} target="_blank" className="hover:underline">Kod</a>}
          {project.demo && <a href={project.demo} target="_blank" className="hover:underline">Demo</a>}
          {project.case && <Link href={project.case} className="hover:underline">Case study</Link>}
        </div>
      </div>
    </article>
  );
}
