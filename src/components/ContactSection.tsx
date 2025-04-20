
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after a delay
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false, isError: false });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-arcade text-arcade-purple mb-4 relative">
            CONTACT
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-arcade-purple opacity-70"></span>
          </h2>
          <p className="font-pixel text-white text-xl max-w-2xl mx-auto">
            Ready to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-arcade-dark-purple p-6 rounded-pixel border-2 border-arcade-purple/50 crt-screen">
            <h3 className="font-arcade text-xl text-arcade-purple mb-6">
              SEND A MESSAGE
            </h3>
            
            {formStatus.isSubmitted ? (
              <div className="bg-arcade-purple/20 p-4 rounded-pixel text-center">
                <p className="font-pixel text-white text-lg mb-2">MESSAGE SENT!</p>
                <p className="font-body text-white">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-pixel text-white mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-arcade border-2 border-arcade-purple/50 rounded-pixel font-body text-white focus:border-arcade-purple focus:outline-none transition-colors duration-200"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block font-pixel text-white mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-arcade border-2 border-arcade-purple/50 rounded-pixel font-body text-white focus:border-arcade-purple focus:outline-none transition-colors duration-200"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block font-pixel text-white mb-2">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-arcade border-2 border-arcade-purple/50 rounded-pixel font-body text-white focus:border-arcade-purple focus:outline-none transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="arcade-btn text-arcade-purple w-full relative overflow-hidden group"
                >
                  {formStatus.isSubmitting ? (
                    <span className="inline-flex items-center">
                      <span className="mr-2">SENDING</span>
                      <span className="animate-pulse">...</span>
                    </span>
                  ) : (
                    "SEND MESSAGE"
                  )}
                  
                  {/* Button highlight effect */}
                  <span className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="pixel-card border-arcade-blue hover:border-arcade-blue/80">
              <div className="flex items-center mb-4">
                <span className="font-pixel text-3xl text-arcade-blue mr-3">📧</span>
                <h3 className="font-arcade text-xl text-arcade-blue">EMAIL</h3>
              </div>
              <a 
                href="mailto:contact@gamedev.com" 
                className="font-body text-white hover:text-arcade-blue transition-colors duration-200"
              >
                contact@gamedev.com
              </a>
            </div>
            
            <div className="pixel-card border-arcade-cyan hover:border-arcade-cyan/80">
              <div className="flex items-center mb-4">
                <span className="font-pixel text-3xl text-arcade-cyan mr-3">🔗</span>
                <h3 className="font-arcade text-xl text-arcade-cyan">CONNECT</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white hover:text-arcade-cyan transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">GitHub</span>
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white hover:text-arcade-cyan transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white hover:text-arcade-cyan transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">Twitter</span>
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white hover:text-arcade-cyan transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">Itch.io</span>
                </a>
              </div>
            </div>
            
            <div className="pixel-card border-arcade-pink hover:border-arcade-pink/80">
              <div className="flex items-center mb-4">
                <span className="font-pixel text-3xl text-arcade-pink mr-3">📄</span>
                <h3 className="font-arcade text-xl text-arcade-pink">RESUME</h3>
              </div>
              <a 
                href="#" 
                className="arcade-btn text-arcade-pink text-sm inline-block mt-2"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
