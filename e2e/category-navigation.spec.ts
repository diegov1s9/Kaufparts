import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { home, categories } from "./utils/testData";

test.describe("TC-E2E-002: Validar navegación a categorías desde 'Compra por categoría'", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(home.url);
    await page.waitForLoadState("networkidle");
    await page.mouse.wheel(0, 600);
    await page.waitForSelector(".category-container", { timeout: 30000 });
  });

  test("CAT-001: Sección 'Compra por categoría' es visible", async ({
    page,
  }) => {
    await expect(
      selectors.home.categoriesSection(page),
      "El encabezado 'Compra por categoría' debe ser visible en la página de inicio",
    ).toBeVisible();
    await expect(
      selectors.home.categoriesList(page),
      "La lista de categorías debe estar visible en la sección correspondiente",
    ).toBeVisible();
  });

  for (const category of categories) {
    test(`CAT: Clic en "${category.name}" navega a /c/${category.code} y carga productos`, async ({
      page,
    }) => {
      await selectors.home.categoryButton(page, category.name).click();
      await page.waitForLoadState("networkidle");

      await expect(
        page,
        `La URL debe contener el código de categoría ${category.code} tras hacer clic`,
      ).toHaveURL(new RegExp(category.code));
      await expect(
        selectors.categoryPage.heading(page),
        `El encabezado de la página de categoría '${category.name}' debe ser visible`,
      ).toBeVisible();
    });
  }

  test("CAT-011: El botón 'VER TODOS' expande la sección de categorías y cambia a 'VER MENOS'", async ({
    page,
  }) => {
    const toggleBtn = selectors.home.verTodosLinks(page);

    await expect(
      toggleBtn,
      "El botón 'VER TODOS' debe ser visible en la sección de categorías",
    ).toBeVisible();

    await expect(
      toggleBtn,
      "El botón debe mostrar el texto 'VER TODOS' antes de hacer clic",
    ).toContainText(/ver todos/i);

    await toggleBtn.click();

    await expect(
      toggleBtn,
      "Tras hacer clic, el botón debe cambiar su texto a 'VER MENOS'",
    ).toContainText(/ver menos/i);
  });
});
