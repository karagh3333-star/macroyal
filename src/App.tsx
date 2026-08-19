import { useState, useMemo } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { CategoryNav } from './components/ui/CategoryNav';
import { MenuSearch } from './components/ui/MenuSearch';
import { MenuSection } from './components/ui/MenuSection';
import { ItemDetailModal } from './components/ui/ItemDetailModal';
import { StickyActionBar } from './components/ui/StickyActionBar';
import { menuData } from './data/menu';
import { MenuItem } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Filter items based on search and category
  const filteredCategories = useMemo(() => {
    return menuData.categories.map(category => {
      let items = menuData.items.filter(item => item.categoryId === category.id);
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        items = items.filter(
          item => 
            item.name.toLowerCase().includes(query) || 
            item.description?.toLowerCase().includes(query)
        );
      }
      
      return {
        ...category,
        items
      };
    }).filter(category => category.items.length > 0); // Hide empty categories
  }, [searchQuery]);

  // Determine which categories to render based on active tab
  const categoriesToRender = useMemo(() => {
    if (activeCategory === 'all') {
      return filteredCategories;
    }
    return filteredCategories.filter(c => c.id === activeCategory);
  }, [activeCategory, filteredCategories]);

  return (
    <div className="min-h-screen flex flex-col bg-mac-black font-sans text-mac-ivory selection:bg-mac-gold selection:text-mac-black">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="menu" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MenuSearch onSearch={setSearchQuery} />
          
          <CategoryNav 
            categories={menuData.categories} 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
          
          <div className="min-h-[50vh]">
             {categoriesToRender.length > 0 ? (
                categoriesToRender.map(category => (
                  <MenuSection 
                    key={category.id} 
                    title={category.name} 
                    items={category.items} 
                    onItemClick={setSelectedItem} 
                  />
                ))
             ) : (
                <div className="text-center py-20">
                   <p className="text-mac-muted text-lg">Aradığınız ürünü bulamadık.</p>
                   <p className="text-sm text-mac-muted/70 mt-2">Farklı bir kelime deneyebilirsiniz.</p>
                </div>
             )}
          </div>
        </div>
        
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      <ItemDetailModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
      
      <StickyActionBar />
    </div>
  );
}
