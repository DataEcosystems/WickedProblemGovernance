import { describe, expect, it } from "vitest";
import { Project } from "../src/Project.js";
import {
  committedGovernanceEpisode,
  stalledGovernanceEpisode,
} from "./data.js";

describe("Project", () => {
  describe("t0", () => {
    it("returns the earliest episode timestamp", () => {
      const result = Project.t0({
        E: [committedGovernanceEpisode],
      });
      expect(result).toBe("2023-01-15");
    });

    it("returns the earliest episode timestamp for a stalled episode", () => {
      const result = Project.t0({
        E: [stalledGovernanceEpisode],
      });
      expect(result).toBe("2022-06-01");
    });

    it("returns undefined when there are no episodes", () => {
      const result = Project.t0({
        E: [],
      });
      expect(result).toBeUndefined();
    });

    it("returns undefined when no episodes have timestamps", () => {
      const result = Project.t0({
        E: [
          {
            ...committedGovernanceEpisode,
            t0: undefined,
          },
          {
            ...stalledGovernanceEpisode,
            t0: undefined,
          },
        ],
      });
      expect(result).toBeUndefined();
    });

    it("picks the earliest when episodes are out of order", () => {
      const result = Project.t0({
        E: [committedGovernanceEpisode, stalledGovernanceEpisode],
      });
      expect(result).toBe(stalledGovernanceEpisode.t0);
    });
  });

  describe("t2", () => {
    it("returns the earliest output delivered timestamp", () => {
      const result = Project.t2({
        E: [
          {
            ...committedGovernanceEpisode,
            governanceEpisodeType:
              "https://purl.dataecosystems.org/wpg/cbox#ProductGovernanceEpisodeType",
            t2: "2023-08-15",
          },
          {
            ...committedGovernanceEpisode,
            governanceEpisodeType:
              "https://purl.dataecosystems.org/wpg/cbox#ProductGovernanceEpisodeType",
            t2: "2023-07-01",
          },
        ],
      });
      expect(result).toBe("2023-07-01");
    });

    it("returns undefined when there are no output delivered events", () => {
      const result = Project.t2({
        E: [committedGovernanceEpisode],
      });
      expect(result).toBeUndefined();
    });

    it("returns undefined when there are no events", () => {
      const result = Project.t2({
        E: [],
      });
      expect(result).toBeUndefined();
    });

    it("ignores non-output events", () => {
      const result = Project.t2({
        E: [
          stalledGovernanceEpisode,
          {
            ...committedGovernanceEpisode,
            governanceEpisodeType:
              "https://purl.dataecosystems.org/wpg/cbox#ProductGovernanceEpisodeType",
            t2: "2023-09-01",
          },
        ],
      });
      expect(result).toBe("2023-09-01");
    });
  });
});
