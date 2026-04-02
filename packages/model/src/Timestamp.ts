import { z } from "zod";

export const Timestamp = z.union([z.iso.date(), z.iso.datetime()]);

export type Timestamp = z.infer<typeof Timestamp>;
