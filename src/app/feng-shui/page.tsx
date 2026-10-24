import type { Metadata } from "next";
import { PageIntro, ContactBanner } from "@/components/shared";
import { ElementsExplorer } from "@/components/elements-explorer";
import { Icon } from "@/components/icon";
import { elements } from "@/content/site";

export const metadata: Metadata = { title: "El Feng Shui", description: "Descubre el Feng Shui del hemisferio sur, los cinco agentes, sus ciclos y las ocho aspiraciones del hogar." };

const aspirations = [
  { name: "Salud y familia", text: "Las raíces y lo que nos conecta.", icon: "tree" },
  { name: "Prosperidad", text: "El crecimiento y el desarrollo.", icon: "leaf" },
  { name: "Reconocimiento", text: "Lo que compartimos con el mundo.", icon: "sun" },
  { name: "Amor y relaciones", text: "Los vínculos que nos sostienen.", icon: "heart" },
  { name: "Futuro y proyectos", text: "Lo que queremos hacer crecer.", icon: "sparkles" },
  { name: "Comunicaciones", text: "La conexión con otras personas.", icon: "chat" },
  { name: "Trabajo y camino", text: "El esfuerzo y nuestro recorrido.", icon: "water" },
  { name: "Sabiduría", text: "El conocimiento que acumulamos.", icon: "mountain" },
];

export default function FengShuiPage() {
  return <>
    <PageIntro eyebrow="EL FENG SHUI" title="El arte de habitar" accent="en sintonía." description="Una tradición que nos invita a mirar el espacio como parte de nuestra vida: lo que nos rodea y la manera en que nos sentimos en él." />
    <section className="philosophy-grid container"><article><span className="mini-number">01 / EL ORIGEN</span><h2>Viento <em>y agua.</em></h2><p>El Feng Shui es un sistema filosófico chino de origen taoísta basado en la ocupación consciente y armónica del espacio. Su nombre remite al viento y al agua, dos maneras de comprender el movimiento y la contención.</p><p>Desde esta tradición, el Qi representa la energía que circula por el entorno. El yin y el yang expresan polaridades complementarias, presentes en los ritmos de la naturaleza.</p></article><article className="hemisphere-panel"><Icon name="compass" size={38} /><span className="mini-number">02 / NUESTRA MIRADA</span><h2>Desde el<br /><em>hemisferio sur.</em></h2><p>El recorrido del sol, las estaciones y las orientaciones se interpretan desde el lugar en que vivimos. La práctica de Paulina toma como referencia el Feng Shui del hemisferio sur.</p><span className="quiet-note">La naturaleza como punto de encuentro entre el hogar y sus habitantes.</span></article></section>
    <section className="container section-space"><div className="section-heading"><div><span className="eyebrow">CINCO AGENTES, UN MISMO EQUILIBRIO</span><h2>La naturaleza <em>dentro de casa.</em></h2></div><p>Explora cada agente y descubre<br />cómo se relaciona con los demás.</p></div><ElementsExplorer elements={elements} /><p className="source-note">Basado en «Ciclos de nutrición y control», material de Paulina Valencia con extractos de «Feng Shui en el hemisferio Sur», de Sylvia Galleguillos.</p></section>
    <section className="aspirations-section section-space"><div className="container"><div className="section-heading"><div><span className="eyebrow">UNA LECTURA DE TU ESPACIO</span><h2>Las ocho aspiraciones <em>del hogar.</em></h2></div><p>El Bagua Houtian organiza el recorrido<br />de estas áreas durante la asesoría.</p></div><div className="aspirations-grid">{aspirations.map((item) => <article key={item.name}><Icon name={item.icon} size={25} /><h3>{item.name}</h3><p>{item.text}</p></article>)}</div></div></section>
    <ContactBanner />
  </>;
}
