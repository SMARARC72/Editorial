import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import EditorialGrid from './sections/EditorialGrid';
import FeaturedCollections from './sections/FeaturedCollections';
import NewArrivals from './sections/NewArrivals';
import SeasonalCampaign from './sections/SeasonalCampaign';
import CategoryNavigator from './sections/CategoryNavigator';
import FounderStory from './sections/FounderStory';
import StyleLoungePreview from './sections/StyleLoungePreview';
import ThePosse from './sections/ThePosse';
import GiftGuide from './sections/GiftGuide';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-950">
      <Navigation />
      <main>
        <Hero />
        <EditorialGrid />
        <FeaturedCollections />
        <NewArrivals />
        <SeasonalCampaign />
        <CategoryNavigator />
        <FounderStory />
        <StyleLoungePreview />
        <ThePosse />
        <GiftGuide />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
