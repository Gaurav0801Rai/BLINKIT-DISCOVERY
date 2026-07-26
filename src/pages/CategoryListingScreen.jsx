import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { PRODUCTS_DATABASE, getFallbackProductImage } from '../data/productsData';

export const CategoryListingScreen = () => {
  const { 
    selectedCategoryKey, 
    openProduct,
    addToCart, 
    dislikedItemIds = []
  } = useApp();

  // STRICT 1:1 CATEGORY TAG MATCHING (Zero Grocery / Staples Leakage!)
  const categoryProducts = PRODUCTS_DATABASE.filter(p => p.categoryKey === selectedCategoryKey);

  const visibleProducts = categoryProducts.filter(p => !dislikedItemIds.includes(p.id));
  const categoryName = visibleProducts[0]?.categoryName || selectedCategoryKey.replace('-', ' ').toUpperCase();

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      <TopHeader title={categoryName} showBack={true} />

      {/* Category Header Banner */}
      <div className="bg-[#F8CB46] px-4 pb-3 flex items-center justify-between text-[#1F1B12]">
        <div className="flex items-center gap-2">
          <span className="bg-[#0C831F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {visibleProducts.length} Items Available
          </span>
          <span className="text-xs font-semibold">100% Genuine · Fast 8-Min Delivery</span>
        </div>
      </div>

      <main className="px-3 py-3 space-y-3">
        {visibleProducts.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center space-y-2 shadow-card border border-slate-100 mt-4">
            <span className="material-symbols-outlined text-[42px] text-slate-300">inventory_2</span>
            <h3 className="text-sm font-extrabold text-[#1F1B12]">Category Updating</h3>
            <p className="text-xs text-slate-500">Fresh inventory for {categoryName} is being stocked for 8-min delivery.</p>
          </div>
        ) : (
          /* Uniform 2-Column Product Grid */
          <div className="grid grid-cols-2 gap-2.5">
            {visibleProducts.map(p => (
              <div 
                key={p.id}
                onClick={() => openProduct(p)}
                className="bg-[#E7F1EF] rounded-2xl p-2.5 flex flex-col justify-between border border-slate-200/80 shadow-card relative group cursor-pointer active:scale-[0.98] transition-transform h-[250px]"
              >
                {p.discount && (
                  <span className="absolute top-2 left-2 bg-[#F8CB46] text-[#1F1B12] text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-xs z-10">
                    {p.discount}
                  </span>
                )}

                {/* Uniform Fixed-Height Image Box */}
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
                    <div className="flex items-center justify-between text-[10px] mb-0.5">
                      <span className="font-bold text-[#0C831F] flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        Genuine
                      </span>
                      <span className="font-bold text-slate-600 flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[11px] text-[#F8CB46]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        {p.rating}
                      </span>
                    </div>

                    <h3 className="text-xs font-extrabold text-[#1F1B12] line-clamp-2 leading-tight h-8">
                      {p.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">{p.weight}</p>
                  </div>

                  {/* Price & ADD Action */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 mt-1">
                    <div>
                      <span className="text-xs font-extrabold text-[#1F1B12]">₹{p.price}</span>
                      {p.originalPrice && (
                        <span className="text-[10px] text-slate-400 line-through ml-1">₹{p.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                      className="bg-white border-2 border-[#0C831F] text-[#0C831F] hover:bg-[#0C831F] hover:text-white font-extrabold text-[11px] py-1 px-3 rounded-lg active:scale-95 transition-all shadow-xs uppercase"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
