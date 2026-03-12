import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { products } from "./utils/testData";

test.describe("Validar ficha de producto completa", () => {
  test("TC-E2E-: Validar ficha de producto completa", async ({ page }) => {
    const product = products.sensorDistanceParktronic;

    await page.goto(product.url);
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.productDetail.internalDescription(page),
    ).toContainText(`Mercedes Benz | ${product.id}`);

    await expect(selectors.productDetail.title(page)).toContainText(
      product.name,
    );

    const formattedCurrentPrice = product.currentPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    await expect(selectors.productDetail.currentPrice(page)).toContainText(
      formattedCurrentPrice,
    );

    await expect(selectors.productDetail.installmentsText(page)).toContainText(
      `${product.installmentsCount} cuotas`,
    );

    await expect(selectors.productDetail.stockStatus(page)).toContainText(
      product.stockStatus,
    );

    const quantitySelect = selectors.productDetail.quantitySelect(page);
    await expect(quantitySelect).toHaveValue("1");

    await quantitySelect.selectOption("5");
    await expect(quantitySelect).toHaveValue("5");
  });
});
