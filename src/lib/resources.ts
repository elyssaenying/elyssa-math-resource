import { RESOURCES } from "@/data/resources";
import { getResourceTypeLabel, getTopicLabel } from "@/data/subjects";
import type { LevelId, Resource, ResourceType, SubjectId } from "@/types/resource";

export interface ResourceFilterState {
  level: LevelId | "all";
  subject: SubjectId | "all";
  topic: string | "all";
  type: ResourceType | "all";
  query: string;
}

export const DEFAULT_FILTER_STATE: ResourceFilterState = {
  level: "all",
  subject: "all",
  topic: "all",
  type: "all",
  query: "",
};

export function filterResources(
  resources: Resource[],
  filters: ResourceFilterState,
): Resource[] {
  const query = filters.query.trim().toLowerCase();

  return resources.filter((resource) => {
    if (filters.level !== "all" && resource.level !== filters.level) return false;
    if (filters.subject !== "all" && resource.subject !== filters.subject)
      return false;
    if (filters.topic !== "all" && resource.topic !== filters.topic) return false;
    if (filters.type !== "all" && resource.type !== filters.type) return false;

    if (query) {
      const haystack = [
        resource.title,
        resource.description,
        getTopicLabel(resource.topic),
        getResourceTypeLabel(resource.type),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    return true;
  });
}

export function getFeaturedResources(limit = 3): Resource[] {
  return RESOURCES.filter((r) => r.featured).slice(0, limit);
}

export function getAllResources(): Resource[] {
  return RESOURCES;
}
