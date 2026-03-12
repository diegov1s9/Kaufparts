TC-E2E-002: Cotización Asistida por formulario público (B2B)

**TC ID**

TC-E2E-002

**Descripción**

Cotización Asistida por formulario público

**Proceso de Negocio**

Cotización B2B

**Sub-Proceso**

Solicitud + Cotización

**Prioridad**

Alta

**Datos de Prueba**

- Vehículo: Freightliner M2 106 2019
- Patente: EFGH34
- Repuestos: Filtro de combustible, pastillas de freno
- Foto JPG < 5MB

**Pasos de la Prueba**

1. Ingresar a kaufparts.cl.
2. En menú superior o banners, clic en "Cotiza aquí" o "COMPRA ASISTIDA".
3. Se abre formulario Typeform con pregunta "¿Qué repuestos necesita?"
4. Ingresar descripción: "Filtro de combustible y pastillas de freno para Freightliner M2 106".
5. Clic continuar.
6. En campo "Identificación", ingresar patente EFGH34.
7. En sección de archivos, adjuntar foto JPG del repuesto.
8. Autorizar uso de datos.
9. Clic "Enviar" o "Submit".
10. Verificar mensaje de agradecimiento.
11. Esperar respuesta de ejecutivo de ventas por correo.
12. Revisar presupuesto enviado por Kaufmann.

**Resultado Esperado**

- ✓ Formulario Typeform carga correctamente
- ✓ Datos capturados correctamente
- ✓ Ticket interno creado para venta asistida
- ✓ Email de confirmación de solicitud recibido
- ✓ Presupuesto elaborado y enviado por ejecutivo

---

TC-E2E-003: Compra con factura para empresa vía Khipu

**TC ID**

TC-E2E-003

**Descripción**

Compra con factura para empresa vía Khipu

**Proceso de Negocio**

Comercio B2B

**Sub-Proceso**

Checkout Factura + Khipu

**Prioridad**

Alta

**Datos de Prueba**

- Usuario empresa: diego.valenzuela@kaufmann.cl
- RUT: 76543210-3
- Razón Social: Transportes Chile
- Giro: Transporte
- Producto: Batería Mercedes-Benz (2 unidades)
- Precio unitario: $150.000

**Pasos de la Prueba**

1. Ingresa en https://qas.kaufparts.cl/
2. Clic en "Ingresar" e Iniciar sesión con 76543210-3
3. Buscar "Llave del Depósito de Agua" en el catálogo.
4. Clic en el producto nombre "Llave del Depósito de Agua" Bepo | A01112
5. Cambiar cantidad a 2 unidades.
6. Clic "COMPRAR"
7. Clic en "Ir al carrito"
8. Clic en "Proceder al pago"
9. Verificar URL `/checkout/checkoutDeliveryMode`
10. Verificar Montos Subtotal $1.121, Ahorras $125, Despacho GRATIS, Total $1.121.
11. En Paso 2, Seleccionar "Región de los Ríos"
12. En paso 3, Clic en Check "Sucursal Valdivia"
13. En paso 4, Clic en Check "Pago con tarjeta"
14. Se habilita botón "Pagar"
15. Redirecciona a `https://mipagoqa.kaufmann.cl/pasarelapago/`

**Resultado Esperado**

- ✓ Sistema precarga datos fiscales de empresa correctamente
- ✓ Factura generada con RUT y Razón Social
- ✓ Khipu disponible como método de pago
- ✓ Transferencia procesada en sandbox
- ✓ Orden con estado "Pagado" generada
- ✓ Email de confirmación con factura enviado
  Pendiente. Rut no ya no permite ingresar

---

TC-E2E-004: Búsqueda por VIN y compra con pago en cuotas

**TC ID**

TC-E2E-004

**Descripción**

Búsqueda por VIN y compra con pago en cuotas

**Proceso de Negocio**

Comercio Electrónico

**Sub-Proceso**

Búsqueda VIN + Pago Cuotas

**Prioridad**

Alta

**Datos de Prueba**

