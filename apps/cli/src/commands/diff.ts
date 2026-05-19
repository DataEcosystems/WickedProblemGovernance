import type { Resource } from "@wpg/model";

interface PropertyDiff {
  readonly key: string;
  readonly left: unknown;
  readonly right: unknown;
}

interface ChangedResource {
  readonly id: string;
  readonly properties: readonly PropertyDiff[];
}

interface DiffResult {
  readonly changed: readonly ChangedResource[];
  readonly extra: readonly string[];
  readonly missing: readonly string[];
}

function canonicalize(value: unknown): string {
  if (Array.isArray(value)) {
    return JSON.stringify([...value].sort());
  }
  return JSON.stringify(value);
}

function index(resources: Iterable<Resource>): Map<string, Resource> {
  const map = new Map<string, Resource>();
  for (const resource of resources) {
    map.set(resource["@id"], resource);
  }
  return map;
}

export function diff(
  left: Iterable<Resource>,
  right: Iterable<Resource>,
): DiffResult {
  const leftMap = index(left);
  const rightMap = index(right);

  const missing: string[] = [];
  const extra: string[] = [];
  const changed: ChangedResource[] = [];

  for (const id of leftMap.keys()) {
    if (!rightMap.has(id)) {
      missing.push(id);
    }
  }

  for (const id of rightMap.keys()) {
    if (!leftMap.has(id)) {
      extra.push(id);
    }
  }

  for (const [id, leftResource] of leftMap) {
    const rightResource = rightMap.get(id);
    if (rightResource == null) {
      continue;
    }

    const allKeys = new Set([
      ...Object.keys(leftResource),
      ...Object.keys(rightResource),
    ]);

    const properties: PropertyDiff[] = [];
    for (const key of [...allKeys].sort()) {
      const leftValue = (leftResource as Record<string, unknown>)[key];
      const rightValue = (rightResource as Record<string, unknown>)[key];

      if (canonicalize(leftValue) !== canonicalize(rightValue)) {
        properties.push({ key, left: leftValue, right: rightValue });
      }
    }

    if (properties.length > 0) {
      changed.push({ id, properties });
    }
  }

  return {
    changed: changed.sort((a, b) => a.id.localeCompare(b.id)),
    extra: extra.sort(),
    missing: missing.sort(),
  };
}
