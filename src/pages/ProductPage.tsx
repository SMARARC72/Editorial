import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Truck, Shield, RefreshCw, ChevronRight, Plus, Minus } from 'lucide-react';
import { products, reviews } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = useMemo(() => products.find(p => p.id === id), [id]);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] pt-32 text-center">
        <h1 className="font-serif text-2xl text-[#f5f1e8] mb-4">Product Not Found</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="text-[#b8984e] hover:underline"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productReviews = reviews;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor
    });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-[#b8984e]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-[#f5f1e8]/50">
            <button onClick={() => navigate('/')} className="hover:text-[#b8984e]">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => navigate('/shop')} className="hover:text-[#b8984e]">Shop</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#f5f1e8]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-[#b8984e]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Header */}
            <div className="mb-6">
              {product.isNew && (
                <span className="inline-block bg-[#b8984e] text-[#0f0f0f] text-xs px-2 py-1 mb-3">
                  New Arrival
                </span>
              )}
              <h1 className="font-serif text-3xl text-[#f5f1e8] mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-[#b8984e] fill-[#b8984e]' : 'text-[#f5f1e8]/20'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-[#f5f1e8]/60">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-[#b8984e]/20">
              <span className="text-3xl text-[#b8984e] font-medium">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-[#f5f1e8]/40 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-3">
                  Color: {selectedColor}
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name 
                          ? 'border-[#b8984e] scale-110' 
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-3">
                Size *
              </label>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border transition-colors ${
                      selectedSize === size
                        ? 'border-[#b8984e] bg-[#b8984e]/10 text-[#b8984e]'
                        : 'border-[#b8984e]/30 text-[#f5f1e8]/70 hover:border-[#b8984e]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-[#b8984e]/30">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-4 text-[#f5f1e8]/60 hover:text-[#f5f1e8]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-[#f5f1e8]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-4 text-[#f5f1e8]/60 hover:text-[#f5f1e8]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#b8984e] text-[#0f0f0f] font-medium tracking-wide hover:bg-[#c9a961] transition-colors"
              >
                Add to Cart
              </button>
              
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="px-4 border border-[#b8984e]/30 text-[#f5f1e8]/60 hover:text-[#b8984e] hover:border-[#b8984e] transition-colors"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#b8984e] text-[#b8984e]' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-[#b8984e]/20">
              <div className="text-center">
                <Truck className="w-5 h-5 text-[#b8984e] mx-auto mb-2" />
                <p className="text-xs text-[#f5f1e8]/60">Free Shipping<br/>Over $75</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-[#b8984e] mx-auto mb-2" />
                <p className="text-xs text-[#f5f1e8]/60">Secure<br/>Payment</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-5 h-5 text-[#b8984e] mx-auto mb-2" />
                <p className="text-xs text-[#f5f1e8]/60">Easy<br/>Returns</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-[#b8984e] mb-3">Description</h3>
              <p className="text-[#f5f1e8]/80 leading-relaxed">{product.description}</p>
            </div>

            {/* Features List */}
            {product.features && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-[#b8984e] mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#f5f1e8]/70">
                      <span className="w-1 h-1 bg-[#b8984e] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SKU */}
            <p className="text-xs text-[#f5f1e8]/40">SKU: {product.sku}</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20 pt-20 border-t border-[#b8984e]/20">
          <h2 className="font-serif text-2xl text-[#f5f1e8] mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productReviews.map((review) => (
              <div key={review.id} className="bg-[#1a1a1a] p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#b8984e]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#b8984e] font-medium">{review.author[0]}</span>
                    </div>
                    <div>
                      <p className="text-[#f5f1e8] font-medium">{review.author}</p>
                      <p className="text-xs text-[#f5f1e8]/40">{review.date}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-xs text-[#b8984e] bg-[#b8984e]/10 px-2 py-1">Verified</span>
                  )}
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-[#b8984e] fill-[#b8984e]' : 'text-[#f5f1e8]/20'}`}
                    />
                  ))}
                </div>
                <h4 className="font-serif text-lg text-[#f5f1e8] mb-2">{review.title}</h4>
                <p className="text-[#f5f1e8]/70 text-sm">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-20 border-t border-[#b8984e]/20">
          <h2 className="font-serif text-2xl text-[#f5f1e8] mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-[#f5f1e8] group-hover:text-[#b8984e] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#b8984e]">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
