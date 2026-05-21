import { z } from "zod";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceType } from "./ResourceType.js";

function resolveRange(range: z.ZodType | ResourceType): ResourceType {
  if (typeof range === "string") {
    return range;
  }
  const meta = range.meta() as ObjectMeta | undefined;
  const type = meta?.["@type"];
  if (type == null) {
    throw new Error("PropertyMeta range target must have a @type in its meta");
  }
  return type;
}

export class PropertyMeta {
  readonly description: string;
  readonly range?: ResourceType | readonly ResourceType[];
  readonly title: string;
  [key: string]: unknown;

  constructor({
    description,
    range,
    title,
  }: {
    readonly description: string;
    readonly range?:
      | z.ZodType
      | ResourceType
      | readonly (z.ZodType | ResourceType)[];
    readonly title: string;
  }) {
    this.description = description;
    this.title = title;

    if (range != null) {
      if (Array.isArray(range)) {
        this.range = (range as readonly (z.ZodType | ResourceType)[]).map(
          resolveRange,
        );
      } else {
        this.range = resolveRange(range as z.ZodType | ResourceType);
      }
    }
  }
}
