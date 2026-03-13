import { test, expect } from "@playwright/test";
import { selectors } from "./utils/selectors";
import { qas, vinSearch as vinData, plateSearch as plateData } from "./utils/testData";

test.describe("TC-E2E-008: Validar búsqueda por VIN y resultados de compatibilidad", () => {
  test("VIN-001/002: Botón 'Buscar por patente' es visible y abre el formulario de VIN", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.vinSearch.openButton(page),
      "El botón 'Buscar por patente' debe ser visible en el header",
    ).toBeVisible();

    await selectors.vinSearch.openButton(page).click();

    await expect(
      selectors.vinSearch.input(page),
      "El campo de ingreso de VIN/patente debe desplegarse al hacer clic",
    ).toBeVisible();
  });

  test("VIN-003/004/005: Ingresar VIN y buscar navega a URL con parámetros correctos", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(vinData.vin);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      page,
      "La URL debe contener el VIN y el parámetro type=vin tras la búsqueda",
    ).toHaveURL(vinData.expectedUrlPattern);
  });

  test("VIN-006/007: Página de resultados muestra el VIN como título y cantidad de resultados", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(vinData.vin);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.heading(page),
      "El heading de la página debe mostrar el VIN ingresado",
    ).toContainText(vinData.vin);

    await expect(
      selectors.searchResults.resultsCount(page),
      "Debe mostrarse la cantidad de resultados compatibles con el VIN",
    ).toContainText(vinData.expectedResultsText);
  });

  test("VIN-008: Panel lateral muestra filtros de compatibilidad del vehículo", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(vinData.vin);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.filtersPanel(page),
      "El panel de filtros de compatibilidad debe ser visible",
    ).toBeVisible();

    for (const filter of vinData.expectedFilters) {
      await expect(
        selectors.searchResults.filterButton(page, filter),
        `El filtro '${filter}' debe estar visible en el panel lateral`,
      ).toBeVisible();
    }
  });

  test("VIN-009/010: Selector de ordenamiento y botón Compra Asistida son visibles", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(vinData.vin);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.sortButton(page),
      "El selector de ordenamiento 'Más relevantes' debe ser visible",
    ).toBeVisible();

    await expect(
      selectors.searchResults.assistedPurchaseButton(page),
      "El botón 'IR A COMPRA ASISTIDA' debe ser visible en resultados de VIN",
    ).toBeVisible();
  });

  test("VIN-011: Paginación es visible y muestra rango de productos por página", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(vinData.vin);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.pagination(page),
      "La paginación debe ser visible en los resultados de búsqueda por VIN",
    ).toBeVisible();

    await expect(
      selectors.searchResults.paginationInfo(page),
      "La información de paginación debe mostrar el rango de 21 productos por página",
    ).toContainText(vinData.paginationText);
  });
});

test.describe("TC-E2E-009: Validar búsqueda por patente y resultados de compatibilidad", () => {
  test("PAT-001/002/003: Ingresar patente y buscar navega a URL con parámetros correctos", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(plateData.plate);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      page,
      "La URL debe contener la patente como parámetro tras la búsqueda",
    ).toHaveURL(plateData.expectedUrlPattern);
  });

  test("PAT-004/005: Página de resultados muestra la patente como título y cantidad de resultados", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(plateData.plate);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");
    await selectors.searchResults.resultsCount(page).waitFor({ state: "visible" });

    await expect(
      selectors.searchResults.heading(page),
      "El heading de la página debe mostrar la patente ingresada",
    ).toContainText(plateData.plate);

    await expect(
      selectors.searchResults.resultsCount(page),
      "Debe mostrarse la cantidad de resultados compatibles con la patente",
    ).toContainText(plateData.expectedResultsText);
  });

  test("PAT-006: Panel lateral muestra filtros de compatibilidad del vehículo", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(plateData.plate);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");
    await selectors.searchResults.resultsCount(page).waitFor({ state: "visible" });

    await expect(
      selectors.searchResults.filtersPanel(page),
      "El panel de filtros de compatibilidad debe ser visible",
    ).toBeVisible();

    for (const filter of plateData.expectedFilters) {
      await expect(
        selectors.searchResults.filterButton(page, filter),
        `El filtro '${filter}' debe estar visible en el panel lateral`,
      ).toBeVisible();
    }
  });

  test("PAT-007/008: Selector de ordenamiento y botón Compra Asistida son visibles", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(plateData.plate);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.sortButton(page),
      "El selector de ordenamiento 'Más relevantes' debe ser visible",
    ).toBeVisible();

    await expect(
      selectors.searchResults.assistedPurchaseButton(page),
      "El botón 'IR A COMPRA ASISTIDA' debe ser visible en resultados de patente",
    ).toBeVisible();
  });

  test("PAT-009: Paginación es visible y muestra rango de productos por página", async ({
    page,
  }) => {
    await page.goto(qas.url);
    await page.waitForLoadState("networkidle");

    await selectors.vinSearch.openButton(page).click();
    await selectors.vinSearch.input(page).fill(plateData.plate);
    await selectors.vinSearch.searchButton(page).click();
    await page.waitForLoadState("networkidle");

    await expect(
      selectors.searchResults.pagination(page),
      "La paginación debe ser visible en los resultados de búsqueda por patente",
    ).toBeVisible();

    await expect(
      selectors.searchResults.paginationInfo(page),
      "La información de paginación debe mostrar el rango de 21 productos por página",
    ).toContainText(plateData.paginationText);
  });
});
