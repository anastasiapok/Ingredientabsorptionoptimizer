import { useState } from "react";
import { goalSmoothies, GoalSmoothie } from "../data/goalSmoothies";
import { ingredients } from "../data/ingredients";
import { getIngredientQuantity } from "../data/ingredientQuantities";

interface ShoppingItem {
  ingredientId: string;
  name: string;
  emoji: string;
  quantity: string;
  category: string;
  rawAmount: number;
  unit: string;
}

interface SelectedSmoothie {
  id: string;
  name: string;
  emoji: string;
  ingredients: string[];
  servings: number;
  isCustom?: boolean;
}

interface ShoppingListProps {
  customSmoothie?: string[];
}

// Parse single serving to get raw grams/ml
function parseQuantity(quantityStr: string): { amount: number; unit: string } {
  const match = quantityStr.match(/\((\d+)(g|ml)\)/);
  if (!match) return { amount: 0, unit: 'g' };
  return { amount: parseInt(match[1]), unit: match[2] };
}

// Convert raw amount to realistic shopping quantity
function getRealPackageSize(ingredientId: string, totalAmount: number, unit: string): string {
  const ing = ingredients.find(i => i.id === ingredientId);

  if (ing?.category === 'liquid') {
    if (totalAmount <= 250) return '250ml';
    if (totalAmount <= 500) return '500ml';
    if (totalAmount <= 1000) return '1L';
    if (totalAmount <= 1500) return '1.5L';
    return '2L';
  }

  if (ing?.category === 'fruit') {
    if (ingredientId.includes('berry') || ingredientId === 'cherry' || ingredientId === 'cranberry') {
      if (totalAmount <= 125) return '125g pack';
      if (totalAmount <= 250) return '250g pack';
      if (totalAmount <= 500) return '500g pack';
      return `${Math.ceil(totalAmount / 500) * 500}g`;
    }

    if (['spinach', 'kale', 'mint', 'parsley'].includes(ingredientId)) {
      if (totalAmount <= 100) return '100g bag';
      if (totalAmount <= 200) return '200g bag';
      return '400g bag';
    }

    if (['banana', 'orange', 'lemon', 'lime', 'apple', 'pear', 'mango', 'avocado', 'kiwi'].includes(ingredientId)) {
      const singleAmount = parseQuantity(getIngredientQuantity(ingredientId)).amount;
      const count = Math.ceil(totalAmount / singleAmount);
      return `${count} piece${count > 1 ? 's' : ''}`;
    }

    if (['carrot', 'cucumber', 'celery', 'ginger', 'beet', 'tomato'].includes(ingredientId)) {
      const singleAmount = parseQuantity(getIngredientQuantity(ingredientId)).amount;
      const count = Math.ceil(totalAmount / singleAmount);
      if (count <= 3) return `${count} piece${count > 1 ? 's' : ''}`;
      return `${Math.ceil(totalAmount / 100) * 100}g`;
    }

    return `${Math.ceil(totalAmount / 100) * 100}g`;
  }

  if (ing?.category === 'extra') {
    if (ingredientId.includes('seeds')) {
      if (totalAmount <= 100) return '100g pack';
      if (totalAmount <= 200) return '200g pack';
      if (totalAmount <= 500) return '500g pack';
      return '1kg pack';
    }

    if (ingredientId.includes('powder') || ingredientId.includes('protein') || ingredientId.includes('collagen')) {
      if (totalAmount <= 250) return '250g container';
      if (totalAmount <= 500) return '500g container';
      return '1kg container';
    }

    if (ingredientId === 'honey') {
      if (totalAmount <= 250) return '250g jar';
      if (totalAmount <= 500) return '500g jar';
      return '1kg jar';
    }

    if (ingredientId === 'oats') {
      if (totalAmount <= 500) return '500g pack';
      return '1kg pack';
    }

    if (ingredientId.includes('butter')) {
      if (totalAmount <= 250) return '250g jar';
      if (totalAmount <= 500) return '500g jar';
      return '1kg jar';
    }

    if (['cinnamon', 'turmeric', 'ginger-powder', 'matcha', 'carob-powder'].includes(ingredientId) ||
        ['ashwagandha', 'rhodiola', 'holy-basil', 'cordyceps', 'reishi', 'lions-mane', 'eleuthero', 'schisandra', 'moringa'].includes(ingredientId)) {
      return '1 jar/bottle';
    }

    if (ingredientId.includes('nuts') || ['almonds', 'walnuts', 'cashews'].includes(ingredientId)) {
      if (totalAmount <= 100) return '100g pack';
      if (totalAmount <= 200) return '200g pack';
      if (totalAmount <= 500) return '500g pack';
      return '1kg pack';
    }
  }

  return `${Math.ceil(totalAmount / 50) * 50}${unit}`;
}

