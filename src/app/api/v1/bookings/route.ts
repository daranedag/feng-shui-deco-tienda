export function POST() {
  return Response.json({ error: { code: "SCHEDULING_NOT_ENABLED", message: "La agenda en línea aún no está disponible. Puedes coordinar una asesoría directamente con Paulina." } }, { status: 503, headers: { "Cache-Control": "no-store" } });
}
