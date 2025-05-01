
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Procedure', href: '#procedure' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-navy-dark">
                <span className="text-gold">Allure</span> Aesthetics
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="luxury-btn">
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-gold focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg rounded-b-lg animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-base font-medium text-navy hover:text-gold hover:bg-gray-50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="py-2 px-4">
                <Button 
                  className="luxury-btn w-full" 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
