import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export namespace GovernanceEpisode {
  export function t0({
    governanceEvents,
  }: {
    readonly governanceEvents: readonly model.GovernanceEvent[];
  }): string | undefined {
    const timestamps = governanceEvents
      .map((e) => e.timestamp)
      .filter((t): t is string => t != null)
      .map((t) => model.timestampToDate(t).getTime());
    if (timestamps.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.GovernanceEpisode, "t0", {
      timestamps,
    }) as number;
    return model.dateToTimestamp(new Date(result));
  }
}
