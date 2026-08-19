import { config } from '../../data/config';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-mac-charcoal-dark border-t border-mac-gold/10 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="w-10 h-10 rounded-full border border-mac-gold flex items-center justify-center text-mac-gold font-serif font-bold text-xl mb-4">
              M
            </div>
            <h2 className="text-xl font-serif font-bold text-mac-ivory tracking-wider uppercase mb-1">
              {config.name}
            </h2>
            <p className="text-mac-gold text-xs uppercase tracking-widest mb-6">
              {config.tagline}
            </p>
            {config.social?.instagram && (
              <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-mac-muted hover:text-mac-ivory transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            )}
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-semibold text-mac-ivory uppercase tracking-wider mb-6">Hızlı Menü</h3>
            <ul className="space-y-4 text-mac-muted">
              <li><button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-mac-gold transition-colors cursor-pointer text-left w-full md:w-auto">Menü</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-mac-gold transition-colors cursor-pointer text-left w-full md:w-auto">Hakkımızda</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-mac-gold transition-colors cursor-pointer text-left w-full md:w-auto">İletişim</button></li>
            </ul>
          </div>
          
          {/* Legal / Placeholder */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <h3 className="text-sm font-semibold text-mac-ivory uppercase tracking-wider mb-6">Yasal</h3>
             <ul className="space-y-4 text-mac-muted text-sm">
                <li><a href="#" className="hover:text-mac-ivory transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-mac-ivory transition-colors">KVKK Aydınlatma Metni</a></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-mac-gold/10 text-center text-[10px] uppercase tracking-widest text-mac-muted">
          <p>&copy; {new Date().getFullYear()} {config.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
