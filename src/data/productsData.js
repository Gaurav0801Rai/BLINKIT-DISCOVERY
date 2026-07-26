// Comprehensive Product Database with 35-40 Products Per Category across All 25 Store Departments

export const getFallbackProductImage = (productName = '', categoryKey = '') => {
  const name = (productName || '').toLowerCase();
  const cat = (categoryKey || '').toLowerCase();

  // Fruit Specifics
  if (name.includes('mango')) return 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80';
  if (name.includes('apple')) return 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80';
  if (name.includes('banana')) return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=80';
  if (name.includes('avocado')) return 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80';
  if (name.includes('orange') || name.includes('mosambi')) return 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80';
  if (name.includes('blueberry') || name.includes('berry')) return 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&auto=format&fit=crop&q=80';
  if (name.includes('strawberry')) return 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&auto=format&fit=crop&q=80';
  if (name.includes('watermelon')) return 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=400&auto=format&fit=crop&q=80';
  if (name.includes('muskmelon') || name.includes('kharbooja') || name.includes('melon')) return 'https://images.unsplash.com/photo-1598170845058-12ef4a457939?w=400&auto=format&fit=crop&q=80';
  if (name.includes('grape')) return 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&auto=format&fit=crop&q=80';
  if (name.includes('pineapple')) return 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&auto=format&fit=crop&q=80';
  if (name.includes('papaya')) return 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&auto=format&fit=crop&q=80';
  if (name.includes('guava') || name.includes('pear')) return 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&auto=format&fit=crop&q=80';
  if (name.includes('kiwi')) return 'https://images.unsplash.com/photo-1585059819970-3136861615e9?w=400&auto=format&fit=crop&q=80';
  if (name.includes('pomegranate') || name.includes('anaar')) return 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&auto=format&fit=crop&q=80';
  if (name.includes('dragon')) return 'https://images.unsplash.com/photo-1527325678964-54921646bc9d?w=400&auto=format&fit=crop&q=80';

  // Vegetable Specifics
  if (name.includes('tomato')) return 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80';
  if (name.includes('onion')) return 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&auto=format&fit=crop&q=80';
  if (name.includes('potato')) return 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=80';
  if (name.includes('broccoli')) return 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&auto=format&fit=crop&q=80';
  if (name.includes('capsicum')) return 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&auto=format&fit=crop&q=80';
  if (name.includes('mushroom')) return 'https://images.unsplash.com/photo-1504470695779-75300268aa0e?w=400&auto=format&fit=crop&q=80';

  // Staples / Dal / Oil
  if (name.includes('toor dal')) return 'https://images.unsplash.com/photo-1585996877717-b71a2d137b01?w=400&auto=format&fit=crop&q=80';
  if (name.includes('moong dal')) return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80';
  if (name.includes('chana dal')) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=80';
  if (name.includes('masoor dal')) return 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&auto=format&fit=crop&q=80';
  if (name.includes('atta') || name.includes('flour')) return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80';
  if (name.includes('rice') || name.includes('basmati')) return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
  if (name.includes('oil') || name.includes('ghee') || name.includes('masala') || cat.includes('spices')) return 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80';

  // Category Defaults
  if (cat.includes('pet')) return 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('baby')) return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('dairy')) return 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('bakery')) return 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('snack')) return 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('sweet') || cat.includes('chocolate')) return 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('beverage') || cat.includes('drink')) return 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('tea') || cat.includes('coffee')) return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('skincare') || cat.includes('cosmetic') || cat.includes('bath')) return 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('pharma') || cat.includes('wellness')) return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('cleaner')) return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('electronic')) return 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('stationery')) return 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('book')) return 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('jewel')) return 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('spiritual')) return 'https://images.unsplash.com/photo-1608797178974-15b35a640536?w=400&auto=format&fit=crop&q=80';
  if (cat.includes('sport')) return 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&auto=format&fit=crop&q=80';

  // Reliable, clean fallback card matching reference prototype style
  const labelText = (productName || 'Blinkit Product').replace(/[^\w\s]/gi, '').split(' ').slice(0, 3).join(' ');
  return `https://placehold.co/400x400/E7F1EF/0C831F?text=${encodeURIComponent(labelText)}`;
};

