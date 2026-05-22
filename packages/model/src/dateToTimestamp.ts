import type { Timestamp } from "./Timestamp.js";

export function dateToTimestamp(value: Date): Timestamp {
  return value.toISOString();
}
