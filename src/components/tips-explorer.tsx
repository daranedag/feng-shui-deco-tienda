"use client";

import { useRef, useState } from "react";
import { Icon } from "./icon";
import type { tipCategories } from "@/content/site";

export function TipsExplorer({ categories, compact = false }: { categories: typeof tipCategories; compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const category = categories[selected];
  const id = compact ? "home-tips" : "guide-tips";
  return <div className="tips-explorer"><div className="guide-tabs" role="tablist" aria-label="Consejos por espacio">{categories.map((item, index) => <button key={item.id} id={`${id}-tab-${item.id}`} ref={(node) => { refs.current[index] = node; }} role="tab" aria-selected={selected === index} aria-controls={`${id}-panel`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault(); setSelected(next); refs.current[next]?.focus();
  }}>{item.label}</button>)}</div><div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${category.id}`} tabIndex={0}><p className="tips-intro">{category.intro}</p><div className={`tips-grid${compact ? " tips-compact" : ""}`}>{category.tips.slice(0, compact ? 3 : undefined).map((tip, index) => <article className="tip-card" key={tip.title}><div className="tip-card-top"><Icon name={tip.icon} size={28} /><span>0{index + 1}</span></div><h3>{tip.title}</h3><p>{tip.text}</p></article>)}</div></div></div>;
}
