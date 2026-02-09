
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Wholesale: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/ware/1920/600" className="w-full h-full object-cover" alt="Warehouse" />
          <div className="absolute inset-0 bg-deep-forest/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-white">
          <div className="max-w-2xl">
            <span className="text-accent-gold font-extrabold tracking-widest text-xs uppercase bg-accent-gold/20 px-3 py-1 rounded mb-4 inline-block">
              {t('wholesale.hero.badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              {t('wholesale.hero.title')} <br/><span className="text-primary italic">BIOEXQUISIT.</span>
            </h1>
            <p className="text-gray-200 text-xl font-medium">
              {t('wholesale.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-black mb-2">{t('wholesale.form.title')}</h2>
            <p className="text-gray-500 mb-10">{t('wholesale.form.desc')}</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-forest">{t('wholesale.form.company')}</label>
                  <input className="w-full p-4 bg-gray-50 rounded-xl focus:ring-primary border-transparent" placeholder="e.g. Artisanal Bakery Co." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-forest">{t('wholesale.form.contact')}</label>
                  <input className="w-full p-4 bg-gray-50 rounded-xl focus:ring-primary border-transparent" placeholder="Full Name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-forest">{t('wholesale.form.type')}</label>
                  <select className="w-full p-4 bg-gray-50 rounded-xl focus:ring-primary border-transparent">
                    <option>Select Category</option>
                    <option>Retailer</option>
                    <option>Food Manufacturer</option>
                    <option>Cafe / Restaurant</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-forest">{t('wholesale.form.volume')}</label>
                  <select className="w-full p-4 bg-gray-50 rounded-xl focus:ring-primary border-transparent">
                    <option>Select Volume</option>
                    <option>50kg - 250kg</option>
                    <option>250kg - 1,000kg</option>
                    <option>Bulk Container</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-forest">{t('wholesale.form.message')}</label>
                <textarea rows={4} className="w-full p-4 bg-gray-50 rounded-xl focus:ring-primary border-transparent" placeholder="..."></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-xl font-black text-lg hover:bg-deep-forest transition-all shadow-xl">
                {t('wholesale.form.button')}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <h3 className="text-2xl font-black mb-8 border-b border-accent-gold/20 pb-4">{t('wholesale.benefits.title')}</h3>
          {[
            { title: t('wholesale.benefits.shipping.title'), icon: 'public', desc: t('wholesale.benefits.shipping.desc') },
            { title: t('wholesale.benefits.certs.title'), icon: 'verified', desc: t('wholesale.benefits.certs.desc') },
            { title: t('wholesale.benefits.supply.title'), icon: 'inventory_2', desc: t('wholesale.benefits.supply.desc') },
          ].map((benefit, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
              </div>
              <div>
                <h4 className="text-xl font-extrabold mb-1">{benefit.title}</h4>
                <p className="text-gray-500 font-medium">{benefit.desc}</p>
              </div>
            </div>
          ))}
          <div className="rounded-[2rem] overflow-hidden shadow-xl">
            <img src="https://picsum.photos/seed/log/500/300" className="w-full h-48 object-cover" alt="Logistics" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wholesale;
