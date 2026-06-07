import { ingredients, confidenceLabels, impactLabels, detectTagInteractions } from "../data/ingredients";

interface InteractionFeedbackProps {
  selectedIngredients: string[];
}

export function InteractionFeedback({ selectedIngredients }: InteractionFeedbackProps) {
  const selectedIngredientObjects = selectedIngredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter((ing): ing is NonNullable<typeof ing> => ing !== undefined);

  const detectedInteractions = detectTagInteractions(selectedIngredientObjects);

  if (detectedInteractions.length === 0) return null;

  // Sort by confidence: strong > moderate > emerging
  const confidenceOrder = { strong: 0, moderate: 1, emerging: 2 };
  const sortedInteractions = [...detectedInteractions].sort((a, b) =>
    confidenceOrder[a.rule.confidence] - confidenceOrder[b.rule.confidence]
  );

  const boosts = sortedInteractions.filter((i) => i.rule.type === "boost");
  const inhibits = sortedInteractions.filter((i) => i.rule.type === "inhibit");

  const renderInteraction = (detection: ReturnType<typeof detectTagInteractions>[0], idx: number) => {
    const { ingredient1, ingredient2, rule } = detection;
    const isBoost = rule.type === "boost";
    const confidenceInfo = confidenceLabels[rule.confidence];
    const impactInfo = impactLabels[rule.impactSize];
    const scoreDisplay = rule.scoreEffect > 0 ? `+${rule.scoreEffect}` : `${rule.scoreEffect}`;

    return (
      <div
        key={`${ingredient1.id}-${ingredient2.id}-${rule.tag1}-${rule.tag2}-${idx}`}
        className={`rounded-lg border p-3 ${
          isBoost
            ? "bg-green-50/50 border-green-300/40"
            : "bg-amber-50/50 border-amber-300/40"
        }`}
      >
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="text-sm font-medium text-foreground">
            {ingredient1.emoji} {ingredient1.name} + {ingredient2.emoji} {ingredient2.name}
          </p>
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
              isBoost ? "bg-green-700 text-white" : "bg-amber-700 text-white"
            }`}
          >
            {scoreDisplay}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{rule.effect}</p>
        <div className="flex gap-1.5 flex-wrap items-center">
          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground">
            {confidenceInfo.emoji} {confidenceInfo.label}
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: impactInfo.color }}
          >
            {impactInfo.label}
          </span>
          {rule.papers && rule.papers.map((paper, pi) => (
            <a
              key={pi}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${paper.title} — ${paper.authors} (${paper.year})`}
              className="text-xs px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors underline underline-offset-2"
            >
              📄 {paper.authors.split(',')[0].split(' ').pop()} et al. {paper.year}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold mb-1 text-foreground flex items-center gap-2">
          <span>🔬</span> Nutrient Interactions Detected
        </h2>
        <p className="text-xs text-muted-foreground">
          Here's what's happening inside your smoothie
        </p>
      </div>

      {boosts.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-green-400 mb-2">✅ Synergies That Boost Absorption</p>
          <div className="flex flex-col gap-2">
            {boosts.map((detection, idx) => renderInteraction(detection, idx))}
          </div>
        </div>
      )}

      {inhibits.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-yellow-400 mb-1">⚠️ Interactions That May Reduce Absorption</p>
          <p className="text-xs text-muted-foreground italic mb-2">
            These effects are generally small and context-dependent. Don&apos;t stress too much about them!
          </p>
          <div className="flex flex-col gap-2">
            {inhibits.map((detection, idx) => renderInteraction(detection, idx))}
          </div>
        </div>
      )}
    </div>
  );
}
