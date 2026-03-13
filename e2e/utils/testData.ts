export const users = {
  // Ejemplo de usuario; adapta a tus roles reales
  default: {
    username: process.env.E2E_USER ?? "user@example.com",
    password: process.env.E2E_PASS ?? "password",
    roles: ["USER"],
  },
  empresa: {
    rut: "76543210-3",
    password: process.env.E2E_PASS_EMPRESA ?? "Test1234",
    razonSocial: "Transportes Chile",
    giro: "492250 - TRANSPORTE DE PASAJEROS EN BUSES INTERURBANOS",
    direccion: "Av. Las Condes 123",
    comuna: "Las Condes",
    region: "Metropolitana",
    pais: "Chile",
    telefono: "912345678",
    email: "diego.valenzuela@kaufmann.cl",
  },
};

export const routes = {
  home: "/",
};

export const home = {
  url: process.env["PLAYWRIGHT_TEST_BASE_URL"] ?? "https://qas.kaufparts.cl",
};

export const categories = [
  { name: "Fluidos y Lubricantes", code: "KC10" },
  { name: "Baterías", code: "KC05" },
  { name: "Neumáticos", code: "KC09" },
  { name: "Boutique y Merchandising", code: "KC12" },
  { name: "Rodados", code: "KC13" },
  { name: "Accesorios y Mantenimiento", code: "KC11" },
  { name: "Sistema de Frenos", code: "KC03" },
  { name: "Transmisión y Tracción", code: "KC02" },
];

export const qas = {
  url: process.env["PLAYWRIGHT_TEST_BASE_URL"] ?? "https://qas.kaufparts.cl",
};

export const infoLinks = [
  {
    label: "¿Necesitas ayuda con la compra de tus repuestos?",
    url: "https://cl.kaufparts.cl/?utm_source=kaufparts&utm_medium=kaufparts_site&utm_campaign=AO&utm_content=cbayuda",
    urlPattern: /cl\.kaufparts\.cl/,
    expectedStatus: 200,
  },
  {
    label: "Despachos y Retiros en Tienda",
    url: "https://www.kaufparts.cl/info/despachos",
    urlPattern: /info\/despachos/,
    expectedStatus: 200,
    skipStatusCheck: true,
  },
  {
    label: "Cambios y Devoluciones",
    url: "https://cl.kaufparts.cl/ayuda/cambios-y-devoluciones",
    urlPattern: /cambios-y-devoluciones/,
    expectedStatus: 200,
  },
  {
    label: "Visita nuestro Blog",
    url: "https://cl.kaufparts.cl/blog",
    urlPattern: /\/blog/,
    expectedStatus: 200,
  },
];

export const search = {
  discoDeFreno: {
    term: "disco de freno",
    autocompleteResult: "disco de frenos",
    expectedTitle: "disco de frenos",
    expectedResultsText: "357 resultados",
    expectedUrlPattern: /search\/disco%20de%20frenos/,
    directSearchUrl: "/search/disco%20de%20frenos?query=disco%20de%20frenos",
    productsPerPage: 21,
    paginationText: /mostrando 1.21 de \d+ productos/i,
    expectedFilters: [
      "Categoría",
      "Subcategoría",
      "Marca",
      "Modelo",
      "Año",
      "Ancho",
      "Perfil",
      "Radio",
      "Formato del envase",
      "ofertas",
      "CCA",
      "volts",
      "Estado de stock",
      "Amperage",
      "Terminal",
    ],
  },
};

export const vinSearch = {
  vin: "W1NFB1KB3PA850095",
  expectedResultsText: "107 resultados",
  expectedUrlPattern: /patentId=W1NFB1KB3PA850095/,
  expectedFilters: ["Marca", "Modelo", "Año", "Cilindrada", "Estado de stock"],
  paginationText: /mostrando 1.21 de \d+ productos/i,
};

// Referencia: SKWG67 → MAXUS T90 4X4 AT | RUT cliente: 143758001 | Empresa: AUTO SUMMIT CHILE S A
export const plateSearch = {
  plate: "SKWG67",
  expectedUrlPattern: /patentId=SKWG67/,
  expectedResultsText: /\d+ resultados/,
  expectedFilters: ["Estado de stock"],
  paginationText: /mostrando 1.21 de \d+ productos/i,
};

export const products = {
  bombaCirculacionAgua: {
    id: "A00989",
    name: "Bomba de Circulación del Agua",
    url: "https://qas.kaufparts.cl/p/A00989",
    currentPrice: 582089,
    updatedQty: "3",
  },
  sensorDistanceParktronic: {
    id: "A01566",
    brand: "Mercedes Benz",
    name: "Sensor de Distancia - Parktronic",
    url: "https://qas.kaufparts.cl/p/A01566",
    currentPrice: 192517,
    originalPrice: 174790,
    installmentsCount: 12,
    installmentValue: 16044,
    stockStatus: "En stock",
    badge: "MÁS VENDIDO",
  },
};
