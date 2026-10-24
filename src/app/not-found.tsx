import Link from "next/link";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return <section className="container not-found"><span className="eyebrow">404 · VOLVAMOS A ENCONTRARNOS</span><h1>Un pequeño desvío.<br /><em>El hogar está cerca.</em></h1><p>La página que buscas no está disponible.</p><Link href="/" className="button button-primary">Volver al inicio <Icon name="arrow" size={18} /></Link></section>;
}
