import type { CSSProperties } from "react";

export function Icon({ name, size = 22, className = "", style }: { name: string; size?: number; className?: string; style?: CSSProperties }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
    diagonal: <><path d="M5 19 19 5M5 5h14v14" /></>,
    leaf: <><path d="M20 3c-8-1-15 2-15 9a6 6 0 0 0 6 6c7 0 10-7 9-15Z" /><path d="m4 21 11-11M9 16v-5M9 16h5" /></>,
    tree: <><path d="m12 3-6 7h3l-5 6h7v5h2v-5h7l-5-6h3L12 3Z" /></>,
    flame: <path d="M12 3c1 5-4 5-4 9 0 2 1 3 2 3-1-4 4-3 4-7 3 3 5 5 5 8a7 7 0 1 1-14 0c0-4 3-7 7-13Z" />,
    mountain: <><path d="m2 20 7-13 5 8 3-5 5 10H2Z" /><path d="m6 13 3 2 3-2" /></>,
    circle: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /></>,
    water: <><path d="M3 9c3-5 6 5 9 0s6 5 9 0M3 15c3-5 6 5 9 0s6 5 9 0" /></>,
    home: <><path d="m3 10 9-7 9 7v11H3V10Z" /><path d="M9 21v-8h6v8" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-3 5-5 3 3-5 5-3Z" /></>,
    heart: <path d="M20 5c-3-3-7-1-8 2-1-3-5-5-8-2s-1 7 8 15c9-8 11-12 8-15Z" />,
    sparkles: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /><path d="m20 2 .5 1.5L22 4l-1.5.5L20 6l-.5-1.5L18 4l1.5-.5L20 2Z" /></>,
    door: <><path d="M5 21V3h14v18M2 21h20M9 21V5l8-2v18M13 12h.1" /></>,
    frame: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="m4 17 5-5 4 4 3-3 5 5" /><circle cx="15" cy="8" r="1" /></>,
    moon: <path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    chat: <><path d="M21 11a9 9 0 0 1-13 8l-5 2 1-5A9 9 0 1 1 21 11Z" /><path d="M8 9c1 4 3 6 7 7l2-2-3-2-1 1-2-2 1-1-2-3-2 2Z" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    plus: <path d="M12 5v14M5 12h14" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18m-14 4h3m4 0h3" /></>,
    book: <><path d="M12 5c-4-3-8-2-10-1v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Zm0 0v15" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">{paths[name] ?? paths.leaf}</svg>;
}
