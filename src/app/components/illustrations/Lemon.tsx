export function LemonIllustration({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="34" ry="28" fill="#F4D35E" />
      <ellipse cx="50" cy="50" rx="34" ry="28" fill="url(#lemon-gradient)" opacity="0.6" />

      <ellipse cx="20" cy="50" rx="5" ry="6" fill="#E0BD3E" />
      <ellipse cx="80" cy="50" rx="5" ry="6" fill="#E0BD3E" />

      <ellipse cx="40" cy="40" rx="12" ry="9" fill="#FBE98A" opacity="0.7" />

      <circle cx="35" cy="55" r="1.4" fill="#D6AC2E" opacity="0.5" />
      <circle cx="55" cy="58" r="1.4" fill="#D6AC2E" opacity="0.5" />
      <circle cx="60" cy="44" r="1.4" fill="#D6AC2E" opacity="0.5" />
      <circle cx="45" cy="62" r="1.4" fill="#D6AC2E" opacity="0.5" />

      <defs>
        <radialGradient id="lemon-gradient" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#FCEFA0" />
          <stop offset="100%" stopColor="#E0BD3E" />
        </radialGradient>
      </defs>
    </svg>
  );
}
