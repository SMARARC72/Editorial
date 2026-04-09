import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EditorialGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.editorial-item',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const items = [
    {
      image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80',
      title: 'The Art of Dressing',
      subtitle: 'Editorial',
    },
    {
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      title: 'Timeless Elegance',
      subtitle: 'Collection',
    },
    {
      image: 'https://images.unsplash.com/photo-1471286174890-9c112ff1ebbc?w=800&q=80',
      title: 'Modern Heritage',
      subtitle: 'Featured',
    },
  ];

  return (
    <section ref={sectionRef} id="editorial" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="editorial-item group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-xs tracking-[0.4em] text-gold-500 uppercase mb-4">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-3xl text-cream-100">{item.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGrid;
