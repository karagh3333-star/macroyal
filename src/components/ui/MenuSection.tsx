import { MenuItem } from '../../types';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

export function MenuSection({ title, items, onItemClick }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="mb-12 scroll-mt-28">
      <h2 className="text-2xl font-serif font-bold text-mac-ivory mb-6 pb-2 border-b border-mac-gold/10 flex items-center gap-3">
        {title}
        {title === "Öne Çıkanlar" && (
          <span className="h-px flex-1 bg-gradient-to-r from-mac-gold/50 to-transparent"></span>
        )}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} onClick={onItemClick} />
        ))}
      </div>
    </section>
  );
}
