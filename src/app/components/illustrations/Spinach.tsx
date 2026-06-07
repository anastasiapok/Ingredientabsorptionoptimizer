export function SpinachIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M 50 85 Q 48 70 48 55 Q 48 40 50 25" stroke="#7FA650" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Main leaf */}
      <path d="M 50 25 Q 30 30 22 45 Q 18 58 25 68 Q 35 75 48 70 Q 50 65 50 55 Z"
            fill="#4A9D5F" />
      <path d="M 50 25 Q 30 30 22 45 Q 18 58 25 68 Q 35 75 48 70 Q 50 65 50 55 Z"
            fill="url(#spinach-gradient)" opacity="0.6" />

      {/* Right leaf */}
      <path d="M 50 40 Q 70 42 78 52 Q 82 62 75 70 Q 65 75 52 72 Q 50 68 50 60 Z"
            fill="#5CAF6E" />
      <path d="M 50 40 Q 70 42 78 52 Q 82 62 75 70 Q 65 75 52 72 Q 50 68 50 60 Z"
            fill="url(#spinach-gradient2)" opacity="0.5" />

      {/* Veins on main leaf */}
      <path d="M 48 55 Q 38 52 30 50" stroke="#6BB67D" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M 48 60 Q 40 60 32 58" stroke="#6BB67D" strokeWidth="1.5" opacity="0.5" fill="none" />

      {/* Veins on right leaf */}
      <path d="M 52 60 Q 60 58 68 58" stroke="#75C987" strokeWidth="1.5" opacity="0.5" fill="none" />

      <defs>
        <radialGradient id="spinach-gradient" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#6FD37F" />
          <stop offset="100%" stopColor="#3D8A4E" />
        </radialGradient>
        <radialGradient id="spinach-gradient2" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#7FE58F" />
          <stop offset="100%" stopColor="#4D9A5E" />
        </radialGradient>
      </defs>
    </svg>
  );
}
