import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

/**
 * Calculate the layer heterogeneity of an episode or project from a map of domain -> partners in that domain associated with the episode or project.
 */
export function layerHeterogeneity({
  L,
}: {
  L: Partial<Record<model.InstitutionalLayer["@id"], number>>;
}): number | undefined {
  if (Object.keys(L).length === 0) {
    return undefined;
  }
  if (Object.values(L).reduce((acc, value) => acc + value, 0) === 0) {
    return undefined;
  }
  return evaluateFormula(model.GovernanceEpisode, "layerHeterogeneity", {
    L,
  }) as number;
}
