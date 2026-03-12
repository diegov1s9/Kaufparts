import { Page } from "@playwright/test";

// Selector strategy:
// 1) getByRole / accesibilidad
// 2) getByTestId cuando sea necesario
// 3) atributos específicos solo si validan routing

export const selectors = {
  home: {
    // Ejemplos de referencia; reemplazar por tus selectores reales
    mainHeading: (page: Page) => page.getByRole("heading", { level: 1 }),
    primaryButton: (page: Page) =>
      page.getByRole("button", { name: /continuar/i }),
  },
  productDetail: {
    internalDescription: (page: Page) =>
      page.getByText("Mercedes Benz | A01566"),
    title: (page: Page) =>
      page.getByRole("heading", {
        name: /sensor de distancia - parktronic/i,
      }),
    currentPrice: (page: Page) => page.locator("h4.product-price").first(),
    installmentsText: (page: Page) =>
      page.locator("p.product-installment-price").first(),
    stockStatus: (page: Page) => page.locator(".badge-stock").first(),
    quantitySelect: (page: Page) => page.getByRole("combobox"),
  },
};
