# Movara
 
**Tienda online de entrenamiento en casa, pensada para empezar sin perderse.**
Un catálogo corto, filtrado por objetivo, con compra en pocos pasos y envío directo desde el proveedor.
 
## ¿Qué es Movara?
 
Movara es una tienda online de accesorios de entrenamiento en casa que funciona con dropshipping: los pedidos se envían directamente desde proveedores externos, sin stock propio.
 
En lugar de mostrar cientos de productos, ofrece un catálogo corto organizado por objetivo (fuerza, movilidad, cardio y tonificar), para que una persona que empieza a entrenar sepa qué necesita y pueda comprarlo en pocos pasos.
 
## El origen del proyecto
 
Entrenar en casa es más fácil que nunca, pero elegir el material sigue siendo un laberinto: miles de productos, reseñas contradictorias y calidades desiguales.
 
Movara parte de una pregunta sencilla: **¿y si, en vez de ofrecer más opciones, ofreciéramos las adecuadas?**
 
## Visión del producto
 
Un producto pequeño y claro que resuelva bien un solo problema. El primer objetivo es validar el flujo completo (elegir, comprar, pagar y seguir el pedido) con el mínimo de funciones, y crecer solo a partir de lo que se compruebe con usuarios reales.
 
---
 
## Planificador de Producto MVP
 
### 1. Problema 🎯
Las personas que empiezan a entrenar en casa se pierden entre cientos de productos de fitness y no saben qué material comprar según su objetivo y su nivel.
 
### 2. Beneficio Principal 💡
Una tienda online con un catálogo corto de accesorios de entrenamiento en casa, filtrado por objetivo, que se compra en pocos pasos y se envía directamente desde el proveedor.
 
### 3. Características Principales ⚙️
1. Catálogo con filtro por objetivo (fuerza, movilidad, cardio, tonificar) y ficha de producto.
2. Cuenta de usuario (registro e inicio de sesión) con carrito y pedido.
3. Pago en modo test y envío del pedido a un proveedor simulado, con número de seguimiento.
Descartado para el MVP: ~~reseñas~~, ~~cupones~~, ~~panel de administración completo~~, ~~recomendador con IA~~, ~~emails de confirmación~~.
 
### 4. Flujo de Usuario 🛤️
1. Entra en la tienda y elige su objetivo de entrenamiento.
2. Ve los productos filtrados y abre la ficha de uno.
3. Lo añade al carrito e inicia sesión o se registra.
4. Paga el pedido (modo test).
5. Ve la confirmación con el estado del pedido y su número de seguimiento.
### 5. Éxito 🏆
Un usuario nuevo completa una compra, desde que elige su objetivo hasta que el pago queda confirmado, en menos de 3 minutos y sin ayuda.
 
---
 
## Funcionalidades
 
| Funcionalidad | Descripción | Estado |
|---|---|---|
| Catálogo con filtro por objetivo | Productos organizados por fuerza, movilidad, cardio y tonificar, con ficha de detalle | Interfaz hecha, back end pendiente |
| Cuenta de usuario | Registro e inicio de sesión con JWT | Planificado |
| Carrito y pedido | Añadir productos, confirmar datos de envío y crear el pedido | Interfaz de demostración, lógica pendiente |
| Pago en modo test | Cobro con Stripe en modo de pruebas | Planificado |
| Envío a proveedor simulado | El pedido pagado se envía a una API de pruebas, que devuelve un número de seguimiento | Planificado |
| Modo claro y modo noche | Se adapta al sistema y se puede cambiar manualmente | Disponible |
 
## Principios de diseño
 
- **Pocas opciones, bien elegidas.** Un catálogo corto ayuda más que uno enorme.
- **Empezar por el objetivo de la persona.** Se navega por lo que quiere conseguir, no por tipos de producto.
- **Comprar en pocos pasos.** Cada pantalla extra es una oportunidad de abandonar.
- **Ser claro con precios y plazos.** El usuario debe saber qué paga y cuándo recibirá el pedido.
- **Construir lo mínimo antes que lo máximo.** Cada función nueva tiene que justificarse con un problema real.
## Tecnologías
 
| Capa | Tecnologías |
|---|---|
| Front end | HTML · CSS · JavaScript (actual) · React (previsto) |
| Back end | Node.js · Express |
| Base de datos | PostgreSQL |
| Autenticación | JWT |
| Pagos | Stripe (modo test) |
| Infraestructura | Docker · despliegue en la nube |
| Control de versiones | Git y GitHub |
 
## Seguridad
 
Decisiones previstas para el back end (aún sin implementar):
 
- Contraseñas almacenadas con hash, nunca en texto plano.
- Autenticación con JWT y rutas protegidas.
- El precio y el total del pedido se calculan siempre en el servidor.
- Validación de los datos de entrada y CORS restringido a los dominios autorizados.
- Claves y credenciales en variables de entorno, fuera del repositorio.
- Transacciones en la base de datos para evitar vender dos veces el último producto.
---
 
## Documentación generada con IA
 
### Prompt utilizado
 
Modelo de IA utilizado: Claude (Anthropic).
 
