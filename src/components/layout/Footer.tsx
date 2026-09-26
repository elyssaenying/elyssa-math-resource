import Link from "next/link";
import { NAV_LINKS, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-cream-soft">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-lg text-charcoal">{site.teacherName}</p>
            <p className="mt-1 max-w-xs font-sans text-sm text-charcoal-soft">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 sm:items-end">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-charcoal-soft hover:text-burnt-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 font-sans text-xs text-charcoal-soft">
          <p>
            &copy; {year} {site.teacherName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
