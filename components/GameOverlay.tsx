import React from 'react';
import { GameState, SpeedLevel } from '../types';
import { Theme } from '../themes';
import { playClickSound } from '../sounds';

interface GameOverlayProps {
  gameState: GameState;
  score: number;
  topScore: number;
  onStart: () => void;
  onResume: () => void;
  onRestart: () => void;
  speedLevel: SpeedLevel;
  onSpeedChange: (level: SpeedLevel) => void;
  theme: Theme;
}

const GameOverlay: React.FC<GameOverlayProps> = ({ gameState, score, topScore, onStart, onResume, onRestart, speedLevel, onSpeedChange, theme }) => {
  if (gameState === GameState.PLAYING) {
    return null;
  }
  
  const handleSoundClick = (callback: () => void) => {
    playClickSound();
    callback();
  }

  const speedOptions: SpeedLevel[] = ['Slow', 'Average', 'Fast'];

  return (
    <div className={`absolute inset-0 ${theme.colors.overlayBg} flex flex-col items-center justify-center text-center p-4 rounded-b-sm`}>
      {gameState === GameState.START && (
          <>
            <h1 className={`text-5xl md:text-6xl font-bold mb-2 ${theme.colors.overlayTitle}`}>SNAKE ABDOU</h1>
          </>
      )}

      {gameState === GameState.GAME_OVER && (
          <>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme.colors.overlayTitle}`}>Game Over</h2>
            <p className={`text-xl md:text-2xl ${theme.colors.overlayText}`}>
              Your Score: <span className={`font-bold ${theme.colors.text}`}>{score}</span>
            </p>
            <p className={`text-lg md:text-xl mb-8 ${theme.colors.overlayText}`}>
                Top Score: <span className={`font-bold ${theme.colors.text}`}>🏆 {topScore}</span>
            </p>
          </>
      )}

      {gameState === GameState.PAUSED && (
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${theme.colors.overlayTitle}`}>Paused</h2>
      )}

      {gameState === GameState.START && (
        <div className="mb-6">
          <h3 className={`text-lg md:text-xl mb-3 ${theme.colors.overlayText}`}>Speed</h3>
          <div className="flex justify-center gap-2">
            {speedOptions.map((level) => (
              <button
                key={level}
                onClick={() => handleSoundClick(() => onSpeedChange(level))}
                className={`px-4 py-2 font-bold rounded-md transition-colors text-sm md:text-base ${
                  speedLevel === level
                    ? `${theme.colors.speedButtonSelectedBg} ${theme.colors.speedButtonSelectedText} ring-2 ${theme.colors.speedButtonSelectedRing}`
                    : `${theme.colors.speedButtonBg} ${theme.colors.speedButtonText}`
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {gameState === GameState.PAUSED && (
        <div className="flex flex-col gap-4">
            <button
              onClick={() => handleSoundClick(onResume)}
              className={`px-8 py-3 ${theme.colors.buttonBg} ${theme.colors.buttonText} font-bold text-xl rounded-md hover:opacity-90 focus:outline-none focus:ring-4 ${theme.colors.speedButtonSelectedRing} transition-transform transform hover:scale-105`}
            >
              Resume
            </button>
            <button
              onClick={() => handleSoundClick(onRestart)}
              className={`px-8 py-3 bg-gray-500 hover:bg-gray-400 text-white font-bold text-lg rounded-md transition-transform transform hover:scale-105`}
            >
              Restart
            </button>
        </div>
      )}

      {(gameState === GameState.START || gameState === GameState.GAME_OVER) && (
          <button
            onClick={() => handleSoundClick(onStart)}
            className={`px-8 py-3 ${theme.colors.buttonBg} ${theme.colors.buttonText} font-bold text-xl rounded-md hover:opacity-90 focus:outline-none focus:ring-4 ${theme.colors.speedButtonSelectedRing} transition-transform transform hover:scale-105`}
          >
            {gameState === GameState.START ? "Start Game" : "Play Again"}
          </button>
      )}
    </div>
  );
};

export default GameOverlay;