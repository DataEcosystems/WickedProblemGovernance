import { z } from "zod";

export const ArchitectureType = z.enum(["custodial", "federated"]);

export type ArchitectureType = z.infer<typeof ArchitectureType>;
