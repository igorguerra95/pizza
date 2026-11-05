export type PizzaCategory = 'todas' | 'especiais' | 'tradicionais' | 'doces' | 'bebidas';

export type PizzaSize = 'individual' | 'media' | 'familia';

export interface PizzaSizeOption {
  id: PizzaSize;
  name: string;
  slices: string;
  cm: string;
  priceMultiplier: number;
}

export interface CrustOption {
  id: string;
  name: string;
  extraPrice: number;
}

export interface PizzaItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  price: number; // Preço base (individual/médio)
  image: string;
  category: PizzaCategory;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isVegetarian?: boolean;
  bakingTimeMinutes: number;
  caloriesApprox?: number;
}

export interface CartItem {
  cartItemId: string;
  pizza: PizzaItem;
  size: PizzaSizeOption;
  crust: CrustOption;
  quantity: number;
  notes?: string;
  totalPrice: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  favoritePizza: string;
  date: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  orderType: 'delivery' | 'retirada' | 'reserva';
  neighborhood: string;
  message: string;
  guestsCount?: string;
  preferredTime?: string;
}
