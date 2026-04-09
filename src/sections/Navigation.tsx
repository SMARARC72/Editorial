import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Style Lab', href: '/style-lab' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'The Posse', href: '/the-posse' },
    { name: 'Gift Guide', href: '/gift-guide' },
    { name: 'Stores', href: '/stores' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#b8984e]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl lg:text-3xl text-[#f5f1e8] tracking-wider">
                ParkerJoe
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-light text-[#f5f1e8]/80 hover:text-[#b8984e] transition-colors duration-300 tracking-widest uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/shop')}
                className="p-2 text-[#f5f1e8]/80 hover:text-[#b8984e] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 text-[#f5f1e8]/80 hover:text-[#b8984e] transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#b8984e] text-[#0f0f0f] text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>
              
              <button
                className="lg:hidden p-2 text-[#f5f1e8]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f0f0f] transform transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-[#f5f1e8] hover:text-[#b8984e] transition-colors tracking-wider"
          >
            Home
          </Link>
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-serif text-2xl text-[#f5f1e8] hover:text-[#b8984e] transition-colors tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
