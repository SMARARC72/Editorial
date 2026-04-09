import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Filter, Grid3X3, List } from 'lucide-react';
import { products, categories, subcategories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestselling':
        filtered = [...filtered].sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
    }
    
    return filtered;
  }, [selectedCategory, selectedSubcategory, sortBy, priceRange]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory('all');
    navigate(catId === 'all' ? '/shop' : `/shop/${catId}`);
  };

  const currentSubcategories = selectedCategory !== 'all' 
    ? subcategories[selectedCategory as keyof typeof subcategories] || []
    : [];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Header */}
      <div className="border-b border-[#b8984e]/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="font-serif text-4xl text-[#f5f1e8] mb-2">Shop</h1>
          <p className="text-[#f5f1e8]/60">
            {filteredProducts.length} product{filteredProducts.length !== 1 && 's'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#b8984e] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? 'text-[#b8984e]'
                            : 'text-[#f5f1e8]/60 hover:text-[#f5f1e8]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subcategories */}
              {currentSubcategories.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#b8984e] mb-4">Type</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setSelectedSubcategory('all')}
                        className={`text-sm transition-colors ${
                          selectedSubcategory === 'all'
                            ? 'text-[#b8984e]'
                            : 'text-[#f5f1e8]/60 hover:text-[#f5f1e8]'
                        }`}
                      >
                        All Types
                      </button>
                    </li>
                    {currentSubcategories.map((sub) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => setSelectedSubcategory(sub.id)}
                          className={`text-sm transition-colors ${
                            selectedSubcategory === sub.id
                              ? 'text-[#b8984e]'
                              : 'text-[#f5f1e8]/60 hover:text-[#f5f1e8]'
                          }`}
                        >
                          {sub.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price Range */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#b8984e] mb-4">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-2 py-1 text-sm text-[#f5f1e8]"
                    placeholder="Min"
                  />
                  <span className="text-[#f5f1e8]/40">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 200])}
                    className="w-20 bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-2 py-1 text-sm text-[#f5f1e8]"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-[#f5f1e8]/60"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-3 py-2 text-sm text-[#f5f1e8]"
                >
                  <option value="featured">Featured</option>
                  <option value="bestselling">Best Selling</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>

                <div className="hidden sm:flex items-center border border-[#b8984e]/30 rounded">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-[#b8984e] text-[#0f0f0f]' : 'text-[#f5f1e8]/60'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-[#b8984e] text-[#0f0f0f]' : 'text-[#f5f1e8]/60'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className={`group cursor-pointer ${viewMode === 'list' ? 'flex gap-6' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-[#1a1a1a] ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-[3/4] mb-4'}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {product.isNew && (
                      <span className="absolute top-3 left-3 bg-[#b8984e] text-[#0f0f0f] text-xs px-2 py-1">
                        New
                      </span>
                    )}
                    
                    {product.isBestseller && (
                      <span className="absolute top-3 right-3 bg-[#0f0f0f] text-[#b8984e] text-xs px-2 py-1 border border-[#b8984e]">
                        Bestseller
                      </span>
                    )}

                    {/* Quick Add */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          size: product.sizes[0]
                        });
                      }}
                      className="absolute bottom-0 left-0 right-0 bg-[#b8984e] text-[#0f0f0f] py-3 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform"
                    >
                      Quick Add
                    </button>
                  </div>

                  {/* Info */}
                  <div className={viewMode === 'list' ? 'flex-1 py-2' : ''}>
                    <h3 className="font-serif text-lg text-[#f5f1e8] mb-1 group-hover:text-[#b8984e] transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[#b8984e] font-medium">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-[#f5f1e8]/40 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    {product.rating && (
                      <div className="flex items-center gap-1 mt-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-[#b8984e]' : 'text-[#f5f1e8]/20'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-[#f5f1e8]/40">({product.reviewCount})</span>
                      </div>
                    )}

                    {viewMode === 'list' && (
                      <p className="text-sm text-[#f5f1e8]/60 mt-2 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#f5f1e8]/60">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                    setPriceRange([0, 200]);
                  }}
                  className="mt-4 text-[#b8984e] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
