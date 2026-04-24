import { z } from "zod";

export const Description = z.string().meta({
  description: "Human-readable description.",
  title: "Description",
});
