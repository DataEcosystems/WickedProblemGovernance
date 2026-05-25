import * as model from "@wpg/model";
import { evaluateFormula } from "./evaluateFormula.js";

export namespace GovernanceEpisode {
  export function t0({
    governanceEvents,
  }: {
    readonly governanceEvents: readonly model.GovernanceEvent[];
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

  export function t1({
    governanceEvents,
  }: {
    readonly governanceEvents: readonly model.GovernanceEvent[];
  }): string | undefined {
    const t_auth = governanceEvents
      .filter(
        (e) =>
          e.governanceEventType ===
            "https://purl.dataecosystems.org/wpg/cbox#AgreementExecutedGovernanceEventType" ||
          e.governanceEventType ===
            "https://purl.dataecosystems.org/wpg/cbox#ApprovalIssuedGovernanceEventType",
      )
      .map((e) => e.timestamp)
      .filter((t): t is string => t != null)
      .map((t) => model.timestampToDate(t).getTime());
    if (t_auth.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.GovernanceEpisode, "t1", {
      t_auth,
    }) as number;
    return model.dateToTimestamp(new Date(result));
  }

  export function t2({
    governanceEvents,
  }: {
    readonly governanceEvents: readonly model.GovernanceEvent[];
  }): string | undefined {
    const t_del = governanceEvents
      .filter(
        (e) =>
          e.governanceEventType ===
          "https://purl.dataecosystems.org/wpg/cbox#OutputDeliveredGovernanceEventType",
      )
      .map((e) => e.timestamp)
      .filter((t): t is string => t != null)
      .map((t) => model.timestampToDate(t).getTime());
    if (t_del.length === 0) {
      return undefined;
    }
    const result = evaluateFormula(model.GovernanceEpisode, "t2", {
      t_del,
    }) as number;
    return model.dateToTimestamp(new Date(result));
  }
}
