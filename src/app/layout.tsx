import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactProvider } from "@/components/contact-provider";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Paulina Valencia · Feng Shui & Armonía", template: "%s · Paulina Valencia" },
  description: "Asesorías de Feng Shui del hemisferio sur con Paulina Valencia. Conoce los cinco agentes, cuida tu hogar y encuentra una forma más consciente de habitar.",
  applicationName: "Paulina Valencia · Feng Shui",
  openGraph: { title: "Paulina Valencia · Feng Shui & Armonía", description: "Tu espacio, tu equilibrio. Asesorías de Feng Shui para una forma más consciente de habitar.", locale: "es_CL", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-CL"><body><ContactProvider><a href="#contenido" className="skip-link">Saltar al contenido</a><Header /><main id="contenido">{children}</main><Footer /></ContactProvider></body></html>;
}
