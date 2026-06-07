import { BlueberryIllustration } from './Blueberry';
import { StrawberryIllustration } from './Strawberry';
import { BananaIllustration } from './Banana';
import { SpinachIllustration } from './Spinach';
import { AvocadoIllustration } from './Avocado';
import { OrangeIllustration } from './Orange';
import { MangoIllustration } from './Mango';
import { GenericIllustration } from './GenericIllustration';

// Map of ingredient IDs to their custom illustration components
const illustrationMap: Record<string, React.ComponentType<{ size?: number }>> = {
  'blueberry': BlueberryIllustration,
  'frozen-blueberry': BlueberryIllustration,
  'strawberry': StrawberryIllustration,
  'frozen-strawberry': StrawberryIllustration,
  'banana': BananaIllustration,
  'frozen-banana': BananaIllustration,
  'spinach': SpinachIllustration,
  'avocado': AvocadoIllustration,
  'orange': OrangeIllustration,
  'mango': MangoIllustration,
  'frozen-mango': MangoIllustration,
};

// Color mapping for generic illustrations to match ingredient type
const colorMap: Record<string, string> = {
  // Berries
  'raspberry': '#E30B5D',
  'blackberry': '#2D1B3D',
  'cranberry': '#DC143C',
  'cherry': '#DC143C',
  'frozen-cherry': '#DC143C',
  'frozen-raspberry': '#E30B5D',

  // Citrus
  'lemon': '#FFF44F',
  'lime': '#A8E61D',
  'grapefruit': '#FD7C6E',

  // Tropical
  'pineapple': '#FFD93D',
  'kiwi': '#8FBC3F',
  'papaya': '#FF8C42',
  'passion-fruit': '#9C4F96',

  // Tree fruits
  'apple': '#D62828',
  'pear': '#B8D433',
  'peach': '#FFBE86',
  'apricot': '#FBAA5F',
  'plum': '#8E4585',
  'grapes': '#9B59B6',
  'dates': '#8B4513',
  'figs': '#7D4E57',
  'watermelon': '#FC5A8D',
  'cantaloupe': '#FFA351',
  'pomegranate': '#C1292E',

  // Vegetables
  'kale': '#4A7C59',
  'carrot': '#FF8C42',
  'beet': '#A4243B',
  'broccoli': '#6FA855',
  'cucumber': '#8FBC3F',
  'celery': '#9ACD32',
  'tomato': '#E63946',
  'sweet-potato': '#D4843E',
  'ginger': '#DFA878',
  'parsley': '#6FA855',
  'mint': '#98D8C8',

  // Liquids
  'water': '#4FC3F7',
  'coconut-water': '#F5F5DC',
  'milk': '#F8F9FA',
  'yogurt': '#FFF9E6',
  'plant-yogurt': '#F5F5DC',
  'almond-milk': '#FAEBD7',
  'oat-milk': '#F5DEB3',
  'soy-milk': '#F0EAD6',
  'coconut-milk': '#FFFACD',
  'cashew-milk': '#FFE4B5',
  'rice-milk': '#FFF8DC',
  'hemp-milk': '#C8E6C9',
  'pea-milk': '#B8E6B8',
  'orange-juice': '#FF8C42',
  'green-tea': '#A8D5BA',

  // Seeds & Nuts
  'chia-seeds': '#4A4A4A',
  'flax-seeds': '#8B4513',
  'hemp-seeds': '#7CB342',
  'sunflower-seeds': '#FFD93D',
  'sesame-seeds': '#E8D4B2',
  'almonds': '#D4A574',
  'walnuts': '#A67C52',
  'cashews': '#E8D4B2',
  'peanut-butter': '#C68E3A',
  'almond-butter': '#D4A574',

  // Powders & Supplements
  'protein-powder': '#A78BFA',
  'oats': '#DEB887',
  'honey': '#FDB44B',
  'cinnamon': '#A0522D',
  'cocoa-powder': '#6F4E37',
  'coconut-oil': '#FFFACD',
  'carob-powder': '#7B3F00',
  'macadamia-powder': '#FFDEAD',
  'aronia-powder': '#4A148C',
  'maca-powder': '#F4A460',
  'spirulina': '#006B3C',
  'chlorella': '#4A7C59',
  'moringa': '#6FA855',
  'acai-powder': '#4C2C69',
  'matcha': '#7CB342',
  'turmeric': '#FFBF00',
  'ginger-powder': '#DFA878',
  'ashwagandha': '#8B7355',
  'rhodiola': '#E85D75',
  'holy-basil': '#6FA855',
  'cordyceps': '#D4A574',
  'reishi': '#8B4513',
  'lions-mane': '#F5DEB3',
  'eleuthero': '#7C9A6D',
  'schisandra': '#A4243B',
  'beetroot-powder': '#A4243B',
  'wheatgrass': '#9ACD32',
  'collagen': '#F8D7DA',
  'mct-oil-powder': '#FFFACD',
};

interface IngredientIllustrationProps {
  id: string;
  emoji: string;
  size?: number;
}

export function IngredientIllustration({ id, emoji, size = 32 }: IngredientIllustrationProps) {
  const CustomIllustration = illustrationMap[id];

  if (CustomIllustration) {
    return <CustomIllustration size={size} />;
  }

  // Use generic illustration with appropriate color
  const color = colorMap[id] || '#A0AEC0';
  return <GenericIllustration emoji={emoji} color={color} size={size} />;
}
