
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Wholesale from './pages/Wholesale';
import { Product, CartItem } from './types';
import { LanguageProvider, useLanguage } from './LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCartToast, setShowCartToast] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setShowCartToast(true);
  };

  useEffect(() => {
    if (showCartToast) {
      const timer = setTimeout(() => setShowCartToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showCartToast]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar cartCount={cartCount} />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/wholesale" element={<Wholesale />} />
          </Routes>
        </div>

        <Footer />

        {showCartToast && (
          <div className="fixed bottom-8 right-8 z-[100] bg-deep-forest text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-10 duration-500">
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
            <div className="flex flex-col">
              <span className="font-bold">{t('products.itemAdded')}</span>
              <span className="text-xs text-gray-400">Total: {cartCount} items</span>
            </div>
            <button onClick={() => setShowCartToast(false)} className="ml-4 opacity-50 hover:opacity-100">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        )}
      </div>
    </Router>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
