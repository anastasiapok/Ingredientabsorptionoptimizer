import { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { goalSmoothies } from '../data/goalSmoothies';

interface HowIFeelFinderProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
  onSwitchToBuilder: () => void;
}

const symptoms = {
  energy: [
    { id: 'low-energy-fatigue', label: 'Low energy / fatigue' },
    { id: 'brain-fog', label: 'Brain fog' },
    { id: 'poor-concentration', label: 'Poor concentration' },
    { id: 'afternoon-slump', label: 'Afternoon slump' },
    { id: 'post-workout-crash', label: 'Post-workout crash' },
    { id: 'always-cold-tired', label: 'Always cold & tired' },
  ],
  mood: [
    { id: 'anxiety-wired', label: 'Anxiety / feeling wired' },
    { id: 'low-mood-flatness', label: 'Low mood / flatness' },
    { id: 'anger-irritability', label: 'Anger / irritability' },
    { id: 'stress-burnout', label: 'Stress & burnout' },
    { id: 'emotional-eating', label: 'Emotional eating urges' },
    { id: 'overwhelm', label: 'Overwhelm / overstimulation' },
  ],
  sleep: [
    { id: 'trouble-sleeping', label: 'Trouble sleeping' },
    { id: 'need-unwind', label: 'Need to unwind' },
    { id: 'waking-night', label: 'Waking at night' },
    { id: 'slow-recovery', label: 'Slow muscle recovery' },
    { id: 'not-refreshed', label: 'Not refreshed after sleep' },
  ],
  physical: [
    { id: 'lightheadedness', label: 'Lightheadedness / dizziness' },
    { id: 'skin-issues', label: 'Skin issues' },
    { id: 'hair-nail-weakness', label: 'Hair & nail weakness' },
    { id: 'muscle-cramps', label: 'Muscle cramps / twitches' },
    { id: 'joint-stiffness', label: 'Joint stiffness' },
    { id: 'frequent-illness', label: 'Frequent illness' },
    { id: 'cold-hands-feet', label: 'Cold hands & feet' },
    { id: 'puffiness', label: 'Puffiness / water retention' },
  ],
  hormonal: [
    { id: 'low-libido', label: 'Low libido' },
    { id: 'pms-cycle', label: 'PMS / cycle support' },
    { id: 'perimenopause', label: 'Perimenopause symptoms' },
    { id: 'fertility-support', label: 'Fertility support' },
    { id: 'postpartum', label: 'Postpartum recovery' },
    { id: 'hormonal-acne', label: 'Hormonal acne' },
  ],
  digestion: [
    { id: 'bloating-gas', label: 'Bloating / gas' },
    { id: 'ibs-sensitive', label: 'IBS / sensitive gut' },
    { id: 'constipation', label: 'Constipation' },
    { id: 'nausea', label: 'Nausea' },
    { id: 'gut-immune', label: 'Gut-immune support' },
  ],
  weight: [
    { id: 'weight-management', label: 'Weight management' },
    { id: 'poor-appetite', label: 'Poor appetite' },
    { id: 'blood-sugar-swings', label: 'Blood sugar swings' },
    { id: 'slow-metabolism', label: 'Slow metabolism' },
    { id: 'sugar-cravings', label: 'Sugar cravings' },
  ],
  circulation: [
    { id: 'chronic-inflammation', label: 'Chronic inflammation' },
    { id: 'poor-circulation', label: 'Poor circulation' },
    { id: 'heart-health', label: 'Heart health support' },
    { id: 'high-blood-pressure', label: 'High blood pressure' },
  ],
};

const categoryLabels = {
  energy: 'Energy & Fatigue',
  mood: 'Mood & Stress',
  sleep: 'Sleep & Recovery',
  physical: 'Body & Physical',
  hormonal: 'Hormonal & Reproductive',
  digestion: 'Digestion & Gut',
  weight: 'Weight & Metabolism',
  circulation: 'Circulation & Inflammation',
};

