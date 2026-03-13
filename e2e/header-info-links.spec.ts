import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { qas, infoLinks } from "./utils/testData";

test.describe("TC-E2E-003: Validar acceso a páginas informativas desde el header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");
  });

  test("HDR-001: Los 4 enlaces informativos son visibles en el header", async ({
    page,
  }) => {
    await expect(selectors.header.infoNavList(page)).toBeVisible();

    for (const link of infoLinks) {
      await expect(
        selectors.header.infoLink(page, link.label),
      ).toBeVisible();
    }
  });

  for (const link of infoLinks) {
    test(`HDR: Clic en "${link.label}" navega a URL correcta`, async ({
      page,
    }) => {
      const failedRequests: string[] = [];

      page.on("response", (response) => {
        if (response.status() >= 400) {
          failedRequests.push(`${response.status()} – ${response.url()}`);
        }
      });

      await selectors.header.infoLink(page, link.label).click();
      await page.waitForLoadState("networkidle");

      await expect(page).toHaveURL(link.urlPattern);
      expect(failedRequests).toHaveLength(0);
    });
  }

  for (const link of infoLinks) {
    test(`HDR: "${link.label}" responde con HTTP 200`, async ({ page }) => {
      const response = await page.goto(link.url);
      expect(response?.status()).toBe(200);
    });
  }
});
