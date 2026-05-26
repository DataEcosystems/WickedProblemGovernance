import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export namespace GovernanceEpisode {
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
