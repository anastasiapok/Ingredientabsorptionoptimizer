import { ingredients, detectTagInteractions, tagInteractionRules } from "../data/ingredients";

interface OptimizationSuggestionsProps {
  selectedIngredients: string[];
  onSwapIngredient: (removeId: string, addId: string) => void;
}

interface Suggestion {
  type: "remove-inhibitor" | "add-booster";
  removeId?: string;
  addId?: string;
  reason: string;
  scoreImprovement: number;
}

export function OptimizationSuggestions({ selectedIngredients, onSwapIngredient }: OptimizationSuggestionsProps) {
  const selectedIngredientObjects = selectedIngredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter((ing): ing is NonNullable<typeof ing> => ing !== undefined);

  const detectedInteractions = detectTagInteractions(selectedIngredientObjects);

  // Calculate current score
  const baseScore = 50;
  const totalScoreEffect = detectedInteractions.reduce((sum, d) => sum + d.rule.scoreEffect, 0);
  const currentScore = Math.max(0, Math.min(100, baseScore + totalScoreEffect));

  const suggestions: Suggestion[] = [];

  const inhibitors = detectedInteractions.filter((i) => i.rule.type === "inhibit");
  inhibitors.forEach(({ ingredient1, ingredient2, rule }) => {
    let ingredientToRemove = ingredient1;
    if (ingredient1.nutrients.includes(rule.tag1) && ["polyphenol_oxidase", "phytates", "oxalates"].includes(rule.tag1)) {
      ingredientToRemove = ingredient1;
    } else if (ingredient2.nutrients.includes(rule.tag2) && ["polyphenol_oxidase", "phytates", "oxalates"].includes(rule.tag2)) {
      ingredientToRemove = ingredient2;
    } else if (ingredient1.nutrients.includes("calcium")) {
      ingredientToRemove = ingredient1;
    }

    const alternatives = ingredients.filter(
      (ing) =>
        !selectedIngredients.includes(ing.id) &&
        ing.category === ingredientToRemove.category &&
        !ing.nutrients.includes(rule.tag1) &&
        !ing.nutrients.includes(rule.tag2)
    );

    if (alternatives.length > 0) {
      const alt = alternatives[0];
      suggestions.push({
        type: "remove-inhibitor",
        removeId: ingredientToRemove.id,
        addId: alt.id,
        reason: `Swap ${ingredientToRemove.emoji} ${ingredientToRemove.name} for ${alt.emoji} ${alt.name} to avoid ${rule.effect.split(",")[0].toLowerCase()}`,
        scoreImprovement: Math.abs(rule.scoreEffect),
      });
    }
  });

  selectedIngredientObjects.forEach((ing) => {
    ing.nutrients.forEach((tag) => {
      tagInteractionRules
        .filter((rule) => rule.type === "boost" && (rule.tag1 === tag || rule.tag2 === tag))
        .forEach((rule) => {
          const neededTag = rule.tag1 === tag ? rule.tag2 : rule.tag1;
          const hasNeeded = selectedIngredientObjects.some((i) => i.nutrients.includes(neededTag));
          if (!hasNeeded) {
            const booster = ingredients.find((i) => !selectedIngredients.includes(i.id) && i.nutrients.includes(neededTag));
            if (booster && !suggestions.some((s) => s.addId === booster.id)) {
              suggestions.push({
                type: "add-booster",
                addId: booster.id,
                reason: `Add ${booster.emoji} ${booster.name} to ${rule.effect.split(",")[0].toLowerCase()}`,
                scoreImprovement: rule.scoreEffect,
              });
            }
          }
        });
    });
  });

  const topSuggestions = suggestions.sort((a, b) => b.scoreImprovement - a.scoreImprovement).slice(0, 3);

  if (topSuggestions.length === 0) {
    return (
      <div className="rounded-xl border border-green-700/30 bg-green-950/30 p-5">
        <div className="text-center">
          <span className="text-4xl mb-2 block">🎯</span>
          <p className="text-base font-semibold text-green-400 mb-1">You've optimized this smoothie!</p>
          <p className="text-xs text-muted-foreground">No significant improvements available.</p>
        </div>
      </div>
    );
  }

  const bestSuggestion = topSuggestions[0];
  const projectedScore = Math.min(100, currentScore + bestSuggestion.scoreImprovement);

  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5">
      <h2 className="text-base font-semibold mb-4 text-foreground flex items-center gap-2">
        <span>💡</span> Improve My Smoothie
      </h2>

      {/* Current vs Projected Score */}
      <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-green-950/40 border border-amber-700/30">
        <div className="flex items-center justify-around">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Current Score</p>
            <p className="text-3xl font-bold text-amber-400">{Math.round(currentScore)}</p>
          </div>
          <div className="text-2xl text-muted-foreground">→</div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Potential Score</p>
            <p className="text-3xl font-bold text-green-400">{Math.round(projectedScore)}</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-xs px-3 py-1 rounded-full bg-green-900/50 text-green-300 font-semibold">
            +{bestSuggestion.scoreImprovement} points with top suggestion
          </span>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex flex-col gap-2.5">
        {topSuggestions.map((suggestion, index) => {
          const newScore = Math.min(100, currentScore + suggestion.scoreImprovement);
          return (
            <div
              key={index}
              className="p-4 rounded-lg border border-border bg-background/30 hover:bg-background/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground mb-2">{suggestion.reason}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-300 font-medium">
                      {Math.round(currentScore)}
                    </span>
                    <span className="text-xs text-muted-foreground">→</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/50 text-green-300 font-medium">
                      {Math.round(newScore)}
                    </span>
                  </div>
                </div>
                {suggestion.type === "remove-inhibitor" && suggestion.removeId && suggestion.addId && (
                  <button
                    onClick={() => onSwapIngredient(suggestion.removeId!, suggestion.addId!)}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                  >
                    ⇄ Swap Now
                  </button>
                )}
                {suggestion.type === "add-booster" && suggestion.addId && (
                  <button
                    onClick={() => onSwapIngredient("", suggestion.addId!)}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                  >
                    + Add Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground italic mt-4">
        Keep optimizing to reach 100!
      </p>
    </div>
  );
}
