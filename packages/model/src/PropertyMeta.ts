import { z } from "zod";

export type PropertyMeta = {
  readonly description?: string;
  readonly range?: z.ZodType;
};
