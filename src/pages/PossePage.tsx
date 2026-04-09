import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Gift, Truck, Star, ChevronRight, Check } from 'lucide-react';
import { posseTiers } from '../data/products';

export default function PossePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would integrate with Smile.io
    setIsJoined(true);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/60 to-[#0f0f0f]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="w-20 h-20 bg-[#b8984e]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown className="w-10 h-10 text-[#b8984e]" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8984e] mb-4">Join The</p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#f5f1e8] mb-4">Posse</h1>
          <p className="text-xl text-[#f5f1e8]/60 max-w-lg mx-auto">
            Earn points, unlock exclusive perks, and be part of the ParkerJoe family.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#f5f1e8] mb-4">How It Works</h2>
          <p className="text-[#f5f1e8]/60">Earn points with every purchase and unlock rewards</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#b8984e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-[#b8984e] font-serif">1</span>
            </div>
            <h3 className="font-serif text-xl text-[#f5f1e8] mb-2">Earn Points</h3>
            <p className="text-sm text-[#f5f1e8]/60">Earn 1 point for every $1 spent. Double points on your birthday!</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#b8984e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-[#b8984e] font-serif">2</span>
            </div>
            <h3 className="font-serif text-xl text-[#f5f1e8] mb-2">Unlock Tiers</h3>
            <p className="text-sm text-[#f5f1e8]/60">Climb from Wrangler to Rancher to Marshal as you earn more points.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#b8984e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-[#b8984e] font-serif">3</span>
            </div>
            <h3 className="font-serif text-xl text-[#f5f1e8] mb-2">Enjoy Rewards</h3>
            <p className="text-sm text-[#f5f1e8]/60">Redeem points for discounts, exclusive access, and special gifts.</p>
          </div>
        </div>

        {/* Tiers */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-[#f5f1e8] mb-8 text-center">Membership Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {posseTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className="bg-[#1a1a1a] rounded-lg p-8 border-2 border-transparent hover:border-[#b8984e]/30 transition-colors"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${tier.color}20` }}
                >
                  <Crown className="w-6 h-6" style={{ color: tier.color }} />
                </div>
                
                <h3 className="font-serif text-2xl text-[#f5f1e8] mb-2">{tier.name}</h3>
                <p className="text-[#b8984e] mb-6">{tier.points}+ points</p>
                
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#f5f1e8]/70">
                      <Check className="w-4 h-4 text-[#b8984e] flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Ways to Earn */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 mb-16">
          <h2 className="font-serif text-2xl text-[#f5f1e8] mb-8 text-center">Ways to Earn</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Make a Purchase', points: '1 point per $1' },
              { icon: Gift, title: 'Birthday Bonus', points: 'Double points' },
              { icon: Truck, title: 'Refer a Friend', points: '100 points' },
              { icon: Crown, title: 'Write a Review', points: '25 points' }
            ].map((way, idx) => (
              <div key={idx} className="text-center p-4">
                <way.icon className="w-8 h-8 text-[#b8984e] mx-auto mb-3" />
                <h4 className="text-[#f5f1e8] mb-1">{way.title}</h4>
                <p className="text-sm text-[#b8984e]">{way.points}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center max-w-md mx-auto">
          {!isJoined ? (
            <>
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-4">Join the Posse Today</h2>
              <p className="text-[#f5f1e8]/60 mb-6">Start earning rewards with your first purchase.</p>
              
              <form onSubmit={handleJoin} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#b8984e] text-[#0f0f0f] px-6 py-3 font-medium hover:bg-[#c9a961] transition-colors"
                >
                  Join
                </button>
              </form>
            </>
          ) : (
            <div className="bg-[#b8984e]/10 border border-[#b8984e] rounded-lg p-8">
              <Check className="w-12 h-12 text-[#b8984e] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-[#f5f1e8] mb-2">Welcome to the Posse!</h3>
              <p className="text-[#f5f1e8]/60 mb-4">Check your email for your welcome bonus.</p>
              
              <button
                onClick={() => navigate('/shop')}
                className="inline-flex items-center gap-2 text-[#b8984e] hover:underline"
              >
                Start Shopping
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
