import Image from "next/image";
import type { Project } from "@/content/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden hover:shadow-lg transition">
      {project.image && (
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-slate-600 mt-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
