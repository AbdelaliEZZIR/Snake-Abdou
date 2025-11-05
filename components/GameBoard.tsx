import React from 'react';
import { Coords, GameState } from '../types';
import { Theme } from '../themes';
import { BOARD_SIZE } from '../constants';

interface GameBoardProps {
  snake: Coords[];
  food: Coords;
  theme: Theme;
  isEating: boolean;
  gameState: GameState;
}

const GameBoard: React.FC<GameBoardProps> = ({ snake, food, theme, isEating, gameState }) => {
  const cells = [];
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      const isEven = (x + y) % 2 === 0;
      cells.push(
        <div
          key={`${x}-${y}`}
          className={isEven ? theme.colors.boardLight : theme.colors.boardDark}
          style={{ gridColumn: x + 1, gridRow: y + 1 }}
        />
      );
    }
  }

  const isGameOver = gameState === GameState.GAME_OVER;

  return (
    <div
      className={`grid w-full h-full ${theme.colors.boardContainerBg}`}
      style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
      }}
    >
      {cells}
      {snake.map((segment, index) => {
        const isHead = index === 0;
        const gameOverClass = isGameOver ? 'bg-red-500 animate-flash' : 'bg-[#4D83F1]';
        
        return (
          <div
            key={index}
            className={`${gameOverClass} rounded-md`}
            style={{ 
              gridColumn: segment.x + 1, 
              gridRow: segment.y + 1,
              transform: isHead && isEating ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.1s',
              position: 'relative',
              margin: '5%',
            }}
          >
            {isHead && !isGameOver && (
               <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-2/3 justify-between">
                  <div className="w-1/3 h-1/3 bg-white rounded-full border-black border-[1px]"></div>
                  <div className="w-1/3 h-1/3 bg-white rounded-full border-black border-[1px]"></div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div
        style={{
            gridColumn: food.x + 1,
            gridRow: food.y + 1,
        }}
        className="flex items-center justify-center text-lg md:text-xl"
      >
        🍎
      </div>
    </div>
  );
};

export default GameBoard;