import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SpriteItem from "./SpriteItem";

function SpritesComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.spriteLabel}>
        <Text style={styles.spriteText}>Sprites</Text>
      </View>
      <ScrollView horizontal style={{ height: "100%" }}>
        <View style={styles.scrollContainer}>
          <SpriteItem />
          <SpriteItem />

          <SpriteItem />

          <SpriteItem />

          <SpriteItem />

          <SpriteItem />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 0,
    backgroundColor: "#FFF0D9",
    width: "100%",
    minHeight: 56,
    height: 100,
    borderRadius: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    overflow: "scroll",
  },
  scrollContainer: {
    backgroundColor: "#FFF0D9",
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
  },
  spriteLabel: {
    backgroundColor: "#FDE4BE",
    width: 30,
    minHeight: 20,
    height: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  spriteText: {
    transform: [{ rotate: "-90deg" }],
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
  },
});

export default SpritesComponent;
