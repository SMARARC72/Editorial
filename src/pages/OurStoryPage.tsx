import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Users, Heart, Leaf } from 'lucide-react';

export default function OurStoryPage() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every stitch, button, and fabric choice reflects our commitment to creating clothing that lasts generations.'
    },
    {
      icon: Users,
      title: 'Community Rooted',
      description: 'We partner with local artisans and manufacturers who share our vision of sustainable, ethical production.'
    },
    {
      icon: Heart,
      title: 'Made with Care',
      description: 'From design to delivery, every piece is crafted with attention to detail and genuine love for what we do.'
    },
    {
      icon: Leaf,
      title: 'Sustainably Minded',
      description: 'We prioritize eco-friendly materials and practices that minimize our environmental footprint.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/60 via-[#0f0f0f]/40 to-[#0f0f0f]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8984e] mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#f5f1e8] mb-6">
            Crafting Western
            <br />
            <span className="italic">Heritage</span>
          </h1>
        </div>
      </div>

      {/* Origin Story */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#f5f1e8] mb-6">It Started with a Simple Idea</h2>
          <div className="editorial-line w-24 mx-auto mb-8" />
        </div>

        <div className="prose prose-invert mx-auto text-[#f5f1e8]/80">
          <p className="text-lg leading-relaxed mb-6">
            ParkerJoe was born from a simple observation: finding quality, stylish western wear for boys was nearly impossible. 
            While the market was flooded with options for girls and adult men, young gentlemen who loved the western aesthetic 
            had few choices that weren't costumes or cheap imitations.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Our founder, a mother of two boys who loved rodeo and western heritage, set out to change that. She partnered with 
            experienced pattern makers and artisans in Texas to create clothing that honored traditional western style while 
            meeting the practical needs of active children.
          </p>
          
          <p className="text-lg leading-relaxed">
            Today, ParkerJoe is more than a clothing brand—it's a celebration of western heritage, quality craftsmanship, and 
            the timeless style that never goes out of fashion. Every piece we create is designed to be passed down, creating 
            memories that last generations.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#1a1a1a] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-[#f5f1e8] mb-4">Our Values</h2>
            <p className="text-[#f5f1e8]/60">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#b8984e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#b8984e]" />
                </div>
                <h3 className="font-serif text-xl text-[#f5f1e8] mb-2">{value.title}</h3>
                <p className="text-sm text-[#f5f1e8]/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-[#f5f1e8] mb-4">Join the ParkerJoe Family</h2>
        <p className="text-[#f5f1e8]/60 mb-8">
          Discover why thousands of families trust ParkerJoe for quality western wear.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="inline-flex items-center gap-2 bg-[#b8984e] text-[#0f0f0f] px-8 py-4 font-medium hover:bg-[#c9a961] transition-colors"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
