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

- Formulario Typeform carga correctamente
- Datos capturados correctamente
- Ticket interno creado para venta asistida
- Email de confirmación de solicitud recibido
- Presupuesto elaborado y enviado por ejecutivo

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

---

TC-E2E-001: Validar información del producto seleccionado

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
| CAT-011 | Los enlaces "VER TODOS" funcionan correctamente                   | PASS   |

**Notas**

Parametrizado para validar múltiples categorías. Cada categoría se valida con una carga de página independiente.


## TC‑E2E‑003: Validar acceso a páginas informativas desde el encabezado (Header)

**TC ID**  
TC‑E2E‑003

**Descripción**  
Validar que el usuario pueda acceder correctamente a todas las páginas informativas desde los enlaces ubicados en la parte superior (header) del sitio web.

**Proceso de Negocio**  
Comercio Electrónico

**Sub‑Proceso**  
Navegación por Páginas Informativas

**Prioridad**  
Media

### Datos de Prueba

Enlaces informativos a validar:

| Enlace                                                            | URL                                                       | Dominio Destino        |
|------------------------------------------------------------------|-----------------------------------------------------------|------------------------|
| ¿Necesitas ayuda con la compra de tus repuestos?                 | https://cl.kaufparts.cl/                                  | cl.kaufparts.cl        |
| Despachos y Retiros en Tienda                                    | https://www.kaufparts.cl/info/despachos                   | kaufparts.cl           |
| Cambios y Devoluciones                                           | https://cl.kaufparts.cl/ayuda/cambios-y-devoluciones      | cl.kaufparts.cl        |
| Visita nuestro Blog                                              | https://cl.kaufparts.cl/blog                              | cl.kaufparts.cl        |

### Pasos de la Prueba

1. Navega a `https://qas.kaufparts.cl/`
2. Espera carga completa de página (`networkidle`)
3. Valida que el header sea visible con los 4 enlaces informativos
4. Para cada enlace informativo:
   1. Clic en el enlace
   2. Espera carga de página (`networkidle`)
   3. Valida que navegue a la URL correcta
   4. Valida que el contenido se cargue sin errores (status 200)
   5. Regresa a la página principal
5. Valida que todos los enlaces son accesibles y funcionales

### Resultado Esperado

| ID      | Validación                                                                                | Estado |
|--------|--------------------------------------------------------------------------------------------|--------|
| HDR‑001 | Header es visible con todos los enlaces informativos                                      | PASS   |
| HDR‑002 | Clic en "¿Necesitas ayuda..." navega a cl.kaufparts.cl sin errores                        | PASS   |
| HDR‑003 | Clic en "Despachos y Retiros en Tienda" navega a `/info/despachos`                        | PASS   |
| HDR‑004 | Clic en "Cambios y Devoluciones" navega a `/ayuda/cambios-y-devoluciones`                | PASS   |
| HDR‑005 | Clic en "Visita nuestro Blog" navega a `/blog`                                           | PASS   |
| HDR‑006 | Página "¿Necesitas ayuda..." carga contenido correcto                                     | PASS   |
| HDR‑007 | Página "Despachos y Retiros" muestra información de despachos                            | PASS   |
| HDR‑008 | Página "Cambios y Devoluciones" muestra información de devoluciones                      | PASS   |
| HDR‑009 | Página "Blog" carga artículos y contenido sin errores                                    | PASS   |
| HDR‑010 | Los enlaces internos (cl.kaufparts.cl, blog, cambios) responden con HTTP 200              | PASS   |
| HDR‑010b | "Despachos y Retiros en Tienda" excluido del chequeo HTTP: URL de producción (www.kaufparts.cl) devuelve 403 bajo carga paralela (bot-detection). La navegación al enlace sí se valida en HDR‑003. | EXCLUIDO |
| HDR‑011 | No hay errores de red al cargar las páginas destino                                      | PASS   |

### Notas

- Los enlaces están organizados en el header navegable (sección superior‑derecha).
- Cada página destino carga en el mismo navegador (sin ventanas nuevas).
- Se valida tanto la navegación correcta como la carga del contenido.
- Este test case puede parametrizarse para validar múltiples enlaces con una estructura única.
- Los dominios pueden variar entre `kaufparts.cl` y `cl.kaufparts.cl` según la página informativa.

