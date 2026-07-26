import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS_DATABASE, getFallbackProductImage } from '../data/productsData';

export const SearchScreen = () => {
  const { setActiveTab, openProduct, addToCart, householdData, ordersHistory } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const popularChips = (householdData.searchChips || ['Pet Care', 'Baby Care', 'Cosmetics', 'Milk', 'Atta', 'Earbuds']);

  // Dynamic cross-category discovery suggestions based on order history
  const getOrderHistorySuggestions = () => {
    if (ordersHistory.length === 0) {
      return [
        { label: '✨ Try Captain Zack Anti-Tick Shampoo', query: 'Shampoo' },
        { label: '✨ Try Dark Fantasy Choco Fills', query: 'Dark Fantasy' },
        { label: '✨ Try Noise Wireless Earbuds', query: 'Earbuds' },
        { label: '✨ Try Hass Organic Avocados', query: 'Avocado' }
      ];
    }

    const pastItems = ordersHistory.flatMap(o => o.items);
    const catKeys = pastItems.map(i => i.categoryKey || '');

    const suggestions = [];
    if (catKeys.some(k => k.includes('pet'))) {
      suggestions.push({ label: '✨ Try Pet Odor Deodorizer Spray', query: 'Spray' });
      suggestions.push({ label: '✨ Try Rubber Chew Ball Toy', query: 'Chew' });
    }
    if (catKeys.some(k => k.includes('dairy') || k.includes('staples'))) {
      suggestions.push({ label: '✨ Try Organic Cold Pressed Ghee', query: 'Ghee' });
      suggestions.push({ label: '✨ Try Dark Fantasy Choco Fills', query: 'Dark Fantasy' });
    }
    if (catKeys.some(k => k.includes('electronics'))) {
      suggestions.push({ label: '✨ Try Fast 20W Charger Adaptor', query: 'Charger' });
      suggestions.push({ label: '✨ Try Ambrane 10000mAh Power Bank', query: 'Power Bank' });
    }

    // Default cross-category suggestions if needed
    if (suggestions.length < 4) {
      suggestions.push({ label: '✨ Try Captain Zack Pet Shampoo', query: 'Pet Shampoo' });
      suggestions.push({ label: '✨ Try Dolo 650mg Relief Tablets', query: 'Dolo' });
      suggestions.push({ label: '✨ Try Noise Wireless Earbuds', query: 'Earbuds' });
      suggestions.push({ label: '✨ Try Organic California Almonds', query: 'Almonds' });
    }

    return suggestions.slice(0, 4);
  };

  const historySuggestions = getOrderHistorySuggestions();

  const handleChipClick = (chipQuery) => {
    setSearchTerm(chipQuery);
  };

  // Filter matching products dynamically
  const matchingProducts = searchTerm.trim() === '' 
    ? [] 
    : PRODUCTS_DATABASE.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  // Discovery products worth trying when user hasn't searched anything yet
  const discoveryProducts = PRODUCTS_DATABASE.slice(0, 6);

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      {/* Header Search TopBar */}
      <header className="bg-[#F8CB46] sticky top-0 z-40 px-4 py-3 flex items-center gap-3 shadow-sm">
        <button 
          onClick={() => setActiveTab('home')}
          className="p-1 rounded-full hover:bg-black/10 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[24px] text-[#1F1B12]">arrow_back</span>
        </button>

        <div className="flex-1 relative flex items-center bg-white rounded-full px-3.5 py-2 shadow-xs border border-slate-200">
          <span className="material-symbols-outlined text-[#9E988D] text-[18px] mr-2">search</span>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for atta, milk, pet food, earbuds..." 
            className="w-full bg-transparent border-none focus:outline-none text-xs font-medium text-[#1F1B12] placeholder:text-slate-400"
            autoFocus
          />
          {searchTerm ? (
            <button onClick={() => setSearchTerm('')}>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">close</span>
            </button>
          ) : (
            <span className="material-symbols-outlined text-slate-500 text-[18px]">mic</span>
          )}
        </div>
      </header>

      <main className="px-4 py-4 space-y-5">
        {/* Search Results Mode */}
        {searchTerm.trim() !== '' ? (
          <section className="space-y-3">
            <h2 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
              Search Results ({matchingProducts.length})
            </h2>

            {matchingProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl text-center text-slate-400 shadow-card">
                <span className="material-symbols-outlined text-[36px] block mb-1">search_off</span>
                <p className="text-xs font-bold text-[#1F1B12]">No products found matching "{searchTerm}"</p>
                <p className="text-[11px] mt-1">Try searching for Milk, Atta, Pedigree, or Earbuds.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {matchingProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => openProduct(p)}
                    className="bg-[#E7F1EF] rounded-2xl p-3 flex flex-col justify-between border border-slate-100 shadow-card relative group cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <div className="w-full aspect-square bg-white rounded-xl overflow-hidden p-2 flex items-center justify-center mb-2">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        onError={(e) => { e.target.src = getFallbackProductImage(p.name, p.categoryKey); }}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-extrabold text-[#1F1B12] line-clamp-2 leading-snug min-h-[32px]">
                        {p.name}
                      </h3>
                      <p className="text-[11px] text-[#666158] font-medium mb-2">{p.weight}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-200/60">
                      <span className="text-sm font-extrabold text-[#1F1B12]">₹{p.price}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                        className="bg-white border-2 border-[#0C831F] text-[#0C831F] hover:bg-[#0C831F] hover:text-white font-extrabold text-xs py-1 px-3 rounded-lg active:scale-95 transition-all shadow-xs"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : (
          /* Default Discovery Mode based on Household Personalization & Order Context */
          <>
            {/* New Discovery Suggestions Based on Order History (No "Reorder" text!) */}
            <section className="bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 space-y-2">
              <div className="flex items-center gap-1.5 text-[#0C831F]">
                <span className="material-symbols-outlined text-[18px]">history</span>
                <span className="text-xs font-extrabold uppercase tracking-wider">Based on Your Order History</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {historySuggestions.map((item, idx) => (
                  <span 
                    key={idx} 
                    onClick={() => handleChipClick(item.query)}
                    className="bg-[#E7F1EF] text-[#0C831F] text-[11px] font-extrabold px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#0C831F] hover:text-white transition-colors shadow-xs"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </section>

            {/* Dynamic AI Recommended Search Chips per Household Context */}
            <section className="space-y-2">
              <h2 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Trending for {householdData.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {popularChips.map((chip, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleChipClick(chip)}
                    className="bg-white hover:bg-[#E7F1EF] hover:text-[#0C831F] text-[#1F1B12] border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs active:scale-95 transition-all flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">auto_awesome</span>
                    <span>{chip}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Products Worth Trying Section (AI Discovery) */}
            <section className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h2 className="text-sm font-extrabold text-[#1F1B12] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#0C831F] text-[18px]">verified</span>
                  <span>Products Worth Trying</span>
                </h2>
                <span className="text-[10px] font-extrabold bg-[#0C831F] text-white px-2 py-0.5 rounded-full uppercase">
                  AI Discovery
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {discoveryProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => openProduct(p)}
                    className="bg-[#E7F1EF] rounded-2xl p-3 flex flex-col justify-between border border-slate-100 shadow-card relative group cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <span className="absolute top-2 left-2 bg-[#F8CB46] text-[#1F1B12] text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-xs z-10">
                      {p.discount || 'TOP RATED'}
                    </span>

                    <div className="w-full aspect-square bg-white rounded-xl overflow-hidden p-2 flex items-center justify-center mb-2">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        onError={(e) => { e.target.src = getFallbackProductImage(p.name, p.categoryKey); }}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-extrabold text-[#1F1B12] line-clamp-2 leading-snug min-h-[32px]">
                        {p.name}
                      </h3>
                      <p className="text-[11px] text-[#666158] font-medium mb-2">{p.weight}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-200/60">
                      <span className="text-sm font-extrabold text-[#1F1B12]">₹{p.price}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                        className="bg-white border-2 border-[#0C831F] text-[#0C831F] hover:bg-[#0C831F] hover:text-white font-extrabold text-xs py-1 px-3 rounded-lg active:scale-95 transition-all shadow-xs"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
