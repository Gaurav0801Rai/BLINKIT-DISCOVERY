import React from 'react';
import { useApp, HOUSEHOLDS } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const SimulateHouseholdScreen = () => {
  const { currentHouseholdId, switchHousehold, setActiveTab, householdData } = useApp();

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full animate-fade-in">
      <TopHeader title="Simulate Household" showBack={true} />

      <main className="px-4 py-4 space-y-4 max-w-md mx-auto">
        {/* Core Differentiator Banner */}
        <div className="bg-[#F8CB46] p-4 rounded-2xl text-[#1F1B12] shadow-sm space-y-1">
          <div className="flex items-center gap-1.5 font-extrabold text-sm">
            <span className="material-symbols-outlined text-[20px]">psychology</span>
            <span>Core Differentiator: AI Discovery Layer</span>
          </div>
          <p className="text-xs text-[#1F1B12]/80 font-medium">
            Switching your household context dynamically recalculates the <strong>"New for your household"</strong> recommendations across Home, Search, and Checkout!
          </p>
        </div>

        {/* Current Active Context Card */}
        <div className="bg-[#E7F1EF] border-2 border-[#0C831F] p-4 rounded-2xl flex items-center gap-3 shadow-sm">
          <img 
            src={householdData.avatar} 
            alt={householdData.name} 
            className="w-14 h-14 rounded-full border-2 border-white object-cover shrink-0" 
          />
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0C831F]">Active Household Profile</span>
            <h2 className="text-base font-extrabold text-[#1F1B12]">{householdData.name}</h2>
            <p className="text-xs text-slate-600 font-medium">{householdData.description}</p>
          </div>
        </div>

        {/* 4 Selectable Household Profiles */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Select A Profile to Test AI Adaptability
          </h3>

          {Object.values(HOUSEHOLDS).map(h => {
            const isSelected = currentHouseholdId === h.id;

            return (
              <div 
                key={h.id}
                onClick={() => {
                  switchHousehold(h.id);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-card ${
                  isSelected 
                    ? 'bg-white border-2 border-[#0C831F] ring-2 ring-[#0C831F]/20' 
                    : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={h.avatar} 
                    alt={h.name} 
                    className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200" 
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-extrabold text-[#1F1B12]">{h.name}</h4>
                      {isSelected && (
                        <span className="bg-[#0C831F] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{h.location}</p>
                    <p className="text-[11px] text-[#0C831F] font-semibold mt-1">
                      Target Categories: {h.newCategories.map(c => c.title).join(', ')}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className={`material-symbols-outlined text-[24px] ${isSelected ? 'text-[#0C831F]' : 'text-slate-300'}`}>
                    {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={() => setActiveTab('home')}
          className="w-full py-3 bg-[#0C831F] text-white font-extrabold text-xs rounded-2xl shadow-md active:scale-95 transition-all text-center uppercase tracking-wider mt-2"
        >
          Return to Home & See Updated AI Suggestions &rarr;
        </button>
      </main>
    </div>
  );
};
