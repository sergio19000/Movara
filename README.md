#Movara

Proyecto de desarrollo con fines formativos, no es un negocio en funcionamiento.

1. Idea en una frase

Una tienda online de accesorios de entrenamiento en casa para personas que quieren empezar a hacer ejercicio sin gimnasio, que vende productos de proveedores externos (dropshipping) sin mantener stock propio.

2. Problema y propuesta de valor
Problema: quien empieza a entrenar en casa no sabe qué material comprar y se pierde entre cientos de productos de calidad desigual.
Propuesta de valor: un catálogo corto, filtrado por objetivo (tonificar, movilidad, fuerza, cardio) y por nivel, en lugar de "vender de todo".
Posible diferenciador (fase posterior): recomendación de productos con IA según el objetivo del usuario.
3. Usuarios
Perfil	Descripción
Cliente	Principiante o intermedio, 18-40 años, compra desde el móvil, busca precio razonable y envío claro.
Administrador	Gestiona el catálogo, revisa los pedidos y los reenvía al proveedor.
4. Funciones del MVP
Prioridad	Funciones
Imprescindibles	Registro y login (JWT), catálogo con búsqueda y filtros por categoría, ficha de producto, carrito, creación de pedido, pago en modo test (Stripe)
Deseables	Panel de administración (alta y edición de productos, lista de pedidos), estados del pedido, email de confirmación
Futuras	Reseñas, cupones, recomendador con IA, sincronización automática de stock, varios proveedores
5. Flujo de dropshipping
El cliente paga el pedido.
El sistema lo registra como pagado y lo envía al proveedor (en el MVP, una API simulada).
El proveedor devuelve un número de seguimiento.
El pedido pasa a enviado y se informa al cliente.
Si el producto no está disponible, el pedido se marca como incidencia y el administrador decide: reembolso o alternativa.
6. Métricas de éxito del MVP
Un usuario completa una compra de principio a fin sin ayuda.
El pedido pasa por todos sus estados sin errores.
No se pueden crear pedidos con productos agotados.
7. Supuestos y riesgos
Los proveedores pueden tardar en enviar, lo que afecta a la experiencia del cliente.
Los márgenes son ajustados y las devoluciones cuestan dinero.
Un negocio real implicaría alta como autónomo, normativa de consumo e IVA, fuera del alcance de este MVP.
El pago es solo en modo test y el proveedor es simulado.
8. Fuera de alcance (a propósito)

Pasarelas de pago reales, gestión fiscal, logística real, aplicación móvil nativa.

9. Stack previsto

React · Node.js · PostgreSQL · JWT · Stripe (modo test) · Docker · despliegue en la nube

10. Documento de requisitos (generado con IA)

Prompt utilizado:

Actúa como analista de producto. Con esta descripción de un MVP de tienda dropshipping, genera historias de usuario con criterios de aceptación y prioriza por MoSCoW.

Roles: Cliente (C) y Administrador (A).

MUST (imprescindible)
HU-01 Registro e inicio de sesión

Como cliente, quiero registrarme e iniciar sesión para poder comprar y ver mis pedidos.

Puedo crear una cuenta con email y contraseña.
No se permite registrar un email ya existente.
La contraseña se guarda cifrada (hash), nunca en texto plano.
Al iniciar sesión recibo un token JWT y las rutas protegidas lo exigen.
Con credenciales incorrectas se muestra un error sin revelar cuál falló.
HU-02 Ver catálogo

Como cliente, quiero ver el listado de productos para elegir qué comprar.

Cada producto muestra imagen, nombre, precio y disponibilidad.
El listado está paginado.
Los productos agotados se muestran como "No disponible".
HU-03 Buscar y filtrar

Como cliente, quiero buscar y filtrar por categoría y objetivo para encontrar material adecuado a mi nivel.

Puedo buscar por nombre.
Puedo filtrar por categoría (fuerza, movilidad, cardio, tonificar).
Los filtros se pueden combinar y quitar.
Si no hay resultados, aparece un mensaje claro.
HU-04 Ficha de producto

Como cliente, quiero ver el detalle de un producto para decidir si lo compro.

Se muestran descripción, precio, imágenes y plazo de envío estimado.
Puedo añadirlo al carrito desde la ficha.
Un producto agotado no se puede añadir.
HU-05 Carrito

Como cliente, quiero gestionar un carrito para revisar mi compra antes de pagar.

Puedo añadir, quitar y cambiar la cantidad de productos.
El total se recalcula al instante.
No puedo pedir más unidades que las disponibles.
HU-06 Crear pedido

Como cliente, quiero confirmar mi pedido con mis datos de envío para recibirlo en casa.

