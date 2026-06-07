import { ingredientDetails } from '../data/ingredientDetails';
import { NutrientPopover } from './NutrientPopover';

interface IngredientDetailModalProps {
  ingredientId: string;
  onClose: () => void;
  onMouseEnter?: () => void;
}

export function IngredientDetailModal({ ingredientId, onClose, onMouseEnter }: IngredientDetailModalProps) {
  const detail = ingredientDetails[ingredientId];

  if (!detail) {
    return null;
  }

  return (
    <>
      {/* Sidebar */}
      <div
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border overflow-y-auto pointer-events-auto shadow-2xl animate-fadeIn z-50"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onClose}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{detail.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{detail.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    GI {detail.gi} · {detail.giCategory}
                  </span>
                  {detail.category && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {detail.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none shrink-0"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Nutrients */}
          <div className="mb-5">
            <p className="text-sm font-semibold text-foreground mb-3">Key Nutrients & Compounds</p>
            <div className="flex flex-wrap gap-2">
              {detail.nutrients.map((nutrient, idx) => {
                const isInhibitor = nutrient.includes('(inhibitor)');
                const isWarning = nutrient.startsWith('⚠️');
                const isEnhanced = nutrient.includes('❄️');
                const isPotentiator = nutrient.startsWith('⚡');

                return (
                  <NutrientPopover key={idx} nutrient={nutrient}>
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${
                        isInhibitor
                          ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                          : isWarning
                          ? 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400'
                          : isEnhanced
                          ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                          : isPotentiator
                          ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {nutrient}
                    </span>
                  </NutrientPopover>
                );
              })}
            </div>
          </div>

          {/* Fibre Level */}
          {detail.fibreLevel && (
            <div className="mb-5 p-4 rounded-lg bg-secondary/30">
              <p className="text-sm font-semibold text-foreground mb-1">Fibre Content</p>
              <p className="text-sm text-muted-foreground">{detail.fibreLevel}</p>
            </div>
          )}

          {/* Special Notes */}
          {detail.notes && detail.notes.length > 0 && (
            <div className="mb-5 p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
              <p className="text-sm font-semibold text-yellow-400 mb-2">⚠️ Important Notes</p>
              <ul className="space-y-1.5">
                {detail.notes.map((note, idx) => (
                  <li key={idx} className="text-sm text-foreground flex gap-2">
                    <span className="shrink-0">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Best Paired With */}
          {detail.bestPairedWith && detail.bestPairedWith.length > 0 && (
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm font-semibold text-primary mb-2">💡 Best Paired With</p>
              <div className="flex flex-wrap gap-2">
                {detail.bestPairedWith.map((pairing, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                    {pairing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
