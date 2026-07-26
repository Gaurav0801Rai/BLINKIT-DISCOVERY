import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS_DATABASE, getFallbackProductImage } from '../data/productsData';
import { fetchGrokSearchSuggestions } from '../services/grokService';

export const SearchScreen = () => {
  const { setActiveTab, openProduct, addToCart, householdData, ordersHistory } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const popularChips = (householdData.searchChips || ['Pet Care', 'Baby Care', 'Cosmetics', 'Milk', 'Atta', 'Earbuds']);

  // Dynamic fallback suggestions based on order history
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

    if (suggestions.length < 4) {
      suggestions.push({ label: '✨ Try Captain Zack Pet Shampoo', query: 'Pet Shampoo' });
      suggestions.push({ label: '✨ Try Dolo 650mg Relief Tablets', query: 'Dolo' });
      suggestions.push({ label: '✨ Try Noise Wireless Earbuds', query: 'Earbuds' });
      suggestions.push({ label: '✨ Try Organic California Almonds', query: 'Almonds' });
    }

    return suggestions.slice(0, 4);
  };

  const defaultSuggestions = getOrderHistorySuggestions();
  const [grokChips, setGrokChips] = useState(defaultSuggestions);

  useEffect(() => {
    let isMounted = true;
    async function loadGrokChips() {
      const result = await fetchGrokSearchSuggestions({
        pastOrders: ordersHistory,
        householdData,
        fallbackChips: defaultSuggestions
      });
      if (isMounted && result && result.length > 0) {
        setGrokChips(result);
      }
    }
    loadGrokChips();
    return () => { isMounted = false; };
  }, [householdData.id, ordersHistory.length]);

  const activeChips = grokChips || defaultSuggestions;

  const handleChipClick = (chipQuery) => {
    setSearchTerm(chipQuery);
  };

  // MULTI-WORD TOKENIZED FUZZY SEARCH MATCHING
  const getMatchingProducts = () => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return [];

    // Split search query into distinct word tokens (e.g. "Amul Milk" -> ["amul", "milk"])
    const queryTokens = query.split(/\s+/).filter(Boolean);

    return PRODUCTS_DATABASE.filter(p => {
      const targetText = `${p.name} ${p.brand || ''} ${p.categoryName || ''} ${p.categoryKey || ''}`.toLowerCase();
      // Ensure EVERY word token exists somewhere inside the target product text
      return queryTokens.every(token => targetText.includes(token));
    });
  };

  const matchingProducts = getMatchingProducts();

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
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              Search Results ({matchingProducts.length})
            </h2>

            {matchingProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl text-center space-y-3 shadow-card">
                <span className="material-symbols-outlined text-[48px] text-slate-300">search_off</span>
                <h3 className="text-sm font-extrabold text-[#1F1B12]">
                  No products found matching "{searchTerm}"
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Try searching for Milk, Atta, Pedigree, or Earbuds.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {matchingProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => openProduct(p)}
                    className="bg-white p-3 rounded-2xl shadow-card border border-slate-100 flex flex-col justify-between cursor-pointer group active:scale-95 transition-transform"
                  >
                    <div>
                      <div className="w-full h-28 bg-[#F7F7F5] rounded-xl p-2 flex items-center justify-center overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          onError={(e) => { e.target.src = getFallbackProductImage(p.name, p.categoryKey); }}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" 
                        />
                      </div>

                      <span className="text-[10px] font-extrabold text-[#0C831F] bg-[#E7F1EF] px-2 py-0.5 rounded-full uppercase mt-2 inline-block">
                        {p.categoryName || p.categoryKey}
                      </span>

                      <h4 className="text-xs font-extrabold text-[#1F1B12] mt-1 line-clamp-2 leading-snug">
                        {p.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">{p.weight}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                      <span className="text-xs font-extrabold text-[#1F1B12]">₹{p.price}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(p);
                        }}
                        className="bg-[#0C831F] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-lg active:scale-90 shadow-xs uppercase"
                      >
                        + ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Empty Search Mode: Show Grok Discovery Chips & Popular Queries */
          <div className="space-y-5">
            {/* GROK AI EXPLORE SOMETHING NEW CHIPS */}
            <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-xs font-extrabold text-[#1F1B12] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#0C831F] text-[18px]">auto_awesome</span>
                  <span>Explore Something New</span>
                </h3>
                <span className="text-[9px] font-extrabold text-[#0C831F] bg-[#E7F1EF] px-2 py-0.5 rounded-full">
                  ✨ Grok AI Personalization
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip.query || chip.label.replace('✨ Try ', ''))}
                    className="bg-[#E7F1EF] hover:bg-[#0C831F] text-[#0C831F] hover:text-white font-extrabold text-xs px-3 py-2 rounded-xl transition-all border border-[#0C831F]/30 active:scale-95 shadow-xs flex items-center gap-1"
                  >
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* POPULAR SEARCHES FOR ACTIVE PROFILE */}
            <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-2.5">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Trending in {householdData.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip)}
                    className="bg-[#F7F7F5] hover:bg-slate-200 text-[#1F1B12] font-bold text-xs px-3 py-1.5 rounded-full border border-slate-200 active:scale-95 transition-all"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* QUICK DISCOVERY CAROUSEL */}
            <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
              <h3 className="text-xs font-extrabold text-[#1F1B12]">Recommended for Instant Delivery</h3>
              <div className="grid grid-cols-2 gap-3">
                {discoveryProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => openProduct(p)}
                    className="bg-[#F7F7F5] p-2.5 rounded-xl border border-slate-100 cursor-pointer group hover:border-[#0C831F]/40 transition-all flex flex-col justify-between"
                  >
                    <div className="w-full h-20 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden">
                      <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="mt-2">
                      <h4 className="text-xs font-extrabold text-[#1F1B12] line-clamp-1">{p.name}</h4>
                      <p className="text-[10px] text-slate-400">{p.weight}</p>
                      <div className="flex justify-between items-center mt-1 pt-1 border-t border-slate-200/50">
                        <span className="text-xs font-extrabold text-[#1F1B12]">₹{p.price}</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(p);
                          }}
                          className="text-[#0C831F] font-bold text-[10px]"
                        >
                          + ADD
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
