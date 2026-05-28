import { WPG_CBOX, WPG_O } from "./namespaces.js";

const PREFIXES = {
  wpg: WPG_O,
  "wpg-cbox": WPG_CBOX,
  "wpg-o": WPG_O,
} as const;

const CURIE_RE = /^([A-Za-z_][\w.-]*):(.+)$/;

export function expandCurie(value: string): string | null {
  // Already an absolute IRI (http:, https:, urn:, etc.)? Pass through.
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(value) || value.startsWith("urn:")) {
    return value;
  }
  const match = CURIE_RE.exec(value);
  if (!match) {
    return null;
  }
  const [, prefix, reference] = match;
  const base = PREFIXES[prefix as keyof typeof PREFIXES];
  return base ? base + reference : null;
}
