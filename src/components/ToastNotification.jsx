import React from 'react';
import { useApp } from '../context/AppContext';

export const ToastNotification = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in px-3 w-full max-w-[340px]">
      <div className="bg-[#1F1B12] text-white px-4 py-2.5 rounded-full shadow-xl flex items-center justify-between gap-3 border border-white/20">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px] text-[#F8CB46]">
            {toast.icon}
          </span>
          <span>{toast.message}</span>
        </div>
      </div>
    </div>
  );
};
