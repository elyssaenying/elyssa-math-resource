import type { Resource } from "@/types/resource";

/**
 * RESOURCE LIBRARY DATA
 *
 * This is the only file you need to edit to add, change or remove a
 * resource. See README.md → "How to add a resource" for full step-by-step
 * instructions.
 *
 * The entries below are DEMO placeholders (isDemo: true) so the Resource
 * Library has something to display and you can preview the layout. They
 * are not real materials. Delete them once you start adding your own —
 * or leave them as a template to copy from.
 */
export const RESOURCES: Resource[] = [
  {
    id: "demo-sec4-amath-differentiation-notes",
    title: "[DEMO] Differentiation Basics",
    level: "sec-4",
    subject: "a-math",
    topic: "differentiation",
    type: "notes",
    description:
      "Sample entry showing how notes appear in the library. Replace with your own summary once you upload a real file.",
    file: "/resources/secondary-4/a-math/demo-differentiation-basics.pdf",
    dateAdded: "2026-06-01",
    featured: true,
    difficulty: "intermediate",
    isDemo: true,
  },
  {
    id: "demo-sec4-amath-integration-worksheet",
    title: "[DEMO] Integration Practice Set",
    level: "sec-4",
    subject: "a-math",
    topic: "integration",
    type: "worksheet",
    description:
      "Placeholder worksheet card used to preview the layout for topical practice questions.",
    file: "/resources/secondary-4/a-math/demo-integration-practice.pdf",
    dateAdded: "2026-05-20",
    featured: true,
    difficulty: "challenging",
    isDemo: true,
  },
  {
    id: "demo-sec4-emath-trigonometry-revision",
    title: "[DEMO] Trigonometry Revision Sheet",
    level: "sec-4",
    subject: "e-math",
    topic: "trigonometry",
    type: "revision",
    description:
      "Sample revision resource. Swap this out for an actual condensed summary sheet when ready.",
    file: "/resources/secondary-4/e-math/demo-trigonometry-revision.pdf",
    dateAdded: "2026-05-10",
    difficulty: "intermediate",
    isDemo: true,
  },
  {
    id: "demo-sec3-emath-algebra-notes",
    title: "[DEMO] Algebra Foundations",
    level: "sec-3",
    subject: "e-math",
    topic: "algebra",
    type: "notes",
    description:
      "Placeholder notes entry for a foundational topic, showing how the difficulty badge appears.",
    file: "/resources/secondary-3/e-math/demo-algebra-foundations.pdf",
    dateAdded: "2026-04-15",
    featured: true,
    difficulty: "foundational",
    isDemo: true,
  },
  {
    id: "demo-sec3-amath-quadratic-formula-sheet",
    title: "[DEMO] Quadratic Functions Formula Sheet",
    level: "sec-3",
    subject: "a-math",
    topic: "quadratic-functions",
    type: "formula-sheet",
    description:
      "A one-page reference. Placeholder content — replace with your own formula sheet PDF.",
    file: "/resources/secondary-3/a-math/demo-quadratic-formula-sheet.pdf",
    dateAdded: "2026-03-28",
    difficulty: "foundational",
    isDemo: true,
  },
  {
    id: "demo-sec4-amath-differentiation-answers",
    title: "[DEMO] Differentiation Basics — Answer Key",
    level: "sec-4",
    subject: "a-math",
    topic: "differentiation",
    type: "answer-key",
    description:
      "Shows how an answer key pairs with its parent worksheet or notes entry.",
    file: "/resources/secondary-4/a-math/demo-differentiation-basics-answers.pdf",
    dateAdded: "2026-06-01",
    difficulty: "intermediate",
    isDemo: true,
  },
];
