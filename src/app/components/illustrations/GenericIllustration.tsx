export function GenericIllustration({ emoji, color = "#A0AEC0", size = 32 }: { emoji: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="50" cy="50" r="42" fill={color} opacity="0.2" />
      <circle cx="50" cy="50" r="42" fill="url(#generic-gradient)" opacity="0.3" />

      {/* Emoji as text */}
      <text
        x="50"
        y="50"
        fontSize="42"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="system-ui, -apple-system"
      >
        {emoji}
      </text>

      <defs>
        <radialGradient id="generic-gradient" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>
    </svg>
  );
}
