
import React, { useEffect, useState, useRef } from 'react';

interface PixelPosition {
  x: number;
  y: number;
}

interface FoodPosition {
  x: number;
  y: number;
  collected: boolean;
}

const EasterEgg = () => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState<PixelPosition>({ x: 5, y: 5 });
  const [food, setFood] = useState<FoodPosition[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gridSize = 10;

  // Initialize food positions
  useEffect(() => {
    if (isActive) {
      const newFood = [];
      for (let i = 0; i < 5; i++) {
        newFood.push({
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
          collected: false,
        });
      }
      setFood(newFood);
      setScore(0);
      setGameOver(false);
      setPosition({ x: 5, y: 5 });
    }
  }, [isActive]);

  // Handle key presses for movement
  useEffect(() => {
    if (!isActive || gameOver) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      
      setPosition(prev => {
        let newPos = { ...prev };
        
        switch(e.key) {
          case 'ArrowUp':
            newPos.y = Math.max(0, prev.y - 1);
            break;
          case 'ArrowDown':
            newPos.y = Math.min(gridSize - 1, prev.y + 1);
            break;
          case 'ArrowLeft':
            newPos.x = Math.max(0, prev.x - 1);
            break;
          case 'ArrowRight':
            newPos.x = Math.min(gridSize - 1, prev.x + 1);
            break;
        }
        
        return newPos;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, gameOver, gridSize]);

  // Check for food collection
  useEffect(() => {
    if (!isActive || gameOver) return;
    
    const updatedFood = [...food];
    let foodCollected = false;
    
    updatedFood.forEach(item => {
      if (!item.collected && item.x === position.x && item.y === position.y) {
        item.collected = true;
        foodCollected = true;
      }
    });
    
    if (foodCollected) {
      setScore(prevScore => prevScore + 10);
      setFood(updatedFood);
      
      // Check if all food collected
      if (updatedFood.every(item => item.collected)) {
        setGameOver(true);
      }
    }
  }, [position, food, isActive, gameOver]);

  // The secret konami code to activate the game
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    const handleKonamiCode = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
          setIsActive(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    
    window.addEventListener('keydown', handleKonamiCode);
    return () => window.removeEventListener('keydown', handleKonamiCode);
  }, []);

  // Handle close
  const handleClose = () => {
    setIsActive(false);
  };

  // Render the game area
  const renderGameArea = () => {
    const grid = [];
    
    for (let y = 0; y < gridSize; y++) {
      const row = [];
      for (let x = 0; x < gridSize; x++) {
        const isPlayer = position.x === x && position.y === y;
        const foodItem = food.find(f => f.x === x && f.y === y && !f.collected);
        
        let cellClass = "w-8 h-8 border border-arcade-purple/30";
        
        if (isPlayer) {
          cellClass += " bg-arcade-pink";
        } else if (foodItem) {
          cellClass += " bg-arcade-cyan";
        } else {
          cellClass += " bg-arcade-dark-purple";
        }
        
        row.push(
          <div key={`${x}-${y}`} className={cellClass}></div>
        );
      }
      grid.push(
        <div key={y} className="flex">
          {row}
        </div>
      );
    }
    
    return grid;
  };

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-arcade/80 backdrop-blur-md">
      <div 
        ref={gameAreaRef}
        className="pixel-card border-arcade-purple max-w-md w-full relative p-6"
      >
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-white hover:text-arcade-pink"
        >
          <span className="font-arcade text-xl">×</span>
        </button>
        
        <h3 className="font-arcade text-xl text-arcade-purple mb-4 text-center">
          SECRET MINI GAME
        </h3>
        
        <div className="text-center mb-4">
          <div className="font-pixel text-white">
            Score: <span className="text-arcade-cyan">{score}</span>
          </div>
          {gameOver && (
            <div className="font-arcade text-arcade-pink text-sm mt-2 animate-glow">
              GAME COMPLETE!
            </div>
          )}
        </div>
        
        <div className="flex justify-center mb-4">
          {renderGameArea()}
        </div>
        
        <div className="text-center font-pixel text-white text-sm mt-4">
          Use arrow keys to move and collect all pixels
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
