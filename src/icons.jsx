/** icons.jsx — all-inline SVG icon set. Zero external requests. */

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function SpiderMark({ size = 22, color = '#e11d2e' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="13.5" r="3.4" fill={color} />
      <circle cx="12" cy="8.9" r="1.9" fill="#1d1d1f" />
      <g stroke="#1d1d1f" strokeWidth="1.3" strokeLinecap="round" fill="none">
        <path d="M9.2 12.2 5.4 9.8M9 14.4l-4.2.4M9.6 16.2l-3.2 2.6" />
        <path d="M14.8 12.2l3.8-2.4M15 14.4l4.2.4M14.4 16.2l3.2 2.6" />
      </g>
      <path d="M12 1.5v4.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconAgent({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <rect x="6" y="8" width="22" height="16" rx="4" />
        <circle cx="13" cy="15" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="21" cy="15" r="1.6" fill="currentColor" stroke="none" />
        <path d="M13 20h8M17 8V4M10 28v-4M24 28v-4" />
      </g>
    </svg>
  );
}

export function IconStack({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M17 4 30 10.5 17 17 4 10.5Z" />
        <path d="M4 17l13 6.5L30 17" />
        <path d="M4 23.5 17 30l13-6.5" />
      </g>
    </svg>
  );
}

export function IconFront({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <rect x="4" y="6" width="26" height="20" rx="3" />
        <path d="M4 12h26M9 9.2h.01M12.4 9.2h.01" />
        <path d="m13 20 3-3 3 3M22 16.5l3 3" />
      </g>
    </svg>
  );
}

export function IconData({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <ellipse cx="17" cy="8" rx="11" ry="4" />
        <path d="M6 8v9c0 2.2 4.9 4 11 4s11-1.8 11-4V8" />
        <path d="M6 17v9c0 2.2 4.9 4 11 4s11-1.8 11-4v-9" />
      </g>
    </svg>
  );
}

export function IconSystems({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <rect x="10" y="10" width="14" height="14" rx="2.5" />
        <path d="M14 4v4M20 4v4M14 26v4M20 26v4M4 14h4M4 20h4M26 14h4M26 20h4" />
      </g>
    </svg>
  );
}

export function IconVelocity({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M19 4 7 19h8l-2 11L27 14h-9l1-10Z" />
      </g>
    </svg>
  );
}

export function IconJS({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M8 6h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z" />
        <path d="M13.5 13v6.2c0 1.6-1 2.3-2.5 2.3M17.5 21c.6.4 1.4.6 2.2.6 1.3 0 2.3-.6 2.3-1.8 0-2.4-4.4-1.5-4.4-3.9 0-1.1.9-1.8 2.1-1.8.8 0 1.5.2 2 .5" />
      </g>
    </svg>
  );
}

export function IconPy({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M15 4c-3.5 0-5 1.5-5 4v3h10v1.5H7.5C5 12.5 4 14.5 4 17s1 4.5 3.5 4.5H10v-3c0-2.5 2-4 4.5-4H20c2 0 3-1.2 3-3V8c0-2.5-1.5-4-5-4h-3Z" />
        <path d="M15 26c3.5 0 5-1.5 5-4v-3H10v-1.5h12.5c2.5 0 3.5-2 3.5-4.5" opacity="0.55" />
        <circle cx="12.2" cy="7.4" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function IconSys({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="m11 9-6 6 6 6M19 9l6 6-6 6" />
      </g>
    </svg>
  );
}

export function IconAI({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <circle cx="15" cy="15" r="10" />
        <circle cx="15" cy="15" r="4" />
        <path d="M15 5v6M15 19v6M5 15h6M19 15h6" opacity="0.6" />
      </g>
    </svg>
  );
}

export function IconDB({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <ellipse cx="15" cy="7" rx="9" ry="3.4" />
        <path d="M6 7v8c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4V7M6 15v8c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4v-8" />
      </g>
    </svg>
  );
}

export function IconOps({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M5 22V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z" />
        <path d="m10 12 3 3-3 3M16 18h4" />
      </g>
    </svg>
  );
}

export function ArrowDown({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" {...S} />
    </svg>
  );
}

export function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M4.5 3H11v6.5" {...S} />
    </svg>
  );
}

export const lineupIcons = {
  agent: IconAgent,
  stack: IconStack,
  front: IconFront,
  data: IconData,
  systems: IconSystems,
  velocity: IconVelocity,
};

export function IconWeb({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <circle cx="15" cy="15" r="10.5" />
        <path d="M4.5 15h21M15 4.5c-3 3-4.5 6.5-4.5 10.5S12 22.5 15 25.5c3-3 4.5-6.5 4.5-10.5S18 7.5 15 4.5Z" />
      </g>
    </svg>
  );
}

export function IconMotion({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M4 22c4-12 8-12 11-6s7 6 11-6" />
        <circle cx="15" cy="19" r="1.4" fill="currentColor" stroke="none" />
        <path d="M4 8h5M4 12h3" opacity="0.55" />
      </g>
    </svg>
  );
}

export function IconNoSQL({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M15 3.5 24.5 9v12L15 26.5 5.5 21V9L15 3.5Z" />
        <path d="M5.5 9 15 14.5 24.5 9M15 14.5v12" opacity="0.6" />
      </g>
    </svg>
  );
}

export function IconAPI({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M10 7c-2.5 0-4 1.3-4 3.5 0 1.8-.6 2.8-2.5 3 1.9.2 2.5 1.2 2.5 3 0 2.2 1.5 3.5 4 3.5" />
        <path d="M20 7c2.5 0 4 1.3 4 3.5 0 1.8.6 2.8 2.5 3-1.9.2-2.5 1.2-2.5 3 0 2.2-1.5 3.5-4 3.5" />
        <path d="m16.5 10-3 9.5" opacity="0.6" />
      </g>
    </svg>
  );
}

export function IconAgile({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <path d="M24.5 15a9.5 9.5 0 1 1-2.8-6.7" />
        <path d="M25 4.5v4h-4" />
        <path d="m11.5 15 2.5 2.5 4.5-4.5" opacity="0.7" />
      </g>
    </svg>
  );
}

export function IconAuto({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ color: 'var(--red)' }} aria-hidden="true">
      <g {...S}>
        <circle cx="15" cy="15" r="3.4" />
        <path d="M15 4.5v3.2M15 22.3v3.2M4.5 15h3.2M22.3 15h3.2M7.6 7.6l2.3 2.3M20.1 20.1l2.3 2.3M22.4 7.6l-2.3 2.3M9.9 20.1l-2.3 2.3" />
      </g>
    </svg>
  );
}

export const skillIcons = {
  js: IconJS,
  py: IconPy,
  sys: IconSys,
  ai: IconAI,
  db: IconDB,
  ops: IconOps,
  web: IconWeb,
  motion: IconMotion,
  nosql: IconNoSQL,
  api: IconAPI,
  agile: IconAgile,
  auto: IconAuto,
};
