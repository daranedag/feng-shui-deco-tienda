import Link from "next/link";
import { ContactButton } from "./contact-provider";
import { Icon } from "./icon";
import type { Service } from "@/content/site";

export function PageIntro({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent: string; description: string }) {
  return <section className="page-intro container"><div className="breadcrumb"><Link href="/">Inicio</Link><span>/</span><span>{eyebrow}</span></div><span className="eyebrow">{eyebrow}</span><h1>{title}<br /><em>{accent}</em></h1><p>{description}</p></section>;
}

export function ContactBanner() {
  return <section className="contact-banner container"><div className="banner-symbol" aria-hidden="true"><Icon name="sun" size={42} /></div><div><span className="eyebrow">TU HOGAR, TU PUNTO DE PARTIDA</span><h2>Hagamos espacio para <em>lo que viene.</em></h2><p>Conversemos sobre tu hogar y encontremos por dónde empezar.</p></div><ContactButton>Quiero una asesoría</ContactButton></section>;
}

export function ServiceCard({ service, expanded = false }: { service: Service; expanded?: boolean }) {
  return <article className={`service-card${service.featured ? " service-featured" : ""}`}><div className="service-card-top"><span className="card-number">{service.number}</span>{service.featured ? <span className="small-tag">EL PUNTO DE PARTIDA</span> : <Icon name={service.id === "renovacion-anual" ? "sun" : service.id === "entorno" ? "leaf" : "compass"} />}</div><span className="service-subtitle">{service.subtitle}</span><h3>{service.title}</h3><p>{service.description}</p>{expanded ? <p className="service-detail">{service.detail}</p> : null}<div className="service-card-bottom">{expanded ? <><span className="service-timing"><Icon name="calendar" size={16} />{service.timing}</span><ContactButton className="text-link" serviceId={service.id}>Consultar esta asesoría</ContactButton></> : <Link href={`/asesorias#${service.id}`} className="text-link">Conocer la asesoría <Icon name="arrow" size={17} /></Link>}</div></article>;
}
