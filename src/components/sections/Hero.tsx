import { config } from '../../data/config';
import { ArrowDown, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background decoration - subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mac-black via-mac-charcoal-dark/30 to-mac-black z-0"></div>
      
      {/* Optional: Add a subtle overlay pattern or placeholder image here in the future */}
      
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        {/* Large Monogram */}
        <div className="w-20 h-20 md:w-28 md:h-28 mb-8 rounded-full border-2 border-mac-gold flex items-center justify-center text-mac-gold font-serif font-bold text-4xl md:text-6xl">
          M
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-mac-ivory tracking-wider uppercase mb-4">
          {config.name}
        </h1>
        
        <p className="text-mac-gold tracking-[0.3em] uppercase text-sm md:text-base font-medium mb-8">
          {config.tagline}
        </p>
        
        <p className="text-mac-muted max-w-lg mb-10 text-sm md:text-base leading-relaxed">
          Lezzet, atmosfer ve iyi vakit için şehrin yeni buluşma noktası.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center px-8 py-3.5 bg-mac-gold text-mac-black font-bold rounded-sm uppercase tracking-widest text-xs transition-all hover:bg-[#D4B06A] cursor-pointer">
            Menüyü İncele
          </button>
          
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-mac-gold text-mac-gold font-bold rounded-sm uppercase tracking-widest text-xs transition-all hover:bg-mac-gold/10 gap-2 cursor-pointer">
            <MapPin className="w-4 h-4" />
            Konumu Gör
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="text-mac-muted hover:text-mac-gold transition-colors p-2 cursor-pointer">
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
