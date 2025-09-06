"use client";

import Image from "next/image";
import type { Project } from "@/content/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group card overflow-hidden hover:shadow-lg transition"
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

      <div className="p-5 flex flex-col h-full">
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

        <div className="mt-4 flex gap-3">
          {/* Visa demo-knapp bara om den finns */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-sm
                         text-slate-700 hover:bg-slate-50 transition"
            >
              Open demo
            </a>
          )}
          {/* View code-knapp visas alltid */}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-sm
                         text-slate-700 hover:bg-slate-50 transition"
            >
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
