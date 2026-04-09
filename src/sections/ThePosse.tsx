import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crown, Gift, Star, Gem } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: 'Explorer',
    icon: Star,
    points: 0,
    benefits: ['Welcome gift', 'Early access', 'Birthday surprise'],
    border: 'border-charcoal-800',
  },
  {
    name: 'Gentleman',
    icon: Crown,
    points: 500,
    benefits: ['All Explorer perks', 'Free shipping', 'Exclusive drops', 'Styling sessions'],
    border: 'border-gold-500',
    featured: true,
  },
  {
    name: 'Distinguished',
    icon: Gem,
    points: 2000,
    benefits: ['All Gentleman perks', 'VIP events', 'Personal shopper', 'First access'],
    border: 'border-charcoal-700',
  },
];

const ThePosse = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tier-card',
        { opacity: 0, y: 50 },
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
    <section ref={sectionRef} className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">Loyalty</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4 mb-6">
            The Posse
          </h2>
          <p className="text-cream-200/60 max-w-2xl mx-auto">
            Join our exclusive community and unlock benefits designed for 
            our most discerning families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`tier-card relative p-8 bg-charcoal-900 border ${tier.border} ${
                tier.featured ? 'shadow-2xl shadow-gold-500/10' : ''
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-charcoal-950 text-xs tracking-wider uppercase">
                  Popular
                </span>
              )}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 border flex items-center justify-center ${
                  tier.featured ? 'border-gold-500 bg-gold-500/10' : 'border-charcoal-700'
                }`}>
                  <tier.icon className={`w-8 h-8 ${tier.featured ? 'text-gold-500' : 'text-cream-200/50'}`} />
                </div>
                <h3 className="font-serif text-2xl text-cream-100">{tier.name}</h3>
                <p className="text-sm text-gold-500 mt-1 tracking-wider">{tier.points}+ Points</p>
              </div>
              <ul className="space-y-3">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-cream-200/60">
                    <Gift className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 font-medium tracking-wider transition-colors ${
                  tier.featured
                    ? 'bg-gold-500 text-charcoal-950 hover:bg-gold-400'
                    : 'border border-charcoal-700 text-cream-100 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThePosse;
