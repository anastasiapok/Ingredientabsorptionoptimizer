import { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { goalSmoothies } from '../data/goalSmoothies';

interface SmartSmoothieFinderProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
  onSwitchToBuilder: () => void;
}

const feelings = [
  { id: 'tired', label: 'Tired', emoji: '😴', color: '#4338ca' },
  { id: 'stressed', label: 'Stressed', emoji: '😰', color: '#0d9488' },
  { id: 'brain-foggy', label: 'Brain Foggy', emoji: '🤯', color: '#0891b2' },
  { id: 'anxious', label: 'Anxious', emoji: '😨', color: '#7c3aed' },
  { id: 'energized', label: 'Energized', emoji: '⚡', color: '#d97706' },
  { id: 'sluggish', label: 'Sluggish', emoji: '🐌', color: '#6b7280' },
  { id: 'irritable', label: 'Irritable', emoji: '😠', color: '#dc2626' },
  { id: 'calm', label: 'Calm', emoji: '😌', color: '#10b981' },
  { id: 'focused', label: 'Focused', emoji: '🎯', color: '#0891b2' },
  { id: 'restless', label: 'Restless', emoji: '😵', color: '#f59e0b' },
  { id: 'bloated', label: 'Bloated', emoji: '🤢', color: '#15803d' },
  { id: 'motivated', label: 'Motivated', emoji: '💪', color: '#dc2626' },
];

const symptoms = [
  { id: 'brain-fog', label: 'Brain fog', category: 'Mental' },
  { id: 'fatigue', label: 'Fatigue', category: 'Energy' },
  { id: 'poor-concentration', label: 'Poor concentration', category: 'Mental' },
  { id: 'low-energy', label: 'Low energy', category: 'Energy' },
  { id: 'insomnia', label: 'Insomnia / Can\'t sleep', category: 'Sleep' },
  { id: 'anxiety', label: 'Anxiety', category: 'Mental' },
  { id: 'bloating', label: 'Bloating', category: 'Digestive' },
  { id: 'constipation', label: 'Constipation', category: 'Digestive' },
  { id: 'digestive-issues', label: 'Digestive issues', category: 'Digestive' },
  { id: 'sore-muscles', label: 'Sore muscles', category: 'Physical' },
  { id: 'joint-pain', label: 'Joint pain', category: 'Physical' },
  { id: 'headaches', label: 'Headaches', category: 'Physical' },
  { id: 'mood-swings', label: 'Mood swings', category: 'Hormonal' },
  { id: 'pms', label: 'PMS symptoms', category: 'Hormonal' },
  { id: 'hot-flashes', label: 'Hot flashes', category: 'Hormonal' },
  { id: 'hormonal-imbalance', label: 'Hormonal imbalance', category: 'Hormonal' },
  { id: 'irregular-periods', label: 'Irregular periods', category: 'Hormonal' },
  { id: 'skin-issues', label: 'Skin issues / Acne', category: 'Physical' },
  { id: 'low-libido', label: 'Low libido', category: 'Hormonal' },
];

const timesOfDay = [
  { id: 'morning', label: 'Morning', emoji: '🌅' },
  { id: 'afternoon', label: 'Afternoon', emoji: '☀️' },
  { id: 'evening', label: 'Evening', emoji: '🌙' },
];

