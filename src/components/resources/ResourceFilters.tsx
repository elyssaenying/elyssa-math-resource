import { LEVELS, RESOURCE_TYPES, type Topic } from "@/data/subjects";
import type { LevelId, ResourceType, SubjectId } from "@/types/resource";

const SUBJECTS: { id: SubjectId; label: string }[] = [
  { id: "e-math", label: "E-Math" },
  { id: "a-math", label: "A-Math" },
];

function ToggleGroup<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string;
  name: string;
  value: T | "all";
  options: { id: T; label: string }[];
  onChange: (value: T | "all") => void;
}) {
  const allOptions: { id: T | "all"; label: string }[] = [
    { id: "all", label: "All" },
    ...options,
  ];

  return (
    <fieldset>
      <legend className="mb-2 font-sans text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2">
        {allOptions.map((option) => (
          <label key={option.id} className="touch-manipulation">
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={option.id === value}
              onChange={() => onChange(option.id)}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-border bg-cream-soft px-4 py-2 font-sans text-sm font-medium text-charcoal transition-colors peer-checked:border-burnt-dark peer-checked:bg-burnt-dark peer-checked:text-cream-soft peer-hover:border-burnt peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-burnt">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ResourceFilters({
  level,
  subject,
  topic,
  type,
  availableTopics,
  onLevelChange,
  onSubjectChange,
  onTopicChange,
  onTypeChange,
}: {
  level: LevelId | "all";
  subject: SubjectId | "all";
  topic: string | "all";
  type: ResourceType | "all";
  availableTopics: Topic[];
  onLevelChange: (value: LevelId | "all") => void;
  onSubjectChange: (value: SubjectId | "all") => void;
  onTopicChange: (value: string) => void;
  onTypeChange: (value: ResourceType | "all") => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
        <ToggleGroup
          legend="Level"
          name="resource-level"
          value={level}
          options={LEVELS.map((l) => ({ id: l.id, label: l.shortLabel }))}
          onChange={onLevelChange}
        />
        <ToggleGroup
          legend="Subject"
          name="resource-subject"
          value={subject}
          options={SUBJECTS}
          onChange={onSubjectChange}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
            Topic
          </span>
          <select
            value={topic}
            onChange={(event) => onTopicChange(event.target.value)}
            className="w-full rounded-xl border border-border bg-cream-soft px-4 py-2.5 font-sans text-sm text-charcoal focus:border-burnt"
          >
            <option value="all">All Topics</option>
            {availableTopics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
            Resource Type
          </span>
          <select
            value={type}
            onChange={(event) =>
              onTypeChange(event.target.value as ResourceType | "all")
            }
            className="w-full rounded-xl border border-border bg-cream-soft px-4 py-2.5 font-sans text-sm text-charcoal focus:border-burnt"
          >
            <option value="all">All Types</option>
            {RESOURCE_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
