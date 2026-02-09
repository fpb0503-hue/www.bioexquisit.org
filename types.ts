
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  badge?: string;
  size?: string;
  packaging?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Beverages' | 'Desserts' | 'Breakfast' | 'Healthy Snacks';
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ImpactMetric {
  label: string;
  value: string;
  description: string;
  icon: string;
}
