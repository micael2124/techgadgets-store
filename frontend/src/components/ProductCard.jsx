import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ProductCard = ({ product, onAddToCart, onViewProduct, onToggleWishlist, isInWishlist = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(product);
    }
  };

  const handleViewProduct = () => {
    if (onViewProduct) {
      onViewProduct(product);
    }
  };

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        isHovered ? 'shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewProduct}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-48 object-cover transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg"></div>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <Badge className="bg-accent text-accent-foreground">
                <Zap className="w-3 h-3 mr-1" />
                Destaque
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="destructive">
                -{discountPercentage}%
              </Badge>
            )}
            {product.stock < 10 && (
              <Badge variant="outline" className="bg-background/80">
                Últimas {product.stock} unidades
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
              onClick={handleToggleWishlist}
            >
              <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-accent text-accent' : ''}`} />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleViewProduct();
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <Button
              size="sm"
              className="w-full btn-primary"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviews} avaliações)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">
                  €{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    €{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                Entrega gratuita
              </div>
            </div>

            {/* Stock indicator */}
            <div className="text-right">
              <div className={`text-xs ${
                product.stock > 10 
                  ? 'text-green-600' 
                  : product.stock > 0 
                    ? 'text-yellow-600' 
                    : 'text-red-600'
              }`}>
                {product.stock > 10 
                  ? 'Em stock' 
                  : product.stock > 0 
                    ? `${product.stock} restantes` 
                    : 'Esgotado'
                }
              </div>
            </div>
          </div>

          {/* Features preview */}
          {product.features && product.features.length > 0 && (
            <div className="pt-2 border-t">
              <div className="text-xs text-muted-foreground">
                ✓ {product.features[0]}
              </div>
              {product.features.length > 1 && (
                <div className="text-xs text-muted-foreground">
                  ✓ {product.features[1]}
                </div>
              )}
              {product.features.length > 2 && (
                <div className="text-xs text-accent">
                  +{product.features.length - 2} mais características
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

