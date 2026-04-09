import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const giftCategories = [
  {
    title: 'Newborn',
    description: 'First moments deserve the finest',
    price: 'From $95',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80',
  },
  {
    title: 'Milestones',
    description: 'Celebrate in style',
    price: 'From $150',
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=600&q=80',
  },
  {
    title: 'Holidays',
    description: 'Festive elegance',
    price: 'From $120',
    image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&q=80',
  },
];

const GiftGuide = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gift-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gift-guide" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">Gifting</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4">
              Gift Guide
            </h2>
          </div>
          <a
            href="#all-gifts"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-cream-200/60 hover:text-gold-500 transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {giftCategories.map((category, index) => (
            <div key={index} className="gift-card group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/30 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 border border-cream-100/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Gift className="w-5 h-5 text-cream-100" />
                </div>
              </div>
              <span className="text-sm text-gold-500">{category.price}</span>
              <h3 className="font-serif text-2xl text-cream-100 mt-2 mb-2 group-hover:text-gold-500 transition-colors">
                {category.title}
              </h3>
              <p className="text-cream-200/50 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 border border-charcoal-800 text-center">
          <Gift className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h3 className="font-serif text-3xl text-cream-100 mb-4">Gift Cards</h3>
          <p className="text-cream-200/60 max-w-xl mx-auto mb-6">
            Let them choose. Available in any denomination.
          </p>
          <button className="px-8 py-3 bg-gold-500 text-charcoal-950 font-medium tracking-wider hover:bg-gold-400 transition-colors">
            Purchase
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftGuide;
