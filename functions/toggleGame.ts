import { Dispatch, SetStateAction } from "react";

const toggleGameFun = ({
  gameActive,
  setGameActive,
  setScore,
  setRatPosition,
  setRatStopped,
  setRatDirection,
  setRatSpeed,
}: {
  gameActive: boolean;
  setGameActive: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>;
  setRatPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setRatStopped: Dispatch<SetStateAction<boolean>>;
  setRatDirection: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setRatSpeed: Dispatch<SetStateAction<number>>;
}) => {
  setGameActive(!gameActive);
  if (!gameActive) {
    setScore(0);
    setRatPosition({ x: 150, y: 200 });
    setRatStopped(false); // Reset rat stopped state
    // Set random initial direction
    const initialAngle = Math.random() * Math.PI * 2;
    setRatDirection({
      x: Math.cos(initialAngle),
      y: Math.sin(initialAngle),
    });
    setRatSpeed(0.8 + Math.random() * 1.2); // Random initial speed
  }
};

export { toggleGameFun };
