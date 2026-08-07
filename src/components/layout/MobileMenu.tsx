"use client";

import Link from "next/link";
import { useRef } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { NAV_LINKS, site } from "@/data/site";

/**
 * Mobile navigation, built on native <details>/<summary>.
 *
 * Opening is handled entirely by the browser — no click handler, no React
 * state, no dependency on JS having hydrated. This was a deliberate
 * replacement for a React-state-driven drawer that worked in every
 * automated test (including WebKit) but was unreliable on a physical
 * iPhone in Safari. <details> can't fail to open the way a click handler
 * can: the browser's own toggle behaviour is the only thing opening it.
 *
 * The onClick handlers below are pure progressive enhancement (closing
 * the menu after a link is tapped) — if JS is slow, absent, or errors,
 * the menu still opens and every link still works, just without the
 * auto-close convenience.
 */
export default function MobileMenu({ pathname }: { pathname: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function close() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details ref={detailsRef} className="mobile-menu group md:hidden">
      <summary className="relative z-50 flex size-12 list-none items-center justify-center rounded-full text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="sr-only group-open:hidden">Open navigation menu</span>
        <span className="sr-only hidden group-open:inline">Close navigation menu</span>
        <Menu className="size-6 group-open:hidden" aria-hidden="true" />
        <X className="hidden size-6 group-open:block" aria-hidden="true" />
      </summary>

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={close}
        className="mobile-menu-overlay fixed inset-0 z-40 bg-charcoal/40"
      />

      <nav
        aria-label="Mobile"
        className="mobile-menu-overlay fixed inset-y-0 right-0 z-40 w-[85%] max-w-sm flex-col gap-1 overflow-y-auto bg-cream-soft p-6 pt-24 shadow-xl"
      >
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-2xl px-4 py-4 font-sans text-lg font-medium ${
                isActive
                  ? "bg-burnt-tint text-burnt-dark"
                  : "text-charcoal hover:bg-cream"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href={site.unboxedUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-2 flex items-center gap-2 rounded-2xl border-t border-border px-4 py-4 pt-5 font-sans text-lg font-medium text-charcoal-soft hover:bg-cream"
        >
          Unboxed
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </nav>
    </details>
  );
}
