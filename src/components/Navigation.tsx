
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-arcade/90 border-b border-arcade-purple/20 py-2">
      <div className="container flex items-center justify-between">
        <div>
          <a href="#" className="font-arcade text-arcade-purple text-lg hover:text-shadow-neon transition-all duration-300 animate-glow">
            GAME DEV
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-pixel text-white hover:text-arcade-purple px-3 py-2 text-lg transition-all duration-300 hover:text-shadow-neon"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-arcade-purple"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-arcade border-b border-arcade-purple/20 transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-2' : 'max-h-0 overflow-hidden'}`}>
        <div className="container flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-pixel text-white hover:text-arcade-purple py-2 px-4 text-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
