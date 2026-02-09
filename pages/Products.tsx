
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');
  
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.packaging === filter || p.category === filter);

  const getPackagingLabel = (opt: string) => {
    if (opt === 'All') return t('products.filters.all');
    if (opt === 'Eco Paper Bag') return t('products.filters.paper');
    if (opt === '25kg Sacks') return t('products.filters.glass');
    return opt;
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4 uppercase tracking-widest">
            <span>{t('nav.home')}</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-deep-forest font-bold">{t('nav.products')}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-deep-forest mb-2 tracking-tight">{t('products.title')}</h1>
          <p className="text-gray-500 max-w-xl">{t('products.desc')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        <aside className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3">{t('products.filterTitle')}</h3>
            <div className="flex flex-col gap-3">
              {['All', 'Eco Paper Bag', '25kg Sacks'].map(opt => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="packaging" 
                    checked={filter === opt}
                    onChange={() => setFilter(opt)}
                    className="w-5 h-5 text-primary focus:ring-primary border-gray-300" 
                  />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-deep-forest transition-colors">
                    {getPackagingLabel(opt)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">loyalty</span>
              {t('products.bundle.title')}
            </h3>
            <p className="text-xs text-gray-500 mb-4">{t('products.bundle.desc')}</p>
            <button className="text-sm font-bold text-primary underline">{t('products.bundle.cta')}</button>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-cover bg-center flex items-end p-6 shadow-xl border border-white/10 group cursor-pointer" style={{backgroundImage: `url('${t('products.origin.image')}')`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative z-10 w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {/* Confirmado tamaño 18px y color anaranjado oscuro */}
              <span className="text-[18px] font-black text-accent-orange uppercase tracking-[0.25em] block mb-2">{t('products.origin.badge')}</span>
              <h4 className="text-white font-black text-sm leading-tight uppercase tracking-tight">
                {t('products.origin.title')}
              </h4>
            </div>
          </div>
        </aside>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative aspect-square bg-white flex items-center justify-center p-6 sm:p-10 border-b border-gray-50">
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] fill-current">verified</span>
                    {product.badge}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-deep-forest">{language === 'es' ? (product.name_es || product.name) : product.name}</h3>
                  <span className="font-black text-xl text-primary">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{language === 'es' ? (product.description_es || product.description) : product.description}</p>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-deep-forest transition-all"
                >
                  <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                  {t('products.addToCart')}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Products;
