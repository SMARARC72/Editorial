import { Product, Collection, Review, Store, PosseTier, GiftGuideCategory, GiftGuide } from '../types';

export const products: Product[] = [
  {
    id: 'pj-001',
    name: 'The Classic Western Shirt',
    price: 68,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop'
    ],
    category: 'apparel',
    subcategory: 'shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sage', hex: '#8FA68E' },
      { name: 'Navy', hex: '#1E3A5F' },
      { name: 'Rust', hex: '#B85C38' }
    ],
    description: 'Premium cotton western shirt with pearl snap buttons. Built for little gentlemen who appreciate quality craftsmanship. Features reinforced stitching and a tailored fit that moves with active boys.',
    features: ['100% Premium Cotton', 'Pearl Snap Buttons', 'Reinforced Stitching', 'Machine Washable'],
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 127,
    material: '100% Cotton',
    care: ['Machine wash cold', 'Tumble dry low', 'Iron on low heat'],
    sku: 'PJ-WST-001'
  },
  {
    id: 'pj-002',
    name: 'Rodeo Denim Jacket',
    price: 89,
    image: 'https://images.unsplash.com/photo-1551028919-ac76c9028d1e?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028919-ac76c9028d1e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551028919-ac76c9028d1e?w=600&h=800&fit=crop'
    ],
    category: 'apparel',
    subcategory: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Indigo', hex: '#2B4162' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    description: 'A rugged denim jacket with vintage western styling. Features custom ParkerJoe embroidery on the back and adjustable waist tabs for a perfect fit as they grow.',
    features: ['14oz Selvedge Denim', 'Custom Embroidery', 'Adjustable Waist Tabs', 'Brass Hardware'],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 84,
    material: '14oz Selvedge Denim',
    care: ['Machine wash cold', 'Hang dry recommended'],
    sku: 'PJ-RDJ-002'
  },
  {
    id: 'pj-003',
    name: 'Junior Rancher Boots',
    price: 125,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop'
    ],
    category: 'shoes',
    subcategory: 'boots',
    sizes: ['8', '9', '10', '11', '12', '13', '1', '2', '3'],
    colors: [
      { name: 'Tan', hex: '#C4A77D' },
      { name: 'Brown', hex: '#6B4423' }
    ],
    description: 'Handcrafted leather boots built for adventure. Features cushioned insoles for all-day comfort and durable rubber outsoles for traction on any terrain.',
    features: ['Genuine Leather', 'Cushioned Insole', 'Durable Rubber Outsole', 'Pull-On Style'],
    inStock: true,
    isBestseller: true,
    rating: 4.7,
    reviewCount: 203,
    material: 'Genuine Leather',
    care: ['Clean with damp cloth', 'Condition leather monthly'],
    sku: 'PJ-JRB-003'
  },
  {
    id: 'pj-004',
    name: 'Desert Sunset Tee',
    price: 32,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop'
    ],
    category: 'apparel',
    subcategory: 'tees',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cream', hex: '#F5F1E8' },
      { name: 'Terracotta', hex: '#C17A5F' }
    ],
    description: 'Soft cotton tee featuring our signature desert landscape print. Perfect for casual days or layering under a jacket.',
    features: ['100% Organic Cotton', 'Desert Print', 'Pre-shrunk', 'Tagless Neck'],
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviewCount: 56,
    material: '100% Organic Cotton',
    care: ['Machine wash cold', 'Tumble dry low'],
    sku: 'PJ-DST-004'
  },
  {
    id: 'pj-005',
    name: 'Buckle Back Jeans',
    price: 58,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop'
    ],
    category: 'apparel',
    subcategory: 'pants',
    sizes: ['4', '5', '6', '7', '8', '10', '12', '14', '16'],
    colors: [
      { name: 'Light Wash', hex: '#B8C4CE' },
      { name: 'Dark Wash', hex: '#2B3852' }
    ],
    description: 'Classic western jeans with adjustable buckle back for the perfect fit. Reinforced knees for durability during play.',
    features: ['Adjustable Buckle Back', 'Reinforced Knees', 'Stretch Denim', '5-Pocket Style'],
    inStock: true,
    rating: 4.5,
    reviewCount: 142,
    material: '98% Cotton, 2% Elastane',
    care: ['Machine wash cold', 'Tumble dry low'],
    sku: 'PJ-BBJ-005'
  },
  {
    id: 'pj-006',
    name: 'The Wrangler Hat',
    price: 45,
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=600&fit=crop'
    ],
    category: 'accessories',
    subcategory: 'hats',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Natural', hex: '#D4C4A8' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    description: 'Classic straw cowboy hat with leather band. Provides UPF 50+ sun protection for outdoor adventures.',
    features: ['UPF 50+ Protection', 'Genuine Leather Band', 'Adjustable Chin Strap', 'Breathable Weave'],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 89,
    material: 'Natural Straw',
    care: ['Spot clean only', 'Store in cool dry place'],
    sku: 'PJ-TWH-006'
  },
  {
    id: 'pj-007',
    name: 'Rodeo Belt',
    price: 38,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=400&fit=crop'
    ],
    category: 'accessories',
    subcategory: 'belts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Brown', hex: '#6B4423' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    description: 'Genuine leather belt with decorative buckle. A finishing touch for any western outfit.',
    features: ['Genuine Leather', 'Decorative Buckle', 'Adjustable Fit', 'Classic Design'],
    inStock: true,
    rating: 4.4,
    reviewCount: 67,
    material: 'Genuine Leather',
    care: ['Wipe clean with damp cloth', 'Condition as needed'],
    sku: 'PJ-RBT-007'
  },
  {
    id: 'pj-008',
    name: 'Bandana Set',
    price: 24,
    image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=600&h=600&fit=crop'
    ],
    category: 'accessories',
    subcategory: 'bandanas',
    sizes: ['One Size'],
    colors: [
      { name: 'Red Paisley', hex: '#B85450' },
      { name: 'Navy Paisley', hex: '#2B4162' },
      { name: 'Black Paisley', hex: '#1A1A1A' }
    ],
    description: 'Set of 3 cotton bandanas in classic paisley patterns. Versatile accessory for any outfit.',
    features: ['100% Cotton', 'Set of 3', 'Classic Paisley', 'Multipurpose'],
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 45,
    material: '100% Cotton',
    care: ['Machine wash cold', 'Tumble dry low'],
    sku: 'PJ-BST-008'
  }
];

