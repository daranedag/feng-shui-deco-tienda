# Verificación de la primera versión

Fecha: 23 de octubre de 2026.

## Resultado

Sitio compilado con Next.js 16.4.3, React 19.3.1 y pnpm 11.1.2. Se verificó la versión de producción servida en `http://127.0.0.1:3000`.

| Comprobación | Resultado |
| --- | --- |
| `pnpm run typecheck` | Correcto |
| `pnpm run build` | Correcto; cinco páginas principales y seis rutas del BFF |
| `pnpm run test:api` | Seis pruebas correctas, cero fallos |
| Páginas y errores | Las cinco páginas responden 200; una ruta inexistente responde 404 |
| Contacto desde la portada | El diálogo obtiene WhatsApp y correo desde el BFF |
| Contacto por asesoría | Conserva el servicio seleccionado; probado con «Cambio de año energético» |
| Teclado en contacto | Escape cierra el diálogo y devuelve el foco al botón que lo abrió |
| Consejos por ambiente | Cambian los contenidos al seleccionar una pestaña; comprobadas las teclas de flecha y Home |
| Cinco agentes | Selección de Agua y cambio al ciclo de control muestran «El agua apaga al fuego» |
| Preguntas frecuentes | La pregunta sobre el punto de partida despliega su respuesta |
| Navegación móvil | El menú abre, permite cambiar de página y se cierra tras seleccionar un enlace |
| Diseño adaptable | Comprobado a 1280, 390 y 320 px de ancho |
| Consola del navegador | Sin errores ni advertencias en los flujos revisados |
| Imagen ambiental | Carga correctamente desde los archivos locales |

## Recorrido del contacto

Botón de consulta → diálogo → `GET /api/v1/consultation` → servicio de contacto del servidor → respuesta JSON → enlaces con mensaje y asunto preparados.

Las pruebas HTTP comprueban la validación del servicio y rechazan identificadores inexistentes, vacíos, duplicados y demasiado largos. Los mensajes no se envían durante las comprobaciones; abrir el enlace de contacto queda a elección del visitante.

## Reservas y pagos

Las pruebas confirman que ambas integraciones están desactivadas. Las solicitudes a las rutas de reserva y pago devuelven 503 con un código explícito. No se crean reservas ni se inicia ningún cobro.

## Ajustes encontrados y resueltos

- Se aumentó el tamaño de los textos principales para facilitar la lectura, especialmente en móvil.
- El logotipo enlaza al comienzo del contenido de la portada, incluso desde la propia página de inicio.
- La cuadrícula de aspiraciones producía desplazamiento horizontal a 320 px. Se cambió a una columna en las pantallas más estrechas y se confirmó que el contenido queda dentro de la pantalla.

Las otras cuatro páginas no presentaron desbordes a 320 px. Después de la corrección, la página de Feng Shui también mantiene su contenido dentro de la pantalla.

## Capturas

- `preview/inicio-escritorio.jpg`: portada a 1280 × 900.
- `preview/inicio-movil.jpg`: portada a 390 × 844.

La vista previa utiliza el comando `pnpm start` después de compilar. Para editar y ver cambios en vivo, detener ese proceso e iniciar `pnpm dev`.
