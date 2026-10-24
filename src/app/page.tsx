import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "@/components/contact-provider";
import { Icon } from "@/components/icon";
import { ContactBanner, ServiceCard } from "@/components/shared";
import { TipsExplorer } from "@/components/tips-explorer";
import { services, steps, tipCategories, faqs } from "@/content/site";

export default function HomePage() {
  return <>
    <section className="hero container">
      <div className="hero-copy"><div className="hero-eyebrow"><span />FENG SHUI · HEMISFERIO SUR</div><h1>Tu espacio,<br /><em>tu equilibrio.</em></h1><p className="hero-description">Tu hogar es mucho más que un lugar.<br className="desktop-break" /> Es el espacio donde tu vida sucede.</p><p className="hero-secondary">Te acompaño a armonizarlo con la naturaleza, para que cada rincón conecte contigo y con lo que quieres vivir.</p><div className="hero-actions"><ContactButton>Encuentra tu armonía</ContactButton><Link className="text-link" href="/feng-shui">Descubre el Feng Shui <Icon name="arrow" size={17} /></Link></div><div className="hero-signature"><span className="signature-line" /><div><span>Paulina Valencia</span><small>Constructora civil & asesora de Feng Shui</small></div></div></div>
      <div className="hero-image-wrap"><Image src="/images/hogar-en-equilibrio.webp" alt="Interior ilustrativo de un hogar sereno, con luz natural, madera y vegetación" fill priority sizes="(max-width: 760px) 100vw, 52vw" className="hero-image" /><div className="image-stamp" aria-hidden="true"><span>HABITAR</span><Icon name="leaf" size={28} /><span>EN ARMONÍA</span></div><div className="image-caption"><span className="caption-line" /><span>Naturaleza. Intención. Equilibrio.</span></div><span className="image-corner-label">EL BIENESTAR EMPIEZA EN CASA</span></div>
    </section>

    <div className="principles-strip"><div className="container principles-inner"><span><Icon name="leaf" />En conexión con la naturaleza</span><span><Icon name="compass" />Una mirada a tu espacio</span><span><Icon name="heart" />Armonía para tu vida cotidiana</span></div></div>

    <section className="intro-section container section-space"><div><span className="eyebrow">UNA FORMA CONSCIENTE DE HABITAR</span><h2>Cuando tu hogar fluye,<br /><em>tú también.</em></h2></div><div className="intro-text"><p>El Feng Shui nos invita a observar la relación entre nuestro entorno y la manera en que lo habitamos. La luz, los materiales, los colores y la disposición de los objetos forman parte de esa conversación.</p><p>A través de los cinco agentes de la naturaleza y una mirada personal a tu hogar, buscamos un espacio más armónico, conectado con tu momento de vida.</p><Link className="text-link" href="/feng-shui">Conoce esta filosofía <Icon name="arrow" size={17} /></Link></div></section>

    <section className="services-section section-space"><div className="container"><div className="section-heading"><div><span className="eyebrow">ASESORÍAS QUE ACOMPAÑAN</span><h2>Cada hogar tiene <em>su camino.</em></h2></div><Link href="/asesorias" className="text-link">Todas las asesorías <Icon name="arrow" size={17} /></Link></div><div className="services-grid">{services.slice(0, 3).map((service) => <ServiceCard service={service} key={service.id} />)}</div></div></section>

    <section className="process-section container section-space"><div className="section-heading"><div><span className="eyebrow">EL CAMINO HACIA LA ARMONÍA</span><h2>Escuchar. Observar. <em>Transformar.</em></h2></div><p>Una asesoría pensada para tu hogar<br />y las personas que lo habitan.</p></div><div className="process-grid">{steps.map((step, index) => <article key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <section className="home-guide section-space"><div className="container"><div className="section-heading"><div><span className="eyebrow">PEQUEÑOS CAMBIOS, NUEVAS SENSACIONES</span><h2>La armonía también está<br />en <em>lo cotidiano.</em></h2></div><Link className="text-link" href="/guia">Explora la guía para tu hogar <Icon name="arrow" size={17} /></Link></div><TipsExplorer categories={tipCategories} compact /></div></section>

    <section className="faq-section container section-space"><div><span className="eyebrow">RESOLVAMOS TUS DUDAS</span><h2>Antes de<br /><em>comenzar.</em></h2><p>Un poco más de claridad<br />para dar el primer paso.</p></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span><Icon name="plus" size={18} /></span></summary><p>{faq.answer}</p></details>)}</div></section>
    <ContactBanner />
  </>;
}