export const collections: Collection[] = [
  {
    id: 'col-001',
    name: 'Western Heritage',
    description: 'Timeless western styles for the modern young gentleman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    productCount: 24,
    slug: 'western-heritage'
  },
  {
    id: 'col-002',
    name: 'Rodeo Ready',
    description: 'Durable gear built for the arena and beyond',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&h=600&fit=crop',
    productCount: 18,
    slug: 'rodeo-ready'
  },
  {
    id: 'col-003',
    name: 'Desert Explorer',
    description: 'Adventure-ready pieces for young explorers',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    productCount: 15,
    slug: 'desert-explorer'
  },
  {
    id: 'col-004',
    name: 'Dress Collection',
    description: 'Sophisticated styles for special occasions',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop',
    productCount: 12,
    slug: 'dress-collection'
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-001',
    author: 'Sarah M.',
    rating: 5,
    title: 'Perfect fit and quality!',
    content: 'My son loves his western shirt. The quality is amazing and it washes beautifully. Will definitely be ordering more!',
    date: '2024-03-15',
    verified: true,
    helpful: 24
  },
  {
    id: 'rev-002',
    author: 'Michael R.',
    rating: 5,
    title: 'Best boots for kids',
    content: 'These boots are incredibly well-made. My son wears them everywhere and they\'ve held up perfectly. Worth every penny.',
    date: '2024-03-10',
    verified: true,
    helpful: 18
  },
  {
    id: 'rev-003',
    author: 'Jennifer L.',
    rating: 4,
    title: 'Great style, runs slightly small',
    content: 'Love the design and quality but recommend sizing up. Customer service was excellent with the exchange.',
    date: '2024-03-05',
    verified: true,
    helpful: 12
  }
];

export const stores: Store[] = [
  {
    id: 'store-001',
    name: 'ParkerJoe Houston Galleria',
    address: '5085 Westheimer Rd',
    city: 'Houston',
    state: 'TX',
    zip: '77056',
    phone: '(713) 555-0123',
    email: 'houston@parkerjoe.com',
    isFlagship: true,
    hours: {
      mon: '10am - 9pm',
      tue: '10am - 9pm',
      wed: '10am - 9pm',
      thu: '10am - 9pm',
      fri: '10am - 9pm',
      sat: '10am - 9pm',
      sun: '12pm - 6pm'
    },
    coordinates: { lat: 29.7408, lng: -95.4632 },
    features: ['Personal Styling', 'Free Parking', 'Curbside Pickup', ' alteration Services']
  },
  {
    id: 'store-002',
    name: 'ParkerJoe Dallas NorthPark',
    address: '8687 N Central Expy',
    city: 'Dallas',
    state: 'TX',
    zip: '75225',
    phone: '(214) 555-0456',
    email: 'dallas@parkerjoe.com',
    hours: {
      mon: '10am - 9pm',
      tue: '10am - 9pm',
      wed: '10am - 9pm',
      thu: '10am - 9pm',
      fri: '10am - 9pm',
      sat: '10am - 9pm',
      sun: '12pm - 6pm'
    },
    coordinates: { lat: 32.8681, lng: -96.7735 },
    features: ['Personal Styling', 'Valet Parking', 'Gift Wrapping', 'VIP Lounge']
  },
  {
    id: 'store-003',
    name: 'ParkerJoe Austin Domain',
    address: '11410 Century Oaks Terrace',
    city: 'Austin',
    state: 'TX',
    zip: '78758',
    phone: '(512) 555-0789',
    email: 'austin@parkerjoe.com',
    hours: {
      mon: '10am - 9pm',
      tue: '10am - 9pm',
      wed: '10am - 9pm',
      thu: '10am - 9pm',
      fri: '10am - 9pm',
      sat: '10am - 9pm',
      sun: '12pm - 6pm'
    },
    coordinates: { lat: 30.4021, lng: -97.7265 },
    features: ['Outdoor Shopping', 'Live Music Events', 'Pet Friendly', 'Local Artisan Showcase']
  }
];

