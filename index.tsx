
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- TYPES ---
interface Product {
  id: string;
  name: string;
  name_es?: string;
  price: number;
  description: string;
  description_es?: string;
  image: string;
  category: string;
  badge?: string;
  packaging?: string;
}

interface CartItem extends Product {
  quantity: number;
}

// --- TRANSLATIONS ---
const translations = {
  es: {
    nav: { home: 'Inicio', products: 'Productos', about: 'Nosotros', recipes: 'Recetas', wholesale: 'Mayoreo' },
    home: {
      hero: { badge: 'Calidad Orgánica Artesanal', title: 'Oro Puro,', titleAccent: 'Hecho a Mano.', desc: 'Vive la experiencia BIOEXQUISIT, la panela granulada con los estándares más altos de calidad.', ctaPrimary: 'Descubre la Colección', ctaSecondary: 'Nuestro Origen', social: 'Únete a más de 2,000 chefs conscientes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGLVIbkDi27nqjLzxBrD1mvjjRNF5KVknH2c9fpSqH2SYSqVZ5ViiRd4FC1VG59jB4qb2TbPhUnPjtuFYkdv-cIHYhUr4pCYtYM5rKJDEdm8PYwnjcEBfTu50DyYWwx23mOJ5ragvXFW-ozlkpfjCf90GL5YQKd8JtA1ltpwf_L6ZSGhROAxLCIguUxRQ61vO4_KYMtg8Ry76kOzCvM2gGjkRP1CAodJzXFTryRd5g9CR96FC5lNbXD9oUtLKevn9uwsn1jMNodO8' },
      heritage: { title: 'Proceso Ancestral,', titleAccent: 'Sabor Exquisito.', desc: 'Honramos el antiguo arte de hacer panela sin blanqueadores ni aditivos industriales.', items: ['Caña seleccionada a mano', 'Acero inoxidable', 'Expertos artesanos'], cta: 'Nuestro Método', image: 'https://i.ibb.co/xtjDrFqs/paisaje-ca-a-flor.jpg' },
      tribe: { title: 'Únete a la Tribu BIOEXQUISIT', desc: 'Suscríbete para recibir recetas y acceso prioritario.', placeholder: 'tu@email.com', button: 'Suscribirse' }
    },
    products: { title: 'Nuestra Selección Orgánica', desc: 'Panela premium directa de nuestras fincas andinas.', filterTitle: 'Empaque', filters: { all: 'Todos', paper: 'Bolsa Eco Papel', bulk: 'Sacos de 25 kg' }, origin: { badge: 'Origen Premium', title: 'BIOEXQUISIT Sabor natural, procesos artesanales de calidad.', image: 'https://i.ibb.co/JwBxxmGs/PSX-20260112-213349.png' }, addToCart: 'Agregar al Carrito', itemAdded: 'Agregado' },
    about: { hero: { title: 'Cultivando Excelencia,', titleAccent: 'Naturalmente.', desc: 'Un legado de sostenibilidad y devoción por la tierra.', image: 'https://i.ibb.co/zh69qQSC/paisaje-ca-a-flor.jpg' } },
    footer: { rights: '© 2024 BIOEXQUISIT ORGANICS. ARTESANÍA AUTÉNTICA.', location: 'Ecuador, Cotopaxi-Latacunga' }
  },
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', recipes: 'Recipes', wholesale: 'Wholesale' },
    home: {
      hero: { badge: 'Artisanal Organic Quality', title: 'Pure Gold,', titleAccent: 'Hand-Crafted.', desc: 'Experience BIOEXQUISIT, the granulated panela with the highest quality standards.', ctaPrimary: 'Discover Collection', ctaSecondary: 'Our Origin', social: 'Join 2,000+ conscious chefs', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGLVIbkDi27nqjLzxBrD1mvjjRNF5KVknH2c9fpSqH2SYSqVZ5ViiRd4FC1VG59jB4qb2TbPhUnPjtuFYkdv-cIHYhUr4pCYtYM5rKJDEdm8PYwnjcEBfTu50DyYWwx23mOJ5ragvXFW-ozlkpfjCf90GL5YQKd8JtA1ltpwf_L6ZSGhROAxLCIguUxRQ61vO4_KYMtg8Ry76kOzCvM2gGjkRP1CAodJzXFTryRd5g9CR96FC5lNbXD9oUtLKevn9uwsn1jMNodO8' },
      heritage: { title: 'Heritage Process,', titleAccent: 'Exquisite Taste.', desc: 'We honor the ancient art of panela making without additives.', items: ['Hand-picked cane', 'Stainless steel', 'Master artisans'], cta: 'Our Method', image: 'https://i.ibb.co/xtjDrFqs/paisaje-ca-a-flor.jpg' },
      tribe: { title: 'Join BIOEXQUISIT Tribe', desc: 'Subscribe for recipes and priority access.', placeholder: 'your@email.com', button: 'Subscribe' }
    },
    products: { title: 'Organic Selection', desc: 'Premium panela directly from our Andean farms.', filterTitle: 'Packaging', filters: { all: 'All', paper: 'Eco Paper Bag', bulk: '25kg Sacks' }, origin: { badge: 'Premium Origin', title: 'BIOEXQUISIT Natural flavor, quality artisanal processes.', image: 'https://i.ibb.co/JwBxxmGs/PSX-20260112-213349.png' }, addToCart: 'Add to Cart', itemAdded: 'Added' },
    about: { hero: { title: 'Cultivating Excellence,', titleAccent: 'Naturally.', desc: 'A legacy of sustainability and land devotion.', image: 'https://i.ibb.co/zh69qQSC/paisaje-ca-a-flor.jpg' } },
    footer: { rights: '© 2024 BIOEXQUISIT ORGANICS. AUTHENTIC ARTISANRY.', location: 'Ecuador, Cotopaxi-Latacunga' }
  }
};

