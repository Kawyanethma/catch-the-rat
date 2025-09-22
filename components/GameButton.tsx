import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function GameButton({
  onPress,
  gameActive,
  style,
}: {
  onPress: () => void;
  gameActive: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: gameActive ? "#e74c3c" : "#3498db" },
        style,
      ]}
    >
      <Ionicons name={gameActive ? "stop" : "play"} size={24} color="#fff" />
      <Text style={styles.buttonText}>
        {gameActive ? "Stop" : "Start Game"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
