import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../sections/Hero';
import EditorialGrid from '../sections/EditorialGrid';
import FeaturedCollections from '../sections/FeaturedCollections';
import NewArrivals from '../sections/NewArrivals';
import SeasonalCampaign from '../sections/SeasonalCampaign';
import CategoryNavigator from '../sections/CategoryNavigator';
import FounderStory from '../sections/FounderStory';
import StyleLoungePreview from '../sections/StyleLoungePreview';
import ThePosse from '../sections/ThePosse';
import GiftGuide from '../sections/GiftGuide';
import Newsletter from '../sections/Newsletter';
import PJStylist from '../components/PJStylist';

export default function HomePage() {
  useEffect(() => {
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
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
      <PJStylist />
    </>
  );
}
