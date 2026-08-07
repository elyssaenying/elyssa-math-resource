"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ResourceSearch from "@/components/resources/ResourceSearch";
import ResourceFilters from "@/components/resources/ResourceFilters";
import FilterChip from "@/components/resources/FilterChip";
import ResourceCard from "@/components/resources/ResourceCard";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";
import { getAllResources, filterResources } from "@/lib/resources";
import {
  getAllTopics,
  getLevelLabel,
  getResourceTypeLabel,
  getSubjectLabel,
  getTopicLabel,
  getTopics,
} from "@/data/subjects";
import type { LevelId, ResourceType, SubjectId } from "@/types/resource";

const ALL_RESOURCES = getAllResources();

function isLevelId(value: string | null): value is LevelId {
  return value === "sec-3" || value === "sec-4";
}

function isSubjectId(value: string | null): value is SubjectId {
  return value === "e-math" || value === "a-math";
}

function isResourceType(value: string | null): value is ResourceType {
  return (
    !!value &&
    [
      "notes",
      "worksheet",
      "practice",
      "revision",
      "formula-sheet",
      "answer-key",
      "other",
    ].includes(value)
  );
}

export default function ResourcesExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- TEMPORARY DIAGNOSTICS (remove before shipping) ---
  const [hydrated, setHydrated] = useState(false);
  const [lastChange, setLastChange] = useState("(none yet)");
  const [urlDisplay, setUrlDisplay] = useState("(not set yet)");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- temporary diagnostic: this IS the check
    setHydrated(true);
  }, []);
  // --- end temporary diagnostics setup ---

  const [level, setLevel] = useState<LevelId | "all">(() => {
    const value = searchParams.get("level");
    return isLevelId(value) ? value : "all";
  });
  const [subject, setSubject] = useState<SubjectId | "all">(() => {
    const value = searchParams.get("subject");
    return isSubjectId(value) ? value : "all";
  });
  const [topic, setTopic] = useState<string>(
    () => searchParams.get("topic") ?? "all",
  );
  const [type, setType] = useState<ResourceType | "all">(() => {
    const value = searchParams.get("type");
    return isResourceType(value) ? value : "all";
  });
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  const availableTopics = useMemo(() => {
    if (level === "all" || subject === "all") return getAllTopics();
    return getTopics(level, subject);
  }, [level, subject]);

  function topicsFor(nextLevel: LevelId | "all", nextSubject: SubjectId | "all") {
    if (nextLevel === "all" || nextSubject === "all") return getAllTopics();
    return getTopics(nextLevel, nextSubject);
  }

  function resetTopicIfInvalid(topics: { id: string }[]) {
    setTopic((current) =>
      current !== "all" && !topics.some((t) => t.id === current)
        ? "all"
        : current,
    );
  }

  // TEMPORARY: explicit named handlers (instead of passing raw setters) so we
  // can record which callback actually fired, for on-screen diagnostics.
  function handleLevelChange(nextLevel: LevelId | "all") {
    setLastChange(`level -> ${nextLevel}`);
    setLevel(nextLevel);
    resetTopicIfInvalid(topicsFor(nextLevel, subject));
  }

  function handleSubjectChange(nextSubject: SubjectId | "all") {
    setLastChange(`subject -> ${nextSubject}`);
    setSubject(nextSubject);
    resetTopicIfInvalid(topicsFor(level, nextSubject));
  }

  function handleTopicChange(nextTopic: string) {
    setLastChange(`topic -> ${nextTopic}`);
    setTopic(nextTopic);
  }

  function handleTypeChange(nextType: ResourceType | "all") {
    setLastChange(`type -> ${nextType}`);
    setType(nextType);
  }

  function handleQueryChange(nextQuery: string) {
    setLastChange(`query -> "${nextQuery}"`);
    setQuery(nextQuery);
  }

  useEffect(() => {
    const params = new URLSearchParams();
    if (level !== "all") params.set("level", level);
    if (subject !== "all") params.set("subject", subject);
    if (topic !== "all") params.set("topic", topic);
    if (type !== "all") params.set("type", type);
    if (query) params.set("q", query);

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
    // TEMPORARY: mirror what we just told the router, for diagnostics.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- temporary diagnostic
    setUrlDisplay(queryString ? `?${queryString}` : "(no query string)");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, subject, topic, type, query]);

  const results = useMemo(
    () =>
      filterResources(ALL_RESOURCES, { level, subject, topic, type, query }),
    [level, subject, topic, type, query],
  );

  const hasActiveFilters =
    level !== "all" ||
    subject !== "all" ||
    topic !== "all" ||
    type !== "all" ||
    query !== "";

  function clearAll() {
    setLastChange("clear-all");
    setLevel("all");
    setSubject("all");
    setTopic("all");
    setType("all");
    setQuery("");
  }

  return (
    <div>
      {/* TEMPORARY DEBUG PANEL — remove once diagnosis is complete */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] max-h-[45vh] overflow-y-auto border-t-4 border-pink-500 bg-yellow-200 p-3 font-mono text-[11px] leading-snug text-black shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        <p className="mb-1 font-bold">DEBUG (temporary — remove after diagnosis)</p>
        <p>Hydrated: {hydrated ? "YES" : "NO"}</p>
        <p>React level: {level}</p>
        <p>React subject: {subject}</p>
        <p>React topic: {topic}</p>
        <p>React type: {type}</p>
        <p>React query: &quot;{query}&quot;</p>
        <p>Results: {results.length}</p>
        <p>
          window.location.search (live):{" "}
          {typeof window !== "undefined" ? window.location.search || "(empty)" : "(no window)"}
        </p>
        <p>URL set by router.replace (last effect run): {urlDisplay}</p>
        <p>Last change: {lastChange}</p>
      </div>
      {/* END TEMPORARY DEBUG PANEL */}

      <div className="flex flex-col gap-6 rounded-3xl border border-border bg-cream-soft p-5 sm:p-6">
        <ResourceSearch value={query} onChange={handleQueryChange} />
        <ResourceFilters
          level={level}
          subject={subject}
          topic={topic}
          type={type}
          availableTopics={availableTopics}
          onLevelChange={handleLevelChange}
          onSubjectChange={handleSubjectChange}
          onTopicChange={handleTopicChange}
          onTypeChange={handleTypeChange}
        />
      </div>

      {hasActiveFilters && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {level !== "all" && (
            <FilterChip
              label={getLevelLabel(level)}
              onRemove={() => setLevel("all")}
            />
          )}
          {subject !== "all" && (
            <FilterChip
              label={getSubjectLabel(subject)}
              onRemove={() => setSubject("all")}
            />
          )}
          {topic !== "all" && (
            <FilterChip
              label={getTopicLabel(topic)}
              onRemove={() => setTopic("all")}
            />
          )}
          {type !== "all" && (
            <FilterChip
              label={getResourceTypeLabel(type)}
              onRemove={() => setType("all")}
            />
          )}
          {query !== "" && (
            <FilterChip label={`"${query}"`} onRemove={() => setQuery("")} />
          )}
          <button
            type="button"
            onClick={clearAll}
            className="font-sans text-xs font-semibold text-burnt-dark underline underline-offset-2"
          >
            Clear all
          </button>
        </div>
      )}

      <p className="mt-6 font-sans text-sm text-charcoal-soft">
        {results.length} resource{results.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4 pb-[45vh]">
        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : hasActiveFilters ? (
          <EmptyState
            title="No resources match your filters."
            description="Try removing one of your filters or searching for something else."
            action={
              <Button variant="secondary" onClick={clearAll}>
                Clear filters
              </Button>
            }
          />
        ) : (
          <EmptyState
            title="No resources here yet."
            description="Materials for this topic will be added soon — check back later."
          />
        )}
      </div>
    </div>
  );
}
