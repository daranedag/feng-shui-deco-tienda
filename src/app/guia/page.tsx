import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactBanner } from "@/components/shared";
import { TipsExplorer } from "@/components/tips-explorer";
import { Icon } from "@/components/icon";
import { tipCategories, documentSummaries } from "@/content/site";

export const metadata: Metadata = { title: "Guía para tu hogar", description: "Consejos de Feng Shui para cuidar la entrada, el dormitorio, la cocina y el espacio de trabajo. Una guía breve basada en los documentos de Paulina Valencia." };

export default function GuidePage() {
  return <><PageIntro eyebrow="GUÍA PARA TU HOGAR" title="El equilibrio se cultiva" accent="en los detalles." description="No hace falta cambiarlo todo para empezar. Observa tu entorno y encuentra pequeñas acciones para cuidar los espacios que habitas cada día." /><section className="container"><TipsExplorer categories={tipCategories} /><p className="source-note">Recomendaciones resumidas de «Reglas básicas para un buen flujo energético en el hogar», de Paulina Valencia. Las orientaciones específicas se revisan según cada espacio en la asesoría.</p></section>
    <section className="reading-section section-space"><div className="container"><div className="section-heading"><div><span className="eyebrow">LAS IDEAS DETRÁS DE ESTA GUÍA</span><h2>Para mirar tu hogar<br /><em>con más claridad.</em></h2></div><p>Los cuatro documentos de referencia,<br />resumidos en lo esencial.</p></div><div className="reading-grid">{documentSummaries.map((document, index) => <article key={document.id}><div className="reading-top"><Icon name="book" size={24} /><span>LECTURA 0{index + 1}</span></div><h3>{document.title}</h3><p>{document.summary}</p><div className="topic-list">{document.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><Link href={document.id === "asesoria" ? "/asesorias" : document.id === "tips" ? "/guia#guide-tips-panel" : "/feng-shui"} className="text-link">Explorar el tema <Icon name="arrow" size={17} /></Link></article>)}</div></div></section><ContactBanner /></>;
}
