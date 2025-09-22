import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GameButton } from "@/components/GameButton";

export function GameInstructions({
  toggleGame,
  gameActive,
  color,
}: {
  toggleGame: () => void;
  gameActive: boolean;
  color: string;
}) {
  return (
    <View style={styles.instructions}>
      <Text style={styles.instructionsText}>🐭</Text>
      <ThemedText style={styles.instructionsText}>Chase the Rat!</ThemedText>
      <ThemedText
        lightColor="#555"
        darkColor="#d3d3d3"
        style={styles.instructionsSubText}
      >
        Tap the moving rat to catch it
      </ThemedText>
      <ThemedText
        lightColor="#555"
        darkColor="#d3d3d3"
        style={styles.instructionsSubText}
      >
        Perfect for curious cats!{"  "}
        <Ionicons name={"paw"} size={12} color={color} />
      </ThemedText>
      <GameButton
        onPress={toggleGame}
        gameActive={gameActive}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  instructions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  instructionsText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  instructionsSubText: {
    fontSize: 14,
  },
});
