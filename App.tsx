import React, { useState, useEffect, useCallback } from 'react';
import { GameState, Direction, Coords, SpeedLevel } from './types';
import { BOARD_SIZE, SPEED_LEVELS, SPEED_INCREMENT, MIN_SPEED_MS } from './constants';
import { themes } from './themes';
import GameBoard from './components/GameBoard';
import GameOverlay from './components/GameOverlay';
import MobileControls from './components/MobileControls';
import useInterval from './hooks/useInterval';
import { playEatSound, playGameOverSound, playClickSound } from './sounds';

const getRandomCoords = (snake: Coords[] = []): Coords => {
  let newFoodPosition: Coords;
  do {
    newFoodPosition = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (snake.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));
  return newFoodPosition;
};

const App: React.FC = () => {
  const getInitialSnake = () => {
    const centerX = Math.floor(BOARD_SIZE / 2);
    const centerY = Math.floor(BOARD_SIZE / 2);
    return [
      { x: centerX, y: centerY },
      { x: centerX - 1, y: centerY },
      { x: centerX - 2, y: centerY },
    ];
  };

  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [snake, setSnake] = useState<Coords[]>(getInitialSnake);
  const [food, setFood] = useState<Coords>(getRandomCoords(getInitialSnake()));
  const [direction, setDirection] = useState<Direction>(Direction.RIGHT);
  const [speed, setSpeed] = useState<number | null>(null);
  const [pausedSpeed, setPausedSpeed] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [topScore, setTopScore] = useState<number>(0);
  const [speedLevel, setSpeedLevel] = useState<SpeedLevel>('Average');
  const [themeIndex, setThemeIndex] = useState(0);
  const [isEating, setIsEating] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const currentTheme = themes[themeIndex];

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const cycleTheme = () => {
    playClickSound();
    setThemeIndex(prevIndex => (prevIndex + 1) % themes.length);
  };

  useEffect(() => {
    const storedTopScore = localStorage.getItem('snakeTopScore');
    if (storedTopScore) {
      setTopScore(JSON.parse(storedTopScore));
    }
  }, []);

  const startGame = useCallback(() => {
    const initialSnake = getInitialSnake();
    setSnake(initialSnake);
    setFood(getRandomCoords(initialSnake));
    setDirection(Direction.RIGHT);
    setSpeed(SPEED_LEVELS[speedLevel]);
    setScore(0);
    setGameState(GameState.PLAYING);
  }, [speedLevel]);
  
  const resetToStart = () => {
    playClickSound();
    setGameState(GameState.START);
  };

  const resumeGame = () => {
    setGameState(GameState.PLAYING);
    setSpeed(pausedSpeed);
    setPausedSpeed(null);
  }

  const togglePause = () => {
    if (gameState === GameState.PLAYING) {
        setPausedSpeed(speed);
        setSpeed(null);
        setGameState(GameState.PAUSED);
    } else if (gameState === GameState.PAUSED) {
        resumeGame();
    }
  };
  
  const handleDirectionChange = (newDirection: Direction) => {
    if (gameState !== GameState.PLAYING) return;
    
    if (
      (newDirection === Direction.UP && direction !== Direction.DOWN) ||
      (newDirection === Direction.DOWN && direction !== Direction.UP) ||
      (newDirection === Direction.LEFT && direction !== Direction.RIGHT) ||
      (newDirection === Direction.RIGHT && direction !== Direction.LEFT)
    ) {
      setDirection(newDirection);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Escape') {
      if(gameState === GameState.PLAYING || gameState === GameState.PAUSED) {
        togglePause();
      }
      return;
    }
    
    let newDirection: Direction | null = null;
    switch (e.key) {
      case 'ArrowUp':
        newDirection = Direction.UP;
        break;
      case 'ArrowDown':
        newDirection = Direction.DOWN;
        break;
      case 'ArrowLeft':
        newDirection = Direction.LEFT;
        break;
      case 'ArrowRight':
        newDirection = Direction.RIGHT;
        break;
    }
    if (newDirection !== null) {
      handleDirectionChange(newDirection);
    }
  }, [direction, gameState, speed, pausedSpeed]);

  useEffect(() => {
    if (gameState === GameState.PLAYING || gameState === GameState.PAUSED) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState, handleKeyDown]);

  useEffect(() => {
    if (gameState === GameState.GAME_OVER) {
      if (score > topScore) {
        setTopScore(score);
        localStorage.setItem('snakeTopScore', JSON.stringify(score));
      }
    }
  }, [gameState, score, topScore]);

  const gameLoop = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case Direction.UP: head.y -= 1; break;
      case Direction.DOWN: head.y += 1; break;
      case Direction.LEFT: head.x -= 1; break;
      case Direction.RIGHT: head.x += 1; break;
    }

    const endGame = () => {
      playGameOverSound();
      setGameState(GameState.GAME_OVER);
      setSpeed(null);
    }
    
    if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
      endGame();
      return;
    }

    for (let i = 1; i < newSnake.length; i++) {
      if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
        endGame();
        return;
      }
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      playEatSound();
      setIsEating(true);
      setTimeout(() => setIsEating(false), 150);
      setScore(prev => prev + 1);
      setFood(getRandomCoords(newSnake));
      setSpeed(prev => Math.max(MIN_SPEED_MS, (prev || SPEED_LEVELS[speedLevel]) - SPEED_INCREMENT));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useInterval(gameLoop, speed);

  return (
    <div className={`w-screen h-screen flex items-center justify-center font-mono ${currentTheme.colors.background}`}>
      <div className={`relative w-full max-w-[90vmin] aspect-square ${currentTheme.colors.border} border-8 rounded-lg shadow-2xl`}>
          <div className={`${currentTheme.colors.header} p-2 flex justify-between items-center text-xl font-bold ${currentTheme.colors.text}`}>
              <div className="flex items-center gap-2">
                <span>🍎</span>
                <span>{score}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span>{topScore}</span>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={cycleTheme} className="focus:outline-none">
                  🎨
                </button>
                <button onClick={resetToStart} className="focus:outline-none">
                  🔄
                </button>
              </div>
          </div>

          <div className="relative w-full aspect-square">
            <GameBoard snake={snake} food={food} theme={currentTheme} isEating={isEating} gameState={gameState} />
            <GameOverlay
              gameState={gameState}
              score={score}
              topScore={topScore}
              onStart={startGame}
              onResume={resumeGame}
              onRestart={startGame}
              speedLevel={speedLevel}
              onSpeedChange={setSpeedLevel}
              theme={currentTheme}
            />
            {isTouchDevice && (gameState === GameState.PLAYING || gameState === GameState.PAUSED) && (
              <MobileControls 
                onDirectionChange={handleDirectionChange} 
                theme={currentTheme}
                gameState={gameState}
              />
            )}
          </div>
      </div>
    </div>
  );
};

export default App;