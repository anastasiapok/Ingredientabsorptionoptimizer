export function MangoIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main mango body */}
      <path d="M 50 18 Q 70 22 80 38 Q 85 55 78 68 Q 68 82 50 88 Q 32 82 22 68 Q 15 55 20 38 Q 30 22 50 18 Z"
            fill="#FFB547" />
      <path d="M 50 18 Q 70 22 80 38 Q 85 55 78 68 Q 68 82 50 88 Q 32 82 22 68 Q 15 55 20 38 Q 30 22 50 18 Z"
            fill="url(#mango-gradient)" opacity="0.6" />

      {/* Red blush */}
      <ellipse cx="60" cy="45" rx="18" ry="22" fill="#E85D75" opacity="0.4" transform="rotate(-15 60 45)" />

      {/* Stem */}
      <ellipse cx="50" cy="18" rx="3" ry="5" fill="#6B4423" />

      {/* Small leaf */}
      <path d="M 48 15 Q 42 12 38 14 Q 40 16 45 17 Z" fill="#6FA855" />

      {/* Highlight */}
      <ellipse cx="40" cy="35" rx="10" ry="14" fill="#FFD580" opacity="0.7" />

      <defs>
        <radialGradient id="mango-gradient" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#FFCE6E" />
          <stop offset="100%" stopColor="#F59E2F" />
        </radialGradient>
      </defs>
    </svg>
  );
}
