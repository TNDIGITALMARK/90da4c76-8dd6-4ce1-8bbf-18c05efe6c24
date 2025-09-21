export interface EducationalArticle {
  id: string;
  title: string;
  category: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  author: string;
  publishDate: string;
}

export interface WineRegion {
  id: string;
  name: string;
  country: string;
  climate: string;
  soilType: string;
  primaryGrapes: string[];
  characteristics: string[];
  notableProducers: string[];
  description: string;
  image: string;
}

export interface GrapeVarietal {
  id: string;
  name: string;
  type: 'red' | 'white';
  characteristics: {
    body: string;
    acidity: string;
    tannins?: string;
    flavors: string[];
    aromas: string[];
  };
  primaryRegions: string[];
  foodPairings: string[];
  servingTemp: string;
  description: string;
  image: string;
}

export const educationalArticles: EducationalArticle[] = [
  {
    id: 'wine-tasting-basics',
    title: 'The Art of Wine Tasting: A Beginner\'s Guide',
    category: 'Tasting',
    readTime: 8,
    difficulty: 'beginner',
    excerpt: 'Learn the fundamentals of wine tasting, from proper glassware to evaluating color, aroma, and flavor.',
    content: `
# The Art of Wine Tasting: A Beginner's Guide

Wine tasting is more than just drinking wine—it's an art form that engages all your senses and deepens your appreciation for this ancient beverage.

## The Five S's of Wine Tasting

### 1. See
Start by examining the wine's appearance. Hold your glass against a white background and observe:
- **Color intensity**: Is it pale or deep?
- **Hue**: What specific color tones do you notice?
- **Clarity**: Is the wine clear or cloudy?

### 2. Swirl
Gently swirl the wine in your glass to release its aromatic compounds. This oxygenation helps the wine "open up" and reveal more complex scents.

### 3. Smell
Place your nose just inside the glass and take a deep breath. Try to identify:
- **Primary aromas**: Fruit, floral, or herbal notes
- **Secondary aromas**: From fermentation processes
- **Tertiary aromas**: From aging and maturation

### 4. Sip
Take a small sip and let the wine coat your palate. Consider:
- **Initial taste**: What do you notice first?
- **Mid-palate**: How does the flavor evolve?
- **Balance**: How do sweetness, acidity, and tannins interact?

### 5. Savor
After swallowing, notice the finish:
- **Length**: How long do the flavors linger?
- **Quality**: Are the lingering flavors pleasant?
- **Evolution**: How does the taste change over time?

## Building Your Tasting Vocabulary

Developing a wine vocabulary takes practice. Start with basic descriptors and gradually expand your repertoire as you taste more wines.

Remember, there are no wrong answers in wine tasting—trust your palate and enjoy the journey of discovery!
    `,
    image: '/images/education/wine-tasting-guide.jpg',
    tags: ['tasting', 'beginner', 'fundamentals'],
    author: 'Sarah Chen, Sommelier',
    publishDate: '2024-03-15'
  },
  {
    id: 'food-pairing-principles',
    title: 'Mastering Food and Wine Pairing: The Essential Principles',
    category: 'Pairing',
    readTime: 12,
    difficulty: 'intermediate',
    excerpt: 'Discover the key principles behind successful food and wine pairings, from complementary flavors to contrasting textures.',
    content: `
# Mastering Food and Wine Pairing: The Essential Principles

The art of pairing food and wine is about creating harmony between flavors, textures, and intensities to enhance both the dish and the wine.

## Fundamental Pairing Principles

### 1. Match Intensity
Pair light wines with delicate dishes and bold wines with robust flavors. A delicate Pinot Grigio would be overwhelmed by a rich beef stew, while a full-bodied Cabernet Sauvignon would overpower a light seafood dish.

### 2. Complement or Contrast
- **Complement**: Match similar flavors and characteristics (earthy wine with mushroom dishes)
- **Contrast**: Use opposing elements to create balance (crisp, acidic wine with rich, creamy dishes)

### 3. Consider Acidity
High-acid wines work well with:
- Rich, fatty foods (cuts through richness)
- Tomato-based dishes
- Foods with citrus elements

### 4. Tannin Considerations
Tannins in red wines pair beautifully with:
- Protein-rich foods (tannins bind with proteins)
- Grilled or charred meats
- Aged cheeses

### 5. Sweetness Balance
Sweet wines should be sweeter than the food they accompany, or they'll taste bitter by comparison.

## Classic Pairing Examples

- **Champagne + Oysters**: The wine's acidity and effervescence complement the briny sweetness
- **Pinot Noir + Duck**: Both have earthy complexity and medium body
- **Riesling + Spicy Food**: Sweetness balances heat and spice
- **Cabernet Sauvignon + Aged Steak**: Tannins enhance the meat's proteins

## Regional Pairings
Foods and wines from the same region often pair naturally—they've evolved together over centuries. Think Chianti with tomato-based pasta or Muscadet with French oysters.
    `,
    image: '/images/education/food-pairing-principles.jpg',
    tags: ['pairing', 'food', 'principles', 'intermediate'],
    author: 'Marcus Thompson, Wine Educator',
    publishDate: '2024-03-10'
  },
  {
    id: 'bordeaux-terroir',
    title: 'Understanding Terroir: The Bordeaux Example',
    category: 'Regions',
    readTime: 15,
    difficulty: 'advanced',
    excerpt: 'Explore the concept of terroir through the lens of Bordeaux, where soil, climate, and tradition create distinct wine styles.',
    content: `
# Understanding Terroir: The Bordeaux Example

Terroir—the complete natural environment in which a wine is produced—is nowhere more evident than in Bordeaux, where subtle differences in soil and microclimate create distinctly different wine styles.

## Left Bank vs. Right Bank

### Left Bank (Médoc and Graves)
- **Soil**: Gravel-based soils that drain well and retain heat
- **Primary Grape**: Cabernet Sauvignon
- **Style**: Structured, tannic, long-aging wines
- **Famous Appellations**: Pauillac, Saint-Estèphe, Saint-Julien

### Right Bank (Saint-Émilion and Pomerol)
- **Soil**: Clay and limestone-based soils
- **Primary Grape**: Merlot
- **Style**: Softer, more approachable, earlier-drinking wines
- **Famous Appellations**: Saint-Émilion, Pomerol

## The Role of Climate

Bordeaux's maritime climate, influenced by the Atlantic Ocean and Gironde estuary, provides:
- Moderate temperatures
- Adequate rainfall
- Protection from extreme weather

This climate allows for slow, steady ripening that develops complex flavors while maintaining good acidity.

## Soil Composition Impact

Different soil types affect vine behavior:
- **Gravel**: Drains well, reflects heat, ideal for late-ripening Cabernet Sauvignon
- **Clay**: Retains water, suits earlier-ripening Merlot
- **Limestone**: Provides good drainage while retaining some moisture

Understanding these terroir factors helps explain why Bordeaux wines from different areas taste distinctly different, even when made with similar techniques.
    `,
    image: '/images/education/bordeaux-terroir.jpg',
    tags: ['terroir', 'bordeaux', 'regions', 'advanced'],
    author: 'Dr. Elena Rossi, Viticulturist',
    publishDate: '2024-03-05'
  }
];

