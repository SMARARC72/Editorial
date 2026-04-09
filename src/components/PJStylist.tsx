import { useState, useRef, useEffect } from 'react';
import { X, Send, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface StylistContext {
  childAge?: string;
  preferences?: string[];
  occasion?: string;
  budget?: string;
}

export default function PJStylist() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Howdy! I'm PJ, your personal stylist. I can help you find the perfect western outfit for your little one. What brings you in today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState<StylistContext>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Kimi API Integration
  const callKimiAPI = async (userMessage: string, conversationHistory: Message[]) => {
    const KIMI_API_KEY = import.meta.env.VITE_KIMI_API_KEY;
    
    if (!KIMI_API_KEY) {
      // Fallback to simulated responses if no API key
      return generateSimulatedResponse(userMessage, context);
    }

    try {
      const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${KIMI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'kimi-k2-0711-preview',
          messages: [
            {
              role: 'system',
              content: `You are PJ, the ParkerJoe virtual stylist. You help parents find western-style clothing for their children.
              
Store Information:
- ParkerJoe specializes in premium western wear for boys
- Price range: $20-$150
- Categories: Shirts, outerwear, boots, accessories, denim
- Style: Western, rodeo, adventure, classic
- Current collections: Western Heritage, Rodeo Ready, Desert Explorer, Dress Collection

Guidelines:
- Be friendly, helpful, and knowledgeable about western fashion
- Ask clarifying questions about age, size, occasion, and style preferences
- Suggest specific products and complete outfits
- Mention care instructions when relevant
- Be encouraging but not pushy
- Keep responses concise (2-3 sentences) unless detailed styling advice is requested`
            },
            ...conversationHistory.slice(-5).map(m => ({
              role: m.role,
              content: m.content
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 300
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || generateSimulatedResponse(userMessage, context);
    } catch (error) {
      console.error('Kimi API error:', error);
      return generateSimulatedResponse(userMessage, context);
    }
  };

  // Simulated response generator (fallback when API is unavailable)
  const generateSimulatedResponse = (userMessage: string, _ctx: StylistContext): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('boot') || msg.includes('shoe')) {
      return "Our Junior Rancher Boots are perfect for little adventurers! They're made with genuine leather, have cushioned insoles for all-day comfort, and come in tan or brown. What size are you looking for?";
    }
    
    if (msg.includes('shirt') || msg.includes('button')) {
      return "The Classic Western Shirt is one of our bestsellers! It comes in sage, navy, and rust with those authentic pearl snap buttons. What age/size are you shopping for?";
    }
    
    if (msg.includes('hat') || msg.includes('cowboy')) {
      return "The Wrangler Hat is a customer favorite! It provides UPF 50+ sun protection and comes with a genuine leather band. Available in natural or black.";
    }
    
    if (msg.includes('jean') || msg.includes('pant')) {
      return "Our Buckle Back Jeans feature adjustable straps for a perfect fit as they grow, plus reinforced knees for durability. They come in light and dark wash.";
    }
    
    if (msg.includes('outfit') || msg.includes('look') || msg.includes('complete')) {
      return "I'd love to help you build a complete look! For a classic western outfit, I'd suggest: The Classic Western Shirt + Buckle Back Jeans + Junior Rancher Boots + The Wrangler Hat. Would you like me to suggest alternatives or accessories?";
    }
    
    if (msg.includes('size') || msg.includes('fit')) {
      return "Our sizes run true to age, but I always recommend checking our size chart. For shirts and jackets, if you're between sizes, size up for room to grow. For boots, measure their foot and add about a thumb's width for comfort.";
    }
    
    if (msg.includes('gift') || msg.includes('present')) {
      return "Great choice for a gift! Our Bandana Set is always a hit - it's affordable, versatile, and comes in a set of 3. For something more substantial, the Rodeo Denim Jacket is a standout piece. Do you know the child's age and size?";
    }
    
    if (msg.includes('price') || msg.includes('cost') || msg.includes('expensive')) {
      return "We have options for every budget! Tees start at $32, shirts around $68, jeans at $58, and boots at $125. The quality is exceptional - these pieces are made to last and be passed down.";
    }
    
    if (msg.includes('return') || msg.includes('exchange')) {
      return "We offer free returns and exchanges within 30 days. Items should be unworn with tags attached. Just visit our Returns page or bring items to any ParkerJoe store.";
    }
    
    if (msg.includes('shipping')) {
      return "We offer free standard shipping on orders over $75. Standard shipping takes 5-7 business days, or you can choose expedited shipping at checkout.";
    }
    
    if (msg.includes('help') || msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
      return "Hey there! I'm PJ, your ParkerJoe stylist. I can help you find the perfect western outfit, suggest size recommendations, or answer questions about our products. What are you looking for today?";
    }
    
    return "That's a great question! I'd love to help you find exactly what you need. Could you tell me a bit more about what you're looking for - like the occasion, age/size, or specific style?";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Extract context from user message
    const msg = input.toLowerCase();
    if (msg.match(/\d+\s*(year|yr)/)) {
      setContext(prev => ({ ...prev, childAge: input.match(/\d+/)?.[0] }));
    }

    // Get AI response
    const response = await callKimiAPI(input, messages);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#b8984e] text-[#0f0f0f] px-4 py-3 rounded-full shadow-lg hover:bg-[#c9a961] transition-all hover:scale-105"
      >
        <Sparkles className="w-4 h-4" />
        <span className="font-medium text-sm">Ask PJ</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-[#1a1a1a] border border-[#b8984e]/30 rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-[#b8984e]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0f0f0f] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#b8984e]" />
              </div>
              <div>
                <h3 className="font-serif text-[#0f0f0f] font-medium">PJ Stylist</h3>
                <p className="text-xs text-[#0f0f0f]/70">Your personal stylist</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#0f0f0f]/70 hover:text-[#0f0f0f]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-[#b8984e]/20'
                      : 'bg-[#b8984e]'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-[#b8984e]" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-[#0f0f0f]" />
                  )}
                </div>
                
                <div
                  className={`max-w-[75%] p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-[#b8984e]/20 text-[#f5f1e8]'
                      : 'bg-[#0f0f0f] text-[#f5f1e8]'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b8984e] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0f0f0f]" />
                </div>
                <div className="bg-[#0f0f0f] p-3 rounded-lg flex gap-1">
                  <span className="w-2 h-2 bg-[#b8984e] rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-[#b8984e] rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-[#b8984e] rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#b8984e]/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about products, sizes, styling..."
                className="flex-1 bg-[#0f0f0f] border border-[#b8984e]/30 rounded px-3 py-2 text-sm text-[#f5f1e8] placeholder-[#f5f1e8]/40 focus:border-[#b8984e] focus:outline-none"
              />
              
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-[#b8984e] text-[#0f0f0f] rounded hover:bg-[#c9a961] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-[10px] text-[#f5f1e8]/30 mt-2 text-center">
              Powered by Kimi AI • May occasionally produce incorrect information
            </p>
          </div>
        </div>
      )}
    </>
  );
}
