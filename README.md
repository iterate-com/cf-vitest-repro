Simple repro of vitest and workers.

In `src/workers` we have cloudflare specific code with the corresponding tests.

We have a vitest workspace setup to target only this directory.

In `src/lib` we have Node.js code. The vitest workspace `node` is setup to target this, but not the workers directory.

Run `pnpm vitest` - see error:

```
FAIL   workers  src/workers/index.test.ts [ src/workers/index.test.ts ]
SyntaxError: The requested module 'node:fs' does not provide an export named 'ReadStream'
```

Remove the `openai` usage in `src/workers/index.ts`. Then re-run the tests:

```
[vpw:inf] Starting isolated runtimes for 0...
 ✓  node  src/lib/greet.test.ts (1 test) 3ms
 ✓  workers  src/workers/index.test.ts (1 test) 6ms
 ```

It works!