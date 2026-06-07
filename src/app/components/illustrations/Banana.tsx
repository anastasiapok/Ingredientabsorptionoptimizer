export function BananaIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main banana body */}
      <path d="M 30 45 Q 28 30 35 22 Q 50 15 65 22 Q 72 30 70 45 Q 68 60 65 70 Q 60 78 50 78 Q 40 78 35 70 Q 32 60 30 45 Z"
            fill="#FFD93D" />
      <path d="M 30 45 Q 28 30 35 22 Q 50 15 65 22 Q 72 30 70 45 Q 68 60 65 70 Q 60 78 50 78 Q 40 78 35 70 Q 32 60 30 45 Z"
            fill="url(#banana-gradient)" opacity="0.4" />

      {/* Stem */}
      <ellipse cx="50" cy="22" rx="4" ry="6" fill="#8B6F47" />

      {/* Highlight */}
      <path d="M 42 35 Q 40 28 44 24 Q 48 25 46 32 Q 44 38 42 35 Z" fill="#FFF4A3" opacity="0.8" />

      {/* Brown spots */}
      <ellipse cx="38" cy="50" rx="3" ry="4" fill="#A67C52" opacity="0.5" />
      <ellipse cx="58" cy="55" rx="4" ry="3" fill="#A67C52" opacity="0.5" />
      <ellipse cx="48" cy="65" rx="3" ry="3" fill="#A67C52" opacity="0.4" />

      <defs>
        <linearGradient id="banana-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFEB99" />
          <stop offset="100%" stopColor="#F5C842" />
        </linearGradient>
      </defs>
    </svg>
  );
}