// --- DATA ---
const PRODUCTS: Product[] = [
  { id: '1', name: 'Organic Granulated Panela', name_es: 'Panela Orgánica Granulada', price: 2.25, description: '1000g Standard Eco-Bag.', description_es: 'Bolsa Eco de 1000g.', image: 'https://i.ibb.co/3947Ct11/Producto-panela-bioexquisit.jpg', category: 'Standard', badge: 'PANELA GRANULADA', packaging: 'Eco Paper Bag' },
  { id: '2', name: 'Industrial Panela Block', name_es: 'Panela en Bloque Industrial', price: 31.25, description: '25kg Professional Sack.', description_es: 'Saco Profesional de 25kg.', image: 'https://i.ibb.co/BVm6pnFf/Gemini-Generated-Image-4i80eo4i80eo4i80.png', category: 'Bulk', badge: 'BLOQUE', packaging: '25kg Sacks' },
  { id: '3', name: 'Panela Sachets Box', name_es: 'Caja de Sachets de Panela', price: 7.00, description: '100 x 5g Sachets.', description_es: '100 x 5g Sachets.', image: 'https://i.ibb.co/84z825BD/Gemini-Generated-Image-lza8txlza8txlza8.png', category: 'Standard', badge: 'SACHETS', packaging: 'Eco Paper Bag' }
];

// --- CONTEXT ---
const LanguageContext = createContext<any>(null);
const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const t = (path: string) => path.split('.').reduce((obj, key) => obj?.[key], (translations as any)[language]) || path;
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};
const useLanguage = () => useContext(LanguageContext);

