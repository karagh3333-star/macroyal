import { MenuCategory } from '../../types';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryNav({ categories, activeCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <div className="sticky top-16 z-30 bg-mac-black border-b border-mac-gold/10 -mx-4 px-4 sm:mx-0 sm:px-0 py-4 mb-8 overflow-x-auto no-scrollbar">
      <ul className="flex gap-3 w-max mx-auto px-4 sm:px-0">
        <li key="all">
          <button
            onClick={() => onSelectCategory('all')}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-xs transition-all ${
              activeCategory === 'all'
                ? 'bg-mac-gold text-mac-black font-bold'
                : 'border border-mac-gold/30 text-mac-ivory font-medium hover:bg-mac-gold/10'
            }`}
          >
            Tüm Menü
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs transition-all ${
                activeCategory === cat.id
                  ? 'bg-mac-gold text-mac-black font-bold'
                  : 'border border-mac-gold/30 text-mac-ivory font-medium hover:bg-mac-gold/10'
              }`}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
