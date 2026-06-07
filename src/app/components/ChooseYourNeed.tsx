import { useState } from 'react';
import { goalSmoothies } from '../data/goalSmoothies';
import { ingredients } from '../data/ingredients';

interface ChooseYourNeedProps {
  onLoadSmoothie: (ingredientIds: string[]) => void;
  onSwitchToBuilder: () => void;
}

const needs = [
  { id: 'brain-fog', label: 'Brain Fog', emoji: '🤯', color: '#0891b2', smoothieIds: ['focus-concentration', 'adaptogen-focus'] },
  { id: 'stress', label: 'Stress', emoji: '😰', color: '#0d9488', smoothieIds: ['stress-relief', 'cortisol-lowering', 'adaptogen-calm'] },
  { id: 'sleep', label: 'Sleep', emoji: '😴', color: '#4338ca', smoothieIds: ['wind-down', 'adaptogen-calm'] },
  { id: 'energy', label: 'Energy', emoji: '⚡', color: '#d97706', smoothieIds: ['wake-up', 'energy', 'iron-boost'] },
  { id: 'gut', label: 'Gut Health', emoji: '🌱', color: '#15803d', smoothieIds: ['gut-health', 'gut-movement'] },
  { id: 'skin', label: 'Skin', emoji: '✨', color: '#f59e0b', smoothieIds: ['skin-glow', 'adaptogen-glow'] },
  { id: 'hormones', label: 'Hormones', emoji: '🌸', color: '#db2777', smoothieIds: ['estrogen-balance', 'menopause', 'testosterone'] },
  { id: 'fertility', label: 'Fertility', emoji: '🌿', color: '#7c3aed', smoothieIds: ['trying-to-conceive', 'pregnancy'] },
  { id: 'focus', label: 'Focus', emoji: '🧠', color: '#0891b2', smoothieIds: ['focus-concentration', 'adaptogen-focus'] },
  { id: 'recovery', label: 'Recovery', emoji: '💪', color: '#dc2626', smoothieIds: ['muscle-recovery', 'high-protein'] },
  { id: 'immunity', label: 'Immunity', emoji: '💜', color: '#7c3aed', smoothieIds: ['antioxidant-blast', 'detox-cleanse'] },
  { id: 'heart', label: 'Heart Health', emoji: '❤️', color: '#e11d48', smoothieIds: ['lycopene-heart'] },
];

export function ChooseYourNeed({ onLoadSmoothie, onSwitchToBuilder }: ChooseYourNeedProps) {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);

  const handleNeedClick = (needId: string) => {
    setSelectedNeed(needId);
  };

  const handleBackToNeeds = () => {
    setSelectedNeed(null);
  };

  const selectedNeedData = needs.find(n => n.id === selectedNeed);
  const recommendedSmoothies = selectedNeedData
    ? goalSmoothies.filter(s => selectedNeedData.smoothieIds.includes(s.id))
    : [];

  if (selectedNeed && selectedNeedData) {
    return (
      <div>
        {/* Back button */}
        <button
          onClick={handleBackToNeeds}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>←</span> Back to all needs
        </button>

        {/* Need header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{selectedNeedData.emoji}</span>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{selectedNeedData.label}</h2>
              <p className="text-sm text-muted-foreground">Top smoothies to help with {selectedNeedData.label.toLowerCase()}</p>
            </div>
          </div>
        </div>

        {/* Recommended smoothies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {recommendedSmoothies.map((smoothie) => {
            const smoothieIngredients = smoothie.ingredients
              .map((id) => ingredients.find((i) => i.id === id))
              .filter(Boolean);

            return (
              <div
                key={smoothie.id}
                className="rounded-xl border bg-card overflow-hidden"
                style={{ borderTopColor: smoothie.color, borderTopWidth: 3 }}
              >
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{smoothie.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-1">{smoothie.name}</h3>
                      <p className="text-sm text-muted-foreground italic mb-3">{smoothie.tagline}</p>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Ingredients</p>
                    <div className="flex flex-wrap gap-1.5">
                      {smoothieIngredients.map((ing) => (
                        <span
                          key={ing!.id}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {ing!.emoji} {ing!.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Why it works</p>
                    <ul className="space-y-1">
                      {smoothie.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-foreground">
                          <span className="shrink-0" style={{ color: smoothie.color }}>✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => {
                      onLoadSmoothie(smoothie.ingredients);
                      onSwitchToBuilder();
                    }}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: smoothie.color }}
                  >
                    Make This Smoothie →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick preparation tip */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
            <span>⏱️</span> Quick Preparation
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>1. Add liquid base to blender first</li>
            <li>2. Add soft ingredients (fruits, greens)</li>
            <li>3. Add frozen ingredients and powders last</li>
            <li>4. Blend 30-60 seconds until smooth</li>
          </ul>
        </div>
      </div>
    );
  }

  // Main "Choose Your Need" grid
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">What do you need help with?</h2>
        <p className="text-sm text-muted-foreground">
          Choose your main concern and get science-backed smoothie recommendations
        </p>
      </div>

      {/* Need cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {needs.map((need) => (
          <button
            key={need.id}
            onClick={() => handleNeedClick(need.id)}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all text-center"
          >
            <span className="text-4xl block mb-3">{need.emoji}</span>
            <p className="font-semibold text-foreground text-sm">{need.label}</p>
          </button>
        ))}
      </div>

      {/* Or build custom */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-3">Or create your own blend</p>
        <button
          onClick={onSwitchToBuilder}
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          🧪 Build Custom Smoothie
        </button>
      </div>
    </div>
  );
}
