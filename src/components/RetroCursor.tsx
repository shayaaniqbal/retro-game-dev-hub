
import React, { useState, useEffect } from 'react';

const RetroCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show the cursor effect when moving
    let timeout: number;
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Hide the cursor effect after a short delay
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setIsVisible(false), 300);
    };
    
    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timeout);
    };
  }, []);
  
  return (
    <>
      {/* Pixelated cursor trail */}
      <div 
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="relative">
          {/* Inner glow */}
          <div className="w-4 h-4 rounded-pixel bg-arcade-purple/40 absolute -left-2 -top-2 animate-pulse"></div>
          <div className="w-3 h-3 rounded-pixel bg-arcade-cyan/40 absolute -left-1.5 -top-1.5"></div>
          <div className="w-2 h-2 rounded-pixel bg-arcade-pink/70 absolute -left-1 -top-1 animate-glow"></div>
        </div>
      </div>
    </>
  );
};

export default RetroCursor;
