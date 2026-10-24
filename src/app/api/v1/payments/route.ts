export function POST() {
  return Response.json({ error: { code: "PAYMENTS_NOT_ENABLED", message: "Los pagos en línea aún no están disponibles. No se ha iniciado ningún cobro." } }, { status: 503, headers: { "Cache-Control": "no-store" } });
}
