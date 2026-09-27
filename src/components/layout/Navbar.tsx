"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, site } from "@/data/site";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="font-display text-xl font-medium text-charcoal"
        >
          {site.siteName}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const isResources = link.href === "/resources";
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                    isResources
                      ? "border border-burnt text-burnt-dark hover:bg-charcoal hover:text-cream-soft"
                      : isActive
                        ? "text-burnt-dark"
                        : "text-charcoal hover:text-burnt-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  );
}
