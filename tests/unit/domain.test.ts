import { describe, expect, it } from "vitest";
import { overlaps } from "../../src/lib/domain";
describe("booking overlap", () => {
  it("detects overlap", () =>
    expect(
      overlaps(
        {
          startsAt: new Date("2024-01-01T10:00Z"),
          endsAt: new Date("2024-01-01T11:00Z"),
        },
        {
          startsAt: new Date("2024-01-01T10:30Z"),
          endsAt: new Date("2024-01-01T12:00Z"),
        },
      ),
    ).toBe(true));
  it("allows touching ranges", () =>
    expect(
      overlaps(
        {
          startsAt: new Date("2024-01-01T10:00Z"),
          endsAt: new Date("2024-01-01T11:00Z"),
        },
        {
          startsAt: new Date("2024-01-01T11:00Z"),
          endsAt: new Date("2024-01-01T12:00Z"),
        },
      ),
    ).toBe(false));
});
