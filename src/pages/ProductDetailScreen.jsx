import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';
import { getFallbackProductImage } from '../data/productsData';
import { fetchGrokProductReviews } from '../services/grokService';

export const ProductDetailScreen = () => {
  const { 
    selectedProduct, 
    cart, 
    addToCart, 
    updateQuantity, 
    setActiveTab 
  } = useApp();

  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadReviews() {
      if (selectedProduct) {
        const grokReviews = await fetchGrokProductReviews(selectedProduct);
        if (isMounted && grokReviews && grokReviews.length > 0) {
          setReviews(grokReviews);
        }
      }
    }
    loadReviews();
    return () => { isMounted = false; };
  }, [selectedProduct?.id]);

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
  const repeatPct = p.repeatPurchasePct || (38 + (p.price % 32));

  // Determine Category Type for Trust & Freshness Details
  const catKey = (p.categoryKey || '').toLowerCase();
  const isPerishable = catKey.includes('veggie') || catKey.includes('fruit') || catKey.includes('dairy') || catKey.includes('bakery') || catKey.includes('staple');
  const isElectronics = catKey.includes('electronic');
  const isCosmeticsOrPersonal = catKey.includes('cosmetic') || catKey.includes('baby') || catKey.includes('pet') || catKey.includes('skincare');

  // Display 1 review initially, show more on toggle
  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 1);

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

        {/* PACKED & FRESHNESS TRUST DETAILS CARD (2026 DATES) */}
        <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-extrabold text-[#1F1B12] uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0C831F] text-[18px]">verified_user</span>
              <span>Packaging & Batch Authenticity</span>
            </span>
            <span className="text-[10px] font-extrabold text-[#0C831F] bg-[#E7F1EF] px-2 py-0.5 rounded-full">
              2026 Fresh Batch
            </span>
          </div>

          <div className="space-y-1.5 text-xs text-slate-700 font-medium">
            {isPerishable && (
              <>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">inventory_2</span> Packed Date:
                  </span>
                  <span className="font-extrabold text-[#1F1B12]">27 Jul 2026 (4:30 AM)</span>
                </div>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">event_busy</span> Best Before:
                  </span>
                  <span className="font-extrabold text-[#0C831F]">30 Jul 2026 (Cold Chain 4°C)</span>
                </div>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">eco</span> Quality Guarantee:
                  </span>
                  <span className="font-bold text-[#1F1B12]">100% Organic & Farm Tested</span>
                </div>
              </>
            )}

            {isElectronics && (
              <>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">workspace_premium</span> Brand Warranty:
                  </span>
                  <span className="font-extrabold text-[#1F1B12]">1 Year Official Warranty</span>
                </div>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">calendar_month</span> Mfg Date:
                  </span>
                  <span className="font-bold text-[#1F1B12]">Jun 2026 (Latest 2026 Batch)</span>
                </div>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">lock</span> Pack Seal:
                  </span>
                  <span className="font-bold text-[#0C831F]">100% Brand Sealed Pack</span>
                </div>
              </>
            )}

            {isCosmeticsOrPersonal && (
              <>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">shield</span> Genuine Guarantee:
                  </span>
                  <span className="font-extrabold text-[#1F1B12]">100% Dermatologically Tested</span>
                </div>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">event</span> Expiry Date:
                  </span>
                  <span className="font-extrabold text-[#0C831F]">Jun 2028 (2026 Fresh Stock)</span>
                </div>
                <div className="flex justify-between items-center bg-[#F7F7F5] p-2 rounded-xl">
                  <span className="text-slate-500 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#0C831F]">verified</span> Safety Seal:
                  </span>
                  <span className="font-bold text-[#1F1B12]">Tamper-Proof Hologram</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* TRUST & CONFIDENCE SIGNALS CARD WITH GROK REVIEWS (1 INITIALLY, TOGGLE TO SHOW MORE) */}
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

          {/* Customer Reviews Section */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-[#1F1B12] uppercase tracking-wider block">Customer Reviews</span>
              <span className="text-[9px] font-extrabold text-[#0C831F] bg-white px-2 py-0.5 rounded-full">
                ✨ Grok AI Verified (2026)
              </span>
            </div>

            {visibleReviews.map((rev, idx) => (
              <div key={idx} className="bg-white/90 p-2.5 rounded-xl border border-white text-xs space-y-1 animate-fade-in">
                <div className="flex items-center justify-between text-[#0C831F] font-bold text-[11px]">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">thumb_up</span>
                    <span>{rev.user || 'Verified Buyer'}</span>
                  </div>
                  <span className="text-slate-500 text-[10px] font-extrabold bg-slate-100 px-1.5 py-0.2 rounded-md">
                    {rev.date || '27 Jul 2026'}
                  </span>
                </div>
                <p className="text-slate-600 italic text-[11px] leading-snug">"{rev.text}"</p>
              </div>
            ))}

            {/* Toggle Button: 1 Review Initially, Click to View 3 More */}
            {reviews.length > 1 && (
              <button 
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="w-full py-2 bg-white hover:bg-slate-50 text-[#0C831F] font-extrabold text-[11px] rounded-xl border border-[#0C831F]/30 active:scale-95 transition-all text-center flex items-center justify-center gap-1 shadow-xs"
              >
                <span>{showAllReviews ? '👆 Show Fewer Reviews' : `👇 View ${reviews.length - 1} More Verified Reviews`}</span>
              </button>
            )}
          </div>
        </div>

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
