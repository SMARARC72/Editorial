import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: ['New Arrivals', 'Best Sellers', 'Collections', 'Sale', 'Gift Cards'],
    help: ['Contact', 'Size Guide', 'Shipping', 'Returns', 'FAQ'],
    company: ['Our Story', 'Careers', 'Press', 'Sustainability', 'Stores'],
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl text-cream-100 tracking-wider">ParkerJoe</span>
            <p className="text-cream-200/40 mt-4 mb-6 max-w-sm text-sm leading-relaxed">
              Editorial luxury for the next generation. 
              Timeless style, exceptional craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-charcoal-800 flex items-center justify-center text-cream-200/60 hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-charcoal-800 flex items-center justify-center text-cream-200/60 hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-charcoal-800 flex items-center justify-center text-cream-200/60 hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream-200/40 hover:text-gold-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream-200/40 hover:text-gold-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream-200/40 hover:text-gold-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <div className="flex flex-wrap gap-6 text-sm text-cream-200/30">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-500" />
              123 Fashion Ave, New York
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-500" />
              +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-500" />
              hello@parkerjoe.com
            </span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream-200/20">
            &copy; 2024 ParkerJoe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream-200/20">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
