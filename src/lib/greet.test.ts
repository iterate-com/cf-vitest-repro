import { greet } from "./greet";
import { describe, it, expect, vi } from "vitest";

describe("greet", () => {
  it("should greet", async () => {
    const consoleSpy = vi.spyOn(console, "log");
    await greet();
    expect(consoleSpy).toHaveBeenCalledWith("Hello from package", "cf-repro");
  });
});