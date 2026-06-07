import { ingredients, detectTagInteractions } from "../data/ingredients";

interface CustomSmoothieAnalysisProps {
  selectedIngredients: string[];
  onSwapIngredient: (removeId: string, addId: string) => void;
}

export function CustomSmoothieAnalysis({ selectedIngredients, onSwapIngredient }: CustomSmoothieAnalysisProps) {
  const selectedIngredientObjects = selectedIngredients
    .map((id) => ingredients.find((i) => i.id === id))
    .filter((ing): ing is NonNullable<typeof ing> => ing !== undefined);

  if (selectedIngredientObjects.length === 0) return null;

  // Analyze dominant nutrients
  const nutrientCounts: Record<string, number> = {};
  selectedIngredientObjects.forEach((ing) => {
    ing.nutrients.forEach((nutrient) => {
      nutrientCounts[nutrient] = (nutrientCounts[nutrient] || 0) + 1;
    });
  });

  // Sort by frequency
  const sortedNutrients = Object.entries(nutrientCounts).sort((a, b) => b[1] - a[1]);
  const topNutrients = sortedNutrients.slice(0, 5);

  // Detect what the smoothie is good for - PRIMARY GOALS
  const primaryGoals: { goal: string; emoji: string; color: string; description: string }[] = [];

  // Energy & Vitality
  if (nutrientCounts['vitamin-c'] && nutrientCounts['iron']) {
    primaryGoals.push({
      goal: 'Iron Absorption & Energy',
      emoji: '⚡',
      color: '#d97706',
      description: 'Vitamin C boosts iron uptake for better energy levels'
    });
  } else if (nutrientCounts['vitamin-c'] >= 2) {
    primaryGoals.push({
      goal: 'Natural Energy Boost',
      emoji: '🌅',
      color: '#d97706',
      description: 'High vitamin C supports adrenal function and energy'
    });
  }

  // Muscle & Recovery
  if (nutrientCounts['protein'] >= 1) {
    primaryGoals.push({
      goal: 'Muscle Recovery & Protein',
      emoji: '💪',
      color: '#dc2626',
      description: 'Protein supports tissue repair and muscle building'
    });
  }

  // Sleep & Relaxation
  if (nutrientCounts['melatonin'] || nutrientCounts['tryptophan'] || selectedIngredients.some(id => ['cherry', 'banana', 'oats'].includes(id))) {
    primaryGoals.push({
      goal: 'Relaxation & Sleep',
      emoji: '🌙',
      color: '#4338ca',
      description: 'Natural compounds support restful sleep and relaxation'
    });
  }

  // Stress Relief
  if (nutrientCounts['magnesium'] || nutrientCounts['antioxidants'] >= 2) {
    primaryGoals.push({
      goal: 'Stress Relief & Calm',
      emoji: '🕊️',
      color: '#0d9488',
      description: 'Magnesium and antioxidants help reduce stress response'
    });
  }

  // Brain & Focus
  if (nutrientCounts['omega-3'] || selectedIngredients.some(id => ['blueberry', 'walnuts', 'avocado'].includes(id))) {
    primaryGoals.push({
      goal: 'Brain Health & Focus',
      emoji: '🧠',
      color: '#0891b2',
      description: 'Omega-3s and anthocyanins support cognitive function'
    });
  }

  // Gut Health
  if (nutrientCounts['fibre'] >= 1 || nutrientCounts['probiotics'] || selectedIngredients.some(id => ['kiwi', 'papaya', 'yogurt', 'oats'].includes(id))) {
    primaryGoals.push({
      goal: 'Gut Health & Digestion',
      emoji: '🌱',
      color: '#15803d',
      description: 'Fibre and enzymes support healthy digestion'
    });
  }

  // Skin Health
  if (nutrientCounts['beta-carotene'] || nutrientCounts['vitamin-c'] >= 2 || selectedIngredients.some(id => ['mango', 'carrot', 'papaya'].includes(id))) {
    primaryGoals.push({
      goal: 'Skin Health & Glow',
      emoji: '✨',
      color: '#f59e0b',
      description: 'Beta-carotene and vitamin C support skin renewal and collagen'
    });
  }

  // Immune Support
  if (nutrientCounts['antioxidants'] >= 2 || nutrientCounts['vitamin-c'] >= 2) {
    primaryGoals.push({
      goal: 'Immune Support',
      emoji: '💜',
      color: '#7c3aed',
      description: 'High antioxidants protect cells and boost immunity'
    });
  }

  // Bone Health
  if (nutrientCounts['vitamin-k'] || nutrientCounts['calcium']) {
    primaryGoals.push({
      goal: 'Bone Health',
      emoji: '🦴',
      color: '#0369a1',
      description: 'Vitamin K and calcium support bone density'
    });
  }

  // Feminine Health
  if (nutrientCounts['phytoestrogens'] || nutrientCounts['folate'] || selectedIngredients.some(id => ['flax-seeds', 'soy-milk'].includes(id))) {
    primaryGoals.push({
      goal: 'Feminine Health',
      emoji: '🌸',
      color: '#db2777',
      description: 'Phytoestrogens and folate support hormonal balance'
    });
  }

  // Heart Health
  if (selectedIngredients.some(id => ['beet', 'pomegranate', 'watermelon', 'grapes'].includes(id))) {
    primaryGoals.push({
      goal: 'Heart Health & Circulation',
      emoji: '❤️',
      color: '#e11d48',
      description: 'Nitrates and antioxidants support cardiovascular health'
    });
  }

  // Only show top 3 most relevant goals
  const topGoals = primaryGoals.slice(0, 3);

  // Optimization suggestions for specific goals - CHECK IF ALREADY IN SMOOTHIE
  const optimizations: { goal: string; suggestion: string; addIngredient?: string; removeIngredient?: string }[] = [];

  // Energy boost
  if (!nutrientCounts['vitamin-c'] || nutrientCounts['vitamin-c'] < 2) {
    if (!selectedIngredients.includes('orange') && !selectedIngredients.includes('mango')) {
      optimizations.push({
        goal: '⚡ More Energy',
        suggestion: 'Add orange or mango for vitamin C',
        addIngredient: selectedIngredients.includes('orange') ? 'mango' : 'orange'
      });
    }
  }

  // Better focus
  if (!nutrientCounts['omega-3'] && !selectedIngredients.some(id => ['blueberry', 'walnuts', 'avocado'].includes(id))) {
    optimizations.push({
      goal: '🧠 Better Focus',
      suggestion: 'Add walnuts or blueberries for brain support',
      addIngredient: 'walnuts'
    });
  }

  // Muscle recovery
  if (!nutrientCounts['protein'] && !selectedIngredients.some(id => ['protein-powder', 'yogurt', 'soy-milk'].includes(id))) {
    optimizations.push({
      goal: '💪 Muscle Recovery',
      suggestion: 'Add protein powder or Greek yogurt',
      addIngredient: 'protein-powder'
    });
  }

  // Better sleep
  if (!nutrientCounts['melatonin'] && !nutrientCounts['tryptophan'] && !selectedIngredients.some(id => ['cherry', 'banana'].includes(id))) {
    optimizations.push({
      goal: '🌙 Better Sleep',
      suggestion: 'Add cherry or banana for sleep support',
      addIngredient: selectedIngredients.includes('cherry') ? 'banana' : 'cherry'
    });
  }

  // Skin health
  if (!nutrientCounts['beta-carotene'] && !selectedIngredients.some(id => ['mango', 'carrot', 'papaya'].includes(id))) {
    optimizations.push({
      goal: '✨ Skin Glow',
      suggestion: 'Add mango or carrot for beta-carotene',
      addIngredient: 'mango'
    });
  }

  // Gut health
  if (!nutrientCounts['fibre'] && !nutrientCounts['probiotics'] && !selectedIngredients.some(id => ['oats', 'chia-seeds', 'kiwi'].includes(id))) {
    optimizations.push({
      goal: '🌱 Gut Health',
      suggestion: 'Add oats or chia seeds for fibre',
      addIngredient: 'oats'
    });
  }

  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold mb-1 text-foreground flex items-center gap-2">
          <span>🔍</span> Your Custom Smoothie Analysis
        </h2>
        <p className="text-xs text-muted-foreground">
          Here's what your smoothie is good for
        </p>
      </div>

      {/* Primary Goals - What This Smoothie Helps With */}
      {topGoals.length > 0 ? (
        <div className="mb-5">
          <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="text-green-400">✅</span> Your Smoothie Will Help With
          </p>
          <div className="space-y-3">
            {topGoals.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}40`
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: item.color }}>
                      {item.goal}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-5 p-4 rounded-lg bg-secondary/40 border border-border/60">
          <p className="text-sm text-muted-foreground">
            Add more ingredients to see what your smoothie will help with
          </p>
        </div>
      )}

      {/* Top Nutrients */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-muted-foreground mb-2">Top Nutrients</p>
        <div className="flex flex-wrap gap-2">
          {topNutrients.map(([nutrient, count]) => (
            <span
              key={nutrient}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60 text-xs text-foreground"
            >
              {nutrient.replace(/-/g, ' ')} ({count})
            </span>
          ))}
        </div>
      </div>

      {/* Optimization Suggestions */}
      {optimizations.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-blue-400 mb-2">💡 Optimize For Specific Goals</p>
          <div className="space-y-2">
            {optimizations.slice(0, 4).map((opt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-2 p-3 rounded-lg bg-secondary/40 border border-border/40"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-0.5">{opt.goal}</p>
                  <p className="text-xs text-muted-foreground">{opt.suggestion}</p>
                </div>
                {opt.addIngredient && (
                  <button
                    onClick={() => onSwapIngredient('', opt.addIngredient!)}
                    className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity shrink-0"
                  >
                    Add
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
