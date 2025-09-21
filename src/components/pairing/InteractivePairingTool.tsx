'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { foodCategories, flavorProfiles, occasions, wines } from '@/data/wine-data';
import { ChefHat, Sparkles, Calendar, Wine, ArrowRight } from 'lucide-react';

interface PairingSelection {
  foodCategory: string | null;
  flavorProfile: string | null;
  occasion: string | null;
}

interface InteractivePairingToolProps {
  onRecommendation?: (selection: PairingSelection) => void;
}

export function InteractivePairingTool({ onRecommendation }: InteractivePairingToolProps) {
  const [selection, setSelection] = useState<PairingSelection>({
    foodCategory: null,
    flavorProfile: null,
    occasion: null
  });

  const [currentStep, setCurrentStep] = useState<'food' | 'flavor' | 'occasion' | 'result'>('food');

  const handleFoodSelection = (categoryId: string) => {
    setSelection(prev => ({ ...prev, foodCategory: categoryId }));
    setCurrentStep('flavor');
  };

  const handleFlavorSelection = (profileId: string) => {
    setSelection(prev => ({ ...prev, flavorProfile: profileId }));
    setCurrentStep('occasion');
  };

  const handleOccasionSelection = (occasionId: string) => {
    setSelection(prev => ({ ...prev, occasion: occasionId }));
    setCurrentStep('result');
    if (onRecommendation) {
      onRecommendation({ ...selection, occasion: occasionId });
    }
  };

  const resetSelection = () => {
    setSelection({ foodCategory: null, flavorProfile: null, occasion: null });
    setCurrentStep('food');
  };

  const getMatchingWines = () => {
    return wines.filter(wine => {
      let matches = 0;

      // Check food category match
      if (selection.foodCategory) {
        const category = foodCategories.find(c => c.id === selection.foodCategory);
        if (category) {
          const hasMatch = wine.foodPairings.some(pairing =>
            category.items.some(item =>
              pairing.toLowerCase().includes(item.toLowerCase()) ||
              item.toLowerCase().includes(pairing.toLowerCase())
            )
          );
          if (hasMatch) matches++;
        }
      }

      // Check flavor profile match
      if (selection.flavorProfile) {
        if (wine.flavorProfile.includes(selection.flavorProfile)) {
          matches++;
        }
      }

      // Check occasion match
      if (selection.occasion) {
        if (wine.occasion.includes(selection.occasion)) {
          matches++;
        }
      }

      return matches >= 2; // Require at least 2 matches
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'food':
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <ChefHat className="w-12 h-12 mx-auto text-wine-burgundy" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                What are you eating?
              </h3>
              <p className="text-muted-foreground">
                Select your main course or cuisine type
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {foodCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className="h-auto p-4 flex flex-col space-y-2 hover:bg-wine-burgundy hover:text-white transition-colors"
                  onClick={() => handleFoodSelection(category.id)}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case 'flavor':
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <Sparkles className="w-12 h-12 mx-auto text-wine-burgundy" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                What flavor profile do you prefer?
              </h3>
              <p className="text-muted-foreground">
                Choose the wine style that appeals to you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {flavorProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="cursor-pointer transition-all hover:shadow-md hover:bg-wine-burgundy/5"
                  onClick={() => handleFlavorSelection(profile.id)}
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{profile.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {profile.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {profile.characteristics.map((char, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'occasion':
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <Calendar className="w-12 h-12 mx-auto text-wine-burgundy" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                What's the occasion?
              </h3>
              <p className="text-muted-foreground">
                Help us suggest the perfect wine for your moment
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {occasions.map((occasion) => (
                <Button
                  key={occasion.id}
                  variant="outline"
                  className="h-auto p-4 flex flex-col space-y-2 hover:bg-wine-burgundy hover:text-white transition-colors"
                  onClick={() => handleOccasionSelection(occasion.id)}
                >
                  <span className="text-2xl">{occasion.icon}</span>
                  <span className="text-sm font-medium text-center">{occasion.name}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case 'result':
        const matchingWines = getMatchingWines();
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Wine className="w-12 h-12 mx-auto text-wine-burgundy" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Perfect Pairings Found!
              </h3>
              <p className="text-muted-foreground">
                We found {matchingWines.length} wines that match your preferences
              </p>
            </div>

            {/* Selection Summary */}
            <div className="bg-wine-cream/50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Your Selection:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selection.foodCategory && (
                  <Badge className="bg-wine-burgundy text-white">
                    {foodCategories.find(c => c.id === selection.foodCategory)?.name}
                  </Badge>
                )}
                {selection.flavorProfile && (
                  <Badge className="bg-wine-gold text-wine-charcoal">
                    {flavorProfiles.find(p => p.id === selection.flavorProfile)?.name}
                  </Badge>
                )}
                {selection.occasion && (
                  <Badge variant="secondary">
                    {occasions.find(o => o.id === selection.occasion)?.name}
                  </Badge>
                )}
              </div>
            </div>

            {/* Quick Wine Previews */}
            {matchingWines.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingWines.slice(0, 4).map((wine) => (
                  <Card key={wine.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-wine-burgundy/10 rounded-lg flex items-center justify-center">
                          <Wine className="w-6 h-6 text-wine-burgundy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-sm line-clamp-1">{wine.name}</h5>
                          <p className="text-xs text-muted-foreground">{wine.winery}</p>
                          <p className="text-sm font-bold text-wine-burgundy mt-1">
                            ${wine.price}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 bg-wine-burgundy hover:bg-wine-burgundy/90 text-white"
                onClick={() => onRecommendation?.(selection)}
              >
                View All Recommendations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={resetSelection}>
                Start Over
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="font-display text-3xl font-bold text-foreground">
          Find Your Perfect Wine
        </CardTitle>
        <p className="text-muted-foreground">
          Answer a few questions to get personalized wine recommendations
        </p>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {['food', 'flavor', 'occasion'].map((step, index) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep === step ||
                (step === 'food' && ['flavor', 'occasion', 'result'].includes(currentStep)) ||
                (step === 'flavor' && ['occasion', 'result'].includes(currentStep)) ||
                (step === 'occasion' && currentStep === 'result')
                  ? 'bg-wine-burgundy'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {renderStep()}
      </CardContent>
    </Card>
  );
}