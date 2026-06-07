import { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { goalSmoothies } from '../data/goalSmoothies';

interface LabMarkersFinderProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
  onSwitchToBuilder: () => void;
}

const labMarkers = {
  vitamins: [
    { id: 'low-vitamin-d', label: 'Low vitamin D' },
    { id: 'low-vitamin-b12', label: 'Low vitamin B12' },
    { id: 'low-vitamin-c', label: 'Low vitamin C' },
    { id: 'low-vitamin-a', label: 'Low vitamin A' },
    { id: 'low-folate', label: 'Low folate (B9)' },
    { id: 'low-vitamin-e', label: 'Low vitamin E' },
    { id: 'low-vitamin-k', label: 'Low vitamin K' },
    { id: 'low-vitamin-b6', label: 'Low vitamin B6' },
  ],
  minerals: [
    { id: 'low-iron', label: 'Low iron' },
    { id: 'low-calcium', label: 'Low calcium' },
    { id: 'low-magnesium', label: 'Low magnesium' },
    { id: 'low-zinc', label: 'Low zinc' },
    { id: 'low-potassium', label: 'Low potassium' },
    { id: 'low-selenium', label: 'Low selenium' },
    { id: 'low-iodine', label: 'Low iodine' },
    { id: 'low-ferritin', label: 'Low ferritin' },
  ],
  macros: [
    { id: 'low-protein', label: 'Low protein' },
    { id: 'low-omega-3', label: 'Low omega-3' },
    { id: 'low-fibre', label: 'Low fibre' },
    { id: 'low-collagen', label: 'Low collagen' },
    { id: 'low-antioxidants', label: 'Low antioxidants' },
    { id: 'high-blood-sugar', label: 'High blood sugar' },
    { id: 'high-cholesterol', label: 'High cholesterol' },
    { id: 'high-crp', label: 'High CRP (inflammation)' },
    { id: 'high-homocysteine', label: 'High homocysteine' },
  ],
  hormones: [
    { id: 'low-oestrogen', label: 'Low oestrogen' },
    { id: 'low-testosterone', label: 'Low testosterone' },
    { id: 'low-thyroid', label: 'Low thyroid (T3/T4)' },
    { id: 'low-cortisol', label: 'Low cortisol' },
    { id: 'low-melatonin', label: 'Low melatonin' },
    { id: 'low-dhea', label: 'Low DHEA' },
    { id: 'insulin-resistance', label: 'Insulin resistance' },
  ],
};