- VIN: W1NFB1KB3PA850095
- Vehiculo: MERCEDES-BENZ
- Modelo: GLE 300 d 4MATIC
- Producto: Disco de freno delantero
- Cantidad: 2 unidades
- Método pago: WebPay 12 cuotas

**Pasos de la Prueba**

1. Iniciar sesión en `https://www.kaufparts.cl`.
2. En buscador del header, clic en ícono de auto (búsqueda por VIN/Patente).
3. Ingresar VIN: `WDB9066331N123456`.
4. Presionar Enter o búsqueda.
5. Verificar que el sistema identifica el vehículo completo (marca, modelo, año).
6. Verificar que el catálogo se auto-filtra mostrando repuestos compatibles.
7. Filtrar por "Frenos" en menú lateral izquierdo.
8. Localizar y seleccionar "Disco de freno delantero".
9. Verificar leyenda de compatibilidad con el VIN.
10. Cambiar cantidad a 2 unidades.
11. Clic "COMPRAR" > "IR AL CARRITO".
12. En `/cart`, verificar 2 discos de freno con precio correcto.
13. Clic "PROCEDER AL PAGO".
14. Confirmar dirección de despacho.
15. Seleccionar "Tarjeta de Crédito" (WebPay).
16. Clic "Pagar".
17. En WebPay, elegir 12 cuotas sin interés.
18. Ingresar datos de tarjeta sandbox.
19. Confirmar pago.
20. Verificar confirmación con detalle de cuotas.

**Resultado Esperado**

- ✓ VIN de 17 caracteres reconocido correctamente
- ✓ Vehículo identificado con especificaciones
- ✓ Repuestos compatibles mostrados
- ✓ 2 discos de freno agregados al carrito
- ✓ WebPay con 12 cuotas procesado
- ✓ Confirmación con detalle de cuotas generada
- ✓ Email con resumen de pagos recibido

Trabajando ...
Escenario: Validar todos los enlaces de navegación en sección "Compra por categoría"

Dado que estoy en el home de Kaufparts
Y visualizo la sección "Compra por categoría"
Cuando hago clic en cada categoría disponible:
| Categoría | Referencias esperadas |
| Fluidos y Lubricantes | Debe cargar listado de productos |
| Baterías | Debe cargar listado de productos |
| Neumáticos | Debe cargar listado de productos |
| Boutique y Merchandising | Debe cargar listado de productos |
| Rodados | Debe cargar listado de productos |
| Accesorios y Mantenimiento | Debe cargar listado de productos |
| Sistema de Frenos | Debe cargar listado de productos |
| Transmisión y Tracción | Debe cargar listado de productos |
Entonces cada enlace debe:

- Navegar a la categoría correcta
- Cargar sin errores HTTP
- Mostrar productos relacionados
- URL contiene el código de categoría esperado (KC10, KC05, KC09, etc.)

---

TC-E2E-001: Validar ficha de producto completa

**TC ID**

TC-E2E-001

**Descripción**

Validar información completa de ficha de producto (descripción, precio, cuotas, stock)

**Proceso de Negocio**

Comercio Electrónico

**Sub-Proceso**

Visualización de Ficha Producto + Información de Cuotas

**Prioridad**

Alta

**Datos de Prueba**

- Producto ID: A01566
- Marca: Mercedes Benz
- Producto: Sensor de Distancia - Parktronic
- Precio actual: $192.517
- Precio original: $174.790
- Descuento: 10% OFF
- Cuotas: 12 sin interés
- Valor cuota: $16.044
- Estado: EN STOCK
- Badge adicional: MÁS VENDIDO

**Pasos de la Prueba**

1. Navega a https://qas.kaufparts.cl/p/A01566
2. Espera a que la página cargue completamente (networkidle)
3. Valida descripción interna: "Mercedes Benz | A01566"
4. Valida título del producto: "Sensor de Distancia - Parktronic"
5. Valida precio actual mostrado: $192.517
6. Valida descuento: "10% OFF"
7. Valida texto de cuotas: "en 12 cuotas de $16.044 sin interés"
8. Valida estado de stock: "EN STOCK"
9. Verifica que el select de cantidad tenga valor "1 Unidad"
10. Cambia cantidad a "5 Unidades"
11. Valida que el select refleje el cambio a "5 Unidades"

