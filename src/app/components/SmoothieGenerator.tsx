import { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { goalSmoothies } from '../data/goalSmoothies';

interface SmoothieGeneratorProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
  onSwitchToBuilder: () => void;
}

const moods = [
  { id: 'tired', label: 'Tired', emoji: '😴' },
  { id: 'stressed', label: 'Stressed', emoji: '😰' },
  { id: 'foggy', label: 'Foggy', emoji: '🤯' },
  { id: 'energized', label: 'Energized', emoji: '⚡' },
];

const symptoms = [
  { id: 'brain-fog', label: 'Brain fog' },
  { id: 'fatigue', label: 'Fatigue' },
  { id: 'bloated', label: 'Bloated' },
  { id: 'sore-muscles', label: 'Sore muscles' },
  { id: 'cant-sleep', label: "Can't sleep" },
  { id: 'anxious', label: 'Anxious' },
];

const timesOfDay = [
  { id: 'morning', label: 'Morning', emoji: '🌅' },
  { id: 'afternoon', label: 'Afternoon', emoji: '☀️' },
  { id: 'evening', label: 'Evening', emoji: '🌙' },
];

export function SmoothieGenerator({ onLoadSmoothie, onSwitchToBuilder }: SmoothieGeneratorProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [generatedSmoothie, setGeneratedSmoothie] = useState<any | null>(null);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(s => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const generateSmoothie = () => {
    // Simple AI simulation - map selections to smoothies
    let recommendedSmoothieId = 'wake-up'; // default

    // Logic based on symptoms and time
    if (selectedSymptoms.includes('brain-fog') || selectedSymptoms.includes('fatigue')) {
      if (selectedTime === 'morning' || selectedTime === 'afternoon') {
        recommendedSmoothieId = 'focus-concentration';
      } else {
        recommendedSmoothieId = 'energy';
      }
    } else if (selectedSymptoms.includes('cant-sleep')) {
      recommendedSmoothieId = 'wind-down';
    } else if (selectedSymptoms.includes('anxious') || selectedMood === 'stressed') {
      recommendedSmoothieId = 'stress-relief';
    } else if (selectedSymptoms.includes('bloated')) {
      recommendedSmoothieId = 'gut-health';
    } else if (selectedSymptoms.includes('sore-muscles')) {
      recommendedSmoothieId = 'muscle-recovery';
    } else if (selectedMood === 'tired') {
      recommendedSmoothieId = 'energy';
    }

    const smoothie = goalSmoothies.find(s => s.id === recommendedSmoothieId);
    setGeneratedSmoothie(smoothie);
  };

  const canGenerate = selectedMood || selectedSymptoms.length > 0;

  if (generatedSmoothie) {
    const smoothieIngredients = generatedSmoothie.ingredients
      .map((id: string) => ingredients.find((i) => i.id === id))
      .filter(Boolean);

    return (
      <div className="max-w-2xl mx-auto">
        {/* Success header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
            <span>✓</span> Smoothie Generated
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Perfect Match</h2>
        </div>

        {/* Generated smoothie card */}
        <div
          className="rounded-2xl border bg-card overflow-hidden mb-6"
          style={{ borderTopColor: generatedSmoothie.color, borderTopWidth: 4 }}
        >
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">{generatedSmoothie.emoji}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{generatedSmoothie.name}</h3>
                <p className="text-sm text-muted-foreground italic mb-3">{generatedSmoothie.tagline}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{generatedSmoothie.description}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-foreground mb-2">Ingredients</p>
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

            {/* Why it works */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-foreground mb-2">Why This Works For You</p>
              <ul className="space-y-2">
                {generatedSmoothie.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-sm text-foreground">
                    <span className="shrink-0 mt-0.5" style={{ color: generatedSmoothie.color }}>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onLoadSmoothie(generatedSmoothie.ingredients);
                  onSwitchToBuilder();
                }}
                className="flex-1 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: generatedSmoothie.color }}
              >
                Make This Smoothie →
              </button>
              <button
                onClick={() => setGeneratedSmoothie(null)}
                className="px-4 py-3 rounded-xl border border-border bg-secondary text-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                ← Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">AI Smoothie Generator</h2>
        <p className="text-sm text-muted-foreground">
          Tell us how you're feeling and we'll create the perfect smoothie for you
        </p>
      </div>

      {/* Step 1: Mood */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3">How are you feeling right now?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`p-4 rounded-lg border text-center transition-all ${
                selectedMood === mood.id
                  ? 'border-primary bg-primary/10 shadow-sm'
                  : 'border-border bg-background hover:border-primary/40'
              }`}
            >
              <span className="text-3xl block mb-2">{mood.emoji}</span>
              <p className="text-xs font-medium text-foreground">{mood.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Symptoms */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3">What symptoms? (Select all that apply)</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {symptoms.map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => handleSymptomToggle(symptom.id)}
              className={`p-3 rounded-lg border text-left text-sm transition-all ${
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

      {/* Step 3: Time of day */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/20 p-5">
        <p className="text-sm font-semibold text-foreground mb-3">When will you drink it?</p>
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
              <span className="text-2xl block mb-2">{time.emoji}</span>
              <p className="text-xs font-medium text-foreground">{time.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={generateSmoothie}
        disabled={!canGenerate}
        className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
          canGenerate
            ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-lg'
            : 'bg-secondary text-muted-foreground cursor-not-allowed'
        }`}
      >
        {canGenerate ? '✨ Generate My Perfect Smoothie' : 'Select at least mood or symptom to continue'}
      </button>
    </div>
  );
}
