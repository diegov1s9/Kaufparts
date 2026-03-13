import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { products } from "./utils/testData";

test.describe("TC-E2E-001: Validar ficha de producto completa", () => {
  test("TC-E2E-001: Validar ficha de producto completa", async ({ page }) => {
    const product = products.sensorDistanceParktronic;

    await page.goto(product.url);
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.productDetail.internalDescription(page),
      `La descripción interna debe mostrar la marca y código '${product.brand} | ${product.id}'`,
    ).toContainText(`Mercedes Benz | ${product.id}`);

    await expect(
      selectors.productDetail.title(page),
      `El título del producto debe contener '${product.name}'`,
    ).toContainText(product.name);

    const formattedCurrentPrice = product.currentPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    await expect(
      selectors.productDetail.currentPrice(page),
      `El precio actual debe mostrarse formateado como $${formattedCurrentPrice}`,
    ).toContainText(formattedCurrentPrice);

    await expect(
      selectors.productDetail.installmentsText(page),
      `El texto de cuotas debe indicar '${product.installmentsCount} cuotas'`,
    ).toContainText(`${product.installmentsCount} cuotas`);

    await expect(
      selectors.productDetail.stockStatus(page),
      `El estado de stock debe mostrar '${product.stockStatus}'`,
    ).toContainText(product.stockStatus);

    const quantitySelect = selectors.productDetail.quantitySelect(page);
    await expect(
      quantitySelect,
      "El selector de cantidad debe iniciar en 1 al cargar la página",
    ).toHaveValue("1");

    await quantitySelect.selectOption("5");
    await expect(
      quantitySelect,
      "El selector de cantidad debe reflejar el valor 5 tras seleccionarlo",
    ).toHaveValue("5");
  });
});
