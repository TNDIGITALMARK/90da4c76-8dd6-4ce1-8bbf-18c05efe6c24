'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { InteractivePairingTool } from '@/components/pairing/InteractivePairingTool';
import { WineCard } from '@/components/wine/WineCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { wines } from '@/data/wine-data';
import { Wine, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const [showPairingTool, setShowPairingTool] = useState(false);

  const featuredWines = wines.slice(0, 3);

  const wineTypes = [
    {
      id: 'red',
      name: 'Red Wines',
      description: 'Bold and complex reds',
      icon: '🍷',
      count: wines.filter(w => w.type === 'red').length
    },
    {
      id: 'white',
      name: 'White Wines',
      description: 'Crisp and refreshing whites',
      icon: '🥂',
      count: wines.filter(w => w.type === 'white').length
    },
    {
      id: 'sparkling',
      name: 'Sparkling',
      description: 'Celebratory bubbles',
      icon: '🍾',
      count: wines.filter(w => w.type === 'sparkling').length
    }
  ];

  return (
    <div className="min-h-screen bg-wine-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden wine-gradient text-white">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Elevate Your
              <br />
              <span className="wine-gold-gradient bg-clip-text text-transparent">
                Culinary Journey
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto opacity-90">
              Discover the perfect wine pairings for every meal, occasion, and moment worth savoring
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => setShowPairingTool(true)}
                className="bg-white text-wine-burgundy hover:bg-white/90 text-lg px-8 py-3 h-auto"
              >
                Find the perfect wine for your meal
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-wine-burgundy text-lg px-8 py-3 h-auto"
              >
                Explore Wine Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Wine Glasses Effect (Visual Enhancement) */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-20">
          <Wine className="w-16 h-16 text-white animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-16 transform -translate-y-1/2 opacity-20">
          <Wine className="w-12 h-12 text-white animate-pulse delay-300" />
        </div>
      </section>

      {/* Interactive Pairing Tool */}
      {showPairingTool && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <InteractivePairingTool
              onRecommendation={(selection) => {
                console.log('Pairing selection:', selection);
                // Navigate to results page
              }}
            />
          </div>
        </section>
      )}

      {/* Wine Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wine-charcoal">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe perfect harmony begins with understanding. From vineyard to table,
              we curate exceptional wines that celebrate both tradition and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wineTypes.map((type) => (
              <Card key={type.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-wine-cream rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-wine-charcoal">
                    {type.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    {type.count} selections
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pairings */}
      <section className="py-16 bg-wine-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wine-charcoal">
              Featured Pairings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover expertly curated wine and food combinations that create unforgettable dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWines.map((wine) => (
              <WineCard
                key={wine.id}
                wine={wine}
                className="hover:shadow-xl"
                onClick={() => {
                  console.log('Wine selected:', wine.name);
                  // Navigate to wine detail page
                }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-wine-burgundy hover:bg-wine-burgundy/90 text-white px-8"
            >
              View All Wine Pairings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Discover New Tastes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-wine-charcoal">
                Uncover New Tastes
              </h2>
              <p className="text-lg text-muted-foreground">
                Expand your palate with our expertly curated selection of wines from renowned vineyards worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-wine-burgundy rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Personalized</h3>
                  <p className="text-sm text-muted-foreground">
                    Get recommendations tailored to your taste preferences and dining occasions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-wine-burgundy rounded-lg flex items-center justify-center">
                    <Wine className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Expert Curated</h3>
                  <p className="text-sm text-muted-foreground">
                    Every bottle in our collection is carefully selected by certified sommeliers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-wine-burgundy rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Educational</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about wine regions, varietals, and pairing principles from our experts
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white"
              onClick={() => setShowPairingTool(true)}
            >
              Create Your Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wine-burgundy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Wine className="w-5 h-5 text-wine-burgundy" />
                </div>
                <span className="font-display text-2xl font-bold">VINUM</span>
              </div>
              <p className="text-white/80 text-sm">
                Elevating your culinary journey through exceptional wine pairings and expert guidance.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>Wine Pairing</div>
                <div>Personal Sommelier</div>
                <div>Wine Education</div>
                <div>Event Planning</div>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>About Us</div>
                <div>Our Story</div>
                <div>Team</div>
                <div>Careers</div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Cookie Policy</div>
                <div>Contact</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 Vinum. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}