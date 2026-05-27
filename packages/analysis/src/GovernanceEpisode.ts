import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export namespace GovernanceEpisode {
  /**
   * Calculate the coupling load from the domain and layer heterogeneity and the total partner count.
   */
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

  /**
   * Calculate the domain heterogeneity of the episode from a map of domain -> partners in that domain associated with this episode.
   */
  export function domainHeterogeneity({
    D,
  }: {
    D: Partial<Record<model.Domain["@id"], number>>;
  }): number | undefined {
    if (Object.keys(D).length === 0) {
      return undefined;
    }
    if (Object.values(D).reduce((acc, value) => acc + value, 0) === 0) {
      return undefined;
    }
    return evaluateFormula(model.GovernanceEpisode, "domainHeterogeneity", {
      D,
    }) as number;
  }

  function governanceEvent(governanceEvent: model.GovernanceEvent): {
    governanceEventType: model.GovernanceEvent["governanceEventType"];
    timestamp: number;
  } {
    return {
      governanceEventType: governanceEvent.governanceEventType,
      timestamp: governanceEvent.timestamp
        ? model.timestampToDate(governanceEvent.timestamp).getTime()
        : -1,
    };
  }

  /**
   * Calculate the institutional layer heterogeneity of the episode from a map of domain -> partners in that domain associated with this episode.
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

  /**
   * Calculate the normalized burden for an episode.
   */
  export function normalizedBurden({
    couplingLoad,
    tau2,
  }: Pick<model.GovernanceEpisode, "couplingLoad" | "tau2">) {
    return evaluateFormula(model.GovernanceEpisode, "normalizedBurden", {
      c: couplingLoad,
      tau_2: tau2,
    }) as number;
  }

  /**
   * Calculate the episode start timestamp from the set of events associated with the episode.
   */
  export function t0({
    E,
  }: {
    readonly E: readonly model.GovernanceEvent[];
  }): model.Timestamp | undefined {
    if (E.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.GovernanceEpisode, "t0", {
      E: E.map(governanceEvent),
    }) as number;
    if (result === -1) {
      return undefined;
    }
    return model.dateToTimestamp(new Date(result));
  }

  /**
   * Calculate the episode first durable authorization timestamp from the set of events associated with the episode.
   */
  export function t1({
    E,
  }: {
    readonly E: readonly model.GovernanceEvent[];
  }): model.Timestamp | undefined {
    if (E.length === 0) {
      return undefined;
    }
    try {
      const result = evaluateFormula(model.GovernanceEpisode, "t1", {
        E: E.map(governanceEvent),
      }) as number;
      if (result === -1) {
        return undefined;
      }
      return model.dateToTimestamp(new Date(result));
    } catch (e) {
      if ((e as Error).message === "Cannot calculate min of an empty array") {
        return undefined;
      }
      throw e;
    }
  }

  /**
   * Calculate the episode first delivered value timestamp from the set of events associated with the episode.
   */
  export function t2({
    E,
  }: {
    readonly E: readonly model.GovernanceEvent[];
  }): model.Timestamp | undefined {
    if (E.length === 0) {
      return undefined;
    }
    try {
      const result = evaluateFormula(model.GovernanceEpisode, "t2", {
        E: E.map(governanceEvent),
      }) as number;
      if (result === -1) {
        return undefined;
      }
      return model.dateToTimestamp(new Date(result));
    } catch (e) {
      if ((e as Error).message === "Cannot calculate min of an empty array") {
        return undefined;
      }
      throw e;
    }
  }

  export function tau1({
    t0,
    t1,
  }: {
    t0: model.Timestamp;
    t1: model.Timestamp;
  }): number {
    return evaluateFormula(model.GovernanceEpisode, "tau1", {
      t_0: model.timestampToDate(t0).getTime(),
      t_1: model.timestampToDate(t1).getTime(),
    }) as number;
  }

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
}
