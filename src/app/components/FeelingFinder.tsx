import { useState } from 'react';
import { feelingSmoothies } from '../data/feelingSmoothies';
import { goalSmoothies } from '../data/goalSmoothies';

interface FeelingFinderProps {
  onLoadSmoothie: (ids: string[]) => void;
}

export function FeelingFinder({ onLoadSmoothie }: FeelingFinderProps) {
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);

  const handleFeelingClick = (feelingId: string, smoothieId: string) => {
    setSelectedFeeling(feelingId);
    const targetSmoothie = goalSmoothies.find(s => s.id === smoothieId);
    if (targetSmoothie) {
      onLoadSmoothie(targetSmoothie.ingredients);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
          <span>💭</span> How are you feeling today?
        </h2>
        <p className="text-sm text-muted-foreground">
          Select a feeling or symptom to get a tailored smoothie recommendation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {feelingSmoothies.map((item) => {
          const targetSmoothie = goalSmoothies.find(s => s.id === item.smoothieId);
          const isSelected = selectedFeeling === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleFeelingClick(item.id, item.smoothieId)}
              className={`text-left p-4 rounded-lg border transition-all ${
                isSelected
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-border bg-background hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {item.feeling}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.description}
                  </p>
                  {targetSmoothie && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: targetSmoothie.color }} />
                      <span className="text-xs font-medium text-foreground">
                        {targetSmoothie.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