export function SmartSmoothieFinder({ onLoadSmoothie, onSwitchToBuilder }: SmartSmoothieFinderProps) {
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [generatedSmoothie, setGeneratedSmoothie] = useState<any | null>(null);
  const [alternativeSmoothies, setAlternativeSmoothies] = useState<any[]>([]);
  const [personalizedExplanation, setPersonalizedExplanation] = useState<string>('');
  const [showSymptoms, setShowSymptoms] = useState(false);

  const handleFeelingToggle = (feelingId: string) => {
    setSelectedFeelings(prev =>
      prev.includes(feelingId)
        ? prev.filter(f => f !== feelingId)
        : [...prev, feelingId]
    );
  };

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(s => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const generateSmoothie = () => {
    // Collect all user needs
    const allNeeds = [...selectedFeelings, ...selectedSymptoms];

    // Score each smoothie based on how well it matches user needs
    const smoothieScores = goalSmoothies.map(smoothie => {
      let score = 0;
      let matchedNeeds: string[] = [];

      // TIME OF DAY FILTERS - Block inappropriate times
      if (selectedTime === 'evening') {
        // NEVER recommend wake-up/energy smoothies in the evening
        if (['wake-up', 'energy', 'focus-concentration', 'adaptogen-focus'].includes(smoothie.id)) {
          score -= 100; // Massive penalty
        }
        // Boost sleep smoothies in evening
        if (['wind-down', 'adaptogen-calm', 'stress-relief'].includes(smoothie.id)) {
          score += 5;
        }
      }

      if (selectedTime === 'morning') {
        // NEVER recommend sleep smoothies in the morning
        if (['wind-down', 'adaptogen-calm'].includes(smoothie.id)) {
          score -= 100; // Massive penalty
        }
        // Boost wake-up smoothies in morning
        if (['wake-up', 'energy', 'focus-concentration'].includes(smoothie.id)) {
          score += 5;
        }
      }

      if (selectedTime === 'afternoon') {
        // Slight penalty for sleep smoothies in afternoon
        if (['wind-down'].includes(smoothie.id)) {
          score -= 50;
        }
        // Boost energy/focus smoothies in afternoon
        if (['energy', 'focus-concentration', 'adaptogen-focus'].includes(smoothie.id)) {
          score += 3;
        }
      }

      // Check each need against smoothie capabilities
      allNeeds.forEach(need => {
        // Sleep/Relaxation
        if (['insomnia', 'restless'].includes(need) && ['wind-down', 'adaptogen-calm'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Brain fog/Focus
        if (['brain-fog', 'poor-concentration', 'brain-foggy'].includes(need) && ['focus-concentration', 'adaptogen-focus'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Stress/Anxiety
        if (['anxiety', 'anxious', 'stressed', 'irritable'].includes(need) && ['stress-relief', 'cortisol-lowering', 'adaptogen-calm'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Digestive
        if (['bloating', 'digestive-issues', 'bloated'].includes(need) && ['gut-health'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        if (['constipation'].includes(need) && ['gut-movement'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Physical pain
        if (['sore-muscles', 'joint-pain', 'headaches'].includes(need) && ['muscle-recovery'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Energy/Fatigue
        if (['fatigue', 'low-energy', 'tired', 'sluggish'].includes(need) && ['wake-up', 'energy', 'iron-boost'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Skin
        if (['skin-issues'].includes(need) && ['skin-glow', 'adaptogen-glow'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        // Hormonal
        if (['pms', 'mood-swings', 'irregular-periods', 'hormonal-imbalance'].includes(need) && ['estrogen-balance'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        if (['hot-flashes'].includes(need) && ['menopause'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
        if (['low-libido'].includes(need) && ['testosterone'].includes(smoothie.id)) {
          score += 10;
          matchedNeeds.push(need);
        }
      });

      return { smoothie, score, matchedNeeds };
    });

    // Sort by score
    smoothieScores.sort((a, b) => b.score - a.score);

    // Get top match
    const topMatch = smoothieScores[0];
    setGeneratedSmoothie(topMatch.smoothie);

    // Generate personalized explanation
    const feelingLabels = selectedFeelings.map(f => feelings.find(feel => feel.id === f)?.label).filter(Boolean);
    const symptomLabels = selectedSymptoms.map(s => symptoms.find(sym => sym.id === s)?.label).filter(Boolean);

    let explanation = `Based on your needs (${[...feelingLabels, ...symptomLabels].join(', ')}), this smoothie addresses: `;

    const coveredNeeds = topMatch.matchedNeeds;
    const uncoveredNeeds = allNeeds.filter(need => !coveredNeeds.includes(need));

    if (coveredNeeds.length > 0) {
      const coveredLabels = coveredNeeds.map(need => {
        const feeling = feelings.find(f => f.id === need);
        const symptom = symptoms.find(s => s.id === need);
        return feeling?.label || symptom?.label;
      }).filter(Boolean);
      explanation += coveredLabels.join(', ');
    }

    setPersonalizedExplanation(explanation);

    // Find alternatives for uncovered needs
    if (uncoveredNeeds.length > 0) {
      const alternatives = smoothieScores
        .slice(1, 4)
        .filter(s => s.score > 0)
        .map(s => s.smoothie);
      setAlternativeSmoothies(alternatives);
    } else {
      setAlternativeSmoothies([]);
    }
  };

  const canGenerate = selectedFeelings.length > 0 || selectedSymptoms.length > 0;

  // Group symptoms by category
  const symptomsByCategory = symptoms.reduce((acc, symptom) => {
    if (!acc[symptom.category]) acc[symptom.category] = [];
    acc[symptom.category].push(symptom);
    return acc;
  }, {} as Record<string, typeof symptoms>);

  if (generatedSmoothie) {
    const smoothieIngredients = generatedSmoothie.ingredients
      .map((id: string) => ingredients.find((i) => i.id === id))
      .filter(Boolean);

    return (
      <div className="max-w-3xl mx-auto">
        {/* Success header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
            <span>✓</span> Perfect Match Found
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Personalized Smoothie</h2>
          <p className="text-sm text-muted-foreground">
            Based on your needs, here's what we recommend
          </p>
        </div>

        {/* Generated smoothie card */}
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

            {/* Ingredients */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-foreground mb-3">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {smoothieIngredients.map((ing: any) => (
                  <span
                    key={ing.id}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {ing.emoji} {ing.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Personalized explanation */}
            {personalizedExplanation && (
              <div className="mb-4 p-4 rounded-lg border border-primary/30 bg-primary/5">
                <p className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <span>✨</span> Personalized For You
                </p>
                <p className="text-sm text-foreground">{personalizedExplanation}</p>
              </div>
            )}

            {/* Why it works */}
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

            {/* Quick prep */}
            <div className="mb-5 p-4 rounded-lg border border-border/60 bg-background">
              <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <span>⏱️</span> Quick Preparation
              </p>
              <ol className="space-y-1.5 text-xs text-muted-foreground">
                <li>1. Add liquid base to blender first</li>
                <li>2. Add soft ingredients (fruits, greens)</li>
                <li>3. Add frozen ingredients and powders last</li>
                <li>4. Blend 30-60 seconds until smooth</li>
              </ol>
            </div>

            {/* Action buttons */}
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
                  setSelectedFeelings([]);
                  setSelectedSymptoms([]);
                  setSelectedTime(null);
                  setAlternativeSmoothies([]);
                  setPersonalizedExplanation('');
                  setShowSymptoms(false);
                }}
                className="px-5 py-3 rounded-xl border border-border bg-secondary text-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                ← Start Over
              </button>
            </div>
          </div>
        </div>

        {/* Alternative smoothies for other needs */}
        {alternativeSmoothies.length > 0 && (
          <div className="max-w-3xl mx-auto mt-6">
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
              <p className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span>💡</span> Also Consider These For Your Other Needs
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                The main smoothie covers most of your needs. These alternatives can help with additional concerns.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {alternativeSmoothies.map((altSmoothie) => (
                  <div
                    key={altSmoothie.id}
                    className="p-3 rounded-lg border border-border bg-card hover:border-primary/40 transition-all cursor-pointer"
                    onClick={() => {
                      setGeneratedSmoothie(altSmoothie);
                      setAlternativeSmoothies([]);
                    }}
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
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-3">How are you feeling?</h2>
        <p className="text-sm text-muted-foreground">
          Tell us how you feel and we'll create the perfect smoothie for your needs
        </p>
      </div>

      {/* Step 1: Feelings */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3 text-center">
          Select all feelings that apply (you can choose multiple)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
          {feelings.map((feeling) => (
            <button
              key={feeling.id}
              onClick={() => handleFeelingToggle(feeling.id)}
              className={`p-4 rounded-xl border text-center transition-all ${
                selectedFeelings.includes(feeling.id)
                  ? 'border-primary bg-primary/10 shadow-md scale-105'
                  : 'border-border bg-card hover:border-primary/40 hover:shadow-sm'
              }`}
            >
              <span className="text-4xl block mb-2">{feeling.emoji}</span>
              <p className="text-sm font-semibold text-foreground">{feeling.label}</p>
            </button>
          ))}
        </div>

        {selectedFeelings.length > 0 && !showSymptoms && (
          <div className="text-center">
            <button
              onClick={() => setShowSymptoms(true)}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Continue →
            </button>
          </div>
        )}
      </div>

      {/* Step 2: Symptoms (show after feeling selected) */}
      {showSymptoms && (
        <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-6 animate-fadeIn">
          <p className="text-base font-semibold text-foreground mb-4">
            Any specific symptoms? <span className="text-muted-foreground font-normal text-sm">(Optional - select all that apply)</span>
          </p>

          {Object.entries(symptomsByCategory).map(([category, categorySymptoms]) => (
            <div key={category} className="mb-4 last:mb-0">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{category}</p>
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
        </div>
      )}

      {/* Step 3: Time of day (optional) */}
      {showSymptoms && (
        <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-6">
          <p className="text-base font-semibold text-foreground mb-4">
            When will you drink it? <span className="text-muted-foreground font-normal text-sm">(Optional)</span>
          </p>
          <div className="grid grid-cols-3 gap-3">
            {timesOfDay.map((time) => (
              <button
                key={time.id}
                onClick={() => setSelectedTime(time.id)}
                className={`p-4 rounded-lg border text-center transition-all ${
                  selectedTime === time.id
                    ? 'border-primary bg-primary/10 shadow-sm'
                    : 'border-border bg-background hover:border-primary/40'
                }`}
              >
                <span className="text-3xl block mb-2">{time.emoji}</span>
                <p className="text-sm font-medium text-foreground">{time.label}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Generate button */}
      {showSymptoms && (
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
      )}
    </div>
  );
}
