# ELYSSA MOO — Math Resource Hub

A student-facing secondary math resource hub (notes, worksheets, revision
material) with a short About page — built with Next.js, TypeScript and
Tailwind CSS. This is not a tuition-advertising site; there's no contact
form or lesson-sales page by design.

This README is written for someone who isn't a professional developer.
Follow the steps and you'll be fine — nothing here requires deep coding
knowledge. Anywhere you see `CODE LIKE THIS`, type it into your terminal
exactly as shown.

---

## Prerequisites

You need [Node.js](https://nodejs.org) installed (version 20 or later).
If you're not sure whether you have it, open a terminal and run:

```bash
node -v
```

If that prints a version number, you're set. If it says "command not
found", download and install Node.js from [nodejs.org](https://nodejs.org)
(choose the "LTS" version) and try again.

---

## How to run the site on your computer

1. Open a terminal in this folder (`tuition-site`).
2. Install the project's dependencies (only needed once, or after you
   update dependencies):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will automatically reload whenever you save a file.

---

## How to edit my details

Open **`src/data/site.ts`**. This is the one place that holds your name,
tagline, short bio, email, social links and the Unboxed URL. Look for
anything in `[BRACKETS]` — replace those with your real details:

```ts
teacherName: "ELYSSA MOO",
shortBio: "Currently a Year 3 student in NTU, studying Mathematical Science. Teaching as a Primary and Secondary Mathematics Teacher @ Unboxed.",
email: "elyssaenying1@gmail.com",   // not shown anywhere in the UI right now
yearsExperience: "[YEARS OF EXPERIENCE]", // still a placeholder — fill in when ready
qualification: "[QUALIFICATION]",         // still a placeholder — fill in when ready
```

To add a WhatsApp/Telegram/Instagram link, fill in the matching field
under `social:` in the same file (leave it as `null` to hide that
channel entirely).

`unboxedUrl` in the same file (`https://www.theunboxed.co/`) is the one
place the Unboxed link is defined — it's used by both the navbar and
the homepage Unboxed section, so you only ever need to change it once.
The Unboxed section's description text is still a `[BRACKET]`
placeholder in `src/components/home/UnboxedSection.tsx` — edit it there
once you have real copy.

**Longer, page-specific text** (the About page story, philosophy, etc.)
is NOT in `site.ts` — it lives directly inside each page so it reads
naturally. Open these files and replace anything in `[BRACKETS]`:

- `src/app/about/page.tsx` and `src/components/about/*.tsx` — your
  story, experience, qualifications, why you made this resource hub, etc.
- `src/components/home/*.tsx` — homepage section copy (hero, About
  preview, Unboxed description).

---

## How to change photos

Photos live in **`public/images/teacher/`**. Until you add a file, every
photo spot on the site shows a neat placeholder ("Photo coming soon")
instead of a broken image — so the site always looks intentional.

To add a photo:

1. Save your image into `public/images/teacher/`. Suggested names (used
   as hints throughout the site, but you can name them anything):
   - `portrait-main.jpg` — main portrait at the top of the About page
   - `about-me.jpg` — small photo next to "Who made all this?" on the homepage
   - `teaching.jpg` — a teaching-in-progress photo (About page)
   - `desk.jpg` — desk/materials photo (About page)
2. Open the component that shows that photo (e.g.
   `src/components/home/AboutPreview.tsx` for the small homepage photo,
   or `src/components/about/AboutHero.tsx` and `AboutPhotoGrid.tsx` for
   the About page — the homepage hero itself has no photo by design).
3. Find the `<PhotoFrame ... src={undefined} ... />` and change it to
   point at your file:
   ```tsx
   src="/images/teacher/portrait-main.jpg"
   ```
   (Note the leading `/` — files in `public/` are served from the site root.)

The browser tab icon (favicon) is still the default Next.js one. To
replace it, drop your own `favicon.ico` into `src/app/`, overwriting
the existing file.

---

## How to add a resource

All resources (notes, worksheets, revision sheets, etc.) are listed in
**one file**: `src/data/resources.ts`. You never need to touch any
component to add a resource.

1. **Put the file** (PDF, etc.) inside the matching folder under
   `public/resources/`, e.g.:
   ```
   public/resources/secondary-4/a-math/differentiation-basics.pdf
   ```
