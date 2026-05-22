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
    const event_timestamps = governanceEvents
      .map((e) => e.timestamp)
      .filter((t): t is string => t != null)
      .map((t) => model.timestampToDate(t).getTime());
    if (event_timestamps.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.GovernanceEpisode, "t0", {
      event_timestamps,
    }) as number;
    return model.dateToTimestamp(new Date(result));
  }
}
