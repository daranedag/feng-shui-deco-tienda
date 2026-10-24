export function GET() {
  return Response.json({ data: { scheduling: { provider: "cal.com", enabled: false }, payments: { provider: "mercado-pago", enabled: false }, contactMode: "personal" } }, { headers: { "Cache-Control": "no-store" } });
}
