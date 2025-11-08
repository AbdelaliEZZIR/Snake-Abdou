import React from 'react';
import { Direction, GameState } from '../types';
import { Theme } from '../themes';

interface MobileControlsProps {
  onDirectionChange: (direction: Direction) => void;
  theme: Theme;
  gameState: GameState;
}

const ArrowIcon = ({ rotation }: { rotation: string }) => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: rotation }}>
        <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const MobileControls: React.FC<MobileControlsProps> = ({ onDirectionChange, theme, gameState }) => {
    const isPlaying = gameState === GameState.PLAYING;
    const controlsOpacity = isPlaying ? 'opacity-60' : 'opacity-30';

    const handlePress = (e: React.TouchEvent<HTMLButtonElement>, direction: Direction) => {
        e.preventDefault();
        onDirectionChange(direction);
    }
    
    // Fallback to onClick for devices with both touch and mouse, or for testing
    const handleClick = (direction: Direction) => {
        onDirectionChange(direction);
    }

    const buttonClasses = `
      ${theme.colors.mobileControlsBg} ${theme.colors.mobileControlsIcon} 
      rounded-lg flex items-center justify-center 
      active:scale-95 transition-transform
    `;

    return (
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-48 grid grid-cols-3 grid-rows-3 gap-2 ${controlsOpacity} transition-opacity z-10`}>
            <button onTouchStart={(e) => handlePress(e, Direction.UP)} onClick={() => handleClick(Direction.UP)} className={`col-start-2 row-start-1 ${buttonClasses}`}>
                <ArrowIcon rotation="rotate(0deg)" />
            </button>
            <button onTouchStart={(e) => handlePress(e, Direction.LEFT)} onClick={() => handleClick(Direction.LEFT)} className={`col-start-1 row-start-2 ${buttonClasses}`}>
                <ArrowIcon rotation="rotate(-90deg)" />
            </button>
            <button onTouchStart={(e) => handlePress(e, Direction.RIGHT)} onClick={() => handleClick(Direction.RIGHT)} className={`col-start-3 row-start-2 ${buttonClasses}`}>
                <ArrowIcon rotation="rotate(90deg)" />
            </button>
            <button onTouchStart={(e) => handlePress(e, Direction.DOWN)} onClick={() => handleClick(Direction.DOWN)} className={`col-start-2 row-start-3 ${buttonClasses}`}>
                <ArrowIcon rotation="rotate(180deg)" />
            </button>
        </div>
    );
};

export default MobileControls;
