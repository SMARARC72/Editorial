import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartProvider } from './context/CartContext';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import CartDrawer from './components/CartDrawer';
import AgeGate from './components/AgeGate';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import OurStoryPage from './pages/OurStoryPage';
import StyleLabPage from './pages/StyleLabPage';
import PossePage from './pages/PossePage';
import GiftGuidePage from './pages/GiftGuidePage';
import StoresPage from './pages/StoresPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  
  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-charcoal-950">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/style-lab" element={<StyleLabPage />} />
          <Route path="/the-posse" element={<PossePage />} />
          <Route path="/gift-guide" element={<GiftGuidePage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <AgeGate />
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
