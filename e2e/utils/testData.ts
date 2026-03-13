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
  url: "https://www.kaufparts.cl",
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
  url: "https://qas.kaufparts.cl",
};

export const infoLinks = [
  {
    label: "¿Necesitas ayuda con la compra de tus repuestos?",
    url: "https://cl.kaufparts.cl/?utm_source=kaufparts&utm_medium=kaufparts_site&utm_campaign=AO&utm_content=cbayuda",
    urlPattern: /cl\.kaufparts\.cl/,
  },
  {
    label: "Despachos y Retiros en Tienda",
    url: "https://www.kaufparts.cl/info/despachos",
    urlPattern: /info\/despachos/,
  },
  {
    label: "Cambios y Devoluciones",
    url: "https://cl.kaufparts.cl/ayuda/cambios-y-devoluciones",
    urlPattern: /cambios-y-devoluciones/,
  },
  {
    label: "Visita nuestro Blog",
    url: "https://cl.kaufparts.cl/blog",
    urlPattern: /\/blog/,
  },
];

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
