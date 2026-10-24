"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./icon";

type ContactData = { name: string; email: string; phone: string; emailUrl: string; whatsappUrl: string; service: string | null; bookingEnabled: false; paymentEnabled: false };
const ContactContext = createContext<((serviceId?: string) => void) | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const [data, setData] = useState<ContactData | null>(null);
  const [error, setError] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

  useEffect(() => () => controllerRef.current?.abort(), []);

  const open = useCallback((serviceId?: string) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setSelectedService(serviceId);
    setData(null);
    setError(false);
    dialogRef.current?.showModal();
    closeRef.current?.focus();
    const query = serviceId ? `?service=${encodeURIComponent(serviceId)}` : "";
    fetch(`/api/v1/consultation${query}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("No se pudo cargar el contacto");
        const body = await response.json();
        setData(body.data as ContactData);
      })
      .catch((cause: unknown) => {
        if (!(cause instanceof Error && cause.name === "AbortError")) setError(true);
      });
  }, []);

  return <ContactContext.Provider value={open}>
    {children}
    <dialog ref={dialogRef} className="contact-dialog" aria-labelledby="contact-heading" onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close(); }}>
      <div className="contact-dialog-inner">
        <button ref={closeRef} className="icon-button dialog-close" aria-label="Cerrar contacto" onClick={() => dialogRef.current?.close()}><Icon name="close" /></button>
        <span className="eyebrow">UN ESPACIO PARA CONVERSAR</span>
        <h2 id="contact-heading">Todo comienza<br />con <em>una conversación.</em></h2>
        <p>Cuéntame sobre tu hogar y lo que te gustaría acompañar. Revisaremos el alcance, la modalidad y el valor de tu asesoría.</p>
        <div aria-live="polite" aria-busy={!data && !error}>
          {!data && !error ? <p className="contact-loading">Preparando las opciones de contacto…</p> : null}
          {error ? <div className="contact-error"><p>No pudimos cargar las opciones. Inténtalo nuevamente.</p><button className="button button-primary" onClick={() => open(selectedService)}>Volver a intentar <Icon name="arrow" size={18} /></button></div> : null}
          {data ? <>
            {data.service ? <span className="service-selection">Tu interés: {data.service}</span> : null}
            <a href={data.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-option"><Icon name="chat" size={26} /><span><strong>Conversemos por WhatsApp</strong><small>{data.phone}</small></span><Icon name="diagonal" size={20} /></a>
            <a href={data.emailUrl} className="contact-option"><Icon name="mail" size={26} /><span><strong>Prefiero escribir un correo</strong><small>{data.email}</small></span><Icon name="arrow" size={20} /></a>
            <p className="contact-note">Por ahora coordinamos de forma personal. La agenda y el pago en línea estarán disponibles más adelante.</p>
          </> : null}
        </div>
      </div>
    </dialog>
  </ContactContext.Provider>;
}

export function ContactButton({ children, className = "button button-primary", serviceId, arrow = true }: { children: ReactNode; className?: string; serviceId?: string; arrow?: boolean }) {
  const open = useContext(ContactContext);
  return <button className={className} onClick={() => open?.(serviceId)}>{children}{arrow ? <Icon name="arrow" size={18} /> : null}</button>;
}
