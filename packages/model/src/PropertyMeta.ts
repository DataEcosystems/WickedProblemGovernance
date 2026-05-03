import { z } from "zod";
import { ObjectMeta } from "./ObjectMeta.js";

function resolveRange(range: z.ZodType | string): string {
  if (typeof range === "string") {
    return range;
  }
  const meta = range.meta() as ObjectMeta | undefined;
  const id = meta?.id;
  if (id == null) {
    throw new Error("PropertyMeta range target must have an id in its meta");
  }
  return id;
}

export class PropertyMeta {
  readonly description: string;
  readonly range?: string | readonly string[];
  readonly title: string;
  [key: string]: unknown;

  constructor({
    description,
    range,
    title,
  }: {
    readonly description: string;
    readonly range?: z.ZodType | string | readonly (z.ZodType | string)[];
    readonly title: string;
  }) {
    this.description = description;
    this.title = title;

    if (range != null) {
      if (Array.isArray(range)) {
        this.range = (range as readonly (z.ZodType | string)[]).map(
          resolveRange,
        );
      } else {
        this.range = resolveRange(range as string);
      }
    }
  }
}
