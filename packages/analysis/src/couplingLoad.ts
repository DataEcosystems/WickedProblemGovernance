import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export function couplingLoad({
  domainHeterogeneity,
  layerHeterogeneity,
  partnerCount,
}: Pick<
  model.GovernanceEpisode,
  "domainHeterogeneity" | "layerHeterogeneity" | "partnerCount"
>): number {
  return evaluateFormula(model.GovernanceEpisode, "couplingLoad", {
    h_d: domainHeterogeneity,
    h_l: layerHeterogeneity,
    n: partnerCount,
  }) as number;
}
