import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden hero-gradient text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Novos produtos chegando</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                O Futuro na
                <span className="block text-gradient bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">
                  Palma da Sua Mão
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg">
                Descubra os gadgets tecnológicos mais inovadores de 2025. 
                Realidade aumentada, wearables inteligentes e muito mais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-3"
                onClick={onExploreClick}
              >
                Explorar Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10"
              >
                Ver Ofertas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/70">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50k+</div>
                <div className="text-sm text-white/70">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.8★</div>
                <div className="text-sm text-white/70">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tecnologia de Ponta</h3>
                    <p className="text-white/80">
                      Os gadgets mais avançados com inteligência artificial e conectividade 5G.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Garantia Premium</h3>
                    <p className="text-white/80">
                      2 anos de garantia internacional e suporte técnico especializado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Entrega Rápida</h3>
                    <p className="text-white/80">
                      Entrega gratuita em 24-48h para toda a Europa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

