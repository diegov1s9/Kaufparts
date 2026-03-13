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
      "El título del producto debe ser visible en la página de detalle",
    ).toBeVisible();
    await expect(
      selectors.productDetail.quantitySelect(page),
      "El selector de cantidad debe iniciar en 1",
    ).toHaveValue("1");
    await expect(
      selectors.productDetail.buyButton(page),
      "El botón COMPRAR debe estar visible y disponible",
    ).toBeVisible();
  });

  test("CRT-004/005/006: Modal 'Agregado al carrito' aparece y navega a /cart", async ({
    page,
  }) => {
    await selectors.productDetail.buyButton(page).click();

    await expect(
      selectors.addToCartModal.heading(page),
      "El modal de confirmación debe aparecer con el título 'Agregado al carrito'",
    ).toBeVisible();
    await expect(
      selectors.addToCartModal.goToCartButton(page),
      "El botón 'Ir al carrito' debe estar visible en el modal",
    ).toBeVisible();

    await selectors.addToCartModal.goToCartButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      page,
      "La URL debe cambiar a /cart tras hacer clic en 'Ir al carrito'",
    ).toHaveURL(/\/cart/);
  });

  test("CRT-007/008/009: Carrito muestra producto con cantidad inicial 1 y 16 opciones", async ({
    page,
  }) => {
    await selectors.productDetail.buyButton(page).click();
    await selectors.addToCartModal.goToCartButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.cart.heading(page),
      "El título 'Tu carro' debe ser visible en la página del carrito",
    ).toBeVisible();
    await expect(
      selectors.cart.table(page),
      "La tabla del carrito debe contener el nombre del producto agregado",
    ).toContainText(product.name);
    await expect(
      selectors.cart.quantitySelect(page),
      "La cantidad del producto en el carrito debe iniciar en 1",
    ).toHaveValue("1");

    const options = await selectors.cart
      .quantitySelect(page)
      .locator("option")
      .count();
    expect(options, "El selector de cantidad debe tener 16 opciones disponibles").toBe(16);
  });

  test("CRT-015/016/017/018/021/022: Eliminar producto vacía el carrito y muestra estado correcto", async ({
    page,
  }) => {
    await selectors.productDetail.buyButton(page).click();
    await selectors.addToCartModal.goToCartButton(page).click();
    await page.waitForLoadState("networkidle");

    await selectors.cart.removeButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.cart.emptyHeading(page),
      "Debe mostrarse el mensaje de carrito vacío tras eliminar el producto",
    ).toBeVisible();
    await expect(
      selectors.cart.emptyText(page),
      "El texto 'no tienes productos en tu carrito' debe ser visible",
    ).toBeVisible();
    await expect(
      selectors.cart.goToHomeButton(page),
      "El botón 'Ir al inicio' debe estar disponible en el carrito vacío",
    ).toBeVisible();
    await expect(
      selectors.cart.interestSection(page),
      "La sección 'También te podría interesar' debe mostrarse en el carrito vacío",
    ).toBeVisible();
  });
});
