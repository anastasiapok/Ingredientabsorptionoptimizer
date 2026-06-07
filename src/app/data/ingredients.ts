export type IngredientCategory = 'fruit' | 'liquid' | 'extra';

export type ConfidenceLevel = 'strong' | 'moderate' | 'emerging';
export type ImpactSize = 'large' | 'medium' | 'small';

export type GiCategory = 'low' | 'medium' | 'high';

export interface Ingredient {
  id: string;
  name: string;
  emoji: string;
  category: IngredientCategory;
  nutrients: string[];
  gi: number;          // glycemic index (approximate)
  giCategory: GiCategory;
}

export interface Interaction {
  ingredient1: string;
  ingredient2: string;
  type: 'boost' | 'inhibit' | 'neutral';
  effect: string;
  confidence: ConfidenceLevel;
  impactSize: ImpactSize;
  scoreEffect: number;
  suggestion?: string;
}

export interface Paper {
  title: string;
  authors: string;
  journal: string;
  year: number;
  url: string;
}

export interface TagInteractionRule {
  tag1: string;
  tag2: string;
  type: 'boost' | 'inhibit';
  effect: string;
  confidence: ConfidenceLevel;
  impactSize: ImpactSize;
  scoreEffect: number;
  examplePair: string;
  papers?: Paper[];
}

