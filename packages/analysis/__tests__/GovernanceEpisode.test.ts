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

  describe("t1", () => {
    it("returns the earliest authorization event timestamp", () => {
      const result = GovernanceEpisode.t1({
        governanceEvents: committedGovernanceEpisodeEvents,
      });
      expect(result).toBe("2023-04-20");
    });

    it("returns undefined when there are no authorization events", () => {
      const result = GovernanceEpisode.t1({
        governanceEvents: stalledGovernanceEpisodeEvents,
      });
      expect(result).toBeUndefined();
    });

    it("returns undefined when there are no events", () => {
      const result = GovernanceEpisode.t1({
        governanceEvents: [],
      });
      expect(result).toBeUndefined();
    });

    it("picks the earliest among multiple authorization events", () => {
      const result = GovernanceEpisode.t1({
        governanceEvents: [
          {
            "@id": "https://example.com/test/GovernanceEvent/approval",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:ApprovalIssuedGovernanceEventType",
            timestamp: "2023-06-01",
          },
          {
            "@id": "https://example.com/test/GovernanceEvent/agreement",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:AgreementExecutedGovernanceEventType",
            timestamp: "2023-03-15",
          },
        ],
      });
      expect(result).toBe("2023-03-15");
    });
  });

  describe("t2", () => {
    it("returns the earliest output delivered timestamp", () => {
      const result = GovernanceEpisode.t2({
        governanceEvents: [
          {
            "@id": "https://example.com/test/GovernanceEvent/output-1",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:OutputDeliveredGovernanceEventType",
            timestamp: "2023-08-15",
          },
          {
            "@id": "https://example.com/test/GovernanceEvent/output-2",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:OutputDeliveredGovernanceEventType",
            timestamp: "2023-07-01",
          },
        ],
      });
      expect(result).toBe("2023-07-01");
    });

    it("returns undefined when there are no output delivered events", () => {
      const result = GovernanceEpisode.t2({
        governanceEvents: committedGovernanceEpisodeEvents,
      });
      expect(result).toBeUndefined();
    });

    it("returns undefined when there are no events", () => {
      const result = GovernanceEpisode.t2({
        governanceEvents: [],
      });
      expect(result).toBeUndefined();
    });

    it("ignores non-output events", () => {
      const result = GovernanceEpisode.t2({
        governanceEvents: [
          {
            "@id": "https://example.com/test/GovernanceEvent/review",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:ReviewGovernanceEventType",
            timestamp: "2023-01-01",
          },
          {
            "@id": "https://example.com/test/GovernanceEvent/output",
            "@type": "GovernanceEvent",
            episode:
              "https://example.com/test/GovernanceEpisode/governance-episode-1",
            governanceEventType: "wpg:OutputDeliveredGovernanceEventType",
            timestamp: "2023-09-01",
          },
        ],
      });
      expect(result).toBe("2023-09-01");
    });
  });
});
