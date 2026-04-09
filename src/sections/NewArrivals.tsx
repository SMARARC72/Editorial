import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Velvet Blazer',
    price: 385,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    isNew: true,
  },
  {
    id: 2,
    name: 'Silk Dress Shirt',
    price: 225,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    isNew: true,
  },
  {
    id: 3,
    name: 'Wool Trousers',
    price: 195,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    isNew: true,
  },
  {
    id: 4,
    name: 'Cashmere Coat',
    price: 595,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd628b9?w=600&q=80',
    isNew: false,
  },
];

const NewArrivals = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
    <section ref={sectionRef} id="new-arrivals" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">New</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4">
              Latest Arrivals
            </h2>
          </div>
          <a
            href="#shop"
            className="mt-4 md:mt-0 text-sm text-cream-200/60 hover:text-gold-500 transition-colors tracking-wider"
          >
            View All
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-800 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-charcoal-950 text-xs font-medium tracking-wider uppercase">
                    New
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-cream-100 text-charcoal-950 text-sm tracking-wider hover:bg-gold-500 transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Add
                    </button>
                    <button className="w-12 h-12 border border-cream-100/30 flex items-center justify-center hover:bg-cream-100 hover:text-charcoal-950 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-lg text-cream-100 group-hover:text-gold-500 transition-colors">
                {product.name}
              </h3>
              <p className="text-gold-500 font-light mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
