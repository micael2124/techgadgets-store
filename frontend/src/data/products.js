// Dados dos produtos da loja
export const products = [
  {
    id: 1,
    name: "Óculos de Realidade Aumentada Pro",
    category: "AR/VR",
    price: 399.99,
    originalPrice: 499.99,
    image: "/src/assets/images/products/ar-glasses-1.jpg",
    images: [
      "/src/assets/images/products/ar-glasses-1.jpg",
      "/src/assets/images/products/ar-glasses-2.jpg",
      "/src/assets/images/products/ar-glasses-3.jpg"
    ],
    description: "Experimente o futuro com nossos óculos de realidade aumentada de última geração. Perfeito para trabalho, entretenimento e produtividade.",
    features: [
      "Display 4K de alta resolução",
      "Campo de visão de 120°",
      "Rastreamento ocular avançado",
      "Bateria de 8 horas",
      "Compatível com iOS e Android"
    ],
    specifications: {
      "Resolução": "4K por olho",
      "Campo de Visão": "120°",
      "Peso": "85g",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.2",
      "Bateria": "8 horas de uso contínuo"
    },
    stock: 15,
    rating: 4.8,
    reviews: 127,
    featured: true
  },
  {
    id: 2,
    name: "Smartwatch Health Monitor Pro",
    category: "Wearables",
    price: 249.99,
    originalPrice: 299.99,
    image: "/src/assets/images/products/smartwatch-1.jpg",
    images: [
      "/src/assets/images/products/smartwatch-1.jpg",
      "/src/assets/images/products/smartwatch-2.jpg",
      "/src/assets/images/products/smartwatch-3.png"
    ],
    description: "Monitore sua saúde 24/7 com tecnologia avançada de sensores. Detecção de arritmias, medição de glicose e muito mais.",
    features: [
      "Monitoramento cardíaco contínuo",
      "Medição de glicose sem agulhas",
      "Detecção de stress e sono",
      "GPS integrado",
      "Resistente à água IPX8"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Bateria": "7 dias",
      "Sensores": "Cardíaco, SpO2, Glicose",
      "Conectividade": "Bluetooth 5.0, Wi-Fi",
      "Resistência": "IPX8"
    },
    stock: 23,
    rating: 4.7,
    reviews: 89,
    featured: true
  },
  {
    id: 3,
    name: "Fones de Ouvido com Tradução IA",
    category: "Audio",
    price: 199.99,
    originalPrice: 249.99,
    image: "/src/assets/images/products/earbuds-1.jpg",
    images: [
      "/src/assets/images/products/earbuds-1.jpg",
      "/src/assets/images/products/earbuds-2.jpg"
    ],
    description: "Quebre barreiras linguísticas com tradução em tempo real em mais de 150 idiomas. Perfeito para viagens e negócios internacionais.",
    features: [
      "Tradução em 150+ idiomas",
      "Latência ultra-baixa (0.5s)",
      "Cancelamento de ruído ativo",
      "Bateria de 24 horas",
      "Resistente ao suor"
    ],
    specifications: {
      "Idiomas": "150+",
      "Latência": "0.5 segundos",
      "Bateria": "6h + 18h no estojo",
      "Conectividade": "Bluetooth 5.4",
      "Resistência": "IPX5"
    },
    stock: 31,
    rating: 4.6,
    reviews: 156,
    featured: true
  },
  {
    id: 4,
    name: "Power Bank Solar 25000mAh",
    category: "Energia",
    price: 89.99,
    originalPrice: 119.99,
    image: "/src/assets/images/products/powerbank-1.jpg",
    images: [
      "/src/assets/images/products/powerbank-1.jpg",
      "/src/assets/images/products/powerbank-2.jpg"
    ],
    description: "Energia sustentável onde quer que vá. Carregamento solar eficiente e múltiplas portas para todos os seus dispositivos.",
    features: [
      "Capacidade de 25000mAh",
      "Painel solar de alta eficiência",
      "4 portas USB + USB-C",
      "Carregamento rápido 22.5W",
      "À prova d'água IP65"
    ],
    specifications: {
      "Capacidade": "25000mAh",
      "Painel Solar": "5W",
      "Portas": "4x USB-A, 1x USB-C",
      "Carregamento": "22.5W",
      "Resistência": "IP65"
    },
    stock: 18,
    rating: 4.5,
    reviews: 73,
    featured: false
  },
  {
    id: 5,
    name: "Drone de Segurança Inteligente",
    category: "Segurança",
    price: 499.99,
    originalPrice: 599.99,
    image: "/src/assets/images/products/drone-1.jpg",
    images: [
      "/src/assets/images/products/drone-1.jpg"
    ],
    description: "Vigilância autônoma com inteligência artificial. Patrulhamento automático e detecção de intrusos em tempo real.",
    features: [
      "Voo autônomo programável",
      "Câmera 4K com visão noturna",
      "Detecção de movimento IA",
      "Streaming ao vivo",
      "Base de carregamento automático"
    ],
    specifications: {
      "Câmera": "4K HDR",
      "Autonomia": "30 minutos",
      "Alcance": "1km",
      "Conectividade": "Wi-Fi 6",
      "Armazenamento": "64GB interno"
    },
    stock: 8,
    rating: 4.9,
    reviews: 34,
    featured: true
  },
  {
    id: 6,
    name: "Carregador Wireless Magnético",
    category: "Acessórios",
    price: 49.99,
    originalPrice: 69.99,
    image: "/src/assets/images/products/ar-glasses-1.jpg", // Placeholder
    images: [
      "/src/assets/images/products/ar-glasses-1.jpg"
    ],
    description: "Carregamento sem fios ultra-rápido com alinhamento magnético perfeito. Compatível com todos os dispositivos Qi.",
    features: [
      "Carregamento 15W",
      "Alinhamento magnético",
      "Compatível com MagSafe",
      "Design ultra-fino",
      "Proteção contra superaquecimento"
    ],
    specifications: {
      "Potência": "15W",
      "Compatibilidade": "Qi, MagSafe",
      "Espessura": "6mm",
      "Material": "Alumínio premium",
      "Certificação": "Qi, CE, FCC"
    },
    stock: 45,
    rating: 4.4,
    reviews: 92,
    featured: false
  },
  {
    id: 7,
    name: "Hub USB-C Multifuncional",
    category: "Conectividade",
    price: 79.99,
    originalPrice: 99.99,
    image: "/src/assets/images/products/smartwatch-1.jpg", // Placeholder
    images: [
      "/src/assets/images/products/smartwatch-1.jpg"
    ],
    description: "Expanda as possibilidades do seu laptop com 12 portas em um design compacto. Suporte para 4K duplo e carregamento rápido.",
    features: [
      "12 portas em 1",
      "Suporte 4K duplo",
      "Carregamento PD 100W",
      "Ethernet Gigabit",
      "Leitor de cartão SD/microSD"
    ],
    specifications: {
      "Portas": "12 (HDMI, USB, USB-C, SD)",
      "Resolução": "4K@60Hz duplo",
      "Carregamento": "100W PD",
      "Ethernet": "1Gbps",
      "Compatibilidade": "Windows, Mac, Linux"
    },
    stock: 27,
    rating: 4.6,
    reviews: 68,
    featured: false
  },
  {
    id: 8,
    name: "Câmera de Segurança WiFi Solar",
    category: "Segurança",
    price: 159.99,
    originalPrice: 199.99,
    image: "/src/assets/images/products/earbuds-1.jpg", // Placeholder
    images: [
      "/src/assets/images/products/earbuds-1.jpg"
    ],
    description: "Vigilância 24/7 sem fios nem cabos. Alimentação solar e armazenamento em nuvem para máxima conveniência.",
    features: [
      "Alimentação solar",
      "Gravação 1080p",
      "Visão noturna colorida",
      "Detecção de movimento PIR",
      "Armazenamento em nuvem"
    ],
    specifications: {
      "Resolução": "1080p Full HD",
      "Painel Solar": "3W",
      "Bateria": "10000mAh",
      "Conectividade": "Wi-Fi 2.4GHz",
      "Armazenamento": "Cloud + microSD"
    },
    stock: 12,
    rating: 4.3,
    reviews: 41,
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'Todos os Produtos', count: products.length },
  { id: 'ar-vr', name: 'AR/VR', count: products.filter(p => p.category === 'AR/VR').length },
  { id: 'wearables', name: 'Wearables', count: products.filter(p => p.category === 'Wearables').length },
  { id: 'audio', name: 'Audio', count: products.filter(p => p.category === 'Audio').length },
  { id: 'energia', name: 'Energia', count: products.filter(p => p.category === 'Energia').length },
  { id: 'seguranca', name: 'Segurança', count: products.filter(p => p.category === 'Segurança').length },
  { id: 'acessorios', name: 'Acessórios', count: products.filter(p => p.category === 'Acessórios').length },
  { id: 'conectividade', name: 'Conectividade', count: products.filter(p => p.category === 'Conectividade').length }
];

export const featuredProducts = products.filter(product => product.featured);

