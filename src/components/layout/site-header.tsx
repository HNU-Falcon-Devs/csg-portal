import Link from "next/link";

import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          className="w-fit rounded-sm text-lg font-semibold text-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-700">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="rounded-sm underline-offset-4 outline-none hover:text-slate-950 hover:underline focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
