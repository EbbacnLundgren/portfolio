"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import clsx from "clsx";

const items = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Project" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-ink-900">
          {site.shortName}
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-ink-700">
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href={site.ctaUrl}
          className={clsx(
            "hidden sm:inline-flex items-center rounded-xl px-4 py-2 border hover:bg-slate-50"
          )}
          target="_blank"
        >
          Ladda ner CV
        </a>
      </div>
    </header>
  );
}
