
import React from 'react';

const PixelDecoration = () => {
  // Small floating pixel elements to give retro game feels
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, index) => {
        // Random position and animation properties
        const size = Math.floor(Math.random() * 8) + 4;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDuration = `${Math.random() * 20 + 10}s`;
        const animationDelay = `${Math.random() * 5}s`;
        
        // Random colors from our theme
        const colors = [
          'bg-arcade-purple/20', 
          'bg-arcade-blue/20', 
          'bg-arcade-cyan/20', 
          'bg-arcade-pink/20',
          'bg-arcade-orange/20'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Position and animation
        return (
          <div 
            key={index}
            className={`absolute ${color} shadow-lg animate-float`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left,
              top,
              animationDuration,
              animationDelay,
              opacity: 0.5
            }}
          />
        );
      })}
    </div>
  );
};

export default PixelDecoration;
