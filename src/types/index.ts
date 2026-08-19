export interface RestaurantConfig {
  name: string;
  tagline: string;
  phone?: string;
  address?: string;
  mapsUrl?: string;
  openingHours?: {
    days: string;
    hours: string;
  }[];
  social?: {
    instagram?: string;
    facebook?: string;
  };
  reservationUrl?: string;
  aboutText: string;
}

export type DietaryBadge = 'vegan' | 'vegetarian' | 'spicy' | 'gluten-free' | 'contains-allergens';

export interface MenuItemVariant {
  id: string;
  name: string;
  priceDelta: number;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  image?: string;
  featured?: boolean;
  popular?: boolean;
  badges?: DietaryBadge[];
  available: boolean;
  variants?: MenuItemVariant[];
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

export interface MenuData {
  categories: MenuCategory[];
  items: MenuItem[];
}
