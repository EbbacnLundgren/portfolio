"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import clsx from "clsx";
import { useState } from "react";
import { useEffect } from "react";


const items = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Project" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full bg-white/80 backdrop-blur shadow-sm z-50",
        scrolled
          ? "bg-white/80 backdrop-blur shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-prose flex h-20 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-ink-900">
          {site.shortName}
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="relative text-slate-600 hover:text-ink-700 transition-colors after:block after:h-[2px] after:w-0 after:bg-rose-400 after:transition-all hover:after:w-full"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href={site.ctaUrl}
          className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 bg-rose-400 text-white hover:bg-rose-500 transition"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}