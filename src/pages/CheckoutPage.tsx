import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, CreditCard, Truck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: ''
  });

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] pt-32 text-center">
        <div className="max-w-md mx-auto px-6">
          <h1 className="font-serif text-2xl text-[#f5f1e8] mb-4">Your Cart is Empty</h1>
          <p className="text-[#f5f1e8]/60 mb-8">Add some items to your cart before checking out.</p>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-[#b8984e] text-[#0f0f0f] px-8 py-3 font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] pt-32 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-[#b8984e]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#b8984e]" />
          </div>
          <h1 className="font-serif text-3xl text-[#f5f1e8] mb-4">Thank You!</h1>
          <p className="text-[#f5f1e8]/60 mb-2">Your order has been placed successfully.</p>
          <p className="text-[#b8984e] mb-8">Order #PJ-{Date.now().toString().slice(-6)}</p>
          
          <p className="text-sm text-[#f5f1e8]/40 mb-8">
            A confirmation email has been sent to {shippingInfo.email}
          </p>
          
          <button 
            onClick={() => navigate('/shop')}
            className="bg-[#b8984e] text-[#0f0f0f] px-8 py-3 font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In production, this would integrate with Shopify Payments or Stripe
    // const paymentResult = await processShopifyPayment({...})
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  const shippingCost = totalPrice >= 75 ? 0 : 8;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shippingCost + tax;

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#f5f1e8]/60 hover:text-[#f5f1e8] mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Forms */}
          <div>
            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#b8984e]' : 'text-[#f5f1e8]/40'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#b8984e] text-[#0f0f0f]' : 'bg-[#1a1a1a] border border-[#f5f1e8]/20'}`}>
                  1
                </div>
                <span className="hidden sm:inline text-sm">Shipping</span>
              </div>
              <div className="flex-1 h-px bg-[#b8984e]/20" />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#b8984e]' : 'text-[#f5f1e8]/40'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#b8984e] text-[#0f0f0f]' : 'bg-[#1a1a1a] border border-[#f5f1e8]/20'}`}>
                  2
                </div>
                <span className="hidden sm:inline text-sm">Payment</span>
              </div>
            </div>

            {step === 1 ? (
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                    className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    placeholder="you@example.com"
                  />
                  <p className="text-xs text-[#f5f1e8]/40 mt-1">We'll send order updates to this email.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                    className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    placeholder="123 Main St"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      ZIP *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.zip}
                      onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#b8984e] text-[#0f0f0f] py-4 font-medium tracking-wide hover:bg-[#c9a961] transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="bg-[#1a1a1a] p-4 rounded-lg mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#f5f1e8]/60">Ship to</p>
                      <p className="text-[#f5f1e8]">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                      <p className="text-sm text-[#f5f1e8]/60">{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#b8984e] text-sm hover:underline"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-[#b8984e]" />
                  <span className="text-sm text-[#f5f1e8]/60">Secure payment via Shopify Payments</span>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                    Card Number *
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f1e8]/40" />
                    <input
                      type="text"
                      required
                      maxLength={19}
                      value={paymentInfo.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
                        setPaymentInfo({...paymentInfo, cardNumber: value});
                      }}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded pl-12 pr-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      value={paymentInfo.expiry}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2, 4);
                        setPaymentInfo({...paymentInfo, expiry: value});
                      }}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                      CVC *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={4}
                      value={paymentInfo.cvc}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cvc: e.target.value.replace(/\D/g, '')})}
                      className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                    Name on Card *
                  </label>
                  <input
                    type="text"
                    required
                    value={paymentInfo.nameOnCard}
                    onChange={(e) => setPaymentInfo({...paymentInfo, nameOnCard: e.target.value})}
                    className="w-full bg-[#1a1a1a] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#b8984e] text-[#0f0f0f] py-4 font-medium tracking-wide hover:bg-[#c9a961] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0f0f0f]/30 border-t-[#0f0f0f] rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${total.toFixed(2)}`
                  )}
                </button>

                <p className="text-xs text-[#f5f1e8]/40 text-center">
                  This is a demo checkout. No actual payment will be processed.
                </p>
              </form>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 h-fit lg:sticky lg:top-24">
            <h2 className="font-serif text-xl text-[#f5f1e8] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 bg-[#0f0f0f] rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#f5f1e8]">{item.name}</p>
                    <p className="text-xs text-[#f5f1e8]/50">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-[#b8984e]">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-[#b8984e]/20">
              <div className="flex justify-between text-[#f5f1e8]/60">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#f5f1e8]/60">
                <span className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  Shipping
                </span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-[#f5f1e8]/60">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-medium pt-3 border-t border-[#b8984e]/20">
                <span className="text-[#f5f1e8]">Total</span>
                <span className="text-[#b8984e]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
