export interface FeelingSmoothie {
  id: string;
  feeling: string;
  emoji: string;
  description: string;
  smoothieId: string;
}

export const feelingSmoothies: FeelingSmoothie[] = [
  {
    id: 'tired',
    feeling: 'Tired / Low Energy',
    emoji: '😴',
    description: 'Need a natural energy boost without caffeine',
    smoothieId: 'energy',
  },
  {
    id: 'cant-sleep',
    feeling: "Can't Sleep / Restless",
    emoji: '😵',
    description: 'Struggling to fall asleep or stay asleep',
    smoothieId: 'wind-down',
  },
  {
    id: 'cant-focus',
    feeling: 'Brain Fog / Can\'t Focus',
    emoji: '🤯',
    description: 'Difficulty concentrating or mental clarity',
    smoothieId: 'focus-concentration',
  },
  {
    id: 'stressed',
    feeling: 'Stressed / Anxious',
    emoji: '😰',
    description: 'Feeling overwhelmed or on edge',
    smoothieId: 'stress-relief',
  },
  {
    id: 'sore-muscles',
    feeling: 'Sore Muscles',
    emoji: '💪',
    description: 'Post-workout soreness or muscle fatigue',
    smoothieId: 'muscle-recovery',
  },
  {
    id: 'bloated',
    feeling: 'Bloated / Digestive Issues',
    emoji: '🤢',
    description: 'Uncomfortable digestion or gut discomfort',
    smoothieId: 'gut-health',
  },
  {
    id: 'constipated',
    feeling: 'Constipated',
    emoji: '😣',
    description: 'Need digestive movement support',
    smoothieId: 'gut-movement',
  },
  {
    id: 'dull-skin',
    feeling: 'Dull Skin / Breakouts',
    emoji: '😞',
    description: 'Skin looking tired or breaking out',
    smoothieId: 'skin-glow',
  },
  {
    id: 'inflamed',
    feeling: 'Inflamed / Achy Joints',
    emoji: '🔥',
    description: 'General inflammation or joint discomfort',
    smoothieId: 'detox-cleanse',
  },
  {
    id: 'getting-sick',
    feeling: 'Getting Sick / Weak Immune',
    emoji: '🤧',
    description: 'Feel a cold coming or want to boost immunity',
    smoothieId: 'antioxidant-blast',
  },
  {
    id: 'sluggish',
    feeling: 'Sluggish / Foggy Morning',
    emoji: '🌅',
    description: 'Hard time waking up and getting started',
    smoothieId: 'wake-up',
  },
  {
    id: 'cortisol-high',
    feeling: 'Burnt Out / Wired & Tired',
    emoji: '🧘',
    description: 'Feel overstimulated but exhausted',
    smoothieId: 'cortisol-lowering',
  },
  {
    id: 'low-iron',
    feeling: 'Pale / Weak / Low Iron',
    emoji: '⚡',
    description: 'Fatigue that might be iron-related',
    smoothieId: 'iron-boost',
  },
  {
    id: 'pms',
    feeling: 'PMS / Hormonal Fluctuations',
    emoji: '🌸',
    description: 'Hormonal symptoms before period',
    smoothieId: 'estrogen-balance',
  },
  {
    id: 'hot-flashes',
    feeling: 'Hot Flashes / Menopause',
    emoji: '🌺',
    description: 'Menopause symptoms like hot flashes',
    smoothieId: 'menopause',
  },
  {
    id: 'heart-health',
    feeling: 'Heart Health Concerns',
    emoji: '❤️',
    description: 'Want to support cardiovascular health',
    smoothieId: 'lycopene-heart',
  },
  {
    id: 'trying-conceive',
    feeling: 'Trying to Conceive',
    emoji: '🌿',
    description: 'Optimizing nutrition for fertility',
    smoothieId: 'trying-to-conceive',
  },
  {
    id: 'pregnant',
    feeling: 'Pregnant',
    emoji: '🤰',
    description: 'Need pregnancy-specific nutrients',
    smoothieId: 'pregnancy',
  },
  {
    id: 'nursing',
    feeling: 'Breastfeeding / Low Milk Supply',
    emoji: '🍼',
    description: 'Supporting lactation and milk production',
    smoothieId: 'lactation',
  },
  {
    id: 'low-testosterone',
    feeling: 'Low Vitality / Low T',
    emoji: '🔥',
    description: 'Want to support testosterone naturally',
    smoothieId: 'testosterone',
  },
];
