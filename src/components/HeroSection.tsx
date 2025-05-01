
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    caption: 'Transform Your Confidence',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    caption: 'Expert Care, Beautiful Results',
  },
  {
    url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    caption: 'Experience Tranquility & Excellence',
  },
  {
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    caption: 'Your Journey to Perfection',
  }
];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden bg-gray-900">
      {/* Carousel Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <img
            src={image.url}
            alt={`Luxury rhinoplasty clinic - ${image.caption}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 opacity-0 animate-fade-in">
            Transform Your Look with Expert Rhinoplasty
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Achieve the nose of your dreams with our world-class surgeons.
          </p>
          <div className="opacity-0 animate-fade-in animate-delay-300">
            <Button 
              onClick={scrollToContact}
              className="luxury-btn text-lg px-8 py-4"
            >
              Book Your Free Consultation Today
            </Button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 opacity-0 animate-fade-in animate-delay-400">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-all duration-300 ${
                  index === activeIndex ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Caption */}
          <div className="mt-8 opacity-0 animate-fade-in animate-delay-500">
            <p className="text-white text-xl font-playfair italic">
              {carouselImages[activeIndex].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
