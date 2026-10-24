import Link from "next/link";
import { Brand } from "./brand";
import { Icon } from "./icon";
import { consultant } from "@/content/site";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Brand light /><p>Espacios en equilibrio.<br />Una forma más consciente de habitar.</p></div><div className="footer-links"><span className="eyebrow">EXPLORA</span><Link href="/feng-shui">El Feng Shui</Link><Link href="/asesorias">Asesorías</Link><Link href="/guia">Guía para tu hogar</Link><Link href="/sobre-mi">Sobre mí</Link></div><div className="footer-contact"><span className="eyebrow">SIGAMOS LA CONVERSACIÓN</span><a href={`mailto:${consultant.email}`}>{consultant.email}<Icon name="diagonal" size={15} /></a><a href={`https://wa.me/${consultant.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp · {consultant.phone}<Icon name="diagonal" size={15} /></a><span className="footer-location">Feng Shui · Hemisferio sur · Chile</span></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Paulina Valencia. Todos los derechos reservados.</span><span>Hecho para habitar en armonía <Icon name="leaf" size={14} /></span></div>
  </div></footer>;
}
