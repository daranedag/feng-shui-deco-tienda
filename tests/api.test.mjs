import { test } from "node:test";
import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("el catálogo mantiene cuatro asesorías sin precios inventados", async () => {
  const response = await fetch(`${base}/api/v1/services`);
  assert.equal(response.status, 200);
  const { data } = await response.json();
  assert.equal(data.length, 4);
  assert.equal(data[0].id, "basal");
  assert.equal(new Set(data.map((service) => service.id)).size, 4);
  assert.ok(data.every((service) => !Object.hasOwn(service, "price")));
});

test("los cuatro documentos están representados en el contenido público", async () => {
  const response = await fetch(`${base}/api/v1/content`);
  assert.equal(response.status, 200);
  const { data } = await response.json();
  assert.equal(data.length, 4);
  assert.ok(data.every((document) => document.summary && document.source.endsWith(".pdf")));
});

test("el BFF entrega contacto personal con integraciones desactivadas", async () => {
  const response = await fetch(`${base}/api/v1/consultation`);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  const { data } = await response.json();
  assert.equal(data.service, null);
  assert.equal(data.bookingEnabled, false);
  assert.equal(data.paymentEnabled, false);
  assert.equal(new URL(data.whatsappUrl).hostname, "wa.me");
  assert.equal(new URL(data.whatsappUrl).pathname, "/56990909209");
  assert.ok(data.emailUrl.startsWith("mailto:fengshuipranicochile@gmail.com?"));
});

test("el contacto conserva la asesoría seleccionada sin aceptar datos arbitrarios", async () => {
  const response = await fetch(`${base}/api/v1/consultation?service=basal`);
  assert.equal(response.status, 200);
  const { data } = await response.json();
  assert.equal(data.service, "Asesoría basal de Feng Shui");
  assert.ok(new URL(data.whatsappUrl).searchParams.get("text").includes(data.service));
  for (const [query, status] of [["service=no-existe", 404], ["service=", 400], ["service=basal&service=entorno", 400], [`service=${"x".repeat(65)}`, 400]]) {
    const invalid = await fetch(`${base}/api/v1/consultation?${query}`);
    assert.equal(invalid.status, status);
    const body = await invalid.json();
    assert.ok(body.error.code);
    assert.equal(body.data, undefined);
  }
});

test("reservas y pagos rechazan operaciones y nunca simulan éxito", async () => {
  for (const [path, code] of [["bookings", "SCHEDULING_NOT_ENABLED"], ["payments", "PAYMENTS_NOT_ENABLED"]]) {
    const response = await fetch(`${base}/api/v1/${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ bookingId: "demo", amount: 1 }) });
    assert.equal(response.status, 503);
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.equal((await response.json()).error.code, code);
    assert.equal((await fetch(`${base}/api/v1/${path}`)).status, 405);
  }
  const { data } = await (await fetch(`${base}/api/v1/integrations`)).json();
  assert.equal(data.scheduling.enabled, false);
  assert.equal(data.payments.enabled, false);
});

test("las páginas principales se entregan con contenido y sin errores de servidor", async () => {
  for (const path of ["/", "/feng-shui", "/asesorias", "/guia", "/sobre-mi"]) {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes('lang="es-CL"'), path);
    assert.ok(html.includes('id="contenido"'), path);
    assert.ok(html.includes("Paulina"), path);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  }
  assert.equal((await fetch(`${base}/pagina-inexistente`)).status, 404);
});
