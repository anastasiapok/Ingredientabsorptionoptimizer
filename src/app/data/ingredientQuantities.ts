// Suggested quantities for 1 person smoothie
export const ingredientQuantities: Record<string, string> = {
  // Berries
  'blueberry': '1 cup (150g)',
  'frozen-blueberry': '1 cup (150g)',
  'strawberry': '1 cup (150g)',
  'frozen-strawberry': '1 cup (150g)',
  'raspberry': '3/4 cup (100g)',
  'frozen-raspberry': '3/4 cup (100g)',
  'blackberry': '3/4 cup (100g)',
  'cranberry': '1/2 cup (60g)',
  'cherry': '3/4 cup (100g)',
  'frozen-cherry': '3/4 cup (100g)',

  // Citrus
  'orange': '1 medium (130g)',
  'lemon': '1/2 lemon (30g)',
  'lime': '1 lime (50g)',
  'grapefruit': '1/2 fruit (120g)',

  // Tropical
  'banana': '1 medium (120g)',
  'frozen-banana': '1 medium (120g)',
  'mango': '1 cup chunks (165g)',
  'frozen-mango': '1 cup chunks (165g)',
  'pineapple': '1 cup chunks (165g)',
  'kiwi': '2 kiwis (150g)',
  'papaya': '1 cup chunks (140g)',
  'passion-fruit': '2 fruits (40g)',

  // Stone fruits & others
  'apple': '1 medium (180g)',
  'pear': '1 medium (180g)',
  'peach': '1 large (150g)',
  'apricot': '3 apricots (120g)',
  'plum': '2 plums (130g)',
  'grapes': '1 cup (150g)',
  'dates': '3-4 dates (25g)',
  'figs': '3 figs (120g)',
  'watermelon': '1 cup chunks (150g)',
  'cantaloupe': '1 cup chunks (160g)',
  'pomegranate': '1/2 cup seeds (90g)',

  // Vegetables
  'spinach': '2 cups (60g)',
  'kale': '1 cup (70g)',
  'carrot': '1 medium (60g)',
  'beet': '1 small (80g)',
  'broccoli': '1/2 cup (45g)',
  'cucumber': '1/2 cucumber (150g)',
  'celery': '2 stalks (80g)',
  'tomato': '1 medium (120g)',
  'sweet-potato': '1/2 cup cooked (100g)',
  'avocado': '1/2 avocado (70g)',
  'ginger': '1 tsp fresh (5g)',
  'parsley': '1/4 cup (15g)',
  'mint': '1/4 cup (10g)',

  // Liquids
  'water': '1 cup (240ml)',
  'coconut-water': '1 cup (240ml)',
  'milk': '1 cup (240ml)',
  'yogurt': '3/4 cup (170g)',
  'plant-yogurt': '3/4 cup (170g)',
  'almond-milk': '1 cup (240ml)',
  'oat-milk': '1 cup (240ml)',
  'soy-milk': '1 cup (240ml)',
  'coconut-milk': '3/4 cup (180ml)',
  'cashew-milk': '1 cup (240ml)',
  'rice-milk': '1 cup (240ml)',
  'hemp-milk': '1 cup (240ml)',
  'pea-milk': '1 cup (240ml)',
  'orange-juice': '3/4 cup (180ml)',
  'green-tea': '1 cup brewed (240ml)',

  // Seeds
  'chia-seeds': '1 tbsp (12g)',
  'flax-seeds': '1 tbsp (10g)',
  'hemp-seeds': '2 tbsp (20g)',
  'sunflower-seeds': '2 tbsp (18g)',
  'sesame-seeds': '2 tbsp (18g)',

  // Nuts & nut butters
  'almonds': '1/4 cup (30g)',
  'walnuts': '1/4 cup (30g)',
  'cashews': '1/4 cup (30g)',
  'peanut-butter': '2 tbsp (32g)',
  'almond-butter': '2 tbsp (32g)',

  // Protein powders
  'protein-powder': '1 scoop (30g)',
  'collagen': '1-2 scoops (20g)',

  // Superfood powders
  'spirulina': '1 tsp (3g)',
  'chlorella': '1 tsp (3g)',
  'moringa': '1 tsp (2g)',
  'wheatgrass': '1 tsp (3g)',
  'acai-powder': '1 tbsp (7g)',
  'aronia-powder': '1 tsp (3g)',
  'beetroot-powder': '1 tsp (5g)',
  'maca-powder': '1 tsp (5g)',

  // Spice & flavor powders
  'cocoa-powder': '1 tbsp (5g)',
  'carob-powder': '1 tbsp (6g)',
  'cinnamon': '1/2 tsp (1g)',
  'matcha': '1 tsp (2g)',
  'turmeric': '1/2 tsp (2g)',
  'ginger-powder': '1/2 tsp (1g)',
  'macadamia-powder': '2 tbsp (15g)',

  // Adaptogens
  'ashwagandha': '1/2 tsp (2g)',
  'rhodiola': '1/2 tsp (2g)',
  'holy-basil': '1/2 tsp (1g)',
  'cordyceps': '1/2 tsp (2g)',
  'reishi': '1/2 tsp (2g)',
  'lions-mane': '1/2 tsp (2g)',
  'eleuthero': '1/2 tsp (2g)',
  'schisandra': '1/2 tsp (2g)',

  // Other
  'oats': '1/3 cup (30g)',
  'honey': '1 tbsp (21g)',
  'coconut-oil': '1 tsp (5ml)',
  'mct-oil-powder': '1 tbsp (7g)',
};

export function getIngredientQuantity(id: string): string {
  return ingredientQuantities[id] || '1 serving';
}