2. **Open** `src/data/resources.ts`.
3. **Copy** one of the existing resource objects (or the template below)
   and paste it into the `RESOURCES` array.
4. **Change** the fields to match your resource:
   ```ts
   {
     id: "sec4-amath-differentiation-basics", // unique, no spaces
     title: "Differentiation Basics",
     level: "sec-4",           // "sec-3" | "sec-4"
     subject: "a-math",        // "e-math" | "a-math"
     topic: "differentiation", // must match a topic id in src/data/subjects.ts
     type: "notes",            // notes | worksheet | practice | revision | formula-sheet | answer-key | other
     description: "A short, honest description of what this covers.",
     file: "/resources/secondary-4/a-math/differentiation-basics.pdf",
     dateAdded: "2026-08-01",  // today's date, YYYY-MM-DD
     featured: false,          // true to show it on the homepage
     difficulty: "intermediate", // optional: foundational | intermediate | challenging
   }
   ```
   Do **not** set `isDemo: true` — that flag is only for the sample
   placeholder entries and hides the View/Download buttons.
5. **Save the file** and run `npm run dev` (if it isn't already running).
6. **Confirm** the resource appears on the `/resources` page, and that
   the View/Download buttons open your file correctly.

Once you've added your own resources, feel free to delete the `[DEMO]`
entries already in the file — they're just there to preview the layout.

---

## How to add a new topic (or level, or subject)

All filter categories come from **one file**: `src/data/subjects.ts`.
Nothing else needs to change — the Resource Library filters, dropdowns
and badges all read from this file automatically.

To add a topic, find the right level → subject in `LEVELS` and add a
new entry to its `topics` array:

```ts
{ id: "vectors", label: "Vectors" },
```

The `id` is what you'll use in `resources.ts` when tagging a resource
with that topic; `label` is what students see.

---

## How to change colours

Open **`src/app/globals.css`** and look at the `@theme` block near the
top. Each line is one colour:

```css
--color-cream: #f7f2e8;   /* page background */
--color-charcoal: #202020; /* main text */
--color-burnt: #c95436;    /* primary accent (buttons, large headings) */
--color-burnt-dark: #a8432a; /* accent used for small text/links — kept
                                 darker so it stays readable at small sizes */
--color-pastel-blue: #bcd8e8;
--color-butter: #f2dd83;
--color-sage: #bcd18d;
--color-pink: #edb8c2;
```

Change the hex value and every component using that colour updates
automatically. If you introduce a bold new accent colour, please check
it still reads clearly as text on the cream background — small light
colours can become hard to read (there's a free contrast checker at
[webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
if you want to double-check).

---

## How to change navigation

Open **`src/data/site.ts`** and edit the `NAV_LINKS` array:

```ts
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "About Me", href: "/about" },
];
```

This one list drives both the desktop navbar and the mobile menu. The
"Unboxed ↗" link is intentionally not in this list — it's an external
link (not a page on this site), so it's added separately in
`src/components/layout/Navbar.tsx` and `MobileMenu.tsx`, both reading
`site.unboxedUrl` so there's still only one place to update the URL.

---

## How to build for production

```bash
npm run build
```

This checks the whole site (types, lint, build) and produces an
optimized version in `.next/`. Worth running this before you deploy,
so you catch any typos in `[BRACKETS]` placeholders or broken links
early. You can preview the production build locally with:

```bash
npm run start
```

---

## How to deploy

This is a standard Next.js site, so it deploys cleanly to
[Vercel](https://vercel.com) (made by the Next.js team) for free on
their hobby tier:

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that
   repository.
3. Leave the default settings (Vercel detects Next.js automatically)
   and click Deploy.

Any other host that supports Node.js (Netlify, Render, your own
server, etc.) will also work — see the
[Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying)
for details.

---

## Project structure (for reference)

```
src/
  app/            One folder per page/route (/, about, resources)
  components/     UI building blocks, grouped by page/section
  data/           Editable content — site.ts, subjects.ts, resources.ts
  lib/            Small helper functions (resource filtering)
  types/          TypeScript types
public/
  images/teacher/ Your photos
  resources/      Your resource files (PDFs etc.), organised by level/subject
```

There is no `/contact` or `/tuition` route — this site is a resource
hub, not a tuition-enquiry site. If you want a contact page back later,
just ask.