export const posseTiers: PosseTier[] = [
  {
    name: 'Wrangler',
    points: 0,
    benefits: [
      'Welcome gift on first purchase',
      'Birthday discount (10% off)',
      'Early access to sales',
      'Free shipping on orders $75+'
    ],
    color: '#C4A77D'
  },
  {
    name: 'Rancher',
    points: 500,
    benefits: [
      'All Wrangler benefits',
      '15% off all purchases',
      'Free shipping on all orders',
      'Exclusive member events',
      'Early access to new collections'
    ],
    color: '#B8984E'
  },
  {
    name: 'Marshal',
    points: 1500,
    benefits: [
      'All Rancher benefits',
      '20% off all purchases',
      'Free returns',
      'Personal styling sessions',
      'VIP customer service line',
      'Annual gift'
    ],
    color: '#8B7355'
  }
];

export const giftGuideCategories: GiftGuideCategory[] = [
  {
    id: 'gift-001',
    name: 'First Rodeo',
    description: 'Perfect starter pieces for new fans of western style',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    products: ['pj-004', 'pj-008', 'pj-007']
  },
  {
    id: 'gift-002',
    name: 'Little Gentleman',
    description: 'Sophisticated styles for dress-up occasions',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
    products: ['pj-001', 'pj-005', 'pj-007']
  },
  {
    id: 'gift-003',
    name: 'Adventure Ready',
    description: 'Durable gear for outdoor explorers',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
    products: ['pj-002', 'pj-003', 'pj-006']
  },
  {
    id: 'gift-004',
    name: 'The Complete Look',
    description: 'Head-to-toe outfits curated by our stylists',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&h=400&fit=crop',
    products: ['pj-001', 'pj-005', 'pj-003', 'pj-006', 'pj-007']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'apparel', name: 'Apparel', slug: 'apparel' },
  { id: 'shoes', name: 'Shoes', slug: 'shoes' },
  { id: 'accessories', name: 'Accessories', slug: 'accessories' }
];

export const subcategories = {
  apparel: [
    { id: 'shirts', name: 'Shirts' },
    { id: 'tees', name: 'T-Shirts' },
    { id: 'pants', name: 'Pants & Jeans' },
    { id: 'outerwear', name: 'Outerwear' }
  ],
  shoes: [
    { id: 'boots', name: 'Boots' },
    { id: 'casual', name: 'Casual Shoes' }
  ],
  accessories: [
    { id: 'hats', name: 'Hats' },
    { id: 'belts', name: 'Belts' },
    { id: 'bandanas', name: 'Bandanas' }
  ]
};

export const giftGuides: GiftGuide[] = [
  {
    id: 'guide-001',
    title: 'New Arrivals',
    description: 'The latest additions to our collection, perfect for trendsetters.',
    image: 'https://images.unsplash.com/photo-1551028919-ac76c9028d1e?w=800&h=600&fit=crop',
    category: 'New Arrivals',
    priceRange: [24, 125],
    items: ['The Classic Western Shirt', 'Rodeo Denim Jacket', 'Junior Rancher Boots', 'Desert Sunset Tee']
  },
  {
    id: 'guide-002',
    title: 'By Age: Ages 4-7',
    description: 'Curated selections perfect for younger boys.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=600&fit=crop',
    category: 'By Age',
    priceRange: [24, 89],
    items: ['Bandana Set', 'Desert Sunset Tee', 'Buckle Back Jeans', 'The Wrangler Hat']
  },
  {
    id: 'guide-003',
    title: 'By Age: Ages 8-12',
    description: 'Styles for growing boys who know what they like.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=600&fit=crop',
    category: 'By Age',
    priceRange: [32, 125],
    items: ['The Classic Western Shirt', 'Junior Rancher Boots', 'Rodeo Denim Jacket', 'Rodeo Belt']
  },
  {
    id: 'guide-004',
    title: 'Birthday Gifts',
    description: 'Make their special day unforgettable with these picks.',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&h=600&fit=crop',
    category: 'By Occasion',
    priceRange: [38, 125],
    items: ['Junior Rancher Boots', 'Rodeo Denim Jacket', 'The Wrangler Hat', 'Rodeo Belt']
  },
  {
    id: 'guide-005',
    title: 'Holiday Collection',
    description: 'Festive western styles for the holiday season.',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&h=600&fit=crop',
    category: 'By Occasion',
    priceRange: [24, 125],
    items: ['The Classic Western Shirt', 'Buckle Back Jeans', 'Bandana Set', 'The Wrangler Hat']
  },
  {
    id: 'guide-006',
    title: 'Monogram Collection',
    description: 'Personalized pieces that make thoughtful gifts.',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=600&fit=crop',
    category: 'Personalized',
    priceRange: [45, 125],
    items: ['Junior Rancher Boots', 'The Wrangler Hat', 'Rodeo Belt']
  }
];
