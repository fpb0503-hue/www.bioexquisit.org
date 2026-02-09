
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-accent-gold/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <h2 className="text-deep-forest text-2xl font-black tracking-tighter uppercase">BIOEXQUISIT</h2>
            </div>
            
            {/* Información de contacto ahora en la primera columna */}
            <ul className="space-y-3 text-sm text-gray-500 font-bold">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span>{t('footer.location1')}, {t('footer.location2')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <a href={`mailto:gestioncomercial@bioexquisit.org`} className="hover:text-primary transition-colors">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                <span>{t('footer.phone')}</span>
              </li>
            </ul>

            <div className="flex gap-4 pt-4">
              {['public', 'share', 'favorite'].map(icon => (
                <button key={icon} className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center text-deep-forest hover:bg-accent-gold hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-deep-forest text-lg font-black mb-8 uppercase tracking-wider">{t('footer.shop')}</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><Link to="/products" className="hover:text-primary transition-colors">Granulated Panela</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Limited Reserve</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-deep-forest text-lg font-black mb-8 uppercase tracking-wider">{t('footer.heritage')}</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Philosophy</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Impact Report</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Process & Purity</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-accent-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-bold tracking-wider uppercase">{t('footer.rights')}</p>
          <div className="flex gap-8 text-xs text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
