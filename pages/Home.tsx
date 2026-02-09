
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { IMPACT_METRICS } from '../constants';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="space-y-5">
            <span className="text-accent-orange font-extrabold tracking-widest text-xs uppercase bg-accent-orange/10 px-3 py-1 rounded inline-block">
              {t('home.hero.badge')}
            </span>
            <h1 className="text-deep-forest text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              {t('home.hero.title')} <br/> <span className="text-primary italic">{t('home.hero.titleAccent')}</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed max-w-lg">
              {t('home.hero.desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="bg-accent-gold text-white px-10 py-4 rounded-lg text-base font-extrabold hover:brightness-110 transition-all shadow-lg text-center">
              {t('home.hero.ctaPrimary')}
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-lg text-base font-extrabold hover:bg-primary hover:text-white transition-all text-center">
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover" src={`https://picsum.photos/seed/${i + 10}/100`} alt="User" />
              ))}
            </div>
            <p className="text-sm text-gray-500 font-semibold italic">{t('home.hero.social')}</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-gold/20 blur-[120px] rounded-full"></div>
          <div className="aspect-square rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img 
              src={t('home.hero.image')} 
              className="w-full h-full object-cover" 
              alt="Panela" 
            />
          </div>
        </div>
      </section>

      {/* Why BIOEXQUISIT */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16 inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-deep-forest mb-4">{t('home.why.title')}</h2>
            <div className="w-24 h-2 bg-accent-gold rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl font-medium">
              {t('home.why.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {IMPACT_METRICS.map((metric, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-background-light border-b-4 border-primary/20 hover:border-primary transition-all hover:shadow-xl group text-left">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-4xl">{metric.icon}</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-4">{language === 'es' ? metric.label_es : metric.label}: {metric.value}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{language === 'es' ? metric.description_es : metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-deep-forest rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
            <span className="material-symbols-outlined text-[400px] text-white">eco</span>
          </div>
          <div className="flex-1 flex flex-col gap-8 relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              {t('home.heritage.title')} <br/><span className="text-accent-gold italic font-medium">{t('home.heritage.titleAccent')}</span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              {t('home.heritage.desc')}
            </p>
            <div className="space-y-6">
              {(t('home.heritage.items') as string[]).map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-accent-gold bg-accent-gold/10 p-1 rounded-full">check</span>
                  <span className="text-gray-200 text-lg font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-bold w-fit mt-6 hover:scale-105 transition-all shadow-xl shadow-primary/20">
              {t('home.heritage.cta')}
            </Link>
          </div>
          {/* Se mejora el contenedor de la imagen para que no corte los filos y tenga un acabado más limpio */}
          <div className="flex-1 w-full h-[500px] relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
            <img 
              src={t('home.heritage.image')} 
              alt="Paisaje Caña" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Tribe CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-accent-gold rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">{t('home.tribe.title')}</h2>
            <p className="max-w-xl text-white/90 text-lg font-medium">{t('home.tribe.desc')}</p>
            <div className="flex flex-col sm:flex-row w-full max-w-[600px] gap-4">
              <input className="flex-1 rounded-xl px-8 py-5 bg-white/20 border-white/30 backdrop-blur-sm focus:ring-white text-white font-bold placeholder:text-white/70" placeholder={t('home.tribe.placeholder')} type="email" />
              <button className="bg-deep-forest text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-black transition-all shadow-2xl">
                {t('home.tribe.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