Debo estar autenticado.
Introduzco dirección, ciudad, código postal y teléfono, con validación.
El pedido se crea con estado "pendiente de pago".
Se guarda el precio vigente en el momento de la compra.
HU-07 Pago en modo test

Como cliente, quiero pagar mi pedido para completar la compra.

El pago se hace con Stripe en modo test.
Si el pago es correcto, el pedido pasa a "pagado".
Si falla, el pedido sigue "pendiente" y veo un mensaje de error.
El estado se actualiza al recibir la confirmación (webhook), no solo desde el navegador.
HU-08 Evitar ventas sin stock

Como administrador, quiero que el sistema impida vender productos agotados para evitar incidencias.

Al crear el pedido se comprueba la disponibilidad.
Dos compras simultáneas del último artículo no pueden ser ambas válidas (transacción en base de datos).
HU-09 Envío del pedido al proveedor (simulado)

Como administrador, quiero que los pedidos pagados lleguen al proveedor para que los envíe.

Al pasar a "pagado", se envía automáticamente a la API simulada del proveedor.
La respuesta devuelve un número de seguimiento que se guarda en el pedido.
El pedido pasa a "enviado".
SHOULD (importante, si hay tiempo)
HU-10 Panel de administración de productos

Como administrador, quiero crear, editar y desactivar productos para mantener el catálogo.

Solo usuarios con rol admin acceden.
Puedo crear y editar nombre, descripción, precio, categoría, imagen y stock.
Puedo desactivar un producto sin borrar su historial de pedidos.
HU-11 Lista y estados de pedidos

Como administrador, quiero ver todos los pedidos y su estado para hacer seguimiento.

Puedo filtrar por estado (pendiente, pagado, enviado, entregado, incidencia).
Veo el detalle de cada pedido y su cliente.
HU-12 Mis pedidos

Como cliente, quiero consultar mis pedidos y su estado para saber cuándo llegará mi compra.

Veo mi historial ordenado por fecha.
Veo el número de seguimiento cuando existe.
HU-13 Email de confirmación

Como cliente, quiero recibir un email al pagar para tener constancia de mi compra.

Se envía al pasar a "pagado", con resumen del pedido.
COULD (deseable, si sobra tiempo)
HU-14 Gestión de incidencias

Como administrador, quiero marcar un pedido como incidencia cuando el proveedor no puede cumplirlo, para decidir entre reembolso o alternativa.

Un pedido pasa a "incidencia" si el proveedor responde con error o sin stock.
Puedo registrar la decisión tomada.
HU-15 Despliegue con Docker y documentación de la API

Como desarrollador, quiero ejecutar el proyecto con un comando y consultar la API documentada.

docker compose up levanta frontend, backend y base de datos.
Existe documentación de endpoints (Swagger/OpenAPI).
WON'T (fuera de este MVP)
Reseñas y valoraciones de clientes.
Cupones y descuentos.
Recomendador de productos con IA.
Sincronización automática de stock con varios proveedores.
Pagos reales, gestión fiscal y logística real.
Aplicación móvil nativa.

11. Evaluación crítica

Usé la IA para generar el primer borrador de los requisitos y después lo revisé pensando en lo que puedo construir y probar en un MVP, con foco en el back end.

Qué moví de prioridad y por qué: pasé el email de confirmación (HU-13) de "Should" a "Could". Depende de un servicio externo de correo y no aporta al flujo principal de compra. Prefiero asegurar antes el pago y el envío al proveedor.
Qué añadí y por qué:
Un mínimo de 8 caracteres en la contraseña (HU-01), porque el borrador no definía ninguna regla.
Que el carrito se conserve al recargar la página (HU-05), ya que es un comportamiento que un usuario espera.
Que el pedido no se pierda si falla el proveedor (HU-09), dejándolo en "pagado" con el error registrado para reintentarlo. El borrador solo cubría el caso en que todo sale bien.
La recuperación de contraseña como "Won't": es útil, pero la dejo fuera conscientemente para no ampliar el alcance.
Qué corregí y por qué: el borrador dejaba abierto de dónde sale el precio del pedido. Añadí que el total se calcula siempre en el servidor (HU-06), porque confiar en el precio que manda el navegador permitiría manipularlo.
Qué partes me parecen más difíciles: los webhooks de Stripe (HU-07) y la prevención de ventas simultáneas del último artículo (HU-08), que requiere transacciones en la base de datos. Si voy justo de tiempo, simplificaré primero la integración con el proveedor, que ya es simulada.
Qué cambiaría con más tiempo: añadiría tests de integración para el flujo de pago y pedido, documentación de la API con Swagger y un panel de administración más completo.
Sobre el uso de la IA: el documento es un buen punto de partida, pero daba por buenos criterios vagos y no pensaba en los casos de error. Por eso hay que revisarlo en vez de copiarlo tal cual.
