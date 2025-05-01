
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in rhinoplasty!");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-70" style={{ display: isHovered ? 'block' : 'none' }}></div>
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
