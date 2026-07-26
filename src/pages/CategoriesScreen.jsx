import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/Navigation';

export const CategoriesScreen = () => {
  const { openCategory, householdData } = useApp();

  const categoryGroups = [
    {
      groupTitle: 'Grocery & Kitchen',
      icon: 'restaurant',
      categories: [
        { key: 'fresh-veggies', title: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop&q=80' },
        { key: 'fresh-fruits', title: 'Fruits', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80' },
        { key: 'staples', title: 'Atta, Rice & Dal', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80' },
        { key: 'spices-oils', title: 'Oil, Ghee & Masala', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80' },
        { key: 'dairy-bread', title: 'Dairy, Bread & Eggs', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80' },
        { key: 'bakery', title: 'Bakery & Biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      groupTitle: 'Pharmacy & Healthcare',
      icon: 'medication',
      categories: [
        { key: 'pharma', title: 'Pharmacy & Health', isNew: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
        { key: 'wellness', title: 'Gym & Supplements', isNew: true, image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      groupTitle: 'Snacks & Drinks',
      icon: 'local_bar',
      categories: [
        { key: 'snacks', title: 'Chips & Snacks', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80' },
        { key: 'sweets', title: 'Sweets & Chocolates', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400&auto=format&fit=crop&q=80' },
        { key: 'beverages', title: 'Drinks & Juices', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop&q=80' },
        { key: 'tea-coffee', title: 'Gourmet Tea & Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      groupTitle: 'Beauty & Personal Care',
      icon: 'face_6',
      categories: [
        { key: 'skincare', title: 'Skincare & Cleansers', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' },
        { key: 'cosmetics', title: 'Cosmetics & Makeup', isNew: true, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop&q=80' },
        { key: 'bath-body', title: 'Bath & Body Wash', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80' },
        { key: 'baby-care', title: 'Baby Care & Diapers', isNew: true, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      groupTitle: 'Household & Tech',
      icon: 'home',
      categories: [
        { key: 'cleaners', title: 'Cleaners & Detergents', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' },
        { key: 'electronics', title: 'Electronics & Audio', isNew: true, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
        { key: 'stationery', title: 'Stationery & Games', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      groupTitle: 'Pet Care',
      icon: 'pets',
      categories: [
        { key: 'pet-care', title: 'Pet Food & Kibble', isNew: true, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80' },
        { key: 'pet-toys', title: 'Pet Toys & Grooming', isNew: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      groupTitle: 'Lifestyle & Hobbies',
      icon: 'auto_awesome',
      categories: [
        { key: 'books', title: 'Books & Media', isNew: true, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
        { key: 'jewellery', title: 'Fashion Jewellery', isNew: true, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80' },
        { key: 'spiritual', title: 'Spiritual Needs & Pooja', isNew: true, image: 'https://images.unsplash.com/photo-1608797178974-15b35a640536?w=400&auto=format&fit=crop&q=80' },
        { key: 'sports_outdoor', title: 'Sports & Outdoor Games', isNew: true, image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&auto=format&fit=crop&q=80' }
      ]
    }
  ];

  return (
    <div className="pb-24 bg-[#F7F7F5] min-h-full">
      <TopHeader title="All Categories" />

      {/* Header Banner */}
      <div className="bg-[#F8CB46] px-4 pb-3 flex items-center justify-between text-[#1F1B12]">
        <div className="flex items-center gap-2">
          <span className="bg-[#0C831F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            All 26 Departments
          </span>
          <span className="text-xs font-semibold">Curated for {householdData.name}</span>
        </div>
      </div>

      <main className="px-4 py-4 space-y-5">
        {categoryGroups.map((group, idx) => (
          <section key={idx} className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="material-symbols-outlined text-[#0C831F] text-[22px]">{group.icon}</span>
              <h2 className="text-sm font-extrabold text-[#1F1B12]">{group.groupTitle}</h2>
            </div>

            {/* Clean Vertical Category Cards (No Text Overlap!) */}
            <div className="grid grid-cols-2 gap-3">
              {group.categories.map(cat => (
                <div 
                  key={cat.key}
                  onClick={() => openCategory(cat.key)}
                  className="bg-[#E7F1EF] rounded-2xl p-2.5 flex flex-col justify-between border border-slate-200/80 shadow-xs cursor-pointer active:scale-95 transition-transform hover:border-[#0C831F]/50 relative min-h-[130px]"
                >
                  {cat.isNew && (
                    <span className="absolute top-2 left-2 bg-[#0C831F] text-white text-[8px] font-extrabold px-1.5 py-0.3 rounded-md uppercase shadow-xs z-10">
                      NEW TO YOU
                    </span>
                  )}
                  <div className="w-full h-16 bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center border border-white shrink-0">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-1.5 flex flex-col justify-between flex-1">
                    <h3 className="text-xs font-extrabold text-[#1F1B12] leading-tight line-clamp-2">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-extrabold text-[#0C831F] mt-1 flex items-center gap-0.5">
                      <span>Explore</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};
