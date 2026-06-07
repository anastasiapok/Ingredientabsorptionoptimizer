import { ingredients } from "../data/ingredients";

interface GiSummaryProps {
  selectedIngredients: string[];
}

export function GiSummary({ selectedIngredients }: GiSummaryProps) {
  const selected = selectedIngredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter(Boolean) as typeof ingredients;

  if (selected.length === 0) return null;

  const avgGi = Math.round(selected.reduce((sum, i) => sum + i.gi, 0) / selected.length);
  const highGiItems = selected.filter((i) => i.giCategory === "high");
  const hasGiMitigators = selected.some((i) =>
    i.nutrients.some((n) => ["soluble_fiber", "protein", "dietary_fat"].includes(n))
  );

  const category =
    avgGi < 55 ? { label: "Low GI", color: "text-green-700", bg: "bg-green-50", border: "border-green-200", bar: "bg-green-500" }
    : avgGi < 70 ? { label: "Medium GI", color: "text-yellow-700", bg: "bg-yellow-50", border: "border-yellow-200", bar: "bg-yellow-500" }
    : { label: "High GI", color: "text-red-700", bg: "bg-red-50", border: "border-red-200", bar: "bg-red-500" };

  return (
    <div className={`rounded-xl border p-4 ${category.bg} ${category.border}`}>
      <div className="flex items-center justify-between mb-2">
        <p className={`text-sm font-semibold ${category.color}`}>📊 Estimated Glycemic Index</p>
        <span className={`text-sm font-bold ${category.color}`}>{avgGi} · {category.label}</span>
      </div>

      {/* Bar */}
      <div className="h-2 rounded-full bg-black/10 mb-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${category.bar}`}
          style={{ width: `${Math.min(100, avgGi)}%` }}
        />
      </div>

      <div className="text-xs space-y-1">
        {highGiItems.length > 0 && (
          <p className="text-red-700">
            ⬆️ High-GI ingredients: {highGiItems.map((i) => `${i.emoji} ${i.name} (${i.gi})`).join(", ")}
          </p>
        )}
        {hasGiMitigators && (
          <p className="text-green-700">
            ✓ Fibre, protein, or fat present — these slow glucose absorption
          </p>
        )}
        <p className={`${category.color} opacity-70`}>
          Average across selected ingredients. Actual response varies by preparation and individual.
        </p>
      </div>
    </div>
  );
}
