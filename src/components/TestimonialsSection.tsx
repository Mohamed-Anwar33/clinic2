
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  age: number;
  quote: string;
  beforeImage: string;
  afterImage: string;
}

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      age: 28,
      quote: "The rhinoplasty completely transformed my profile. I feel so much more confident now, and the recovery was much easier than I expected. Dr. Johnson and the team were amazing throughout the entire process.",
      beforeImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      afterImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      name: "Michael T.",
      age: 34,
      quote: "After years of breathing difficulties, I finally decided to get rhinoplasty. Not only can I breathe perfectly now, but the aesthetic results exceeded my expectations. Truly life-changing.",
      beforeImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", 
      afterImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      name: "Jennifer K.",
      age: 31,
      quote: "The attention to detail and personalized care I received was exceptional. My nose looks completely natural, and friends who didn't know I had surgery just compliment me on looking great!",
      beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      afterImage: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-blush-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from our patients who have experienced the transformative power of our rhinoplasty procedures
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 absolute inset-0",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 space-y-6">
                      <div className="text-gold text-5xl font-playfair">"</div>
                      <blockquote className="text-lg text-gray-700 italic">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="font-playfair font-semibold text-navy-dark text-xl">
                          {testimonial.name}, {testimonial.age}
                        </div>
                        <div className="text-gold font-medium mt-1">Rhinoplasty Patient</div>
                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="relative">
                          <div className="absolute top-3 left-3 bg-navy-dark text-white px-3 py-1 text-sm font-medium rounded-md">Before</div>
                          <div className="h-full overflow-hidden rounded-lg luxury-border">
                            <img
                              src={testimonial.beforeImage}
                              alt={`${testimonial.name} before rhinoplasty`}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute top-3 left-3 bg-gold text-white px-3 py-1 text-sm font-medium rounded-md">After</div>
                          <div className="h-full overflow-hidden rounded-lg luxury-border">
                            <img
                              src={testimonial.afterImage}
                              alt={`${testimonial.name} after rhinoplasty`}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Static div to maintain height */}
            <div className="opacity-0 pointer-events-none">
              <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 space-y-6">
                    <div className="text-gold text-5xl font-playfair">"</div>
                    <blockquote className="text-lg text-gray-700 italic">
                      {testimonials[0].quote}
                    </blockquote>
                    <div>
                      <div className="font-playfair font-semibold text-navy-dark text-xl">
                        {testimonials[0].name}, {testimonials[0].age}
                      </div>
                      <div className="text-gold font-medium mt-1">Rhinoplasty Patient</div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="relative">
                        <div className="absolute top-3 left-3 bg-navy-dark text-white px-3 py-1 text-sm font-medium rounded-md">Before</div>
                        <div className="h-full overflow-hidden rounded-lg luxury-border">
                          <img
                            src={testimonials[0].beforeImage}
                            alt={`${testimonials[0].name} before rhinoplasty`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute top-3 left-3 bg-gold text-white px-3 py-1 text-sm font-medium rounded-md">After</div>
                        <div className="h-full overflow-hidden rounded-lg luxury-border">
                          <img
                            src={testimonials[0].afterImage}
                            alt={`${testimonials[0].name} after rhinoplasty`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-2 transition-all duration-300 focus:outline-none",
                  index === activeIndex ? "bg-gold w-8" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
