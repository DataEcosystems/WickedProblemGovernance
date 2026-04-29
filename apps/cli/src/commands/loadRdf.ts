import type { Schema } from "@wpg/model";
import { contextJson } from "@wpg/model";
import jsonld from "jsonld";

/**
 * Converts an iterable of interchange objects to an N-Quads string,
 * using the JSON-LD context to resolve IRIs.
 */
export async function* loadRdf(
  objects: AsyncIterable<Schema>,
): AsyncIterable<string> {
  for await (const object of objects) {
    const doc = {
      "@context": contextJson["@context"],
      ...object,
    };

    const nquads = await jsonld.toRDF(doc, { format: "application/n-quads" });
    if (nquads.length > 0) {
      yield nquads;
    }
  }
}
