import { z } from "zod";

export const Id = z.string().meta({
  description: "unique identifier",
});

export type Id = z.infer<typeof Id>;
