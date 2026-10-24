"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "./brand";
import { ContactButton } from "./contact-provider";
import { Icon } from "./icon";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/feng-shui", label: "El Feng Shui" },
  { href: "/asesorias", label: "Asesorías" },
  { href: "/guia", label: "Guía para tu hogar" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegación principal">{links.map(({ href, label }) => <Link key={href} href={href} className={pathname === href ? "nav-link active" : "nav-link"} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>
      <ContactButton className="button button-header">Conversemos</ContactButton>
      <button className="icon-button menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
    </div>
    {menuOpen ? <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>{links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}<Icon name="arrow" size={16} /></Link>)}</nav> : null}
  </header>;
}
