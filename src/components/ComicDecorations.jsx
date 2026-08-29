// Pequenos elementos decorativos inspirados em HQ (raios, estrelas, explosões).
// Puramente visuais — recebem className para posicionamento via CSS no componente pai.

export function Lightning({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M38 2 L8 52 L28 52 L20 94 L58 40 L36 40 L38 2 Z"
        fill="var(--color-gold)"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Star({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 2 L61 36 L97 36 L68 57 L79 91 L50 70 L21 91 L32 57 L3 36 L39 36 Z"
        fill="var(--color-red)"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Burst({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 0 L112 40 L145 15 L138 55 L180 45 L155 78 L200 90 L157 105 L182 140 L142 128 L148 170 L115 145 L100 185 L85 145 L52 170 L58 128 L18 140 L43 105 L0 90 L45 78 L20 45 L62 55 L55 15 L88 40 Z"
        fill="var(--color-gold)"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpeedLines({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="6" x2="140" y2="6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="0" y1="20" x2="180" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="0" y1="34" x2="110" y2="34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