// --- COMPONENTS ---
const Navbar = ({ cartCount }: { cartCount: number }) => {
  const { language, setLanguage, t } = useLanguage();
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.recipes'), path: '/recipes' },
    { name: t('nav.wholesale'), path: '/wholesale' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-accent-gold/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter uppercase">BIOEXQUISIT</Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.path} to={l.path} className={`text-sm font-bold ${location.pathname === l.path ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}>{l.name}</Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-full p-1 text-[10px] font-black">
            <button onClick={() => setLanguage('es')} className={`px-2 py-1 rounded-full ${language === 'es' ? 'bg-accent-gold text-white' : ''}`}>ES</button>
            <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded-full ${language === 'en' ? 'bg-accent-gold text-white' : ''}`}>EN</button>
          </div>
          <button onClick={() => setShowLogin(true)} className="hidden lg:flex items-center gap-1 text-xs font-black"><span className="material-symbols-outlined text-lg">person</span> CLIENTES</button>
          <Link to="/products" className="relative p-2"><span className="material-symbols-outlined text-2xl">shopping_cart</span>{cartCount > 0 && <span className="absolute top-0 right-0 bg-accent-orange text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}</Link>
        </div>
      </div>
      {showLogin && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
          <div className="bg-white rounded-[2rem] p-10 max-w-sm w-full relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-6 right-6 material-symbols-outlined">close</button>
            <h2 className="text-2xl font-black mb-4">Portal Cliente</h2>
            <input type="email" placeholder="Email" className="w-full mb-3 p-4 bg-gray-100 rounded-xl" />
            <input type="password" placeholder="Contraseña" className="w-full mb-6 p-4 bg-gray-100 rounded-xl" />
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold">Ingresar</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-black text-xl uppercase">BIOEXQUISIT</span>
        <p className="text-sm text-gray-400 font-bold">{t('footer.rights')}</p>
        <p className="text-xs text-gray-500">{t('footer.location')}</p>
      </div>
    </footer>
  );
};

// --- PAGES ---
const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-24 pb-24">
      <section className="max-w-7xl mx-auto px-6 pt-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent-orange font-bold text-xs uppercase bg-accent-orange/10 px-3 py-1 rounded">{t('home.hero.badge')}</span>
          <h1 className="text-6xl font-black mt-6 leading-tight">{t('home.hero.title')} <br/><span className="text-primary italic">{t('home.hero.titleAccent')}</span></h1>
          <p className="text-gray-600 text-xl mt-6">{t('home.hero.desc')}</p>
          <div className="flex gap-4 mt-8">
            <Link to="/products" className="bg-accent-gold text-white px-8 py-4 rounded-xl font-black">{t('home.hero.ctaPrimary')}</Link>
          </div>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-2xl"><img src={t('home.hero.image')} className="w-full object-cover" /></div>
      </section>
      <section className="bg-deep-forest text-white py-20 px-6 mx-6 rounded-[3rem]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">{t('home.heritage.title')} <span className="text-accent-gold italic">{t('home.heritage.titleAccent')}</span></h2>
          <p className="text-gray-300 text-lg mb-12">{t('home.heritage.desc')}</p>
          <Link to="/about" className="bg-primary px-8 py-4 rounded-xl font-bold">{t('home.heritage.cta')}</Link>
        </div>
      </section>
    </div>
  );
};

const Products = ({ onAddToCart }: { onAddToCart: (p: Product) => void }) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.packaging === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[250px_1fr] gap-12">
      <aside className="space-y-8">
        <div>
          <h3 className="font-bold mb-4 uppercase text-sm tracking-widest">{t('products.filterTitle')}</h3>
          {['All', 'Eco Paper Bag', '25kg Sacks'].map(opt => (
            <label key={opt} className="flex items-center gap-3 mb-2 cursor-pointer">
              <input type="radio" checked={filter === opt} onChange={() => setFilter(opt)} className="text-primary" />
              <span className="text-sm font-medium">{opt === 'All' ? t('products.filters.all') : opt}</span>
            </label>
          ))}
        </div>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden flex items-end p-6" style={{backgroundImage: `url('${t('products.origin.image')}')`, backgroundSize: 'cover'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative">
            <span className="text-[18px] font-black text-accent-orange uppercase block mb-1">{t('products.origin.badge')}</span>
            <p className="text-white text-[10px] font-bold uppercase">{t('products.origin.title')}</p>
          </div>
        </div>
      </aside>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filtered.map(p => (
          <div key={p.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
            <div className="aspect-square p-8 flex items-center justify-center bg-gray-50"><img src={p.image} className="max-h-full" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg">{language === 'es' ? p.name_es : p.name}</h3>
              <p className="text-primary font-black mt-1">${p.price.toFixed(2)}</p>
              <button onClick={() => onAddToCart(p)} className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-bold">{t('products.addToCart')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- APP ROOT ---
const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const handleAddToCart = (p: Product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id);
      return exists ? prev.map(i => i.id === p.id ? {...i, quantity: i.quantity + 1} : i) : [...prev, {...p, quantity: 1}];
    });
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar cartCount={cart.reduce((a, c) => a + c.quantity, 0)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
              <Route path="/about" element={<div className="p-12 text-center text-4xl font-black">Nosotros Page (Placeholder)</div>} />
              <Route path="/recipes" element={<div className="p-12 text-center text-4xl font-black">Recetas Page (Placeholder)</div>} />
              <Route path="/wholesale" element={<div className="p-12 text-center text-4xl font-black">Mayoreo Page (Placeholder)</div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
