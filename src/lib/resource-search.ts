import {
  getLevelLabel,
  getResourceTypeLabel,
  getSubjectLabel,
  getTopicLabel,
} from "@/data/subjects";
import type { Resource } from "@/types/resource";

const TOKEN_ALIASES: Record<string, string> = {
  p1: "paper 1",
  paper1: "paper 1",
  paperone: "paper 1",
  p2: "paper 2",
  paper2: "paper 2",
  papertwo: "paper 2",
  emath: "e math",
  amath: "a math",
  maths: "math",
  trigo: "trigonometry",
  stats: "statistics",
  coord: "coordinate",
  mens: "mensuration",
};

interface RankedResource {
  resource: Resource;
  score: number;
  matches: boolean;
}

export interface ResourceSearchResult {
  resources: Resource[];
  usedClosestMatch: boolean;
}

function normalise(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function expandQuery(query: string): string[] {
  return normalise(query)
    .split(" ")
    .filter(Boolean)
    .flatMap((token) => (TOKEN_ALIASES[token] ?? token).split(" "));
}

function levenshteinDistance(first: string, second: string): number {
  const previous = Array.from({ length: second.length + 1 }, (_, index) => index);

  for (let firstIndex = 1; firstIndex <= first.length; firstIndex += 1) {
    const current = [firstIndex];
    for (let secondIndex = 1; secondIndex <= second.length; secondIndex += 1) {
      const substitutionCost =
        first[firstIndex - 1] === second[secondIndex - 1] ? 0 : 1;
      current[secondIndex] = Math.min(
        current[secondIndex - 1] + 1,
        previous[secondIndex] + 1,
        previous[secondIndex - 1] + substitutionCost,
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[second.length];
}

function tokenSimilarity(queryToken: string, candidateToken: string): number {
  if (queryToken === candidateToken) return 1;
  if (
    Math.min(queryToken.length, candidateToken.length) >= 3 &&
    (queryToken.startsWith(candidateToken) ||
      candidateToken.startsWith(queryToken))
  ) {
    return 0.94;
  }

  const longestLength = Math.max(queryToken.length, candidateToken.length);
  if (longestLength === 0) return 1;
  return 1 - levenshteinDistance(queryToken, candidateToken) / longestLength;
}

function minimumSimilarity(token: string): number {
  if (token.length <= 2) return 1;
  if (token.length <= 4) return 0.72;
  if (token.length <= 7) return 0.68;
  return 0.72;
}

function rankResource(
  resource: Resource,
  queryTokens: string[],
): RankedResource {
  const searchableFields = [
    { value: resource.title, weight: 1 },
    { value: getTopicLabel(resource.topic), weight: 1 },
    ...(resource.keywords ?? []).map((value) => ({ value, weight: 0.98 })),
    { value: resource.description, weight: 0.78 },
    { value: getResourceTypeLabel(resource.type), weight: 0.8 },
    { value: getSubjectLabel(resource.subject), weight: 0.75 },
    { value: getLevelLabel(resource.level), weight: 0.72 },
  ];
  const candidateTokens = searchableFields.flatMap(({ value, weight }) =>
    normalise(value)
      .split(" ")
      .filter(Boolean)
      .map((token) => ({ token, weight })),
  );

  const tokenScores = queryTokens.map((queryToken) => {
    let bestScore = 0;
    for (const candidate of candidateTokens) {
      bestScore = Math.max(
        bestScore,
        tokenSimilarity(queryToken, candidate.token) * candidate.weight,
      );
    }
    return bestScore;
  });
  const matches = tokenScores.every(
    (score, index) => score >= minimumSimilarity(queryTokens[index]),
  );
  const score =
    tokenScores.reduce((total, current) => total + current, 0) /
    queryTokens.length;

  return { resource, score, matches };
}

export function searchResources(
  resources: Resource[],
  query: string,
): ResourceSearchResult {
  const queryTokens = expandQuery(query);
  if (queryTokens.length === 0) {
    return { resources, usedClosestMatch: false };
  }

  const ranked = resources
    .map((resource) => rankResource(resource, queryTokens))
    .sort((first, second) => second.score - first.score);
  const matches = ranked.filter((result) => result.matches);

  if (matches.length > 0) {
    return {
      resources: matches.map((result) => result.resource),
      usedClosestMatch: false,
    };
  }

  return {
    resources: ranked
      .slice(0, Math.min(3, ranked.length))
      .map((result) => result.resource),
    usedClosestMatch: ranked.length > 0,
  };
}