export function HowIFeelFinder({ onLoadSmoothie, onSwitchToBuilder }: HowIFeelFinderProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [generatedSmoothie, setGeneratedSmoothie] = useState<any | null>(null);
  const [personalizedExplanation, setPersonalizedExplanation] = useState<string>('');
  const [alternativeSmoothies, setAlternativeSmoothies] = useState<any[]>([]);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(s => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const generateSmoothie = () => {
    const smoothieScores = goalSmoothies.map(smoothie => {
      let score = 0;
      let matchedSymptoms: string[] = [];

      selectedSymptoms.forEach(symptom => {
        // Energy & Fatigue
        if (['low-energy-fatigue', 'afternoon-slump', 'always-cold-tired'].includes(symptom) && ['wake-up', 'energy', 'iron-boost'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (['brain-fog', 'poor-concentration'].includes(symptom) && ['focus-concentration', 'adaptogen-focus'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'post-workout-crash' && ['muscle-recovery', 'high-protein'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }

        // Mood & Stress
        if (['anxiety-wired', 'stress-burnout', 'overwhelm'].includes(symptom) && ['stress-relief', 'cortisol-lowering', 'adaptogen-calm'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (['anger-irritability', 'emotional-eating'].includes(symptom) && ['cortisol-lowering', 'stress-relief'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }

        // Sleep & Recovery
        if (['trouble-sleeping', 'waking-night', 'not-refreshed'].includes(symptom) && ['wind-down', 'adaptogen-calm'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'need-unwind' && ['wind-down', 'stress-relief'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'slow-recovery' && ['muscle-recovery'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }

        // Physical
        if (['lightheadedness', 'cold-hands-feet'].includes(symptom) && ['iron-boost', 'energy'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (['skin-issues', 'hormonal-acne'].includes(symptom) && ['skin-glow', 'adaptogen-glow'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (['hair-nail-weakness'].includes(symptom) && ['skin-glow', 'high-protein'].includes(smoothie.id)) {
          score += 8;
          matchedSymptoms.push(symptom);
        }
        if (['muscle-cramps', 'joint-stiffness'].includes(symptom) && ['muscle-recovery', 'stress-relief'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'frequent-illness' && ['antioxidant-blast'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }

        // Hormonal
        if (symptom === 'low-libido' && ['testosterone'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'pms-cycle' && ['estrogen-balance'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'perimenopause' && ['menopause'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'fertility-support' && ['trying-to-conceive'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'postpartum' && ['lactation'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }

        // Digestion
        if (['bloating-gas', 'ibs-sensitive', 'gut-immune'].includes(symptom) && ['gut-health'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'constipation' && ['gut-movement'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'nausea' && ['gut-health', 'detox-cleanse'].includes(smoothie.id)) {
          score += 8;
          matchedSymptoms.push(symptom);
        }

        // Weight & Metabolism
        if (['blood-sugar-swings', 'sugar-cravings'].includes(symptom) && ['stress-relief', 'gut-health'].includes(smoothie.id)) {
          score += 8;
          matchedSymptoms.push(symptom);
        }
        if (symptom === 'weight-management' && ['high-protein', 'gut-health'].includes(smoothie.id)) {
          score += 8;
          matchedSymptoms.push(symptom);
        }

        // Circulation & Inflammation
        if (symptom === 'chronic-inflammation' && ['antioxidant-blast', 'muscle-recovery'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
        if (['poor-circulation', 'heart-health', 'high-blood-pressure'].includes(symptom) && ['lycopene-heart', 'energy'].includes(smoothie.id)) {
          score += 10;
          matchedSymptoms.push(symptom);
        }
      });

      return { smoothie, score, matchedSymptoms };
    });

    smoothieScores.sort((a, b) => b.score - a.score);

    const topMatch = smoothieScores[0];
    setGeneratedSmoothie(topMatch.smoothie);

    // Generate explanation
    const symptomLabels = selectedSymptoms.map(s => {
      for (const category of Object.values(symptoms)) {
        const found = category.find(sym => sym.id === s);
        if (found) return found.label;
      }
      return '';
    }).filter(Boolean);

    const explanation = `Based on how you're feeling (${symptomLabels.slice(0, 3).join(', ')}${symptomLabels.length > 3 ? `, +${symptomLabels.length - 3} more` : ''}), this smoothie addresses your main concerns.`;
    setPersonalizedExplanation(explanation);

    // Find alternatives
    const alternatives = smoothieScores
      .slice(1, 4)
      .filter(s => s.score > 0)
      .map(s => s.smoothie);
    setAlternativeSmoothies(alternatives);
  };

  const canGenerate = selectedSymptoms.length > 0;

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
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Personalized Smoothie</h2>
          <p className="text-sm text-muted-foreground">Based on how you're feeling right now</p>
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
                  <span>✨</span> Personalized For You
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
                  setSelectedSymptoms([]);
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
          <div className="mt-6">
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
        <h2 className="text-2xl font-bold text-foreground mb-2">How Are You Feeling?</h2>
        <p className="text-sm text-muted-foreground">Select all symptoms that apply</p>
      </div>

      {Object.entries(symptoms).map(([category, categorySymptoms]) => (
        <div key={category} className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
          <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {categorySymptoms.map((symptom) => (
              <button
                key={symptom.id}
                onClick={() => handleSymptomToggle(symptom.id)}
                className={`p-2.5 rounded-lg border text-left text-sm transition-all ${
                  selectedSymptoms.includes(symptom.id)
                    ? 'border-primary bg-primary/10 text-primary font-medium'
                    : 'border-border bg-background text-foreground hover:border-primary/40'
                }`}
              >
                {symptom.label}
              </button>
            ))}
          </div>
        </div>
      ))}

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
          ✨ Get My Perfect Smoothie
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
