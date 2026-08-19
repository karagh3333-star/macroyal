import { MenuItem } from '../../types';
import { X, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-mac-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full sm:max-w-lg bg-[#111] sm:rounded-sm rounded-t-sm border-t sm:border border-mac-gold/10 shadow-2xl pointer-events-auto flex flex-col max-h-[90vh] overflow-hidden"
            >
              {/* Header / Close button */}
              <div className="relative">
                {item.image ? (
                  <div className="w-full h-64 bg-mac-black">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-12 bg-mac-charcoal border-b border-mac-gold/10"></div>
                )}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] backdrop-blur-md text-mac-ivory rounded-sm transition-colors border border-mac-gold/20"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="text-2xl font-serif font-bold text-mac-ivory leading-tight uppercase tracking-wide">
                    {item.name}
                  </h2>
                  <span className="text-xl font-serif font-bold text-mac-gold shrink-0">
                    {item.price.toLocaleString('tr-TR')} {item.currency}
                  </span>
                </div>

                {item.description && (
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                )}

                {/* Dietary Badges */}
                {item.badges && item.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.badges.includes('vegetarian') && (
                      <span className="text-[10px] px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-900/30 rounded-full uppercase tracking-widest font-bold">
                        Vejetaryen
                      </span>
                    )}
                    {item.badges.includes('vegan') && (
                      <span className="text-[10px] px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-900/30 rounded-full uppercase tracking-widest font-bold">
                        Vegan
                      </span>
                    )}
                  </div>
                )}

                {/* Allergens */}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="bg-[#151515] border border-mac-gold/20 rounded-sm p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-mac-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-mac-ivory mb-1">Alerjen Uyarısı</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Bu ürün şu alerjenleri içerir: <span className="text-mac-ivory">{item.allergens.join(', ')}</span>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Footer CTA */}
              <div className="p-4 border-t border-mac-gold/10 bg-[#0F0F0F]">
                 <button onClick={onClose} className="w-full py-3.5 bg-mac-gold text-mac-black font-bold rounded-sm uppercase tracking-widest text-xs transition-colors hover:bg-[#D4B06A]">
                    Geri Dön
                 </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
