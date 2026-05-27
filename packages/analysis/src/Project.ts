import * as model from "@wpg/model";
import { domainHeterogeneity as _domainHeterogeneity } from "./domainHeterogeneity.js";
import { evaluateFormula } from "./evaluateFormula.js";
import { layerHeterogeneity as _layerHeterogeneity } from "./layerHeterogeneity.js";

export namespace Project {
  /**
   * Calculate the domain heterogeneity of a project from a map of domain -> partners in that domain associated with the project.
   */
  export const domainHeterogeneity = _domainHeterogeneity;

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
    const mappedE = E.flatMap((governanceEpisode) =>
      governanceEpisode.t0 !== undefined
        ? [
            {
              t0: model.timestampToDate(governanceEpisode.t0).getTime(),
            },
          ]
        : [],
    );
    if (mappedE.length === 0) {
      return undefined;
    }

    const result = evaluateFormula(model.Project, "t0", {
      E: mappedE,
    }) as number;

    return model.dateToTimestamp(new Date(result));
  }

  /**
   * Calculate the project first delivered value timestamp from the set of episodes associated with the project.
   */
  export function t2({
    E,
  }: {
    readonly E: readonly model.GovernanceEpisode[];
  }): model.Timestamp | undefined {
    const mappedE = E.flatMap((governanceEpisode) =>
      governanceEpisode.t2 !== undefined
        ? [
            {
              governanceEpisodeType: governanceEpisode.governanceEpisodeType,
              t2: model.timestampToDate(governanceEpisode.t2).getTime(),
            },
          ]
        : [],
    );
    if (mappedE.length === 0) {
      return undefined;
    }

    try {
      const result = evaluateFormula(model.Project, "t2", {
        E: mappedE,
      }) as number;

      return model.dateToTimestamp(new Date(result));
    } catch (e) {
      if ((e as Error).message === "Cannot calculate min of an empty array") {
        return undefined;
      }
      throw e;
    }
  }

  /**
   * Calculate the delivery latency for a project given the project's start and first delivered value timestamps.
   */
  export function tau2({
    t0,
    t2,
  }: {
    t0: model.Timestamp;
    t2: model.Timestamp;
  }): number {
    return evaluateFormula(model.Project, "tau2", {
      t_0: model.timestampToDate(t0).getTime(),
      t_2: model.timestampToDate(t2).getTime(),
    }) as number;
  }
}
