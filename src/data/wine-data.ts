export interface Wine {
  id: string;
  name: string;
  winery: string;
  type: 'red' | 'white' | 'sparkling' | 'rosé' | 'dessert';
  vintage: number;
  region: string;
  country: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  tastingNotes: {
    aroma: string[];
    flavor: string[];
    finish: string;
    body: 'light' | 'medium' | 'full';
    acidity: 'low' | 'medium' | 'high';
    tannins?: 'low' | 'medium' | 'high';
    sweetness?: 'dry' | 'off-dry' | 'medium-dry' | 'medium-sweet' | 'sweet';
  };
  foodPairings: string[];
  servingTemperature: string;
  alcoholContent: number;
  image: string;
  occasion: string[];
  flavorProfile: string[];
}

export interface FoodCategory {
  id: string;
  name: string;
  items: string[];
  icon: string;
}

export interface FlavorProfile {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
}

export interface Occasion {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const wines: Wine[] = [
  {
    id: 'burgundy-pinot-2019',
    name: 'Reserve Pinot Noir',
    winery: 'Domaine du Château',
    type: 'red',
    vintage: 2019,
    region: 'Burgundy',
    country: 'France',
    price: 89.99,
    rating: 4.6,
    reviews: 142,
    description: 'An elegant Burgundy with silky tannins and complex earthy notes. This exceptional vintage showcases the terroir beautifully.',
    tastingNotes: {
      aroma: ['cherry', 'raspberry', 'violet', 'forest floor'],
      flavor: ['red fruit', 'spice', 'mineral', 'vanilla'],
      finish: 'Long and elegant with lingering fruit and spice',
      body: 'medium',
      acidity: 'high',
      tannins: 'medium',
      sweetness: 'dry'
    },
    foodPairings: ['Duck confit', 'Mushroom risotto', 'Beef bourguignon', 'Aged cheese'],
    servingTemperature: '16-18°C (61-64°F)',
    alcoholContent: 13.5,
    image: '/generated/burgundy-pinot-wine.jpg',
    occasion: ['fine-dining', 'romantic-dinner', 'special-celebration'],
    flavorProfile: ['earthy', 'fruity', 'complex']
  },
  {
    id: 'sancerre-sauvignon-2021',
    name: 'Sancerre Sauvignon Blanc',
    winery: 'Henri Bourgeois',
    type: 'white',
    vintage: 2021,
    region: 'Loire Valley',
    country: 'France',
    price: 34.99,
    rating: 4.3,
    reviews: 89,
    description: 'Crisp and mineral-driven Sancerre with citrus notes and a clean finish. Perfect expression of Loire Valley terroir.',
    tastingNotes: {
      aroma: ['grapefruit', 'lime', 'wet stone', 'herbs'],
      flavor: ['citrus', 'green apple', 'mineral', 'grass'],
      finish: 'Clean and refreshing with mineral persistence',
      body: 'light',
      acidity: 'high',
      sweetness: 'dry'
    },
    foodPairings: ['Oysters', 'Goat cheese salad', 'Grilled fish', 'Asparagus'],
    servingTemperature: '8-10°C (46-50°F)',
    alcoholContent: 12.5,
    image: '/generated/sancerre-sauvignon-wine.jpg',
    occasion: ['casual-dining', 'summer-lunch', 'aperitif'],
    flavorProfile: ['crisp', 'mineral', 'citrusy']
  },
  {
    id: 'champagne-brut-nv',
    name: 'Champagne Brut Tradition',
    winery: 'Maison Laurent',
    type: 'sparkling',
    vintage: 0,
    region: 'Champagne',
    country: 'France',
    price: 124.99,
    rating: 4.7,
    reviews: 203,
    description: 'Classic Champagne blend with fine bubbles and elegant complexity. A celebration in every glass.',
    tastingNotes: {
      aroma: ['apple', 'pear', 'brioche', 'citrus zest'],
      flavor: ['green apple', 'yeast', 'almond', 'lemon'],
      finish: 'Persistent with fine mousse and citrus notes',
      body: 'medium',
      acidity: 'high',
      sweetness: 'dry'
    },
    foodPairings: ['Caviar', 'Smoked salmon', 'Fried chicken', 'Fruit tarts'],
    servingTemperature: '6-8°C (43-46°F)',
    alcoholContent: 12.0,
    image: '/generated/champagne-brut-wine.jpg',
    occasion: ['celebration', 'new-years', 'wedding', 'anniversary'],
    flavorProfile: ['effervescent', 'elegant', 'festive']
  },
  {
    id: 'tuscany-chianti-2020',
    name: 'Chianti Classico Riserva',
    winery: 'Castello di Brolio',
    type: 'red',
    vintage: 2020,
    region: 'Tuscany',
    country: 'Italy',
    price: 45.99,
    rating: 4.4,
    reviews: 156,
    description: 'Traditional Tuscan blend with great structure and aging potential. Sangiovese at its finest.',
    tastingNotes: {
      aroma: ['cherry', 'plum', 'tobacco', 'leather'],
      flavor: ['red cherry', 'herbs', 'spice', 'earth'],
      finish: 'Long with cherry and spice notes',
      body: 'full',
      acidity: 'high',
      tannins: 'high',
      sweetness: 'dry'
    },
    foodPairings: ['Grilled steak', 'Pasta with tomato sauce', 'Pizza margherita', 'Pecorino cheese'],
    servingTemperature: '18-20°C (64-68°F)',
    alcoholContent: 14.0,
    image: '/images/wines/chianti-classico.jpg',
    occasion: ['italian-night', 'casual-dining', 'pizza-night'],
    flavorProfile: ['bold', 'traditional', 'savory']
  },
  {
    id: 'riesling-sweet-2022',
    name: 'Late Harvest Riesling',
    winery: 'Weingut Müller',
    type: 'dessert',
    vintage: 2022,
    region: 'Mosel',
    country: 'Germany',
    price: 39.99,
    rating: 4.5,
    reviews: 67,
    description: 'Luscious dessert wine with perfect balance of sweetness and acidity. Ideal with desserts or as a dessert itself.',
    tastingNotes: {
      aroma: ['honey', 'apricot', 'peach', 'flowers'],
      flavor: ['tropical fruit', 'honey', 'citrus', 'mineral'],
      finish: 'Sweet yet refreshing with balanced acidity',
      body: 'medium',
      acidity: 'high',
      sweetness: 'sweet'
    },
    foodPairings: ['Fruit tarts', 'Crème brûlée', 'Blue cheese', 'Spicy cuisine'],
    servingTemperature: '8-10°C (46-50°F)',
    alcoholContent: 11.5,
    image: '/images/wines/riesling-dessert.jpg',
    occasion: ['dessert-course', 'romantic-dinner', 'special-celebration'],
    flavorProfile: ['sweet', 'floral', 'balanced']
  },
  {
    id: 'provence-rose-2023',
    name: 'Provence Rosé',
    winery: 'Château Saint-Tropez',
    type: 'rosé',
    vintage: 2023,
    region: 'Provence',
    country: 'France',
    price: 28.99,
    rating: 4.2,
    reviews: 134,
    description: 'Pale pink perfection from Provence. Dry, crisp, and utterly refreshing with delicate fruit flavors.',
    tastingNotes: {
      aroma: ['strawberry', 'watermelon', 'herbs', 'citrus'],
      flavor: ['red berries', 'melon', 'mineral', 'flowers'],
      finish: 'Clean and dry with subtle fruit notes',
      body: 'light',
      acidity: 'medium',
      sweetness: 'dry'
    },
    foodPairings: ['Grilled vegetables', 'Seafood salad', 'Goat cheese', 'Mediterranean cuisine'],
    servingTemperature: '8-10°C (46-50°F)',
    alcoholContent: 12.5,
    image: '/images/wines/provence-rose.jpg',
    occasion: ['summer-lunch', 'poolside', 'brunch', 'aperitif'],
    flavorProfile: ['light', 'refreshing', 'dry']
  }
];

export const foodCategories: FoodCategory[] = [
  {
    id: 'seafood',
    name: 'Seafood',
    items: ['Grilled salmon', 'Oysters', 'Lobster', 'Sea bass', 'Crab cakes', 'Shrimp scampi', 'Tuna sashimi'],
    icon: '🐟'
  },
  {
    id: 'meat',
    name: 'Meat',
    items: ['Beef tenderloin', 'Lamb chops', 'Pork tenderloin', 'Duck breast', 'Venison', 'Prime rib', 'Filet mignon'],
    icon: '🥩'
  },
  {
    id: 'poultry',
    name: 'Poultry',
    items: ['Roasted chicken', 'Turkey breast', 'Chicken tikka', 'Duck confit', 'Chicken parmesan', 'Grilled chicken'],
    icon: '🐔'
  },
  {
    id: 'pasta',
    name: 'Pasta & Grains',
    items: ['Pasta carbonara', 'Mushroom risotto', 'Pasta bolognese', 'Truffle pasta', 'Seafood linguine', 'Paella'],
    icon: '🍝'
  },
  {
    id: 'cheese',
    name: 'Cheese & Dairy',
    items: ['Aged cheddar', 'Brie', 'Goat cheese', 'Parmesan', 'Blue cheese', 'Camembert', 'Pecorino'],
    icon: '🧀'
  },
  {
    id: 'dessert',
    name: 'Desserts',
    items: ['Dark chocolate cake', 'Fruit tart', 'Crème brûlée', 'Cheesecake', 'Tiramisu', 'Apple pie'],
    icon: '🍰'
  },
  {
    id: 'spicy',
    name: 'Spicy Cuisine',
    items: ['Thai curry', 'Indian tandoori', 'Mexican mole', 'Sichuan cuisine', 'Cajun dishes', 'Spicy BBQ'],
    icon: '🌶️'
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    items: ['Grilled vegetables', 'Caprese salad', 'Vegetable curry', 'Quinoa salad', 'Stuffed portobello', 'Ratatouille'],
    icon: '🥬'
  }
];

export const flavorProfiles: FlavorProfile[] = [
  {
    id: 'bold',
    name: 'Bold & Robust',
    description: 'Full-bodied wines with intense flavors',
    characteristics: ['High tannins', 'Rich fruit', 'Strong finish', 'Full body']
  },
  {
    id: 'light',
    name: 'Light & Delicate',
    description: 'Elegant wines with subtle complexity',
    characteristics: ['Light body', 'Subtle flavors', 'Fresh acidity', 'Clean finish']
  },
  {
    id: 'crisp',
    name: 'Crisp & Refreshing',
    description: 'Bright wines with vibrant acidity',
    characteristics: ['High acidity', 'Citrus notes', 'Mineral finish', 'Refreshing']
  },
  {
    id: 'sweet',
    name: 'Sweet & Luscious',
    description: 'Dessert wines with balanced sweetness',
    characteristics: ['Natural sweetness', 'Rich texture', 'Fruit forward', 'Balanced acidity']
  },
  {
    id: 'earthy',
    name: 'Earthy & Complex',
    description: 'Terroir-driven wines with complexity',
    characteristics: ['Mineral notes', 'Forest floor', 'Complex layers', 'Long finish']
  },
  {
    id: 'fruity',
    name: 'Fruity & Vibrant',
    description: 'Fruit-forward wines with bright flavors',
    characteristics: ['Fresh fruit', 'Vibrant colors', 'Approachable', 'Food-friendly']
  }
];

export const occasions: Occasion[] = [
  {
    id: 'romantic-dinner',
    name: 'Romantic Dinner',
    description: 'Intimate evening with sophisticated wines',
    icon: '💕'
  },
  {
    id: 'celebration',
    name: 'Celebration',
    description: 'Special occasions and milestones',
    icon: '🎉'
  },
  {
    id: 'casual-dining',
    name: 'Casual Dining',
    description: 'Everyday meals and relaxed gatherings',
    icon: '🍽️'
  },
  {
    id: 'business-dinner',
    name: 'Business Dinner',
    description: 'Professional gatherings and client entertainment',
    icon: '💼'
  },
  {
    id: 'summer-lunch',
    name: 'Summer Lunch',
    description: 'Light, refreshing wines for warm weather',
    icon: '☀️'
  },
  {
    id: 'holiday-gathering',
    name: 'Holiday Gathering',
    description: 'Festive wines for seasonal celebrations',
    icon: '🎄'
  },
  {
    id: 'wine-tasting',
    name: 'Wine Tasting',
    description: 'Educational tastings and wine exploration',
    icon: '🍷'
  },
  {
    id: 'aperitif',
    name: 'Aperitif',
    description: 'Pre-dinner drinks and light appetizers',
    icon: '🥂'
  }
];