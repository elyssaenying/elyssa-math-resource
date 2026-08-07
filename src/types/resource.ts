export type LevelId = "sec-3" | "sec-4";

export type SubjectId = "e-math" | "a-math";

export type ResourceType =
  | "notes"
  | "worksheet"
  | "practice"
  | "revision"
  | "formula-sheet"
  | "answer-key"
  | "other";

export type Difficulty = "foundational" | "intermediate" | "challenging";

export interface Resource {
  /** Unique, stable, URL-safe id, e.g. "sec4-amath-differentiation-basics" */
  id: string;
  title: string;
  level: LevelId;
  subject: SubjectId;
  /** Must match a topic id defined in src/data/subjects.ts for this level+subject */
  topic: string;
  type: ResourceType;
  description: string;
  /** Path to the file inside /public, e.g. "/resources/secondary-4/a-math/differentiation-basics.pdf" */
  file: string;
  /** ISO date string, e.g. "2026-03-01" */
  dateAdded: string;
  /** Show this resource in the homepage "Featured Resources" section */
  featured?: boolean;
  difficulty?: Difficulty;
  /** Marks sample/placeholder entries used to preview the layout. Not real materials. */
  isDemo?: boolean;
}
