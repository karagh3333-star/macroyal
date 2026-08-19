import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MenuSearchProps {
  onSearch: (query: string) => void;
}

export function MenuSearch({ onSearch }: MenuSearchProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-mac-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Menüde ara..."
          className="w-full bg-[#151515] border border-mac-gold/20 rounded-full py-3 pl-12 pr-10 text-xs text-mac-ivory focus:outline-none focus:border-mac-gold transition-colors placeholder:text-mac-muted"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 text-mac-muted hover:text-mac-ivory transition-colors p-1"
            aria-label="Aramayı temizle"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
