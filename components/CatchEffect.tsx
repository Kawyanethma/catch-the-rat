import { View, Image, StyleSheet } from "react-native";

export function CatchEffect({
  ratPosition,
}: {
  ratPosition: { x: number; y: number };
}) {
  return (
    <View
      style={[
        styles.catchEffect,
        {
          left: ratPosition.x - 20,
          top: ratPosition.y - 20,
        },
      ]}
    >
      <Image
        source={require("../assets/images/poof.png")}
        style={styles.poofImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  catchEffect: {
    position: "absolute",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  poofImage: {
    width: 100,
    height: 100,
  },
});
