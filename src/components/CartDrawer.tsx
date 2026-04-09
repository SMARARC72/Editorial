import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#1a1a1a] z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#b8984e]/20">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#b8984e]" />
            <h2 className="font-serif text-xl text-[#f5f1e8]">Your Cart ({totalItems})</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#f5f1e8]/60 hover:text-[#f5f1e8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[#b8984e]/30 mb-4" />
              <p className="text-[#f5f1e8]/60 mb-2">Your cart is empty</p>
              <p className="text-sm text-[#f5f1e8]/40">Add some items to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-[#b8984e]/10">
                  {/* Image */}
                  <div className="w-20 h-24 bg-[#0f0f0f] rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-serif text-[#f5f1e8] text-sm mb-1">{item.name}</h3>
                    
                    {(item.size || item.color) && (
                      <p className="text-xs text-[#f5f1e8]/50 mb-2">
                        {item.size && `Size: ${item.size}`}
                        {item.size && item.color && ' | '}
                        {item.color && `Color: ${item.color}`}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#b8984e]/30 text-[#f5f1e8]/60 hover:text-[#f5f1e8] hover:border-[#b8984e] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        
                        <span className="w-8 text-center text-[#f5f1e8] text-sm">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#b8984e]/30 text-[#f5f1e8]/60 hover:text-[#f5f1e8] hover:border-[#b8984e] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-[#b8984e] font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 text-[#f5f1e8]/30 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#b8984e]/20 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#f5f1e8]/60">Subtotal</span>
              <span className="font-serif text-xl text-[#f5f1e8]">${totalPrice.toFixed(2)}</span>
            </div>
            
            <p className="text-xs text-[#f5f1e8]/40">
              Shipping & taxes calculated at checkout
            </p>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#b8984e] text-[#0f0f0f] py-4 font-medium tracking-wide hover:bg-[#c9a961] transition-colors"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate('/shop');
              }}
              className="w-full py-2 text-[#f5f1e8]/60 text-sm hover:text-[#f5f1e8] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