**Resultado Esperado**

| ID              | Validación                                                | Estado  |
| --------------- | --------------------------------------------------------- | ------- | ---- |
| DESC-001        | Descripción interna es "Mercedes Benz                     | A01566" | PASS |
| TITULO-001      | Título contiene "Sensor de Distancia - Parktronic"        | PASS    |
| PRECIO-001      | Precio actual es $192.517                                 | PASS    |
| DESCTO-001      | Descuento muestra "10% OFF"                               | PASS    |
| CUOTAS-001      | Texto de cuotas es "en 12 cuotas de $16.044 sin interés"  | PASS    |
| CUOTAS-CALC-001 | Cálculo es correcto: $192.517 ÷ 12 = $16.043,08 ≈ $16.044 | PASS    |
| STOCK-001       | Estado es "EN STOCK"                                      | PASS    |
| BADGE-001       | Badge "MÁS VENDIDO" se muestra correctamente              | PASS    |
| CANTIDAD-001    | Select de cantidad funciona correctamente                 | PASS    |
| CANTIDAD-002    | Cambio de cantidad se refleja en la interfaz (5 Unidades) | PASS    |

**Notas**

Test reutiliza una sola carga de página para todas las validaciones (beforeAll)

---

## TC-E2E-002: Validar navegación a categorías desde "Compra por categoría"

**TC ID**

TC-E2E-002

**Descripción**

Validar que el usuario pueda navegar a todas las categorías desde la sección "Compra por categoría"

**Proceso de Negocio**

Comercio Electrónico

**Sub-Proceso**

Navegación por Categorías

**Prioridad**

Media

**Datos de Prueba**

Categorías a validar:

| Categoría                    | Código |
| ---------------------------- | ------ |
| Fluidos y Lubricantes        | KC10   |
| Baterías                     | KC05   |
| Neumáticos                   | KC09   |
| Boutique y Merchandising     | KC12   |
| Rodados                      | KC11   |
| Accesorios y Mantenimiento   | KC02   |
| Sistema de Frenos            | KC03   |
| Transmisión y Tracción       | KC04   |

**Pasos de la Prueba**

1. Navega a `https://www.kaufparts.cl`
2. Espera carga de página (`networkidle`)
3. Valida que la sección "Compra por categoría" sea visible
4. Para cada categoría:
   - Clic en botón de categoría
   - Valida que navegue a la URL correcta (`/c/KC0X`)
   - Valida que se muestren productos
   - Regresa a home
5. Valida enlaces de "VER TODOS"

**Resultado Esperado**

| ID      | Validación                                                        | Estado |
| ------- | ----------------------------------------------------------------- | ------ |
| CAT-001 | Sección "Compra por categoría" es visible                         | PASS   |
| CAT-002 | Clic en "Fluidos y Lubricantes" navega a `/c/KC10`                | PASS   |
| CAT-003 | Clic en "Baterías" navega a `/c/KC05`                             | PASS   |
| CAT-004 | Clic en "Neumáticos" navega a `/c/KC09`                           | PASS   |
| CAT-005 | Clic en "Boutique y Merchandising" navega a `/c/KC12`             | PASS   |
| CAT-006 | Clic en "Rodados" navega a `/c/KC11`                              | PASS   |
| CAT-007 | Clic en "Accesorios y Mantenimiento" navega a `/c/KC02`           | PASS   |
| CAT-008 | Clic en "Sistema de Frenos" navega a `/c/KC03`                    | PASS   |
| CAT-009 | Clic en "Transmisión y Tracción" navega a `/c/KC04`               | PASS   |
| CAT-010 | Cada categoría carga productos sin errores HTTP                   | PASS   |
| CAT-011 | Los enlaces "VER TODOS" funcionan correctamente                   | PASS   |

**Notas**

Parametrizado para validar múltiples categorías. Cada categoría se valida con una carga de página independiente.
