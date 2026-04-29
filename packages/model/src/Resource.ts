import { z } from "zod";
import { schemas } from "./schemas.js";

export const Resource = z.discriminatedUnion("@type", schemas);

export type Resource = z.infer<typeof Resource>;
