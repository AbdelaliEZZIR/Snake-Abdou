// développé par Ezzir Abdelaali
import React from 'react';
import { Direction } from '../types';
import { Theme } from '../themes';
import { playClickSound } from '../sounds';

interface MobileControlsProps {
  onDirectionChange: (direction: Direction) => void;
  theme: Theme;
}

const MobileControls: React.FC<MobileControlsProps> = ({ onDirectionChange, theme }) => {
  const handleControlClick = (direction: Direction) => {
    playClickSound();
    onDirectionChange(direction);
  };

  const ArrowIcon = ({ rotation }: { rotation: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 md:w-10 md:h-10 ${theme.colors.mobileControlsIcon}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{ transform: rotation }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden" aria-label="Game controls">
      <div className={`grid grid-cols-3 grid-rows-3 gap-2 p-2 rounded-full ${theme.colors.mobileControlsBg}`}>
        <div className="col-start-2 row-start-1 flex justify-center items-center">
          <button onClick={() => handleControlClick(Direction.UP)} className="focus:outline-none p-2" aria-label="Up">
            <ArrowIcon rotation="rotate(0deg)" />
          </button>
        </div>
        <div className="col-start-1 row-start-2 flex justify-center items-center">
          <button onClick={() => handleControlClick(Direction.LEFT)} className="focus:outline-none p-2" aria-label="Left">
            <ArrowIcon rotation="rotate(-90deg)" />
          </button>
        </div>
        <div className="col-start-3 row-start-2 flex justify-center items-center">
          <button onClick={() => handleControlClick(Direction.RIGHT)} className="focus:outline-none p-2" aria-label="Right">
            <ArrowIcon rotation="rotate(90deg)" />
          </button>
        </div>
        <div className="col-start-2 row-start-3 flex justify-center items-center">
          <button onClick={() => handleControlClick(Direction.DOWN)} className="focus:outline-none p-2" aria-label="Down">
            <ArrowIcon rotation="rotate(180deg)" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileControls;
