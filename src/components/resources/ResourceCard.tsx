import { Download, FileText } from "lucide-react";
import Badge from "@/components/ui/Badge";
import {
  getLevelLabel,
  getResourceTypeLabel,
  getSubjectLabel,
  getTopicLabel,
} from "@/data/subjects";
import type { Resource, SubjectId } from "@/types/resource";

const subjectTone: Record<SubjectId, "sage" | "blue"> = {
  "e-math": "sage",
  "a-math": "blue",
};

const subjectAccentBorder: Record<SubjectId, string> = {
  "e-math": "border-t-sage",
  "a-math": "border-t-pastel-blue",
};

const difficultyLabel: Record<NonNullable<Resource["difficulty"]>, string> = {
  foundational: "Foundational",
  intermediate: "Intermediate",
  challenging: "Challenging",
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-3xl border border-border border-t-4 bg-cream-soft p-6 shadow-[0_1px_0_0_rgba(32,32,32,0.03)] transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-[0_10px_20px_-12px_rgba(32,32,32,0.25)] ${subjectAccentBorder[resource.subject]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-sans text-sm font-medium text-charcoal-soft">
            {getLevelLabel(resource.level)} &middot; {getSubjectLabel(resource.subject)}
          </p>
          <h3 className="mt-1 font-display text-xl leading-snug text-charcoal">
            {resource.title}
          </h3>
        </div>
        <FileText className="mt-1 size-5 shrink-0 text-charcoal-soft/40" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge tone={subjectTone[resource.subject]}>
          {getTopicLabel(resource.topic)}
        </Badge>
        <Badge tone="neutral">{getResourceTypeLabel(resource.type)}</Badge>
        {resource.difficulty && (
          <Badge tone="butter">{difficultyLabel[resource.difficulty]}</Badge>
        )}
      </div>

      <p className="flex-1 font-sans text-sm text-charcoal-soft">
        {resource.description}
      </p>

      {resource.isDemo ? (
        <p className="font-sans text-xs italic text-charcoal-soft/70">
          Demo entry — no file attached yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={resource.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-burnt px-4 py-2 font-sans text-sm font-semibold text-cream-soft hover:bg-burnt-dark"
          >
            <FileText className="size-4" aria-hidden="true" />
            View
          </a>
          <a
            href={resource.file}
            download
            className="inline-flex items-center gap-2 rounded-full border border-charcoal px-4 py-2 font-sans text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-cream-soft"
          >
            <Download className="size-4" aria-hidden="true" />
            Download
          </a>
        </div>
      )}
    </article>
  );
}
