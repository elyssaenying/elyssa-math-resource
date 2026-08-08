/**
 * SITE / PERSONAL CONTENT CONFIGURATION
 *
 * Centralised details you're likely to update often. See README.md →
 * "How to edit my details" for guidance. Anything wrapped in [BRACKETS]
 * is a placeholder — replace it with your real information.
 *
 * This file intentionally does NOT hold every sentence on the website —
 * long-form page content (About Me story, FAQs, etc.) lives directly in
 * each page's components, clearly marked with placeholder comments.
 */

export const site = {
  teacherName: "ELYSSA MOO",
  /** Short line used in the footer and browser tab title */
  tagline: "Math resources, minus the mess.",
  /** One or two sentences, used in the homepage intro and meta description */
  shortBio:
    "Currently a Year 3 student in NTU, studying Mathematical Science. Teaching as a Primary and Secondary Mathematics Teacher @ Unboxed.",
  /** Not shown anywhere in the UI right now — kept here for later use. */
  email: "elyssaenying1@gmail.com",
  /** Optional — leave the value as null to hide a channel entirely */
  social: {
    whatsapp: null as string | null,
    telegram: null as string | null,
    instagram: null as string | null,
  },
  levelsTaught: "Secondary 3–4",
  subjectsTaught: "E-Math · A-Math",
  /** Official Unboxed URL — kept here so it's only ever hard-coded once. */
  unboxedUrl: "https://www.theunboxed.co/",
};

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "About Me", href: "/about" },
];
