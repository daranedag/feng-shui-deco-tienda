"use client";

import { useRef, useState } from "react";
import { Icon } from "./icon";
import type { elements as elementContent } from "@/content/site";

type Elements = typeof elementContent;

export function ElementsExplorer({ elements }: { elements: Elements }) {
  const [selected, setSelected] = useState(0);
  const [cycle, setCycle] = useState<"nutrition" | "control">("nutrition");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const element = elements[selected];
  const order = cycle === "nutrition" ? [0, 1, 2, 3, 4] : [0, 2, 4, 1, 3];
  return <div className="elements-explorer">
    <div className="element-tabs" role="tablist" aria-label="Los cinco agentes">{elements.map((item, index) => <button key={item.id} id={`element-tab-${item.id}`} ref={(node) => { tabsRef.current[index] = node; }} role="tab" aria-selected={selected === index} aria-controls="element-panel" tabIndex={selected === index ? 0 : -1} className={`element-tab${selected === index ? " selected" : ""}`} onClick={() => setSelected(index)} onKeyDown={(event) => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % elements.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + elements.length) % elements.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = elements.length - 1;
      else return;
      event.preventDefault(); setSelected(next); tabsRef.current[next]?.focus();
    }}><Icon name={item.symbol} size={27} style={{ color: item.color }} /><span>{item.name}</span></button>)}</div>
    <div className="element-panel" role="tabpanel" id="element-panel" aria-labelledby={`element-tab-${element.id}`} tabIndex={0}>
      <div className="element-visual" style={{ "--element-color": element.color } as React.CSSProperties}><div className="element-orbit orbit-one" /><div className="element-orbit orbit-two" /><div className="element-orbit orbit-three" /><span className="element-center"><Icon name={element.symbol} size={58} /></span><span className="element-visual-label">{element.concept}</span></div>
      <div className="element-description"><span className="eyebrow">{element.season}</span><h3>{element.name}: <em>{element.concept.toLowerCase()}.</em></h3><p>{element.description}</p><div className="cycle-controls" aria-label="Tipo de ciclo"><button aria-pressed={cycle === "nutrition"} onClick={() => setCycle("nutrition")}>Ciclo de nutrición</button><button aria-pressed={cycle === "control"} onClick={() => setCycle("control")}>Ciclo de control</button></div><p className="cycle-explanation" aria-live="polite"><Icon name="arrow" size={18} />{cycle === "nutrition" ? element.feeds : element.controls}</p></div>
    </div>
    <div className="cycle-sequence" aria-label={`Secuencia del ciclo de ${cycle === "nutrition" ? "nutrición" : "control"}`}>{order.map((index, position) => <span key={elements[index].id}><button aria-label={`Explorar ${elements[index].name}`} onClick={() => { setSelected(index); tabsRef.current[index]?.focus(); }} className={selected === index ? "sequence-active" : ""}>{elements[index].name}</button><Icon name="arrow" size={14} />{position === order.length - 1 ? <span className="cycle-return">Madera</span> : null}</span>)}</div>
  </div>;
}
