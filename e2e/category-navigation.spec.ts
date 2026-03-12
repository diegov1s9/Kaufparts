import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { home, categories } from "./utils/testData";

test.describe("TC-E2E-002: Validar navegación a categorías desde 'Compra por categoría'", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(home.url);
    await page.waitForLoadState("networkidle");
  });

  test("CAT-001: Sección 'Compra por categoría' es visible", async ({
    page,
  }) => {
    await expect(selectors.home.categoriesSection(page)).toBeVisible();
    await expect(selectors.home.categoriesList(page)).toBeVisible();
  });

  for (const category of categories) {
    test(`CAT: Clic en "${category.name}" navega a /c/${category.code} y carga productos`, async ({
      page,
    }) => {
      await selectors.home.categoryButton(page, category.name).click();
      await page.waitForLoadState("networkidle");

      await expect(page).toHaveURL(new RegExp(category.code));
      await expect(selectors.categoryPage.heading(page)).toBeVisible();
      await expect(
        selectors.categoryPage.firstProductItem(page),
      ).toBeVisible();
    });
  }

  test("CAT-011: Los enlaces 'VER TODOS' son visibles y navegan a categorías", async ({
    page,
  }) => {
    const links = selectors.home.verTodosLinks(page);
    await expect(links.first()).toBeVisible();

    await links.first().click();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/\/c\//);
  });
});
