import { describe, expect, it } from "vitest";
import { GovernanceEpisode } from "../src/GovernanceEpisode.js";
import {
  committedGovernanceEpisodeEvents,
  stalledGovernanceEpisodeEvents,
} from "./data.js";

describe("GovernanceEpisode", () => {
  describe("t0", () => {
    it("returns the earliest event timestamp", () => {
      const result = GovernanceEpisode.t0({
        governanceEvents: committedGovernanceEpisodeEvents,
      });
      expect(result).toBe("2023-01-15");
    });

    it("returns the earliest event timestamp for a stalled episode", () => {
      const result = GovernanceEpisode.t0({
        governanceEvents: stalledGovernanceEpisodeEvents,
      });
      expect(result).toBe("2022-06-01");
    });

    it("returns undefined when there are no events", () => {
      const result = GovernanceEpisode.t0({
        governanceEvents: [],
      });
      expect(result).toBeUndefined();
    });

    it("returns undefined when no events have timestamps", () => {
      const result = GovernanceEpisode.t0({
        governanceEvents: [
          {
            "@id": "https://example.com/test/GovernanceEvent/no-timestamp",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:RequestSubmittedGovernanceEventType",
          },
        ],
      });
      expect(result).toBeUndefined();
    });

    it("picks the earliest when events are out of order", () => {
      const result = GovernanceEpisode.t0({
        governanceEvents: [
          {
            "@id": "https://example.com/test/GovernanceEvent/late",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:ReviewGovernanceEventType",
            timestamp: "2023-12-01",
          },
          {
            "@id": "https://example.com/test/GovernanceEvent/early",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:RequestSubmittedGovernanceEventType",
            timestamp: "2023-01-01",
          },
          {
            "@id": "https://example.com/test/GovernanceEvent/mid",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:ReviewGovernanceEventType",
            timestamp: "2023-06-15",
          },
        ],
      });
      expect(result).toBe("2023-01-01");
    });
  });
});
