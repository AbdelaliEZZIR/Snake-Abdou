const playSound = (audioB64: string, volume: number = 1.0) => {
  try {
    const audio = new Audio(audioB64);
    audio.volume = volume;
    audio.play().catch(e => {
      // Autoplay is often blocked by browsers, so we catch the error.
      console.error("Error playing sound:", e);
    });
  } catch (e) {
    console.error("Could not play audio:", e);
  }
};

// A short "blip" sound for eating food
const EAT_SOUND_B64 = "data:audio/wav;base64,UklGRkIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAACc/38=";

// A short descending tone for game over
const GAME_OVER_SOUND_B64 = "data:audio/wav;base64,UklGRpAAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYQAAAAAAP//8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8v/y//L/8.fA==";

// A simple click sound
const CLICK_SOUND_B64 = "data:audio/wav;base64,UklGRkYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAA";

export const playEatSound = () => playSound(EAT_SOUND_B64, 0.5);
export const playGameOverSound = () => playSound(GAME_OVER_SOUND_B64, 0.5);
export const playClickSound = () => playSound(CLICK_SOUND_B64, 0.7);
