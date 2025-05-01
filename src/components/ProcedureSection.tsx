
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const ProcedureSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-left')) {
              entry.target.classList.add('slide-in-left');
            } else if (entry.target.classList.contains('slide-right')) {
              entry.target.classList.add('slide-in-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.slide-left, .slide-right').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Meet with our surgeon to discuss your goals, assess your nasal structure, and develop a personalized treatment plan."
    },
    {
      number: "02",
      title: "Preparation",
      description: "Receive detailed pre-operative instructions and undergo necessary medical evaluations to ensure you're ready for surgery."
    },
    {
      number: "03",
      title: "Procedure",
      description: "Experience a comfortable procedure performed under anesthesia by our expert surgeons using advanced techniques."
    },
    {
      number: "04",
      title: "Recovery",
      description: "Follow our comprehensive recovery plan with ongoing support from our team to ensure optimal healing and results."
    }
  ];

  return (
    <section id="procedure" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About the Procedure</h2>
          <p className="section-subtitle">
            Our rhinoplasty approach combines precision, artistry, and cutting-edge techniques to create beautiful, natural-looking results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-left">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-navy-dark">The Art & Science of Rhinoplasty</h3>
            <p className="text-gray-700 mb-4">
              Rhinoplasty is both an art and a science. Our surgeons meticulously reshape the nose to enhance facial harmony while preserving or improving breathing function.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're seeking refinement of a specific feature or comprehensive reshaping, our tailored approach ensures results that are precisely aligned with your aesthetic goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-1.5 mr-3 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Natural-looking results that enhance your unique features</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-1.5 mr-3 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Improved breathing function and nasal structure</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-1.5 mr-3 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Enhanced facial symmetry and proportion</p>
              </div>
            </div>
          </div>
          <div className="slide-right">
            <div className="aspect-[4/5] overflow-hidden rounded-lg luxury-border">
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840" 
                alt="Luxury rhinoplasty clinic" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="luxury-card"
            >
              <div className="text-gold text-5xl font-playfair font-bold mb-4 opacity-60">{step.number}</div>
              <h3 className="text-xl font-playfair font-bold mb-2 text-navy-dark">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="luxury-btn text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcedureSection;
