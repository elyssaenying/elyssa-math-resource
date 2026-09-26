import { RESOURCES } from "@/data/resources";
import { searchResources } from "@/lib/resource-search";
import type { ResourceSearchResult } from "@/lib/resource-search";
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

export function filterResourcesWithMeta(
  resources: Resource[],
  filters: ResourceFilterState,
): ResourceSearchResult {
  const filtered = resources.filter((resource) => {
    if (filters.level !== "all" && resource.level !== filters.level) return false;
    if (filters.subject !== "all" && resource.subject !== filters.subject)
      return false;
    if (filters.topic !== "all" && resource.topic !== filters.topic) return false;
    if (filters.type !== "all" && resource.type !== filters.type) return false;
    return true;
  });

  return searchResources(filtered, filters.query);
}

export function filterResources(
  resources: Resource[],
  filters: ResourceFilterState,
): Resource[] {
  return filterResourcesWithMeta(resources, filters).resources;
}

export function getFeaturedResources(limit = 3): Resource[] {
  return RESOURCES.filter((resource) => resource.featured).slice(0, limit);
}

export function getAllResources(): Resource[] {
  return RESOURCES;
}
