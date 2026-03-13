import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { products } from "./utils/testData";

test.describe("TC-E2E-004: Validar cambio de cantidad y eliminación de producto del carrito", () => {
  const product = products.bombaCirculacionAgua;

  test.beforeEach(async ({ page }) => {
    await page.goto(product.url);
    await page.waitForLoadState("networkidle");
  });

  test("CRT-001/002/003: Página de producto carga con cantidad inicial 1 y botón COMPRAR disponible", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: product.name }),
    ).toBeVisible();
    await expect(selectors.productDetail.quantitySelect(page)).toHaveValue(
      "1",
    );
    await expect(selectors.productDetail.buyButton(page)).toBeVisible();
  });

  test("CRT-004/005/006: Modal 'Agregado al carrito' aparece y navega a /cart", async ({
    page,
  }) => {
    await selectors.productDetail.buyButton(page).click();

    await expect(selectors.addToCartModal.heading(page)).toBeVisible();
    await expect(
      selectors.addToCartModal.goToCartButton(page),
    ).toBeVisible();

    await selectors.addToCartModal.goToCartButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL(/\/cart/);
  });

  test("CRT-007/008/009: Carrito muestra producto con cantidad inicial 1 y 16 opciones", async ({
    page,
  }) => {
    await selectors.productDetail.buyButton(page).click();
    await selectors.addToCartModal.goToCartButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(selectors.cart.heading(page)).toBeVisible();
    await expect(selectors.cart.table(page)).toContainText(product.name);
    await expect(selectors.cart.quantitySelect(page)).toHaveValue("1");

    const options = await selectors.cart
      .quantitySelect(page)
      .locator("option")
      .count();
    expect(options).toBe(16);
  });

  test("CRT-015/016/017/018/021/022: Eliminar producto vacía el carrito y muestra estado correcto", async ({
    page,
  }) => {
    await selectors.productDetail.buyButton(page).click();
    await selectors.addToCartModal.goToCartButton(page).click();
    await page.waitForLoadState("networkidle");

    await selectors.cart.removeButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(selectors.cart.emptyHeading(page)).toBeVisible();
    await expect(selectors.cart.emptyText(page)).toBeVisible();
    await expect(selectors.cart.goToHomeButton(page)).toBeVisible();
    await expect(selectors.cart.interestSection(page)).toBeVisible();
  });
});
