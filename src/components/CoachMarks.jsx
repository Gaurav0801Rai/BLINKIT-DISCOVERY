import React from 'react';
import { useApp } from '../context/AppContext';

export const CoachMarks = () => {
  const { coachStep, setCoachStep, setActiveTab } = useApp();

  if (!coachStep) return null;

  const steps = [
    {
      step: 1,
      title: "✨ New for your Household Strip",
      body: "Discover categories chosen specifically for your selected household context (e.g. Pet Care, Baby Care, Gourmet Coffee). Try switching households anytime!",
      targetDesc: "Look at the top scrolling category row on Home screen.",
      actionText: "Next: Trust Badge",
      onNext: () => {
        setActiveTab('dairy-bread');
        setCoachStep(2);
      }
    },
    {
      step: 2,
      title: "🛡️ Freshness & Quality Trust Badge",
      body: "Look for our '100% Genuine' and 'Packed Today' trust badges on products for complete peace of mind.",
      targetDesc: "Check out the trust guarantee header on product listings.",
      actionText: "Next: Checkout Nudge",
      onNext: () => {
        setActiveTab('checkout');
        setCoachStep(3);
      }
    },
    {
      step: 3,
      title: "💡 Smart Recommendation Nudge",
      body: "See tailored checkout recommendations based on your current cart and household habits (e.g., Dabur Honey or Cold Brew).",
      targetDesc: "Check out the green recommended nudge box in your cart.",
      actionText: "Got it! Explore App",
      onNext: () => {
        setCoachStep(null);
        setActiveTab('home');
      }
    }
  ];

  const current = steps.find(s => s.step === coachStep) || steps[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl p-5 max-w-xs w-full shadow-2xl border-2 border-[#F8CB46] text-[#1F1B12] relative flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
          <span className="bg-[#F8CB46] text-[#1F1B12] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Coach Mark {current.step} of 3
          </span>
          <button 
            onClick={() => setCoachStep(null)}
            className="text-xs font-bold text-slate-400 hover:text-slate-600"
          >
            Skip
          </button>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-extrabold text-base text-[#1F1B12] mb-1">
            {current.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {current.body}
          </p>
        </div>

        <div className="bg-[#E7F1EF] p-2.5 rounded-xl text-[11px] text-[#0C831F] font-medium flex items-center gap-1.5 border border-[#0C831F]/20">
          <span className="material-symbols-outlined text-[16px]">touch_app</span>
          <span>{current.targetDesc}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-1">
          {coachStep > 1 && (
            <button
              onClick={() => setCoachStep(coachStep - 1)}
              className="flex-1 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 active:scale-95"
            >
              Back
            </button>
          )}
          <button
            onClick={current.onNext}
            className="flex-1 py-2 rounded-xl text-xs font-bold bg-[#0C831F] text-white hover:bg-[#0A6E1A] shadow-md active:scale-95 transition-all"
          >
            {current.actionText}
          </button>
        </div>
      </div>
    </div>
  );
};