export const wineRegions: WineRegion[] = [
  {
    id: 'burgundy',
    name: 'Burgundy',
    country: 'France',
    climate: 'Continental',
    soilType: 'Limestone and clay',
    primaryGrapes: ['Pinot Noir', 'Chardonnay'],
    characteristics: ['Elegant', 'Terroir-driven', 'Complex', 'Age-worthy'],
    notableProducers: ['Domaine de la Romanée-Conti', 'Louis Jadot', 'Joseph Drouhin'],
    description: 'Burgundy is renowned for producing some of the world\'s most elegant and expressive Pinot Noir and Chardonnay wines, with a complex hierarchy of appellations reflecting subtle terroir differences.',
    image: '/images/regions/burgundy.jpg'
  },
  {
    id: 'champagne',
    name: 'Champagne',
    country: 'France',
    climate: 'Cool continental',
    soilType: 'Chalk and limestone',
    primaryGrapes: ['Chardonnay', 'Pinot Noir', 'Pinot Meunier'],
    characteristics: ['Effervescent', 'Elegant', 'Complex', 'Celebratory'],
    notableProducers: ['Dom Pérignon', 'Krug', 'Bollinger'],
    description: 'The only region that can legally produce Champagne, known for its traditional method sparkling wines with exceptional finesse and complexity.',
    image: '/images/regions/champagne.jpg'
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    country: 'Italy',
    climate: 'Mediterranean',
    soilType: 'Clay, limestone, and schist',
    primaryGrapes: ['Sangiovese', 'Cabernet Sauvignon', 'Merlot'],
    characteristics: ['Food-friendly', 'Structured', 'Traditional', 'Diverse'],
    notableProducers: ['Antinori', 'Frescobaldi', 'Castello Banfi'],
    description: 'Home to Chianti and other prestigious Italian wines, Tuscany combines traditional Sangiovese with international varietals in both classic and Super Tuscan styles.',
    image: '/images/regions/tuscany.jpg'
  }
];

