import type { Timestamp } from "./Timestamp.js";

export function timestampToDate(value: Timestamp): Date {
  return new Date(value);
}
