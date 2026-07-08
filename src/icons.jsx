/**
 * icons.jsx — every icon and graphic motif on this site is a hand-written
 * inline SVG. No icon libraries, no image placeholders.
 */

/* — The mark: a minimal spider sitting inside a "C" thread — */
export function SpiderMark({ size = 26, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="CB spider mark">
      <path
        d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16S8.5 29.5 16 29.5c3.6 0 6.9-1.4 9.3-3.7"
        stroke={color} strokeWidth="2.2" strokeLinecap="round"
      />
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 13.5l-4-2.5M28 13l-4.5-1M28 20.5L24 19M22 24.5l-2.5-3.5" />
        <path d="M24 10V5.5" />
      </g>
      <ellipse cx="23" cy="15.5" rx="2.6" ry="3.2" fill="#e11d2e" />
      <circle cx="23" cy="10.8" r="1.8" fill="#e11d2e" />
    </svg>
  );
}

/* — Radial web used as decorative corner ornament — */
export function WebCorner({ size = 220, stroke = 'rgba(29,29,31,0.16)', style }) {
  const radials = [];
  for (let i = 0; i <= 6; i++) {
    const a = (Math.PI / 2) * (i / 6);
    radials.push(
      <line key={i} x1="0" y1="0" x2={Math.cos(a) * 220} y2={Math.sin(a) * 220} />
    );
  }
  const arcs = [40, 80, 124, 172].map((r) => (
    <path key={r} d={`M ${r} 0 A ${r} ${r * 1.08} 0 0 1 0 ${r}`} />
  ));
  return (
    <svg
      className="web-corner" width={size} height={size} viewBox="0 0 220 220"
      fill="none" stroke={stroke} strokeWidth="1" style={style} aria-hidden="true"
    >
      {radials}
      {arcs}
    </svg>
  );
}