// Helper function to build 36 items per category
const generateExpandedCategoryItems = (categoryKey, categoryName, baseItems) => {
  const result = [];
  const targetCount = 36; // 36 items per category

  // First add base items
  baseItems.forEach((item, i) => {
    result.push({
      id: `${categoryKey}_prod_${result.length + 1}`,
      name: item.name,
      weight: item.weight || '1 unit',
      price: item.price,
      originalPrice: Math.round(item.price * 1.25),
      discount: `${Math.round(12 + (i * 3) % 25)}% OFF`,
      rating: (4.6 + (i % 4) * 0.1).toFixed(1),
      ratingCount: 420 + i * 115,
      repeatPurchasePct: 38 + (i * 5) % 48,
      categoryKey,
      categoryName,
      brand: item.brand || 'Blinkit Assured',
      image: item.image || getFallbackProductImage(item.name, categoryKey),
      description: item.desc || `100% authentic ${item.name} for 8-minute express delivery.`
    });
  });

  // Generate variations (Organic, Value Packs, Combo Packs, Bulk Packs) to reach target count
  const modifiers = [
    { prefix: 'Organic', weightSuffix: ' (Organic Pack)', priceMult: 1.2 },
    { prefix: 'Value Family Pack', weightSuffix: ' (Bulk Saver)', priceMult: 1.8 },
    { prefix: 'Premium Select', weightSuffix: ' (Gourmet Edition)', priceMult: 1.35 },
    { prefix: 'Express Fresh', weightSuffix: ' (Daily Harvest)', priceMult: 1.1 }
  ];

  let modIdx = 0;
  let baseIdx = 0;

  while (result.length < targetCount && baseItems.length > 0) {
    const baseItem = baseItems[baseIdx % baseItems.length];
    const mod = modifiers[modIdx % modifiers.length];

    const newName = `${mod.prefix} ${baseItem.name}`;
    const newPrice = Math.round(baseItem.price * mod.priceMult);

    result.push({
      id: `${categoryKey}_prod_${result.length + 1}`,
      name: newName,
      weight: `${baseItem.weight}${mod.weightSuffix}`,
      price: newPrice,
      originalPrice: Math.round(newPrice * 1.24),
      discount: `${Math.round(15 + (result.length * 3) % 20)}% OFF`,
      rating: (4.7 + (result.length % 3) * 0.1).toFixed(1),
      ratingCount: 510 + result.length * 85,
      repeatPurchasePct: 40 + (result.length * 4) % 45,
      categoryKey,
      categoryName,
      brand: baseItem.brand || 'Blinkit Select',
      image: baseItem.image || getFallbackProductImage(baseItem.name, categoryKey),
      description: `Premium grade ${newName} delivered fresh to your doorstep in 8 minutes.`
    });

    baseIdx++;
    if (baseIdx % baseItems.length === 0) {
      modIdx++;
    }
  }

  return result;
};

