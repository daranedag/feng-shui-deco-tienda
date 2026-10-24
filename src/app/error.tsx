"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <section className="container not-found"><span className="eyebrow">HAGAMOS UNA PAUSA</span><h1>No pudimos cargar<br /><em>este espacio.</em></h1><p>Ocurrió un problema temporal. Puedes intentarlo nuevamente.</p><button className="button button-primary" onClick={reset}>Volver a intentar</button></section>;
}