---

## TC‑E2E‑004: Validar cambio de cantidad y eliminación de producto desde el resumen del carro

**TC ID**  
TC‑E2E‑004

**Descripción**  
Validar que el usuario pueda modificar la cantidad de un producto y eliminarlo del carrito desde la página de resumen del carro.

**Proceso de Negocio**  
Comercio Electrónico

**Sub‑Proceso**  
Gestión del Carrito de Compra

**Prioridad**  
Alta

### Datos de Prueba

Producto seleccionado al azar:

| Nombre del Producto              | SKU/ID | Precio Unitario | Estado    |
|----------------------------------|--------|-----------------|-----------|
| Bomba de Circulación del Agua    | A00989 | $582.089        | EN STOCK  |

Cantidades a validar: **1** (inicial), **3** (cambio), **0** (después de eliminar)

### Pasos de la Prueba

1. Navega a `https://qas.kaufparts.cl/`
2. Espera carga de página (`networkidle`)
3. Selecciona un producto al azar de la lista de productos disponibles
4. Verifica que la página del producto cargue correctamente
5. En el dropdown de cantidad, verifica que el valor inicial sea "1 Unidad"
6. Haz clic en el botón "COMPRAR"
7. En el modal "Agregado al carrito", haz clic en "IR AL CARRITO"
8. Espera carga de la página del carrito (`networkidle`)
9. Valida que el producto esté visible en la tabla "Tu carrito"
10. Valida que la cantidad inicial sea 1
11. Abre el dropdown de cantidad (combobox)
12. Selecciona "3" del dropdown
13. Espera actualización del resumen (2‑3 segundos)
14. Valida que la cantidad ahora sea 3
15. Valida que el total se haya actualizado (multiplicado por 3)
16. Valida que el resumen lateral se haya actualizado
17. Haz clic en el botón "Eliminar" del producto
18. Espera actualización de la página (2‑3 segundos)
19. Valida que aparezca el mensaje "El carro de compras está vacío"
20. Valida que el total del carrito sea $0
21. Valida que el icono del carrito en el header muestre $0

### Resultado Esperado

| ID      | Validación                                                                    | Estado |
|---------|-------------------------------------------------------------------------------|--------|
| CRT‑001 | Producto seleccionado carga correctamente en su página detalle                | PASS   |
| CRT‑002 | Cantidad inicial en dropdown es "1 Unidad"                                   | PASS   |
| CRT‑003 | Botón "COMPRAR" está disponible y funciona                                   | PASS   |
| CRT‑004 | Modal "Agregado al carrito" aparece después de comprar                        | PASS   |
| CRT‑005 | Botón "IR AL CARRITO" funciona correctamente                                 | PASS   |
| CRT‑006 | Página del carrito carga con URL `/cart`                                     | PASS   |
| CRT‑007 | Tabla "Tu carrito" muestra el producto agregado                              | PASS   |
| CRT‑008 | Cantidad inicial del producto en carrito es 1                                | PASS   |
| CRT‑009 | Dropdown de cantidad contiene opciones de 1 a 16 unidades                    | PASS   |
| CRT‑010 | Seleccionar cantidad "3" actualiza el dropdown                               | PENDIENTE |
| CRT‑011 | Total del producto se actualiza correctamente (x3)                           | PENDIENTE |
| CRT‑012 | Subtotal en resumen se actualiza correctamente                               | PENDIENTE |
| CRT‑013 | Ahorros en resumen se actualizan correctamente                               | PENDIENTE |
| CRT‑014 | Total general se recalcula correctamente                                     | PENDIENTE |
| CRT‑015 | Botón "Eliminar" es visible y funciona                                       | PASS   |
| CRT‑016 | Página actualiza después de eliminar producto                                | PASS   |
| CRT‑017 | Mensaje "El carro de compras está vacío" aparece                             | PASS   |
| CRT‑018 | Mensaje "No tienes productos en tu carrito de compra" aparece                | PASS   |
| CRT‑019 | Total del carrito muestra $0                                                 | PASS   |
| CRT‑020 | Icono del carrito en header muestra $0                                       | PASS   |
| CRT‑021 | Botón "IR AL INICIO" es visible después de vaciar carrito                   | PASS   |
| CRT‑022 | Sección "También te podría interesar" se muestra                             | PASS   |

