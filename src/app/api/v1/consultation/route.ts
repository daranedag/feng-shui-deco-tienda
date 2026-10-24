import { getConsultationOptions } from "@/server/services/consultation";

export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const serviceId = params.get("service");
  if (params.getAll("service").length > 1 || (serviceId !== null && (serviceId.length === 0 || serviceId.length > 64))) {
    return Response.json({ error: { code: "INVALID_SERVICE", message: "Indica una asesoría válida." } }, { status: 400, headers: { "Cache-Control": "no-store" } });
  }
  const data = getConsultationOptions(serviceId ?? undefined);
  if (!data) return Response.json({ error: { code: "SERVICE_NOT_FOUND", message: "La asesoría no existe." } }, { status: 404, headers: { "Cache-Control": "no-store" } });
  return Response.json({ data }, { headers: { "Cache-Control": "no-store" } });
}
