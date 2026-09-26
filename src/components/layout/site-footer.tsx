import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm leading-6 text-slate-700 sm:px-6 lg:px-8">
        <p>{siteConfig.disclaimer}</p>
      </div>
    </footer>
  );
}