### Notas

- El producto se selecciona al azar de la lista de productos disponibles en el inicio.
- El cambio de cantidad actualiza inmediatamente el total y el resumen.
- La eliminación requiere un tiempo de procesamiento de 2‑3 segundos.
- Este test case valida tanto la actualización dinámica de precios como la gestión completa del carrito.
- El icono del carrito en el header siempre refleja el total actual del carrito.
- Cuando se elimina el último producto, el carrito se vacía completamente y muestra un estado alternativo.

---

# TC-E2E-001: Validar búsqueda de repuesto desde el buscador principal

**TC ID**  
TC-E2E-001

**Descripción**  
Validar la búsqueda de repuesto "disco de freno" desde el buscador principal de kaufparts.cl

**Proceso de Negocio**  
Búsqueda de Repuestos

**Sub-Proceso**  
Búsqueda por nombre de repuesto en buscador principal

**Prioridad**  
Alta

**Datos de Prueba**  
- Término de búsqueda: "disco de freno"  
- Repuesto esperado: Disco de freno  
- Base de datos: Activa con registros disponibles  
- Cantidad de resultados esperada: Mayor a 0

**Pasos de la Prueba**  
1. Ingresar a kaufparts.cl (QA: https://qas.kaufparts.cl/).  
2. Visualizar página de inicio completamente cargada.  
3. Localizar buscador principal con placeholder "Nombre o código de repuesto...".  
4. Hacer clic en el campo de búsqueda.  
5. Ingresar texto: "disco de freno".  
6. Verificar que se despliega dropdown con sugerencias de autocompletado.  
7. Seleccionar opción "disco de frenos" del dropdown o presionar Enter.  
8. Aguardar carga de resultados de búsqueda.  
9. Verificar que la URL cambió a: /search/disco%20de%20frenos?query=disco%20de%20frenos.  
10. Validar que aparece título de búsqueda "disco de frenos" en la página.  
11. Verificar cantidad total de resultados mostrada ("357 resultados").  
12. Validar que se muestran productos disponibles (EN STOCK).  
13. Verificar información de cada producto:  
    - Marca y modelo  
    - Código de producto  
    - Nombre del repuesto  
    - Precio original y precio con descuento  
    - Porcentaje de descuento  
    - Opción de pago en cuotas (12 cuotas)  
    - Disponibilidad de envío gratis  
14. Validar que existen controles de filtrado en panel izquierdo:  
    - Categoría  
    - Subcategoría  
    - Marca  
    - Modelo  
    - Año  
    - Ancho  
    - Perfil  
    - Radio  
    - Formato del envase  
    - Ofertas  
    - CCA  
    - Volts  
    - Estado de stock  
    - Amperage  
    - Terminal  
15. Validar que existe selector de ordenamiento ("Más relevantes").  
16. Verificar existencia de botón "IR A COMPRA ASISTIDA" en la parte superior derecha.  
17. Validar paginación: Se muestran 21 productos por página.  

**Resultado Esperado**  
- Búsqueda se ejecuta correctamente  
- Todos los productos mostrados están en stock  
- Información de productos se muestra completa y correctamente formateada  
- Filtros y opciones de ordenamiento están disponibles y funcionales  
- Paginación está disponible para acceder a más productos  
- Los precios se muestran con IVA incluido  
- Envío gratis está disponible para todos los productos  
- El formulario de "Compra Asistida" está accesible  
- No hay errores en la carga de la página

**Notas Adicionales**  
- El repuesto "disco de freno" existe en la base de datos con múltiples variantes según marca y modelo  
- Se validó especialmente que los discos de freno para Mercedes-Benz están disponibles  
- La búsqueda por autocompletado mejora la experiencia del usuario  
- El sistema soporta paginación eficiente para los 357 resultados encontrados