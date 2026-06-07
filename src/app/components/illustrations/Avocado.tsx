export function AvocadoIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer skin */}
      <path d="M 50 15 Q 30 18 22 35 Q 18 50 22 65 Q 30 82 50 88 Q 70 82 78 65 Q 82 50 78 35 Q 70 18 50 15 Z"
            fill="#5D7C3F" />
      <path d="M 50 15 Q 30 18 22 35 Q 18 50 22 65 Q 30 82 50 88 Q 70 82 78 65 Q 82 50 78 35 Q 70 18 50 15 Z"
            fill="url(#avocado-skin-gradient)" opacity="0.6" />

      {/* Inner flesh */}
      <ellipse cx="50" cy="50" rx="22" ry="26" fill="#C8E89A" />
      <ellipse cx="50" cy="50" rx="22" ry="26" fill="url(#avocado-flesh-gradient)" opacity="0.5" />

      {/* Pit */}
      <ellipse cx="50" cy="52" rx="10" ry="12" fill="#8B6F47" />
      <ellipse cx="50" cy="52" rx="10" ry="12" fill="url(#avocado-pit-gradient)" opacity="0.6" />

      {/* Highlight on flesh */}
      <ellipse cx="42" cy="42" rx="8" ry="10" fill="#E0F5BA" opacity="0.7" />

      <defs>
        <radialGradient id="avocado-skin-gradient" cx="0.3" cy="0.2" r="0.9">
          <stop offset="0%" stopColor="#7A9C55" />
          <stop offset="100%" stopColor="#4A6B2F" />
        </radialGradient>
        <radialGradient id="avocado-flesh-gradient" cx="0.4" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#DFFAAA" />
          <stop offset="100%" stopColor="#A8D470" />
        </radialGradient>
        <radialGradient id="avocado-pit-gradient" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#A58A62" />
          <stop offset="100%" stopColor="#6D5537" />
        </radialGradient>
      </defs>
    </svg>
  );
}
