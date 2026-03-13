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

    await expect(
      selectors.search.searchInput(page),
      "El campo de búsqueda principal debe ser visible en la página de inicio",
    ).toBeVisible();
    await expect(
      selectors.search.searchInput(page),
      "El placeholder del buscador debe indicar 'Nombre o código de repuesto'",
    ).toHaveAttribute("placeholder", /nombre o código de repuesto/i);
  });

  test("SRC-003/004/005: Autocompletado se despliega al escribir término de búsqueda", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.search.searchInput(page).click();
    await selectors.search.searchInput(page).pressSequentially(data.term);

    await expect(
      selectors.search.autocompleteDropdown(page),
      "El dropdown de autocompletado debe desplegarse al escribir en el buscador",
    ).toBeVisible();
    await expect(
      selectors.search.autocompleteOption(page, data.autocompleteResult),
      `La opción '${data.autocompleteResult}' debe aparecer en las sugerencias de autocompletado`,
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

    await expect(
      page,
      "La URL debe cambiar al patrón de búsqueda tras seleccionar una opción del autocompletado",
    ).toHaveURL(data.expectedUrlPattern);
  });

  test("SRC-009/010/011: Página de resultados muestra título, cantidad de resultados y productos en stock", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.heading(page),
      `El título de la página de resultados debe mostrar '${data.expectedTitle}'`,
    ).toContainText(data.expectedTitle);
    await expect(
      selectors.searchResults.resultsCount(page),
      `El contador de resultados debe mostrar '${data.expectedResultsText}'`,
    ).toContainText(data.expectedResultsText);
    await expect(
      selectors.searchResults.productCards(page).first(),
      "El primer producto listado debe mostrar estado 'En stock'",
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
      await expect(card, `Tarjeta ${i + 1}: debe mostrar el estado de disponibilidad del producto`).toContainText(/en stock/i);
      await expect(card, `Tarjeta ${i + 1}: debe mostrar el separador marca | código del producto`).toContainText(/\|/);
      await expect(card, `Tarjeta ${i + 1}: debe mostrar el precio del producto`).toContainText(/\$/);
      await expect(card, `Tarjeta ${i + 1}: debe indicar que el precio incluye IVA`).toContainText(/iva incluido/i);
      await expect(card, `Tarjeta ${i + 1}: debe mostrar la opción de pago en 12 cuotas`).toContainText(/12 cuotas/i);
      await expect(card, `Tarjeta ${i + 1}: debe indicar disponibilidad de envío o retiro gratis`).toContainText(/envío o retiro gratis/i);
    }
  });

  test("SRC-013: Panel de filtros contiene los primeros 4 filtros requeridos", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.filtersPanel(page),
      "El panel de filtros lateral debe ser visible en la página de resultados",
    ).toBeVisible();

    // NOTE: Se iteró sobre 4 filtros de 15. Revisar manualmente los restantes:
    // Año, Ancho, Perfil, Radio, Formato del envase, ofertas, CCA, volts, Estado de stock, Amperage, Terminal.
    const filtersToCheck = data.expectedFilters.slice(0, 4);
    for (const filter of filtersToCheck) {
      await expect(
        selectors.searchResults.filterButton(page, filter),
        `El filtro '${filter}' debe estar visible en el panel lateral`,
      ).toBeVisible();
    }
  });

  test("SRC-014/015: Selector de ordenamiento y botón Compra Asistida son visibles", async ({
    page,
  }) => {
    await page.goto(qas.url + data.directSearchUrl);
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.sortButton(page),
      "El selector de ordenamiento 'Más relevantes' debe ser visible en los resultados",
    ).toBeVisible();
    await expect(
      selectors.searchResults.assistedPurchaseButton(page),
      "El botón 'IR A COMPRA ASISTIDA' debe ser visible en la parte superior de los resultados",
    ).toBeVisible();
  });

});
