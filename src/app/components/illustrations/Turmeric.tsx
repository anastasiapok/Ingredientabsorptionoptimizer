export function TurmericIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 30 38 Q 25 50 32 64 Q 38 74 48 70 Q 54 60 50 46 Q 46 34 30 38 Z" fill="#E8A33D" />
      <path d="M 30 38 Q 25 50 32 64 Q 38 74 48 70 Q 54 60 50 46 Q 46 34 30 38 Z" fill="url(#turmeric-gradient)" opacity="0.6" />

      <path d="M 52 44 Q 64 46 70 58 Q 73 68 64 74 Q 56 76 52 66 Q 50 54 52 44 Z" fill="#D88F2A" />
      <path d="M 52 44 Q 64 46 70 58 Q 73 68 64 74 Q 56 76 52 66 Q 50 54 52 44 Z" fill="url(#turmeric-gradient2)" opacity="0.55" />

      <circle cx="74" cy="32" r="3" fill="#3A2E26" />
      <circle cx="82" cy="40" r="3" fill="#3A2E26" />
      <circle cx="78" cy="50" r="3" fill="#3A2E26" />
      <circle cx="68" cy="46" r="3" fill="#4A3C32" />

      <defs>
        <radialGradient id="turmeric-gradient" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#FFCB6B" />
          <stop offset="100%" stopColor="#C97B1F" />
        </radialGradient>
        <radialGradient id="turmeric-gradient2" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#F5B85A" />
          <stop offset="100%" stopColor="#B97320" />
        </radialGradient>
      </defs>
    </svg>
  );
}
