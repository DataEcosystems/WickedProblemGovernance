import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export namespace GovernanceEpisode {
  export function t0({
    governanceEvents,
  }: {
    readonly governanceEvents: readonly Pick<
      model.GovernanceEvent,
      "timestamp"
    >[];
  }): string | undefined {
    const t_ev = governanceEvents
      .map((e) => e.timestamp)
      .filter((t): t is string => t != null)
      .map((t) => model.timestampToDate(t).getTime());
    if (t_ev.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.GovernanceEpisode, "t0", {
      t_ev,
    }) as number;
    return model.dateToTimestamp(new Date(result));
  }
}
