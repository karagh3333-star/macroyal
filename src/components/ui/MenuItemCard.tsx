import { MenuItem } from '../../types';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onClick }: MenuItemCardProps) {
  return (
    <button
      onClick={() => onClick(item)}
      className="w-full text-left group bg-mac-charcoal-light border border-mac-gold/5 hover:border-mac-gold/30 rounded-sm p-4 transition-all duration-300 flex flex-col sm:flex-row gap-4"
    >
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-mac-ivory truncate-multiline">
              {item.name}
            </h3>
            <span className="text-mac-gold font-serif shrink-0">
              {item.price.toLocaleString('tr-TR')} {item.currency}
            </span>
          </div>
          
          {item.description && (
            <p className="text-[11px] text-mac-muted leading-tight line-clamp-2 mb-3">
              {item.description}
            </p>
          )}
        </div>
        
        {/* Badges */}
        {(item.popular || item.featured || (item.badges && item.badges.length > 0)) && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {item.popular && (
              <span className="text-[9px] px-2 py-0.5 bg-mac-gold/10 text-mac-gold border border-mac-gold/20 rounded-full uppercase">
                Popüler
              </span>
            )}
            {item.badges?.includes('vegetarian') && (
              <span className="text-[9px] px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-900/30 rounded-full uppercase">
                Vejetaryen
              </span>
            )}
             {item.badges?.includes('vegan') && (
              <span className="text-[9px] px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-900/30 rounded-full uppercase">
                Vegan
              </span>
            )}
          </div>
        )}
      </div>

      {item.image ? (
        <div className="shrink-0 w-full sm:w-24 h-40 sm:h-24 rounded-sm overflow-hidden bg-mac-border border border-mac-gold/10">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="shrink-0 w-full sm:w-24 h-40 sm:h-24 rounded-sm flex-shrink-0 flex items-center justify-center border border-mac-gold/10 bg-[#1A1A1A]">
          <span className="text-[10px] text-mac-gold/50 uppercase tracking-tighter">Görsel</span>
        </div>
      )}
    </button>
  );
}
