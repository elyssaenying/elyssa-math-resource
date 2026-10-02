# Elyssa Moo Math — Secondary Math Resource Hub

A student-facing Secondary Mathematics resource hub for notes, practice and
revision material. It is built with Next.js, TypeScript and Tailwind CSS.

This is not a tuition-advertising website. There is intentionally no contact
form, lesson-sales page, login, booking system or payment system.

Public website: <https://elyssamathresource.vercel.app>

## How to run the website locally

You need Node.js version 20 or later.

1. Open a terminal in the `tuition-site` folder.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open <http://localhost:3000>.

The local website only works while the development server is running.

## How to edit site-wide details

Open `src/data/site.ts`. It contains the information reused across the site:

- teacher name
- tagline
- short biography
- levels and subjects taught
- navigation links
- the official Unboxed URL

The email address is stored there for possible future use but is not displayed
publicly.

Longer page-specific copy lives directly in the related components:

- `src/components/home/` — homepage copy
- `src/components/about/` — About page copy

## How to change photos

Teacher photos are stored in `public/images/teacher/`.

Current files include:

- `portrait-main.jpg` — About hero and homepage About preview
- `fun-chinese-chess.jpg` — Chinese chess card
- `fun-one-piece.jpg` — anime and One Piece card
- `fun-netball.jpg` — netball card
- `fun-cow.jpg` — cow-related card

Photo paths and alt text are configured in:

- `src/components/about/AboutHero.tsx`
- `src/components/home/AboutPreview.tsx`
- `src/components/about/FunFacts.tsx`

Use clear JPG or PNG files with descriptive alt text. The About hero and
homepage preview intentionally reuse the same portrait with different crops.

## How to add a resource

All resource metadata is stored in one file:

`src/data/resources.ts`

You do not need to edit a React component for each new PDF.

1. Put the PDF inside the matching level and subject folder, for example:

   ```text
   public/resources/secondary-4/a-math/differentiation-basics.pdf
   ```

2. Open `src/data/resources.ts`.
3. Copy an existing resource object and change its fields:

   ```ts
   {
     id: "sec4-amath-differentiation-basics", // unique and URL-safe
     title: "Differentiation Basics",
     level: "sec-4",                          // "sec-3" | "sec-4"
     subject: "a-math",                       // "e-math" | "a-math"
     topic: "amath-differentiation",          // from src/data/subjects.ts
     type: "notes",                           // see the list below
     description: "A clear summary of what the PDF covers.",
     keywords: ["derivative", "gradient", "rate of change"],
     file: "/resources/secondary-4/a-math/differentiation-basics.pdf",
     dateAdded: "2026-09-22",                 // YYYY-MM-DD
     difficulty: "intermediate",              // optional
   }
   ```

4. Save the file.
5. Open `/resources` and confirm that the new card appears and both PDF buttons
   work.

The homepage's "Recently added resources" section automatically shows the three
newest resources by `dateAdded` (use `YYYY-MM-DD`). It does not use a week/month
cutoff or require a `featured` flag. Resources added on the same date retain
their order in `src/data/resources.ts`.

Current resource types are:

- `notes`
- `practice`
- `revision`
- `formula-sheet`
- `answer-key`
- `other`

Use `practice` for worksheets, question sheets and practice sets. Difficulty is
optional and should only be added when the label is genuinely useful.

`keywords` do not appear on the resource card. They help search recognise
abbreviations, related ideas and small spelling mistakes, such as `P1` or
`beaings` for Bearings.

## How to add or rename a topic

Levels, subjects, topics and resource types are configured in:

`src/data/subjects.ts`

Find the correct level and subject, then add a topic with a stable,
subject-scoped ID:

```ts
{ id: "amath-vectors", label: "Vectors" }
```

Use the same ID in `resource.topic`. Keep labels short and student-friendly.
Do not create dozens of narrow topics before real files require them.

## How search and filters work

- Level, Subject, Topic and Resource Type are structural filters.
- The search checks titles, topics, descriptions and hidden keywords.
- Search accepts common short forms such as `P1` and tolerates small spelling
  mistakes.
- Filter and search choices are reflected in the URL query string.

Relevant files:

- `src/components/resources/ResourcesExplorer.tsx`
- `src/components/resources/ResourceFilters.tsx`
- `src/lib/resources.ts`
- `src/lib/resource-search.ts`

The Level and Subject controls use native radio inputs. The mobile menu uses
native `<details>/<summary>`. These implementations were chosen after physical
iPhone Safari testing and should not be casually replaced.

## How to change colours

Colour tokens are defined in the `@theme` block in `src/app/globals.css`.

```css
--color-cream: #f7f2e8;
--color-cream-soft: #fbf8f2;
--color-charcoal: #202020;
--color-charcoal-soft: #4a4642;
--color-burnt: #c95436;
--color-burnt-dark: #a8432a;
--color-pastel-blue: #bcd8e8;
--color-butter: #f2dd83;
--color-sage: #bcd18d;
--color-pink: #edb8c2;
```

Small cream text should use `burnt-dark` or charcoal backgrounds for sufficient
contrast.

## How to change navigation

Edit `NAV_LINKS` in `src/data/site.ts`:

```ts
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "About Me", href: "/about" },
];
```

This list drives desktop and mobile navigation. The external link in the
homepage Unboxed section uses the central `site.unboxedUrl` value.

## Quality checks

Before publishing, run:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Then check:

- `/`
- `/resources`
- `/about`
- mobile navigation
- resource filters and typo-tolerant search
- PDF View and Download links
- mobile widths around 375–430px

## Deployment

The GitHub repository is:

<https://github.com/elyssaenying/elyssa-math-resource>

It is connected to the existing Vercel project. Pushing an approved commit to
the `main` branch triggers an automatic production deployment.

Do not create another Vercel project or configure a static export.

## Project structure

```text
src/
  app/            Routes, metadata, favicon, sitemap and robots
  components/     Reusable layout, page and UI components
  data/           Site content, taxonomy and resource metadata
  lib/            Resource filtering and search helpers
  types/          Shared TypeScript types
public/
  images/teacher/ Teacher photos
  resources/      PDFs organised by level and subject
```

The available routes are `/`, `/resources` and `/about`.