export const grapeVarietals: GrapeVarietal[] = [
  {
    id: 'pinot-noir',
    name: 'Pinot Noir',
    type: 'red',
    characteristics: {
      body: 'Light to medium',
      acidity: 'High',
      tannins: 'Low to medium',
      flavors: ['cherry', 'raspberry', 'strawberry', 'earthy', 'spice'],
      aromas: ['red fruit', 'floral', 'forest floor', 'mushroom']
    },
    primaryRegions: ['Burgundy', 'Oregon', 'California', 'New Zealand'],
    foodPairings: ['Duck', 'Salmon', 'Mushroom dishes', 'Soft cheeses'],
    servingTemp: '16-18°C (61-64°F)',
    description: 'Often called the "heartbreak grape" due to its difficulty to grow, Pinot Noir produces some of the world\'s most elegant and complex wines when conditions are right.',
    image: '/images/grapes/pinot-noir.jpg'
  },
  {
    id: 'chardonnay',
    name: 'Chardonnay',
    type: 'white',
    characteristics: {
      body: 'Medium to full',
      acidity: 'Medium to high',
      flavors: ['apple', 'pear', 'citrus', 'vanilla', 'butter'],
      aromas: ['fruit', 'floral', 'oak', 'mineral']
    },
    primaryRegions: ['Burgundy', 'California', 'Australia', 'Chile'],
    foodPairings: ['Lobster', 'Chicken', 'Creamy sauces', 'Grilled fish'],
    servingTemp: '10-12°C (50-54°F)',
    description: 'The world\'s most popular white grape, Chardonnay is incredibly versatile, ranging from crisp and mineral to rich and oaky depending on winemaking style.',
    image: '/images/grapes/chardonnay.jpg'
  },
  {
    id: 'cabernet-sauvignon',
    name: 'Cabernet Sauvignon',
    type: 'red',
    characteristics: {
      body: 'Full',
      acidity: 'Medium',
      tannins: 'High',
      flavors: ['blackcurrant', 'plum', 'cedar', 'tobacco', 'chocolate'],
      aromas: ['dark fruit', 'herbs', 'oak', 'spice']
    },
    primaryRegions: ['Bordeaux', 'Napa Valley', 'Australia', 'Chile'],
    foodPairings: ['Red meat', 'Grilled steak', 'Aged cheeses', 'Dark chocolate'],
    servingTemp: '18-20°C (64-68°F)',
    description: 'Known as the "king of red grapes," Cabernet Sauvignon produces powerful, age-worthy wines with distinctive cassis flavors and firm tannins.',
    image: '/images/grapes/cabernet-sauvignon.jpg'
  }
];

export const tastingNotes = {
  colors: {
    red: ['Garnet', 'Ruby', 'Purple', 'Brick', 'Mahogany'],
    white: ['Pale yellow', 'Golden', 'Straw', 'Green-tinged', 'Amber'],
    rosé: ['Salmon', 'Pale pink', 'Copper', 'Onion skin']
  },
  aromas: {
    fruit: ['Apple', 'Pear', 'Citrus', 'Berry', 'Tropical', 'Stone fruit'],
    floral: ['Violet', 'Rose', 'Jasmine', 'Orange blossom'],
    herbal: ['Grass', 'Mint', 'Eucalyptus', 'Thyme'],
    spice: ['Pepper', 'Cinnamon', 'Clove', 'Vanilla'],
    earthy: ['Mineral', 'Wet stone', 'Forest floor', 'Mushroom'],
    oak: ['Vanilla', 'Toast', 'Cedar', 'Smoke']
  },
  flavors: {
    primary: ['Fresh fruit', 'Floral', 'Herbal'],
    secondary: ['Yeast', 'Cream', 'Butter'],
    tertiary: ['Leather', 'Tobacco', 'Coffee', 'Dried fruit']
  }
};