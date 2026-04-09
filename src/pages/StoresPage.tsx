import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Search, Navigation } from 'lucide-react';
import { stores } from '../data/products';

export default function StoresPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  const filteredStores = stores.filter(store => 
    store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Header */}
      <div className="border-b border-[#b8984e]/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b8984e] mb-2">Visit Us</p>
              <h1 className="font-serif text-4xl text-[#f5f1e8]">Our Stores</h1>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f1e8]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city or state..."
                className="w-full md:w-80 bg-[#1a1a1a] border border-[#b8984e]/30 rounded pl-12 pr-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Store List */}
          <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredStores.map((store) => (
              <button
                key={store.id}
                onClick={() => setSelectedStore(store)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedStore.id === store.id
                    ? 'border-[#b8984e] bg-[#b8984e]/10'
                    : 'border-[#b8984e]/20 hover:border-[#b8984e]/40'
                }`}
              >
                <h3 className="font-serif text-lg text-[#f5f1e8] mb-1">{store.name}</h3>
                <p className="text-sm text-[#f5f1e8]/60">{store.city}, {store.state}</p>
                
                {store.isFlagship && (
                  <span className="inline-block mt-2 text-xs bg-[#b8984e]/20 text-[#b8984e] px-2 py-1">
                    Flagship Store
                  </span>
                )}
              </button>
            ))}

            {filteredStores.length === 0 && (
              <p className="text-[#f5f1e8]/40 text-center py-8">No stores found matching "{searchQuery}"</p>
            )}
          </div>

          {/* Store Details */}
          <div className="lg:col-span-2">
            {selectedStore && (
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                {/* Map Placeholder */}
                <div className="aspect-video bg-[#0f0f0f] relative flex items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#b8984e] mx-auto mb-4" />
                    <p className="text-[#f5f1e8]/60">{selectedStore.address}</p>
                    <p className="text-[#f5f1e8]/40 text-sm">
                      {selectedStore.city}, {selectedStore.state} {selectedStore.zip}
                    </p>
                  </div>
                  
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(selectedStore.address + ', ' + selectedStore.city + ', ' + selectedStore.state)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#b8984e] text-[#0f0f0f] px-4 py-2 text-sm font-medium hover:bg-[#c9a961] transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-serif text-2xl text-[#f5f1e8] mb-2">{selectedStore.name}</h2>
                      <p className="text-[#f5f1e8]/60">{selectedStore.address}</p>
                      <p className="text-[#f5f1e8]/60">{selectedStore.city}, {selectedStore.state} {selectedStore.zip}</p>
                    </div>
                    
                    {selectedStore.isFlagship && (
                      <span className="bg-[#b8984e] text-[#0f0f0f] text-xs px-3 py-1">
                        Flagship
                      </span>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="flex items-center gap-2 text-[#b8984e] mb-4">
                        <Clock className="w-4 h-4" />
                        Hours
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {Object.entries(selectedStore.hours).map(([day, hours]) => (
                          <li key={day} className="flex justify-between text-[#f5f1e8]/70">
                            <span className="capitalize">{day}</span>
                            <span>{hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#b8984e] mb-4">Contact</h3>
                      
                      <div className="space-y-3">
                        <a 
                          href={`tel:${selectedStore.phone}`}
                          className="flex items-center gap-3 text-[#f5f1e8]/70 hover:text-[#b8984e] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {selectedStore.phone}
                        </a>
                        
                        <a 
                          href={`mailto:${selectedStore.email}`}
                          className="flex items-center gap-3 text-[#f5f1e8]/70 hover:text-[#b8984e] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {selectedStore.email}
                        </a>
                      </div>

                      {selectedStore.features && (
                        <div className="mt-6">
                          <h4 className="text-[#b8984e] text-sm mb-3">Store Features</h4>
                          <ul className="flex flex-wrap gap-2">
                            {selectedStore.features.map((feature, idx) => (
                              <li 
                                key={idx}
                                className="text-xs bg-[#0f0f0f] text-[#f5f1e8]/60 px-3 py-1"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
