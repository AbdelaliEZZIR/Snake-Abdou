export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export enum GameState {
  START,
  PLAYING,
  PAUSED,
  GAME_OVER,
}

export interface Coords {
  x: number;
  y: number;
}

export type SpeedLevel = 'Slow' | 'Average' | 'Fast';
