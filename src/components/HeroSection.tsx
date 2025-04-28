
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulating loading screen
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center pt-16">
      {/* Loading screen effect */}
      <div className={`absolute inset-0 z-10 bg-arcade flex items-center justify-center transition-opacity duration-1000 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-center">
          <h2 className="font-arcade text-arcade-purple text-2xl mb-4 animate-pulse">LOADING...</h2>
          <div className="w-64 h-4 bg-arcade-dark-purple rounded-pixel overflow-hidden">
            <div 
              className="h-full bg-arcade-purple transition-all duration-1000" 
              style={{ width: loaded ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className={`container grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-arcade text-white mb-6">
            <span className="block text-arcade-purple animate-glow mb-2">MUHAMMAD UMAR</span>
            <span className="block text-arcade-blue">GAME DEVELOPER</span>
          </h1>
          
          <p className="font-pixel text-xl md:text-2xl text-white mb-8">
            Passionate game developer with 4+ years experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="arcade-btn text-arcade-purple">
              VIEW PORTFOLIO
            </a>
            <a href="#contact" className="arcade-btn text-arcade-blue">
              CONTACT ME
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-64 h-64 pixel-border animate-float">
            {/* Replace with avatar image */}
            <div className="w-full h-full bg-arcade-dark-purple rounded-pixel overflow-hidden flex items-center justify-center">
              <img
                src="/lovable-uploads/e0bf21ac-b93f-4f40-a70e-28836d0e4067.png"
                alt="Muhammad Umar"
                className="w-full h-full object-cover"
              />
              {/* Pseudo scanline effect */}
              <div className="absolute inset-0 pointer-events-none" 
                   style={{ 
                      backgroundImage: "repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.2) 3px, transparent 3px)", 
                      backgroundSize: "100% 4px" 
                   }}>
              </div>
            </div>
            {/* Decorative pixel corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-arcade-purple"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-arcade-blue"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-arcade-cyan"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-arcade-pink"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center">
          <span className="font-pixel text-white mb-2">SCROLL DOWN</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
