import { useState } from 'react';
import { Sparkles, Shirt, Camera, Palette } from 'lucide-react';

export default function StyleLabPage() {
  const [activeTab, setActiveTab] = useState('stylist');

  const features = [
    {
      id: 'stylist',
      icon: Sparkles,
      title: 'PJ Stylist',
      description: 'Your personal AI stylist. Get outfit recommendations tailored to your preferences.'
    },
    {
      id: 'lookbook',
      icon: Camera,
      title: 'Lookbook',
      description: 'Browse curated outfits and seasonal collections styled by our team.'
    },
    {
      id: 'sizelab',
      icon: Shirt,
      title: 'Size Lab',
      description: 'Find the perfect fit with our detailed size guides and fit recommendations.'
    },
    {
      id: 'custom',
      icon: Palette,
      title: 'Custom Shop',
      description: 'Personalize select items with monograms and custom details.'
    }
  ];

  const lookbookLooks = [
    {
      name: 'The Ranch Hand',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      items: ['Classic Western Shirt', 'Buckle Back Jeans', 'Junior Rancher Boots'],
      occasion: 'Everyday Adventure'
    },
    {
      name: 'Sunday Best',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
      items: ['Dress Shirt', 'Dress Pants', 'Leather Belt', 'Dress Boots'],
      occasion: 'Special Occasions'
    },
    {
      name: 'Rodeo Ready',
      image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&h=800&fit=crop',
      items: ['Denim Jacket', 'Graphic Tee', 'Bootcut Jeans', 'Cowboy Hat'],
      occasion: 'Rodeo & Events'
    },
    {
      name: 'Desert Explorer',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=800&fit=crop',
      items: ['Sun Shirt', 'Cargo Shorts', 'Hiking Boots', 'Sun Hat'],
      occasion: 'Outdoor Adventure'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Hero */}
      <div className="border-b border-[#b8984e]/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8984e] mb-4">Style Lab</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#f5f1e8] mb-4">Find Your</h1>
          <p className="text-2xl text-[#f5f1e8]/60 italic">Perfect Style</p>
        </div>
      </div>

      {/* Feature Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`p-6 text-center border transition-all ${
                activeTab === feature.id
                  ? 'border-[#b8984e] bg-[#b8984e]/10'
                  : 'border-[#b8984e]/20 hover:border-[#b8984e]/40'
              }`}
            >
              <feature.icon className={`w-8 h-8 mx-auto mb-3 ${activeTab === feature.id ? 'text-[#b8984e]' : 'text-[#f5f1e8]/40'}`} />
              <h3 className={`font-serif text-lg mb-1 ${activeTab === feature.id ? 'text-[#b8984e]' : 'text-[#f5f1e8]'}`}>
                {feature.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#1a1a1a] rounded-lg p-8">
          {activeTab === 'stylist' && (
            <div className="text-center max-w-2xl mx-auto">
              <Sparkles className="w-16 h-16 text-[#b8984e] mx-auto mb-6" />
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-4">Meet PJ, Your AI Stylist</h2>
              <p className="text-[#f5f1e8]/60 mb-8">
                Get personalized outfit recommendations, sizing advice, and styling tips. 
                PJ knows our entire collection and can help you find the perfect pieces.
              </p>
              
              <div className="bg-[#0f0f0f] rounded p-6 text-left">
                <p className="text-sm text-[#b8984e] mb-2">Try asking:</p>
                <ul className="space-y-2 text-[#f5f1e8]/70">
                  <li>"What size boots for a 7-year-old?"</li>
                  <li>"Help me build a complete rodeo outfit"</li>
                  <li>"What shirts go with the Buckle Back Jeans?"</li>
                </ul>
              </div>

              <p className="text-sm text-[#f5f1e8]/40 mt-6">
                Look for the "Ask PJ" button in the bottom right corner of any page.
              </p>
            </div>
          )}

          {activeTab === 'lookbook' && (
            <div>
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-8 text-center">Curated Looks</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {lookbookLooks.map((look, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <img 
                        src={look.image} 
                        alt={look.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-[#b8984e] uppercase tracking-wider mb-1">{look.occasion}</p>
                    <h3 className="font-serif text-xl text-[#f5f1e8] mb-2">{look.name}</h3>
                    <ul className="text-sm text-[#f5f1e8]/60">
                      {look.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sizelab' && (
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-8 text-center">Size Guide</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#b8984e] mb-4">Apparel Sizing</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#b8984e]/20">
                          <th className="text-left py-2 text-[#f5f1e8]/60">Size</th>
                          <th className="text-left py-2 text-[#f5f1e8]/60">Age</th>
                          <th className="text-left py-2 text-[#f5f1e8]/60">Height</th>
                          <th className="text-left py-2 text-[#f5f1e8]/60">Weight</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#f5f1e8]">
                        {[
                          ['XS', '4-5', '40-43"', '35-40 lbs'],
                          ['S', '6-7', '44-48"', '45-55 lbs'],
                          ['M', '8-10', '49-54"', '60-75 lbs'],
                          ['L', '12-14', '55-60"', '80-100 lbs'],
                          ['XL', '16', '61-64"', '110-130 lbs']
                        ].map(([size, age, height, weight]) => (
                          <tr key={size} className="border-b border-[#b8984e]/10">
                            <td className="py-3">{size}</td>
                            <td className="py-3">{age}</td>
                            <td className="py-3">{height}</td>
                            <td className="py-3">{weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#0f0f0f] p-6 rounded">
                  <h4 className="text-[#b8984e] mb-2">Measuring Tips</h4>
                  <ul className="space-y-2 text-sm text-[#f5f1e8]/70">
                    <li>• Measure height without shoes</li>
                    <li>• For chest, measure around the fullest part</li>
                    <li>• When in doubt, size up for growing room</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'custom' && (
            <div className="text-center max-w-2xl mx-auto">
              <Palette className="w-16 h-16 text-[#b8984e] mx-auto mb-6" />
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-4">Custom Shop</h2>
              <p className="text-[#f5f1e8]/60 mb-8">
                Coming soon! Personalize select items with monograms, custom embroidery, 
                and special details that make each piece uniquely yours.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-[#0f0f0f] p-4 rounded">
                  <h4 className="text-[#b8984e] mb-2">Monogramming</h4>
                  <p className="text-sm text-[#f5f1e8]/60">Add initials to shirts, jackets, and accessories</p>
                </div>
                <div className="bg-[#0f0f0f] p-4 rounded">
                  <h4 className="text-[#b8984e] mb-2">Custom Patches</h4>
                  <p className="text-sm text-[#f5f1e8]/60">Commemorative patches for special events</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
