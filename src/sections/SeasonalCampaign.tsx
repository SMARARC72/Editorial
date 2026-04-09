import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SeasonalCampaign = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.campaign-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
          alt="Seasonal campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/70" />
      </div>

      <div className="campaign-content relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 border border-gold-500 text-gold-500 text-xs tracking-[0.4em] uppercase mb-6">
            Fall / Winter 2024
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-cream-100 leading-tight mb-6">
            The Noir
            <span className="italic text-gold-500"> Collection</span>
          </h2>
          <p className="text-cream-200/70 text-lg leading-relaxed mb-8">
            Sophisticated darkness meets refined elegance. Deep hues and luxurious 
            textures for the season&apos;s most distinguished moments.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-950 font-medium tracking-wider hover:bg-gold-400 transition-colors"
            >
              Explore
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#lookbook"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-100 tracking-wider hover:bg-cream-100 hover:text-charcoal-950 transition-colors"
            >
              Lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalCampaign;
