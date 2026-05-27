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
}
