import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { qas, search } from "./utils/testData";

const data = search.discoDeFreno;

test.describe("TC-E2E-001: Validar búsqueda de repuesto desde el buscador principal", () => {
  test("SRC-001/002: Buscador principal es visible con placeholder correcto", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await expect(selectors.search.searchInput(page)).toBeVisible();
    await expect(selectors.search.searchInput(page)).toHaveAttribute(
      "placeholder",
      /nombre o código de repuesto/i,
    );
  });

  test("SRC-003/004/005: Autocompletado se despliega al escribir término de búsqueda", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.search.searchInput(page).click();
    await selectors.search.searchInput(page).pressSequentially(data.term);

    await expect(selectors.search.autocompleteDropdown(page)).toBeVisible();
    await expect(
      selectors.search.autocompleteOption(page, data.autocompleteResult),
    ).toBeVisible();
  });

  test("SRC-006/007/008: Selección desde autocompletado navega a URL de resultados correcta", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.search.searchInput(page).click();
    await selectors.search.searchInput(page).pressSequentially(data.term);
    await selectors.search
      .autocompleteOption(page, data.autocompleteResult)
      .click();
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL(data.expectedUrlPattern);
  });

  test("SRC-009/010/011: Página de resultados muestra título, cantidad de resultados y productos en stock", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    await expect(selectors.searchResults.heading(page)).toContainText(
      data.expectedTitle,
    );
    await expect(selectors.searchResults.resultsCount(page)).toContainText(
      data.expectedResultsText,
    );
    await expect(
      selectors.searchResults.productCards(page).first(),
    ).toContainText(/en stock/i);
  });

  test("SRC-012: Verificar información de las primeras 4 tarjetas de producto", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    const cards = selectors.searchResults.productCards(page);

    // NOTE: Se iteró sobre 4 productos (máximo permitido). Revisar manualmente los 17 restantes.
    for (let i = 0; i < 4; i++) {
      const card = cards.nth(i);
      await expect(card).toContainText(/en stock/i); // Estado de stock
      await expect(card).toContainText(/\|/); // Separador marca | código
      await expect(card).toContainText(/\$/); // Precio
      await expect(card).toContainText(/iva incluido/i); // IVA incluido
      await expect(card).toContainText(/12 cuotas/i); // Cuotas
      await expect(card).toContainText(/envío o retiro gratis/i); // Envío gratis
    }
  });

  test("SRC-013: Panel de filtros contiene los primeros 4 filtros requeridos", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    await expect(selectors.searchResults.filtersPanel(page)).toBeVisible();

    // NOTE: Se iteró sobre 4 filtros de 15. Revisar manualmente los restantes:
    // Año, Ancho, Perfil, Radio, Formato del envase, ofertas, CCA, volts, Estado de stock, Amperage, Terminal.
    const filtersToCheck = data.expectedFilters.slice(0, 4);
    for (const filter of filtersToCheck) {
      await expect(
        selectors.searchResults.filterButton(page, filter),
      ).toBeVisible();
    }
  });

  test("SRC-014/015: Selector de ordenamiento y botón Compra Asistida son visibles", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    await expect(selectors.searchResults.sortButton(page)).toBeVisible();
    await expect(
      selectors.searchResults.assistedPurchaseButton(page),
    ).toBeVisible();
  });

});