export function ShoppingList({ customSmoothie }: ShoppingListProps) {
  const [selectedSmoothies, setSelectedSmoothies] = useState<SelectedSmoothie[]>([]);
  const [alreadyHave, setAlreadyHave] = useState<Set<string>>(new Set());
  const [customCounter, setCustomCounter] = useState(0);

  const toggleSmoothie = (smoothie: GoalSmoothie) => {
    const exists = selectedSmoothies.find(s => s.id === smoothie.id && !s.isCustom);
    if (exists) {
      setSelectedSmoothies(prev => prev.filter(s => !(s.id === smoothie.id && !s.isCustom)));
    } else {
      setSelectedSmoothies(prev => [...prev, {
        id: smoothie.id,
        name: smoothie.name,
        emoji: smoothie.emoji,
        ingredients: smoothie.ingredients,
        servings: 1,
      }]);
    }
  };

  const addCustomSmoothie = () => {
    if (!customSmoothie || customSmoothie.length === 0) return;

    const newId = `custom-${Date.now()}`;
    setSelectedSmoothies(prev => [...prev, {
      id: newId,
      name: `Custom Smoothie ${customCounter + 1}`,
      emoji: '🧬',
      ingredients: customSmoothie,
      servings: 1,
      isCustom: true,
    }]);
    setCustomCounter(prev => prev + 1);
  };

  const removeSmoothie = (smoothieId: string) => {
    setSelectedSmoothies(prev => prev.filter(s => s.id !== smoothieId));
  };

  const updateServings = (smoothieId: string, servings: number) => {
    setSelectedSmoothies(prev =>
      prev.map(s => s.id === smoothieId ? { ...s, servings: Math.max(1, servings) } : s)
    );
  };

  const setServingsPreset = (smoothieId: string, preset: number) => {
    updateServings(smoothieId, preset);
  };

  const toggleAlreadyHave = (ingredientId: string) => {
    setAlreadyHave(prev => {
      const next = new Set(prev);
      if (next.has(ingredientId)) {
        next.delete(ingredientId);
      } else {
        next.add(ingredientId);
      }
      return next;
    });
  };

  // Aggregate all ingredients across all smoothies
  const generateShoppingList = (): ShoppingItem[] => {
    const aggregated: Record<string, { totalAmount: number; unit: string }> = {};

    selectedSmoothies.forEach(smoothie => {
      smoothie.ingredients.forEach(ingredientId => {
        const parsed = parseQuantity(getIngredientQuantity(ingredientId));
        const totalForThisSmoothie = parsed.amount * smoothie.servings;

        if (!aggregated[ingredientId]) {
          aggregated[ingredientId] = { totalAmount: 0, unit: parsed.unit };
        }
        aggregated[ingredientId].totalAmount += totalForThisSmoothie;
      });
    });

    const items: ShoppingItem[] = [];
    Object.entries(aggregated).forEach(([ingredientId, { totalAmount, unit }]) => {
      const ing = ingredients.find(i => i.id === ingredientId);
      if (!ing) return;

      items.push({
        ingredientId,
        name: ing.name,
        emoji: ing.emoji,
        quantity: getRealPackageSize(ingredientId, totalAmount, unit),
        category: ing.category === 'fruit' ? 'Fruits & Vegetables' :
                  ing.category === 'liquid' ? 'Liquids' : 'Extras',
        rawAmount: totalAmount,
        unit,
      });
    });

    return items.sort((a, b) => a.category.localeCompare(b.category));
  };

  const shoppingList = generateShoppingList();
  const filteredList = shoppingList.filter(item => !alreadyHave.has(item.ingredientId));
  const groupedList = filteredList.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ShoppingItem[]>);

  const hasCustom = customSmoothie && customSmoothie.length > 0;
  const totalServings = selectedSmoothies.reduce((sum, s) => sum + s.servings, 0);

  return (
    <div>
      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #shopping-list-print, #shopping-list-print * {
            visibility: visible;
          }
          #shopping-list-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
          }
          #shopping-list-print h3 {
            font-size: 24px;
            margin-bottom: 16px;
            color: #000;
          }
          #shopping-list-print p {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: bold;
            margin-top: 16px;
            margin-bottom: 8px;
            color: #666;
          }
          #shopping-list-print .ingredient-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Intro */}
      <div className="mb-6 no-print">
        <h2 className="text-lg font-semibold text-foreground mb-1">Shopping Lists</h2>
        <p className="text-sm text-muted-foreground">
          Select multiple smoothies, add custom smoothies, set servings, and get a combined shopping list with realistic package sizes.
        </p>
      </div>

      {/* Custom smoothie import */}
      {hasCustom && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 mb-5 no-print">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                🧬 Your Custom Smoothie Builder
              </p>
              <p className="text-xs text-muted-foreground">
                {customSmoothie.length} ingredients selected • Click to add each time you want this smoothie
              </p>
            </div>
            <button
              onClick={addCustomSmoothie}
              className="px-4 py-2 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-all"
            >
              + Add Custom Smoothie
            </button>
          </div>
        </div>
      )}

      {/* Smoothie selection grid */}
      <div className="rounded-xl border border-border bg-secondary/20 p-5 mb-5 no-print">
        <h3 className="text-sm font-semibold text-foreground mb-3">Select Targeted Smoothies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {goalSmoothies.map(smoothie => {
            const isSelected = selectedSmoothies.find(s => s.id === smoothie.id && !s.isCustom);
            return (
              <button
                key={smoothie.id}
                onClick={() => toggleSmoothie(smoothie)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-2xl">{smoothie.emoji}</span>
                  {isSelected && (
                    <span className="text-primary text-lg">✓</span>
                  )}
                </div>
                <div className="text-xs font-medium text-foreground">{smoothie.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{smoothie.goal}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected smoothies with servings */}
      {selectedSmoothies.length > 0 && (
        <div className="rounded-xl border border-border bg-secondary/20 p-5 mb-5 no-print">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Servings per Smoothie ({selectedSmoothies.length} selected)
          </h3>
          <div className="space-y-3">
            {selectedSmoothies.map(smoothie => (
              <div key={smoothie.id} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xl">{smoothie.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{smoothie.name}</p>
                    <p className="text-xs text-muted-foreground">{smoothie.ingredients.length} ingredients</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Quick presets */}
                  <div className="flex gap-1">
                    {[1, 2, 5, 7].map(preset => (
                      <button
                        key={preset}
                        onClick={() => setServingsPreset(smoothie.id, preset)}
                        className={`w-8 h-8 rounded text-xs font-semibold transition-all ${
                          smoothie.servings === preset
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                        }`}
                        title={preset === 1 ? '1 serving' : preset === 2 ? '2 servings (couple)' : preset === 5 ? '5 servings (weekdays)' : '7 servings (full week)'}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  {/* Manual adjust */}
                  <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
                    <button
                      onClick={() => updateServings(smoothie.id, smoothie.servings - 1)}
                      className="w-8 h-8 rounded border border-border hover:bg-secondary transition-colors font-semibold"
                    >
                      −
                    </button>
                    <span className="text-sm font-bold text-foreground w-8 text-center">
                      {smoothie.servings}
                    </span>
                    <button
                      onClick={() => updateServings(smoothie.id, smoothie.servings + 1)}
                      className="w-8 h-8 rounded border border-border hover:bg-secondary transition-colors font-semibold"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeSmoothie(smoothie.id)}
                    className="ml-2 w-8 h-8 rounded border border-border hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
                    title="Remove from list"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shopping list */}
      {selectedSmoothies.length > 0 && (
        <div className="rounded-xl border border-border bg-secondary/20 p-5">
          <div id="shopping-list-print">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">
                Combined Shopping List
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                {totalServings} total serving{totalServings !== 1 ? 's' : ''}
              </span>
            </div>

            {Object.entries(groupedList).map(([category, items]) => (
              <div key={category} className="mb-4 last:mb-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  {category}
                </p>
                <div className="space-y-2">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-background border border-border ingredient-item"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={alreadyHave.has(item.ingredientId)}
                          onChange={() => toggleAlreadyHave(item.ingredientId)}
                          className="w-4 h-4 no-print cursor-pointer"
                          title="Check if you already have this"
                        />
                        <span className="text-lg">{item.emoji}</span>
                        <span className="text-sm text-foreground">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Already have summary */}
          {alreadyHave.size > 0 && (
            <div className="mt-4 pt-4 border-t border-border no-print">
              <p className="text-xs text-muted-foreground">
                ✓ {alreadyHave.size} item{alreadyHave.size > 1 ? 's' : ''} you already have (hidden from list)
                <button
                  onClick={() => setAlreadyHave(new Set())}
                  className="ml-2 text-primary hover:underline"
                >
                  Clear all
                </button>
              </p>
            </div>
          )}

          {/* Print/Copy buttons */}
          <div className="mt-4 pt-4 border-t border-border flex gap-2 no-print">
            <button
              onClick={() => {
                const text = `Shopping List (${totalServings} servings)\n\n` +
                  Object.entries(groupedList)
                    .map(([cat, items]) =>
                      `${cat}:\n${items.map(i => `☐ ${i.emoji} ${i.name}: ${i.quantity}`).join('\n')}`
                    )
                    .join('\n\n');
                navigator.clipboard.writeText(text);
              }}
              className="flex-1 py-2 px-4 rounded-lg border border-border bg-background hover:bg-secondary transition-colors text-sm font-medium"
            >
              📋 Copy to Clipboard
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-2 px-4 rounded-lg border border-border bg-background hover:bg-secondary transition-colors text-sm font-medium"
            >
              🖨️ Print List
            </button>
          </div>
        </div>
      )}

      {selectedSmoothies.length === 0 && (
        <div className="rounded-xl border border-border bg-secondary/20 p-12 text-center no-print">
          <span className="text-5xl mb-3 block">🛒</span>
          <p className="text-base font-semibold text-foreground mb-2">Select smoothies to start</p>
          <p className="text-sm text-muted-foreground">
            Choose one or more smoothies above to generate a combined shopping list
          </p>
        </div>
      )}
    </div>
  );
}
