import React from 'react';

export const PhoneFrame = ({ children }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 bg-[#F4F5F7] select-none overflow-hidden">
      {/* Outer Phone Shell - Always slim, compact portrait mobile phone mockup */}
      <div className="relative w-[340px] max-w-[94vw] h-[680px] max-h-[92vh] bg-white rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-[8px] border-[#1C1C1E] overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Dynamic Island / Top Speaker Notch */}
        <div className="flex absolute top-0 left-1/2 -translate-x-1/2 w-26 h-4 bg-[#1C1C1E] rounded-b-xl z-50 items-center justify-center gap-1.5">
          <div className="w-8 h-1 bg-[#2C2C2E] rounded-full"></div>
          <div className="w-2 h-2 bg-[#2C2C2E] rounded-full border border-[#3A3A3C]"></div>
        </div>

        {/* Top Status Bar (Time & Icons) */}
        <div className="w-full bg-[#F8CB46] text-[#1F1B12] px-5 pt-2.5 pb-1 flex justify-between items-center text-[10px] font-bold shrink-0 z-40">
          <span>9:41</span>
          <div className="flex items-center gap-1 text-[12px]">
            <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[12px]">wifi</span>
            <span className="material-symbols-outlined text-[12px]">battery_full</span>
          </div>
        </div>

        {/* Scrollable Viewport Inner Content */}
        <div className="flex-1 w-full h-full overflow-y-auto no-scrollbar relative bg-[#F7F7F5] flex flex-col">
          {children}
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="w-full bg-white py-1 flex justify-center items-center shrink-0 z-40 border-t border-slate-100">
          <div className="w-24 h-1 bg-[#1F1B12]/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