/* — A spider dangling from a thread (footer / easter egg) — */
export function DanglingSpider({ height = 120, color = '#1d1d1f' }) {
  return (
    <svg width="48" height={height} viewBox={`0 0 48 ${height}`} fill="none" aria-hidden="true">
      <line x1="24" y1="0" x2="24" y2={height - 34} stroke={color} strokeWidth="1.2" strokeDasharray="1 3" />
      <g transform={`translate(24 ${height - 26})`}>
        <g stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none">
          <path d="M-4 -4 Q-13 -9 -16 -16" />
          <path d="M-5 -1 Q-15 -2 -19 -7" />
          <path d="M-5 2 Q-15 4 -19 10" />
          <path d="M-4 5 Q-12 11 -14 18" />
          <path d="M4 -4 Q13 -9 16 -16" />
          <path d="M5 -1 Q15 -2 19 -7" />
          <path d="M5 2 Q15 4 19 10" />
          <path d="M4 5 Q12 11 14 18" />
        </g>
        <ellipse cx="0" cy="-6" rx="4.2" ry="5" fill={color} />
        <ellipse cx="0" cy="4" rx="5.5" ry="8" fill="#e11d2e" />
        <path d="M0 -2v12M-3.5 1.5 L0 5l3.5-3.5M-3 8l3 3 3-3" stroke="#fff" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}

/* — Arrow (Apple-style chevron link) — */
export function Chevron({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M5.5 3l5 5-5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ size = 15, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M6 4h6v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScrollMouse() {
  return (
    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="20" height="32" rx="10" stroke="#86868b" strokeWidth="1.5" />
      <circle cx="11" cy="10" r="2.4" fill="#e11d2e">
        <animate attributeName="cy" values="9;17;9" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ————— Skill / tech icons — custom drawn ————— */

export function IconReact({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2.6" fill="#e11d2e" />
      <g stroke={ink} strokeWidth="1.4">
        <ellipse cx="16" cy="16" rx="13" ry="5.2" />
        <ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(120 16 16)" />
      </g>
    </svg>
  );
}

export function IconNode({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 2.8L27.5 9.4v13.2L16 29.2 4.5 22.6V9.4L16 2.8z" stroke={ink} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 20.5c.6 1.3 1.8 2 3.6 2 2 0 3.2-.9 3.2-2.4 0-1.6-1.2-2-3.1-2.5-1.7-.4-3.2-.9-3.2-2.7 0-1.6 1.3-2.5 3-2.5 1.6 0 2.7.7 3.3 1.8" stroke="#e11d2e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMongo({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 3c4.8 5.4 7 9.6 7 13.8 0 4.9-3 8.6-7 11.2-4-2.6-7-6.3-7-11.2C9 12.6 11.2 8.4 16 3z" stroke={ink} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 8v18" stroke="#e11d2e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconExpress({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M4 16h17M4 9h24M4 23h24" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="25" cy="16" r="2.4" fill="#e11d2e" />
    </svg>
  );
}

export function IconPython({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 3.5c-3.4 0-5.5 1.5-5.5 4v3h10.6v1.4H7.6c-2.6 0-4.1 2-4.1 4.6s1.5 4.6 4.1 4.6h2.9v-3.3c0-2.4 2.1-4.3 4.6-4.3h6.3c2.2 0 3.6-1.6 3.6-3.7V7.5c0-2.5-2.1-4-5-4h-4z" stroke={ink} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M16 28.5c3.4 0 5.5-1.5 5.5-4v-3H10.9v-1.4h13.5c2.6 0 4.1-2 4.1-4.6" stroke="#e11d2e" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12.8" cy="6.8" r="1.1" fill="#e11d2e" />
    </svg>
  );
}

export function IconSQL({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="7.5" rx="10" ry="4" stroke={ink} strokeWidth="1.5" />
      <path d="M6 7.5v17c0 2.2 4.5 4 10 4s10-1.8 10-4v-17" stroke={ink} strokeWidth="1.5" />
      <path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="#e11d2e" strokeWidth="1.5" />
    </svg>
  );
}

export function IconAI({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4l2.4 7 7.1.3-5.6 4.5 2 6.9L16 18.6l-5.9 4.1 2-6.9-5.6-4.5 7.1-.3L16 4z" stroke={ink} strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="25.5" cy="6.5" r="2" fill="#e11d2e" />
    </svg>
  );
}

export function IconCloud({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M9 24a6 6 0 01-.4-12A8 8 0 0124 13.5 5.3 5.3 0 0123 24H9z" stroke={ink} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 19.5l3 3 5.5-5.5" stroke="#e11d2e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTS({ size = 30, ink = '#f5f5f7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="3.5" y="3.5" width="25" height="25" rx="5" stroke={ink} strokeWidth="1.5" />
      <path d="M9 13.5h8M13 13.5V23" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 14.5c-.6-1-1.6-1.5-2.9-1.5-1.6 0-2.7.9-2.7 2.2 0 3 5.8 1.7 5.8 5 0 1.5-1.3 2.5-3 2.5-1.5 0-2.6-.6-3.2-1.7" stroke="#e11d2e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* — Web-shooter "thwip" lines for buttons/moments — */
export function Thwip({ size = 40, color = '#e11d2e' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="2" strokeLinecap="round">
        <path d="M20 20L20 6" />
        <path d="M20 20L31 10" />
        <path d="M20 20L34 18" />
        <path d="M20 20L9 10" />
        <path d="M20 20L6 18" />
      </g>
    </svg>
  );
}

/* — Mask eye pair, ultra-minimal cameo — */
export function MaskEyes({ width = 96, color = '#fff' }) {
  return (
    <svg width={width} height={width * 0.42} viewBox="0 0 96 40" fill="none" aria-hidden="true">
      <path d="M8 26C14 12 30 6 40 12c4 2.6 4 9-1 13-8 6.5-24 8-31 1z" fill={color} stroke="#0b0b0f" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M88 26C82 12 66 6 56 12c-4 2.6-4 9 1 13 8 6.5 24 8 31 1z" fill={color} stroke="#0b0b0f" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function GitHubMark({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-label="GitHub">
      <path d="M12 1.5A10.5 10.5 0 001.5 12a10.5 10.5 0 007.2 10c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.6-1.2-1.6-1-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1 1 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2.1 1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 015.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.7 1 1.7 1 2.8 0 4-2.4 4.9-4.8 5.2.4.3.8 1 .8 2v3c0 .3.2.6.7.5a10.5 10.5 0 007.2-10A10.5 10.5 0 0012 1.5z" />
    </svg>
  );
}

export function MailIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="5" width="19" height="14" rx="3" stroke={color} strokeWidth="1.8" />
      <path d="M3.5 7.5l8.5 6 8.5-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
