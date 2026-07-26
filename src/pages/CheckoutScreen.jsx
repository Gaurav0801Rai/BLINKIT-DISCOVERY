import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const CheckoutScreen = () => {
  const { 
    cart, 
    updateQuantity, 
    addToCart,
    itemTotal, 
    handlingFee, 
    taxesFee, 
    grandTotal, 
    paymentMethod, 
    setPaymentMethod, 
    placeOrder, 
    setActiveTab,
    getDynamicCheckoutNudge,
    handleNudgeThumbsUp,
    handleNudgeThumbsDown
  } = useApp();

  const [aiFeedbackSaved, setAiFeedbackSaved] = useState(false);
  const [unlockedCategoryBanner, setUnlockedCategoryBanner] = useState(null);

  const dynamicNudge = getDynamicCheckoutNudge();

  const onThumbsUpClicked = () => {
    setAiFeedbackSaved(true);
    handleNudgeThumbsUp(dynamicNudge.title);
  };

  const onAddNudgeToCart = () => {
    addToCart({
      id: dynamicNudge.id,
      name: dynamicNudge.title,
      price: dynamicNudge.price,
      weight: '1 unit',
      image: dynamicNudge.image,
      categoryKey: dynamicNudge.categoryKey || 'staples',
      categoryName: dynamicNudge.categoryName || 'New Discovery'
    });
    setUnlockedCategoryBanner(`🎉 New Category Unlocked: ${dynamicNudge.categoryName}!`);
  };

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full animate-fade-in">
      <TopHeader title="Checkout" showBack={true} />

      <main className="px-4 py-4 space-y-4 max-w-md mx-auto">
        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center space-y-3 shadow-card">
            <span className="material-symbols-outlined text-[48px] text-slate-300">shopping_cart_off</span>
            <h2 className="text-sm font-extrabold text-[#1F1B12]">Your Cart is Empty</h2>
            <p className="text-xs text-slate-500 font-medium">Add items from any category to start shopping!</p>
            <button 
              onClick={() => setActiveTab('home')}
              className="px-6 py-2.5 bg-[#0C831F] text-white font-extrabold text-xs rounded-xl shadow-md active:scale-95 transition-all uppercase"
            >
              Browse Categories
            </button>
          </div>
        ) : (
          <>
            {/* Delivery Address & ETA Banner */}
            <div className="bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#E7F1EF] flex items-center justify-center text-[#0C831F]">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#1F1B12]">Delivery in 8 Mins ⚡</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Sector 22, Gurugram</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('simulate-household')}
                className="text-[10px] font-extrabold text-[#0C831F] hover:underline"
              >
                Change Address
              </button>
            </div>

            {/* Cart Items List */}
            <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
              <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Order Items ({cart.length})
              </h2>

              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between gap-2 border-b border-slate-100/60 pb-2.5 last:border-none last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F7F7F5] rounded-xl p-1 shrink-0 flex items-center justify-center border border-slate-100">
                        <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-[#1F1B12] line-clamp-1">{item.name}</h4>
                        <p className="text-[10px] text-slate-400 font-medium">{item.weight}</p>
                        <span className="text-xs font-extrabold text-[#1F1B12]">₹{item.price * item.qty}</span>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2.5 border-2 border-[#0C831F] rounded-lg px-2 py-1 bg-[#E7F1EF] shrink-0">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-[#0C831F] font-extrabold text-xs active:scale-90"
                      >
                        -
                      </button>
                      <span className="text-xs font-extrabold text-[#1F1B12] w-4 text-center">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-[#0C831F] font-extrabold text-xs active:scale-90"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Celebratory Banner when Category Unlocked */}
            {unlockedCategoryBanner && (
              <div className="bg-[#0C831F] text-white px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center justify-between shadow-md animate-fade-in">
                <span>{unlockedCategoryBanner}</span>
                <button onClick={() => setUnlockedCategoryBanner(null)} className="text-white hover:opacity-80">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
            )}

            {/* DYNAMIC CROSS-CATEGORY RECOMMENDATION NUDGE CARD WITH REACTION THUMBS UP/DOWN */}
            <div id="checkout-recommendation-card" className="bg-[#E7F1EF] border-2 border-[#0C831F]/40 p-4 rounded-2xl shadow-card space-y-2.5 relative">
              <div className="flex items-center justify-between">
                <span className="bg-[#0C831F] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  ✨ Cross-Category Discovery
                </span>

                {/* THUMBS UP & THUMBS DOWN REACTION BUTTONS */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-600">AI Feedback:</span>
                  <button 
                    onClick={onThumbsUpClicked}
                    className={`w-6 h-6 rounded-full flex items-center justify-center shadow-xs active:scale-90 transition-colors ${
                      aiFeedbackSaved ? 'bg-[#0C831F] text-white' : 'bg-white text-[#0C831F] hover:bg-[#0C831F] hover:text-white'
                    }`}
                    title="Confirm AI recommendation fits your household"
                  >
                    <span className="material-symbols-outlined text-[13px]">thumb_up</span>
                  </button>
                  <button 
                    onClick={() => handleNudgeThumbsDown(dynamicNudge.id)}
                    className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-600 shadow-xs active:scale-90 hover:bg-red-600 hover:text-white transition-colors"
                    title="Show alternative recommendation"
                  >
                    <span className="material-symbols-outlined text-[13px]">thumb_down</span>
                  </button>
                </div>
              </div>

              {aiFeedbackSaved && (
                <div className="text-[10px] font-bold text-[#0C831F] bg-white px-2 py-0.5 rounded-md inline-block">
                  ✓ AI Preference Remembered for Future Orders
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white rounded-xl p-1.5 shrink-0 flex items-center justify-center border border-white shadow-xs">
                  <img src={dynamicNudge.image} alt={dynamicNudge.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-extrabold text-[#0C831F] uppercase bg-white px-1.5 py-0.2 rounded-md">
                      {dynamicNudge.categoryName || 'New Category'}
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[#1F1B12] mt-0.5">{dynamicNudge.title}</h4>
                  <p className="text-[10px] font-bold text-[#0C831F]">₹{dynamicNudge.price}</p>
                  <p className="text-[10px] text-slate-600 italic mt-0.5 leading-snug">
                    {dynamicNudge.reason}
                  </p>
                </div>
              </div>

              <button 
                onClick={onAddNudgeToCart}
                className="w-full py-2.5 bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-extrabold text-xs rounded-xl active:scale-95 transition-all shadow-xs flex items-center justify-center gap-1 uppercase tracking-wide"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>Add {dynamicNudge.title} to Cart (+₹{dynamicNudge.price})</span>
              </button>
            </div>

            {/* Bill Details Card */}
            <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-2">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-1.5">
                Bill Summary
              </h3>

              <div className="flex justify-between text-xs text-slate-600 font-medium">
                <span>Items Subtotal</span>
                <span>₹{itemTotal}</span>
              </div>

              <div className="flex justify-between text-xs text-slate-600 font-medium">
                <span>Handling Fee</span>
                <span>₹{handlingFee}</span>
              </div>

              <div className="flex justify-between text-xs text-[#0C831F] font-bold">
                <span>Delivery Fee (8 Mins)</span>
                <span>FREE</span>
              </div>

              <div className="flex justify-between text-xs text-slate-600 font-medium">
                <span>Taxes & Charges</span>
                <span>₹{taxesFee}</span>
              </div>

              <div className="flex justify-between text-sm font-extrabold text-[#1F1B12] pt-2 border-t border-slate-100">
                <span>Grand Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Select Payment Method
              </h3>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition-all active:scale-95 ${
                    paymentMethod === 'upi'
                      ? 'bg-[#E7F1EF] border-2 border-[#0C831F] text-[#0C831F]'
                      : 'bg-[#F7F7F5] border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="material-symbols-outlined block text-[20px] mb-0.5">account_balance_wallet</span>
                  <span>UPI Instant</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition-all active:scale-95 ${
                    paymentMethod === 'card'
                      ? 'bg-[#E7F1EF] border-2 border-[#0C831F] text-[#0C831F]'
                      : 'bg-[#F7F7F5] border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="material-symbols-outlined block text-[20px] mb-0.5">credit_card</span>
                  <span>Credit Card</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition-all active:scale-95 ${
                    paymentMethod === 'cod'
                      ? 'bg-[#E7F1EF] border-2 border-[#0C831F] text-[#0C831F]'
                      : 'bg-[#F7F7F5] border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="material-symbols-outlined block text-[20px] mb-0.5">payments</span>
                  <span>Cash (COD)</span>
                </button>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              onClick={placeOrder}
              className="w-full py-3.5 bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-extrabold text-sm rounded-2xl shadow-lg active:scale-98 transition-all flex items-center justify-between px-5 uppercase tracking-wider"
            >
              <span>Pay ₹{grandTotal}</span>
              <span className="flex items-center gap-1">
                <span>Place Order</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </span>
            </button>
          </>
        )}
      </main>
    </div>
  );
};
