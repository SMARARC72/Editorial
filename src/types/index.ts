export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory?: string;
  sizes: string[];
  colors?: { name: string; hex: string }[];
  description: string;
  features?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviewCount?: number;
  material?: string;
  care?: string[];
  sku: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  slug: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  hours: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
  coordinates: { lat: number; lng: number };
  features: string[];
  image?: string;
  isFlagship?: boolean;
}

export interface PosseTier {
  name: string;
  points: number;
  benefits: string[];
  color: string;
}

export interface GiftGuideCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[];
}

export interface GiftGuide {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  priceRange: [number, number];
  items: string[];
}
