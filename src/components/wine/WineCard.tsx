'use client';

import { Wine } from '@/data/wine-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Thermometer, Wine as WineIcon } from 'lucide-react';
import Image from 'next/image';

interface WineCardProps {
  wine: Wine;
  className?: string;
  onClick?: () => void;
}

export function WineCard({ wine, className = '', onClick }: WineCardProps) {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const getWineTypeColor = (type: string) => {
    const colors = {
      red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      white: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      rosé: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      sparkling: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      dessert: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {rating.toFixed(1)} ({wine.reviews})
        </span>
      </div>
    );
  };

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute top-2 left-2">
            <Badge className={getWineTypeColor(wine.type)}>
              {wine.type}
            </Badge>
          </div>
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-black/50 text-white">
              {wine.vintage || 'NV'}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {/* Wine Name and Winery */}
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">
            {wine.name}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            {wine.winery}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{wine.region}, {wine.country}</span>
        </div>

        {/* Rating */}
        <div>
          {renderStars(wine.rating)}
        </div>

        {/* Tasting Notes Preview */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {wine.tastingNotes.flavor.slice(0, 3).map((flavor, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-wine-burgundy/20 text-wine-burgundy"
              >
                {flavor}
              </Badge>
            ))}
          </div>
        </div>

        {/* Body and Serving Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <WineIcon className="w-3 h-3" />
            <span className="capitalize">{wine.tastingNotes.body} body</span>
          </div>
          <div className="flex items-center space-x-1">
            <Thermometer className="w-3 h-3" />
            <span>{wine.servingTemperature}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t">
          <span className="font-display font-bold text-lg text-wine-burgundy">
            {formatPrice(wine.price)}
          </span>
          <div className="text-xs text-muted-foreground">
            {wine.alcoholContent}% ABV
          </div>
        </div>

        {/* Food Pairing Hints */}
        <div className="pt-2">
          <p className="text-xs text-muted-foreground">
            Pairs with: {wine.foodPairings.slice(0, 2).join(', ')}
            {wine.foodPairings.length > 2 && '...'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}