
import React from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-arcade flex flex-col items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <h1 className="font-arcade text-4xl sm:text-5xl text-arcade-purple mb-8 animate-glow">
        GAME DEV
      </h1>
      <div className="w-64 h-6 bg-arcade-dark-purple rounded-pixel overflow-hidden relative">
        <div 
          className="h-full bg-arcade-purple"
          style={{ 
            width: "100%", 
            animation: "loading 2s ease-in-out" 
          }}
        ></div>
      </div>
      <p className="font-pixel text-white mt-4 animate-pulse">
        LOADING...
      </p>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
              backgroundImage: "repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.05) 3px, transparent 3px)", 
              backgroundSize: "100% 4px" 
           }}>
      </div>
    </div>
  );
};

export default LoadingScreen;
