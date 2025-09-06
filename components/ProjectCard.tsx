import Image from "next/image";
import type { Project } from "@/content/data";
import { Github, ExternalLink } from "lucide-react"; // ikoner

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group card overflow-hidden hover:shadow-lg transition">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5 flex flex-col h-full">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-slate-600 mt-2 flex-grow">{project.description}</p>

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

        {/* Länkar */}
        <div className="mt-4 flex gap-4">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-orange-600 transition"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-orange-600 transition"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
