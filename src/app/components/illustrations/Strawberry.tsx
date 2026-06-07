export function StrawberryIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem leaves */}
      <path d="M 35 25 Q 30 20 28 18 Q 32 22 35 25" fill="#5C8A47" />
      <path d="M 50 22 Q 50 15 50 12 Q 50 18 50 22" fill="#5C8A47" />
      <path d="M 65 25 Q 70 20 72 18 Q 68 22 65 25" fill="#5C8A47" />
      <ellipse cx="50" cy="25" rx="20" ry="8" fill="#6FA855" />

      {/* Main berry body */}
      <path d="M 50 30 Q 25 35 22 55 Q 20 70 35 82 Q 50 90 65 82 Q 80 70 78 55 Q 75 35 50 30 Z"
            fill="#E63946" />
      <path d="M 50 30 Q 25 35 22 55 Q 20 70 35 82 Q 50 90 65 82 Q 80 70 78 55 Q 75 35 50 30 Z"
            fill="url(#strawberry-gradient)" opacity="0.5" />

      {/* Seeds */}
      <ellipse cx="45" cy="50" rx="2" ry="3" fill="#FFC857" opacity="0.9" />
      <ellipse cx="55" cy="48" rx="2" ry="3" fill="#FFC857" opacity="0.9" />
      <ellipse cx="38" cy="58" rx="2" ry="3" fill="#FFC857" opacity="0.9" />
      <ellipse cx="50" cy="62" rx="2" ry="3" fill="#FFC857" opacity="0.9" />
      <ellipse cx="62" cy="58" rx="2" ry="3" fill="#FFC857" opacity="0.9" />
      <ellipse cx="42" cy="70" rx="2" ry="3" fill="#FFC857" opacity="0.9" />
      <ellipse cx="58" cy="70" rx="2" ry="3" fill="#FFC857" opacity="0.9" />

      {/* Highlight */}
      <ellipse cx="40" cy="42" rx="8" ry="12" fill="#FF6B7A" opacity="0.6" />

      <defs>
        <radialGradient id="strawberry-gradient" cx="0.3" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#FF8A94" />
          <stop offset="100%" stopColor="#D62839" />
        </radialGradient>
      </defs>
    </svg>
  );
}
