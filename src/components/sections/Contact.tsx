import { config } from '../../data/config';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-mac-gold/10 bg-mac-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mac-ivory mb-4 uppercase tracking-wider">İletişim</h2>
          <p className="text-mac-muted max-w-2xl mx-auto">Sizi ağırlamaktan mutluluk duyarız.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Info */}
          <div className="space-y-8">
            {config.address && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-mac-charcoal border border-mac-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-mac-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mac-ivory mb-2">Adres</h3>
                  <p className="text-mac-muted leading-relaxed mb-3">{config.address}</p>
                  <a href={config.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-mac-gold hover:text-mac-ivory transition-colors uppercase tracking-wider">
                    Yol Tarifi Al
                  </a>
                </div>
              </div>
            )}

            {config.phone && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-mac-charcoal border border-mac-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-mac-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mac-ivory mb-2">Telefon</h3>
                  <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="text-mac-muted hover:text-mac-ivory transition-colors leading-relaxed">
                    {config.phone}
                  </a>
                </div>
              </div>
            )}

            {config.openingHours && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-mac-charcoal border border-mac-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-mac-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mac-ivory mb-2">Çalışma Saatleri</h3>
                  <ul className="space-y-2 text-mac-muted">
                    {config.openingHours.map((slot, idx) => (
                      <li key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-8 border-b border-mac-border/50 pb-2 last:border-0 last:pb-0">
                        <span>{slot.days}</span>
                        <span className="text-mac-ivory">{slot.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Optional Map Placeholder or Image */}
          <div className="w-full h-[300px] md:h-full min-h-[300px] rounded-sm bg-mac-charcoal border border-mac-gold/10 flex items-center justify-center relative overflow-hidden group">
             {/* Note: Real integration would use a google map iframe here. For now, an elegant placeholder */}
             <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Istanbul&zoom=13&size=600x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8c8c8c&style=feature:all|element:labels.text.stroke|visibility:off&style=feature:landscape|element:all|color:0x111111&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x1f1f1f&style=feature:road|element:labels.text.fill|color:0x8c8c8c&style=feature:transit|element:all|visibility:off&style=feature:water|element:all|color:0x0a0a0a')] bg-cover bg-center opacity-40 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-60"></div>
             <div className="relative z-10 text-center p-6 bg-mac-black/80 backdrop-blur-sm rounded-sm border border-mac-gold/20">
                <MapPin className="w-8 h-8 text-mac-gold mx-auto mb-3" />
                <span className="block text-mac-ivory font-semibold mb-1 uppercase tracking-wider">{config.name}</span>
                <span className="block text-sm text-mac-muted">Haritada Görüntüle</span>
                <a href={config.mapsUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="Haritada görüntüle"></a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
