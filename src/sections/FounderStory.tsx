import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FounderStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-image',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      gsap.fromTo(
        '.story-content',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
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
    <section ref={sectionRef} id="story" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="story-image relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                alt="Founder portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold-500/30 -z-10" />
          </div>

          <div className="story-content">
            <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4 mb-6">
              A Vision of Elegance
            </h2>
            <div className="editorial-line w-16 mb-8" />
            
            <div className="relative pl-8 border-l border-gold-500/30 mb-8">
              <Quote className="absolute -left-3 top-0 w-6 h-6 text-gold-500 bg-charcoal-950" />
              <p className="text-lg text-cream-200/80 italic leading-relaxed">
                &quot;Fashion is not just about clothing—it&apos;s about creating moments 
                that last a lifetime. Every piece we design tells a story of 
                craftsmanship and care.&quot;
              </p>
            </div>

            <p className="text-cream-200/60 leading-relaxed mb-6">
              ParkerJoe was born from a passion for exceptional children&apos;s fashion. 
              We believe that young gentlemen deserve clothing that matches their 
              potential—garments that inspire confidence and create memories.
            </p>
            <p className="text-cream-200/60 leading-relaxed mb-8">
              Each collection is thoughtfully curated, blending traditional 
              craftsmanship with contemporary design. We partner with artisans 
              who share our commitment to excellence.
            </p>

            <div>
              <p className="font-serif text-xl text-cream-100">Sarah Mitchell</p>
              <p className="text-sm text-gold-500 tracking-wider uppercase mt-1">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
