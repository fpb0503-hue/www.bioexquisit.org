
import { Product, Recipe, ImpactMetric } from './types';

export const PRODUCTS: any[] = [
  {
    id: '1',
    name: 'Organic Granulated Panela',
    name_es: 'Panela Orgánica Granulada',
    price: 2.25,
    description: '1000g Standard Eco-Bag. The signature BIOEXQUISIT flavor profile.',
    description_es: 'Bolsa Eco de 1000g. El perfil de sabor característico de BIOEXQUISIT.',
    image: 'https://i.ibb.co/3947Ct11/Producto-panela-bioexquisit.jpg',
    category: 'Standard',
    badge: 'PANELA GRANULADA ORGÁNICA',
    size: '500g',
    packaging: 'Eco Paper Bag'
  },
  {
    id: '2',
    name: 'Industrial Panela Block',
    name_es: 'Panela en Bloque Industrial',
    price: 31.25,
    description: '25kg Professional Sack. High density organic block for industrial processing.',
    description_es: 'Saco Profesional de 25kg. Bloque orgánico de alta densidad para procesamiento industrial.',
    image: 'https://i.ibb.co/BVm6pnFf/Gemini-Generated-Image-4i80eo4i80eo4i80.png',
    category: 'Bulk',
    badge: 'PANELA EN BLOQUE',
    size: '25kg',
    packaging: '25kg Sacks'
  },
  {
    id: '3',
    name: 'Panela Sachets Box',
    name_es: 'Caja de Sachets de Panela',
    price: 7.00,
    description: '100 x 5g Individual Sachets. Perfect for coffee shops and hospitality.',
    description_es: '100 x 5g Sachets Individuales. Perfecto para cafeterías y hostelería.',
    image: 'https://i.ibb.co/84z825BD/Gemini-Generated-Image-lza8txlza8txlza8.png',
    category: 'Standard',
    badge: 'SACHETS DE PANELA',
    size: '500g',
    packaging: 'Eco Paper Bag'
  }
];

export const IMPACT_METRICS: any[] = [
  { label: 'Carbon Footprint', label_es: 'Huella de Carbono', value: '72% Lower', description: 'Minimizing emissions through biomass energy.', description_es: 'Minimizando emisiones mediante energía de biomasa.', icon: 'factory' },
  { label: 'Families Supported', label_es: 'Familias Apoyadas', value: '450+', description: 'Direct fair-trade partnerships.', description_es: 'Alianzas directas de comercio justo.', icon: 'groups' },
  { label: 'Ecological Production', label_es: 'Producción ecológica', value: '100%', description: 'Our production systems conserve soil and biodiversity.', description_es: 'Nuestros sistemas de producción conservan el suelo y la biodiversidad.', icon: 'eco' }
];

export const RECIPES: any[] = [
  {
    id: 'r1',
    title: 'Refreshing Panela Lemonade',
    title_es: 'Limonada de Panela Refrescante',
    description: 'A traditional natural energy booster with freshly squeezed lemons.',
    description_es: 'Un potenciador de energía natural tradicional con limones recién exprimidos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3ZljiSmj4azp6KmOpDrh-aFjwixezkk4OvSb1_6kMTWa97Py9koPsz6kvhL0_AZA3GXdsOFlLwpGvaGbxQlpj3rX2y0tmG-jzQSP7Vgjzaw8n5T_DuhJ5DZUGjKJY5peK8SV0hDPZtj7oXFoto-7qq3JH5v6dWA8g7TmdTrpqjT1Qzj_n6QhyfMEoi-F_o2zDW1VIaUOHqrKCRNpWhQgDWeVqrQF5rxaXzywh00-ng7qiGFejQ9mUXG1KqsS5l-YMwzB22X9lGA',
    time: '10 mins',
    difficulty: 'Easy',
    category: 'Beverages'
  }
];
