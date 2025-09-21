'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Wine, Menu, Search, User } from 'lucide-react';

const navigationLinks = [
  { href: '/pairings', label: 'Pairings' },
  { href: '/wines', label: 'Wines' },
  { href: '/education', label: 'Learn' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-wine-cream/95 backdrop-blur supports-[backdrop-filter]:bg-wine-cream/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-wine-burgundy rounded-lg flex items-center justify-center">
              <Wine className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-2xl font-bold text-wine-burgundy">
              VINUM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-wine-charcoal hover:text-wine-burgundy transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine-burgundy transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-wine-charcoal hover:text-wine-burgundy"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-wine-charcoal hover:text-wine-burgundy"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-wine-charcoal hover:text-wine-burgundy"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-wine-cream">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-2 pb-4 border-b border-wine-burgundy/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-wine-burgundy rounded-lg flex items-center justify-center">
                      <Wine className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-display text-2xl font-bold text-wine-burgundy">
                      VINUM
                    </span>
                  </Link>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-3">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-wine-charcoal hover:text-wine-burgundy transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-wine-burgundy/5"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-wine-burgundy/20">
                    <Button
                      variant="outline"
                      className="justify-start text-wine-charcoal border-wine-burgundy/20 hover:bg-wine-burgundy hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search Wines
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start text-wine-charcoal border-wine-burgundy/20 hover:bg-wine-burgundy hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Account
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}