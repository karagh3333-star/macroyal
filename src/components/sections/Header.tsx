import { config } from '../../data/config';
import { Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-mac-black border-b border-mac-gold/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {/* Logo Placeholder / Icon */}
          <div className="w-8 h-8 rounded-full border border-mac-gold flex items-center justify-center text-mac-gold font-serif font-bold text-lg">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-mac-ivory font-serif tracking-[0.2em] leading-tight text-lg md:text-xl">
              {config.name}
            </span>
            <span className="text-mac-gold text-[10px] uppercase tracking-[0.4em] leading-none mt-1">
              {config.tagline}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium">
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="text-mac-ivory hover:text-mac-gold transition-colors cursor-pointer">Menü</button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-mac-ivory hover:text-mac-gold transition-colors cursor-pointer">Hakkımızda</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-mac-ivory hover:text-mac-gold transition-colors cursor-pointer">İletişim</button>
        </nav>

        {/* Mobile quick action */}
        <div className="md:hidden flex items-center">
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mac-gold border border-mac-gold px-3 py-1.5 rounded-full hover:bg-mac-gold hover:text-mac-black transition-colors cursor-pointer">
            <Utensils className="w-3.5 h-3.5" />
            <span>Menü</span>
          </button>
        </div>
      </div>
    </header>
  );
}
