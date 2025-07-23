import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = ({ cartItems = [], onCartClick, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">TG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">TechGadgets</h1>
              <p className="text-xs text-muted-foreground -mt-1">O futuro na palma da sua mão</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">
              Início
            </a>
            <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
              Produtos
            </a>
            <a href="#categories" className="text-sm font-medium hover:text-accent transition-colors">
              Categorias
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search - Mobile */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="h-4 w-4" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Heart className="h-4 w-4" />
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
            </Button>

            {/* Shopping Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#products" 
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#categories" 
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Favoritos
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Conta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