export const PRODUCTS_DATABASE = [
  // 1. VEGETABLES (fresh-veggies) — 36 Items
  ...generateExpandedCategoryItems('fresh-veggies', 'Vegetables', [
    { name: 'Hybrid Red Tomatoes 500g', price: 24, weight: '500 g', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Red Cooking Onions 1kg', price: 38, weight: '1 kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&auto=format&fit=crop&q=80' },
    { name: 'New Crop Potatoes 1kg', price: 32, weight: '1 kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Green Broccoli 250g', price: 45, weight: '250 g', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&auto=format&fit=crop&q=80' },
    { name: 'Green Capsicum 250g', price: 28, weight: '250 g', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&auto=format&fit=crop&q=80' },
    { name: 'Button Mushrooms 200g', price: 55, weight: '200 g', image: 'https://images.unsplash.com/photo-1504470695779-75300268aa0e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh English Cucumber 500g', price: 30, weight: '500 g', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&auto=format&fit=crop&q=80' },
    { name: 'Orange Carrots 500g', price: 35, weight: '500 g', image: 'https://images.unsplash.com/photo-1598170845058-12ef4a457939?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Baby Spinach Palak 250g', price: 22, weight: '250 g', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop&q=80' },
    { name: 'Cauliflower Gobi 1 unit', price: 40, weight: '1 unit', image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 2. FRUITS (fresh-fruits) — 36 Items
  ...generateExpandedCategoryItems('fresh-fruits', 'Fruits', [
    { name: 'Alphonso Mangoes 1kg', price: 299, weight: '1 kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fuji Red Apples 4 Pack', price: 140, weight: '4 units', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80' },
    { name: 'Robusta Bananas 1kg', price: 55, weight: '1 kg', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Hass Fresh Avocados 2 Pack', price: 199, weight: '2 units', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80' },
    { name: 'Nagpur Oranges 1kg', price: 85, weight: '1 kg', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Green Kiwis 3 Pack', price: 110, weight: '3 units', image: 'https://images.unsplash.com/photo-1585059819970-3136861615e9?w=400&auto=format&fit=crop&q=80' },
    { name: 'Pomegranate Anaar 1kg', price: 180, weight: '1 kg', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&auto=format&fit=crop&q=80' },
    { name: 'Black Seedless Grapes 500g', price: 95, weight: '500 g', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&auto=format&fit=crop&q=80' },
    { name: 'Sweet Pineapple 1 unit', price: 75, weight: '1 unit', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&auto=format&fit=crop&q=80' },
    { name: 'Papaya Whole 1 unit', price: 60, weight: '1 unit', image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Strawberries 200g', price: 149, weight: '200 g', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&auto=format&fit=crop&q=80' },
    { name: 'Watermelon Whole 2-3kg', price: 89, weight: '1 unit', image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 3. STAPLES (staples) — 36 Items
  ...generateExpandedCategoryItems('staples', 'Atta, Rice & Dal', [
    { name: 'Premium Toor Dal Unpolished 1kg', price: 152, weight: '1 kg', image: 'https://images.unsplash.com/photo-1585996877717-b71a2d137b01?w=400&auto=format&fit=crop&q=80' },
    { name: 'Premium Moong Dal Yellow 1kg', price: 161, weight: '1 kg', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Premium Chana Dal 1kg', price: 110, weight: '1 kg', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Premium Masoor Dal Red 1kg', price: 125, weight: '1 kg', image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&auto=format&fit=crop&q=80' },
    { name: 'Aashirvaad Shudh Chakki Atta 5kg', price: 275, weight: '5 kg', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fortune Everyday Basmati Rice 5kg', price: 499, weight: '5 kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 4. SPICES & OILS (spices-oils) — 36 Items
  ...generateExpandedCategoryItems('spices-oils', 'Oil, Ghee & Masala', [
    { name: 'Fortune Kachi Ghani Mustard Oil 1L', price: 165, weight: '1 L', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80' },
    { name: 'Amul Pure Cow Ghee 1L', price: 620, weight: '1 L', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Tata Sampann Turmeric Haldi Powder 200g', price: 58, weight: '200 g', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80' },
    { name: 'MDH Deggi Mirch Red Chilli 100g', price: 78, weight: '100 g', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80' },
    { name: 'Everest Garam Masala 100g', price: 85, weight: '100 g', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 5. DAIRY & BREAD (dairy-bread) — 36 Items
  ...generateExpandedCategoryItems('dairy-bread', 'Dairy, Bread & Eggs', [
    { name: 'Amul Taaza Toned Fresh Milk 500ml', price: 27, weight: '500 ml', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80' },
    { name: 'Britannia Whole Wheat Brown Bread 400g', price: 50, weight: '400 g', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { name: 'Amul Pasteurised Salted Butter 100g', price: 58, weight: '100 g', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Malai Cottage Cheese Paneer 200g', price: 90, weight: '200 g', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80' },
    { name: 'Farm Fresh White Eggs (6 Pack)', price: 48, weight: '6 units', image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 6. BAKERY (bakery) — 36 Items
  ...generateExpandedCategoryItems('bakery', 'Bakery & Biscuits', [
    { name: 'Sunfeast Dark Fantasy Choco Fills 75g', price: 85, weight: '75 g', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80' },
    { name: 'Britannia Milk Bikis Biscuits 100g', price: 25, weight: '100 g', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Butter Garlic Rusk Toast 200g', price: 45, weight: '200 g', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { name: 'Oreo Original Vanilla Cream Biscuits 120g', price: 35, weight: '120 g', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 7. PHARMACY (pharma) — 36 Items
  ...generateExpandedCategoryItems('pharma', 'Pharmacy & Health', [
    { name: 'Dolo 650mg Paracetamol Tablets (15s)', price: 32, weight: '15 tablets', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Dettol Antiseptic Liquid 550ml', price: 215, weight: '550 ml', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Volini Instant Pain Relief Spray 100g', price: 245, weight: '100 g', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&auto=format&fit=crop&q=80' },
    { name: 'Vicks Vaporub Cold Relief Ointment 50g', price: 145, weight: '50 g', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 8. WELLNESS (wellness) — 36 Items
  ...generateExpandedCategoryItems('wellness', 'Gym & Supplements', [
    { name: 'MuscleBlaze 100% Whey Protein 1kg', price: 1899, weight: '1 kg', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' },
    { name: 'Raw California Almonds 200g', price: 240, weight: '200 g', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { name: 'Optimum Nutrition Gold Standard Whey 1kg', price: 3299, weight: '1 kg', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 9. SNACKS (snacks) — 36 Items
  ...generateExpandedCategoryItems('snacks', 'Chips & Snacks', [
    { name: 'Lays Spanish Tomato Chips 50g', price: 20, weight: '50 g', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Kurkure Masala Munch 85g', price: 20, weight: '85 g', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Act II Butter Popcorn 100g', price: 40, weight: '100 g', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Haldirams Bhujia Sev Namkeen 400g', price: 115, weight: '400 g', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 10. SWEETS (sweets) — 36 Items
  ...generateExpandedCategoryItems('sweets', 'Sweets & Chocolates', [
    { name: 'Cadbury Dairy Milk Silk Chocolate 150g', price: 175, weight: '150 g', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Haldirams Gulab Jamun Tin 1kg', price: 240, weight: '1 kg', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Ferrero Rocher Chocolates 16 Pcs', price: 499, weight: '200 g', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 11. BEVERAGES (beverages) — 36 Items
  ...generateExpandedCategoryItems('beverages', 'Drinks & Juices', [
    { name: 'Real 100% Pomegranate Juice 1L', price: 130, weight: '1 L', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80' },
    { name: 'Red Bull Energy Drink 250ml', price: 125, weight: '250 ml', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=80' },
    { name: 'Coca-Cola Zero Sugar Can 300ml', price: 40, weight: '300 ml', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 12. TEA & COFFEE (tea-coffee) — 36 Items
  ...generateExpandedCategoryItems('tea-coffee', 'Gourmet Tea & Coffee', [
    { name: 'Nescafe Classic Instant Coffee 100g', price: 320, weight: '100 g', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80' },
    { name: 'Taj Mahal Premium Leaf Tea 500g', price: 380, weight: '500 g', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80' },
    { name: 'Sleepy Owl Cold Brew Concentrate 200ml', price: 150, weight: '200 ml', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 13. SKINCARE (skincare) — 36 Items
  ...generateExpandedCategoryItems('skincare', 'Skincare & Cleansers', [
    { name: 'Cetaphil Gentle Skin Cleanser 125ml', price: 335, weight: '125 ml', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' },
    { name: 'Nivea Soft Light Moisturiser 100ml', price: 199, weight: '100 ml', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' },
    { name: 'Neutrogena Ultra Sheer Sunscreen SPF 50+', price: 260, weight: '30 g', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 14. COSMETICS (cosmetics) — 36 Items
  ...generateExpandedCategoryItems('cosmetics', 'Cosmetics & Makeup', [
    { name: 'Maybelline Color Sensational Matte Lipstick', price: 349, weight: '3.9 g', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
    { name: 'Lakme Absolute Liquid Foundation 30ml', price: 450, weight: '30 ml', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
    { name: 'Sugar Cosmetics Waterproof Intense Kajal', price: 249, weight: '0.35 g', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 15. BATH & BODY (bath-body) — 36 Items
  ...generateExpandedCategoryItems('bath-body', 'Bath & Body Wash', [
    { name: 'The Body Shop British Rose Body Wash 250ml', price: 399, weight: '250 ml', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' },
    { name: 'Pears Soft & Fresh Body Wash 250ml', price: 180, weight: '250 ml', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' },
    { name: 'Dettol Original Bath Soap Bar (4 Pack)', price: 160, weight: '4x125g', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 16. BABY CARE (baby-care) — 36 Items
  ...generateExpandedCategoryItems('baby-care', 'Baby Care & Diapers', [
    { name: 'Pampers All Round Protection Tape Diapers (M 44s)', price: 749, weight: '44 diapers', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
    { name: 'Huggies Wonder Pants Diaper (L 38s)', price: 699, weight: '38 diapers', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
    { name: 'Mee Mee Gentle Baby Wipes Aloe Vera 72s', price: 145, weight: '72 wipes', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Himalaya Gentle Baby Shampoo 200ml', price: 185, weight: '200 ml', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 17. CLEANERS (cleaners) — 36 Items
  ...generateExpandedCategoryItems('cleaners', 'Cleaners & Detergents', [
    { name: 'Lizol Citrus Disinfectant Floor Cleaner 1L', price: 199, weight: '1 L', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Surf Excel Matic Liquid Detergent 1L', price: 230, weight: '1 L', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
    { name: 'Vim Dishwash Gel Lemon 750ml', price: 140, weight: '750 ml', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 18. ELECTRONICS (electronics) — 36 Items
  ...generateExpandedCategoryItems('electronics', 'Electronics & Audio', [
    { name: 'Noise VS102 Truly Wireless Earbuds', price: 999, weight: '1 unit', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
    { name: 'Boat Bassheads 100 Wired Headphones', price: 399, weight: '1 unit', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Portronics 20W Type-C Fast Charger Adaptor', price: 499, weight: '1 unit', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&auto=format&fit=crop&q=80' },
    { name: 'Ambrane 10000mAh Slim Power Bank', price: 899, weight: '1 unit', image: 'https://images.unsplash.com/photo-1609592424074-b5704a29a43a?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 19. STATIONERY (stationery) — 36 Items
  ...generateExpandedCategoryItems('stationery', 'Stationery & Games', [
    { name: 'Classmate Spiral Long Notebook 300 Pages', price: 125, weight: '1 notebook', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { name: 'Faber Castell 12 Tri-Grip Color Pencils Set', price: 110, weight: '1 set', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { name: 'Parker Vector Blue Ballpoint Pen', price: 299, weight: '1 pen', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 20. PET CARE (pet-care) — 36 Items
  ...generateExpandedCategoryItems('pet-care', 'Pet Food & Kibble', [
    { name: 'Pedigree Adult Dog Food Chicken & Rice 3kg', price: 680, weight: '3 kg', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
    { name: 'Whiskas Ocean Fish Adult Dry Cat Food 1.2kg', price: 410, weight: '1.2 kg', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80' },
    { name: 'Royal Canin Mini Adult Dog Food 800g', price: 790, weight: '800 g', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 21. PET TOYS (pet-toys) — 36 Items
  ...generateExpandedCategoryItems('pet-toys', 'Pet Toys & Grooming', [
    { name: 'Captain Zack Anti-Tick Pet Shampoo 200ml', price: 240, weight: '200 ml', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Barkbutler Rubber Dog Chew Ball Toy', price: 299, weight: '1 unit', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&auto=format&fit=crop&q=80' },
    { name: 'Pethead Soft Pin Dog De-Shedding Brush', price: 349, weight: '1 brush', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 22. BOOKS (books) — 36 Items
  ...generateExpandedCategoryItems('books', 'Books & Media', [
    { name: 'Atomic Habits by James Clear', price: 499, weight: '1 book', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { name: 'The Psychology of Money by Morgan Housel', price: 350, weight: '1 book', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { name: 'Ikigai: The Japanese Secret to a Long Life', price: 320, weight: '1 book', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 23. JEWELLERY (jewellery) — 36 Items
  ...generateExpandedCategoryItems('jewellery', 'Fashion Jewellery', [
    { name: 'Zaveri Pearls Cubic Zirconia Stud Earrings', price: 399, weight: '1 pair', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80' },
    { name: '18K Gold Plated Minimalist Pendant Chain', price: 499, weight: '1 unit', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80' },
    { name: 'Traditional Kundan Bangle Bracelet Set', price: 599, weight: 'Set of 4', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 24. SPIRITUAL (spiritual) — 36 Items
  ...generateExpandedCategoryItems('spiritual', 'Spiritual Needs & Pooja', [
    { name: 'Cycle Pure Agarbatti Chandan 250g', price: 145, weight: '250 g', image: 'https://images.unsplash.com/photo-1608797178974-15b35a640536?w=400&auto=format&fit=crop&q=80' },
    { name: 'Brass Handcrafted Diya Oil Lamp', price: 299, weight: '1 unit', image: 'https://images.unsplash.com/photo-1608797178974-15b35a640536?w=400&auto=format&fit=crop&q=80' },
    { name: 'Organic Camphor Kapur Tablets 100g', price: 180, weight: '100 g', image: 'https://images.unsplash.com/photo-1608797178974-15b35a640536?w=400&auto=format&fit=crop&q=80' }
  ]),

  // 25. SPORTS (sports_outdoor) — 36 Items
  ...generateExpandedCategoryItems('sports_outdoor', 'Sports & Outdoor Games', [
    { name: 'Yonex GR 303 Badminton Racket Set', price: 999, weight: 'Set of 2', image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&auto=format&fit=crop&q=80' },
    { name: 'Cosco FIFA Approved Match Football Size 5', price: 699, weight: '1 unit', image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&auto=format&fit=crop&q=80' },
    { name: 'Heavy Rubber Resistance Band Set (5 Bands)', price: 450, weight: '1 set', image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&auto=format&fit=crop&q=80' }
  ])
];
