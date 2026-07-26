// Authentic Comprehensive Product Database with 20-25 Products per Category & Distinct Accurate Images

export const getFallbackProductImage = (productName = '', categoryKey = '') => {
  const lowerName = productName.toLowerCase();
  const lowerCat = categoryKey.toLowerCase();

  // Strict Photo Mappings
  if (lowerName.includes('toor dal')) return 'https://images.unsplash.com/photo-1585996877717-b71a2d137b01?w=400&auto=format&fit=crop&q=80';
  if (lowerName.includes('moong dal')) return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80';
  if (lowerName.includes('chana dal')) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=80';
  if (lowerName.includes('masoor dal')) return 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&auto=format&fit=crop&q=80';
  if (lowerName.includes('atta') || lowerName.includes('flour')) return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80';
  if (lowerName.includes('rice') || lowerName.includes('basmati')) return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
  
  if (lowerCat.includes('pet-care') || lowerCat.includes('pet-toys') || lowerName.includes('dog') || lowerName.includes('cat') || lowerName.includes('pet')) {
    return 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('baby') || lowerName.includes('diaper') || lowerName.includes('wipes')) {
    return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('dairy') || lowerName.includes('milk') || lowerName.includes('paneer') || lowerName.includes('butter')) {
    return 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('veggie') || lowerName.includes('tomato') || lowerName.includes('onion')) {
    return 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('fruit') || lowerName.includes('mango') || lowerName.includes('apple')) {
    return 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('electronic') || lowerName.includes('earbud') || lowerName.includes('charger')) {
    return 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('cosmetic') || lowerCat.includes('skincare') || lowerName.includes('lipstick')) {
    return 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80';
  }
  if (lowerCat.includes('pharma') || lowerName.includes('tablets') || lowerName.includes('capsule')) {
    return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80';
  }

  return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80';
};

const makeCategorySet = (categoryKey, categoryName, items) => {
  return items.map((item, i) => ({
    id: `${categoryKey}_prod_${i + 1}`,
    name: item.name,
    weight: item.weight || '1 unit',
    price: item.price,
    originalPrice: Math.round(item.price * 1.22),
    discount: `${Math.round(12 + (i * 4) % 22)}% OFF`,
    rating: (4.6 + (i % 4) * 0.1).toFixed(1),
    ratingCount: 420 + i * 110,
    repeatPurchasePct: 38 + (i * 6) % 48,
    categoryKey,
    categoryName,
    brand: item.brand || 'Blinkit Assured',
    image: item.image || getFallbackProductImage(item.name, categoryKey),
    description: item.desc || `100% authentic ${item.name} for 8-minute express delivery.`
  }));
};

