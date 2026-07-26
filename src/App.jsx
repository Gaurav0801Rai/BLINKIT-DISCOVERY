import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { PhoneFrame } from './components/PhoneFrame';
import { BottomNavBar } from './components/Navigation';
import { CoachMarks } from './components/CoachMarks';
import { ToastNotification } from './components/ToastNotification';

import { HomeScreen } from './pages/HomeScreen';
import { CategoriesScreen } from './pages/CategoriesScreen';
import { PersonalizedCategoriesScreen } from './pages/PersonalizedCategoriesScreen';
import { CategoryListingScreen } from './pages/CategoryListingScreen';
import { ProductDetailScreen } from './pages/ProductDetailScreen';
import { SearchScreen } from './pages/SearchScreen';
import { PetCareScreen } from './pages/PetCareScreen';
import { DairyBreadScreen } from './pages/DairyBreadScreen';
import { CheckoutScreen } from './pages/CheckoutScreen';
import { OrderPlacedScreen } from './pages/OrderPlacedScreen';
import { OrdersScreen } from './pages/OrdersScreen';
import { ProfileScreen } from './pages/ProfileScreen';
import { SimulateHouseholdScreen } from './pages/SimulateHouseholdScreen';

const MainContent = () => {
  const { activeTab } = useApp();

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'categories':
        return <CategoriesScreen />;
      case 'personalized-categories':
        return <PersonalizedCategoriesScreen />;
      case 'category-listing':
        return <CategoryListingScreen />;
      case 'product-detail':
        return <ProductDetailScreen />;
      case 'search':
        return <SearchScreen />;
      case 'pet-care':
        return <PetCareScreen />;
      case 'dairy-bread':
        return <DairyBreadScreen />;
      case 'checkout':
        return <CheckoutScreen />;
      case 'order-placed':
        return <OrderPlacedScreen />;
      case 'orders':
        return <OrdersScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'simulate-household':
        return <SimulateHouseholdScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="flex-1 w-full h-full overflow-y-auto no-scrollbar">
        {renderScreen()}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <PhoneFrame>
        <MainContent />
        <CoachMarks />
        <ToastNotification />
      </PhoneFrame>
    </AppProvider>
  );
}
