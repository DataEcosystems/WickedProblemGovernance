import * as model from "@wpg/model";
import { couplingLoad as _couplingLoad } from "./couplingLoad.js";
import { domainHeterogeneity as _domainHeterogeneity } from "./domainHeterogeneity.js";
import { evaluateFormula } from "./evaluateFormula.js";
import { layerHeterogeneity as _layerHeterogeneity } from "./layerHeterogeneity.js";
import { normalizedBurden as _normalizedBurden } from "./normalizedBurden.js";
import { tau2 as _tau2 } from "./tau2.js";

export namespace GovernanceEpisode {
  /**
   * Calculate the episode coupling load from the domain and layer heterogeneity and the total partner count.
   */
  export const couplingLoad = _couplingLoad;

  /**
   * Calculate the domain heterogeneity of an episode from a map of domain -> partners in that domain associated with the episode.
   */
  export const domainHeterogeneity = _domainHeterogeneity;

  function governanceEvent(governanceEvent: model.GovernanceEvent): {
    governanceEventType: model.GovernanceEvent["governanceEventType"];
    timestamp: number;
  } {
    return {
      governanceEventType: governanceEvent.governanceEventType,
      timestamp: model.timestampToDate(governanceEvent.timestamp!).getTime(),
    };
  }

  /**
   * Calculate the institutional layer heterogeneity of an episode from a map of domain -> partners in that domain associated with the episode.
   */
  export const layerHeterogeneity = _layerHeterogeneity;

  /**
   * Calculate the normalized burden for an episode.
   */
  export const normalizedBurden = _normalizedBurden;

  /**
   * Calculate the episode start timestamp from the set of events associated with an episode.
   */
  export function t0({
    E,
  }: {
    readonly E: readonly model.GovernanceEvent[];
  }): model.Timestamp | undefined {
    if (E.length === 0) {
      return undefined;
    }
    try {
      const result = evaluateFormula(model.GovernanceEpisode, "t0", {
        E: E.filter(
          (governanceEvent) => governanceEvent.timestamp !== undefined,
        ).map(governanceEvent),
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
        E: E.filter(
          (governanceEvent) => governanceEvent.timestamp !== undefined,
        ).map(governanceEvent),
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
        E: E.filter(
          (governanceEvent) => governanceEvent.timestamp !== undefined,
        ).map(governanceEvent),
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
   * Calculate the authorization latency for an episode given the episode's start and first durable authorization timestamps.
   */
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

  /**
   * Calculate the delivery latency for an episode given the episode's start and first delivered value timestamps.
   */
  export const tau2 = _tau2;
}
