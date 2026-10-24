import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/#contenido" className={`brand${light ? " brand-light" : ""}`} aria-label="Paulina Valencia · Inicio">
    <svg className="brand-mark" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="1" />
      <path d="M10 26c5-8 10 4 17-3s9-3 9-3M9 20c7-9 11 5 19-3M14 32c6-5 11 1 17-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="27" cy="11" r="2.3" fill="currentColor" />
    </svg>
    <span><span className="brand-name">paulina valencia</span><span className="brand-description">FENG SHUI & ARMONÍA</span></span>
  </Link>;
}
