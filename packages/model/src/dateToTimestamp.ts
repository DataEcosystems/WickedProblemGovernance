import { Timestamp } from "./Timestamp.js";

export function dateToTimestamp(value: Date): Timestamp {
  return value.toISOString().split("T")[0];
}
