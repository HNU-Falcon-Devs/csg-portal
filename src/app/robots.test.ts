import { describe, expect, it } from "vitest";

import robots from "@/app/robots";

describe("robots", () => {
  it("allows crawlers to reach pages and observe indexing metadata", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
    });
  });
});
