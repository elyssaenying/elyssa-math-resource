export type LevelId = "sec-3" | "sec-4";

export type SubjectId = "e-math" | "a-math";

export type ResourceType =
  | "notes"
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
  /** Extra student-friendly search terms, abbreviations and related concepts. */
  keywords?: string[];
  /** Path to the file inside /public, e.g. "/resources/secondary-4/a-math/differentiation-basics.pdf" */
  file: string;
  /** Added date in YYYY-MM-DD format; determines homepage recency order. */
  dateAdded: string;
  /** Optional editorial flag; not used by the homepage's date-based selection. */
  featured?: boolean;
  difficulty?: Difficulty;
}
