
import React, { useEffect } from 'react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      icon: "✨",
      title: "Natural Results",
      description: "Our surgeons specialize in creating balanced, natural-looking results that enhance your features without looking artificial."
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Surgeons",
      description: "Work with board-certified surgeons who have performed thousands of successful rhinoplasty procedures."
    },
    {
      icon: "⏱️",
      title: "Quick Recovery",
      description: "Advanced techniques allow for faster healing and minimal downtime so you can return to your normal activities sooner."
    },
    {
      icon: "🛡️",
      title: "Personalized Care",
      description: "Every nose is unique. We create customized treatment plans tailored specifically to your facial structure and aesthetic goals."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.benefit-card').forEach((benefit) => {
      benefit.classList.add('opacity-0');
      observer.observe(benefit);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We combine artistic vision with surgical precision to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card luxury-card flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 bg-gold/10 w-16 h-16 flex items-center justify-center rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2 text-navy-dark">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