export const PRODUCTS_DATABASE = [
  // 1. PET CARE (20 Items)
  ...makeCategorySet('pet-care', 'Pet Food & Kibble', [
    { name: 'Pedigree Adult Dog Food Chicken & Rice 3kg', price: 680, weight: '3 kg', brand: 'Pedigree', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
    { name: 'Whiskas Ocean Fish Adult Dry Cat Food 1.2kg', price: 410, weight: '1.2 kg', brand: 'Whiskas', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80' },
    { name: 'Royal Canin Mini Adult Dog Food 800g', price: 790, weight: '800 g', brand: 'Royal Canin' },
    { name: 'Drools Chicken & Egg Adult Dog Food 3kg', price: 550, weight: '3 kg', brand: 'Drools' },
    { name: 'Sheba Rich Premium Wet Cat Food Tuna 70g', price: 65, weight: '70 g', brand: 'Sheba' },
    { name: 'Meatables Real Chicken Crunchy Dog Treats 100g', price: 199, weight: '100 g', brand: 'Meatables' },
    { name: 'Purepet Mackerel Adult Dry Cat Food 1kg', price: 230, weight: '1 kg', brand: 'Purepet' },
    { name: 'Dentastix Daily Dog Dental Chews (Large 7s)', price: 260, weight: '7 sticks', brand: 'Pedigree' },
    { name: 'Chappi Adult Dry Dog Food Chicken 2.8kg', price: 430, weight: '2.8 kg', brand: 'Chappi' },
    { name: 'Goodies Energy Dog Treats Mutton Flavour 125g', price: 175, weight: '125 g', brand: 'Goodies' },
    { name: 'Whiskas Wet Cat Food Chicken in Gravy 85g', price: 50, weight: '85 g', brand: 'Whiskas' },
    { name: 'Drools Cat Biscuit Treats Salmon 60g', price: 120, weight: '60 g', brand: 'Drools' },
    { name: 'Pedigree Puppy Dry Dog Food Milk & Chicken 1.2kg', price: 340, weight: '1.2 kg', brand: 'Pedigree' },
    { name: 'Bow Jerky Dog Treats Beef Sticks 80g', price: 165, weight: '80 g', brand: 'Bow Jerky' },
    { name: 'Purepet Biscuit Dog Treats Real Chicken 500g', price: 190, weight: '500 g', brand: 'Purepet' },
    { name: 'Meatables Freeze Dried Chicken Liver Treats 50g', price: 299, weight: '50 g', brand: 'Meatables' },
    { name: 'Whiskas Kitten Food Tuna Gravy 85g', price: 55, weight: '85 g', brand: 'Whiskas' },
    { name: 'Drools Puppy Starter Food 1kg', price: 399, weight: '1 kg', brand: 'Drools' },
    { name: 'Pedigree Pro High Protein Dog Food 3kg', price: 950, weight: '3 kg', brand: 'Pedigree' },
    { name: 'Royal Canin Kitten Instinctive Wet Food 85g', price: 90, weight: '85 g', brand: 'Royal Canin' }
  ]),

  // 2. PET TOYS & GROOMING (20 Items)
  ...makeCategorySet('pet-toys', 'Pet Toys & Grooming', [
    { name: 'Captain Zack Anti-Tick Pet Shampoo 200ml', price: 240, weight: '200 ml', brand: 'Captain Zack', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Barkbutler Rubber Dog Chew Ball Toy', price: 299, weight: '1 unit', brand: 'Barkbutler', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&auto=format&fit=crop&q=80' },
    { name: 'Pethead Soft Pin Dog De-Shedding Brush', price: 349, weight: '1 brush', brand: 'Pethead' },
    { name: 'Catnip Feather Teaser Wand Toy for Cats', price: 180, weight: '1 unit', brand: 'Trixie' },
    { name: 'Lavender Odor Control Cat Litter Clumping 5kg', price: 450, weight: '5 kg', brand: 'Petkit' },
    { name: 'Hills Grooming Paw Wipes Aloe Vera 80s', price: 220, weight: '80 wipes', brand: 'Hills' },
    { name: 'Soft Nylon Dog Harness & Leash Set Red', price: 399, weight: '1 set', brand: 'Trixie' },
    { name: 'Pet Odor Neutralizing Spray Organic 250ml', price: 280, weight: '250 ml', brand: 'Captain Zack' },
    { name: 'Squeaky Plush Duck Chew Toy for Puppies', price: 199, weight: '1 unit', brand: 'Barkbutler' },
    { name: 'Cat Scratching Post Sisal Rope Tower', price: 890, weight: '1 unit', brand: 'Trixie' },
    { name: 'Pet Nail Clipper with Safety Guard', price: 250, weight: '1 unit', brand: 'Pethead' },
    { name: 'Tick & Flea Prevention Collar for Dogs', price: 320, weight: '1 unit', brand: 'Captain Zack' },
    { name: 'Dry Bath Waterless Foam Pet Shampoo 150ml', price: 295, weight: '150 ml', brand: 'Captain Zack' },
    { name: 'Interactive Food Dispensing Dog Puzzle Toy', price: 499, weight: '1 unit', brand: 'Barkbutler' },
    { name: 'Bentonite Unscented Cat Litter 10kg', price: 699, weight: '10 kg', brand: 'Petkit' },
    { name: 'Dog Ear Cleaning Solution Tea Tree 100ml', price: 210, weight: '100 ml', brand: 'Captain Zack' },
    { name: 'Pet Dental Spray Fresh Breath 100ml', price: 245, weight: '100 ml', brand: 'Hills' },
    { name: 'Cat Fur Remover Roller Brush', price: 299, weight: '1 unit', brand: 'Trixie' },
    { name: 'Pet Cooling Gel Mat 40x50cm', price: 799, weight: '1 unit', brand: 'Petkit' },
    { name: 'Adjustable Cat Collar Bell Nylon Pink', price: 120, weight: '1 unit', brand: 'Trixie' }
  ]),

  // 3. BABY CARE (20 Items)
  ...makeCategorySet('baby-care', 'Baby Care & Diapers', [
    { name: 'Pampers All Round Protection Tape Diapers (M 44s)', price: 749, weight: '44 diapers', brand: 'Pampers', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' },
    { name: 'Huggies Wonder Pants Diaper (L 38s)', price: 699, weight: '38 diapers', brand: 'Huggies' },
    { name: 'Mee Mee Gentle Baby Wipes Aloe Vera 72s', price: 145, weight: '72 wipes', brand: 'Mee Mee', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Himalaya Gentle Baby Shampoo 200ml', price: 185, weight: '200 ml', brand: 'Himalaya' },
    { name: 'Sebamed Baby Lotion Sensitive 200ml', price: 540, weight: '200 ml', brand: 'Sebamed' },
    { name: 'Johnson Baby Powder Blossoms 200g', price: 210, weight: '200 g', brand: 'Johnson' },
    { name: 'Mamaearth Gentle Cleansing Baby Wash 400ml', price: 349, weight: '400 ml', brand: 'Mamaearth' },
    { name: 'Mee Mee Hypoallergenic Baby Laundry Detergent 1L', price: 399, weight: '1 L', brand: 'Mee Mee' },
    { name: 'Pampers Premium Care Diaper Pants (S 48s)', price: 820, weight: '48 diapers', brand: 'Pampers' },
    { name: 'Himalaya Baby Massage Oil Sesame & Olive 200ml', price: 220, weight: '200 ml', brand: 'Himalaya' },
    { name: 'Johnson Baby Cream Moisturizing 100g', price: 160, weight: '100 g', brand: 'Johnson' },
    { name: 'Mee Mee Anti-Colic Feeding Bottle 240ml', price: 275, weight: '240 ml', brand: 'Mee Mee' },
    { name: 'Huggies Newborn Taped Diapers (XS 24s)', price: 320, weight: '24 diapers', brand: 'Huggies' },
    { name: 'Sebamed Diaper Rash Cream 100ml', price: 480, weight: '100 ml', brand: 'Sebamed' },
    { name: 'Himalaya Extra Soft Baby Wipes 72s', price: 135, weight: '72 wipes', brand: 'Himalaya' },
    { name: 'Mamaearth Plant Based Baby Laundry Cleaner 1L', price: 449, weight: '1 L', brand: 'Mamaearth' },
    { name: 'Mee Mee Silicone Soother Pacifier 0-6M', price: 150, weight: '1 unit', brand: 'Mee Mee' },
    { name: 'Johnson Baby Oil Pure Mineral 200ml', price: 240, weight: '200 ml', brand: 'Johnson' },
    { name: 'Pampers Night Pants Extra Absorb (L 30s)', price: 799, weight: '30 diapers', brand: 'Pampers' },
    { name: 'Himalaya Rash Relief Cream Almond 50g', price: 110, weight: '50 g', brand: 'Himalaya' }
  ]),

  // 4. DAIRY, BREAD & EGGS (20 Items)
  ...makeCategorySet('dairy-bread', 'Dairy, Bread & Eggs', [
    { name: 'Amul Taaza Toned Fresh Milk 500ml', price: 27, weight: '500 ml', brand: 'Amul', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80' },
    { name: 'Britannia Whole Wheat Brown Bread 400g', price: 50, weight: '400 g', brand: 'Britannia', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { name: 'Amul Pasteurised Salted Butter 100g', price: 58, weight: '100 g', brand: 'Amul', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Malai Cottage Cheese Paneer 200g', price: 90, weight: '200 g', brand: 'Mother Dairy', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80' },
    { name: 'Farm Fresh White Eggs (6 Pack)', price: 48, weight: '6 units', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=400&auto=format&fit=crop&q=80' },
    { name: 'Mother Dairy Misti Doi Curd 85g', price: 30, weight: '85 g', brand: 'Mother Dairy' },
    { name: 'Epigamia Greek Yogurt Strawberry 85g', price: 60, weight: '85 g', brand: 'Epigamia' },
    { name: 'Amul Gold Full Cream Milk 1L', price: 66, weight: '1 L', brand: 'Amul' },
    { name: 'Modern Multi Grain Sandwich Bread 400g', price: 55, weight: '400 g', brand: 'Modern' },
    { name: 'Nestle Milkmaid Sweetened Condensed Milk 380g', price: 140, weight: '380 g', brand: 'Nestle' },
    { name: 'Mother Dairy Fresh Pouch Curd 400g', price: 35, weight: '400 g', brand: 'Mother Dairy' },
    { name: 'Amul Processed Cheese Slices 200g (10s)', price: 145, weight: '200 g', brand: 'Amul' },
    { name: 'Farm Fresh Brown Omega 3 Eggs (6 Pack)', price: 65, weight: '6 units', brand: 'Farm Fresh' },
    { name: 'Britannia White Sandwich Bread 400g', price: 45, weight: '400 g', brand: 'Britannia' },
    { name: 'Epigamia Natural Plain Greek Yogurt 400g', price: 180, weight: '400 g', brand: 'Epigamia' },
    { name: 'Amul Cow Milk Pouch 500ml', price: 28, weight: '500 ml', brand: 'Amul' },
    { name: 'Mother Dairy Creamy Toned Dahi 200g', price: 25, weight: '200 g', brand: 'Mother Dairy' },
    { name: 'Britannia Cheese Cubes 200g', price: 150, weight: '200 g', brand: 'Britannia' },
    { name: 'Fresh Cream Pack 200ml', price: 70, weight: '200 ml', brand: 'Amul' },
    { name: 'Farm Fresh Brown Organic Eggs (12 Pack)', price: 130, weight: '12 units', brand: 'Farm Fresh' }
  ]),

  // 5. ATTA, RICE & DAL (20 Items)
  ...makeCategorySet('staples', 'Atta, Rice & Dal', [
    { name: 'Premium Toor Dal Unpolished 1kg', price: 152, weight: '1 kg', brand: 'Tata Sampann', image: 'https://images.unsplash.com/photo-1585996877717-b71a2d137b01?w=400&auto=format&fit=crop&q=80' },
    { name: 'Premium Moong Dal Yellow 1kg', price: 161, weight: '1 kg', brand: 'Tata Sampann', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Premium Chana Dal 1kg', price: 110, weight: '1 kg', brand: 'Fortune', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Premium Masoor Dal Red 1kg', price: 125, weight: '1 kg', brand: 'Aashirvaad', image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&auto=format&fit=crop&q=80' },
    { name: 'Aashirvaad Shudh Chakki Atta 5kg', price: 275, weight: '5 kg', brand: 'Aashirvaad', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fortune Everyday Basmati Rice 5kg', price: 499, weight: '5 kg', brand: 'Fortune', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80' },
    { name: 'Organic Rajma Chitra 1kg', price: 180, weight: '1 kg', brand: 'Tata Sampann' },
    { name: 'Kabuli Chana White Chickpeas 1kg', price: 165, weight: '1 kg', brand: 'Fortune' },
    { name: 'Aashirvaad Select Sharbati Atta 5kg', price: 330, weight: '5 kg', brand: 'Aashirvaad' },
    { name: 'India Gate Feast Rozana Basmati Rice 5kg', price: 450, weight: '5 kg', brand: 'India Gate' },
    { name: 'Tata Sampann Urad Dal Whole 1kg', price: 175, weight: '1 kg', brand: 'Tata Sampann' },
    { name: 'Thick Poha Flattened Rice 500g', price: 42, weight: '500 g', brand: 'Fortune' },
    { name: 'Roasted Sooji Semolina 500g', price: 38, weight: '500 g', brand: 'Aashirvaad' },
    { name: 'Chana Besan Gram Flour 1kg', price: 105, weight: '1 kg', brand: 'Tata Sampann' },
    { name: 'Organic Kala Chana Black Chickpeas 1kg', price: 130, weight: '1 kg', brand: 'Tata Sampann' },
    { name: 'Daawat Super Basmati Long Rice 1kg', price: 165, weight: '1 kg', brand: 'Daawat' },
    { name: 'Pillsbury Multigrain Chakki Atta 5kg', price: 310, weight: '5 kg', brand: 'Pillsbury' },
    { name: 'Whole Moong Green Beans 1kg', price: 140, weight: '1 kg', brand: 'Fortune' },
    { name: 'Sona Masoori Raw Rice 5kg', price: 360, weight: '5 kg', brand: 'Fortune' },
    { name: 'Maida Refined Wheat Flour 1kg', price: 45, weight: '1 kg', brand: 'Aashirvaad' }
  ]),

  // 6. FRESH VEGETABLES (20 Items)
  ...makeCategorySet('fresh-veggies', 'Vegetables', [
    { name: 'Hybrid Tomatoes 500g', price: 24, weight: '500 g', brand: 'Fresh Hydroponics', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Red Onions 1kg', price: 38, weight: '1 kg', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&auto=format&fit=crop&q=80' },
    { name: 'New Crop Potatoes 1kg', price: 32, weight: '1 kg', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh Green Broccoli 250g', price: 45, weight: '250 g', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&auto=format&fit=crop&q=80' },
    { name: 'Green Capsicum 250g', price: 28, weight: '250 g', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&auto=format&fit=crop&q=80' },
    { name: 'Button Mushrooms 200g', price: 55, weight: '200 g', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1504470695779-75300268aa0e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fresh English Cucumber 500g', price: 30, weight: '500 g', brand: 'Farm Fresh' },
    { name: 'Orange Carrots 500g', price: 35, weight: '500 g', brand: 'Farm Fresh' },
    { name: 'Fresh Baby Spinach Palak 250g', price: 22, weight: '250 g', brand: 'Farm Fresh' },
    { name: 'Cauliflower Gobi 1 unit', price: 40, weight: '1 unit', brand: 'Farm Fresh' },
    { name: 'Green Chillies 100g', price: 15, weight: '100 g', brand: 'Farm Fresh' },
    { name: 'Fresh Ginger Adrak 200g', price: 35, weight: '200 g', brand: 'Farm Fresh' },
    { name: 'Garlic Lahsun 200g', price: 48, weight: '200 g', brand: 'Farm Fresh' },
    { name: 'Coriander Dhania Leaves 100g', price: 18, weight: '100 g', brand: 'Farm Fresh' },
    { name: 'Lady Finger Bhindi 500g', price: 34, weight: '500 g', brand: 'Farm Fresh' },
    { name: 'Bottle Gourd Lauki 1 unit', price: 29, weight: '1 unit', brand: 'Farm Fresh' },
    { name: 'Sweet Corn Cobs 2 Pack', price: 42, weight: '2 units', brand: 'Farm Fresh' },
    { name: 'Green Peas Matar 500g', price: 65, weight: '500 g', brand: 'Farm Fresh' },
    { name: 'Lemon Nimboo 250g', price: 32, weight: '250 g', brand: 'Farm Fresh' },
    { name: 'Beetroot Chukandar 500g', price: 28, weight: '500 g', brand: 'Farm Fresh' }
  ]),

  // 8. FRESH FRUITS (20 Items)
  ...makeCategorySet('fresh-fruits', 'Fruits', [
    { name: 'Alphonso Mangoes 1kg', price: 299, weight: '1 kg', brand: 'Devgad Organic', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80' },
    { name: 'Fuji Red Apples 4 Pack', price: 140, weight: '4 units', brand: 'Shimla Fresh', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80' },
    { name: 'Robusta Bananas 1kg', price: 55, weight: '1 kg', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Hass Fresh Avocados 2 Pack', price: 199, weight: '2 units', brand: 'Exotic Harvest', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80' },
    { name: 'Nagpur Oranges 1kg', price: 85, weight: '1 kg', brand: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80' },
    { name: 'Green Kiwis 3 Pack', price: 110, weight: '3 units', brand: 'Zespri' },
    { name: 'Pomegranate Anaar 1kg', price: 180, weight: '1 kg', brand: 'Farm Fresh' },
    { name: 'Black Seedless Grapes 500g', price: 95, weight: '500 g', brand: 'Farm Fresh' },
    { name: 'Sweet Pineapple 1 unit', price: 75, weight: '1 unit', brand: 'Farm Fresh' },
    { name: 'Papaya Whole 1 unit', price: 60, weight: '1 unit', brand: 'Farm Fresh' },
    { name: 'Fresh Strawberries 200g', price: 149, weight: '200 g', brand: 'Mahabaleshwar' },
    { name: 'Watermelon Whole 2-3kg', price: 89, weight: '1 unit', brand: 'Farm Fresh' },
    { name: 'Muskmelon Kharbooja 1 unit', price: 65, weight: '1 unit', brand: 'Farm Fresh' },
    { name: 'Imported Blueberries 125g', price: 299, weight: '125 g', brand: 'Driscolls' },
    { name: 'Guava Amrood 1kg', price: 70, weight: '1 kg', brand: 'Farm Fresh' },
    { name: 'Green Pears 4 Pack', price: 130, weight: '4 units', brand: 'Shimla Fresh' },
    { name: 'Custard Apple Sitaphal 500g', price: 120, weight: '500 g', brand: 'Farm Fresh' },
    { name: 'Dragon Fruit Pink 1 unit', price: 99, weight: '1 unit', brand: 'Exotic Harvest' },
    { name: 'Sweet Lime Mosambi 1kg', price: 90, weight: '1 kg', brand: 'Farm Fresh' },
    { name: 'Red Globe Grapes 500g', price: 140, weight: '500 g', brand: 'Farm Fresh' }
  ]),

  // 9. ELECTRONICS (20 Items)
  ...makeCategorySet('electronics', 'Electronics', [
    { name: 'Noise VS102 Truly Wireless Earbuds', price: 999, weight: '1 unit', brand: 'Noise', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
    { name: 'Boat Bassheads 100 Wired Headphones', price: 399, weight: '1 unit', brand: 'Boat', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Portronics 20W Type-C Fast Charger Adaptor', price: 499, weight: '1 unit', brand: 'Portronics', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&auto=format&fit=crop&q=80' },
    { name: 'Ambrane 10000mAh Slim Power Bank', price: 899, weight: '1 unit', brand: 'Ambrane', image: 'https://images.unsplash.com/photo-1609592424074-b5704a29a43a?w=400&auto=format&fit=crop&q=80' },
    { name: 'Boat Wave Call Bluetooth Smartwatch', price: 1499, weight: '1 unit', brand: 'Boat', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80' },
    { name: 'JBL Go 3 Wireless Portable Bluetooth Speaker', price: 2499, weight: '1 unit', brand: 'JBL' },
    { name: 'Mi Type-C Fast Charging Cable 1.5m', price: 269, weight: '1 unit', brand: 'Mi' },
    { name: 'Logitech B100 Optical USB Mouse', price: 349, weight: '1 unit', brand: 'Logitech' },
    { name: 'Philips LED Desk Lamp Touch Control', price: 1199, weight: '1 unit', brand: 'Philips' },
    { name: 'SanDisk 64GB Ultra MicroSD Card', price: 499, weight: '1 unit', brand: 'SanDisk' },
    { name: 'Zebronics Wireless Keyboard & Mouse Combo', price: 899, weight: '1 set', brand: 'Zebronics' },
    { name: 'Realme Buds Q2 TWS Earbuds with ANC', price: 1799, weight: '1 unit', brand: 'Realme' },
    { name: 'Portronics Laptop Stand Foldable Aluminum', price: 699, weight: '1 unit', brand: 'Portronics' },
    { name: 'TP-Link N300 Wi-Fi Router', price: 999, weight: '1 unit', brand: 'TP-Link' },
    { name: 'SYSKA 12W Emergency LED Bulb', price: 299, weight: '1 unit', brand: 'SYSKA' },
    { name: 'Ambrane Braided Type-C to Lightning Cable 1.2m', price: 399, weight: '1 unit', brand: 'Ambrane' },
    { name: 'Boat Rockerz 255 Pro+ Wireless Neckband', price: 1299, weight: '1 unit', brand: 'Boat' },
    { name: 'Noise ColorFit Pulse Smartwatch', price: 1299, weight: '1 unit', brand: 'Noise' },
    { name: 'Wipro Smart Plug 16A Wi-Fi Socket', price: 899, weight: '1 unit', brand: 'Wipro' },
    { name: 'Logitech C270 HD Web Camera', price: 1999, weight: '1 unit', brand: 'Logitech' }
  ]),

  // 10. COSMETICS & MAKEUP (20 Items)
  ...makeCategorySet('cosmetics', 'Cosmetics & Makeup', [
    { name: 'Maybelline Color Sensational Matte Lipstick', price: 349, weight: '3.9 g', brand: 'Maybelline', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
    { name: 'Lakme Absolute Liquid Foundation 30ml', price: 450, weight: '30 ml', brand: 'Lakme' },
    { name: 'Sugar Cosmetics Waterproof Intense Kajal', price: 249, weight: '0.35 g', brand: 'Sugar' },
    { name: 'Faces Canada Weightless Matte Compact Powder', price: 220, weight: '9 g', brand: 'Faces Canada' },
    { name: 'Nykaa Matte to Last Liquid Lipstick', price: 399, weight: '5 ml', brand: 'Nykaa' },
    { name: 'Maybelline Hypercurl Waterproof Mascara', price: 399, weight: '9.2 ml', brand: 'Maybelline' },
    { name: 'Lakme Eyeconic Black Eyeliner Pencil', price: 199, weight: '0.35 g', brand: 'Lakme' },
    { name: 'Swiss Beauty Liquid Concealer 5.6g', price: 229, weight: '5.6 g', brand: 'Swiss Beauty' },
    { name: 'Sugar Contour De Force Eyeshadow Palette', price: 599, weight: '4.2 g', brand: 'Sugar' },
    { name: 'Nykaa Nail Enamel Polish Red 9ml', price: 110, weight: '9 ml', brand: 'Nykaa' },
    { name: 'Maybelline Fit Me Matte Pressed Powder', price: 299, weight: '8 g', brand: 'Maybelline' },
    { name: 'Faces Canada Velvet Matte Lipstick Rose', price: 299, weight: '4 g', brand: 'Faces Canada' },
    { name: 'Lakme 9to5 Primer + Matte Powder Compact', price: 340, weight: '9 g', brand: 'Lakme' },
    { name: 'Swiss Beauty Metallic Liquid Eyeliner Gold', price: 199, weight: '3 ml', brand: 'Swiss Beauty' },
    { name: 'Insight Cosmetics Lip & Cheek Tint Berry', price: 149, weight: '5 g', brand: 'Insight' },
    { name: 'Nykaa BlendMaster Makeup Sponge Blender', price: 199, weight: '1 unit', brand: 'Nykaa' },
    { name: 'Maybelline Superstay Vinyl Ink Liquid Color', price: 599, weight: '4.2 ml', brand: 'Maybelline' },
    { name: 'Sugar Matte As Hell Crayon Lipstick', price: 699, weight: '2.8 g', brand: 'Sugar' },
    { name: 'Lakme Absolute Blush Town Powder Blush', price: 450, weight: '4 g', brand: 'Lakme' },
    { name: 'Faces Canada HD Intense Matte Eyeliner Pen', price: 399, weight: '1.2 ml', brand: 'Faces Canada' }
  ]),

  // 11. PHARMACY & HEALTH (20 Items)
  ...makeCategorySet('pharma', 'Pharmacy & Health', [
    { name: 'Dolo 650mg Paracetamol Tablets (15s)', price: 32, weight: '15 tablets', brand: 'Micro Labs', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
    { name: 'Revital H Daily Health Supplement (30 Caps)', price: 310, weight: '30 caps', brand: 'Sun Pharma' },
    { name: 'Dettol Antiseptic Liquid 550ml', price: 215, weight: '550 ml', brand: 'Dettol' },
    { name: 'Volini Instant Pain Relief Spray 100g', price: 245, weight: '100 g', brand: 'Volini' },
    { name: 'Vicks Vaporub Cold Relief Ointment 50g', price: 145, weight: '50 g', brand: 'Vicks' },
    { name: 'Bandal Washproof Adhesive Bandages 20s', price: 50, weight: '20 strips', brand: 'Johnson' },
    { name: 'Electral ORS Energy Rehydration Powder 21.8g', price: 22, weight: '1 sachet', brand: 'FDC' },
    { name: 'Savlon Antiseptic Disinfectant Liquid 500ml', price: 180, weight: '500 ml', brand: 'Savlon' },
    { name: 'Celin 500mg Vitamin C Chewable Tablets (15s)', price: 38, weight: '15 tablets', brand: 'Abbott' },
    { name: 'Iodex Rapid Action Pain Relief Balm 40g', price: 130, weight: '40 g', brand: 'Iodex' },
    { name: 'Strepsils Honey & Lemon Sore Throat Lozenges 8s', price: 36, weight: '8 lozenges', brand: 'Reckitt' },
    { name: 'Benadryl Cough Syrup Diphenhydramine 100ml', price: 115, weight: '100 ml', brand: 'Johnson' },
    { name: 'Limcee 500mg Orange Vitamin C Tablets (15s)', price: 25, weight: '15 tablets', brand: 'Abbott' },
    { name: 'Crocin 650mg Fast Acting Pain Relief 15s', price: 30, weight: '15 tablets', brand: 'GSK' },
    { name: 'Moov Fast Pain Relief Ointment 50g', price: 160, weight: '50 g', brand: 'Reckitt' },
    { name: 'Digene Acidity Relief Gel Antacid Syrup 200ml', price: 140, weight: '200 ml', brand: 'Abbott' },
    { name: 'Otrivin Adult Nasal Spray 10ml', price: 95, weight: '10 ml', brand: 'GSK' },
    { name: 'Himalaya Septilin Immunity Booster Tablets 60s', price: 170, weight: '60 tablets', brand: 'Himalaya' },
    { name: 'Dettol Instant Hand Sanitizer 200ml', price: 99, weight: '200 ml', brand: 'Dettol' },
    { name: 'Zincovit Multivitamin & Minerals Tablets 15s', price: 105, weight: '15 tablets', brand: 'Apex' }
  ])
];
