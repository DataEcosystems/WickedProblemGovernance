import { z } from "zod";

export const Name = z.string().meta({
  description: "Human-readable name.",
  title: "Name",
});
