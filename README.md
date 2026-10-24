# Paulina Valencia · Feng Shui & Armonía

Sitio de asesorías de Feng Shui en español de Chile, desarrollado con Next.js App Router, React y TypeScript. Incluye una capa BFF mediante Route Handlers y una identidad visual provisional.

## Ejecutar

Requiere Node.js 22 o superior.

```sh
pnpm install
pnpm dev
```

Abrir http://127.0.0.1:3000. Se utiliza exclusivamente pnpm (versión 11.1.2 fijada en `packageManager`). En PowerShell, si la política de scripts lo requiere, usar `pnpm.cmd`.

```sh
pnpm build
pnpm start
```

Verificación de tipos: `pnpm typecheck`. Con el servidor iniciado, ejecutar `pnpm test:api`. Las pruebas recorren las páginas y el contrato HTTP del BFF. `TEST_BASE_URL` permite probar otra dirección. Las instalaciones reproducibles utilizan `pnpm install --frozen-lockfile`.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación, asesorías, proceso, consejos por ambiente y preguntas frecuentes |
| `/feng-shui` | Conceptos, hemisferio sur, explorador de los cinco agentes y ciclos, ocho aspiraciones |
| `/asesorias` | Asesoría basal, renovación anual, estudios avanzados y trabajo con el entorno |
| `/guia` | Consejos filtrables por ambiente y síntesis de los cuatro PDF |
| `/sobre-mi` | Presentación y formación de Paulina según los documentos |

Los botones de consulta abren un diálogo accesible y cargan las opciones reales de WhatsApp y correo desde el BFF. No se envía ningún mensaje automáticamente y no se guarda información personal.

## Organización

```text
src/app/                     Páginas, metadatos y estilos
src/app/api/v1/              BFF público y versionado
src/components/              Navegación, contacto, pestañas y componentes visuales
src/content/site.ts          Contenido editorial y datos de contacto
src/server/services/         Servicios de catálogo y contacto, exclusivos del servidor
src/server/integrations/     Contratos para los futuros proveedores
public/images/               Imagen ambiental generada y optimizada
docs/                        Fuentes PDF y decisiones del proyecto
tests/                       Verificación HTTP del sitio y BFF
```

Los Server Components consumen los servicios del servidor directamente. El navegador usa el BFF para las interacciones; se evita llamar a la propia API desde el servidor. Patrón de referencia: https://nextjs.org/docs/app/guides/backend-for-frontend.

## BFF

| Método y ruta | Resultado |
| --- | --- |
| `GET /api/v1/services` | Catálogo de cuatro asesorías, sin precios no confirmados |
| `GET /api/v1/content` | Resumen y procedencia de los cuatro documentos |
| `GET /api/v1/consultation?service=basal` | Contacto y mensaje preparado para una asesoría válida; el parámetro es opcional |
| `GET /api/v1/integrations` | Cal.com y Mercado Pago explícitamente desactivados |
| `POST /api/v1/bookings` | `503 SCHEDULING_NOT_ENABLED`; no crea reservas |
| `POST /api/v1/payments` | `503 PAYMENTS_NOT_ENABLED`; no inicia cobros |

Respuesta normal: `{ "data": ... }`. Errores: `{ "error": { "code": "...", "message": "..." } }`. El contacto valida el identificador del servicio y rechaza parámetros vacíos, duplicados o excesivos. Las respuestas de contacto, integración y operaciones desactivadas usan `Cache-Control: no-store`.

## Próxima etapa: Cal.com y Mercado Pago

Los proveedores están separados por interfaces en `src/server/integrations/contracts.ts`. Los contratos son puntos de extensión, no implementaciones funcionales.

Para activar el flujo se debe definir primero modalidad, duración, precios, disponibilidad, política de cancelación y el orden entre reserva y pago. Luego:

1. Implementar los adaptadores del lado servidor; mantener credenciales fuera del navegador.
2. Persistir las reservas, estados de pago e identificadores de eventos en una base de datos.
3. Implementar autenticación/autorización según el flujo, validación de solicitudes, límites de uso e idempotencia.
4. Obtener el precio de un catálogo confiable en el servidor, asociado a la reserva; nunca aceptar el monto calculado por el cliente.
5. Verificar webhooks firmados y confirmar pagos con el proveedor. Una URL de retorno no acredita un pago.
6. Coordinar expiración de reservas, pagos pendientes, reembolsos y cancelaciones.
7. Probar con las cuentas de prueba de ambos proveedores antes de activar la experiencia pública.

No se necesitan variables de entorno, cuentas externas ni base de datos para esta primera versión.

## Diseño y contenido

Ver `docs/analisis-y-diseno.md` para el análisis documental, opciones investigadas, referencias, paleta y decisiones editoriales. El nombre personal, el correo, el teléfono y la formación proceden de los documentos. No se agregaron testimonios, precios, duración, estadísticas, retratos ni proyectos de clientes.

La revisión de la versión inicial está registrada en `docs/verificacion.md`, con capturas de escritorio y móvil en `docs/preview/`.

La imagen es una ambientación conceptual generada con IA, no una fotografía de un proyecto real. El símbolo de viento y agua y la marca tipográfica son una propuesta provisional. La imagen y la tipografía DM Sans se sirven localmente; los titulares usan Georgia con alternativas serif del sistema. El sitio no solicita fuentes a Google Fonts.

## Publicación

Este proyecto requiere alojamiento que ejecute Next.js en Node.js para conservar el BFF. No usar una exportación puramente estática. Esta entrega se prepara en la carpeta local del proyecto; no se ha publicado en un dominio ni conectado a proveedores de reservas o pagos.
