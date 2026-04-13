import { z } from "zod";
import { schemas } from "./schemas.js";

type SchemaTypes = {
  [K in keyof typeof schemas]: z.infer<(typeof schemas)[K]>;
};

export type Schema = SchemaTypes[keyof SchemaTypes];
