import React from 'react';
import { useApp } from '../context/AppContext';

export const TopHeader = ({ title = 'blinkit', showBack = false }) => {
  const { setActiveTab, goBack, householdData, cartItemsCount } = useApp();

  return (
    <header className="sticky top-0 z-50 bg-[#F8CB46] px-4 py-2.5 flex items-center justify-between shadow-xs">
      {/* Left Title / Back Button & Delivery Address */}
      <div className="flex items-center gap-2">
        {showBack && (
          <button 
            onClick={goBack}
            className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center active:scale-95 transition-all mr-1"
            title="Go to previous page"
          >
            <span className="material-symbols-outlined text-[24px] text-[#1F1B12]">arrow_back</span>
          </button>
        )}
        <div className="flex flex-col cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="flex items-center gap-1">
            <span className="font-extrabold text-2xl tracking-tighter leading-none text-[#1F1B12] lowercase">
              {title}
            </span>
          </div>
          <div 
            className="flex items-center gap-0.5 mt-0.5 cursor-pointer hover:opacity-80"
            onClick={(e) => { e.stopPropagation(); setActiveTab('simulate-household'); }}
            title="Tap to change delivery address context"
          >
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <span className="text-[11px] font-bold tracking-tight text-[#1F1B12] line-clamp-1 max-w-[150px]">
              {householdData.location || 'HOME - Sector 22, Gurugram'}
            </span>
            <span className="material-symbols-outlined text-[15px]">arrow_drop_down</span>
          </div>
        </div>
      </div>

      {/* Top Header Action Icons */}
      <div className="flex items-center gap-2.5">
        <button 
          onClick={() => setActiveTab('search')}
          className="w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-xs active:scale-95 transition-all text-[#1F1B12]"
          title="Search Products"
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
        </button>

        <button 
          onClick={() => setActiveTab('checkout')}
          className="w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-xs active:scale-95 transition-all text-[#1F1B12] relative"
          title="View Cart"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#0C831F] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-bounce-short">
              {cartItemsCount}
            </span>
          )}
        </button>

        <button 
          onClick={() => setActiveTab('simulate-household')}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-xs active:scale-95 transition-all shrink-0"
          title={`Active Profile: ${householdData.name}`}
        >
          <img src={householdData.avatar} alt={householdData.name} className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  );
};

export const BottomNav = () => {
  const { activeTab, setActiveTab, cartItemsCount } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'categories', label: 'Categories', icon: 'grid_view' },
    { id: 'checkout', label: 'Cart', icon: 'shopping_cart', badge: cartItemsCount },
    { id: 'orders', label: 'Orders', icon: 'receipt_long' },
    { id: 'profile', label: 'Profile', icon: 'person' }
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-2 py-1.5 flex justify-around items-center shadow-lg w-full shrink-0">
      {navItems.map(item => {
        const isActive = activeTab === item.id || (item.id === 'categories' && activeTab === 'category-listing');
        const isCategories = item.id === 'categories';

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all relative ${
              isCategories
                ? isActive
                  ? 'bg-[#F8CB46] text-[#1F1B12] font-black shadow-md scale-105 ring-2 ring-[#0C831F]'
                  : 'bg-[#F8CB46] text-[#1F1B12] font-extrabold shadow-sm hover:bg-[#F8CB46]/90 ring-1 ring-[#0C831F]/50 scale-100'
                : isActive
                ? 'text-[#0C831F] font-extrabold'
                : 'text-slate-500 font-medium hover:text-slate-800'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <span 
                className="material-symbols-outlined text-[22px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              {item.badge > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-[#0C831F] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full shadow-xs">
                  {item.badge}
                </span>
              )}
              {isCategories && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0C831F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0C831F]"></span>
                </span>
              )}
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${isCategories ? 'font-black uppercase text-[#1F1B12]' : ''}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export const BottomNavBar = BottomNav;
