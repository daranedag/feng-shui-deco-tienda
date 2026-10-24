import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, ContactBanner } from "@/components/shared";
import { ContactButton } from "@/components/contact-provider";
import { Icon } from "@/components/icon";
import { consultant } from "@/content/site";

export const metadata: Metadata = { title: "Sobre Paulina", description: "Conoce a Paulina Valencia Pérez, constructora civil y diplomada en Feng Shui del hemisferio sur y Feng Shui Pránico." };

export default function AboutPage() {
  return <><PageIntro eyebrow="SOBRE MÍ" title="Una mirada al espacio." accent="Una conexión contigo." description="Soy Paulina Valencia Pérez. Mi formación reúne la construcción civil, el Feng Shui del hemisferio sur y el Feng Shui Pránico." /><section className="about-layout container"><div className="about-image"><Image src="/images/hogar-en-equilibrio.webp" alt="Ambientación ilustrativa con luz, vegetación y materiales naturales" fill sizes="(max-width: 760px) 100vw, 45vw" /><span>Una forma consciente de habitar.</span></div><div className="about-copy"><span className="eyebrow">PAULINA VALENCIA PÉREZ</span><h2>El hogar como<br /><em>punto de encuentro.</em></h2><p>El espacio se puede observar desde sus formas y sus materiales, y también desde la manera en que lo vivimos. Mi propuesta de asesoría reúne esas miradas para acompañarte en la armonización de tu hogar.</p><p>El trabajo comienza con una lectura del entorno y de sus habitantes. Desde ahí, revisamos las áreas del hogar y las recomendaciones que pueden acompañar sus necesidades.</p><div className="qualifications">{consultant.qualifications.map((item) => <span key={item}><Icon name="check" size={17} />{item}</span>)}</div><ContactButton>Conversemos sobre tu hogar</ContactButton></div></section><ContactBanner /></>;
}
