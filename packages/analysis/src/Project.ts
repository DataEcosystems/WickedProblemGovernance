import * as model from "@wpg/model";
import { domainHeterogeneity as _domainHeterogeneity } from "./domainHeterogeneity.js";
import { evaluateFormula } from "./evaluateFormula.js";
import { layerHeterogeneity as _layerHeterogeneity } from "./layerHeterogeneity.js";

export namespace Project {
  /**
   * Calculate the domain heterogeneity of a project from a map of domain -> partners in that domain associated with the project.
   */
  export const domainHeterogeneity = _domainHeterogeneity;

  function governanceEpisode(governanceEpisode: model.GovernanceEpisode): {
    governanceEpisodeType: model.GovernanceEpisode["governanceEpisodeType"];
    t0: number;
    t2: number;
  } {
    return {
      governanceEpisodeType: governanceEpisode.governanceEpisodeType,
      t0: governanceEpisode.t0
        ? model.timestampToDate(governanceEpisode.t0).getTime()
        : -1,
      t2: governanceEpisode.t0
        ? model.timestampToDate(governanceEpisode.t0).getTime()
        : -1,
    };
  }

  /**
   * Calculate the institutional layer heterogeneity of a project from a map of domain -> partners in that domain associated with the project.
   */
  export const layerHeterogeneity = _layerHeterogeneity;

  /**
   * Calculate the project start timestamp from the set of episodes associated with a project.
   */
  export function t0({
    E,
  }: {
    readonly E: readonly model.GovernanceEpisode[];
  }): model.Timestamp | undefined {
    if (E.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.Project, "t0", {
      E: E.map(governanceEpisode),
    }) as number;
    if (result === -1) {
      return undefined;
    }
    return model.dateToTimestamp(new Date(result));
  }
}
