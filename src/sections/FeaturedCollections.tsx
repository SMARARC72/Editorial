import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 1,
    name: 'Midnight Garden',
    description: 'Deep tones for evening occasions',
    image: 'https://images.unsplash.com/photo-1593032465175-d529cb1e790e?w=800&q=80',
  },
  {
    id: 2,
    name: 'Heritage Line',
    description: 'Classics reimagined',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
  },
  {
    id: 3,
    name: 'Avant-Garde',
    description: 'Bold statements for young trendsetters',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80',
  },
];

const FeaturedCollections = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.collection-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
    <section ref={sectionRef} id="collections" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">Curated</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4">
            Featured Collections
          </h2>
          <div className="editorial-line w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="collection-card group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/30 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 border border-cream-100/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-cream-100" />
                </div>
              </div>
              <h3 className="font-serif text-2xl text-cream-100 group-hover:text-gold-500 transition-colors">
                {collection.name}
              </h3>
              <p className="text-sm text-cream-200/50 mt-2">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
