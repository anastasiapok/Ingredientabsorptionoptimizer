import { ingredients, detectTagInteractions } from "../data/ingredients";

interface SynergyScoreProps {
  selectedIngredients: string[];
}

export function SynergyScore({ selectedIngredients }: SynergyScoreProps) {
  if (selectedIngredients.length === 0) return null;

  const selectedIngredientObjects = selectedIngredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter((ing): ing is NonNullable<typeof ing> => ing !== undefined);

  const detectedInteractions = detectTagInteractions(selectedIngredientObjects);
  const boosts = detectedInteractions.filter((i) => i.rule.type === "boost");
  const inhibits = detectedInteractions.filter((i) => i.rule.type === "inhibit");

  const baseScore = 50;
  const totalScoreEffect = detectedInteractions.reduce((sum, d) => sum + d.rule.scoreEffect, 0);
  const rawScore = baseScore + totalScoreEffect;
  const score = Math.max(0, Math.min(100, rawScore));
  const isCapped = rawScore > 100 || rawScore < 0;

  const tier = score >= 75 ? "excellent" : score >= 60 ? "great" : score >= 45 ? "decent" : "low";

  const tierConfig = {
    excellent: { label: "Excellent synergy",  color: "#10b981", glow: "rgba(16,185,129,0.25)", track: "#d1fae5", textClass: "text-emerald-600" },
    great:     { label: "Great combination",  color: "#3d5c38", glow: "rgba(61,92,56,0.2)",    track: "#d4ddd0", textClass: "text-primary"    },
    decent:    { label: "Decent mix",         color: "#f59e0b", glow: "rgba(245,158,11,0.2)",  track: "#fef3c7", textClass: "text-amber-600"  },
    low:       { label: "Room to improve",    color: "#ef4444", glow: "rgba(239,68,68,0.2)",   track: "#fee2e2", textClass: "text-red-500"    },
  }[tier];

  // Full-circle gauge
  const cx = 80, cy = 80, r = 62;
  const circumference = 2 * Math.PI * r;
  const strokeDash = (score / 100) * circumference;
  const gap = 8;
  const arcLen = circumference - gap;
  const startAngle = -90 + (gap / circumference) * 180;

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Top accent strip */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${tierConfig.color}44, ${tierConfig.color}, ${tierConfig.color}44)` }} />

      <div className="p-5">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Nutrient Synergy Score
        </p>

        {/* Gauge */}
        <div className="flex justify-center mb-4">
          <div className="relative" style={{ width: 160, height: 160 }}>
            {/* Glow halo */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: `0 0 40px 10px ${tierConfig.glow}` }}
            />
            <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: "rotate(-90deg)" }}>
              {/* Track ring */}
              <circle cx={cx} cy={cy} r={r} fill="none" stroke={tierConfig.track} strokeWidth="12" />
              {/* Progress ring */}
              <circle
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={tierConfig.color}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${(score / 100) * arcLen} ${circumference}`}
                strokeDashoffset={gap / 2}
                style={{ transition: "stroke-dasharray 0.7s cubic-bezier(.4,0,.2,1), stroke 0.4s ease" }}
              />
            </svg>

            {/* Centre content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-5xl font-bold leading-none"
                style={{ color: tierConfig.color, textShadow: `0 0 24px ${tierConfig.glow}` }}
              >
                {Math.round(score)}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5">out of 100</span>
            </div>
          </div>
        </div>

        {/* Tier label */}
        <p className={`text-center text-sm font-semibold mb-5 ${tierConfig.textClass}`}>
          {tierConfig.label}
        </p>

        {/* Boost / inhibit split */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 flex items-center gap-2.5">
            <span className="text-xl">✅</span>
            <div>
              <p className="text-lg font-bold text-emerald-700 leading-none">{boosts.length}</p>
              <p className="text-xs text-emerald-600 mt-0.5">boost{boosts.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 flex items-center gap-2.5">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="text-lg font-bold text-amber-700 leading-none">{inhibits.length}</p>
              <p className="text-xs text-amber-600 mt-0.5">reducer{inhibits.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="rounded-xl border border-border/60 overflow-hidden text-xs">
          <div className="px-3 py-2 bg-secondary/40 border-b border-border/60">
            <span className="font-semibold text-foreground">Score breakdown</span>
          </div>
          <div className="divide-y divide-border/40">
            <div className="flex justify-between px-3 py-2 text-muted-foreground">
              <span>Base score</span>
              <span className="font-medium text-foreground">{baseScore}</span>
            </div>
            {detectedInteractions.map((d, i) => (
              <div key={i} className="flex justify-between items-center px-3 py-2">
                <span className="text-muted-foreground truncate mr-3 max-w-[75%]">
                  {d.ingredient1.emoji} {d.ingredient1.name} + {d.ingredient2.emoji} {d.ingredient2.name}
                </span>
                <span className={`font-semibold shrink-0 tabular-nums ${d.rule.scoreEffect > 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {d.rule.scoreEffect > 0 ? "+" : ""}{d.rule.scoreEffect}
                </span>
              </div>
            ))}
            {isCapped && (
              <div className="px-3 py-2 text-muted-foreground italic">
                Raw {Math.round(rawScore)} → capped at {rawScore > 100 ? 100 : 0}
              </div>
            )}
            <div className="flex justify-between px-3 py-2.5 bg-secondary/30 font-semibold text-foreground">
              <span>Total</span>
              <span style={{ color: tierConfig.color }}>{Math.round(score)}</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground italic mt-3">
          Based on known nutrient interaction science.
        </p>
      </div>
    </div>
  );
}
