import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const OrdersScreen = () => {
  const { ordersHistory, addToCart, setActiveTab, showToast } = useApp();

  const handleReorder = (order) => {
    if (order.items && order.items.length > 0) {
      order.items.forEach(item => addToCart(item));
      showToast(`Reordered ${order.items.length} items to your cart!`, 'shopping_cart');
      setActiveTab('checkout');
    }
  };

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full animate-fade-in">
      <TopHeader title="Your Orders" />

      <main className="px-4 py-4 space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-extrabold text-[#1F1B12]">Order History ({ordersHistory.length})</h1>
          <span className="text-[11px] font-bold text-[#0C831F] bg-[#E7F1EF] px-2.5 py-0.5 rounded-full">
            Instant 8 Min Delivery
          </span>
        </div>

        {ordersHistory.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center space-y-3 shadow-card">
            <span className="material-symbols-outlined text-[48px] text-slate-300">receipt_long</span>
            <h2 className="text-sm font-extrabold text-[#1F1B12]">No Orders Placed Yet</h2>
            <p className="text-xs text-slate-500 font-medium">Place your first order to track it here!</p>
            <button 
              onClick={() => setActiveTab('home')}
              className="px-6 py-2.5 bg-[#0C831F] text-white font-extrabold text-xs rounded-xl shadow-md active:scale-95 transition-all uppercase"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          ordersHistory.map(order => (
            <div key={order.id} className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">ORDER #{order.id}</span>
                  <p className="text-xs font-semibold text-slate-600">{order.date}</p>
                </div>
                <span className="text-[10px] font-extrabold text-[#0C831F] bg-[#E7F1EF] px-2.5 py-0.5 rounded-full">
                  {order.status || 'Delivered in 8 mins ⚡'}
                </span>
              </div>

              {/* Items Summary Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {order.items && order.items.map((item, idx) => (
                  <div key={idx} className="w-12 h-12 bg-[#F7F7F5] rounded-xl p-1 shrink-0 flex items-center justify-center border border-slate-100">
                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <div>
                  <span className="text-xs font-bold text-slate-500">{order.itemsCount || order.items?.length || 1} items · Total</span>
                  <p className="text-sm font-extrabold text-[#1F1B12]">₹{order.total}</p>
                </div>

                {/* PROMINENT REPEAT ORDER BUTTON */}
                <button 
                  onClick={() => handleReorder(order)}
                  className="bg-[#0C831F] hover:bg-[#0A6E1A] text-white font-extrabold text-xs py-2.5 px-4 rounded-xl active:scale-95 transition-all shadow-md flex items-center gap-1.5 uppercase tracking-wide"
                >
                  <span className="material-symbols-outlined text-[16px]">sync</span>
                  <span>Repeat Order</span>
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};
