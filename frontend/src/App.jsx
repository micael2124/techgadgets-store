import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { products, categories, featuredProducts } from './data/products';
import { 
  Filter, 
  Grid3X3, 
  List, 
  SortAsc, 
  Star, 
  Truck, 
  Shield, 
  Headphones,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || 
        product.category.toLowerCase() === selectedCategory.replace('-', '/').toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.featured ? 1 : -1;
      }
    });

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleToggleWishlist = (product) => {
    setWishlistItems(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Aqui seria enviado para o backend
    console.log('Contact form submitted:', contactForm);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const scrollToProducts = () => {
    setCurrentView('products');
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={cartItems}
        onCartClick={() => setCurrentView('cart')}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <Hero onExploreClick={scrollToProducts} />

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra os gadgets mais inovadores e populares da nossa coleção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewProduct={setSelectedProduct}
                onToggleWishlist={handleToggleWishlist}
                isInWishlist={isInWishlist(product.id)}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              onClick={() => setCurrentView('products')}
              className="btn-primary"
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Categorias</h2>
            <p className="text-muted-foreground">
              Explore nossa ampla gama de produtos tecnológicos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.filter(cat => cat.id !== 'all').map(category => (
              <Card 
                key={category.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentView('products');
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} produtos
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {currentView === 'products' && (
        <section id="products" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-64 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      Filtros
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Categories */}
                    <div>
                      <h4 className="font-medium mb-3">Categorias</h4>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-accent text-accent-foreground'
                                : 'hover:bg-muted'
                            }`}
                          >
                            {category.name} ({category.count})
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sort */}
                    <div>
                      <h4 className="font-medium mb-3">Ordenar por</h4>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-2 border rounded-md bg-background"
                      >
                        <option value="featured">Destaques</option>
                        <option value="price-low">Menor preço</option>
                        <option value="price-high">Maior preço</option>
                        <option value="rating">Melhor avaliação</option>
                        <option value="name">Nome A-Z</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selectedCategory === 'all' ? 'Todos os Produtos' : 
                       categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <p className="text-muted-foreground">
                      {filteredProducts.length} produtos encontrados
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewProduct={setSelectedProduct}
                      onToggleWishlist={handleToggleWishlist}
                      isInWishlist={isInWishlist(product.id)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhum produto encontrado com os filtros selecionados.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Entrega Rápida</h3>
              <p className="text-muted-foreground">
                Entrega gratuita em 24-48h para toda a Europa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Garantia Premium</h3>
              <p className="text-muted-foreground">
                2 anos de garantia internacional em todos os produtos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Headphones className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground">
                Suporte técnico especializado sempre disponível
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-muted-foreground">
                Tem alguma dúvida? Nossa equipe está aqui para ajudar
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@techgadgets.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">+351 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua da Tecnologia, 123<br />
                      1000-001 Lisboa, Portugal
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome</label>
                      <Input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem</label>
                      <Textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn-primary">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TG</span>
                </div>
                <div>
                  <h3 className="font-bold">TechGadgets</h3>
                  <p className="text-xs opacity-80">O futuro na palma da sua mão</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Sua loja online de gadgets tecnológicos mais inovadores.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">AR/VR</a></li>
                <li><a href="#" className="hover:opacity-100">Wearables</a></li>
                <li><a href="#" className="hover:opacity-100">Audio</a></li>
                <li><a href="#" className="hover:opacity-100">Energia</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100">Garantia</a></li>
                <li><a href="#" className="hover:opacity-100">Devolução</a></li>
                <li><a href="#" className="hover:opacity-100">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm opacity-80 mb-4">
                Receba as últimas novidades e ofertas especiais
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Seu email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 TechGadgets Store. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

