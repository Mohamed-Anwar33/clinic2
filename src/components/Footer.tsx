
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">Allure Aesthetics</h3>
            <p className="text-gray-300 mb-4">
              Transforming lives through expert rhinoplasty and personalized care. Your journey to confidence starts here.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-gold transition-colors">Benefits</a></li>
              <li><a href="#procedure" className="text-gray-300 hover:text-gold transition-colors">Procedure</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Procedures</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Rhinoplasty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Revision Rhinoplasty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Ethnic Rhinoplasty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Non-Surgical Rhinoplasty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-gold mt-1" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <MessageCircle size={18} className="mr-3 text-gold mt-1" />
                <span className="text-gray-300">info@allureaesthetics.com</span>
              </li>
              <li className="text-gray-300">
                123 Luxury Lane<br />
                Beverly Hills, CA 90210
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Allure Aesthetics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-gold">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-gold">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-gold">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
