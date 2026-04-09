import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', delay: 0.8 }
      );
      gsap.fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1920&q=80"
          alt="Editorial fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <span className="hero-subtitle block text-xs font-light tracking-[0.5em] text-gold-500 uppercase mb-6">
          The Editorial Collection
        </span>
        <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl text-cream-100 leading-tight">
          Dressing
          <span className="italic text-gold-500"> Tomorrow&apos;s</span>
          <br />
          Icons
        </h1>
        <p className="hero-subtitle mt-8 text-cream-200/70 text-lg max-w-xl mx-auto font-light">
          Where heritage craftsmanship meets contemporary vision
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <a href="#editorial" className="flex flex-col items-center text-cream-200/50 hover:text-gold-500 transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Side Decorative Lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent hidden lg:block" />
    </section>
  );
};

export default Hero;
