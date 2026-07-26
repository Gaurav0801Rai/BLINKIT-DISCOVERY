import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS_DATABASE } from '../data/productsData';

const AppContext = createContext();

export const HOUSEHOLDS = {
  family: {
    id: 'family',
    name: 'Family Household',
    location: 'HOME - Sector 22, Gurugram',
    description: 'Focuses on bulk savings, kid-friendly snacks, and daily essentials.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaqRX56pnILASqaWqliZ1tzDSrRR-ZVX6XhWsVDXVVWQZdVbsiOdgXkB6yAXrvCoTgOyuIFLNxoVAtwPwTd-x0RpD8o3Pm54xeOD8ADaUi1LJ-LF4F1FDoGvLgswCltgcxmzo-ENesHYeE5dy9xmJZOSTOcCQv0N5V8c1CJm_PthIyJNYGg96gWfSHRxsXwIn5TbSWDd2CELYF_5NbSr0U_xxCw-wo3xY8Zahjx6xHDmS9w9H_YKW7X6Z4hCx04qIHZmkJW3X2tA',
    newCategories: [
      { id: 'pet-care', title: 'Pet Care Essentials', key: 'pet-care', badge: 'AI MATCH FOR FAMILY', icon: 'pets', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
      { id: 'baby-care', title: 'Baby Care & Diapers', key: 'baby-care', badge: 'AI MATCH FOR FAMILY', icon: 'child_care', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
      { id: 'cosmetics', title: 'Cosmetics & Beauty', key: 'cosmetics', badge: 'AI MATCH FOR FAMILY', icon: 'face_6', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' }
    ],
    searchChips: ['Pet Care', 'Baby Care', 'Cosmetics', 'Atta 5kg', 'Amul Milk', 'Butter']
  },
  pro: {
    id: 'pro',
    name: 'Single Professional',
    location: 'OFFICE - DLF Cyber City, Gurugram',
    description: 'Prioritizes quick meals, gourmet coffee, and high-tech convenience.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3PgKn3qtPpnPVn4Wx73DvnKb3Ep9ULaKZBoxUZzq7rck4g1rjxp7tsDNIlt2FzgLV5JIIqTwD3WNGUeWA70ggjo3CDcsjaWSuNGKwEUmEwWbFMpthp9EyMp6zO2xlOej_dCrRSS3-fGjSYaxaivFthq3ifzPSh-eWGUJEqSrN3LL3Qw9tThYZkmVxZ5jp7z9vt5dXVLMLtfLK5R7mnRmoyyXA_-qJXOCjBxQhWjSU3_vJLmm9M1y65sTsm9dF9kGkRbz1SDIPZw',
    newCategories: [
      { id: 'tea-coffee', title: 'Gourmet Tea & Coffee', key: 'tea-coffee', badge: 'AI MATCH FOR PRO', icon: 'coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80' },
      { id: 'electronics', title: 'Electronics & Audio', key: 'electronics', badge: 'AI MATCH FOR PRO', icon: 'devices', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
      { id: 'snacks', title: 'Ready Meals & Snacks', key: 'snacks', badge: 'AI MATCH FOR PRO', icon: 'ramen_dining', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' }
    ],
    searchChips: ['Tea & Coffee', 'Electronics', 'Cold Brew', 'Ready Meals', 'Energy Drink', 'Protein Bar']
  },
  health: {
    id: 'health',
    name: 'Health-Focused Household',
    location: 'HOME - Golf Course Road, Gurugram',
    description: 'Highlights organic produce, protein supplements, and fresh juices.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByqck6Oo3T2AwKocGuoK3p7Q4VYXDAaIEDX2l0RcJ4ESkJ8gA4xAVWX41Gz3RQjCE_kSc8l8KeY7zmNi1GPGiObghEh-qMQWImeSAgeNMByjnJjdWfpospu8syPqRTK63DDgY0DjIfLwD71504EDQRsZMH1Q3KAAbV_ZbRznNVGVpZg9kwpzQ-t-7c3PBMC6AtEolSB5CQlj6wRNFXIL6bgmqNOVbaRIK1pMrCDrwe4__O6BUFcohrRqRTP5cmoWKqdj_rPcktvg',
    newCategories: [
      { id: 'wellness', title: 'Gym & Supplements', key: 'wellness', badge: 'AI MATCH FOR HEALTH', icon: 'fitness_center', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' },
      { id: 'beverages', title: '100% Fresh Juices', key: 'beverages', badge: 'AI MATCH FOR HEALTH', icon: 'local_drink', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80' },
      { id: 'fresh-fruits', title: 'Exotic Organic Fruits', key: 'fresh-fruits', badge: 'AI MATCH FOR HEALTH', icon: 'nutrition', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80' }
    ],
    searchChips: ['Gym & Health', 'Fresh Juices', 'Avocados', 'Greek Yogurt', 'Whey Protein', 'Almond Milk']
  },
  pet: {
    id: 'pet',
    name: 'Pet Lovers Household',
    location: 'HOME - Indiranagar, Bengaluru',
    description: 'Custom shelf for pet food, cat treats, toys, and grooming essentials.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfeUjUwuxmyFrWg9uc7RSzt9Xc7QbBI9F7T-Y8lYgU6vHk33xQWUm8QQu7jrCJpv--gd67QUa7wkTuvY3RT9Ki_oi9KXlRMsPG-WVKoBvVBR1Juj0BGleQiGFWnQM0Pj7tvIvhpqNXdUaItwldSKn43-HgILJFqqXOKWuj5mAMi9wisMdfZsIL1zMdDVybk-eAjF7_GoNJNGoF6HYWasme_EeJtQ_efrhROawxruhgOhUCUqDYBPiy4ctpdNXLtgYYeos6MVZ3yg',
    newCategories: [
      { id: 'pet-care', title: 'Pet Food & Kibble', key: 'pet-care', badge: 'AI MATCH FOR PET PARENT', icon: 'pets', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
      { id: 'pet-toys', title: 'Pet Grooming & Toys', key: 'pet-toys', badge: 'AI MATCH FOR PET PARENT', icon: 'toys', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
      { id: 'wellness', title: 'Pet Wellness', key: 'wellness', badge: 'AI MATCH FOR PET PARENT', icon: 'health_and_safety', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' }
    ],
    searchChips: ['Pet Food', 'Cat Treats', 'Dog Food 3kg', 'Pet Shampoo', 'Chew Bones', 'Cat Litter']
  }
};

const INITIAL_CART = [];

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [tabHistory, setTabHistory] = useState(['home']);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState('fresh-veggies');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [cart, setCart] = useState(INITIAL_CART);
  const [currentHouseholdId, setCurrentHouseholdId] = useState('family');
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const [ordersHistory, setOrdersHistory] = useState([]);

  // Unlocked Categories State
  const [unlockedCategories, setUnlockedCategories] = useState([
    { key: 'dairy-bread', title: 'Dairy & Bread' },
    { key: 'fresh-veggies', title: 'Vegetables' },
    { key: 'staples', title: 'Atta & Rice' }
  ]);

  // AI Feedback Reaction States
  const [dislikedItemIds, setDislikedItemIds] = useState([]);
  const [dislikedNudgeIds, setDislikedNudgeIds] = useState([]);
  const [userPreferences, setUserPreferences] = useState([]);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);

  const householdData = HOUSEHOLDS[currentHouseholdId] || HOUSEHOLDS.family;

  const showToast = (message, icon = 'info') => {
    setToastMessage({ message, icon });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const navigateToTab = (tab) => {
    if (tab !== activeTab) {
      setTabHistory(prev => [...prev, tab]);
      setActiveTab(tab);
    }
  };

  const goBack = () => {
    if (tabHistory.length > 1) {
      const newHistory = [...tabHistory];
      newHistory.pop();
      const prevTab = newHistory[newHistory.length - 1];
      setTabHistory(newHistory);
      setActiveTab(prevTab);
    } else {
      setActiveTab('home');
    }
  };

  const openCategory = (catKey) => {
    setSelectedCategoryKey(catKey);
    navigateToTab('category-listing');
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    navigateToTab('product-detail');
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(i => i.id === item.id || i.name === item.name);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += 1;
        return updated;
      }
      return [...prev, { ...item, qty: 1 }];
    });

    // Auto unlock category if new
    if (item.categoryKey) {
      setUnlockedCategories(prev => {
        if (!prev.some(c => c.key === item.categoryKey)) {
          return [...prev, { key: item.categoryKey, title: item.categoryName || item.categoryKey }];
        }
        return prev;
      });
    }

    showToast(`Added ${item.name || item.title} to cart!`, 'shopping_cart');
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => setCart([]);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const itemTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const handlingFee = itemTotal > 0 ? 15 : 0;
  const deliveryFee = 0;
  const taxesFee = itemTotal > 0 ? 12 : 0;
  const grandTotal = itemTotal + handlingFee + deliveryFee + taxesFee;

  const handleThumbsUp = (item) => {
    setUserPreferences(prev => [...prev, item]);
    showToast('Added to your preferences!', 'thumb_up');
  };

  const handleThumbsDown = (itemId, itemName) => {
    setDislikedItemIds(prev => [...prev, itemId]);
    showToast("Got it, we'll show fewer like this", 'thumb_down');
  };

  const handleNudgeThumbsDown = (nudgeId) => {
    setDislikedNudgeIds(prev => [...prev, nudgeId]);
    showToast("Switched to an alternative cross-category recommendation!", 'thumb_down');
  };

  const handleNudgeThumbsUp = (nudgeTitle) => {
    showToast(`AI Preference Saved: Model updated for ${householdData.name}!`, 'psychology');
  };

  const switchHousehold = (id) => {
    if (HOUSEHOLDS[id]) {
      setCurrentHouseholdId(id);
      showToast(`Switched context to ${HOUSEHOLDS[id].name}`, 'family_restroom');
    }
  };

  // STRICT CROSS-CATEGORY CHECKOUT NUDGE GENERATOR (DYNAMIC ROTATION & UNBOUGHT CANDIDATE SELECTION)
  const getDynamicCheckoutNudge = () => {
    const cartCatKeys = cart.map(i => i.categoryKey || '');
    const cartNames = cart.map(i => (i.name || '').toLowerCase());
    const cartIds = cart.map(i => i.id);

    const candidateNudges = [
      {
        id: 'nudge_shampoo',
        title: 'Captain Zack Anti-Tick Pet Shampoo 200ml',
        categoryKey: 'pet-toys',
        categoryName: 'Pet Grooming',
        price: 240,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80',
        reason: '"Why this? Pet households order Anti-Tick Shampoo with weekly cart items"'
      },
      {
        id: 'nudge_dark_fantasy',
        title: 'Sunfeast Dark Fantasy Choco Fills 75g',
        categoryKey: 'bakery',
        categoryName: 'Bakery & Biscuits',
        price: 85,
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80',
        reason: '"Why this? 87% of tea & coffee drinkers pair their brew with Dark Fantasy Choco Fills"'
      },
      {
        id: 'nudge_earbuds',
        title: 'Noise VS102 Truly Wireless Earbuds',
        categoryKey: 'electronics',
        categoryName: 'Electronics & Audio',
        price: 999,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80',
        reason: '"Why this? Top rated audio gadget choice for fast 8-minute delivery"'
      },
      {
        id: 'nudge_avocado',
        title: 'Hass Fresh Avocados 2 Pack',
        categoryKey: 'fresh-fruits',
        categoryName: 'Exotic Produce',
        price: 199,
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80',
        reason: '"Why this? Fresh organic nutrient-rich avocados pairs with healthy home carts"'
      },
      {
        id: 'nudge_dolo',
        title: 'Dolo 650mg Paracetamol Tablets 15s',
        categoryKey: 'pharma',
        categoryName: 'Pharmacy & Health',
        price: 32,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80',
        reason: '"Why this? Essential household first-aid medicine for instant 8-min delivery"'
      }
    ];

    // Filter out candidates ALREADY IN CART or DISLIKED
    const validCandidates = candidateNudges.filter(n => 
      !cartIds.includes(n.id) &&
      !cartNames.some(cn => cn.includes(n.title.toLowerCase())) &&
      !dislikedNudgeIds.includes(n.id)
    );

    if (validCandidates.length > 0) {
      return validCandidates[0];
    }

    return candidateNudges[0];
  };

  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      orderId: `BLK-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      items: [...cart],
      grandTotal,
      paymentMethod: paymentMethod.toUpperCase(),
      householdName: householdData.name,
      status: 'Delivered in 8 Mins ⚡'
    };

    setOrdersHistory(prev => [newOrder, ...prev]);

    // Unlock new categories bought in this order
    cart.forEach(item => {
      if (item.categoryKey) {
        setUnlockedCategories(prev => {
          if (!prev.some(c => c.key === item.categoryKey)) {
            return [...prev, { key: item.categoryKey, title: item.categoryName || item.categoryKey }];
          }
          return prev;
        });
      }
    });

    clearCart();
    navigateToTab('order-placed');
    showToast('Order Placed Successfully! ⚡', 'check_circle');
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab: navigateToTab,
      selectedCategoryKey,
      setSelectedCategoryKey,
      openCategory,
      selectedProduct,
      openProduct,
      cart,
      addToCart,
      updateQuantity,
      clearCart,
      cartItemsCount,
      itemTotal,
      handlingFee,
      deliveryFee,
      taxesFee,
      grandTotal,
      currentHouseholdId,
      householdData,
      switchHousehold,
      paymentMethod,
      setPaymentMethod,
      placeOrder,
      ordersHistory,
      unlockedCategories,
      dislikedItemIds,
      handleThumbsUp,
      handleThumbsDown,
      handleNudgeThumbsDown,
      handleNudgeThumbsUp,
      getDynamicCheckoutNudge,
      goBack,
      toastMessage,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
