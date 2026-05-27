import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export function tau2({
  t0,
  t2,
}: {
  t0: model.Timestamp;
  t2: model.Timestamp;
}): number {
  return evaluateFormula(model.GovernanceEpisode, "tau2", {
    t_0: model.timestampToDate(t0).getTime(),
    t_2: model.timestampToDate(t2).getTime(),
  }) as number;
}
