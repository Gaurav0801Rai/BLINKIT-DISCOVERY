import React from 'react';
import { useApp, HOUSEHOLDS } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const ProfileScreen = () => {
  const { 
    householdData, 
    currentHouseholdId, 
    switchHousehold, 
    unlockedCategories, 
    openCategory,
    setCoachStep 
  } = useApp();

  const allAvailableDiscoveryCategories = [
    { id: 'pet-care', title: 'Pet Care Essentials', key: 'pet-care', icon: 'pets', desc: 'Pet food, kibble, cat litter & grooming' },
    { id: 'baby-care', title: 'Baby Care & Diapers', key: 'baby-care', icon: 'child_care', desc: 'Diapers, gentle wipes & infant nutrition' },
    { id: 'cosmetics', title: 'Cosmetics & Beauty', key: 'cosmetics', icon: 'face_6', desc: 'Lipsticks, kajal, sunscreens & skincare' },
    { id: 'electronics', title: 'Electronics & Audio', key: 'electronics', icon: 'devices', desc: 'Wireless earbuds, chargers & power banks' },
    { id: 'stationery', title: 'Stationery & Games', key: 'stationery', icon: 'edit_note', desc: 'Notebooks, pens, sketchpads & board games' },
    { id: 'wellness', title: 'Gym & Supplements', key: 'wellness', icon: 'fitness_center', desc: 'Whey protein, green tea, chia seeds & oats' }
  ];

  const unlockedIds = unlockedCategories.map(u => u.id);
  const lockedCategories = allAvailableDiscoveryCategories.filter(c => !unlockedIds.includes(c.id));

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full animate-fade-in">
      <TopHeader title="Discovery Profile" />

      <main className="px-4 py-4 space-y-5 max-w-md mx-auto">
        {/* User Card */}
        <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex items-center gap-3">
          <img 
            src={householdData.avatar} 
            alt={householdData.name} 
            className="w-14 h-14 rounded-full border-2 border-[#0C831F] object-cover shrink-0" 
          />
          <div>
            <span className="text-[10px] font-extrabold text-[#0C831F] uppercase tracking-wider bg-[#E7F1EF] px-2 py-0.5 rounded-full">
              Blinkit Discovery Member
            </span>
            <h1 className="text-base font-extrabold text-[#1F1B12] mt-0.5">{householdData.name}</h1>
            <p className="text-xs text-slate-500 font-medium">{householdData.location}</p>
          </div>
        </div>

        {/* Profile Switcher Quick Bar */}
        <div className="bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 space-y-2">
          <span className="text-xs font-extrabold text-[#1F1B12] block">Switch Household Context</span>
          <div className="grid grid-cols-2 gap-2">
            {Object.values(HOUSEHOLDS).map(h => (
              <button
                key={h.id}
                onClick={() => switchHousehold(h.id)}
                className={`p-2 rounded-xl text-left border text-xs font-bold transition-all ${
                  currentHouseholdId === h.id
                    ? 'bg-[#0C831F] text-white border-[#0C831F]'
                    : 'bg-[#F7F7F5] text-slate-700 border-slate-200 hover:border-[#0C831F]'
                }`}
              >
                <div className="line-clamp-1">{h.name}</div>
                <div className={`text-[10px] ${currentHouseholdId === h.id ? 'text-white/80' : 'text-slate-400'}`}>
                  {h.id === 'family' ? 'Family' : h.id === 'pro' ? 'Single Pro' : h.id === 'health' ? 'Health' : 'Pet Parent'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: UNLOCKED INTERESTS */}
        <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-sm font-extrabold text-[#1F1B12] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0C831F] text-[18px]">verified</span>
              <span>Unlocked Category Interests ({unlockedCategories.length})</span>
            </h2>
          </div>

          <div className="space-y-2">
            {unlockedCategories.map(cat => (
              <div 
                key={cat.id} 
                onClick={() => openCategory(cat.key || cat.id)}
                className="bg-[#E7F1EF] border border-[#0C831F]/30 p-3 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#0C831F]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#0C831F] text-[20px]">check_circle</span>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#1F1B12]">{cat.title}</h3>
                    <p className="text-[10px] text-[#0C831F] font-bold">{cat.date || 'Active Interest'}</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#0C831F]">Shop &rarr;</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: CLICKABLE LOCKED CATEGORIES TO DISCOVER */}
        <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-sm font-extrabold text-[#1F1B12] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#F8CB46] text-[18px]">lock</span>
              <span>Discover More Categories ({lockedCategories.length})</span>
            </h2>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            Tap any category below to explore items & buy to automatically unlock!
          </p>

          <div className="space-y-2">
            {lockedCategories.map(cat => (
              <div 
                key={cat.id}
                onClick={() => openCategory(cat.key)}
                className="bg-[#F7F7F5] border border-slate-200 p-3 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#0C831F] active:scale-[0.98] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0C831F] shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#1F1B12] group-hover:text-[#0C831F] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">{cat.desc}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#0C831F] text-[18px]">
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Guided Tour Reset Button */}
        <button 
          onClick={() => {
            setCoachStep(1);
          }}
          className="w-full py-3 bg-[#E7F1EF] border border-[#0C831F]/40 text-[#0C831F] font-extrabold text-xs rounded-2xl active:scale-95 transition-all text-center uppercase tracking-wider shadow-xs"
        >
          Restart Guided Prototype Tour 🎯
        </button>
      </main>
    </div>
  );
};
