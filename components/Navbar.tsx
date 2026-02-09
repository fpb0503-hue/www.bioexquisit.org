
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.recipes'), path: '/recipes' },
    { name: 'Mayoreo', path: '/wholesale' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-accent-gold/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-deep-forest text-2xl font-black tracking-tighter uppercase">BIOEXQUISIT</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-deep-forest/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-background-light rounded-full p-1 border border-accent-gold/20">
            <button 
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${language === 'es' ? 'bg-accent-gold text-white shadow-sm' : 'text-gray-400'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${language === 'en' ? 'bg-accent-gold text-white shadow-sm' : 'text-gray-400'}`}
            >
              EN
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 border-l border-accent-gold/20 pl-4 ml-2">
            <button 
              onClick={() => setShowLogin(true)}
              className="flex items-center gap-1 text-xs font-black text-deep-forest hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">person</span>
              CLIENTES
            </button>
          </div>

          <Link to="/products" className="relative p-2 text-deep-forest hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-accent-gold/20 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${location.pathname === link.path ? 'text-primary' : 'text-deep-forest'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => { setIsOpen(false); setShowLogin(true); }}
            className="bg-primary text-white py-3 rounded-lg font-bold mt-2"
          >
            ACCESO CLIENTE
          </button>
        </div>
      )}

      {/* Login Modal Simulation */}
      {showLogin && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-deep-forest/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full p-10 relative animate-in zoom-in-95 duration-300">
            <button onClick={() => setShowLogin(false)} className="absolute top-6 right-6 material-symbols-outlined text-gray-400 hover:text-deep-forest">close</button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-deep-forest mb-2">Portal de Cliente</h2>
              <p className="text-sm text-gray-500 font-medium">Gestiona tus pedidos y suscripciones BIOEXQUISIT.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Correo electrónico" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:ring-primary focus:bg-white transition-all font-medium" />
              <input type="password" placeholder="Contraseña" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:ring-primary focus:bg-white transition-all font-medium" />
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">Iniciar Sesión</button>
              <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest pt-4">¿No tienes cuenta? <span className="text-primary cursor-pointer">Regístrate</span></p>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
