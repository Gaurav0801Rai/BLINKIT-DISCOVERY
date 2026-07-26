import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const OrderPlacedScreen = () => {
  const { setActiveTab, openCategory, unlockedCategories, ordersHistory, householdData } = useApp();

  const latestUnlocked = unlockedCategories[unlockedCategories.length - 1];

  const candidateCategories = [
    { id: 'pet-care', key: 'pet-care', title: 'Pet Care Essentials', subtitle: 'Premium Kibble & Treats for your buddy', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
    { id: 'electronics', key: 'electronics', title: 'Electronics & Audio', subtitle: 'boAt Earbuds, 20W Chargers & Cables', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
    { id: 'cosmetics', key: 'cosmetics', title: 'Cosmetics & Beauty', subtitle: 'Maybelline Lipsticks, Kajal & Skincare', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
    { id: 'baby-care', key: 'baby-care', title: 'Baby Care & Diapers', subtitle: 'Pampers Diapers, Gentle Wipes & Lotion', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
    { id: 'stationery', key: 'stationery', title: 'Stationery & Games', subtitle: 'Classmate Notebooks, Pens & Highlighters', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { id: 'wellness', key: 'wellness', title: 'Gym & Supplements', subtitle: 'Whey Protein, Chia Seeds & Oats', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' }
  ];

  const unlockedIds = unlockedCategories.map(u => u.id || u.key);

  // Pick the next category that user has NOT unlocked yet
  const nextNewCategory = candidateCategories.find(c => !unlockedIds.includes(c.id)) || candidateCategories[0];

  useEffect(() => {
    // Confetti effect on mount
    const createConfetti = () => {
      const container = document.getElementById('confetti-box');
      if (!container) return;
      const colors = ['#0C831F', '#F8CB46', '#E7F1EF', '#1F1B12'];

      for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.style.position = 'absolute';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = '0px';
        p.style.width = '8px';
        p.style.height = '8px';
        p.style.borderRadius = '2px';
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.transform = `rotate(${Math.random() * 360}deg)`;
        p.style.zIndex = '50';
        container.appendChild(p);

        const duration = Math.random() * 2 + 1.5;
        const dx = (Math.random() - 0.5) * 160;

        p.animate([
          { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
          { transform: `translate(${dx}px, 450px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
          duration: duration * 1000,
          easing: 'cubic-bezier(0, .9, .57, 1)',
          fill: 'forwards'
        });

        setTimeout(() => p.remove(), duration * 1000);
      }
    };

    createConfetti();
  }, []);

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full relative overflow-hidden">
      <TopHeader title="Blinkit" />

      {/* Confetti Container */}
      <div id="confetti-box" className="absolute inset-0 pointer-events-none z-30"></div>

      <main className="px-4 py-5 space-y-4 text-center max-w-md mx-auto relative z-10">
        {/* Animated Checkmark */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#E7F1EF] border-2 border-[#0C831F] text-[#0C831F] rounded-full flex items-center justify-center mb-2 shadow-md animate-bounce">
            <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          <h1 className="text-lg font-extrabold text-[#1F1B12] mb-1">
            Order Placed Successfully
          </h1>

          {/* Unlocked Category Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#E7F1EF] text-[#0C831F] border border-[#0C831F]/30 px-3.5 py-1 rounded-full text-xs font-extrabold shadow-xs mb-2">
            <span>{latestUnlocked ? `${latestUnlocked.title || latestUnlocked.id} Unlocked ✓` : 'New Category Unlocked ✓'}</span>
          </div>

          {/* Discovery Message Box */}
          <div className="bg-white p-3 rounded-2xl shadow-card border border-slate-100 w-full text-left">
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Your discovery layer has updated with new <span className="font-extrabold text-[#1F1B12]">{latestUnlocked ? latestUnlocked.title : 'Category'}</span> essentials for <span className="font-extrabold text-[#0C831F]">{householdData.name}</span>.
            </p>
          </div>
        </div>

        {/* Bento Grid Feature: NEXT TRULY NEW CATEGORY DISCOVERY CARD */}
        <div className="bg-[#E7F1EF] rounded-2xl p-4 border border-[#0C831F]/30 relative overflow-hidden flex flex-col justify-between shadow-xs text-left">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-extrabold text-[#0C831F] uppercase tracking-wider block mb-0.5">
                NEXT DISCOVERY CATEGORY
              </span>
              <h3 className="text-sm font-extrabold text-[#1F1B12] leading-snug">
                {nextNewCategory.title}
              </h3>
              <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                {nextNewCategory.subtitle}
              </p>
            </div>
            <div className="w-14 h-14 bg-white rounded-xl p-1 shrink-0 border border-slate-100 shadow-xs">
              <img src={nextNewCategory.image} alt={nextNewCategory.title} className="w-full h-full object-contain" />
            </div>
          </div>

          <button 
            onClick={() => openCategory(nextNewCategory.key)}
            className="mt-3 py-2 bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-extrabold text-xs rounded-xl active:scale-95 transition-all text-center flex items-center justify-center gap-1 shadow-xs uppercase tracking-wide"
          >
            <span>Explore {nextNewCategory.title}</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Navigation Action Buttons */}
        <div className="space-y-2 pt-2">
          <button 
            onClick={() => setActiveTab('orders')}
            className="w-full py-3 bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-extrabold text-xs rounded-xl shadow-md active:scale-98 transition-all uppercase tracking-wider flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            <span>View Order History & Reorder</span>
          </button>

          <button 
            onClick={() => setActiveTab('home')}
            className="w-full py-2.5 bg-white border border-slate-200 text-[#1F1B12] font-extrabold text-xs rounded-xl active:scale-98 transition-all hover:bg-slate-50 uppercase tracking-wider"
          >
            Return to Home
          </button>
        </div>
      </main>
    </div>
  );
};
