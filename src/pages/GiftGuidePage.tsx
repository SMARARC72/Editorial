import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, ArrowRight, Heart, Baby, Star, Camera } from 'lucide-react';
import { giftGuides } from '../data/products';
import type { GiftGuide } from '../types';

export default function GiftGuidePage() {
  const navigate = useNavigate();
  const [activeGuide, setActiveGuide] = useState('all');
  const [budget, setBudget] = useState('all');

  const filteredGuides = giftGuides.filter((guide: GiftGuide) => {
    if (activeGuide !== 'all' && guide.id !== activeGuide) return false;
    if (budget !== 'all') {
      const [min, max] = budget.split('-').map(v => v === 'up' ? 0 : parseInt(v));
      if (budget === '100-up') return guide.priceRange[0] >= 100;
      return guide.priceRange[0] >= min && guide.priceRange[1] <= max;
    }
    return true;
  });

  const categories = [
    { id: 'all', name: 'All Guides', icon: Gift },
    { id: 'gift-001', name: 'New Arrivals', icon: Star },
    { id: 'gift-002', name: 'By Age', icon: Baby },
    { id: 'gift-003', name: 'By Occasion', icon: Heart },
    { id: 'gift-004', name: 'Personalized', icon: Camera }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Hero */}
      <div className="border-b border-[#b8984e]/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <Gift className="w-12 h-12 text-[#b8984e] mx-auto mb-6" />
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8984e] mb-4">Find the Perfect</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#f5f1e8] mb-4">Gift Guide</h1>
          <p className="text-xl text-[#f5f1e8]/60 max-w-2xl mx-auto">
            Curated collections for every occasion, age, and budget.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveGuide(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 border transition-colors ${
                activeGuide === cat.id
                  ? 'border-[#b8984e] bg-[#b8984e]/10 text-[#b8984e]'
                  : 'border-[#b8984e]/30 text-[#f5f1e8]/60 hover:border-[#b8984e]'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-2 text-[#f5f1e8]"
          >
            <option value="all">All Budgets</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-up">$100+</option>
          </select>
        </div>
      </div>

      {/* Gift Guides Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredGuides.map((guide) => (
            <div 
              key={guide.id}
              className="group cursor-pointer bg-[#1a1a1a] rounded-lg overflow-hidden"
              onClick={() => navigate(`/shop`)}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[#b8984e] uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <span className="text-[#f5f1e8]/30">•</span>
                  <span className="text-xs text-[#f5f1e8]/40">
                    ${guide.priceRange[0]} - ${guide.priceRange[1]}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl text-[#f5f1e8] mb-2 group-hover:text-[#b8984e] transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-[#f5f1e8]/60 mb-4">{guide.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {guide.items.slice(0, 3).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#f5f1e8]/50">
                      <span className="w-1 h-1 bg-[#b8984e] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center gap-2 text-[#b8984e] group-hover:gap-3 transition-all">
                  Shop Collection
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#f5f1e8]/60">No gift guides match your filters.</p>
            <button 
              onClick={() => { setActiveGuide('all'); setBudget('all'); }}
              className="mt-4 text-[#b8984e] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Gift Card CTA */}
      <div className="bg-[#1a1a1a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-[#f5f1e8] mb-4">Can't Decide?</h2>
          <p className="text-[#f5f1e8]/60 mb-8">
            Give the gift of choice with a ParkerJoe gift card. Available in any amount.
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-[#b8984e] text-[#0f0f0f] px-8 py-4 font-medium hover:bg-[#c9a961] transition-colors"
          >
            Shop Gift Cards
          </button>
        </div>
      </div>
    </div>
  );
}
