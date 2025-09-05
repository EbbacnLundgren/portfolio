"use client";
import { motion } from "framer-motion";
import type { Project } from "@/content/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="card p-5 hover:-translate-y-1 hover:shadow-lg transition"
    >
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-slate-700 text-sm">{project.description}</p>
    </motion.article>
  );
}
