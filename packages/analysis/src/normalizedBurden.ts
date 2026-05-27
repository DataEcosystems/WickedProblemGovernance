import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export function normalizedBurden({
  couplingLoad,
  tau2,
}: Pick<model.GovernanceEpisode, "couplingLoad" | "tau2">) {
  return evaluateFormula(model.GovernanceEpisode, "normalizedBurden", {
    c: couplingLoad,
    tau_2: tau2,
  }) as number;
}
