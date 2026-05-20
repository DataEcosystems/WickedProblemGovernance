import type { Resource } from "@wpg/model";
import { contextJson } from "@wpg/model";
import jsonld from "jsonld";

/**
 * Converts an iterable of interchange objects to an N-Quads string,
 * using the JSON-LD context to resolve IRIs.
 */
export async function* toRdf(
  resources: AsyncIterable<Resource>,
): AsyncIterable<string> {
  for await (const resource of resources) {
    const doc = {
      "@context": contextJson["@context"],
      ...resource,
    };

    const nquads = await jsonld.toRDF(doc, { format: "application/n-quads" });
    if (nquads.length > 0) {
      yield nquads;
    }
  }
}
