import { getContent } from "@/server/services/catalog";

export function GET() {
  return Response.json({ data: getContent() }, { headers: { "Cache-Control": "public, max-age=300, stale-while-revalidate=600" } });
}
