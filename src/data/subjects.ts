import type { LevelId, ResourceType, SubjectId } from "@/types/resource";

/**
 * SINGLE SOURCE OF TRUTH for levels, subjects and topics.
 *
 * The Resource Library's filters, badges and dropdowns are all generated
 * from this file. To add, rename or remove a topic, edit it here only —
 * you do not need to touch any component.
 *
 * Each topic needs a stable `id` (used to link resources to it via
 * `resource.topic`) and a human-readable `label` (shown in the UI).
 */

export interface Topic {
  id: string;
  label: string;
}

export interface SubjectConfig {
  id: SubjectId;
  label: string;
  /** Full name shown in places like page titles */
  fullName: string;
  topics: Topic[];
}

export interface LevelConfig {
  id: LevelId;
  label: string;
  shortLabel: string;
  subjects: SubjectConfig[];
}

export const LEVELS: LevelConfig[] = [
  {
    id: "sec-3",
    label: "Secondary 3",
    shortLabel: "Sec 3",
    subjects: [
      {
        id: "e-math",
        label: "E-Math",
        fullName: "Elementary Mathematics",
        topics: [
          { id: "algebra", label: "Algebra" },
          { id: "functions-graphs", label: "Functions and Graphs" },
          { id: "geometry", label: "Geometry" },
          { id: "trigonometry", label: "Trigonometry" },
          { id: "mensuration", label: "Mensuration" },
          { id: "statistics", label: "Statistics" },
          { id: "probability", label: "Probability" },
        ],
      },
      {
        id: "a-math",
        label: "A-Math",
        fullName: "Additional Mathematics",
        topics: [
          { id: "algebra", label: "Algebra" },
          { id: "functions", label: "Functions" },
          { id: "quadratic-functions", label: "Quadratic Functions" },
          { id: "coordinate-geometry", label: "Coordinate Geometry" },
          { id: "trigonometry", label: "Trigonometry" },
        ],
      },
    ],
  },
  {
    id: "sec-4",
    label: "Secondary 4",
    shortLabel: "Sec 4",
    subjects: [
      {
        id: "e-math",
        label: "E-Math",
        fullName: "Elementary Mathematics",
        topics: [
          { id: "algebra", label: "Algebra" },
          { id: "functions-graphs", label: "Functions and Graphs" },
          { id: "geometry", label: "Geometry" },
          { id: "trigonometry", label: "Trigonometry" },
          { id: "mensuration", label: "Mensuration" },
          { id: "statistics", label: "Statistics" },
          { id: "probability", label: "Probability" },
        ],
      },
      {
        id: "a-math",
        label: "A-Math",
        fullName: "Additional Mathematics",
        topics: [
          { id: "algebra", label: "Algebra" },
          { id: "functions", label: "Functions" },
          { id: "quadratic-functions", label: "Quadratic Functions" },
          { id: "logarithms-exponentials", label: "Logarithms / Exponentials" },
          { id: "coordinate-geometry", label: "Coordinate Geometry" },
          { id: "trigonometry", label: "Trigonometry" },
          { id: "differentiation", label: "Differentiation" },
          { id: "integration", label: "Integration" },
        ],
      },
    ],
  },
];

export const RESOURCE_TYPES: { id: ResourceType; label: string }[] = [
  { id: "notes", label: "Notes" },
  { id: "worksheet", label: "Worksheet" },
  { id: "practice", label: "Practice" },
  { id: "revision", label: "Revision" },
  { id: "formula-sheet", label: "Formula Sheet" },
  { id: "answer-key", label: "Answer Key" },
  { id: "other", label: "Other" },
];

export function getLevel(levelId: LevelId): LevelConfig | undefined {
  return LEVELS.find((l) => l.id === levelId);
}

export function getSubject(
  levelId: LevelId,
  subjectId: SubjectId,
): SubjectConfig | undefined {
  return getLevel(levelId)?.subjects.find((s) => s.id === subjectId);
}

export function getTopics(levelId: LevelId, subjectId: SubjectId): Topic[] {
  return getSubject(levelId, subjectId)?.topics ?? [];
}

/** All topics across every level/subject, de-duplicated by id, for the "All Topics" filter. */
export function getAllTopics(): Topic[] {
  const seen = new Map<string, Topic>();
  for (const level of LEVELS) {
    for (const subject of level.subjects) {
      for (const topic of subject.topics) {
        if (!seen.has(topic.id)) seen.set(topic.id, topic);
      }
    }
  }
  return Array.from(seen.values());
}

export function getResourceTypeLabel(type: ResourceType): string {
  return RESOURCE_TYPES.find((t) => t.id === type)?.label ?? type;
}

export function getLevelLabel(levelId: LevelId): string {
  return getLevel(levelId)?.label ?? levelId;
}

export function getSubjectLabel(subjectId: SubjectId): string {
  for (const level of LEVELS) {
    const subject = level.subjects.find((s) => s.id === subjectId);
    if (subject) return subject.label;
  }
  return subjectId;
}

export function getTopicLabel(topicId: string): string {
  return getAllTopics().find((t) => t.id === topicId)?.label ?? topicId;
}
