import { Dispatch, SetStateAction } from 'react';

const catchFun = ({
  gameActive,
  setScore,
  setShowCatchEffect,
  setRatPosition,
  setRatDirection,
  setRatStopped,
  GAME_WIDTH,
  GAME_HEIGHT,
}: {
  gameActive: boolean;
  setScore: Dispatch<SetStateAction<number>>;
  setShowCatchEffect: Dispatch<SetStateAction<boolean>>;
  setRatPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setRatDirection: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setRatStopped: Dispatch<SetStateAction<boolean>>;
  GAME_WIDTH: number;
  GAME_HEIGHT: number;
}) => {
  if (!gameActive) return;

  setScore((prev) => prev + 1);
  setShowCatchEffect(true);
  setRatStopped(true); // Stop the rat movement

  // After a delay, spawn a new rat at a random position
  setTimeout(() => {
    setRatPosition({
      x: Math.random() * GAME_WIDTH,
      y: Math.random() * GAME_HEIGHT,
    });

    const newAngle = Math.random() * Math.PI * 2;
    setRatDirection({
      x: Math.cos(newAngle),
      y: Math.sin(newAngle),
    });

    setRatStopped(false); // Resume movement
    setShowCatchEffect(false);
  }, 1000); // Wait 1 second before spawning new rat
};

export { catchFun };

