import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { PRODUCTS_DATABASE, getFallbackProductImage } from '../data/productsData';

export const DairyBreadScreen = () => {
  const { 
    addToCart, 
    openProduct,
    dislikedItemIds, 
    handleThumbsUp, 
    handleThumbsDown 
  } = useApp();

  const [activeFilter, setActiveFilter] = useState('All');

  const products = PRODUCTS_DATABASE.filter(p => p.categoryKey === 'dairy-bread');

  const filters = ['All', 'Milk', 'Bread', 'Butter', 'Cheese', 'Curd', 'Eggs'];

  const filteredProducts = products
    .filter(p => activeFilter === 'All' || p.name.toLowerCase().includes(activeFilter.toLowerCase()))
    .filter(p => !dislikedItemIds.includes(p.id));

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      <TopHeader title="Dairy & Bread" showBack={true} />

      {/* Freshness Header Banner */}
      <div className="bg-[#F8CB46] px-4 pb-3 flex items-center justify-between text-[#1F1B12]">
        <div className="flex items-center gap-2">
          <span className="bg-[#0C831F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {filteredProducts.length} Fresh Items
          </span>
          <span className="text-xs font-semibold">Directly from dairy farms</span>
        </div>
      </div>

      <main className="px-3 py-3 space-y-3">
        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95 shrink-0 ${
                activeFilter === filter
                  ? 'bg-[#F8CB46] text-[#1F1B12] shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Uniform 2-Column Product Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {filteredProducts.map(p => (
            <div 
              key={p.id}
              onClick={() => openProduct(p)}
              className="bg-[#E7F1EF] rounded-2xl p-2.5 flex flex-col justify-between border border-slate-200/80 shadow-card relative group cursor-pointer active:scale-[0.98] transition-transform h-[270px]"
            >
              {/* Fixed Image Box */}
              <div className="w-full h-28 bg-white rounded-xl overflow-hidden p-1.5 flex items-center justify-center shrink-0">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  onError={(e) => { e.target.src = getFallbackProductImage(p.name, p.categoryKey); }}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200" 
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between mt-1.5">
                <div>
                  <h3 className="text-xs font-extrabold text-[#1F1B12] line-clamp-2 leading-tight h-8">
                    {p.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium mb-1">{p.weight}</p>

                  {p.freshnessInfo && (
                    <div className="flex items-center gap-1 text-[9px] text-[#0C831F] font-bold bg-white/70 px-1.5 py-0.5 rounded-md border border-white">
                      <span>🗓</span>
                      <span className="line-clamp-1">{p.freshnessInfo.bestBefore}</span>
                    </div>
                  )}
                </div>

                {/* Price & ADD Action */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 mt-1">
                  <span className="text-xs font-extrabold text-[#1F1B12]">₹{p.price}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                    className="bg-white border-2 border-[#0C831F] text-[#0C831F] hover:bg-[#0C831F] hover:text-white font-extrabold text-[11px] py-0.5 px-2.5 rounded-lg active:scale-95 transition-all shadow-xs uppercase"
                  >
                    ADD
                  </button>
                </div>

                {/* Feedback */}
                <div className="flex justify-between items-center pt-1 border-t border-slate-200/40 text-slate-400 text-[10px]">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleThumbsUp(p); }}
                    className="hover:text-[#0C831F] flex items-center gap-0.5 font-semibold active:scale-90"
                  >
                    <span className="material-symbols-outlined text-[13px]">thumb_up</span>
                    <span>Like</span>
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleThumbsDown(p.id, p.name); }}
                    className="hover:text-red-600 flex items-center gap-0.5 font-semibold active:scale-90"
                  >
                    <span className="material-symbols-outlined text-[13px]">thumb_down</span>
                    <span>Fewer</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
