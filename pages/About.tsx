
import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const certifications = t('about.certs.list') as any[];

  return (
    <div className="space-y-24 pb-24">
      {/* Heritage Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={t('about.hero.image')} className="w-full h-full object-cover brightness-50" alt="Farms" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-forest via-deep-forest/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-white">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block border-l-4 border-accent-gold pl-4">
              {t('about.hero.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              {t('about.hero.title')} <span className="text-accent-gold italic font-medium">{t('about.hero.titleAccent')}</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('about.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Wider Vertical Stack with matched style */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Mission Card */}
        <div className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-xl border border-primary/10 flex flex-col items-center text-center group hover:scale-[1.01] transition-transform duration-500">
          <h2 className="text-4xl font-black text-deep-forest mb-8 uppercase tracking-tighter border-b-4 border-primary pb-2">
            {t('about.mission.title')}
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-medium italic max-w-4xl">
            "{t('about.mission.desc')}"
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-xl border border-primary/10 flex flex-col items-center text-center group hover:scale-[1.01] transition-transform duration-500">
          <h2 className="text-4xl font-black text-deep-forest mb-8 uppercase tracking-tighter border-b-4 border-accent-gold pb-2">
            {t('about.vision.title')}
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-medium italic max-w-4xl">
            "{t('about.vision.desc')}"
          </p>
        </div>
      </section>

      {/* Organic Certifications Section - Restored as requested */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-background-light p-12 md:p-20 rounded-[40px] border border-accent-gold/20 flex flex-col items-center gap-10">
          <div className="text-center space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
              <span className="material-symbols-outlined text-lg">verified_user</span>
              {t('about.certs.badge')}
            </div>
            <h2 className="text-4xl font-black text-deep-forest">{t('about.certs.title')}</h2>
            <p className="text-gray-600 font-medium">{t('about.certs.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-accent-gold/10 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h4 className="text-lg font-black text-deep-forest">{cert.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
