import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  use: {
    extraHTTPHeaders: {
      Accept: "application/json"
    }
  }
});
