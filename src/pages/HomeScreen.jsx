import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { getFallbackProductImage } from '../data/productsData';

export const HomeScreen = () => {
  const { 
    setActiveTab, 
    openCategory, 
    householdData, 
    unlockedCategories = [] 
  } = useApp();

  // Dynamic Personalization Strip for Household Profile
  const householdSuggestions = householdData.newCategories || [
    { title: 'Pet Care Essentials', key: 'pet-care', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
    { title: 'Baby Care & Diapers', key: 'baby-care', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' }
  ];

  // Master Categories List for Shop by Category
  const mainCategories = [
    { key: 'fresh-veggies', title: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80' },
    { key: 'fresh-fruits', title: 'Fruits', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80' },
    { key: 'dairy-bread', title: 'Dairy & Bread', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80' },
    { key: 'staples', title: 'Atta, Rice & Dal', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { key: 'spices-oils', title: 'Oil & Masala', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80' },
    { key: 'bakery', title: 'Bakery & Biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80' },
    { key: 'snacks', title: 'Chips & Snacks', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' },
    { key: 'beverages', title: 'Drinks & Juices', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80' },
    { key: 'electronics', title: 'Electronics', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
    { key: 'cosmetics', title: 'Cosmetics', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
    { key: 'pharma', title: 'Pharmacy', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { key: 'pet-care', title: 'Pet Care', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      <TopHeader title="blinkit" showBack={false} />

      {/* Main Home Screen Hero Banner */}
      <div className="bg-[#F8CB46] px-4 pb-4 pt-1 rounded-b-3xl shadow-sm space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#1F1B12] uppercase opacity-75">
              Delivery In
            </span>
            <h1 className="text-2xl font-black text-[#1F1B12] leading-none flex items-center gap-1 mt-0.5">
              <span>8 minutes</span>
              <span className="material-symbols-outlined text-[#0C831F] text-[26px]">bolt</span>
            </h1>
          </div>

          <button 
            onClick={() => setActiveTab('simulate-household')}
            className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <span className="text-base">{householdData.icon}</span>
            <div className="text-left">
              <span className="text-[10px] font-extrabold text-[#1F1B12] block leading-tight">
                {householdData.name}
              </span>
            </div>
            <span className="material-symbols-outlined text-[14px] text-slate-400">tune</span>
          </button>
        </div>

        {/* Home Search Bar Trigger */}
        <div 
          onClick={() => setActiveTab('search')}
          className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-2 cursor-pointer border border-slate-100 hover:border-[#0C831F]/30 transition-all"
        >
          <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          <span className="text-xs text-slate-400 font-medium">Search for milk, atta, pet food, earbuds...</span>
          <span className="material-symbols-outlined text-slate-400 text-[18px] ml-auto">mic</span>
        </div>
      </div>

      <main className="px-4 py-4 space-y-5">
        {/* Section 1: "New for your household" (AI Personalization Strip) */}
        <section className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <div>
              <h2 className="text-sm font-extrabold text-[#1F1B12] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#0C831F] text-[18px]">auto_awesome</span>
                <span>New for your household</span>
              </h2>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                AI Suggestions for <span className="font-extrabold text-[#0C831F]">{householdData.name}</span>
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('personalized-categories')}
              className="text-xs font-bold text-[#0C831F] hover:underline flex items-center gap-0.5"
            >
              <span>View All</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          {/* Household Categories Cards Grid (100% Full Name Display) */}
          <div className="grid grid-cols-2 gap-3">
            {householdSuggestions.map((cat, idx) => (
              <div 
                key={idx}
                onClick={() => openCategory(cat.key || 'pet-care')}
                className="bg-[#E7F1EF] p-3 rounded-2xl border border-[#0C831F]/20 hover:border-[#0C831F] transition-all cursor-pointer group shadow-xs flex flex-col justify-between"
              >
                <div className="w-full h-24 bg-white rounded-xl overflow-hidden p-1.5 flex items-center justify-center">
                  <img 
                    src={cat.image} 
                    alt={cat.title || cat.name} 
                    onError={(e) => { e.target.src = getFallbackProductImage(cat.title || cat.name, cat.key); }}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex flex-col gap-1">
                  <h3 className="text-xs font-extrabold text-[#1F1B12] leading-snug">
                    {cat.title || cat.name}
                  </h3>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[10px] font-bold text-slate-500">8-Min Express</span>
                    <button className="text-[#0C831F] font-extrabold text-[11px] hover:underline flex items-center gap-0.5">
                      <span>Explore</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Shop by Category Grid — PROMINENTLY HIGHLIGHTED FOR THE USER */}
        <section id="shop-by-category-grid" className="bg-white p-4 rounded-2xl shadow-card border-2 border-[#0C831F]/30 ring-2 ring-[#F8CB46]/50 space-y-3 relative overflow-hidden">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="bg-[#F8CB46] text-[#1F1B12] text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  DEPARTMENT STORE
                </span>
                <h2 className="text-base font-black text-[#1F1B12]">Shop by Category</h2>
              </div>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">Explore all 25+ grocery, fresh produce & lifestyle departments</p>
            </div>
            <button 
              onClick={() => setActiveTab('categories')}
              className="text-xs font-extrabold text-[#0C831F] hover:underline flex items-center gap-0.5"
            >
              <span>See All</span>
              <span className="material-symbols-outlined text-[14px]">grid_view</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-1">
            {mainCategories.map(cat => (
              <div 
                key={cat.key}
                onClick={() => openCategory(cat.key)}
                className="flex flex-col items-center gap-1.5 cursor-pointer group active:scale-95 transition-transform"
              >
                <div className="w-full aspect-square bg-[#E7F1EF] rounded-xl overflow-hidden p-2 flex items-center justify-center border border-slate-200 group-hover:border-[#0C831F] group-hover:shadow-xs transition-all">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    onError={(e) => { e.target.src = getFallbackProductImage(cat.title, cat.key); }}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>
                <span className="text-[11px] font-extrabold text-[#1F1B12] text-center leading-tight">
                  {cat.title}
                </span>
              </div>
            ))}
          </div>

          {/* Prominent Highlighted Button */}
          <button 
            onClick={() => setActiveTab('categories')}
            className="w-full py-3 bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-black text-xs rounded-xl active:scale-95 transition-all text-center mt-2 uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">grid_view</span>
            <span>Browse All 25 Store Categories &rarr;</span>
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
