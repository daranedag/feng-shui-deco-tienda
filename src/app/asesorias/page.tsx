import type { Metadata } from "next";
import { PageIntro, ServiceCard, ContactBanner } from "@/components/shared";
import { Icon } from "@/components/icon";
import { steps, faqs } from "@/content/site";
import { getServices } from "@/server/services/catalog";

export const metadata: Metadata = { title: "Asesorías", description: "Conoce la asesoría basal de Feng Shui, el cambio de año energético, los estudios de Bazhai, estrellas volantes y el trabajo con el entorno." };

export default function ServicesPage() {
  const services = getServices();
  return <><PageIntro eyebrow="ASESORÍAS" title="Un hogar que acompaña" accent="tu momento de vida." description="Cada espacio tiene su historia. Comenzamos por escucharlo y encontrar las recomendaciones que hacen sentido para ti y para quienes lo habitan." />
    <section className="container"><div className="service-full-grid">{services.map((service) => <div id={service.id} key={service.id} className="service-anchor"><ServiceCard service={service} expanded /></div>)}</div><div className="personal-note"><Icon name="chat" size={25} /><p>La modalidad, la duración y el valor se conversan directamente con Paulina según tu hogar y el alcance de la asesoría.</p></div></section>
    <section className="container section-space"><div className="section-heading"><div><span className="eyebrow">LA ASESORÍA BASAL, PASO A PASO</span><h2>Una mirada completa.<br /><em>Un recorrido personal.</em></h2></div></div><div className="process-grid">{steps.map((step, index) => <article key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div className="included-panel"><span className="eyebrow">¿QUÉ SE REVISA EN LA ASESORÍA?</span><div>{["Bagua Houtian y las ocho aspiraciones", "Lectura del entorno y la entrada del hogar", "Ming Gua personal de cada habitante", "Formas, colores y materiales", "Recomendaciones y talismanes", "Ceremonia de cierre y bendición del hogar"].map((item) => <span key={item}><Icon name="check" size={17} />{item}</span>)}</div></div></section>
    <section className="faq-section container section-space"><div><span className="eyebrow">CON CALMA Y CLARIDAD</span><h2>Tu primer <em>paso.</em></h2></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span><Icon name="plus" size={18} /></span></summary><p>{faq.answer}</p></details>)}</div></section><ContactBanner /></>;
}
