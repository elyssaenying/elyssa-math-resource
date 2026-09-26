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
  subjectId: SubjectId;
  /** Context-aware label used only where subject ambiguity needs resolving. */
  displayLabel?: string;
}

export interface SubjectConfig {
  id: SubjectId;
  label: string;
  /** Full name shown in places like page titles */
  fullName: string;
  topics: Pick<Topic, "id" | "label">[];
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
          { id: "emath-numbers-proportion", label: "Numbers & Proportion" },
          { id: "emath-algebra", label: "Algebra" },
          { id: "emath-functions-graphs", label: "Functions and Graphs" },
          { id: "emath-coordinate-geometry", label: "Coordinate Geometry" },
          { id: "emath-geometry", label: "Geometry" },
          { id: "emath-trigonometry", label: "Trigonometry" },
          { id: "emath-mensuration", label: "Mensuration" },
          { id: "emath-statistics", label: "Statistics" },
          { id: "emath-probability", label: "Probability" },
          { id: "emath-mixed-topics", label: "Mixed Topics" },
        ],
      },
      {
        id: "a-math",
        label: "A-Math",
        fullName: "Additional Mathematics",
        topics: [
          { id: "amath-algebra-equations", label: "Algebra & Equations" },
          { id: "amath-functions", label: "Functions" },
          { id: "amath-quadratic-functions", label: "Quadratic Functions" },
          { id: "amath-coordinate-geometry", label: "Coordinate Geometry" },
          { id: "amath-trigonometry", label: "Trigonometry" },
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
          { id: "emath-algebra", label: "Algebra" },
          { id: "emath-functions-graphs", label: "Functions and Graphs" },
          { id: "emath-geometry", label: "Geometry" },
          { id: "emath-trigonometry", label: "Trigonometry" },
          { id: "emath-mensuration", label: "Mensuration" },
          { id: "emath-statistics", label: "Statistics" },
          { id: "emath-probability", label: "Probability" },
        ],
      },
      {
        id: "a-math",
        label: "A-Math",
        fullName: "Additional Mathematics",
        topics: [
          { id: "amath-algebra-equations", label: "Algebra & Equations" },
          { id: "amath-functions", label: "Functions" },
          { id: "amath-quadratic-functions", label: "Quadratic Functions" },
          { id: "amath-logarithms-exponentials", label: "Logarithms / Exponentials" },
          { id: "amath-coordinate-geometry", label: "Coordinate Geometry" },
          { id: "amath-trigonometry", label: "Trigonometry" },
          { id: "amath-differentiation", label: "Differentiation" },
          { id: "amath-integration", label: "Integration" },
        ],
      },
    ],
  },
];

export const RESOURCE_TYPES: { id: ResourceType; label: string }[] = [
  { id: "notes", label: "Notes" },
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
  const subject = getSubject(levelId, subjectId);
  return (
    subject?.topics.map((topic) => ({ ...topic, subjectId: subject.id })) ?? []
  );
}

/** All topics for one subject across levels, de-duplicated by id. */
export function getTopicsForSubject(subjectId: SubjectId): Topic[] {
  const seen = new Map<string, Topic>();

  for (const level of LEVELS) {
    for (const topic of getTopics(level.id, subjectId)) {
      if (!seen.has(topic.id)) seen.set(topic.id, topic);
    }
  }

  return Array.from(seen.values());
}

/**
 * All topics across every level/subject, de-duplicated by id, for the
 * "All Topics" filter. Canonical labels stay short; labels shared by both
 * subjects receive a subject qualifier in this global context only.
 */
export function getAllTopics(): Topic[] {
  const seen = new Map<string, Topic>();
  for (const level of LEVELS) {
    for (const subject of level.subjects) {
      for (const topic of subject.topics) {
        if (!seen.has(topic.id)) {
          seen.set(topic.id, { ...topic, subjectId: subject.id });
        }
      }
    }
  }

  const topics = Array.from(seen.values());
  const subjectIdsByLabel = new Map<string, Set<SubjectId>>();

  for (const topic of topics) {
    const subjectIds = subjectIdsByLabel.get(topic.label) ?? new Set<SubjectId>();
    subjectIds.add(topic.subjectId);
    subjectIdsByLabel.set(topic.label, subjectIds);
  }

  return topics.map((topic) => ({
    ...topic,
    displayLabel:
      (subjectIdsByLabel.get(topic.label)?.size ?? 0) > 1
        ? `${topic.label} (${getSubjectLabel(topic.subjectId)})`
        : topic.label,
  }));
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