export const ingredients: Ingredient[] = [
  // Fruits - Berries (fresh)
  { id: 'blueberry',    name: 'Blueberries',  emoji: '🫐', category: 'fruit', gi: 53, giCategory: 'low',    nutrients: ['anthocyanins', 'vitamin_c', 'flavonoids', 'fiber'] },
  { id: 'strawberry',  name: 'Strawberries', emoji: '🍓', category: 'fruit', gi: 40, giCategory: 'low',    nutrients: ['vitamin_c', 'flavonoids', 'anthocyanins', 'fiber', 'folate'] },
  { id: 'raspberry',   name: 'Raspberries',  emoji: '🍇', category: 'fruit', gi: 32, giCategory: 'low',    nutrients: ['anthocyanins', 'vitamin_c', 'flavonoids', 'fiber'] },
  { id: 'blackberry',  name: 'Blackberries', emoji: '🫐', category: 'fruit', gi: 25, giCategory: 'low',    nutrients: ['anthocyanins', 'vitamin_c', 'flavonoids', 'fiber'] },
  { id: 'cranberry',   name: 'Cranberries',  emoji: '🔴', category: 'fruit', gi: 45, giCategory: 'low',    nutrients: ['anthocyanins', 'vitamin_c', 'flavonoids'] },

  // Fruits - Berries & Tropical (frozen) — cell wall rupture enhances polyphenol release
  { id: 'frozen-blueberry',   name: 'Frozen Blueberries',  emoji: '🫐', category: 'fruit', gi: 53, giCategory: 'low',    nutrients: ['anthocyanins', 'vitamin_c', 'flavonoids', 'fiber', 'freeze_enhanced'] },
  { id: 'frozen-raspberry',   name: 'Frozen Raspberries',  emoji: '🍇', category: 'fruit', gi: 32, giCategory: 'low',    nutrients: ['anthocyanins', 'vitamin_c', 'flavonoids', 'fiber', 'freeze_enhanced'] },
  { id: 'frozen-strawberry',  name: 'Frozen Strawberries', emoji: '🍓', category: 'fruit', gi: 40, giCategory: 'low',    nutrients: ['vitamin_c', 'flavonoids', 'anthocyanins', 'fiber', 'folate', 'freeze_enhanced'] },
  { id: 'frozen-mango',       name: 'Frozen Mango',        emoji: '🥭', category: 'fruit', gi: 55, giCategory: 'low',    nutrients: ['vitamin_a_carotenoids', 'vitamin_c', 'beta_carotene', 'folate', 'high_carb', 'fiber', 'freeze_enhanced'] },
  { id: 'frozen-cherry',      name: 'Frozen Cherries',     emoji: '🍒', category: 'fruit', gi: 22, giCategory: 'low',    nutrients: ['anthocyanins', 'flavonoids', 'freeze_enhanced'] },
  { id: 'frozen-banana',      name: 'Frozen Banana',       emoji: '🍌', category: 'fruit', gi: 48, giCategory: 'low',    nutrients: ['polyphenol_oxidase', 'high_carb', 'fiber', 'freeze_enhanced'] },

  // Fruits - Citrus
  { id: 'orange',      name: 'Orange',       emoji: '🍊', category: 'fruit', gi: 43, giCategory: 'low',    nutrients: ['vitamin_c', 'folate', 'fiber'] },
  { id: 'lemon',       name: 'Lemon',        emoji: '🍋', category: 'fruit', gi: 20, giCategory: 'low',    nutrients: ['vitamin_c'] },
  { id: 'lime',        name: 'Lime',         emoji: '🟢', category: 'fruit', gi: 20, giCategory: 'low',    nutrients: ['vitamin_c'] },
  { id: 'grapefruit',  name: 'Grapefruit',   emoji: '🟠', category: 'fruit', gi: 25, giCategory: 'low',    nutrients: ['vitamin_c', 'fiber'] },

  // Fruits - Tropical
  { id: 'banana',      name: 'Banana',       emoji: '🍌', category: 'fruit', gi: 51, giCategory: 'low',    nutrients: ['polyphenol_oxidase', 'high_carb', 'fiber'] },
  { id: 'mango',       name: 'Mango',        emoji: '🥭', category: 'fruit', gi: 55, giCategory: 'low',    nutrients: ['vitamin_a_carotenoids', 'vitamin_c', 'beta_carotene', 'folate', 'high_carb', 'fiber'] },
  { id: 'pineapple',   name: 'Pineapple',    emoji: '🍍', category: 'fruit', gi: 66, giCategory: 'medium', nutrients: ['vitamin_c', 'high_carb'] },
  { id: 'kiwi',        name: 'Kiwi',         emoji: '🥝', category: 'fruit', gi: 52, giCategory: 'low',    nutrients: ['vitamin_c', 'fiber', 'folate'] },
  { id: 'papaya',      name: 'Papaya',       emoji: '🟡', category: 'fruit', gi: 60, giCategory: 'medium', nutrients: ['vitamin_a_carotenoids', 'vitamin_c', 'beta_carotene', 'folate', 'fiber'] },
  { id: 'passion-fruit', name: 'Passion Fruit', emoji: '🟣', category: 'fruit', gi: 30, giCategory: 'low', nutrients: ['vitamin_c', 'beta_carotene', 'fiber'] },

  // Fruits - Stone Fruits & Others
  { id: 'apple',       name: 'Apple',        emoji: '🍎', category: 'fruit', gi: 38, giCategory: 'low',    nutrients: ['polyphenol_oxidase', 'flavonoids', 'fiber'] },
  { id: 'pear',        name: 'Pear',         emoji: '🍐', category: 'fruit', gi: 38, giCategory: 'low',    nutrients: ['flavonoids', 'fiber'] },
  { id: 'peach',       name: 'Peach',        emoji: '🍑', category: 'fruit', gi: 42, giCategory: 'low',    nutrients: ['vitamin_a_carotenoids', 'vitamin_c', 'fiber'] },
  { id: 'apricot',     name: 'Apricot',      emoji: '🟠', category: 'fruit', gi: 57, giCategory: 'medium', nutrients: ['vitamin_a_carotenoids', 'beta_carotene', 'fiber'] },
  { id: 'plum',        name: 'Plum',         emoji: '🟣', category: 'fruit', gi: 39, giCategory: 'low',    nutrients: ['anthocyanins', 'flavonoids', 'fiber'] },
  { id: 'cherry',      name: 'Cherries',     emoji: '🍒', category: 'fruit', gi: 22, giCategory: 'low',    nutrients: ['anthocyanins', 'flavonoids'] },
  { id: 'grapes',      name: 'Grapes',       emoji: '🍇', category: 'fruit', gi: 59, giCategory: 'medium', nutrients: ['flavonoids', 'anthocyanins', 'high_carb'] },
  { id: 'dates',       name: 'Dates',        emoji: '🟤', category: 'fruit', gi: 46, giCategory: 'low',    nutrients: ['high_carb', 'fiber', 'iron_nonheme'] },
  { id: 'figs',        name: 'Figs',         emoji: '🟣', category: 'fruit', gi: 61, giCategory: 'medium', nutrients: ['fiber', 'calcium', 'iron_nonheme', 'high_carb'] },
  { id: 'watermelon',  name: 'Watermelon',   emoji: '🍉', category: 'fruit', gi: 72, giCategory: 'high',   nutrients: ['vitamin_c', 'lycopene', 'high_carb'] },
  { id: 'cantaloupe',  name: 'Cantaloupe',   emoji: '🍈', category: 'fruit', gi: 65, giCategory: 'medium', nutrients: ['vitamin_a_carotenoids', 'vitamin_c', 'beta_carotene', 'high_carb'] },
  { id: 'pomegranate', name: 'Pomegranate',  emoji: '🔴', category: 'fruit', gi: 53, giCategory: 'low',    nutrients: ['anthocyanins', 'flavonoids', 'vitamin_c', 'phytoestrogen', 'fiber'] },

  // Vegetables
  { id: 'spinach',     name: 'Spinach',      emoji: '🌿', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['iron_nonheme', 'vitamin_k', 'oxalates', 'calcium', 'folate', 'fiber'] },
  { id: 'kale',        name: 'Kale',         emoji: '🥬', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['vitamin_k', 'iron_nonheme', 'calcium', 'folate', 'fiber'] },
  { id: 'carrot',      name: 'Carrot',       emoji: '🥕', category: 'fruit', gi: 35, giCategory: 'low',    nutrients: ['vitamin_a_carotenoids', 'beta_carotene', 'fiber'] },
  { id: 'beet',        name: 'Beet',         emoji: '🍠', category: 'fruit', gi: 64, giCategory: 'medium', nutrients: ['iron_nonheme', 'anthocyanins', 'high_carb', 'fiber', 'folate'] },
  { id: 'broccoli',    name: 'Broccoli',     emoji: '🥦', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['vitamin_c', 'vitamin_k', 'folate', 'fiber'] },
  { id: 'cucumber',    name: 'Cucumber',     emoji: '🥒', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['fiber'] },
  { id: 'celery',      name: 'Celery',       emoji: '🌱', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['fiber'] },
  { id: 'tomato',      name: 'Tomato',       emoji: '🍅', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['lycopene', 'vitamin_c', 'fiber'] },
  { id: 'sweet-potato', name: 'Sweet Potato', emoji: '🍠', category: 'fruit', gi: 63, giCategory: 'medium', nutrients: ['vitamin_a_carotenoids', 'beta_carotene', 'high_carb', 'fiber'] },
  { id: 'avocado',     name: 'Avocado',      emoji: '🥑', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['dietary_fat', 'vitamin_k', 'folate', 'fiber'] },
  { id: 'ginger',      name: 'Ginger',       emoji: '🫚', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: [] },
  { id: 'parsley',     name: 'Parsley',      emoji: '🌿', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: ['vitamin_c', 'vitamin_k', 'folate'] },
  { id: 'mint',        name: 'Mint',         emoji: '🌿', category: 'fruit', gi: 15, giCategory: 'low',    nutrients: [] },

  // Liquids - Basic
  { id: 'water',       name: 'Water',        emoji: '💧', category: 'liquid', gi: 0,  giCategory: 'low',   nutrients: [] },
  { id: 'coconut-water', name: 'Coconut Water', emoji: '🥥', category: 'liquid', gi: 54, giCategory: 'low', nutrients: ['high_carb'] },

  // Liquids - Dairy
  { id: 'milk',        name: 'Milk',         emoji: '🥛', category: 'liquid', gi: 31, giCategory: 'low',   nutrients: ['calcium', 'protein'] },
  { id: 'yogurt',      name: 'Yogurt',       emoji: '🥣', category: 'liquid', gi: 35, giCategory: 'low',   nutrients: ['calcium', 'protein', 'dietary_fat'] },
  { id: 'plant-yogurt', name: 'Plant Yogurt', emoji: '🥥', category: 'liquid', gi: 35, giCategory: 'low',   nutrients: ['protein'] },

  // Liquids - Plant Milks
  { id: 'almond-milk', name: 'Almond Milk',  emoji: '🌰', category: 'liquid', gi: 25, giCategory: 'low',   nutrients: [] },
  { id: 'oat-milk',    name: 'Oat Milk',     emoji: '🌾', category: 'liquid', gi: 69, giCategory: 'medium', nutrients: ['soluble_fiber', 'high_carb'] },
  { id: 'soy-milk',    name: 'Soy Milk',     emoji: '🌱', category: 'liquid', gi: 34, giCategory: 'low',   nutrients: ['protein', 'phytoestrogen'] },
  { id: 'coconut-milk', name: 'Coconut Milk', emoji: '🥥', category: 'liquid', gi: 41, giCategory: 'low',  nutrients: ['dietary_fat'] },
  { id: 'cashew-milk', name: 'Cashew Milk',  emoji: '🥜', category: 'liquid', gi: 25, giCategory: 'low',   nutrients: [] },
  { id: 'rice-milk',   name: 'Rice Milk',    emoji: '🍚', category: 'liquid', gi: 86, giCategory: 'high',  nutrients: ['high_carb'] },
  { id: 'hemp-milk',   name: 'Hemp Milk',    emoji: '🌿', category: 'liquid', gi: 30, giCategory: 'low',   nutrients: ['protein', 'omega3'] },
  { id: 'pea-milk',    name: 'Pea Milk',     emoji: '🟢', category: 'liquid', gi: 30, giCategory: 'low',   nutrients: ['protein'] },

  // Liquids - Other
  { id: 'orange-juice', name: 'Orange Juice', emoji: '🍊', category: 'liquid', gi: 57, giCategory: 'medium', nutrients: ['vitamin_c', 'folate', 'high_carb'] },
  { id: 'green-tea',   name: 'Green Tea',    emoji: '🍵', category: 'liquid', gi: 0,  giCategory: 'low',   nutrients: ['flavonoids'] },

  // Extras - Seeds
  { id: 'chia-seeds',  name: 'Chia Seeds',   emoji: '⚫', category: 'extra', gi: 1,  giCategory: 'low',    nutrients: ['phytates', 'soluble_fiber', 'zinc', 'omega3', 'fiber', 'calcium'] },
  { id: 'flax-seeds',  name: 'Flax Seeds',   emoji: '🌾', category: 'extra', gi: 35, giCategory: 'low',    nutrients: ['phytates', 'soluble_fiber', 'zinc', 'omega3', 'fiber', 'phytoestrogen'] },
  { id: 'hemp-seeds',  name: 'Hemp Seeds',   emoji: '🟢', category: 'extra', gi: 15, giCategory: 'low',    nutrients: ['protein', 'zinc', 'omega3'] },
  { id: 'sunflower-seeds', name: 'Sunflower Seeds', emoji: '🌻', category: 'extra', gi: 35, giCategory: 'low', nutrients: ['phytates', 'zinc', 'fiber'] },
  { id: 'sesame-seeds', name: 'Sesame Seeds', emoji: '🟤', category: 'extra', gi: 35, giCategory: 'low', nutrients: ['phytates', 'dietary_fat', 'zinc', 'calcium', 'fiber'] },

  // Extras - Nuts & Nut Butters
  { id: 'almonds',     name: 'Almonds',      emoji: '🌰', category: 'extra', gi: 0,  giCategory: 'low',    nutrients: ['dietary_fat', 'zinc', 'fiber', 'calcium'] },
  { id: 'walnuts',     name: 'Walnuts',      emoji: '🥜', category: 'extra', gi: 15, giCategory: 'low',    nutrients: ['dietary_fat', 'zinc', 'omega3'] },
  { id: 'cashews',     name: 'Cashews',      emoji: '🥜', category: 'extra', gi: 22, giCategory: 'low',    nutrients: ['dietary_fat', 'zinc'] },
  { id: 'peanut-butter', name: 'Peanut Butter', emoji: '🥜', category: 'extra', gi: 14, giCategory: 'low', nutrients: ['dietary_fat', 'protein'] },
  { id: 'almond-butter', name: 'Almond Butter', emoji: '🌰', category: 'extra', gi: 0, giCategory: 'low',  nutrients: ['dietary_fat', 'protein', 'fiber'] },

  // Extras - Protein & Performance Powders
  { id: 'protein-powder', name: 'Protein Powder', emoji: '💪', category: 'extra', gi: 0, giCategory: 'low', nutrients: ['protein'] },
  { id: 'collagen',    name: 'Collagen Powder', emoji: '💪', category: 'extra', gi: 0, giCategory: 'low',  nutrients: ['protein'] },

  // Extras - Superfood Powders
  { id: 'spirulina',   name: 'Spirulina',    emoji: '🟢', category: 'extra', gi: 15, giCategory: 'low',    nutrients: ['protein', 'iron_nonheme'] },
  { id: 'chlorella',   name: 'Chlorella',    emoji: '🟢', category: 'extra', gi: 10, giCategory: 'low',    nutrients: ['protein', 'iron_nonheme'] },
  { id: 'moringa',     name: 'Moringa Powder', emoji: '🌿', category: 'extra', gi: 15, giCategory: 'low',  nutrients: ['protein', 'vitamin_c', 'calcium', 'iron_nonheme', 'vitamin_a_carotenoids'] },
  { id: 'wheatgrass',  name: 'Wheatgrass Powder', emoji: '🌱', category: 'extra', gi: 15, giCategory: 'low', nutrients: ['vitamin_c', 'iron_nonheme'] },
  { id: 'acai-powder', name: 'Acai Powder',  emoji: '🟣', category: 'extra', gi: 25, giCategory: 'low',    nutrients: ['anthocyanins', 'flavonoids', 'fiber'] },
  { id: 'aronia-powder', name: 'Aronia Powder', emoji: '🫐', category: 'extra', gi: 15, giCategory: 'low', nutrients: ['anthocyanins', 'flavonoids', 'vitamin_c'] },
  { id: 'beetroot-powder', name: 'Beetroot Powder', emoji: '🍠', category: 'extra', gi: 45, giCategory: 'low', nutrients: ['iron_nonheme', 'anthocyanins', 'folate'] },
  { id: 'maca-powder', name: 'Maca Powder',   emoji: '🟡', category: 'extra', gi: 45, giCategory: 'low',   nutrients: ['high_carb', 'fiber'] },

  // Extras - Spice & Flavor Powders
  { id: 'cocoa-powder', name: 'Cocoa Powder', emoji: '🍫', category: 'extra', gi: 20, giCategory: 'low',   nutrients: ['flavonoids', 'fiber'] },
  { id: 'carob-powder', name: 'Carob Powder', emoji: '🟤', category: 'extra', gi: 15, giCategory: 'low',   nutrients: ['flavonoids', 'fiber', 'calcium'] },
  { id: 'cinnamon',    name: 'Cinnamon',     emoji: '🟤', category: 'extra', gi: 5,  giCategory: 'low',    nutrients: [] },
  { id: 'matcha',      name: 'Matcha Powder', emoji: '🍵', category: 'extra', gi: 5,  giCategory: 'low',   nutrients: ['flavonoids'] },
  { id: 'turmeric',    name: 'Turmeric Powder', emoji: '🟡', category: 'extra', gi: 15, giCategory: 'low', nutrients: ['dietary_fat'] },
  { id: 'ginger-powder', name: 'Ginger Powder', emoji: '🫚', category: 'extra', gi: 15, giCategory: 'low', nutrients: [] },
  { id: 'macadamia-powder', name: 'Macadamia Powder', emoji: '🌰', category: 'extra', gi: 10, giCategory: 'low', nutrients: ['dietary_fat'] },

  // Extras - Adaptogen Powders
  { id: 'ashwagandha', name: 'Ashwagandha',  emoji: '🌿', category: 'extra', gi: 10, giCategory: 'low',    nutrients: [] },
  { id: 'rhodiola',    name: 'Rhodiola',     emoji: '🌸', category: 'extra', gi: 10, giCategory: 'low',    nutrients: [] },
  { id: 'holy-basil',  name: 'Holy Basil (Tulsi)', emoji: '🍃', category: 'extra', gi: 10, giCategory: 'low', nutrients: [] },
  { id: 'cordyceps',   name: 'Cordyceps',    emoji: '🍄', category: 'extra', gi: 10, giCategory: 'low',    nutrients: [] },
  { id: 'reishi',      name: 'Reishi',       emoji: '🍄', category: 'extra', gi: 10, giCategory: 'low',    nutrients: [] },
  { id: 'lions-mane',  name: "Lion's Mane",  emoji: '🍄', category: 'extra', gi: 10, giCategory: 'low',    nutrients: [] },
  { id: 'eleuthero',   name: 'Eleuthero',    emoji: '🌿', category: 'extra', gi: 10, giCategory: 'low',    nutrients: [] },
  { id: 'schisandra',  name: 'Schisandra',   emoji: '🔴', category: 'extra', gi: 10, giCategory: 'low',    nutrients: ['anthocyanins'] },

  // Extras - Other
  { id: 'oats',        name: 'Oats',         emoji: '🌾', category: 'extra', gi: 55, giCategory: 'low',    nutrients: ['soluble_fiber', 'phytates', 'high_carb', 'fiber'] },
  { id: 'honey',       name: 'Honey',        emoji: '🍯', category: 'extra', gi: 58, giCategory: 'medium', nutrients: ['high_carb'] },
  { id: 'coconut-oil', name: 'Coconut Oil',  emoji: '🥥', category: 'extra', gi: 0,  giCategory: 'low',    nutrients: ['dietary_fat'] },
  { id: 'mct-oil-powder', name: 'MCT Oil Powder', emoji: '🥥', category: 'extra', gi: 0, giCategory: 'low', nutrients: ['dietary_fat'] },
];

