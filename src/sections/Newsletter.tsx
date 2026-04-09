import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.newsletter-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal-950">
      <div className="newsletter-content max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 text-gold-500 mx-auto mb-6" />
        <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mb-4">
          Join the Circle
        </h2>
        <p className="text-cream-200/60 text-lg mb-8 max-w-2xl mx-auto">
          Exclusive access to new collections and private events.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-6 py-4 bg-charcoal-900 border border-charcoal-800 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:border-gold-500 transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitted}
            className={`px-8 py-4 font-medium tracking-wider flex items-center justify-center gap-2 transition-colors ${
              isSubmitted
                ? 'bg-green-500 text-white'
                : 'bg-gold-500 text-charcoal-950 hover:bg-gold-400'
            }`}
          >
            {isSubmitted ? (
              <>
                <Check className="w-5 h-5" />
                Done
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-cream-200/30 text-sm mt-6">
          Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
