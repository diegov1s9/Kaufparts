import { Page } from "@playwright/test";

// Selector strategy:
// 1) getByRole / accesibilidad
// 2) getByTestId cuando sea necesario
// 3) atributos específicos solo si validan routing

export const selectors = {
  home: {
    categoriesSection: (page: Page) =>
      page.getByRole("heading", { name: /compra por categor/i }),
    categoriesList: (page: Page) =>
      page.getByRole("list", { name: /categorías/i }),
    categoryButton: (page: Page, name: string) =>
      page
        .getByRole("list", { name: /categorías/i })
        .getByRole("button", { name: new RegExp(name, "i") }),
    verTodosLinks: (page: Page) =>
      page.getByRole("link", { name: /ver todos/i }),
  },
  header: {
    infoNavList: (page: Page) => page.locator(".custom-links__list"),
    infoLink: (page: Page, label: string) =>
      page
        .locator(".custom-links__list")
        .getByRole("link", { name: new RegExp(label, "i") }),
  },
  categoryPage: {
    heading: (page: Page) => page.getByRole("heading", { level: 1 }),
    firstProductItem: (page: Page) =>
      page.locator("h4.product-price").first(),
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
