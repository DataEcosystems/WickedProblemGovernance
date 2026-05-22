import { GovernanceEpisode, GovernanceEvent } from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export namespace GovernanceEpisodeMath {
  export function t0(
    governanceEpisode: GovernanceEpisode,
    { events }: { readonly events: readonly GovernanceEvent[] },
  ): string | undefined {
    const timestamps = events
      .filter((e) => e.episode === governanceEpisode["@id"])
      .map((e) => e.timestamp)
      .filter((t): t is string => t != null);
    if (timestamps.length === 0) {
      return undefined;
    }
    return evaluateFormula(GovernanceEpisode, "t0", { timestamps });
  }
}
