import "server-only";
import { services, documentSummaries } from "@/content/site";

// Server Components and the BFF share this service; no internal HTTP round trip.
export function getServices() {
  return services;
}

export function getService(id: string) {
  return services.find((service) => service.id === id);
}

export function getContent() {
  return documentSummaries;
}
