
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    procedure: 'rhinoplasty',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Consultation Request Received",
          description: "We'll contact you shortly to schedule your free consultation.",
        });
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          procedure: 'rhinoplasty',
          message: '',
        });
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Ready for a New You?</h2>
          <p className="section-subtitle">
            Book your free consultation today and take the first step toward the nose you've always wanted
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy-dark">
              Book Your Free Consultation Today!
            </h3>
            <p className="text-lg text-gray-600">
              Our expert surgeons will meet with you to discuss your goals, answer your questions, and create a personalized treatment plan.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-2 mr-4 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy-dark text-lg">No Obligation</h4>
                  <p className="text-gray-600">Your consultation is completely free with no pressure to proceed.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-2 mr-4 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy-dark text-lg">Expert Advice</h4>
                  <p className="text-gray-600">Get personalized recommendations from our experienced surgeons.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-2 mr-4 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy-dark text-lg">Virtual Options Available</h4>
                  <p className="text-gray-600">Can't visit in person? We offer video consultations.</p>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg luxury-border">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                alt="Luxury clinic consultation"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100 animate-border-glow">
            <h3 className="text-2xl font-playfair font-bold mb-6 text-navy-dark">Request Your Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-navy-dark font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`animated-input ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-navy-dark font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`animated-input ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-navy-dark font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`animated-input ${errors.phone ? 'border-destructive' : ''}`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="procedure" className="block text-navy-dark font-medium mb-1">
                  Procedure of Interest
                </label>
                <select
                  id="procedure"
                  name="procedure"
                  value={formData.procedure}
                  onChange={handleChange}
                  className="animated-input"
                >
                  <option value="rhinoplasty">Rhinoplasty</option>
                  <option value="revision-rhinoplasty">Revision Rhinoplasty</option>
                  <option value="ethnic-rhinoplasty">Ethnic Rhinoplasty</option>
                  <option value="non-surgical-rhinoplasty">Non-Surgical Rhinoplasty</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-navy-dark font-medium mb-1">
                  Your Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="animated-input"
                  placeholder="Tell us about your goals and any questions you have"
                ></textarea>
              </div>
              
              <div>
                <Button
                  type="submit"
                  className="luxury-btn w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
