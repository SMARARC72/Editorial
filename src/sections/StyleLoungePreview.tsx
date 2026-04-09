import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Personal Styling',
    description: 'Bespoke consultations tailored to your needs',
    icon: Sparkles,
  },
  {
    title: 'Size Guide',
    description: 'Expert fitting for growing gentlemen',
    icon: ArrowRight,
  },
  {
    title: 'Gift Services',
    description: 'Elegant presentation with personal touches',
    icon: Sparkles,
  },
];

const StyleLoungePreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lounge-card',
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
    <section ref={sectionRef} id="style-lounge" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.5em] text-gold-500 uppercase">Services</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4 mb-6">
              The Style
              <span className="italic text-gold-500"> Lounge</span>
            </h2>
            <p className="text-cream-200/60 text-lg leading-relaxed mb-8">
              Experience personalized service that transcends the ordinary. 
              Our Style Lounge offers expert guidance for every occasion.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-950 font-medium tracking-wider hover:bg-gold-400 transition-colors"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="lounge-card group p-6 border border-charcoal-800 hover:border-gold-500/30 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors">
                    <service.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream-100 group-hover:text-gold-500 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-cream-200/50 text-sm">{service.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cream-200/30 group-hover:text-gold-500 transform group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleLoungePreview;
