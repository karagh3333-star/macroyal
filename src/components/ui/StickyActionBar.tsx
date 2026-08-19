import { Utensils, MapPin, Phone, CalendarHeart } from 'lucide-react';
import { config } from '../../data/config';

export function StickyActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A] border-t border-mac-gold/10 md:hidden safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-3">
        <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center justify-center gap-1 w-full text-mac-muted hover:text-mac-gold transition-colors bg-transparent border-0 cursor-pointer">
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">Menü</span>
        </button>
        
        {config.mapsUrl && (
          <a href={config.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 w-full text-mac-muted hover:text-mac-gold transition-colors">
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Yol Tarifi</span>
          </a>
        )}
        
        {config.phone && (
          <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="flex flex-col items-center justify-center gap-1 w-full text-mac-muted hover:text-mac-gold transition-colors">
            <Phone className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Ara</span>
          </a>
        )}
        
        {config.reservationUrl && config.reservationUrl !== '#' && (
          <a href={config.reservationUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 w-full text-mac-muted hover:text-mac-gold transition-colors">
            <CalendarHeart className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Rezerve</span>
          </a>
        )}
      </div>
    </div>
  );
}
