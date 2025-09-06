"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Project } from "@/content/data";

export function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const primaryHref = project.demo || project.repo; // demo först, annars repo

  const handleOpen = () => {
    if (!primaryHref) return;
    window.open(primaryHref, "_blank", "noopener,noreferrer");
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKey}
      className="group card overflow-hidden cursor-pointer transition
                 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      aria-label={`${project.title}${project.demo ? " (open demo)" : project.repo ? " (open repo)" : ""}`}
    >
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          {project.year && (
            <span className="text-xs text-slate-500">{project.year}</span>
          )}
        </div>

        {project.description && (
          <p className="text-sm text-slate-600 mt-2">{project.description}</p>
        )}

        {!!project.tags?.length && (
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
        )}

        <div className="mt-4 flex items-center gap-4">
          {primaryHref && (
            <span className="text-sm text-slate-500">
              {project.demo ? "Open demo" : "Open repo"}
            </span>
          )}

          {project.repo && project.demo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm
                          text-slate-700 hover:bg-slate-50 transition"
              >
                View code
              </a>
            )}
          
        </div>
      </div>
    </div>
  );
}
