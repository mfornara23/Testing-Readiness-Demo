import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  use: {
    baseURL: "http://opencart.abstracta.us/index.php?route=common/home",
    headless: true,
    trace: "on"
  }
});