```text
Actúa como un gerente de producto experto y crea un documento de requisitos de Producto Mínimo Viable (MVP) basado en la entrada proporcionada, siguiendo la estructura del Planificador de Producto MVP. El objetivo es diseñar la versión más simple de un producto que resuelva un problema específico del usuario, centrándose en las características principales y evitando la expansión descontrolada de características, la sobre especificación o la complejidad innecesaria. Utiliza la siguiente entrada para completar el planificador y proponer características mínimas y efectivas y un flujo de usuario. Sugiere tecnologías solo si es necesario, priorizando la simplicidad y la flexibilidad, y evita imponer restricciones alucinadas o requisitos demasiado detallados. Asegúrate de que el resultado sea claro, conciso y procesable, con una métrica de éxito medible.
 
**Entrada**:
- Problema: Las personas que empiezan a entrenar en casa se pierden entre cientos de productos de fitness y no saben qué material comprar según su objetivo y su nivel.
- Beneficio Principal: Una tienda online con un catálogo corto de accesorios de entrenamiento en casa, filtrado por objetivo, que se compra en pocos pasos y se envía directamente desde el proveedor.
 
**Instrucciones**:
1. **Problema**: Reafirma el problema y el usuario de la entrada.
2. **Beneficio Principal**: Reafirma el beneficio principal de la entrada.
3. **Características Principales**: Propón exactamente 3 características imprescindibles para ofrecer el beneficio principal. Excluye características 'agradables de tener' como diseños avanzados o funcionalidades complejas. Asegúrate de que las características sean simples y estén alineadas con la metodología MVP.
4. **Flujo de Usuario**: Describe de 3 a 5 pasos simples que muestren cómo el usuario interactúa con el producto para lograr el beneficio principal. Mantenlo lineal y mínimo.
5. **Éxito**: Define 1 objetivo medible para evaluar si el producto resuelve el problema (por ejemplo, tiempo ahorrado, satisfacción del usuario).
6. **Opcional**: Si es relevante, sugiere 1-2 tecnologías o herramientas para la implementación, pero solo si mejoran la simplicidad o la velocidad de desarrollo. Evita opiniones firmes sobre las pilas tecnológicas.
 
**Formato de Salida**:
Utiliza la estructura del Planificador de Producto MVP:
- Problema: [Problema reafirmado]
- Beneficio Principal: [Beneficio reafirmado]
- Características Principales:
  1. [Característica 1]
  2. [Característica 2]
  3. [Característica 3]
- Flujo de Usuario:
  1. [Paso 1]
  2. [Paso 2]
  3. [Paso 3]
- Éxito: [Objetivo medible]
- [Opcional] Tecnologías Sugeridas: [1-2 herramientas simples, si aplica]
 
**Restricciones**:
- Apégate a la metodología MVP: enfócate en lo mínimo necesario para validar el producto.
- Evita la expansión descontrolada de características, la sobre especificación o las limitaciones técnicas imaginarias.
- Mantén la respuesta concisa (menos de 300 palabras).
- Si la entrada está incompleta, haz suposiciones razonables basadas en el problema proporcionado y anótalas.
```
 
### Evaluación crítica
 
Revisé la salida de la IA comparándola con mi planificador y con lo que puedo construir y probar en un MVP, con foco en el back end.
 
- **Lo que mantuve:** el filtro por objetivo en el catálogo, porque es lo que responde directamente al problema. También las tecnologías sugeridas, que coinciden con las que ya manejo (React, Node.js, PostgreSQL) y con un pago en modo test.
- **Lo que quité y por qué:**
  - La búsqueda por nombre: con un catálogo corto de unos 10 productos, el filtro por objetivo es suficiente.
  - El email de confirmación: depende de un servicio externo y no es necesario para validar la compra. La confirmación se muestra en pantalla.
- **Lo que añadí o corregí:**
  - Hice explícito el registro e inicio de sesión (característica 2). La IA hablaba de "cuenta de usuario" sin concretar, y hace falta para asociar cada pedido a una persona.
  - Ajusté la métrica de éxito: "80 % de usuarios" exige una muestra que no tengo. Prefiero una prueba con unas 5 personas, observando si completan la compra sin ayuda en menos de 3 minutos.
- **Lo que me parece más difícil:** confirmar el pago con Stripe de forma fiable (el estado del pedido debe actualizarse al recibir la confirmación del pago, no solo desde el navegador) y evitar vender un producto agotado.
- **Sobre el uso de la IA:** es un buen punto de partida y respeta bien el límite de 3 características, pero tiende a añadir extras (búsqueda, email) que no son imprescindibles. Por eso hay que revisarla en lugar de aceptarla tal cual.
---
 
## Roadmap
 
**Disponible**
- Planificación del MVP y documentación
- Diseño del front end: portada, categorías, productos, modo claro y noche, animaciones al hacer scroll
**En desarrollo**
- API con Node.js, Express y PostgreSQL
- Registro e inicio de sesión con JWT
**Próximas versiones**
- Catálogo, carrito y pedidos conectados a la base de datos
- Pago en modo test con Stripe y envío al proveedor simulado
- Tests, documentación de la API y despliegue con Docker
**Fuera del MVP**
- Reseñas, cupones, panel de administración completo, recomendador con IA, varios proveedores
## Estado del proyecto
 
El repositorio contiene la documentación del MVP y el front end estático de la tienda. El back end está en desarrollo y se irá incorporando por fases.
 
## Sobre mí
 
Soy Sergio Campuzano Núñez, desarrollador Full Stack junior con interés en el desarrollo back end. Movara es el proyecto con el que practico el diseño de producto, las APIs REST y las bases de datos relacionales.
 
Uso Claude (Anthropic) como apoyo para planificar, explorar alternativas y revisar decisiones, y reviso y decido yo lo que se incorpora al proyecto.
 
## Contacto
 
[LinkedIn](https://www.linkedin.com/in/sergiocampuzano) · [GitHub](https://github.com/sergio19000)
 
