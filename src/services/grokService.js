// Resilient Client Service Layer for Grok AI Integration
// Features: 2000ms AbortController Timeout, In-Memory Response Caching, Instant Rule-Based Fallbacks.

const grokCache = new Map();
const TIMEOUT_MS = 2000;

// Helper to execute API call with 2.0-second timeout
async function callGrokAPI(payload) {
  const cacheKey = JSON.stringify(payload);
  if (grokCache.has(cacheKey)) {
    return grokCache.get(cacheKey);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch('/api/grok', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: cacheKey,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Server status ${response.status}`);
    }

    const json = await response.json();
    if (json.fallback || !json.data) {
      throw new Error(json.error || 'Server requested fallback');
    }

    grokCache.set(cacheKey, json.data);
    return json.data;
  } catch (error) {
    clearTimeout(timeoutId);
    console.warn('[Grok AI] Using instant fallback:', error.message);
    return null; // Signals fallback to caller
  }
}

/**
 * 1. CHECKOUT NUDGE
 */
export async function fetchGrokCheckoutNudge({ cart, pastOrders, householdData, fallbackNudge }) {
  const payload = {
    action: 'checkout-nudge',
    cart: cart.map(i => ({ name: i.name, categoryKey: i.categoryKey })),
    pastOrders: pastOrders.slice(0, 3).map(o => ({ items: o.items.map(i => i.name) })),
    householdData: { name: householdData.name, id: householdData.id }
  };

  const grokData = await callGrokAPI(payload);

  if (grokData && grokData.productName && grokData.whyThisExplanation) {
    return {
      id: `grok_${Date.now()}`,
      title: grokData.productName,
      categoryKey: grokData.categoryKey || 'pet-toys',
      categoryName: grokData.categoryName || 'Recommended for You',
      price: grokData.price || 240,
      image: grokData.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80',
      reason: `"${grokData.whyThisExplanation}"`,
      isGrokPowered: true
    };
  }

  // Instant Rule-Based Fallback
  return fallbackNudge;
}

/**
 * 2. SEARCH SUGGESTIONS
 */
export async function fetchGrokSearchSuggestions({ pastOrders, householdData, fallbackChips }) {
  const payload = {
    action: 'search-suggestions',
    pastOrders: pastOrders.slice(0, 3).map(o => ({ items: o.items.map(i => i.name) })),
    householdData: { name: householdData.name, id: householdData.id }
  };

  const grokData = await callGrokAPI(payload);

  if (grokData && Array.isArray(grokData.suggestions) && grokData.suggestions.length > 0) {
    return grokData.suggestions;
  }

  // Instant Fallback
  return fallbackChips;
}

/**
 * 3. PRODUCT REVIEWS
 */
export async function fetchGrokProductReviews(product) {
  if (!product) return [];

  const payload = {
    action: 'product-reviews',
    product: { name: product.name, categoryName: product.categoryName, price: product.price }
  };

  const grokData = await callGrokAPI(payload);

  if (grokData && Array.isArray(grokData.reviews) && grokData.reviews.length > 0) {
    return grokData.reviews;
  }

  // Instant Category-Appropriate Fallback Reviews
  const cat = (product.categoryKey || '').toLowerCase();

  if (cat.includes('electronic')) {
    return [
      { user: 'Rahul S., Verified Buyer', rating: 5, text: 'Ultra fast 8-minute delivery! Battery backup matches specs.', date: '2 days ago' },
      { user: 'Priya M., Tech Reviewer', rating: 5, text: 'Genuine product in sealed packaging. Audio clarity is phenomenal.', date: 'Yesterday' }
    ];
  } else if (cat.includes('pet')) {
    return [
      { user: 'Ananya P., Pet Parent', rating: 5, text: 'My dog loved the kibbles immediately! Fresh batch with 2026 expiry.', date: '3 days ago' },
      { user: 'Dr. Vikram, Vet Specialist', rating: 5, text: 'Balanced nutritional profile and vet-approved ingredients.', date: '1 week ago' }
    ];
  } else if (cat.includes('dairy') || cat.includes('veggie') || cat.includes('fruit')) {
    return [
      { user: 'Sunita K., Home Chef', rating: 5, text: 'Chilled delivery in cold bag! Super fresh farm harvest quality.', date: 'Today' },
      { user: 'Amit V., Verified Buyer', rating: 5, text: 'Soft, unadulterated & packaged fresh this morning.', date: 'Yesterday' }
    ];
  }

  return [
    { user: 'Neha R., Verified Buyer', rating: 5, text: '100% genuine product delivered in under 8 minutes.', date: '2 days ago' },
    { user: 'Siddharth M., Top Reviewer', rating: 5, text: 'Great quality and excellent value for money.', date: '4 days ago' }
  ];
}
