/**
 * SITE / PERSONAL CONTENT CONFIGURATION
 *
 * Centralised details you're likely to update often. See README.md ->
 * "How to edit site-wide details" for guidance.
 *
 * Long-form page content lives directly in each page's components so it
 * remains easy to read and edit in context.
 */

export const site = {
  siteName: "Elyssa Moo Math",
  teacherName: "ELYSSA MOO",
  /** Short line used in the footer and browser tab title */
  tagline: "Math resources.",
  /** One or two sentences, used in the homepage intro and meta description */
  shortBio:
    "Studying Mathematical Sciences at NTU and creating Secondary Mathematics resources.",
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