export function LabMarkersFinder({ onLoadSmoothie, onSwitchToBuilder }: LabMarkersFinderProps) {
  const [selectedMarkers, setSelectedMarkers] = useState<string[]>([]);
  const [generatedSmoothie, setGeneratedSmoothie] = useState<any | null>(null);
  const [personalizedExplanation, setPersonalizedExplanation] = useState<string>('');
  const [alternativeSmoothies, setAlternativeSmoothies] = useState<any[]>([]);

  const handleMarkerToggle = (markerId: string) => {
    setSelectedMarkers(prev =>
      prev.includes(markerId)
        ? prev.filter(m => m !== markerId)
        : [...prev, markerId]
    );
  };

  const generateSmoothie = () => {
    // Map lab markers to smoothie scores
    const smoothieScores = goalSmoothies.map(smoothie => {
      let score = 0;
      let matchedMarkers: string[] = [];

      selectedMarkers.forEach(marker => {
        // Vitamin C
        if (marker === 'low-vitamin-c' && ['antioxidant-blast', 'iron-boost', 'wake-up', 'skin-glow'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Vitamin A / Beta-carotene
        if (marker === 'low-vitamin-a' && ['skin-glow', 'adaptogen-glow'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Folate
        if (marker === 'low-folate' && ['trying-to-conceive', 'pregnancy', 'iron-boost'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Vitamin K
        if (marker === 'low-vitamin-k' && ['calcium-absorption', 'menopause'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Iron
        if (['low-iron', 'low-ferritin'].includes(marker) && ['iron-boost'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Calcium
        if (marker === 'low-calcium' && ['calcium-absorption', 'menopause', 'pregnancy'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Magnesium
        if (marker === 'low-magnesium' && ['stress-relief', 'cortisol-lowering', 'muscle-recovery'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Protein
        if (marker === 'low-protein' && ['high-protein', 'muscle-recovery'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Omega-3
        if (marker === 'low-omega-3' && ['focus-concentration', 'estrogen-balance', 'menopause'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Fibre
        if (marker === 'low-fibre' && ['gut-health', 'gut-movement'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Antioxidants
        if (marker === 'low-antioxidants' && ['antioxidant-blast', 'skin-glow'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // High blood sugar
        if (marker === 'high-blood-sugar' && ['gut-health', 'stress-relief'].includes(smoothie.id)) {
          score += 8;
          matchedMarkers.push(marker);
        }
        // High CRP / Inflammation
        if (marker === 'high-crp' && ['antioxidant-blast', 'muscle-recovery', 'detox-cleanse'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Low oestrogen
        if (marker === 'low-oestrogen' && ['estrogen-balance', 'menopause'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Low testosterone
        if (marker === 'low-testosterone' && ['testosterone'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Low melatonin
        if (marker === 'low-melatonin' && ['wind-down', 'adaptogen-calm'].includes(smoothie.id)) {
          score += 10;
          matchedMarkers.push(marker);
        }
        // Insulin resistance
        if (marker === 'insulin-resistance' && ['gut-health', 'stress-relief'].includes(smoothie.id)) {
          score += 8;
          matchedMarkers.push(marker);
        }
      });

      return { smoothie, score, matchedMarkers };
    });

    // Sort by score
    smoothieScores.sort((a, b) => b.score - a.score);

    const topMatch = smoothieScores[0];
    setGeneratedSmoothie(topMatch.smoothie);

    // Generate explanation
    const markerLabels = selectedMarkers.map(m => {
      for (const category of Object.values(labMarkers)) {
        const found = category.find(marker => marker.id === m);
        if (found) return found.label;
      }
      return '';
    }).filter(Boolean);

    const explanation = `Based on your lab results (${markerLabels.join(', ')}), this smoothie provides targeted nutritional support.`;
    setPersonalizedExplanation(explanation);

    // Find alternatives
    const alternatives = smoothieScores
      .slice(1, 4)
      .filter(s => s.score > 0)
      .map(s => s.smoothie);
    setAlternativeSmoothies(alternatives);
  };

  const canGenerate = selectedMarkers.length > 0;

  if (generatedSmoothie) {
    const smoothieIngredients = generatedSmoothie.ingredients
      .map((id: string) => ingredients.find((i) => i.id === id))
      .filter(Boolean);

    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
            <span>✓</span> Perfect Match Found
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Targeted Smoothie</h2>
          <p className="text-sm text-muted-foreground">Based on your lab markers and nutritional needs</p>
        </div>

        <div
          className="rounded-2xl border bg-card overflow-hidden mb-6"
          style={{ borderTopColor: generatedSmoothie.color, borderTopWidth: 4 }}
        >
          <div className="p-6">
            <div className="flex items-start gap-4 mb-5">
              <span className="text-5xl">{generatedSmoothie.emoji}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{generatedSmoothie.name}</h3>
                <p className="text-sm text-muted-foreground italic mb-3">{generatedSmoothie.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{generatedSmoothie.description}</p>
              </div>
            </div>

            {personalizedExplanation && (
              <div className="mb-4 p-4 rounded-lg border border-primary/30 bg-primary/5">
                <p className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <span>✨</span> Personalized For Your Results
                </p>
                <p className="text-sm text-foreground">{personalizedExplanation}</p>
              </div>
            )}

            <div className="mb-5">
              <p className="text-sm font-semibold text-foreground mb-3">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {smoothieIngredients.map((ing: any) => (
                  <span key={ing.id} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {ing.emoji} {ing.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-5 p-4 rounded-lg bg-secondary/30">
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>💡</span> Why This Works
              </p>
              <ul className="space-y-2">
                {generatedSmoothie.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-sm text-foreground">
                    <span className="shrink-0 mt-0.5" style={{ color: generatedSmoothie.color }}>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onLoadSmoothie(generatedSmoothie.ingredients);
                  onSwitchToBuilder();
                }}
                className="flex-1 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: generatedSmoothie.color }}
              >
                Make This Smoothie →
              </button>
              <button
                onClick={() => {
                  setGeneratedSmoothie(null);
                  setSelectedMarkers([]);
                  setPersonalizedExplanation('');
                  setAlternativeSmoothies([]);
                }}
                className="px-5 py-3 rounded-xl border border-border bg-secondary text-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                ← Start Over
              </button>
            </div>
          </div>
        </div>

        {alternativeSmoothies.length > 0 && (
          <div className="max-w-3xl mx-auto mt-6">
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
              <p className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span>💡</span> Also Consider These For Your Other Needs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {alternativeSmoothies.map((altSmoothie) => (
                  <div
                    key={altSmoothie.id}
                    className="p-3 rounded-lg border border-border bg-card hover:border-primary/40 transition-all cursor-pointer"
                    onClick={() => setGeneratedSmoothie(altSmoothie)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{altSmoothie.emoji}</span>
                      <p className="font-semibold text-sm text-foreground">{altSmoothie.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground italic">{altSmoothie.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Lab Markers</h2>
        <p className="text-sm text-muted-foreground">Choose all that apply from your test results</p>
      </div>

      {/* Vitamins */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Vitamins</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {labMarkers.vitamins.map((marker) => (
            <button
              key={marker.id}
              onClick={() => handleMarkerToggle(marker.id)}
              className={`p-2.5 rounded-lg border text-left text-sm transition-all ${
                selectedMarkers.includes(marker.id)
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border bg-background text-foreground hover:border-primary/40'
              }`}
            >
              {marker.label}
            </button>
          ))}
        </div>
      </div>

      {/* Minerals */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Minerals</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {labMarkers.minerals.map((marker) => (
            <button
              key={marker.id}
              onClick={() => handleMarkerToggle(marker.id)}
              className={`p-2.5 rounded-lg border text-left text-sm transition-all ${
                selectedMarkers.includes(marker.id)
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border bg-background text-foreground hover:border-primary/40'
              }`}
            >
              {marker.label}
            </button>
          ))}
        </div>
      </div>

      {/* Macros & markers */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Macros & Markers</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {labMarkers.macros.map((marker) => (
            <button
              key={marker.id}
              onClick={() => handleMarkerToggle(marker.id)}
              className={`p-2.5 rounded-lg border text-left text-sm transition-all ${
                selectedMarkers.includes(marker.id)
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border bg-background text-foreground hover:border-primary/40'
              }`}
            >
              {marker.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hormones */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Hormones & Advanced</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {labMarkers.hormones.map((marker) => (
            <button
              key={marker.id}
              onClick={() => handleMarkerToggle(marker.id)}
              className={`p-2.5 rounded-lg border text-left text-sm transition-all ${
                selectedMarkers.includes(marker.id)
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border bg-background text-foreground hover:border-primary/40'
              }`}
            >
              {marker.label}
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <div className="flex gap-3">
        <button
          onClick={generateSmoothie}
          disabled={!canGenerate}
          className={`flex-1 py-4 rounded-xl font-bold text-base transition-all ${
            canGenerate
              ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-lg'
              : 'bg-secondary text-muted-foreground cursor-not-allowed'
          }`}
        >
          ✨ Get My Targeted Smoothie
        </button>
        <button
          onClick={onSwitchToBuilder}
          className="px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
        >
          Build Custom Instead
        </button>
      </div>
    </div>
  );
}
