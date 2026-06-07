import { useState } from "react";
import { goalSmoothies, GoalSmoothie } from "../data/goalSmoothies";
import { ingredients } from "../data/ingredients";

interface GoalSmoothiesProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
}

const categories = [
  { label: "All", filter: null },
  { label: "Energy", filter: ["Wake Up & Energy", "Natural Energy", "Iron Absorption"] },
  { label: "Recovery", filter: ["Muscle Recovery", "High Protein", "Antioxidant Boost"] },
  { label: "Mind", filter: ["Concentration Boost", "Stress Relief", "Cortisol Lowering"] },
  { label: "Body", filter: ["Gut Health", "Skin Health", "Heart Health", "Bone Health", "Testosterone Support"] },
  { label: "Rest", filter: ["Sleep & Relaxation", "Detox & Cleanse"] },
  { label: "Hormonal Health", filter: ["Hormonal Health"] },
  { label: "Adaptogens", filter: ["Adaptogen Blends"] },
];

function SmoothieCard({ smoothie, onLoad }: { smoothie: GoalSmoothie; onLoad: () => void }) {
  const [expanded, setExpanded] = useState(false);

  const smoothieIngredients = smoothie.ingredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter(Boolean);

  return (
    <div
      className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-md"
      style={{ borderTopColor: smoothie.color, borderTopWidth: 3 }}
    >
      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{smoothie.emoji}</span>
            <div>
              <h3 className="font-semibold text-card-foreground text-base leading-tight">{smoothie.name}</h3>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${smoothie.color}20`, color: smoothie.color }}
              >
                {smoothie.goal}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground italic mb-3">{smoothie.tagline}</p>

        {/* Ingredient pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {smoothieIngredients.map((ing) => (
            <span key={ing!.id} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {ing!.emoji} {ing!.name}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>▾</span>
          {expanded ? "Less info" : "Why it works"}
        </button>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="px-4 pb-3 border-t border-border pt-3 bg-secondary/20">
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{smoothie.description}</p>
          <ul className="space-y-1.5 mb-0">
            {smoothie.benefits.map((b, i) => (
              <li key={i} className="flex gap-2 text-xs text-card-foreground">
                <span className="shrink-0 mt-0.5" style={{ color: smoothie.color }}>✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action */}
      <div className="mt-auto px-4 pb-4 pt-3">
        <button
          onClick={onLoad}
          className="w-full py-2 rounded-xl text-sm font-medium transition-all text-white"
          style={{ backgroundColor: smoothie.color }}
        >
          Load this smoothie →
        </button>
      </div>
    </div>
  );
}

export function GoalSmoothies({ onLoadSmoothie }: GoalSmoothiesProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [loadedId, setLoadedId] = useState<string | null>(null);

  const filtered = categories[activeCategory].filter
    ? goalSmoothies.filter((s) => categories[activeCategory].filter!.includes(s.goal))
    : goalSmoothies;

  const handleLoad = (smoothie: GoalSmoothie) => {
    onLoadSmoothie(smoothie.ingredients);
    setLoadedId(smoothie.id);
    setTimeout(() => setLoadedId(null), 2000);
  };

  return (
    <div>
      {/* Intro */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">Targeted Smoothies</h2>
        <p className="text-sm text-muted-foreground">
          Science-designed recipes for specific health outcomes. Load any smoothie into the builder to analyse its nutrient interactions.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(i)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === i
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat.label}
            <span className="ml-1.5 text-xs opacity-60">
              {cat.filter ? goalSmoothies.filter((s) => cat.filter!.includes(s.goal)).length : goalSmoothies.length}
            </span>
          </button>
        ))}
      </div>

      {/* Loaded toast */}
      {loadedId && (
        <div className="mb-4 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-sm text-primary font-medium text-center">
          ✓ Smoothie loaded — switch to Build tab to see interactions
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((smoothie) => (
          <SmoothieCard
            key={smoothie.id}
            smoothie={smoothie}
            onLoad={() => handleLoad(smoothie)}
          />
        ))}
      </div>
    </div>
  );
}
