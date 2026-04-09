import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'Collections', href: '#collections' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Style Lounge', href: '#style-lounge' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gift Guide', href: '#gift-guide' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center">
              <span className="font-serif text-2xl lg:text-3xl text-cream-100 tracking-wider">
                ParkerJoe
              </span>
            </a>

            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-light text-cream-200/80 hover:text-gold-500 transition-colors duration-300 tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <button className="p-2 text-cream-200/80 hover:text-gold-500 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-cream-200/80 hover:text-gold-500 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-charcoal-950 text-xs rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </button>
              <button
                className="lg:hidden p-2 text-cream-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-charcoal-950 transform transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-serif text-2xl text-cream-100 hover:text-gold-500 transition-colors tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
