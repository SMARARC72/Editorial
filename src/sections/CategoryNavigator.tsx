import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'Formal', count: 48, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80' },
  { name: 'Shirts', count: 72, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80' },
  { name: 'Trousers', count: 36, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80' },
  { name: 'Knitwear', count: 28, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80' },
  { name: 'Outerwear', count: 24, image: 'https://images.unsplash.com/photo-1544923246-77307dd628b9?w=400&q=80' },
  { name: 'Accessories', count: 56, image: 'https://images.unsplash.com/photo-1628149455676-1e9d816ceabf?w=400&q=80' },
];

const CategoryNavigator = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.category-item',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
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
    <section ref={sectionRef} id="shop" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">Browse</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-item group relative overflow-hidden cursor-pointer ${
                index === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-square'}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/60 group-hover:bg-charcoal-950/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-xs text-cream-200/50 tracking-wider uppercase">
                        {category.count} Items
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-cream-100 mt-1 group-hover:text-gold-500 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 border border-cream-100/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-cream-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigator;
