export interface GoalSmoothie {
  id: string;
  name: string;
  goal: string;
  emoji: string;
  color: string;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
}

export const goalSmoothies: GoalSmoothie[] = [
  // Most Popular - Energy & Wake-Up
  {
    id: 'wake-up',
    name: 'Morning Ignition',
    goal: 'Wake Up & Energy',
    emoji: '🌅',
    color: '#d97706',
    tagline: 'Natural morning fuel',
    description: 'Tropical vitamin C explosion with ginger to kickstart digestion and circulation. Natural sugars from mango and pineapple provide fast-acting energy without the crash.',
    benefits: ['Fast-acting natural sugars for immediate energy', 'Ginger activates digestion and circulation', 'High vitamin C supports adrenal function'],
    ingredients: ['mango', 'pineapple', 'orange-juice', 'ginger', 'lime'],
  },
  {
    id: 'energy',
    name: 'Beet Boost',
    goal: 'Natural Energy',
    emoji: '⚡',
    color: '#be123c',
    tagline: 'Nitrate-powered endurance',
    description: 'Beet nitrates convert to nitric oxide, improving oxygen delivery to muscles. Used by athletes to enhance endurance. Ginger and carrot add anti-inflammatory support.',
    benefits: ['Beet nitrates → NO → better oxygen efficiency', 'Natural electrolytes from coconut water', 'Ginger reduces exercise-induced inflammation'],
    ingredients: ['beet', 'carrot', 'orange', 'ginger', 'coconut-water'],
  },

  // Sleep & Relaxation
  {
    id: 'wind-down',
    name: 'Wind Down',
    goal: 'Sleep & Relaxation',
    emoji: '🌙',
    color: '#4338ca',
    tagline: 'Ease into evening',
    description: 'Tart cherries are a natural source of melatonin. Banana contains tryptophan (serotonin precursor). Oats and almond milk provide slow-release carbs to support sleep onset.',
    benefits: ['Cherry melatonin supports sleep onset', 'Tryptophan → serotonin → melatonin pathway', 'Slow carbs stabilise blood sugar overnight'],
    ingredients: ['cherry', 'banana', 'almond-milk', 'oats', 'honey'],
  },

  // Focus & Brain Health
  {
    id: 'focus-concentration',
    name: 'Brain Fog Buster',
    goal: 'Concentration Boost',
    emoji: '🧠',
    color: '#0891b2',
    tagline: 'Sharpen mental clarity',
    description: 'Blueberry anthocyanins improve cerebral blood flow. Walnuts provide ALA omega-3s. Avocado fat helps absorb fat-soluble brain nutrients. Green tea adds L-theanine for calm focus.',
    benefits: ['Anthocyanins boost cerebral blood flow', 'L-theanine from green tea for calm alertness', 'Omega-3s support neural communication'],
    ingredients: ['blueberry', 'avocado', 'walnuts', 'green-tea', 'banana'],
  },

  // Stress Relief
  {
    id: 'stress-relief',
    name: 'Calm Down',
    goal: 'Stress Relief',
    emoji: '🕊️',
    color: '#0d9488',
    tagline: 'Take the edge off',
    description: 'Oat milk provides B vitamins that support the nervous system. Blueberries lower cortisol markers in studies. Cinnamon stabilises blood sugar spikes — a major stress trigger.',
    benefits: ['B vitamins from oats support nervous system', 'Anthocyanins shown to reduce cortisol markers', 'Cinnamon smooths blood sugar to reduce stress response'],
    ingredients: ['blueberry', 'banana', 'oat-milk', 'honey', 'cinnamon'],
  },
  {
    id: 'cortisol-lowering',
    name: 'Cortisol Calm',
    goal: 'Cortisol Lowering',
    emoji: '🧘',
    color: '#7c3aed',
    tagline: 'Lower the stress hormone',
    description: 'Dark cocoa flavonoids have been shown to reduce cortisol in clinical trials. Avocado provides magnesium (many people are deficient) which is essential for adrenal regulation.',
    benefits: ['Cocoa flavonoids directly reduce cortisol in studies', 'Magnesium deficiency linked to elevated cortisol', 'Cinnamon prevents blood sugar spikes that trigger cortisol'],
    ingredients: ['blueberry', 'avocado', 'oat-milk', 'cocoa-powder', 'cinnamon'],
  },

  // Muscle Recovery & Protein
  {
    id: 'muscle-recovery',
    name: 'Recovery Mode',
    goal: 'Muscle Recovery',
    emoji: '💪',
    color: '#dc2626',
    tagline: 'Rebuild faster post-workout',
    description: 'Tart cherries are among the best-studied natural anti-inflammatories for muscle soreness. Protein rebuilds tissue while cocoa adds magnesium for muscle relaxation.',
    benefits: ['Cherry anthocyanins reduce DOMS', 'High protein for tissue repair', 'Magnesium from cocoa aids relaxation'],
    ingredients: ['cherry', 'banana', 'protein-powder', 'yogurt', 'cocoa-powder'],
  },
  {
    id: 'high-protein',
    name: 'Protein Surge',
    goal: 'High Protein',
    emoji: '🏋️',
    color: '#16a34a',
    tagline: 'Pack in the protein',
    description: 'Multiple complete and complementary protein sources — soy provides all essential amino acids, while hemp seeds and peanut butter add healthy fats and extra protein.',
    benefits: ['25–35g protein per serving', 'Complete amino acid profile from soy', 'Healthy fats slow digestion for sustained release'],
    ingredients: ['banana', 'protein-powder', 'peanut-butter', 'soy-milk', 'hemp-seeds'],
  },

  // Gut Health
  {
    id: 'gut-health',
    name: 'Gut Garden',
    goal: 'Gut Health',
    emoji: '🌱',
    color: '#15803d',
    tagline: 'Feed your microbiome',
    description: 'Kiwi contains actinidin, an enzyme that accelerates digestion. Yogurt adds live probiotics. Oats and chia provide prebiotic soluble fibre that feeds beneficial gut bacteria.',
    benefits: ['Live probiotics from yogurt', 'Prebiotic fibre from oats and chia', 'Actinidin enzyme in kiwi aids protein digestion'],
    ingredients: ['kiwi', 'oats', 'chia-seeds', 'yogurt', 'oat-milk'],
  },
  {
    id: 'gut-movement',
    name: 'Gut Movement',
    goal: 'Gut Health',
    emoji: '🌊',
    color: '#0d9488',
    tagline: 'Natural digestive support',
    description: 'Kiwi and papaya contain digestive enzymes (actinidin and papain) that accelerate gut transit. Flax seeds and oats provide soluble fibre that adds bulk and eases movement. Dates offer gentle natural sugars that stimulate peristalsis. High water content keeps everything flowing smoothly.',
    benefits: ['Kiwi actinidin enzyme shown to improve bowel regularity', 'Papaya papain aids protein breakdown and transit', 'Soluble fibre from flax and oats adds bulk and softness', 'Dates provide gentle natural laxative effect'],
    ingredients: ['kiwi', 'papaya', 'dates', 'flax-seeds', 'oats', 'coconut-water'],
  },

  // Skin & Beauty
  {
    id: 'skin-glow',
    name: 'Skin Glow',
    goal: 'Skin Health',
    emoji: '✨',
    color: '#f59e0b',
    tagline: 'Glow from the inside out',
    description: 'Beta-carotene (mango, carrot, papaya) converts to vitamin A, essential for skin cell renewal. Avocado fat dramatically boosts carotenoid absorption. Vitamin C from orange supports collagen synthesis.',
    benefits: ['Beta-carotene → vitamin A for cell renewal', 'Avocado fat 3–5× more carotenoid absorption', 'Vitamin C is essential for collagen production'],
    ingredients: ['mango', 'carrot', 'avocado', 'orange', 'papaya'],
  },

  // Antioxidants & Immunity
  {
    id: 'antioxidant-blast',
    name: 'Antioxidant Bomb',
    goal: 'Antioxidant Boost',
    emoji: '💜',
    color: '#7c3aed',
    tagline: 'Fight free radicals hard',
    description: 'A triple-berry hit of anthocyanins and flavonoids paired with green tea polyphenols and vitamin C. One of the highest ORAC-value blends you can make.',
    benefits: ['Highest anthocyanin density', 'Green tea adds EGCG catechins', 'Vitamin C regenerates other antioxidants'],
    ingredients: ['blueberry', 'pomegranate', 'blackberry', 'green-tea', 'lemon'],
  },

  // Detox & Cleanse
  {
    id: 'detox-cleanse',
    name: 'Reset Cleanse',
    goal: 'Detox & Cleanse',
    emoji: '🫧',
    color: '#0891b2',
    tagline: 'Flush and refresh',
    description: 'Cucumber and coconut water are deeply hydrating. Ginger supports liver detox pathways. Parsley is rich in chlorophyll and antioxidants. Lemon alkalises and stimulates bile production.',
    benefits: ['Ginger activates liver phase-2 detox enzymes', 'Chlorophyll from spinach and parsley', 'Electrolytes from coconut water aid kidney function'],
    ingredients: ['spinach', 'cucumber', 'lemon', 'ginger', 'mint', 'coconut-water'],
  },

  // Iron & Nutrient Absorption
  {
    id: 'iron-boost',
    name: 'Iron Warrior',
    goal: 'Iron Absorption',
    emoji: '⚡',
    color: '#b45309',
    tagline: 'Maximise iron uptake',
    description: 'Vitamin C from citrus dramatically increases non-heme iron absorption from leafy greens — one of the strongest nutrient synergies in food science.',
    benefits: ['Up to 3× more iron absorbed', 'Vitamin C converts Fe³⁺ to absorbable Fe²⁺', 'Ideal for plant-based eaters'],
    ingredients: ['spinach', 'orange', 'strawberry', 'lemon', 'coconut-water'],
  },

  // Heart Health
  {
    id: 'lycopene-heart',
    name: 'Heart Shield',
    goal: 'Heart Health',
    emoji: '❤️',
    color: '#e11d48',
    tagline: 'Support cardiovascular health',
    description: 'Lycopene from watermelon is one of the most potent carotenoids for cardiovascular health. Avocado fat massively boosts lycopene absorption. Pomegranate adds blood-pressure-lowering flavonoids.',
    benefits: ['Lycopene absorption up to 4× higher with fat', 'Pomegranate lowers blood pressure in studies', 'Grapes provide resveratrol for vascular health'],
    ingredients: ['watermelon', 'avocado', 'pomegranate', 'grapes', 'lime'],
  },

  // Testosterone & Vitality
  {
    id: 'testosterone',
    name: 'Vitality Boost',
    goal: 'Testosterone Support',
    emoji: '🔥',
    color: '#b91c1c',
    tagline: 'Natural hormonal support',
    description: 'Pomegranate has clinical evidence for supporting testosterone levels. Beet improves nitric oxide and blood flow. Healthy fats from avocado and cashews are essential for steroid hormone synthesis.',
    benefits: ['Pomegranate shown to raise testosterone in RCTs', 'Cholesterol from healthy fats is a testosterone precursor', 'Beet nitrates improve circulation'],
    ingredients: ['pomegranate', 'beet', 'avocado', 'cashews', 'coconut-milk'],
  },

  // Hormonal Health
  {
    id: 'estrogen-balance',
    name: 'Oestrogen Balance',
    goal: "Hormonal Health",
    emoji: '🌸',
    color: '#db2777',
    tagline: 'Phytoestrogen-rich support',
    description: 'Flaxseeds are the richest dietary source of lignans — plant compounds that bind oestrogen receptors and help regulate oestrogen activity. Soy isoflavones and pomegranate provide complementary phytoestrogenic support.',
    benefits: ['Flaxseed lignans are the richest plant phytoestrogen source', 'Soy isoflavones mimic weak oestrogen activity', 'May ease perimenopause and PMS symptoms'],
    ingredients: ['flax-seeds', 'soy-milk', 'pomegranate', 'avocado', 'strawberry'],
  },
  {
    id: 'menopause',
    name: 'Menopause Balance',
    goal: "Hormonal Health",
    emoji: '🌺',
    color: '#c026d3',
    tagline: 'Navigate the transition naturally',
    description: 'Flaxseeds and soy provide phytoestrogens that may help ease hot flashes and hormonal fluctuations. Kale delivers calcium and vitamin K for bone density (osteoporosis risk increases post-menopause). Blueberry anthocyanins support cardiovascular health and cognitive function. Avocado fat enhances absorption of fat-soluble nutrients.',
    benefits: ['Flaxseed lignans and soy isoflavones may reduce hot flash frequency', 'Calcium + vitamin K combination supports bone density during hormonal decline', 'Omega-3s from flax support mood regulation and reduce inflammation', 'Anthocyanins protect cardiovascular and brain health'],
    ingredients: ['flax-seeds', 'soy-milk', 'kale', 'blueberry', 'avocado', 'pomegranate'],
  },
  {
    id: 'trying-to-conceive',
    name: 'Fertility Support',
    goal: "Hormonal Health",
    emoji: '🌿',
    color: '#7c3aed',
    tagline: 'Nourish for conception',
    description: 'Folate is critical before and during early pregnancy for neural tube development. This smoothie combines the highest plant-based folate sources with vitamin C (which protects folate from oxidation) and healthy fats for fat-soluble nutrient absorption.',
    benefits: ['High folate from spinach, avocado, and mango', 'Vitamin C protects folate bioavailability', 'Antioxidants support egg quality and reproductive health'],
    ingredients: ['spinach', 'avocado', 'orange', 'mango', 'yogurt'],
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Nourish',
    goal: "Hormonal Health",
    emoji: '🤰',
    color: '#0891b2',
    tagline: 'Key nutrients for two',
    description: 'Designed around the four most critical pregnancy nutrients: folate (kale, broccoli), iron (kale — boosted by orange vitamin C), calcium (kale, chia), and omega-3 ALA (chia). Avocado fat helps absorb fat-soluble vitamins.',
    benefits: ['Folate + iron from kale, enhanced by vitamin C from orange', 'Omega-3 ALA from chia supports foetal brain development', 'Calcium from kale and chia without oxalate interference'],
    ingredients: ['kale', 'avocado', 'orange', 'mango', 'chia-seeds', 'almond-milk'],
  },
  {
    id: 'lactation',
    name: 'Nursing Support',
    goal: "Hormonal Health",
    emoji: '🍼',
    color: '#d97706',
    tagline: 'Fuel milk production',
    description: 'Oats are a well-established galactagogue (milk production supporter) used across cultures. Flaxseeds add ALA omega-3 that passes into breast milk. High calorie density from almonds and nut butter supports the extra 500 kcal/day needed while nursing.',
    benefits: ['Oats as a traditional evidence-supported galactagogue', 'ALA omega-3 in flax enriches breast milk fatty acid profile', 'High caloric density supports increased energy demands of lactation'],
    ingredients: ['oats', 'almonds', 'flax-seeds', 'banana', 'almond-milk', 'honey'],
  },

  // Adaptogen Smoothies
  {
    id: 'adaptogen-focus',
    name: 'Adaptogen Focus',
    goal: 'Adaptogen Blends',
    emoji: '🧠',
    color: '#0891b2',
    tagline: 'Mental clarity with adaptogens',
    description: 'Lion\'s Mane mushroom is clinically studied for cognitive enhancement and nerve growth factor production. Rhodiola reduces mental fatigue and improves focus under stress. Blueberry anthocyanins increase cerebral blood flow while avocado fat supports brain cell structure.',
    benefits: ['Lion\'s Mane stimulates nerve growth factor synthesis', 'Rhodiola shown to reduce mental fatigue in clinical trials', 'Blueberry anthocyanins enhance cerebral blood flow and memory', 'Healthy fats from avocado support neurotransmitter function'],
    ingredients: ['lions-mane', 'rhodiola', 'blueberry', 'avocado', 'banana', 'almond-milk'],
  },
  {
    id: 'adaptogen-calm',
    name: 'Adaptogen Calm',
    goal: 'Adaptogen Blends',
    emoji: '🌙',
    color: '#7c3aed',
    tagline: 'Deep relaxation naturally',
    description: 'Reishi mushroom is the "mushroom of immortality" used in Traditional Chinese Medicine for calming the mind and promoting restful sleep. Ashwagandha reduces cortisol and anxiety. Holy Basil (Tulsi) is a revered adaptogen for stress relief. Cherry provides natural melatonin.',
    benefits: ['Reishi compounds promote relaxation and sleep quality', 'Ashwagandha clinically proven to reduce cortisol and anxiety scores', 'Holy Basil modulates stress response and promotes calm', 'Cherry melatonin supports natural sleep-wake cycles'],
    ingredients: ['reishi', 'ashwagandha', 'holy-basil', 'cherry', 'banana', 'oat-milk'],
  },
  {
    id: 'adaptogen-glow',
    name: 'Adaptogen Glow',
    goal: 'Adaptogen Blends',
    emoji: '✨',
    color: '#f59e0b',
    tagline: 'Radiant skin from within',
    description: 'Schisandra berry protects skin from oxidative stress and supports liver detoxification (healthy liver = healthy skin). Mango and carrot deliver beta-carotene that converts to skin-renewing vitamin A. Avocado fat dramatically boosts carotenoid absorption while providing skin-healthy vitamin E.',
    benefits: ['Schisandra anthocyanins protect against UV damage and oxidative stress', 'Beta-carotene from mango and carrot converts to vitamin A for cell turnover', 'Avocado increases carotenoid absorption by 3–5× and provides vitamin E', 'Strawberry vitamin C essential for collagen synthesis'],
    ingredients: ['schisandra', 'mango', 'carrot', 'strawberry', 'avocado', 'coconut-milk'],
  },

  // Bone & Calcium
  {
    id: 'calcium-absorption',
    name: 'Bone Builder',
    goal: 'Bone Health',
    emoji: '🦴',
    color: '#0369a1',
    tagline: 'Strengthen bones naturally',
    description: 'Fat-soluble vitamin K in kale is far better absorbed alongside healthy fats. Avocado and coconut milk make your calcium and vitamin K actually land.',
    benefits: ['Fat boosts vitamin K bioavailability', 'Kale calcium without oxalate interference', 'Supports bone density long-term'],
    ingredients: ['kale', 'avocado', 'mango', 'coconut-milk', 'honey'],
  },
];
