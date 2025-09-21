'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { educationalArticles, wineRegions, grapeVarietals, tastingNotes } from '@/data/education-data';
import { BookOpen, Clock, User, MapPin, Grape, Palette, ArrowRight, Star } from 'lucide-react';

export default function EducationPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-wine-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-wine-burgundy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Wine Education Hub
            </h1>
            <p className="text-xl opacity-90">
              Expand your wine knowledge with expert insights, regional guides, and tasting techniques
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{educationalArticles.length} Articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{wineRegions.length} Regions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Grape className="w-4 h-4" />
                <span>{grapeVarietals.length} Varietals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white border-wine-burgundy/20">
            <TabsTrigger
              value="articles"
              className="data-[state=active]:bg-wine-burgundy data-[state=active]:text-white"
            >
              Articles
            </TabsTrigger>
            <TabsTrigger
              value="regions"
              className="data-[state=active]:bg-wine-burgundy data-[state=active]:text-white"
            >
              Regions
            </TabsTrigger>
            <TabsTrigger
              value="varietals"
              className="data-[state=active]:bg-wine-burgundy data-[state=active]:text-white"
            >
              Varietals
            </TabsTrigger>
            <TabsTrigger
              value="tasting"
              className="data-[state=active]:bg-wine-burgundy data-[state=active]:text-white"
            >
              Tasting Guide
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl font-bold text-wine-charcoal">
                Expert Articles & Guides
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from certified sommeliers and wine experts with our comprehensive guides
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationalArticles.map((article) => (
                <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(article.difficulty)}>
                        {article.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-wine-burgundy border-wine-burgundy/30">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="font-display text-xl group-hover:text-wine-burgundy transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} min read</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-wine-burgundy hover:bg-wine-burgundy/90 text-white mt-4"
                      size="sm"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Regions Tab */}
          <TabsContent value="regions" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl font-bold text-wine-charcoal">
                Wine Regions of the World
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the unique characteristics and terroir of renowned wine regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wineRegions.map((region) => (
                <Card key={region.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-wine-burgundy/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-16 h-16 text-wine-burgundy/50" />
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-bold text-wine-charcoal">
                        {region.name}
                      </h3>
                      <Badge variant="outline" className="text-wine-burgundy">
                        {region.country}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      {region.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Climate:</h4>
                        <p className="text-sm text-muted-foreground">{region.climate}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Soil:</h4>
                        <p className="text-sm text-muted-foreground">{region.soilType}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Primary Grapes:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {region.primaryGrapes.map((grape) => (
                            <Badge key={grape} variant="secondary" className="text-xs">
                              {grape}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Characteristics:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {region.characteristics.map((char) => (
                            <Badge key={char} variant="outline" className="text-xs border-wine-burgundy/20">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white"
                      size="sm"
                    >
                      Explore Wines from {region.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Varietals Tab */}
          <TabsContent value="varietals" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl font-bold text-wine-charcoal">
                Grape Varietals Guide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the unique characteristics of major wine grape varieties
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {grapeVarietals.map((varietal) => (
                <Card key={varietal.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-display text-2xl flex items-center">
                        <Grape className="w-6 h-6 mr-2 text-wine-burgundy" />
                        {varietal.name}
                      </CardTitle>
                      <Badge
                        className={
                          varietal.type === 'red'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }
                      >
                        {varietal.type} grape
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-sm">
                      {varietal.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-wine-charcoal">Body:</h4>
                          <p className="text-sm text-muted-foreground capitalize">
                            {varietal.characteristics.body}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-wine-charcoal">Acidity:</h4>
                          <p className="text-sm text-muted-foreground capitalize">
                            {varietal.characteristics.acidity}
                          </p>
                        </div>
                        {varietal.characteristics.tannins && (
                          <div>
                            <h4 className="font-semibold text-sm text-wine-charcoal">Tannins:</h4>
                            <p className="text-sm text-muted-foreground capitalize">
                              {varietal.characteristics.tannins}
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Serving Temp:</h4>
                        <p className="text-sm text-muted-foreground">{varietal.servingTemp}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Flavors:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {varietal.characteristics.flavors.map((flavor) => (
                            <Badge key={flavor} variant="secondary" className="text-xs">
                              {flavor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-wine-charcoal">Food Pairings:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {varietal.foodPairings.slice(0, 4).map((pairing) => (
                            <Badge key={pairing} variant="outline" className="text-xs border-wine-burgundy/20">
                              {pairing}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tasting Guide Tab */}
          <TabsContent value="tasting" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl font-bold text-wine-charcoal">
                Wine Tasting Guide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master the art of wine tasting with our comprehensive vocabulary and techniques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Colors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Palette className="w-5 h-5 mr-2 text-wine-burgundy" />
                    Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-wine-charcoal mb-2">Red Wines:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tastingNotes.colors.red.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-wine-charcoal mb-2">White Wines:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tastingNotes.colors.white.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-wine-charcoal mb-2">Rosé Wines:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tastingNotes.colors.rosé.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aromas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Star className="w-5 h-5 mr-2 text-wine-burgundy" />
                    Aromas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(tastingNotes.aromas).map(([category, aromas]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-sm text-wine-charcoal mb-2 capitalize">{category}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {aromas.map((aroma) => (
                          <Badge key={aroma} variant="secondary" className="text-xs">
                            {aroma}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Flavors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="w-5 h-5 mr-2 text-wine-burgundy" />
                    Flavor Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(tastingNotes.flavors).map(([category, flavors]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-sm text-wine-charcoal mb-2 capitalize">{category}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {flavors.map((flavor) => (
                          <Badge key={flavor} variant="outline" className="text-xs border-wine-gold/30 text-wine-charcoal">
                            {flavor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Tasting Steps */}
            <Card className="bg-wine-cream/30">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-center">
                  The Five S's of Wine Tasting
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: 'See', description: 'Examine the wine\'s color and clarity', icon: '👁️' },
                  { step: 'Swirl', description: 'Gently swirl to release aromas', icon: '🌀' },
                  { step: 'Smell', description: 'Identify primary, secondary aromas', icon: '👃' },
                  { step: 'Sip', description: 'Taste and evaluate structure', icon: '👅' },
                  { step: 'Savor', description: 'Assess the finish and length', icon: '✨' }
                ].map((step, index) => (
                  <div key={step.step} className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-wine-burgundy rounded-full flex items-center justify-center text-2xl text-white">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-wine-charcoal">{step.step}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}