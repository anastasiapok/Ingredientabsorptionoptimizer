import { useState } from 'react';
import { LabMarkersFinder } from './LabMarkersFinder';
import { HowIFeelFinder } from './HowIFeelFinder';

interface SmartFinderProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
  onSwitchToBuilder: () => void;
}

export function SmartFinder({ onLoadSmoothie, onSwitchToBuilder }: SmartFinderProps) {
  const [activeSubTab, setActiveSubTab] = useState<'lab' | 'feel'>('feel');

  return (
    <div>
      {/* Sub-tabs */}
      <div className="flex gap-3 mb-8 justify-center">
        <button
          onClick={() => setActiveSubTab('lab')}
          className={`px-6 py-4 rounded-xl border transition-all ${
            activeSubTab === 'lab'
              ? 'border-primary bg-primary text-primary-foreground shadow-md'
              : 'border-border bg-card text-foreground hover:border-primary/40'
          }`}
        >
          <div className="text-center">
            <p className="font-bold text-base mb-1">🧪 Lab Markers & Nutritional Gaps</p>
            <p className="text-xs opacity-80">I have test results or know I'm low in something</p>
          </div>
        </button>
        <button
          onClick={() => setActiveSubTab('feel')}
          className={`px-6 py-4 rounded-xl border transition-all ${
            activeSubTab === 'feel'
              ? 'border-primary bg-primary text-primary-foreground shadow-md'
              : 'border-border bg-card text-foreground hover:border-primary/40'
          }`}
        >
          <div className="text-center">
            <p className="font-bold text-base mb-1">💭 How I Feel</p>
            <p className="text-xs opacity-80">I know how I feel — I want to fix that</p>
          </div>
        </button>
      </div>

      {/* Content */}
      {activeSubTab === 'lab' ? (
        <LabMarkersFinder
          onLoadSmoothie={onLoadSmoothie}
          onSwitchToBuilder={onSwitchToBuilder}
        />
      ) : (
        <HowIFeelFinder
          onLoadSmoothie={onLoadSmoothie}
          onSwitchToBuilder={onSwitchToBuilder}
        />
      )}
    </div>
  );
}
