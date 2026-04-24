import { z } from "zod";
import { ObjectMeta } from "./ObjectMeta.js";

export class PropertyMeta {
  readonly description: string;
  readonly range?: string;
  readonly title: string;
  [key: string]: unknown; // To satisfy Zod

  constructor({
    description,
    range,
    title,
  }: {
    readonly description: string;
    readonly range?: z.ZodType | string;
    readonly title: string;
  }) {
    this.description = description;
    this.title = title;

    if (typeof range === "string") {
      this.range = range;
    } else if (range != null) {
      const meta = range.meta() as ObjectMeta | undefined;
      const id = meta?.id;
      if (id == null) {
        throw new Error(
          "PropertyMeta range target must have an id in its meta",
        );
      }
      this.range = id;
    }
  }
}
