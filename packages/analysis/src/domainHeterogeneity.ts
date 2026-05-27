import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

/**
 * Calculate the domain heterogeneity of an episode or project from a map of domain -> partners in that domain associated with the episode or project.
 */
export function domainHeterogeneity({
  D,
}: {
  D: Partial<Record<model.Domain["@id"], number>>;
}): number | undefined {
  if (Object.keys(D).length === 0) {
    return undefined;
  }
  if (Object.values(D).reduce((acc, value) => acc + value, 0) === 0) {
    return undefined;
  }
  return evaluateFormula(model.GovernanceEpisode, "domainHeterogeneity", {
    D,
  }) as number;
}
