
import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }
    
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <div className={`fixed inset-0 z-50 bg-arcade flex flex-col items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <h1 className="font-arcade text-4xl sm:text-5xl text-arcade-purple mb-8 animate-glow">
        UMAAR AWAN
      </h1>
      <div className="w-64 h-6 bg-arcade-dark-purple rounded-pixel overflow-hidden relative">
        <div 
          className="h-full bg-arcade-purple transition-all duration-300"
          style={{ 
            width: `${progress}%`
          }}
        ></div>
      </div>
      <p className="font-pixel text-white mt-4 animate-pulse">
        LOADING PORTFOLIO... {Math.floor(progress)}%
      </p>
      
      {/* Game tips */}
      <div className="mt-8 max-w-md text-center">
        <p className="font-pixel text-arcade-blue text-sm">
          TIP: {[
            "Check out the Projects section to see my latest work!",
            "Use the navigation menu to explore different sections.",
            "Find the hidden mini-game for a surprise!",
            "Press ESC to close any modal dialogs.",
          ][Math.floor(Math.random() * 4)]}
        </p>
      </div>
      
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
