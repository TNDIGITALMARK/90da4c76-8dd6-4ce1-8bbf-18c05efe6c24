'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { WineCard } from '@/components/wine/WineCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { wines, foodCategories, flavorProfiles, occasions } from '@/data/wine-data';
import { Filter, SlidersHorizontal, Wine, Star, MapPin } from 'lucide-react';

export default function RecommendationsPage() {
  const [filteredWines, setFilteredWines] = useState(wines);
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: [0, 200],
    rating: 0,
    region: 'all',
    occasion: 'all',
    flavorProfile: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    let filtered = wines.filter(wine => {
      // Type filter
      if (filters.type !== 'all' && wine.type !== filters.type) return false;

      // Price range filter
      if (wine.price < filters.priceRange[0] || wine.price > filters.priceRange[1]) return false;

      // Rating filter
      if (wine.rating < filters.rating) return false;

      // Region filter
      if (filters.region !== 'all' && wine.region !== filters.region) return false;

      // Occasion filter
      if (filters.occasion !== 'all' && !wine.occasion.includes(filters.occasion)) return false;

      // Flavor profile filter
      if (filters.flavorProfile !== 'all' && !wine.flavorProfile.includes(filters.flavorProfile)) return false;

      return true;
    });

    // Sort wines (this modifies the filtered array, so let is correct)
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredWines(filtered);
  }, [filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      type: 'all',
      priceRange: [0, 200],
      rating: 0,
      region: 'all',
      occasion: 'all',
      flavorProfile: 'all'
    });
  };

  const uniqueRegions = [...new Set(wines.map(wine => wine.region))];

  return (
    <div className="min-h-screen bg-wine-cream">
      <Navigation />

      {/* Header */}
      <section className="bg-wine-burgundy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Your Perfect Wine Matches
            </h1>
            <p className="text-xl opacity-90">
              Discover wines tailored to your taste preferences and dining occasions
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Wine className="w-4 h-4" />
                <span>{filteredWines.length} wines found</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Expert curated</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Premium regions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Filter Toggle (Mobile) */}
            <div className="lg:hidden">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full justify-center"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            {/* Filter Panel */}
            <div className={`space-y-6 ${showFilters || 'hidden lg:block'}`}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="flex items-center">
                      <Filter className="w-5 h-5 mr-2" />
                      Filters
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-wine-burgundy hover:text-wine-burgundy/80"
                    >
                      Clear All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Wine Type */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Wine Type</label>
                    <Select
                      value={filters.type}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="red">Red Wine</SelectItem>
                        <SelectItem value="white">White Wine</SelectItem>
                        <SelectItem value="sparkling">Sparkling Wine</SelectItem>
                        <SelectItem value="rosé">Rosé Wine</SelectItem>
                        <SelectItem value="dessert">Dessert Wine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                    </label>
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                      max={200}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  {/* Minimum Rating */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Minimum Rating: {filters.rating}+
                    </label>
                    <Slider
                      value={[filters.rating]}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, rating: value[0] }))}
                      max={5}
                      min={0}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  {/* Region */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Region</label>
                    <Select
                      value={filters.region}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, region: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All regions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        {uniqueRegions.map(region => (
                          <SelectItem key={region} value={region}>{region}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Occasion */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Occasion</label>
                    <Select
                      value={filters.occasion}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, occasion: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All occasions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Occasions</SelectItem>
                        {occasions.map(occasion => (
                          <SelectItem key={occasion.id} value={occasion.id}>
                            {occasion.icon} {occasion.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Flavor Profile */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Flavor Profile</label>
                    <Select
                      value={filters.flavorProfile}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, flavorProfile: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All profiles" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Profiles</SelectItem>
                        {flavorProfiles.map(profile => (
                          <SelectItem key={profile.id} value={profile.id}>{profile.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 space-y-6">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-wine-charcoal">
                {filteredWines.length} wines match your criteria
              </h2>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Sort by Name</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {(filters.type !== 'all' || filters.rating > 0 || filters.region !== 'all' ||
              filters.occasion !== 'all' || filters.flavorProfile !== 'all' ||
              filters.priceRange[0] > 0 || filters.priceRange[1] < 200) && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {filters.type !== 'all' && (
                  <Badge variant="secondary" className="capitalize">
                    {filters.type} wine
                  </Badge>
                )}
                {filters.rating > 0 && (
                  <Badge variant="secondary">
                    {filters.rating}+ stars
                  </Badge>
                )}
                {(filters.priceRange[0] > 0 || filters.priceRange[1] < 200) && (
                  <Badge variant="secondary">
                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </Badge>
                )}
                {filters.region !== 'all' && (
                  <Badge variant="secondary">
                    {filters.region}
                  </Badge>
                )}
                {filters.occasion !== 'all' && (
                  <Badge variant="secondary">
                    {occasions.find(o => o.id === filters.occasion)?.name}
                  </Badge>
                )}
                {filters.flavorProfile !== 'all' && (
                  <Badge variant="secondary">
                    {flavorProfiles.find(p => p.id === filters.flavorProfile)?.name}
                  </Badge>
                )}
              </div>
            )}

            {/* Wine Grid */}
            {filteredWines.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWines.map((wine) => (
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
            ) : (
              <Card className="text-center py-16">
                <CardContent>
                  <Wine className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    No wines match your criteria
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters to see more results
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}