
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-arcade-purple/20 relative overflow-hidden">
      {/* Hidden pixel character that appears on hover */}
      <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 translate-y-full hover:translate-y-0">
        <div className="pixelated w-full h-full">
          <div className="w-full h-full bg-arcade-pink"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="font-arcade text-arcade-purple text-xl hover:text-shadow-neon transition-all duration-300">
              GAME DEV
            </a>
          </div>
          
          <div className="font-pixel text-white text-sm">
            &copy; {currentYear} Game Developer Portfolio. All rights reserved.
          </div>
          
          {/* Hidden message that looks like a konami cheat code - activates the easter egg game */}
          <div className="mt-4 md:mt-0 font-pixel text-white/30 text-xs cursor-help hover:text-arcade-purple transition-colors duration-300" title="Try the Konami code: ↑↑↓↓←→←→BA">
            ↑↑↓↓←→←→BA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
