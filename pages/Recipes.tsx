
import React from 'react';
import { RECIPES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Recipes: React.FC = () => {
  const { t, language } = useLanguage();
  const featured = RECIPES.find(r => r.isFeatured) || RECIPES[0];

  const categories = [
    { key: 'all', label: t('recipes.categories.all') },
    { key: 'Beverages', label: t('recipes.categories.beverages') },
    { key: 'Desserts', label: t('recipes.categories.desserts') },
    { key: 'Healthy Snacks', label: t('recipes.categories.snacks') }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Featured Recipe */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden group">
          <div className="flex-1 aspect-video lg:aspect-auto h-[400px] rounded-3xl overflow-hidden relative">
             <img src={featured.image} alt={language === 'es' ? featured.title_es : featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
               {t('recipes.heroBadge')}
             </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-6xl font-black text-deep-forest tracking-tight">
              {language === 'es' ? featured.title_es : featured.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {language === 'es' ? featured.description_es : featured.description}
            </p>
            <div className="flex gap-4">
               <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                 {t('recipes.ctaView')}
               </button>
               <button className="p-4 border border-primary text-primary rounded-xl hover:bg-primary/5">
                 <span className="material-symbols-outlined">bookmark</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black text-deep-forest">{t('recipes.title')}</h2>
        <div className="hidden md:flex gap-3">
          {categories.map(cat => (
            <button key={cat.key} className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${cat.key === 'all' ? 'bg-primary border-primary text-white' : 'border-gray-200 text-gray-500 hover:border-primary'}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RECIPES.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group">
            <div className="aspect-[4/3] overflow-hidden relative">
               <img src={recipe.image} alt={language === 'es' ? recipe.title_es : recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-primary hover:text-white">
                 <span className="material-symbols-outlined text-lg">favorite</span>
               </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-xs font-bold text-accent-gold uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> 
                  {recipe.time.replace('mins', language === 'es' ? 'min' : 'mins')}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">bar_chart</span> 
                  {language === 'es' ? 
                    (recipe.difficulty === 'Easy' ? 'Fácil' : recipe.difficulty === 'Medium' ? 'Media' : 'Difícil') 
                    : recipe.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-black text-deep-forest leading-tight group-hover:text-primary transition-colors">
                {language === 'es' ? recipe.title_es : recipe.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {language === 'es' ? recipe.description_es : recipe.description}
              </p>
              <button className="w-full py-3 bg-background-light text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                {t('recipes.ctaDetails')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Recipes;