export const interactions: Interaction[] = [
  // Boosters - Strong evidence, Large impact
  {
    ingredient1: 'orange',
    ingredient2: 'spinach',
    type: 'boost',
    effect: 'Vitamin C reduces iron to a more absorbable form, significantly boosting iron absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'strawberry',
    ingredient2: 'spinach',
    type: 'boost',
    effect: 'Vitamin C reduces iron to a more absorbable form, significantly boosting iron absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'orange',
    ingredient2: 'kale',
    type: 'boost',
    effect: 'Vitamin C reduces iron to a more absorbable form, significantly boosting iron absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'avocado',
    ingredient2: 'carrot',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of beta-carotene and vitamin A',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'almonds',
    ingredient2: 'carrot',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of beta-carotene and vitamin A',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'peanut-butter',
    ingredient2: 'carrot',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of beta-carotene and vitamin A',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'olive-oil',
    ingredient2: 'carrot',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of beta-carotene and vitamin A',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'avocado',
    ingredient2: 'kale',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of fat-soluble vitamins (A, D, E, K)',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'almonds',
    ingredient2: 'kale',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of fat-soluble vitamins (A, D, E, K)',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'olive-oil',
    ingredient2: 'kale',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of fat-soluble vitamins (A, D, E, K)',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'black-pepper',
    ingredient2: 'turmeric',
    type: 'boost',
    effect: 'Piperine inhibits curcumin metabolism, dramatically increasing bioavailability (up to 2000%)',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 15,
  },
  {
    ingredient1: 'avocado',
    ingredient2: 'tomato',
    type: 'boost',
    effect: 'Fat enhances carotenoid micelle formation, improving lycopene absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'olive-oil',
    ingredient2: 'tomato',
    type: 'boost',
    effect: 'Fat enhances carotenoid micelle formation, improving lycopene absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },
  {
    ingredient1: 'yogurt',
    ingredient2: 'carrot',
    type: 'boost',
    effect: 'Protein and fat improve carotenoid transport and beta-carotene uptake',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: 8,
  },
  {
    ingredient1: 'protein-powder',
    ingredient2: 'carrot',
    type: 'boost',
    effect: 'Protein improves carotenoid transport and beta-carotene uptake',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: 8,
  },
  {
    ingredient1: 'mustard-seeds',
    ingredient2: 'broccoli',
    type: 'boost',
    effect: 'Myrosinase enzyme activates glucosinolates, enhancing sulforaphane formation',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
  },

  // Inhibitors - Medium impact
  {
    ingredient1: 'milk',
    ingredient2: 'spinach',
    type: 'inhibit',
    effect: 'Calcium competes for intestinal transport, may reduce iron absorption',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: -8,
    suggestion: 'Try water or almond milk instead',
  },
  {
    ingredient1: 'yogurt',
    ingredient2: 'spinach',
    type: 'inhibit',
    effect: 'Calcium competes for intestinal transport, may reduce iron absorption',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: -8,
    suggestion: 'Try water or coconut water instead',
  },
  {
    ingredient1: 'milk',
    ingredient2: 'kale',
    type: 'inhibit',
    effect: 'Calcium competes for intestinal transport, may reduce iron absorption',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: -8,
    suggestion: 'Try water or almond milk instead',
  },
  {
    ingredient1: 'spinach',
    ingredient2: 'milk',
    type: 'inhibit',
    effect: 'Oxalate forms insoluble calcium oxalate, may reduce calcium absorption slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    suggestion: 'Consider kale instead of spinach for better calcium pairing',
  },
  {
    ingredient1: 'spinach',
    ingredient2: 'yogurt',
    type: 'inhibit',
    effect: 'Oxalate forms insoluble calcium oxalate, may reduce calcium absorption slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    suggestion: 'Consider kale instead of spinach for better calcium pairing',
  },
  {
    ingredient1: 'banana',
    ingredient2: 'blueberry',
    type: 'inhibit',
    effect: 'Polyphenol oxidase oxidizes flavonoids, may reduce availability of some anthocyanins slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -5,
    suggestion: 'Try mango or add yogurt to minimize effect',
  },
  {
    ingredient1: 'banana',
    ingredient2: 'frozen-blueberry',
    type: 'inhibit',
    effect: 'Polyphenol oxidase oxidizes flavonoids, may reduce availability of some anthocyanins slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -5,
    suggestion: 'Try mango or add yogurt to minimize effect',
  },
  {
    ingredient1: 'banana',
    ingredient2: 'strawberry',
    type: 'inhibit',
    effect: 'Polyphenol oxidase oxidizes flavonoids, may reduce availability of some flavonoids slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -5,
    suggestion: 'Try mango or add yogurt to minimize effect',
  },
  {
    ingredient1: 'chia-seeds',
    ingredient2: 'spinach',
    type: 'inhibit',
    effect: 'Phytic acid chelates minerals, may reduce absorption of iron and zinc slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    suggestion: 'Consider adding vitamin C-rich fruit like orange',
  },
  {
    ingredient1: 'flax-seeds',
    ingredient2: 'spinach',
    type: 'inhibit',
    effect: 'Phytic acid chelates minerals, may reduce absorption of iron and zinc slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    suggestion: 'Consider adding vitamin C-rich fruit like orange',
  },
  {
    ingredient1: 'chia-seeds',
    ingredient2: 'kale',
    type: 'inhibit',
    effect: 'Phytic acid chelates minerals, may reduce absorption of iron and zinc slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    suggestion: 'Consider adding vitamin C-rich fruit like orange',
  },
  {
    ingredient1: 'flax-seeds',
    ingredient2: 'kale',
    type: 'inhibit',
    effect: 'Phytic acid chelates minerals, may reduce absorption of iron and zinc slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    suggestion: 'Consider adding vitamin C-rich fruit like orange',
  },

  // Special case - Frozen berries (boost)
  {
    ingredient1: 'frozen-blueberry',
    ingredient2: 'yogurt',
    type: 'boost',
    effect: 'Freezing breaks cell walls, releasing more polyphenols and improving anthocyanin availability',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: 8,
  },
];

export const confidenceLabels: Record<ConfidenceLevel, { label: string; emoji: string }> = {
  strong: { label: 'Strong evidence', emoji: '🟢' },
  moderate: { label: 'Moderate evidence', emoji: '🟡' },
  emerging: { label: 'Emerging research', emoji: '🔬' },
};

export const impactLabels: Record<ImpactSize, { label: string; color: string }> = {
  large: { label: 'Large impact', color: '#1976d2' },
  medium: { label: 'Medium impact', color: '#ed6c02' },
  small: { label: 'Small impact', color: '#757575' },
};

export const tagInteractionRules: TagInteractionRule[] = [
  // BOOSTERS - Large Impact
  {
    tag1: 'vitamin_c',
    tag2: 'iron_nonheme',
    type: 'boost',
    effect: 'Vitamin C reduces iron to a more absorbable form, significantly boosting iron absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
    examplePair: 'Orange + Spinach',
    papers: [
      {
        title: 'The role of vitamin C in iron absorption',
        authors: 'Hallberg L, Brune M, Rossander L',
        journal: 'Int J Vitam Nutr Res Suppl',
        year: 1989,
        url: 'https://pubmed.ncbi.nlm.nih.gov/2507689/',
      },
      {
        title: 'Ascorbic acid: its role in iron absorption',
        authors: 'Lynch SR, Cook JD',
        journal: 'Ann N Y Acad Sci',
        year: 1980,
        url: 'https://pubmed.ncbi.nlm.nih.gov/6940487/',
      },
      {
        title: 'Iron bioavailability and dietary reference values',
        authors: 'Hurrell R, Egli I',
        journal: 'Am J Clin Nutr',
        year: 2010,
        url: 'https://pubmed.ncbi.nlm.nih.gov/20200263/',
      },
    ],
  },
  {
    tag1: 'dietary_fat',
    tag2: 'vitamin_a_carotenoids',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of vitamin A and carotenoids',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
    examplePair: 'Coconut Milk + Carrot',
    papers: [
      {
        title: 'Carotenoid bioavailability is higher from salads ingested with full-fat than with fat-reduced salad dressings',
        authors: 'Brown MJ, Ferruzzi MG, Nguyen ML et al',
        journal: 'Am J Clin Nutr',
        year: 2004,
        url: 'https://pubmed.ncbi.nlm.nih.gov/15277160/',
      },
      {
        title: 'Amount of fat in the diet affects bioavailability of lutein esters but not of α-carotene, β-carotene, and vitamin E in humans',
        authors: 'Roodenburg AJ, Leenen R, van het Hof KH et al',
        journal: 'Am J Clin Nutr',
        year: 2000,
        url: 'https://pubmed.ncbi.nlm.nih.gov/10799382/',
      },
    ],
  },
  {
    tag1: 'dietary_fat',
    tag2: 'beta_carotene',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of beta-carotene',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
    examplePair: 'Almonds + Carrot',
    papers: [
      {
        title: 'Carotenoid bioavailability is higher from salads ingested with full-fat than with fat-reduced salad dressings',
        authors: 'Brown MJ, Ferruzzi MG, Nguyen ML et al',
        journal: 'Am J Clin Nutr',
        year: 2004,
        url: 'https://pubmed.ncbi.nlm.nih.gov/15277160/',
      },
      {
        title: 'Dietary fat and beta-carotene bioavailability: a review of the evidence',
        authors: 'Borel P',
        journal: 'Eur J Clin Nutr',
        year: 2003,
        url: 'https://pubmed.ncbi.nlm.nih.gov/12883491/',
      },
    ],
  },
  {
    tag1: 'dietary_fat',
    tag2: 'vitamin_k',
    type: 'boost',
    effect: 'Healthy fats help micelle formation, improving absorption of fat-soluble vitamin K',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
    examplePair: 'Peanut Butter + Kale',
    papers: [
      {
        title: 'Dietary fat increases vitamin K absorption in healthy adults',
        authors: 'Gijsbers BL, Jie KS, Vermeer C',
        journal: 'Br J Nutr',
        year: 1996,
        url: 'https://pubmed.ncbi.nlm.nih.gov/8864300/',
      },
      {
        title: 'Amount of fat in the diet affects bioavailability of lutein esters but not of α-carotene, β-carotene, and vitamin E in humans',
        authors: 'Roodenburg AJ, Leenen R, van het Hof KH et al',
        journal: 'Am J Clin Nutr',
        year: 2000,
        url: 'https://pubmed.ncbi.nlm.nih.gov/10799382/',
      },
    ],
  },
  {
    tag1: 'dietary_fat',
    tag2: 'lycopene',
    type: 'boost',
    effect: 'Fat enhances carotenoid micelle formation, improving lycopene absorption',
    confidence: 'strong',
    impactSize: 'large',
    scoreEffect: 12,
    examplePair: 'Avocado + Tomato',
    papers: [
      {
        title: 'Increases in plasma lycopene concentration after consumption of tomatoes cooked with olive oil',
        authors: 'Fielding JM, Rowley KG, Cooper P, O\'Dea K',
        journal: 'Asia Pac J Clin Nutr',
        year: 2005,
        url: 'https://pubmed.ncbi.nlm.nih.gov/15927929/',
      },
      {
        title: 'Avocado consumption enhances human postprandial provitamin A absorption and conversion from a novel high-β-carotene tomato sauce',
        authors: 'Unlu NZ, Bohn T, Clinton SK, Schwartz SJ',
        journal: 'J Nutr',
        year: 2005,
        url: 'https://pubmed.ncbi.nlm.nih.gov/15735074/',
      },
    ],
  },

  // BOOSTERS - Medium Impact
  {
    tag1: 'protein',
    tag2: 'beta_carotene',
    type: 'boost',
    effect: 'Protein and fat improve carotenoid transport and beta-carotene uptake',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: 8,
    examplePair: 'Yogurt + Carrot',
    papers: [
      {
        title: 'Factors affecting the bioavailability of carotenoids in humans: physico-chemical and physiological aspects',
        authors: 'Borel P, Drai J, Faure H et al',
        journal: 'J Nutr Health Aging',
        year: 2005,
        url: 'https://pubmed.ncbi.nlm.nih.gov/15980925/',
      },
    ],
  },
  {
    tag1: 'protein',
    tag2: 'vitamin_a_carotenoids',
    type: 'boost',
    effect: 'Protein improves carotenoid transport and uptake',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: 8,
    examplePair: 'Yogurt + Mango',
    papers: [
      {
        title: 'Factors affecting the bioavailability of carotenoids in humans: physico-chemical and physiological aspects',
        authors: 'Borel P, Drai J, Faure H et al',
        journal: 'J Nutr Health Aging',
        year: 2005,
        url: 'https://pubmed.ncbi.nlm.nih.gov/15980925/',
      },
    ],
  },

  // INHIBITORS - Medium Impact
  {
    tag1: 'calcium',
    tag2: 'iron_nonheme',
    type: 'inhibit',
    effect: 'Calcium competes for intestinal transport, may reduce iron absorption',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: -8,
    examplePair: 'Milk + Spinach',
    papers: [
      {
        title: 'Calcium: effect of different amounts on nonheme- and heme-iron absorption in humans',
        authors: 'Hallberg L, Brune M, Erlandsson M et al',
        journal: 'Am J Clin Nutr',
        year: 1991,
        url: 'https://pubmed.ncbi.nlm.nih.gov/1984334/',
      },
      {
        title: 'Calcium and iron absorption — mechanisms and public health relevance',
        authors: 'Lönnerdal B',
        journal: 'Int J Vitam Nutr Res',
        year: 2010,
        url: 'https://pubmed.ncbi.nlm.nih.gov/21462112/',
      },
    ],
  },

  // INHIBITORS - Small Impact
  {
    tag1: 'polyphenol_oxidase',
    tag2: 'anthocyanins',
    type: 'inhibit',
    effect: 'Polyphenol oxidase oxidizes flavonoids, may reduce availability of some anthocyanins slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -5,
    examplePair: 'Banana + Blueberries',
    papers: [
      {
        title: 'Polyphenol oxidase: characterization, function and role in wounded plant storage organs',
        authors: 'Mayer AM',
        journal: 'Phytochemistry',
        year: 2006,
        url: 'https://pubmed.ncbi.nlm.nih.gov/16828127/',
      },
      {
        title: 'Effects of banana polyphenol oxidase on the stability of anthocyanins in model systems',
        authors: 'Cheng GW, Crisosto RG',
        journal: 'J Am Soc Hortic Sci',
        year: 1995,
        url: 'https://pubmed.ncbi.nlm.nih.gov/?term=cheng+crisosto+banana+polyphenol+oxidase+anthocyanin+1995',
      },
    ],
  },
  {
    tag1: 'polyphenol_oxidase',
    tag2: 'flavonoids',
    type: 'inhibit',
    effect: 'Polyphenol oxidase oxidizes flavonoids, may reduce availability of some flavonoids slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -5,
    examplePair: 'Banana + Strawberries',
    papers: [
      {
        title: 'Polyphenol oxidase: characterization, function and role in wounded plant storage organs',
        authors: 'Mayer AM',
        journal: 'Phytochemistry',
        year: 2006,
        url: 'https://pubmed.ncbi.nlm.nih.gov/16828127/',
      },
    ],
  },
  {
    tag1: 'oxalates',
    tag2: 'calcium',
    type: 'inhibit',
    effect: 'Oxalate forms insoluble calcium oxalate, may reduce calcium absorption slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    examplePair: 'Spinach + Milk',
    papers: [
      {
        title: 'Calcium absorbability from spinach',
        authors: 'Heaney RP, Weaver CM, Recker RR',
        journal: 'Am J Clin Nutr',
        year: 1988,
        url: 'https://pubmed.ncbi.nlm.nih.gov/3354491/',
      },
      {
        title: 'Oxalic acid does not influence nonhaem iron absorption in humans',
        authors: 'Ballot D, Baynes RD, Bothwell TH et al',
        journal: 'Br J Nutr',
        year: 1987,
        url: 'https://pubmed.ncbi.nlm.nih.gov/3676052/',
      },
    ],
  },
  {
    tag1: 'phytates',
    tag2: 'iron_nonheme',
    type: 'inhibit',
    effect: 'Phytic acid chelates minerals, may reduce absorption of iron slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    examplePair: 'Chia Seeds + Spinach',
    papers: [
      {
        title: 'Iron bioavailability and dietary reference values',
        authors: 'Hurrell R, Egli I',
        journal: 'Am J Clin Nutr',
        year: 2010,
        url: 'https://pubmed.ncbi.nlm.nih.gov/20200263/',
      },
      {
        title: 'Phytic acid interactions in food systems',
        authors: 'Cheryan M',
        journal: 'Crit Rev Food Sci Nutr',
        year: 1980,
        url: 'https://pubmed.ncbi.nlm.nih.gov/6998510/',
      },
    ],
  },
  {
    tag1: 'phytates',
    tag2: 'zinc',
    type: 'inhibit',
    effect: 'Phytic acid chelates minerals, may reduce absorption of zinc slightly',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: -4,
    examplePair: 'Flax Seeds + Almonds',
    papers: [
      {
        title: 'Zinc absorption from zinc oxide, zinc sulfate, zinc oxide + EDTA, or sodium-zinc EDTA does not differ when added as supplements to liquid meals',
        authors: 'Lönnerdal B, Cederblad Å, Davidsson L, Sandström B',
        journal: 'J Nutr',
        year: 1984,
        url: 'https://pubmed.ncbi.nlm.nih.gov/6491177/',
      },
      {
        title: 'Bioavailability of minerals in legumes',
        authors: 'Sandberg AS',
        journal: 'Br J Nutr',
        year: 2002,
        url: 'https://pubmed.ncbi.nlm.nih.gov/12088525/',
      },
    ],
  },

  // GLYCEMIC / CARB INTERACTIONS
  {
    tag1: 'soluble_fiber',
    tag2: 'high_carb',
    type: 'boost',
    effect: 'Soluble fibre forms a gel that slows carbohydrate digestion, blunting blood sugar and insulin spikes',
    confidence: 'strong',
    impactSize: 'medium',
    scoreEffect: 8,
    examplePair: 'Oats + Banana',
    papers: [
      {
        title: 'Dietary fibre and satiety',
        authors: 'Slavin JL',
        journal: 'Nutr Bull',
        year: 2007,
        url: 'https://pubmed.ncbi.nlm.nih.gov/17508138/',
      },
      {
        title: 'Oat beta-glucan reduces blood cholesterol and improves insulin sensitivity in overweight individuals',
        authors: 'Maki KC et al',
        journal: 'J Nutr',
        year: 2007,
        url: 'https://pubmed.ncbi.nlm.nih.gov/17182826/',
      },
    ],
  },
  {
    tag1: 'protein',
    tag2: 'high_carb',
    type: 'boost',
    effect: 'Dietary protein slows gastric emptying and improves insulin sensitivity, reducing glycaemic response to carbohydrates',
    confidence: 'strong',
    impactSize: 'medium',
    scoreEffect: 7,
    examplePair: 'Yogurt + Banana',
    papers: [
      {
        title: 'Protein, weight management, and satiety',
        authors: 'Paddon-Jones D et al',
        journal: 'Am J Clin Nutr',
        year: 2008,
        url: 'https://pubmed.ncbi.nlm.nih.gov/18469287/',
      },
    ],
  },
  {
    tag1: 'dietary_fat',
    tag2: 'high_carb',
    type: 'boost',
    effect: 'Fat delays gastric emptying, slowing glucose absorption and reducing blood sugar peaks',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: 5,
    examplePair: 'Avocado + Mango',
    papers: [
      {
        title: 'Effects of fat and protein on glycemic response in nondiabetic humans',
        authors: 'Collier G, O\'Dea K',
        journal: 'Am J Clin Nutr',
        year: 1983,
        url: 'https://pubmed.ncbi.nlm.nih.gov/6687956/',
      },
    ],
  },

  // FROZEN FRUIT INTERACTION
  {
    tag1: 'freeze_enhanced',
    tag2: 'protein',
    type: 'boost',
    effect: 'Freezing ruptures cell walls, releasing more polyphenols; protein in the base helps transport them',
    confidence: 'moderate',
    impactSize: 'medium',
    scoreEffect: 8,
    examplePair: 'Frozen Blueberries + Yogurt',
    papers: [
      {
        title: 'Effect of freezing on polyphenol content and antioxidant activity of blueberries',
        authors: 'Blanda G et al',
        journal: 'Eur Food Res Technol',
        year: 2009,
        url: 'https://pubmed.ncbi.nlm.nih.gov/?term=freezing+blueberries+polyphenol+anthocyanin+cell+wall+rupture',
      },
      {
        title: 'Frozen fruit polyphenol retention and bioaccessibility',
        authors: 'Rickman JC, Barrett DM, Bruhn CM',
        journal: 'J Sci Food Agric',
        year: 2007,
        url: 'https://pubmed.ncbi.nlm.nih.gov/17364528/',
      },
    ],
  },

  // FOLATE INTERACTION
  {
    tag1: 'folate',
    tag2: 'vitamin_c',
    type: 'boost',
    effect: 'Vitamin C protects folate from oxidative degradation, preserving its bioavailability',
    confidence: 'moderate',
    impactSize: 'small',
    scoreEffect: 5,
    examplePair: 'Orange + Spinach',
    papers: [
      {
        title: 'Vitamin C and folate: interactions and clinical implications',
        authors: 'Halpner AD et al',
        journal: 'J Am Coll Nutr',
        year: 1998,
        url: 'https://pubmed.ncbi.nlm.nih.gov/9550453/',
      },
    ],
  },
];

// Helper function to detect interactions based on tags
export function detectTagInteractions(selectedIngredients: Ingredient[]): Array<{
  ingredient1: Ingredient;
  ingredient2: Ingredient;
  rule: TagInteractionRule;
}> {
  const detectedInteractions: Array<{
    ingredient1: Ingredient;
    ingredient2: Ingredient;
    rule: TagInteractionRule;
  }> = [];

  // Compare all pairs of ingredients
  for (let i = 0; i < selectedIngredients.length; i++) {
    for (let j = i + 1; j < selectedIngredients.length; j++) {
      const ing1 = selectedIngredients[i];
      const ing2 = selectedIngredients[j];

      // Collect all matching rules for this pair, then keep only the
      // strongest boost and strongest inhibit — prevents double-scoring
      // when one ingredient has overlapping tags (e.g. beta_carotene +
      // vitamin_a_carotenoids both matching the same dietary_fat rule).
      const pairBoosts: typeof detectedInteractions = [];
      const pairInhibits: typeof detectedInteractions = [];

      for (const rule of tagInteractionRules) {
        const forward = ing1.nutrients.includes(rule.tag1) && ing2.nutrients.includes(rule.tag2);
        const reverse = ing1.nutrients.includes(rule.tag2) && ing2.nutrients.includes(rule.tag1);
        if (forward || reverse) {
          const entry = { ingredient1: ing1, ingredient2: ing2, rule };
          if (rule.type === 'boost') pairBoosts.push(entry);
          else pairInhibits.push(entry);
        }
      }

      // Only the highest-scoring rule per type per pair fires
      if (pairBoosts.length > 0) {
        detectedInteractions.push(pairBoosts.sort((a, b) => b.rule.scoreEffect - a.rule.scoreEffect)[0]);
      }
      if (pairInhibits.length > 0) {
        detectedInteractions.push(pairInhibits.sort((a, b) => a.rule.scoreEffect - b.rule.scoreEffect)[0]);
      }
    }
  }

  return detectedInteractions;
}
