export function TeaCupIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 28 42 L 72 42 L 67 72 Q 65 80 50 80 Q 35 80 33 72 Z" fill="#C97B3B" />
      <path d="M 28 42 L 72 42 L 67 72 Q 65 80 50 80 Q 35 80 33 72 Z" fill="url(#tea-gradient)" opacity="0.6" />
      <ellipse cx="50" cy="42" rx="22" ry="6" fill="#E0A35C" />
      <ellipse cx="50" cy="42" rx="22" ry="6" fill="url(#tea-surface-gradient)" />

      <path d="M 72 48 Q 86 48 86 60 Q 86 72 72 70" stroke="#C97B3B" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      <path d="M 42 24 Q 40 30 44 34 Q 46 36 44 40" stroke="#9CCBB0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 56 22 Q 54 28 58 32 Q 60 34 58 38" stroke="#9CCBB0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />

      <defs>
        <linearGradient id="tea-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0A35C" />
          <stop offset="100%" stopColor="#B06B2C" />
        </linearGradient>
        <radialGradient id="tea-surface-gradient" cx="0.4" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#F0C589" />
          <stop offset="100%" stopColor="#C97B3B" />
        </radialGradient>
      </defs>
    </svg>
  );
}
