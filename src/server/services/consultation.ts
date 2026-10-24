import "server-only";
import { consultant } from "@/content/site";
import { getService } from "./catalog";

export function getConsultationOptions(serviceId?: string) {
  const service = serviceId ? getService(serviceId) : undefined;
  if (serviceId && !service) return null;

  const message = service
    ? `Hola, Paulina. Me gustaría conocer más sobre la asesoría «${service.subtitle}» para mi hogar.`
    : "Hola, Paulina. Me gustaría conversar sobre una asesoría de Feng Shui para mi hogar.";
  const subject = service ? `Consulta: ${service.subtitle}` : "Consulta sobre asesoría de Feng Shui";

  return {
    name: consultant.name,
    email: consultant.email,
    phone: consultant.phone,
    emailUrl: `mailto:${consultant.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
    whatsappUrl: `https://wa.me/${consultant.whatsapp}?text=${encodeURIComponent(message)}`,
    service: service?.subtitle ?? null,
    bookingEnabled: false as const,
    paymentEnabled: false as const,
  };
}
