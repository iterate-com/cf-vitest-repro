import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import { defaultExclude, defineConfig, mergeConfig } from "vitest/config";
import { resolve } from "node:path";

const coreConfig = defineConfig({
  test: {
    silent: "passed-only",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});

export default mergeConfig(
  coreConfig,
  defineConfig({
    test: {
      workspace: [
        mergeConfig(
          coreConfig,
          defineWorkersConfig({
            test: {
              name: "workers",
              // setupFiles: ["src/workers/test-setup.ts"],
              include: ["src/workers/**/*.test.{ts,tsx}"],
              poolOptions: {
                workers: {
                  wrangler: { configPath: "./wrangler.json" },
                },
              },
            },
          })
        ),
        mergeConfig(
          coreConfig,
          defineConfig({
            test: {
              name: "node",
              exclude: [...defaultExclude, "src/workers/**"],
              environment: "node",
            },
          })
        ),
      ],
    },
  })
);
