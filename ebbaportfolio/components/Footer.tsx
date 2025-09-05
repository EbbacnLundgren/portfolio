import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container-prose py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {site.name}. Alla rättigheter förbehålls.</p>
        <div className="flex gap-4">
          <a href={site.privacyUrl} className="hover:underline">Integritet</a>
          <a href={site.imprintUrl} className="hover:underline">Impressum</a>
        </div>
      </div>
    </footer>
  );
}
