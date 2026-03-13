import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  testDir: "e2e",
  timeout: process.env["CI"] ? 180000 : 120000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env["CI"]
    ? 2
    : parseInt(process.env["PLAYWRIGHT_RETRIES"] || "1"),
  workers: process.env["CI"]
    ? 1
    : process.env["PLAYWRIGHT_WORKERS"]
      ? parseInt(process.env["PLAYWRIGHT_WORKERS"])
      : 1,
  reporter: [
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        links: {
          tms: {
            pattern:
              "https://dev.azure.com/ComercialKaufmann/agendamiento/_workitems/edit/%s",
            nameTemplate: "Azure DevOps #%s",
          },
          issue: {
            pattern:
              "https://dev.azure.com/ComercialKaufmann/agendamiento/_workitems/edit/%s",
            nameTemplate: "Issue #%s",
          },
        },
      },
    ],
    ["junit", { outputFile: "test-results/junit.xml" }], // Para CI/CD
    ["json", { outputFile: "test-results/results.json" }], // JSON para análisis
  ],
  use: {
    baseURL:
      process.env["PLAYWRIGHT_TEST_BASE_URL"] ?? "https://qas.kaufparts.cl",
    video: {
      mode: "on",
      size: { width: 1920, height: 1080 },
    },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
