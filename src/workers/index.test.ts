/// <reference types="@cloudflare/vitest-pool-workers" />

import { assert, it } from "vitest";
import { SELF } from "cloudflare:test";

it("should work", async () => {
    const resp = await SELF.fetch("http://localhost:8787/");
    assert.equal(resp.status, 200);
})