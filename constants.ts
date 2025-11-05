import { SpeedLevel } from './types';

export const BOARD_SIZE = 20;
export const SPEED_LEVELS: { [key in SpeedLevel]: number } = {
  Slow: 200,
  Average: 120,
  Fast: 70,
};
export const SPEED_INCREMENT = 5;
export const MIN_SPEED_MS = 50;
