export function OrangeIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main orange body */}
      <circle cx="50" cy="52" r="36" fill="#FF8C42" />
      <circle cx="50" cy="52" r="36" fill="url(#orange-gradient)" opacity="0.6" />

      {/* Stem */}
      <rect x="47" y="12" width="6" height="8" rx="2" fill="#6B4423" />

      {/* Leaf */}
      <ellipse cx="58" cy="18" rx="8" ry="12" fill="#6FA855" transform="rotate(25 58 18)" />
      <path d="M 58 12 Q 58 18 58 24" stroke="#5A8A47" strokeWidth="1.5" fill="none" />

      {/* Highlight */}
      <ellipse cx="38" cy="38" rx="12" ry="15" fill="#FFB366" opacity="0.7" />

      {/* Texture dots */}
      <circle cx="45" cy="48" r="1.5" fill="#E67A2E" opacity="0.4" />
      <circle cx="55" cy="50" r="1.5" fill="#E67A2E" opacity="0.4" />
      <circle cx="50" cy="58" r="1.5" fill="#E67A2E" opacity="0.4" />
      <circle cx="40" cy="55" r="1.5" fill="#E67A2E" opacity="0.4" />
      <circle cx="60" cy="56" r="1.5" fill="#E67A2E" opacity="0.4" />
      <circle cx="48" cy="65" r="1.5" fill="#E67A2E" opacity="0.4" />
      <circle cx="58" cy="62" r="1.5" fill="#E67A2E" opacity="0.4" />

      <defs>
        <radialGradient id="orange-gradient" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#FFB570" />
          <stop offset="100%" stopColor="#E67A2E" />
        </radialGradient>
      </defs>
    </svg>
  );
}
