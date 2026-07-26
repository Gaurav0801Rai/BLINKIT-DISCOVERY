import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const PersonalizedCategoriesScreen = () => {
  const { openCategory, householdData, setActiveTab } = useApp();

  // Dynamic Personalized Category Set based on selected Household Profile
  const getPersonalizedCategories = () => {
    switch (householdData.id) {
      case 'pet':
        return [
          { key: 'pet-care', title: 'Pet Food & Kibble', badge: '100% NUTRITIONAL', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80', desc: 'Premium dry kibble, wet food & organic dog treats' },
          { key: 'pet-toys', title: 'Pet Grooming & Toys', badge: 'TOP RATED', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80', desc: 'Chew toys, grooming shampoos & de-shedding brushes' },
          { key: 'wellness', title: 'Pet Health & Supplements', badge: 'VERIFIED', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80', desc: 'Joint supplements, flea sprays & dental chews' },
          { key: 'cleaners', title: 'Pet Odor & Disinfectant Cleaners', badge: 'HYGIENE', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80', desc: 'Pet-safe floor disinfectants & stain odor removers' }
        ];
      case 'pro':
        return [
          { key: 'tea-coffee', title: 'Gourmet Coffee & Brews', badge: 'TRENDING', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80', desc: 'Instant coffees, cold brew concentrates & artisan tea' },
          { key: 'electronics', title: 'Electronics & Audio Gadgets', badge: 'FAST 8MIN', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80', desc: 'TWS Earbuds, fast chargers, power banks & cables' },
          { key: 'snacks', title: 'Ready Meals & Quick Snacks', badge: 'POPULAR', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80', desc: 'Instant noodles, gourmet chips & energy bars' },
          { key: 'beverages', title: 'Chilled Energy Drinks', badge: 'CHILLED', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=80', desc: 'Red Bull, iced coffee & carbonated beverages' }
        ];
      case 'health':
        return [
          { key: 'wellness', title: 'Gym & Protein Supplements', badge: 'ORGANIC', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80', desc: 'Whey protein, BCAAs, plant protein & multivitamin caps' },
          { key: 'beverages', title: '100% Fresh Cold-Pressed Juices', badge: 'NO SUGAR', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80', desc: 'Raw pomegranate, orange & green detox juices' },
          { key: 'fresh-fruits', title: 'Exotic Organic Fruits', badge: 'FARM FRESH', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80', desc: 'Hass avocados, kiwis, blueberries & dragonfruit' },
          { key: 'dry-fruits', title: 'Organic Dry Fruits & Seeds', badge: 'SUPERFOOD', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80', desc: 'Raw California almonds, walnuts, chia & flax seeds' }
        ];
      default: // Family
        return [
          { key: 'baby-care', title: 'Baby Care & Diapers', badge: 'HYPOALLERGENIC', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80', desc: 'Tape diapers, gentle baby wipes & baby wash' },
          { key: 'pet-care', title: 'Pet Care Essentials', badge: 'NEW FOR YOU', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80', desc: 'Family dog food kibbles & grooming shampoos' },
          { key: 'cosmetics', title: 'Cosmetics & Skincare', badge: 'DERMAT TESTED', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80', desc: 'Lipsticks, hydrating cleansers & sunscreens' },
          { key: 'dairy-bread', title: 'Daily Family Milk & Bread', badge: 'ESSENTIAL', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80', desc: 'Fresh toned milk, white bread & farm eggs' }
        ];
    }
  };

  const categories = getPersonalizedCategories();

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full animate-fade-in">
      <TopHeader title="Personalized Categories" showBack={true} />

      {/* Profile Tailored Header Banner */}
      <div className="bg-[#F8CB46] px-4 pb-3 flex flex-col gap-1 text-[#1F1B12]">
        <div className="flex justify-between items-center">
          <span className="bg-[#0C831F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            AI Personalized Shelf
          </span>
          <span className="text-xs font-semibold">Context: {householdData.name}</span>
        </div>
        <h1 className="text-lg font-extrabold tracking-tight">
          Curated for {householdData.name}
        </h1>
        <p className="text-xs text-slate-700 font-medium leading-snug">
          Showing only categories specifically recommended for your active household context.
        </p>
      </div>

      <main className="px-4 py-4 space-y-4 max-w-md mx-auto">
        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => openCategory(cat.key)}
              className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex items-center gap-3 cursor-pointer active:scale-98 transition-transform relative group hover:border-[#0C831F]/40"
            >
              <span className="absolute top-3 right-3 bg-[#E7F1EF] text-[#0C831F] text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                {cat.badge}
              </span>

              <div className="w-16 h-16 bg-[#F7F7F5] rounded-xl overflow-hidden p-1 shrink-0 flex items-center justify-center border border-slate-100">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
              </div>

              <div className="flex-1 pr-12">
                <h3 className="text-xs font-extrabold text-[#1F1B12] leading-tight">
                  {cat.title}
                </h3>
                <p className="text-[10px] text-slate-500 font-medium line-clamp-2 mt-0.5">
                  {cat.desc}
                </p>
                <span className="text-[11px] font-extrabold text-[#0C831F] mt-1.5 block">
                  Browse {cat.title} &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action button to view all master categories */}
        <div className="pt-2">
          <button 
            onClick={() => setActiveTab('categories')}
            className="w-full py-3 bg-[#0C831F] text-white font-extrabold text-xs rounded-2xl shadow-md active:scale-95 transition-all text-center uppercase tracking-wider"
          >
            Shop All 26 Store Categories &rarr;
          </button>
        </div>
      </main>
    </div>
  );
};
