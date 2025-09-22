import { CatchEffect } from "@/components/CatchEffect";
import { GameButton } from "@/components/GameButton";
import { GameInstructions } from "@/components/GameInstructions";
import { RatComponent } from "@/components/RatComponent";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { catchFun } from "@/functions/catchFunction";
import { toggleGameFun } from "@/functions/toggleGame";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const CatChaseGame = () => {
  const [ratPosition, setRatPosition] = useState({ x: 150, y: 200 });
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [showCatchEffect, setShowCatchEffect] = useState(false);
  const [ratDirection, setRatDirection] = useState({ x: 1, y: 0.5 });
  const [ratSpeed, setRatSpeed] = useState(1);
  const [ratStopped, setRatStopped] = useState(false);

  const color = useThemeColor({}, "text");

  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null
  );
  const pauseFramesRef = useRef(0); // Move pauseFrames to a ref

  const GAME_WIDTH = Dimensions.get("window").width - 40;
  const GAME_HEIGHT = Dimensions.get("window").height - 180;
  const RAT_SIZE = 40;
  const toggleGame = () => {
    toggleGameFun({
      gameActive,
      setGameActive,
      setScore,
      setRatPosition,
      setRatStopped,
      setRatDirection,
      setRatSpeed,
    });
  };

  const catchRat = () => {
    // Call the catch function with the necessary parameters
    catchFun({
      gameActive,
      setScore,
      setShowCatchEffect,
      setRatPosition,
      setRatDirection,
      setRatStopped,
      GAME_WIDTH,
      GAME_HEIGHT,
    });
  };

  useEffect(() => {
    if (!gameActive) return;

    let frameCount = 0;
    let currentSpeed = ratSpeed;

    const moveRat = () => {
      frameCount++;

      setRatPosition((prev) => {
        if (pauseFramesRef.current > 0) {
          pauseFramesRef.current--;
          return prev;
        }

        // Stop movement if rat is caught
        if (ratStopped) {
          return prev;
        }

        let newX = prev.x + ratDirection.x * currentSpeed;
        let newY = prev.y + ratDirection.y * currentSpeed;

        if (newX < -RAT_SIZE) {
          newX = GAME_WIDTH;
        } else if (newX > GAME_WIDTH) {
          newX = -RAT_SIZE;
        }

        if (newY < -RAT_SIZE) {
          newY = GAME_HEIGHT;
        } else if (newY > GAME_HEIGHT) {
          newY = -RAT_SIZE;
        }

        // More frequent and natural direction changes
        if (Math.random() < 0.015) {
          const currentAngle = Math.atan2(ratDirection.y, ratDirection.x);
          // Smaller, more natural turns
          const turnAmount = (Math.random() - 0.5) * Math.PI * 0.4;
          const newAngle = currentAngle + turnAmount;

          const newDirX = Math.cos(newAngle);
          const newDirY = Math.sin(newAngle);

          setRatDirection({ x: newDirX, y: newDirY });

          // More varied speed changes
          currentSpeed = 0.5 + Math.random() * 2;
          setRatSpeed(currentSpeed);
        }

        // Continuous subtle movement variations for natural feel
        if (Math.random() < 0.08) {
          const noise = 0.15;
          const newDirX = ratDirection.x + (Math.random() - 0.5) * noise;
          const newDirY = ratDirection.y + (Math.random() - 0.5) * noise;

          const length = Math.sqrt(newDirX * newDirX + newDirY * newDirY);
          setRatDirection({
            x: newDirX / length,
            y: newDirY / length,
          });
        }

        // Random speed variations for more natural movement
        if (frameCount % 90 === 0) {
          currentSpeed = 0.4 + Math.random() * 2.2;
          setRatSpeed(currentSpeed);
        }

        // Occasional sudden direction changes (like a startled rat)
        if (Math.random() < 0.005) {
          const randomAngle = Math.random() * Math.PI * 2;
          setRatDirection({
            x: Math.cos(randomAngle),
            y: Math.sin(randomAngle),
          });
          currentSpeed = 1.5 + Math.random() * 1.5; // Burst of speed
          setRatSpeed(currentSpeed);
        }

        return { x: newX, y: newY };
      });

      if (gameActive) {
        animationRef.current = requestAnimationFrame(moveRat);
      }
    };

    animationRef.current = requestAnimationFrame(moveRat);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameActive, ratDirection, ratSpeed, ratStopped]);

  return (
    <ThemedSafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 60, height: 60 }}
          />
          <ThemedText style={styles.score}>Score: {score} </ThemedText>
        </View>
        {gameActive ? (
          <GameButton onPress={toggleGame} gameActive={gameActive} />
        ) : (
          <Ionicons name="paw" size={24} color={color} />
        )}
      </View>

      <ThemedView
        darkColor="#5c3d00"
        lightColor="#f1d69f"
        style={[styles.gameArea, { width: GAME_WIDTH, height: GAME_HEIGHT }]}
      >
        {gameActive && !showCatchEffect && (
          <RatComponent
            ratPosition={ratPosition}
            ratDirection={ratDirection}
            catchRat={catchRat}
          />
        )}

        {showCatchEffect && <CatchEffect ratPosition={ratPosition} />}

        {!gameActive && (
          <GameInstructions
            toggleGame={toggleGame}
            gameActive={gameActive}
            color={color}
          />
        )}
      </ThemedView>
    </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
  },
  gameArea: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#d35400",
    position: "relative",
    overflow: "hidden",
  },
});

export default CatChaseGame;
