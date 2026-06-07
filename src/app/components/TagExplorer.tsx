import { useState } from "react";
import { ingredients, GiCategory } from "../data/ingredients";

const tagCategories: Record<string, { label: string; color: string }> = {
  // Vitamins
  vitamin_c:             { label: "Vitamin C",               color: "#f97316" },
  vitamin_a_carotenoids: { label: "Vitamin A (Carotenoids)", color: "#f97316" },
  vitamin_k:             { label: "Vitamin K",               color: "#fb923c" },
  folate:                { label: "Folate (B9)",             color: "#f59e0b" },
  // Minerals
  iron_nonheme:          { label: "Iron (Non-heme)",         color: "#92400e" },
  calcium:               { label: "Calcium",                 color: "#78716c" },
  zinc:                  { label: "Zinc",                    color: "#6b7280" },
  // Fats & Protein
  dietary_fat:           { label: "Dietary Fat",             color: "#16a34a" },
  protein:               { label: "Protein",                 color: "#15803d" },
  omega3:                { label: "Omega-3 (ALA)",           color: "#0d9488" },
  // Carbs & Fibre
  high_carb:             { label: "High Carb",               color: "#0369a1" },
  fiber:                 { label: "Fibre",                   color: "#0284c7" },
  soluble_fiber:         { label: "Soluble Fibre",           color: "#0ea5e9" },
  // Phytonutrients
  anthocyanins:          { label: "Anthocyanins",            color: "#7c3aed" },
  flavonoids:            { label: "Flavonoids",              color: "#9333ea" },
  beta_carotene:         { label: "Beta-Carotene",           color: "#ea580c" },
  lycopene:              { label: "Lycopene",                color: "#e11d48" },
  phytoestrogen:         { label: "Phytoestrogen",           color: "#db2777" },
  // Frozen
  freeze_enhanced:       { label: "❄️ Freeze-Enhanced",      color: "#0284c7" },
  // Inhibitors & Enzymes
  polyphenol_oxidase:    { label: "Polyphenol Oxidase",      color: "#dc2626" },
  phytates:              { label: "Phytates (inhibitor)",    color: "#b91c1c" },
  oxalates:              { label: "Oxalates (inhibitor)",    color: "#be185d" },
};

const giColors: Record<GiCategory, { bg: string; text: string; label: string }> = {
  low:    { bg: "bg-green-100",  text: "text-green-800",  label: "Low GI"    },
  medium: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Medium GI" },
  high:   { bg: "bg-red-100",    text: "text-red-800",    label: "High GI"   },
};

const categories = ["fruit", "liquid", "extra"] as const;
const categoryLabels = { fruit: "Fruits & Vegetables", liquid: "Liquids", extra: "Extras" };

interface TagExplorerProps {
  onIngredientClick?: (ingredientId: string) => void;
}

export function TagExplorer({ onIngredientClick }: TagExplorerProps = {}) {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggle = (cat: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-base font-semibold mb-1 flex items-center gap-2">
        <span>🏷️</span> Ingredient Tag Explorer
      </h2>
      <p className="text-xs text-muted-foreground mb-4">
        Nutrient tags and glycemic index (GI) for every ingredient. GI &lt;55 = low, 55–69 = medium, 70+ = high.
      </p>

      <div className="flex flex-col gap-2">
        {categories.map((category) => {
          const categoryIngredients = ingredients.filter((i) => i.category === category);
          const isOpen = openCategories.has(category);
          return (
            <div key={category} className="rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => toggle(category)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary/40 hover:bg-secondary/60 transition-colors text-left"
              >
                <span className="text-sm font-medium">
                  {categoryLabels[category]}{" "}
                  <span className="text-muted-foreground font-normal">({categoryIngredients.length})</span>
                </span>
                <span className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              {isOpen && (
                <div className="divide-y divide-border/50">
                  {categoryIngredients.map((ingredient) => {
                    const gi = giColors[ingredient.giCategory];
                    return (
                      <div
                        key={ingredient.id}
                        className={`px-4 py-3 flex flex-col gap-1.5 bg-background/10 ${onIngredientClick ? 'cursor-pointer hover:bg-primary/5 transition-colors' : ''}`}
                        onMouseEnter={() => onIngredientClick?.(ingredient.id)}
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium">
                            {ingredient.emoji} {ingredient.name}
                          </span>
                          {/* GI badge */}
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${gi.bg} ${gi.text}`}>
                            GI {ingredient.gi} · {gi.label}
                          </span>
                        </div>
                        {/* Nutrient tags */}
                        <div className="flex flex-wrap gap-1">
                          {ingredient.nutrients.length === 0 ? (
                            <span className="text-xs text-muted-foreground italic">No special tags</span>
                          ) : (
                            ingredient.nutrients.map((tag) => {
                              const info = tagCategories[tag];
                              return (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-0.5 rounded-full text-white"
                                  style={{ backgroundColor: info?.color ?? "#6b7280" }}
                                >
                                  {info?.label ?? tag}
                                </span>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
