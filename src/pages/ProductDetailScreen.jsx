import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { getFallbackProductImage } from '../data/productsData';

export const ProductDetailScreen = () => {
  const { 
    selectedProduct, 
    cart, 
    addToCart, 
    updateQuantity, 
    setActiveTab 
  } = useApp();

  if (!selectedProduct) {
    return (
      <div className="pb-24 bg-[#F7F7F5] min-h-full">
        <TopHeader title="Product Details" showBack={true} />
        <div className="p-8 text-center text-slate-500">
          <p>Product not found.</p>
          <button 
            onClick={() => setActiveTab('home')}
            className="mt-4 px-4 py-2 bg-[#0C831F] text-white rounded-xl text-xs font-bold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const p = selectedProduct;
  const cartItem = cart.find(i => i.id === p.id);
  const qty = cartItem ? cartItem.qty : 0;

  // Calculate repeat purchase percentage based on rating/id
  const repeatPct = p.repeatPurchasePct || (35 + (p.price % 30));

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full animate-fade-in">
      <TopHeader title={p.brand || 'Blinkit'} showBack={true} />

      <main className="px-4 py-4 space-y-4 max-w-md mx-auto">
        {/* Large Product Image Container */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 relative flex items-center justify-center aspect-square overflow-hidden">
          {p.discount && (
            <span className="absolute top-4 left-4 bg-[#F8CB46] text-[#1F1B12] text-xs font-extrabold px-2.5 py-1 rounded-md shadow-xs z-10">
              {p.discount}
            </span>
          )}

          <img 
            src={p.image} 
            alt={p.name} 
            onError={(e) => { e.target.src = getFallbackProductImage(p.name, p.categoryKey); }}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Basic Info & Price Card */}
        <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0C831F] bg-[#E7F1EF] px-2.5 py-0.5 rounded-full">
              {p.brand || 'Blinkit Assured'}
            </span>
            <div className="flex items-center gap-1 text-xs font-extrabold text-[#1F1B12]">
              <span className="material-symbols-outlined text-[16px] text-[#F8CB46]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span>{p.rating || '4.8'}</span>
              <span className="text-slate-400 font-normal">({p.ratingCount || 1200} buyers)</span>
            </div>
          </div>

          <h1 className="text-base font-extrabold text-[#1F1B12] leading-snug">
            {p.name}
          </h1>
          <p className="text-xs font-semibold text-slate-500">{p.weight}</p>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-[#1F1B12]">₹{p.price}</span>
              {p.originalPrice && (
                <span className="text-xs font-semibold text-slate-400 line-through">₹{p.originalPrice}</span>
              )}
            </div>

            {/* ADD to Cart / Quantity Controller */}
            {qty === 0 ? (
              <button 
                onClick={() => addToCart(p)}
                className="bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-extrabold text-xs py-2.5 px-6 rounded-xl active:scale-95 transition-all shadow-md uppercase tracking-wider"
              >
                + ADD TO CART
              </button>
            ) : (
              <div className="flex items-center gap-3 border-2 border-[#0C831F] rounded-xl px-3 py-1.5 bg-[#E7F1EF]">
                <button 
                  onClick={() => updateQuantity(p.id, -1)}
                  className="text-[#0C831F] font-extrabold text-base hover:scale-110 active:scale-90"
                >
                  -
                </button>
                <span className="text-sm font-extrabold text-[#1F1B12] w-5 text-center">{qty}</span>
                <button 
                  onClick={() => updateQuantity(p.id, 1)}
                  className="text-[#0C831F] font-extrabold text-base hover:scale-110 active:scale-90"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* TRUST & CONFIDENCE SIGNALS CARD (Inspired by Reference App Structure) */}
        <div className="bg-[#E7F1EF] border border-[#0C831F]/30 p-4 rounded-2xl shadow-card space-y-3">
          <div className="flex items-center justify-between border-b border-[#0C831F]/20 pb-2">
            <span className="text-xs font-extrabold text-[#0C831F] uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Trial Confidence & Trust Signals</span>
            </span>
            <span className="text-[10px] font-extrabold bg-[#0C831F] text-white px-2 py-0.5 rounded-full">
              {repeatPct}% Repeat Buyers
            </span>
          </div>

          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            <span className="font-extrabold text-[#0C831F]">{repeatPct}% of verified buyers</span> reorder this product within 30 days on Blinkit.
          </p>

          {/* Review Highlights */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-extrabold text-[#1F1B12] uppercase tracking-wider block">Customer Review Highlights</span>
            <div className="bg-white/90 p-2.5 rounded-xl border border-white text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#0C831F] font-bold text-[11px]">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span>8-Min Superfast Delivery</span>
              </div>
              <p className="text-slate-600 italic text-[11px]">"Received item in under 8 minutes, fresh and neatly packaged!" — Verified Buyer</p>
            </div>
            <div className="bg-white/90 p-2.5 rounded-xl border border-white text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#0C831F] font-bold text-[11px]">
                <span className="material-symbols-outlined text-[14px]">thumb_up</span>
                <span>Quality & Authenticity Assured</span>
              </div>
              <p className="text-slate-600 italic text-[11px]">"100% genuine sealed product. Exactly as shown!" — Verified Buyer</p>
            </div>
          </div>
        </div>

        {/* Category Specific Guarantee Fields */}
        {p.freshnessInfo && (
          <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-2.5">
            <div className="flex items-center gap-2 text-[#0C831F]">
              <span className="material-symbols-outlined text-[20px]">eco</span>
              <span className="text-xs font-extrabold uppercase tracking-wider">Freshness & Storage Info</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F7F7F5] p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Harvest / Packed Date</span>
                <span className="font-extrabold text-[#1F1B12]">{p.freshnessInfo.harvestDate}</span>
              </div>
              <div className="bg-[#F7F7F5] p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Freshness Shelf Life</span>
                <span className="font-extrabold text-[#0C831F]">{p.freshnessInfo.bestBefore}</span>
              </div>
            </div>
          </div>
        )}

        {p.electronicsInfo && (
          <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-2.5">
            <div className="flex items-center gap-2 text-[#0C831F]">
              <span className="material-symbols-outlined text-[20px]">build</span>
              <span className="text-xs font-extrabold uppercase tracking-wider">Warranty & Replacement</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F7F7F5] p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Brand Warranty</span>
                <span className="font-extrabold text-[#1F1B12]">{p.electronicsInfo.warranty}</span>
              </div>
              <div className="bg-[#F7F7F5] p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Return Guarantee</span>
                <span className="font-extrabold text-[#0C831F]">{p.electronicsInfo.returns}</span>
              </div>
            </div>
          </div>
        )}

        {/* Product Description */}
        <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-1">
          <h3 className="text-xs font-extrabold text-[#1F1B12]">Product Description</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            {p.description}
          </p>
        </div>

        {/* Back to Shopping Button */}
        <button 
          onClick={() => setActiveTab('home')}
          className="w-full py-3 bg-[#F8CB46] text-[#1F1B12] font-extrabold text-xs rounded-2xl shadow-md active:scale-95 transition-all text-center uppercase tracking-wider"
        >
          Back to Shopping
        </button>
      </main>
    </div>
  );
};
