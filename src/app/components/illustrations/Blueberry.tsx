export function BlueberryIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main berry */}
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#5B7FE8" />
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="url(#blueberry-gradient)" opacity="0.6" />

      {/* Highlight */}
      <ellipse cx="40" cy="45" rx="12" ry="15" fill="#8BA3F5" opacity="0.7" />

      {/* Crown */}
      <path d="M 40 20 Q 45 22 50 20 Q 55 22 60 20 L 58 30 L 42 30 Z" fill="#4A6B3E" />
      <circle cx="45" cy="27" r="2" fill="#5C8A47" />
      <circle cx="55" cy="27" r="2" fill="#5C8A47" />

      <defs>
        <radialGradient id="blueberry-gradient" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#7B9FF8" />
          <stop offset="100%" stopColor="#3A5FD8" />
        </radialGradient>
      </defs>
    </svg>
  );
}
