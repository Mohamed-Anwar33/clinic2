
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcedureSection from '@/components/ProcedureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Implement lazy loading for images
    const lazyLoadImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
              }
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach((img) => {
          imageObserver.observe(img);
        });
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach((img: Element) => {
          const imgElement = img as HTMLImageElement;
          if (imgElement.dataset.src) {
            imgElement.src = imgElement.dataset.src;
          }
        });
      }
    };

    lazyLoadImages();

    // Update page title and meta tags
    document.title = "Allure Aesthetics | Premium Rhinoplasty Clinic";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProcedureSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
