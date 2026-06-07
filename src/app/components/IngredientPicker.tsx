import { useState, useMemo } from "react";
import { ingredients } from "../data/ingredients";

interface IngredientPickerProps {
  selectedIngredients: string[];
  onToggleIngredient: (id: string) => void;
  onIngredientClick?: (id: string) => void;
}

const frozenMap: Record<string, string> = {
  "blueberry":  "frozen-blueberry",
  "raspberry":  "frozen-raspberry",
  "strawberry": "frozen-strawberry",
  "mango":      "frozen-mango",
  "cherry":     "frozen-cherry",
  "banana":     "frozen-banana",
};
const frozenIds = new Set(Object.values(frozenMap));

// Most common ingredients shown by default
const commonFruits = ["banana", "blueberry", "strawberry", "mango", "pineapple", "spinach", "kale", "avocado", "orange", "lemon", "kiwi", "passion-fruit", "ginger", "carrot", "celery", "cucumber", "mint"];
const commonLiquids = ["oat-milk", "almond-milk", "soy-milk", "coconut-milk", "milk", "yogurt", "plant-yogurt", "water", "coconut-water"];
const commonExtras = ["hemp-seeds", "chia-seeds", "flax-seeds", "sesame-seeds", "protein-powder", "peanut-butter", "honey", "oats", "cocoa-powder", "cinnamon", "carob-powder", "moringa"];
const driedFruits = ["dates", "figs", "cranberry"];

// Get all fruit/veg IDs
const allFruitIds = ingredients.filter(i => i.category === 'fruit').map(i => i.id);
const otherFruits = allFruitIds.filter(id => !commonFruits.includes(id) && !driedFruits.includes(id));

const allLiquidIds = ingredients.filter(i => i.category === 'liquid').map(i => i.id);
const otherLiquids = allLiquidIds.filter(id => !commonLiquids.includes(id));

const allExtraIds = ingredients.filter(i => i.category === 'extra').map(i => i.id);
const otherExtras = allExtraIds.filter(id => !commonExtras.includes(id));

export function IngredientPicker({ selectedIngredients, onToggleIngredient, onIngredientClick }: IngredientPickerProps) {
  const [frozen, setFrozen] = useState(false);
  const [search, setSearch] = useState("");
  const [showOtherFruits, setShowOtherFruits] = useState(false);
  const [showOtherLiquids, setShowOtherLiquids] = useState(false);
  const [showOtherExtras, setShowOtherExtras] = useState(false);
  const [showDriedFruits, setShowDriedFruits] = useState(false);

  const handleFrozenToggle = () => {
    const next = !frozen;
    setFrozen(next);
    Object.entries(frozenMap).forEach(([freshId, frozenId]) => {
      if (next && selectedIngredients.includes(freshId)) { onToggleIngredient(freshId); onToggleIngredient(frozenId); }
      if (!next && selectedIngredients.includes(frozenId)) { onToggleIngredient(frozenId); onToggleIngredient(freshId); }
    });
  };

  const visibleId = (id: string) => {
    if (frozen && frozenMap[id]) return false;
    if (!frozen && frozenIds.has(id)) return false;
    return true;
  };

  const filterIds = (ids: string[], q: string) =>
    ids.filter(id => {
      if (!visibleId(id)) return false;
      const ing = ingredients.find(i => i.id === id);
      if (!ing) return false;
      if (!q) return true;
      return ing.name.toLowerCase().includes(q);
    });

  const isSearching = search.trim().length > 0;
  const q = search.toLowerCase().trim();

  // Flat search results across all ingredients
  const allIds = [...allFruitIds, ...allLiquidIds, ...allExtraIds];
  const searchResults = isSearching ? filterIds(allIds, q) : [];

  const Pill = ({ id }: { id: string }) => {
    const ing = ingredients.find(i => i.id === id);
    if (!ing) return null;
    const selected = selectedIngredients.includes(id);
    return (
      <button
        onClick={() => onToggleIngredient(id)}
        onMouseEnter={() => onIngredientClick?.(id)}
        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all border ${
          selected
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
        }`}
      >
        {ing.emoji} {ing.name}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Controls row */}
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search ingredients…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 text-sm px-3 py-1.5 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
        />
        <button
          onClick={handleFrozenToggle}
          title={frozen ? "Switch to fresh" : "Switch to frozen"}
          className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
            frozen
              ? "bg-blue-100 border-blue-300 text-blue-700"
              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          ❄️ {frozen ? "Frozen" : "Fresh"}
        </button>
        <button
          onClick={() => setShowDriedFruits(!showDriedFruits)}
          title={showDriedFruits ? "Hide dried fruits" : "Show dried fruits"}
          className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
            showDriedFruits
              ? "bg-amber-100 border-amber-300 text-amber-700"
              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          🫘 Dried
        </button>
      </div>

      {/* Search results or category view */}
      {isSearching ? (
        <div className="flex flex-wrap gap-1.5">
          {searchResults.map(id => <Pill key={id} id={id} />)}
          {searchResults.length === 0 && (
            <p className="text-xs text-muted-foreground italic">No ingredients match &ldquo;{search}&rdquo;</p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Fruits & Vegetables */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 px-1">🍓 FRUITS & VEGETABLES</p>
            <div className="flex flex-wrap gap-1.5">
              {filterIds(commonFruits, "").map(id => <Pill key={id} id={id} />)}
              {showDriedFruits && filterIds(driedFruits, "").map(id => <Pill key={id} id={id} />)}
              <button
                onClick={() => setShowOtherFruits(!showOtherFruits)}
                className="px-2.5 py-1 rounded-full text-xs font-medium border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition-colors"
              >
                {showOtherFruits ? "− " : "+ "}Other
              </button>
            </div>
            {showOtherFruits && (
              <div className="mt-2 flex flex-wrap gap-1.5 pl-2 border-l-2 border-border/40">
                {filterIds(otherFruits, "").map(id => <Pill key={id} id={id} />)}
              </div>
            )}
          </div>

          {/* Liquids */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 px-1">🥛 LIQUIDS</p>
            <div className="flex flex-wrap gap-1.5">
              {filterIds(commonLiquids, "").map(id => <Pill key={id} id={id} />)}
              <button
                onClick={() => setShowOtherLiquids(!showOtherLiquids)}
                className="px-2.5 py-1 rounded-full text-xs font-medium border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition-colors"
              >
                {showOtherLiquids ? "− " : "+ "}Other
              </button>
            </div>
            {showOtherLiquids && (
              <div className="mt-2 flex flex-wrap gap-1.5 pl-2 border-l-2 border-border/40">
                {filterIds(otherLiquids, "").map(id => <Pill key={id} id={id} />)}
              </div>
            )}
          </div>

          {/* Extras */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 px-1">✨ EXTRAS</p>
            <div className="flex flex-wrap gap-1.5">
              {filterIds(commonExtras, "").map(id => <Pill key={id} id={id} />)}
              <button
                onClick={() => setShowOtherExtras(!showOtherExtras)}
                className="px-2.5 py-1 rounded-full text-xs font-medium border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition-colors"
              >
                {showOtherExtras ? "− " : "+ "}Other
              </button>
            </div>
            {showOtherExtras && (
              <div className="mt-2 flex flex-wrap gap-1.5 pl-2 border-l-2 border-border/40">
                {filterIds(otherExtras, "").map(id => <Pill key={id} id={id} />)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
