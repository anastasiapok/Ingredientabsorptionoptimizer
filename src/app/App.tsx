import { useState } from "react";
import { SmartFinder } from "./components/SmartFinder";
import { GoalSmoothies } from "./components/GoalSmoothies";
import { IngredientPicker } from "./components/IngredientPicker";
import { InteractionFeedback } from "./components/InteractionFeedback";
import { OptimizationSuggestions } from "./components/OptimizationSuggestions";
import { CustomSmoothieAnalysis } from "./components/CustomSmoothieAnalysis";
import { SynergyScore } from "./components/SynergyScore";
import { InteractionTable } from "./components/InteractionTable";
import { TagExplorer } from "./components/TagExplorer";
import { TagRulesTable } from "./components/TagRulesTable";
import { GoalBenefitsEvidence } from "./components/GoalBenefitsEvidence";
import { GiSummary } from "./components/GiSummary";
import { ShoppingList } from "./components/ShoppingList";
import { IngredientDetailModal } from "./components/IngredientDetailModal";
import { ingredients } from "./data/ingredients";
import { getIngredientQuantity } from "./data/ingredientQuantities";

export default function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [showInteractions, setShowInteractions] = useState(false);
  const [showOptimization, setShowOptimization] = useState(false);
  const [detailModalIngredientId, setDetailModalIngredientId] = useState<string | null>(null);

  const handleToggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    setShowInteractions(false);
    setShowOptimization(false);
  };

  const handleSwapIngredient = (removeId: string, addId: string) => {
    setSelectedIngredients((prev) => {
      if (removeId === "") return [...prev, addId];
      return [...prev.filter((id) => id !== removeId), addId];
    });
  };

  const handleRemoveIngredient = (id: string) => {
    setSelectedIngredients((prev) => prev.filter((i) => i !== id));
  };

  const loadExampleSmoothie = () => {
    setSelectedIngredients(["banana", "blueberry", "spinach", "yogurt"]);
    setActiveTab(2);
  };

  const resetSmoothie = () => {
    setSelectedIngredients([]);
    setShowInteractions(false);
    setShowOptimization(false);
  };

  const selectedIngredientObjects = selectedIngredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter(Boolean);

  // Count by category for smoothie building guide
  const fruitCount = selectedIngredientObjects.filter(i => i!.category === 'fruit').length;
  const liquidCount = selectedIngredientObjects.filter(i => i!.category === 'liquid').length;
  const extraCount = selectedIngredientObjects.filter(i => i!.category === 'extra').length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-border no-print">
        {/* Background photo */}
        <img
          src="https://images.unsplash.com/photo-1662130187270-a4d52c700eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "blur(3px) saturate(1.1)", transform: "scale(1.08)" }}
        />
        {/* Gradient overlay — mint → lilac */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(61,191,154,0.72) 0%, rgba(124,92,191,0.78) 100%)" }}
        />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/90 text-xs font-medium mb-4 tracking-wide uppercase">
            Science-backed nutrition
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow mb-2 flex items-center justify-center gap-3">
            <span>🧬</span> Smoothily
          </h1>
          <p className="text-white/80 text-sm mt-1 mb-5">
            It's not only what you eat. It's how you combine it.
          </p>
          {selectedIngredients.length === 0 && (
            <button
              onClick={loadExampleSmoothie}
              className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white text-sm font-medium hover:bg-white/30 transition-colors"
            >
              🧪 Try Example Smoothie
            </button>
          )}
        </div>

        {/* Tabs sit on top of the hero bottom edge */}
        <div className="relative max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {["Find My Smoothie", "Targeted Smoothies", "Custom Builder", "Shopping Lists", "Science & Evidence"].map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap ${
                activeTab === i
                  ? "bg-background text-primary border-t border-x border-border shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 0 && (
          <SmartFinder
            onLoadSmoothie={(ids) => {
              setSelectedIngredients(ids);
              setShowInteractions(false);
              setShowOptimization(false);
            }}
            onSwitchToBuilder={() => setActiveTab(2)}
          />
        )}

        {activeTab === 1 && (
          <GoalSmoothies
            onLoadSmoothie={(ids) => {
              setSelectedIngredients(ids);
              setActiveTab(2);
            }}
          />
        )}

        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5">
            {/* Left column */}
            <div className="flex flex-col gap-5">
              {/* Smoothie building guide */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-5">
                <p className="text-sm font-semibold text-primary mb-2">🧪 How to build a balanced smoothie</p>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-foreground font-medium shrink-0">🍓 2-3 fruits</span>
                    <span>Base flavors and nutrients</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground font-medium shrink-0">🥛 1 liquid</span>
                    <span>Blend consistency (milk, water, juice)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground font-medium shrink-0">✨ 1+ extra</span>
                    <span>Protein, seeds, or superfoods for boost</span>
                  </div>
                </div>
              </div>

              {/* Ingredient picker */}
              <div className="rounded-xl border border-border bg-secondary/20 p-5">
                <h2 className="text-base font-semibold mb-4 text-foreground">Select Ingredients</h2>
                <IngredientPicker
                  selectedIngredients={selectedIngredients}
                  onToggleIngredient={handleToggleIngredient}
                  onIngredientClick={setDetailModalIngredientId}
                />
              </div>

              {/* Selected ingredients or empty state */}
              {selectedIngredients.length > 0 ? (
                <div className="rounded-xl border border-border bg-secondary/20 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-base font-semibold text-foreground">
                        Your Smoothie{" "}
                        <span className="text-muted-foreground font-normal text-sm">
                          ({selectedIngredients.length} ingredient{selectedIngredients.length !== 1 ? "s" : ""})
                        </span>
                      </h2>
                      <button
                        onClick={resetSmoothie}
                        className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors"
                        title="Clear all ingredients and start over"
                      >
                        🔄 Reset
                      </button>
                    </div>
                    {/* Category breakdown */}
                    <div className="flex gap-2 text-xs">
                      <span className={`px-2 py-0.5 rounded-full ${fruitCount >= 2 && fruitCount <= 3 ? 'bg-green-900/40 text-green-400' : 'bg-secondary text-muted-foreground'}`}>
                        🍓 {fruitCount}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full ${liquidCount >= 1 ? 'bg-green-900/40 text-green-400' : 'bg-secondary text-muted-foreground'}`}>
                        🥛 {liquidCount}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full ${extraCount >= 1 ? 'bg-green-900/40 text-green-400' : 'bg-secondary text-muted-foreground'}`}>
                        ✨ {extraCount}
                      </span>
                    </div>
                  </div>

                  {/* Quantities list */}
                  <div className="mb-4 rounded-lg border border-border/60 overflow-hidden">
                    <div className="px-3 py-2 bg-secondary/40 border-b border-border/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">Suggested quantities</span>
                      <span className="text-xs text-muted-foreground">1 serving (12-16 oz)</span>
                    </div>
                    <div className="divide-y divide-border/40">
                      {selectedIngredientObjects.map((ingredient) => (
                        <div key={ingredient!.id} className="flex items-center justify-between px-3 py-2 hover:bg-secondary/20 transition-colors group">
                          <div
                            className="flex items-center gap-2 flex-1 cursor-pointer"
                            onMouseEnter={() => setDetailModalIngredientId(ingredient!.id)}
                          >
                            <span>{ingredient!.emoji}</span>
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">{ingredient!.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground font-medium">{getIngredientQuantity(ingredient!.id)}</span>
                            <button
                              onClick={() => handleRemoveIngredient(ingredient!.id)}
                              className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`Remove ${ingredient!.name}`}
                            >
                              <span className="text-lg leading-none">×</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pills view */}
                  <div className="flex flex-wrap gap-2">
                    {selectedIngredientObjects.map((ingredient) => (
                      <span
                        key={ingredient!.id}
                        onMouseEnter={() => setDetailModalIngredientId(ingredient!.id)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs text-primary font-medium hover:bg-primary/30 transition-colors cursor-pointer"
                      >
                        {ingredient!.emoji} {ingredient!.name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-border bg-secondary/20 p-8 text-center">
                  <span className="text-5xl mb-3 block">🧬</span>
                  <p className="text-base font-semibold text-foreground mb-2">Start Building Your Smoothie</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow the formula above: 2-3 fruits + 1 liquid + 1+ extra
                  </p>
                  <div className="inline-flex flex-col gap-2 text-xs text-muted-foreground text-left bg-background/50 rounded-lg p-4 border border-border/50">
                    <p className="font-semibold text-foreground mb-1">What happens next:</p>
                    <p><span className="text-foreground">1.</span> See your synergy score instantly</p>
                    <p><span className="text-foreground">2.</span> Reveal nutrient interactions</p>
                    <p><span className="text-foreground">3.</span> Get optimization suggestions</p>
                    <p><span className="text-foreground">4.</span> View suggested quantities</p>
                  </div>
                </div>
              )}

              {selectedIngredients.length > 0 && (
                <CustomSmoothieAnalysis
                  selectedIngredients={selectedIngredients}
                  onSwapIngredient={handleSwapIngredient}
                />
              )}

              {/* Reveal Nutrient Interactions button + content */}
              {selectedIngredients.length > 0 && !showInteractions && (
                <button
                  onClick={() => setShowInteractions(true)}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  🔬 Reveal Nutrient Interactions
                </button>
              )}
              {showInteractions && <InteractionFeedback selectedIngredients={selectedIngredients} />}

              {/* Improve My Smoothie button + content */}
              {selectedIngredients.length > 0 && !showOptimization && (
                <button
                  onClick={() => setShowOptimization(true)}
                  className="w-full py-3.5 rounded-xl bg-green-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  💡 Improve My Smoothie
                </button>
              )}
              {showOptimization && (
                <OptimizationSuggestions
                  selectedIngredients={selectedIngredients}
                  onSwapIngredient={handleSwapIngredient}
                />
              )}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5">
              <SynergyScore selectedIngredients={selectedIngredients} />

              {/* GI Summary */}
              {selectedIngredients.length > 0 && <GiSummary selectedIngredients={selectedIngredients} />}

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-semibold text-primary mb-2">💡 How scoring works</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                  Each interaction adds or subtracts points based on impact size:
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <span className="text-foreground font-medium">Large impact:</span> ±12–15 points</li>
                  <li>• <span className="text-foreground font-medium">Medium impact:</span> ±8 points</li>
                  <li>• <span className="text-foreground font-medium">Small impact:</span> ±4–5 points</li>
                </ul>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                  Score starts at 50 and adjusts based on detected interactions.
                </p>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                <p className="text-sm font-semibold text-yellow-400 mb-1">⚠️ Important</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This tool provides general guidance based on research. Individual nutritional needs vary.
                  Consult a healthcare professional for personalized advice.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 3 && <ShoppingList customSmoothie={selectedIngredients} />}

        {activeTab === 4 && (
          <div className="flex flex-col gap-5">
            <InteractionTable />
            <GoalBenefitsEvidence />
            <TagExplorer onIngredientClick={setDetailModalIngredientId} />
          </div>
        )}
      </div>

      {/* Ingredient Detail Modal */}
      {detailModalIngredientId && (
        <IngredientDetailModal
          ingredientId={detailModalIngredientId}
          onClose={() => setDetailModalIngredientId(null)}
        />
      )}
    </div>
  );
}
