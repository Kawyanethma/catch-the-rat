import { TouchableOpacity, Image, StyleSheet } from "react-native";

export function RatComponent({
  ratPosition,
  ratDirection,
  catchRat,
}: {
  ratPosition: { x: number; y: number };
  ratDirection: { x: number; y: number };
  catchRat: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={catchRat}
      style={[
        styles.rat,
        {
          left: ratPosition.x,
          top: ratPosition.y,
          transform: [
            {
              rotate: `${
                (Math.atan2(ratDirection.y, ratDirection.x) * 180) / Math.PI
              }deg`,
            },
          ],
        },
      ]}
    >
      <Image
        source={require("../assets/images/rat.png")}
        style={styles.ratImage}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rat: {
    position: "absolute",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  ratImage: {
    width: 80,
    height: 80,
    transform: [{ rotate: "-90deg" }],
  },
});
