"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, Copy } from "lucide-react";
import { data } from "@/content/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(data.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="contact" className="container-prose py-12">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">Contact</h2>
        <p className="text-slate-600 mt-1">Prefer e-mail or the form. I respond quickly.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Form */}
        <div className="card p-6">
          <h3 className="font-medium">Send a message</h3>
          <form
            className="mt-4 space-y-4"
            action="https://formspree.io/f/your-id"  
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
              <input
                id="name" name="name" required
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
              <input
                id="email" name="email" type="email" required
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message" name="message" rows={6} required
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

            <button
              className="rounded-xl bg-pink-500 px-5 py-3 text-white transition hover:bg-pink-600 active:scale-95"
              type="submit"
            >
              Send message
            </button>

            <p className="text-xs text-slate-500">
              Your message is sent securely via Formspree/Getform. No account required.
            </p>
          </form>
        </div>

        <div className="card p-6">
          <h3 className="font-medium">Direct links</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={data.links.github} target="_blank"
                 className="group flex items-center justify-between rounded-xl border px-4 py-3 hover:bg-slate-50">
                <span className="flex items-center gap-3 text-slate-700">
                  <Github className="h-5 w-5 text-slate-500 group-hover:text-slate-700" />
                  GitHub
                </span>
                <span className="text-sm text-slate-500">Open</span>
              </a>
            </li>
            <li>
              <a href={data.links.linkedin} target="_blank"
                 className="group flex items-center justify-between rounded-xl border px-4 py-3 hover:bg-slate-50">
                <span className="flex items-center gap-3 text-slate-700">
                  <Linkedin className="h-5 w-5 text-slate-500 group-hover:text-slate-700" />
                  LinkedIn
                </span>
                <span className="text-sm text-slate-500">Open</span>
              </a>
            </li>
            <li className="flex items-center justify-between rounded-xl border px-4 py-3">
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="h-5 w-5 text-slate-500" />
                <a href={`mailto:${data.links.email}`} className="hover:underline">
                  {data.links.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50"
                aria-label="Copy e-mail"
              >
                <Copy className="h-4 w-4" />
                {copied ? "Copied" : "Copy"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}