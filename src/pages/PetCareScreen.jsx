import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { PRODUCTS_DATABASE, getFallbackProductImage } from '../data/productsData';

export const PetCareScreen = () => {
  const { openProduct, addToCart, dislikedItemIds } = useApp();
  const [activeFilter, setActiveFilter] = useState('all');

  const petCareProducts = PRODUCTS_DATABASE.filter(p => p.categoryKey === 'pet-care' || p.categoryKey === 'pet-toys');
  const visibleProducts = petCareProducts.filter(p => !dislikedItemIds.includes(p.id));

  const filteredProducts = activeFilter === 'all' 
    ? visibleProducts 
    : activeFilter === 'dog' 
    ? visibleProducts.filter(p => p.name.toLowerCase().includes('dog') || p.name.toLowerCase().includes('puppy'))
    : visibleProducts.filter(p => p.name.toLowerCase().includes('cat') || p.name.toLowerCase().includes('kitten'));

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      <TopHeader title="Pet Care Essentials" showBack={true} />

      {/* Header Banner */}
      <div className="bg-[#F8CB46] px-4 pb-3 flex flex-col gap-2 text-[#1F1B12]">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F1B12]/70">Discovery Shelf</span>
            <h1 className="text-xl font-extrabold tracking-tight">Pet Care & Toys</h1>
          </div>
          <span className="bg-[#0C831F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
            {filteredProducts.length} Items
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all ${activeFilter === 'all' ? 'bg-[#0C831F] text-white' : 'bg-white/80 text-[#1F1B12]'}`}
          >
            All Pet Products
          </button>
          <button 
            onClick={() => setActiveFilter('dog')}
            className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all ${activeFilter === 'dog' ? 'bg-[#0C831F] text-white' : 'bg-white/80 text-[#1F1B12]'}`}
          >
            🐶 Dog Care
          </button>
          <button 
            onClick={() => setActiveFilter('cat')}
            className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all ${activeFilter === 'cat' ? 'bg-[#0C831F] text-white' : 'bg-white/80 text-[#1F1B12]'}`}
          >
            🐱 Cat Care
          </button>
        </div>
      </div>

      <main className="px-3 py-3">
        {/* Uniform 2-Column Product Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {filteredProducts.map(p => (
            <div 
              key={p.id}
              onClick={() => openProduct(p)}
              className="bg-[#E7F1EF] rounded-2xl p-2.5 flex flex-col justify-between border border-slate-200/80 shadow-card relative group cursor-pointer active:scale-[0.98] transition-transform h-[250px]"
            >
              <span className="absolute top-2 left-2 bg-[#F8CB46] text-[#1F1B12] text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-xs z-10">
                100% Genuine
              </span>

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
                    <span className="font-bold text-[#0C831F]">Verified Pet Care</span>
                    <span className="font-bold text-slate-600">★ {p.rating}</span>
                  </div>

                  <h3 className="text-xs font-extrabold text-[#1F1B12] line-clamp-2 leading-tight h-8">
                    {p.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium">{p.weight}</p>
                </div>

                {/* Price & ADD Action */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 mt-1">
                  <span className="text-xs font-extrabold text-[#1F1B12]">₹{p.price}</span>
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
      </main>
    </div>
  );
};
