import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { getFallbackProductImage } from '../data/productsData';

export const HomeScreen = () => {
  const { 
    setActiveTab, 
    openCategory,
    householdData, 
    dislikedItemIds = []
  } = useApp();

  const mainCategories = [
    { key: 'fresh-veggies', title: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80' },
    { key: 'fresh-fruits', title: 'Fruits', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80' },
    { key: 'dairy-bread', title: 'Dairy & Eggs', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80' },
    { key: 'staples', title: 'Atta Rice Dal', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { key: 'pharma', title: 'Pharmacy', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { key: 'pet-care', title: 'Pet Care', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
    { key: 'baby-care', title: 'Baby Care', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
    { key: 'cosmetics', title: 'Cosmetics', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
    { key: 'snacks', title: 'Chips & Snacks', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' },
    { key: 'beverages', title: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80' },
    { key: 'electronics', title: 'Electronics', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
    { key: 'wellness', title: 'Gym & Health', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      <TopHeader title="blinkit" />

      {/* Header Delivery ETA & Search Bar */}
      <div className="bg-[#F8CB46] px-4 pb-3 rounded-b-2xl shadow-sm text-[#1F1B12]">
        <div className="flex justify-between items-center mb-2.5 pt-1">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F1B12]/70">Delivery in</span>
            <h1 className="text-2xl font-extrabold tracking-tight leading-none text-[#1F1B12]">8 minutes ⚡</h1>
          </div>
          <button 
            onClick={() => setActiveTab('simulate-household')}
            className="bg-white/90 hover:bg-white text-[#0C831F] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs border border-white flex items-center gap-1 active:scale-95 transition-all"
            title="Click to change household profile"
          >
            <span>🏡 {householdData.name}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
          </button>
        </div>

        {/* Tapping Search Bar */}
        <div 
          onClick={() => setActiveTab('search')}
          className="flex items-center bg-white rounded-full px-3.5 py-2 shadow-sm border border-slate-200 cursor-pointer active:scale-[0.99] transition-transform"
        >
          <span className="material-symbols-outlined text-[#9E988D] text-[20px]">search</span>
          <input 
            type="text" 
            readOnly 
            placeholder="Search for milk, atta, pet food, earbuds..." 
            className="bg-transparent border-none focus:outline-none w-full text-xs font-medium px-2 text-[#1F1B12] cursor-pointer placeholder:text-slate-400"
          />
          <span className="material-symbols-outlined text-[#666158] text-[20px]">mic</span>
        </div>
      </div>

      <main className="px-4 mt-4 space-y-5">
        {/* Section 1: New for your household strip (Navigates to Personalized Categories) */}
        <section className="bg-white p-3.5 rounded-2xl shadow-card border border-slate-100">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-sm font-extrabold text-[#1F1B12] flex items-center gap-1.5">
                <span>✨ New for your household</span>
              </h2>
              <p className="text-[11px] text-[#666158]">
                AI Suggestions for <span className="font-bold text-[#0C831F]">{householdData.name}</span>
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('personalized-categories')}
              className="text-xs font-extrabold text-[#0C831F] hover:underline flex items-center gap-0.5"
            >
              <span>View All</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {(householdData.newCategories || [])
              .filter(cat => !(dislikedItemIds || []).includes(cat.id))
              .map(cat => (
                <div 
                  key={cat.id} 
                  className="min-w-[135px] bg-[#E7F1EF] p-2.5 rounded-xl relative border border-slate-100 flex flex-col justify-between group shadow-xs"
                >
                  <span className="absolute top-2 left-2 bg-[#0C831F] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-xs z-10">
                    {cat.badge}
                  </span>

                  <div 
                    onClick={() => openCategory(cat.key || 'pet-care')}
                    className="w-full h-20 bg-white rounded-lg overflow-hidden my-1 flex items-center justify-center p-1 cursor-pointer"
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      onError={(e) => { e.target.src = getFallbackProductImage(cat.title, cat.key); }}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                    />
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-bold text-[#1F1B12] line-clamp-1">{cat.title}</span>
                    <button 
                      onClick={() => openCategory(cat.key || 'pet-care')}
                      className="text-[#0C831F] font-bold text-[11px] shrink-0"
                    >
                      Explore &rarr;
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Section 2: Shop by Category Grid (Master Categories) */}
        <section id="shop-by-category-grid" className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h2 className="text-base font-extrabold text-[#1F1B12]">Shop by Category</h2>
            <button 
              onClick={() => setActiveTab('categories')}
              className="text-xs font-bold text-[#0C831F] hover:underline"
            >
              Shop All Categories &rarr;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {mainCategories.map(cat => (
              <div 
                key={cat.key}
                onClick={() => openCategory(cat.key)}
                className="flex flex-col items-center gap-1.5 cursor-pointer group active:scale-95 transition-transform"
              >
                <div className="w-full aspect-square bg-[#E7F1EF] rounded-xl overflow-hidden p-2 flex items-center justify-center border border-slate-100 group-hover:border-[#0C831F]/40">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    onError={(e) => { e.target.src = getFallbackProductImage(cat.title, cat.key); }}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>
                <span className="text-[11px] font-semibold text-[#1F1B12] text-center leading-tight line-clamp-1">
                  {cat.title}
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setActiveTab('categories')}
            className="w-full py-2.5 bg-[#E7F1EF] border border-[#0C831F]/30 text-[#0C831F] font-extrabold text-xs rounded-xl active:scale-95 transition-all text-center mt-2 uppercase tracking-wide shadow-xs"
          >
            Shop All 26 Categories &rarr;
          </button>
        </section>

        {/* Footer */}
        <div className="text-center opacity-60 py-3">
          <p className="text-xs font-bold text-slate-500">India's last minute app ❤️ Blinkit</p>
        </div>
      </main>
    </div>
  );
};
